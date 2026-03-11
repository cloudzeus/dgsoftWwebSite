/**
 * SoftOne Web Services API client.
 * All responses from SoftOne are decoded from ANSI (Windows-1253 / Greek) to UTF-8.
 * Use decodeSoftOneResponse() or SOFTONE_RESPONSE_ENCODING in any SoftOne integration.
 * @see https://softone.gr/ws/
 *
 * Data model (hierarchy):
 *   - Object (e.g. CUSTOMER) = one business object
 *   - Object contains multiple Tables (e.g. CUSTOMER has tables TRDR, TRDEXTRA, …)
 *   - Each Table contains multiple Fields
 * So: one Object → many Tables → many Fields per Table.
 */

import iconv from "iconv-lite"

/** Use this encoding when decoding any SoftOne API response (ANSI Greek → UTF-8). */
export const SOFTONE_RESPONSE_ENCODING = "win1253" as const

/** Decode SoftOne response body from Windows-1253 (ANSI Greek) to UTF-8. Always use for SoftOne API. */
export function decodeSoftOneResponse(buffer: ArrayBuffer): string {
  return iconv.decode(Buffer.from(buffer), SOFTONE_RESPONSE_ENCODING)
}

const getBaseUrl = () => {
  const url = process.env.SOFTONE_URL?.replace(/\/$/, "") ?? "";
  return url ? `${url}/s1services` : "";
};

export type SoftOneLoginObjsItem = {
  COMPANY: string;
  COMPANYNAME: string;
  BRANCH: string;
  BRANCHNAME: string;
  MODULE: string;
  MODULENAME: string;
  REFID: string;
  REFIDNAME: string;
};

export type SoftOneLoginResponse = {
  success: boolean;
  clientID?: string;
  objs?: SoftOneLoginObjsItem[];
};

export type SoftOneAuthenticateResponse = {
  success: boolean;
  clientID?: string;
};

export type SoftOneErrorResponse = {
  success: false;
  code?: number;
  message?: string;
};

export type SoftOnePingResponse = {
  ok: boolean;
  message?: string;
};

export type SoftOneObjectItem = {
  name: string;
  type: string;
  caption: string;
};

/** One object contains many tables (getObjectTables). */
export type SoftOneGetObjectsResponse = {
  success: boolean;
  count?: number;
  objects?: SoftOneObjectItem[];
};

/** One table belongs to one object; getObjectTables returns these for an object. */
export type SoftOneTableItem = {
  name: string;
  dbname?: string;
  caption?: string;
  filltype?: string;
};

/** One table contains many fields (getTableFields). */
export type SoftOneFieldItem = {
  name: string;
  alias?: string;
  fullname?: string;
  caption?: string;
  size?: string;
  type?: string;
  edittype?: string;
  readOnly?: boolean;
  visible?: boolean;
  required?: boolean;
};

export type SoftOneGetObjectTablesResponse = {
  success: boolean;
  count?: number;
  tables?: SoftOneTableItem[];
  Tables?: SoftOneTableItem[];
};

export type SoftOneGetTableFieldsResponse = {
  success: boolean;
  count?: number;
  fields?: SoftOneFieldItem[];
  Fields?: SoftOneFieldItem[];
};

/**
 * Call SoftOne s1services JSON API.
 */
async function softOneFetch<T>(body: Record<string, unknown>): Promise<T | SoftOneErrorResponse> {
  const baseUrl = getBaseUrl();
  if (!baseUrl) {
    return { success: false, code: -1, message: "SOFTONE_URL is not configured" };
  }
  const username = process.env.SOFTONE_USERNAME;
  const password = process.env.SOFTONE_PASSWORD;
  const appId = process.env.SOFTONE_APP_ID;
  if (!username || !password || !appId) {
    return { success: false, code: -1, message: "SOFTONE_USERNAME, SOFTONE_PASSWORD or SOFTONE_APP_ID is missing" };
  }

  const logBody = { ...body }
  if ("password" in logBody) (logBody as Record<string, unknown>).password = "[REDACTED]"
  console.log("[SoftOne] POST body:", JSON.stringify(logBody, null, 2))

  const res = await fetch(baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const arrayBuffer = await res.arrayBuffer();
  const decoded = decodeSoftOneResponse(arrayBuffer);
  let data: T | SoftOneErrorResponse;
  try {
    data = JSON.parse(decoded || "{}") as T | SoftOneErrorResponse;
  } catch {
    return { success: false, message: "Invalid response from SoftOne", code: -1 };
  }
  return data;
}

/**
 * Login to SoftOne. Returns clientID and list of companies/branches (objs).
 * Use objs[0] to call authenticate and get a session clientID.
 */
export async function softOneLogin(): Promise<SoftOneLoginResponse | SoftOneErrorResponse> {
  return softOneFetch<SoftOneLoginResponse>({
    service: "login",
    username: process.env.SOFTONE_USERNAME,
    password: process.env.SOFTONE_PASSWORD,
    appId: process.env.SOFTONE_APP_ID,
  });
}

/**
 * Authenticate with company/branch/module/ref from login response.
 * Returns the final clientID to use for all subsequent API calls.
 */
export async function softOneAuthenticate(
  temporaryClientId: string,
  company: string,
  branch: string,
  module: string,
  refId: string
): Promise<SoftOneAuthenticateResponse | SoftOneErrorResponse> {
  return softOneFetch<SoftOneAuthenticateResponse>({
    service: "authenticate",
    clientID: temporaryClientId,
    COMPANY: company,
    BRANCH: branch,
    MODULE: module,
    REFID: refId,
  });
}

/**
 * Login and authenticate in one flow. Uses company 1000 if present in login objs, otherwise first.
 * Returns the session clientID or error.
 */
export async function softOneLoginAndAuthenticate(): Promise<
  { clientID: string } | SoftOneErrorResponse
> {
  const loginRes = await softOneLogin();
  if (!loginRes.success || !("clientID" in loginRes) || !loginRes.clientID) {
    return {
      success: false,
      code: (loginRes as SoftOneErrorResponse).code,
      message: (loginRes as SoftOneErrorResponse).message ?? "Login failed",
    };
  }
  const objs = (loginRes as SoftOneLoginResponse).objs;
  if (!objs?.length) {
    return { success: false, message: "No company/branch returned from login" };
  }
  const preferred = objs.find((o) => String(o.COMPANY) === "1000") ?? objs[0];
  const authRes = await softOneAuthenticate(
    loginRes.clientID,
    preferred.COMPANY,
    preferred.BRANCH,
    preferred.MODULE,
    preferred.REFID
  );
  if (!authRes.success || !authRes.clientID) {
    return {
      success: false,
      code: (authRes as SoftOneErrorResponse).code,
      message: (authRes as SoftOneErrorResponse).message ?? "Authenticate failed",
    };
  }
  return { clientID: authRes.clientID };
}

/**
 * Ping SoftOne to verify WebModule is reachable (no auth).
 */
export async function softOnePing(): Promise<SoftOnePingResponse> {
  const baseUrl = getBaseUrl();
  if (!baseUrl) {
    return { ok: false, message: "SOFTONE_URL is not configured" };
  }
  try {
    const res = await fetch(`${baseUrl}?ping`);
    const arrayBuffer = await res.arrayBuffer();
    const text = decodeSoftOneResponse(arrayBuffer);
    const ok = res.ok && text.toLowerCase().includes("ping from softone");
    return { ok, message: ok ? text.trim() : text || res.statusText };
  } catch (e) {
    return { ok: false, message: e instanceof Error ? e.message : "Network error" };
  }
}

/**
 * Validate that a clientID is still valid by calling getObjects (lightweight).
 */
export async function softOneValidateSession(clientID: string): Promise<{
  valid: boolean;
  message?: string;
}> {
  const appId = process.env.SOFTONE_APP_ID;
  if (!appId) return { valid: false, message: "SOFTONE_APP_ID not set" };
  const res = await softOneFetch<{ success: boolean }>({
    service: "getObjects",
    clientID,
    appId,
  });
  if (res && "success" in res && res.success) {
    return { valid: true };
  }
  const err = res as SoftOneErrorResponse;
  return {
    valid: false,
    message: err.message ?? `Code: ${err.code ?? "unknown"}`,
  };
}

/**
 * Get all application Business Objects (requires authenticated clientID).
 */
export async function getSoftOneObjects(
  clientID: string
): Promise<{ success: true; count: number; objects: SoftOneObjectItem[] } | SoftOneErrorResponse> {
  const appId = process.env.SOFTONE_APP_ID;
  if (!appId) return { success: false, message: "SOFTONE_APP_ID not set", code: -1 };
  const res = await softOneFetch<SoftOneGetObjectsResponse>({
    service: "getObjects",
    clientID,
    appId,
  });
  if (res && "success" in res && res.success && Array.isArray((res as SoftOneGetObjectsResponse).objects)) {
    const data = res as SoftOneGetObjectsResponse;
    return {
      success: true,
      count: data.count ?? data.objects!.length,
      objects: data.objects!,
    };
  }
  return (res as SoftOneErrorResponse) ?? { success: false, message: "Failed to get objects" };
}

/**
 * Get all tables of one object (e.g. CUSTOMER). Object → many Tables. Requires authenticated clientID.
 * Sends exactly: service "getObjectTables", clientID, appId, OBJECT, VERSION "1".
 */
export async function getSoftOneObjectTables(
  clientID: string,
  objectName: string
): Promise<
  | { success: true; count: number; tables: SoftOneTableItem[] }
  | SoftOneErrorResponse
> {
  const appId = process.env.SOFTONE_APP_ID;
  if (!appId) return { success: false, message: "SOFTONE_APP_ID not set", code: -1 };
  const body = {
    service: "getObjectTables" as const,
    clientID,
    appId: String(appId),
    OBJECT: objectName,
    VERSION: "1",
  };
  const res = await softOneFetch<SoftOneGetObjectTablesResponse>(body);
  if (
    res &&
    "success" in res &&
    res.success &&
    (Array.isArray((res as SoftOneGetObjectTablesResponse).tables) ||
      Array.isArray((res as SoftOneGetObjectTablesResponse).Tables))
  ) {
    const data = res as SoftOneGetObjectTablesResponse;
    const rawTables = data.tables ?? data.Tables ?? [];
    const tables = rawTables.map((t: Record<string, unknown>) => ({
      name: String(t.name ?? (t as { NAME?: string }).NAME ?? t.Name ?? ""),
      dbname: t.dbname != null ? String(t.dbname) : (t as { DBNAME?: string }).DBNAME != null ? String((t as { DBNAME?: string }).DBNAME) : undefined,
      caption: t.caption != null ? String(t.caption) : (t as { Caption?: string }).Caption != null ? String((t as { Caption?: string }).Caption) : undefined,
      filltype: t.filltype != null ? String(t.filltype) : undefined,
    })) as SoftOneTableItem[];
    return {
      success: true,
      count: data.count ?? tables.length,
      tables,
    };
  }
  return (res as SoftOneErrorResponse) ?? { success: false, message: "Failed to get tables" };
}

/**
 * Get all fields of one table of an object (e.g. object CUSTOMER, table TRDR or TRDEXTRA). Table → many Fields. Requires authenticated clientID.
 */
export async function getSoftOneTableFields(
  clientID: string,
  objectName: string,
  tableName: string
): Promise<
  | { success: true; count: number; fields: SoftOneFieldItem[] }
  | SoftOneErrorResponse
> {
  const appId = process.env.SOFTONE_APP_ID;
  if (!appId) return { success: false, message: "SOFTONE_APP_ID not set", code: -1 };
  const res = await softOneFetch<SoftOneGetTableFieldsResponse>({
    service: "getTableFields",
    clientID,
    appId,
    OBJECT: objectName,
    TABLE: tableName,
    VERSION: "1",
  });
  if (
    res &&
    "success" in res &&
    res.success &&
    (Array.isArray((res as SoftOneGetTableFieldsResponse).fields) ||
      Array.isArray((res as SoftOneGetTableFieldsResponse).Fields))
  ) {
    const data = res as SoftOneGetTableFieldsResponse;
    const rawFields = data.fields ?? data.Fields ?? [];
    const fields = rawFields.map((f: Record<string, unknown>) => ({
      name: String(f.name ?? (f as { NAME?: string }).NAME ?? f.Name ?? ""),
      alias: f.alias != null ? String(f.alias) : undefined,
      fullname: f.fullname != null ? String(f.fullname) : undefined,
      caption: f.caption != null ? String(f.caption) : (f.Caption != null ? String((f as { Caption?: string }).Caption) : undefined),
      size: f.size != null ? String(f.size) : undefined,
      type: f.type != null ? String(f.type) : (f.Type != null ? String((f as { Type?: string }).Type) : undefined),
      edittype: f.edittype != null ? String(f.edittype) : undefined,
      readOnly: f.readOnly ?? (f as { READONLY?: boolean }).READONLY,
      visible: f.visible ?? (f as { Visible?: boolean }).Visible,
      required: f.required ?? (f as { Required?: boolean }).Required,
    })) as SoftOneFieldItem[];
    return {
      success: true,
      count: data.count ?? fields.length,
      fields,
    };
  }
  return (res as SoftOneErrorResponse) ?? { success: false, message: "Failed to get fields" };
}

export type SoftOneTableWithFields = {
  name: string;
  caption?: string;
  dbname?: string;
  fields: SoftOneFieldItem[];
};

/**
 * Get all fields of an object: every table in the object, each with its fields. Object → tables → fields (e.g. CUSTOMER returns TRDR, TRDEXTRA, … each with their fields).
 */
export async function getSoftOneObjectAllFields(
  clientID: string,
  objectName: string
): Promise<
  | { success: true; tables: SoftOneTableWithFields[] }
  | SoftOneErrorResponse
> {
  const tablesRes = await getSoftOneObjectTables(clientID, objectName);
  if (!("tables" in tablesRes)) return tablesRes;

  const tablesWithFields: SoftOneTableWithFields[] = [];

  for (const table of tablesRes.tables) {
    const fieldsRes = await getSoftOneTableFields(clientID, objectName, table.name);
    tablesWithFields.push({
      name: table.name,
      caption: table.caption,
      dbname: table.dbname,
      fields: "fields" in fieldsRes ? fieldsRes.fields : [],
    });
  }

  return { success: true, tables: tablesWithFields };
}

export type SoftOneStatusResult = {
  connection: { ok: boolean; message?: string };
  authentication: { hasToken: boolean; valid: boolean; message?: string };
};

/**
 * Get connection and authentication status for use in server components.
 * Pass the clientID from the softone_client_id cookie (or undefined if not set).
 */
export async function getSoftOneStatus(
  clientId: string | undefined
): Promise<SoftOneStatusResult> {
  const [connection, validation] = await Promise.all([
    softOnePing(),
    clientId
      ? softOneValidateSession(clientId)
      : Promise.resolve({ valid: false, message: "No session" }),
  ]);
  return {
    connection: { ok: connection.ok, message: connection.message },
    authentication: {
      hasToken: !!clientId,
      valid: validation.valid,
      message: validation.message,
    },
  };
}
