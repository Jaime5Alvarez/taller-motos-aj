import { PutObjectCommand } from "@aws-sdk/client-s3";
import { type NextRequest, NextResponse } from "next/server";
import { AWS_CONFIG, s3Client } from "@/lib/aws-config";
import { badResponsePrintable } from "@/lib/server-errors";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const sessionId = formData.get("sessionId") as string;

    if (!file) {
      return badResponsePrintable("No se proporcionó un archivo");
    }

    if (!sessionId) {
      return badResponsePrintable("No se proporcionó un sessionId");
    }

    // Validar tipo de archivo
    if (
      !AWS_CONFIG.allowedTypes.includes(
        file.type as (typeof AWS_CONFIG.allowedTypes)[number],
      )
    ) {
      return badResponsePrintable(
        "Tipo de archivo inválido. Solo se permiten JPEG, PNG y WebP",
      );
    }

    // Validar tamaño
    if (file.size > AWS_CONFIG.maxFileSize) {
      return badResponsePrintable(
        "Archivo demasiado grande. El tamaño máximo es 5MB",
      );
    }

    // Generar nombre único para el archivo temporal
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2);
    const fileExtension = file.name.split(".").pop();
    const fileName = `temp/${sessionId}/${timestamp}-${randomString}.${fileExtension}`;

    // Convertir archivo a buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Subir a S3 en carpeta temporal
    const uploadCommand = new PutObjectCommand({
      Bucket: AWS_CONFIG.bucketName,
      Key: fileName,
      Body: buffer,
      ContentType: file.type,
      // Hacer la imagen temporalmente pública para preview
      CacheControl: "max-age=86400", // 24 horas
      // Agregar metadata para limpieza automática
      Metadata: {
        uploadedAt: new Date().toISOString(),
        sessionId: sessionId,
        temporary: "true",
      },
    });

    await s3Client.send(uploadCommand);

    // Construir URL usando nuestro proxy para imágenes
    const imageUrl = `/api/image/${fileName}`;

    return NextResponse.json({
      success: true,
      imageUrl,
      fileName,
      temporary: true,
      sessionId,
    });
  } catch (error) {
    console.error("Error uploading temporary image:", error);
    return NextResponse.json(
      { error: "Failed to upload temporary image" },
      { status: 500 },
    );
  }
}
