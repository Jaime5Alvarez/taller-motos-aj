import { S3Client } from "@aws-sdk/client-s3";

export const s3Client = new S3Client({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

export const AWS_CONFIG = {
  bucketName: process.env.AWS_S3_BUCKET_NAME || "",
  region: process.env.AWS_REGION || "us-east-1",
  maxFileSize: 5 * 1024 * 1024, // 5MB
  allowedTypes: ["image/jpeg", "image/png", "image/webp"],
} as const;

/**
 * Genera la URL directa de S3 para un archivo
 * @param key La clave del archivo en S3
 * @returns URL directa de S3
 */
export function getS3DirectUrl(key: string): string {
  return `https://${AWS_CONFIG.bucketName}.s3.${AWS_CONFIG.region}.amazonaws.com/${key}`;
}
