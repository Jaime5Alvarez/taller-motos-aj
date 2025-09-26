import { z } from "zod";

const vehicleSchema = z.object({
  carName: z
    .string()
    .min(2, "El nombre del vehículo debe tener al menos 2 caracteres")
    .max(100, "El nombre del vehículo no puede exceder 100 caracteres"),
  licensePlate: z
    .string()
    .min(6, "La matrícula debe tener al menos 6 caracteres")
    .max(15, "La matrícula no puede exceder 15 caracteres")
    .regex(
      /^[A-Z0-9\-\s]+$/i,
      "La matrícula solo puede contener letras, números, guiones y espacios",
    ),
});

export const zClientSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder 100 caracteres"),
  email: z
    .string()
    .email("Debe ser un email válido")
    .max(255, "El email no puede exceder 255 caracteres"),
  phone: z
    .string()
    .min(9, "El teléfono debe tener al menos 9 caracteres")
    .max(20, "El teléfono no puede exceder 20 caracteres")
    .regex(
      /^(\+34|0034|34)?[6789]\d{8}$|^(\+\d{1,3})?[\s.-]?\d{3,4}[\s.-]?\d{3}[\s.-]?\d{3,4}$/,
      "Formato de teléfono inválido",
    ),
  vehicles: z.array(vehicleSchema).optional(),
});

export type ClientSchema = z.infer<typeof zClientSchema>;
