import { NextResponse } from "next/server";
import { auth } from "@/auth";
import sharp from "sharp";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const session = await auth();
  if (!session || (session.user as { role?: string })?.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    if (!file) return NextResponse.json({ error: "No file uploaded" }, { status: 400 });

    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      return NextResponse.json({ error: "Only image files are allowed" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    let processedBuffer: Buffer;
    let contentType = "image/webp";
    let extension = "webp";

    try {
      let sharpInstance = sharp(buffer);
      const metadata = await sharpInstance.metadata();
      const maxWidth = 1200;
      if (metadata.width && metadata.width > maxWidth) {
        sharpInstance = sharpInstance.resize({ width: maxWidth, withoutEnlargement: true });
      }
      processedBuffer = await sharpInstance.webp({ quality: 85 }).toBuffer();
    } catch {
      processedBuffer = buffer;
      contentType = file.type;
      extension = file.name.split(".").pop() || "bin";
    }

    const filename = `newsletter-${Date.now()}-${Math.random().toString(36).substring(7)}.${extension}`;
    const bunnyUrl = `https://${process.env.BUNNY_STORAGE_API_HOST}/${process.env.BUNNY_STORAGE_ZONE}/newsletter/${filename}`;

    const uploadRes = await fetch(bunnyUrl, {
      method: "PUT",
      headers: {
        AccessKey: process.env.BUNNY_ACCESS_KEY!,
        "Content-Type": contentType,
      },
      body: new Uint8Array(processedBuffer),
    });

    if (!uploadRes.ok) {
      throw new Error(`Bunny CDN upload failed: ${await uploadRes.text()}`);
    }

    const finalUrl = `https://${process.env.BUNNY_CDN_HOSTNAME}/newsletter/${filename}`;
    const displayName = file.name || filename;
    const folderIdRaw = formData.get("folderId");
    const folderId = typeof folderIdRaw === "string" && folderIdRaw.trim() ? folderIdRaw.trim() : null;
    await prisma.newsletterMedia.create({
      data: {
        url: finalUrl,
        name: displayName.length > 255 ? displayName.slice(0, 252) + "..." : displayName,
        folderId: folderId || undefined,
      },
    });
    return NextResponse.json({ url: finalUrl });
  } catch (error: unknown) {
    console.error("Newsletter image upload error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Upload failed" },
      { status: 500 }
    );
  }
}
