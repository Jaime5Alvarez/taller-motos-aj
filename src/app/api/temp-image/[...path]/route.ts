import { GetObjectCommand } from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";
import { AWS_CONFIG, s3Client } from "@/lib/aws-config";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path } = await params;
    const imagePath = path.join('/');
    
    // Permitir acceso a imágenes temporales y permanentes
    if (!imagePath.startsWith('temp/') && !imagePath.startsWith('vehicles/')) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    // Obtener la imagen de S3
    const getCommand = new GetObjectCommand({
      Bucket: AWS_CONFIG.bucketName,
      Key: imagePath,
    });

    const response = await s3Client.send(getCommand);
    
    if (!response.Body) {
      return new NextResponse('Image not found', { status: 404 });
    }

    // Convertir el stream a buffer
    const chunks: Uint8Array[] = [];
    const reader = response.Body.transformToWebStream().getReader();
    
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
    }
    
    const buffer = Buffer.concat(chunks);

    // Retornar la imagen con headers apropiados
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': response.ContentType || 'image/jpeg',
        'Cache-Control': 'max-age=3600', // 1 hora
        'Content-Length': buffer.length.toString(),
      },
    });
  } catch (error) {
    console.error('Error serving temp image:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
