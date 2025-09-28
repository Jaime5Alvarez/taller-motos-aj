import { CopyObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { AWS_CONFIG, s3Client } from "@/lib/aws-config";

/**
 * Mueve una imagen de la carpeta temporal a la carpeta permanente
 * @param tempImageUrl URL de la imagen temporal
 * @returns URL de la imagen permanente
 */
export async function moveImageFromTempToPermanent(
  tempImageUrl: string,
): Promise<string> {
  try {
    // Extraer la key temporal de la URL
    const tempUrl = new URL(tempImageUrl);
    const tempKey = tempUrl.pathname.substring(1); // Remover el '/' inicial

    // Verificar que es una imagen temporal
    if (!tempKey.startsWith("temp/")) {
      throw new Error("La imagen no está en la carpeta temporal");
    }

    // Generar nueva key permanente
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2);
    const fileExtension = tempKey.split(".").pop();
    const permanentKey = `vehicles/${timestamp}-${randomString}.${fileExtension}`;

    // Copiar de temp a permanente
    const copyCommand = new CopyObjectCommand({
      Bucket: AWS_CONFIG.bucketName,
      CopySource: `${AWS_CONFIG.bucketName}/${tempKey}`,
      Key: permanentKey,
      MetadataDirective: "REPLACE",
      Metadata: {
        movedAt: new Date().toISOString(),
        temporary: "false",
      },
    });

    await s3Client.send(copyCommand);

    // Eliminar la imagen temporal
    const deleteCommand = new DeleteObjectCommand({
      Bucket: AWS_CONFIG.bucketName,
      Key: tempKey,
    });

    await s3Client.send(deleteCommand);

    // Construir URL permanente usando nuestro proxy
    const permanentUrl = `/api/image/${permanentKey}`;

    console.log(
      `Image moved from temp to permanent: ${tempKey} -> ${permanentKey}`,
    );

    return permanentUrl;
  } catch (error) {
    console.error(
      `Error moving image from temp to permanent: ${tempImageUrl}`,
      error,
    );
    throw new Error("Failed to move image from temporary to permanent storage");
  }
}

/**
 * Genera un ID de sesión único para el usuario
 */
export function generateSessionId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2)}`;
}
