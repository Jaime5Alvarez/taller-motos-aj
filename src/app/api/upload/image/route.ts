import { PutObjectCommand } from "@aws-sdk/client-s3";
import { type NextRequest, NextResponse } from "next/server";
import { AWS_CONFIG, s3Client } from "@/lib/aws-config";
import { badResponsePrintable } from "@/lib/server-errors";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return badResponsePrintable("No se proporcionó un archivo");
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

    // Generar nombre único para el archivo
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2);
    const fileExtension = file.name.split(".").pop();
    const fileName = `vehicles/${timestamp}-${randomString}.${fileExtension}`;

    // Convertir archivo a buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Subir a S3
    const uploadCommand = new PutObjectCommand({
      Bucket: AWS_CONFIG.bucketName,
      Key: fileName,
      Body: buffer,
      ContentType: file.type,
      // Removido ACL ya que el bucket no soporta ACLs
    });

    await s3Client.send(uploadCommand);

    // Construir URL pública
    const imageUrl = `https://${AWS_CONFIG.bucketName}.s3.${AWS_CONFIG.region}.amazonaws.com/${fileName}`;

    return NextResponse.json({
      success: true,
      imageUrl,
      fileName,
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    return NextResponse.json(
      { error: "Failed to upload image" },
      { status: 500 },
    );
  }
}
