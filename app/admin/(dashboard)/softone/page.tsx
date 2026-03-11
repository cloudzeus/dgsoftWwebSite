import { cookies } from "next/headers"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlugIcon, CheckCircleIcon, XCircleIcon, BoxIcon } from "lucide-react"
import { getSoftOneStatus, getSoftOneObjects } from "@/lib/softone"
import { SOFTONE_CLIENT_ID_COOKIE } from "@/lib/softone-cookie"
import {
  revalidateSoftOneAction,
  loginSoftOneAction,
  logoutSoftOneAction,
  showObjectsAction,
} from "./actions"
import { ObjectCardsWithSearch } from "./object-cards-with-search"

export const dynamic = "force-dynamic"

type Props = { searchParams: Promise<{ error?: string; showObjects?: string }> }

export default async function SoftOnePage({ searchParams }: Props) {
  const { error: errorParam, showObjects: showObjectsParam } = await searchParams
  const cookieStore = await cookies()
  const clientId = cookieStore.get(SOFTONE_CLIENT_ID_COOKIE)?.value
  const status = await getSoftOneStatus(clientId)

  let objectsResult: Awaited<ReturnType<typeof getSoftOneObjects>> | null = null
  if (showObjectsParam && clientId) {
    objectsResult = await getSoftOneObjects(clientId)
  }

  return (
    <div className="flex flex-1 flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">SoftOne</h1>
        <p className="text-muted-foreground">
          Connection and authentication status for SoftOne Web Services.
        </p>
      </div>

      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PlugIcon className="h-5 w-5" />
            Connection & authentication
          </CardTitle>
          <CardDescription>
            Check if SoftOne WebModule is reachable and the session is authenticated. The token is
            kept for as long as the browser is open.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {errorParam && (
            <div className="rounded-md bg-destructive/10 text-destructive text-sm p-3">
              {decodeURIComponent(errorParam)}
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            <form action={revalidateSoftOneAction}>
              <Button type="submit" variant="default">
                Check connection
              </Button>
            </form>
            <form action={loginSoftOneAction}>
              <Button type="submit" variant="secondary">
                Login to SoftOne
              </Button>
            </form>
            <form action={logoutSoftOneAction}>
              <Button type="submit" variant="outline">
                Clear session
              </Button>
            </form>
            <form action={showObjectsAction}>
              <Button
                type="submit"
                variant="secondary"
                disabled={!status.authentication.valid}
                title={!status.authentication.valid ? "Log in first" : "Load all SoftOne objects"}
              >
                <BoxIcon className="h-4 w-4" />
                Get all objects
              </Button>
            </form>
          </div>

          <div className="grid gap-4 rounded-lg border p-4">
            <p className="text-xs text-muted-foreground font-medium">Flow: 1) Login to SoftOne → 2) Get all objects → 3) Click an object’s table icon to load tables → 4) Expand a table to load its fields.</p>
            <div className="flex items-start gap-3">
              {status.connection.ok ? (
                <CheckCircleIcon className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
              ) : (
                <XCircleIcon className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
              )}
              <div>
                <p className="font-medium">Connection (ping)</p>
                <p className="text-sm text-muted-foreground">
                  {status.connection.ok
                    ? "SoftOne WebModule is reachable."
                    : "Cannot reach SoftOne WebModule."}
                </p>
                {status.connection.message && (
                  <p className="text-xs text-muted-foreground mt-1 font-mono">
                    {status.connection.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-start gap-3">
              {status.authentication.valid ? (
                <CheckCircleIcon className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
              ) : (
                <XCircleIcon className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
              )}
              <div>
                <p className="font-medium">Authentication</p>
                <p className="text-sm text-muted-foreground">
                  {status.authentication.valid
                    ? "Session is valid. You can call SoftOne services."
                    : status.authentication.hasToken
                      ? "Session expired or invalid."
                      : "No session. Use “Login to SoftOne” to authenticate."}
                </p>
                {status.authentication.message && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {status.authentication.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {showObjectsParam && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Business objects</h2>
          {!clientId ? (
            <p className="text-sm text-muted-foreground">
              Log in to SoftOne first, then click “Get all objects”.
            </p>
          ) : objectsResult && "success" in objectsResult && objectsResult.success ? (
            <ObjectCardsWithSearch objects={objectsResult.objects} />
          ) : objectsResult && "message" in objectsResult ? (
            <div className="rounded-md bg-destructive/10 text-destructive text-sm p-3">
              {(objectsResult as { message?: string }).message ?? "Failed to load objects"}
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}
