import { z } from "zod";

const featureSchema = z.object({
  feature: z
    .string()
    .min(2, "La característica debe tener al menos 2 caracteres")
    .max(100, "La característica no puede exceder 100 caracteres"),
});

export const zVehicleSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder 100 caracteres"),
  description: z
    .string()
    .min(10, "La descripción debe tener al menos 10 caracteres")
    .max(500, "La descripción no puede exceder 500 caracteres"),
  price: z
    .number()
    .min(0.01, "El precio debe ser mayor a 0")
    .max(999999, "El precio no puede exceder 999,999"),
  mileage: z
    .number()
    .int("El kilometraje debe ser un número entero")
    .min(0, "El kilometraje no puede ser negativo")
    .max(999999, "El kilometraje no puede exceder 999,999"),
  year: z
    .number()
    .min(1900, "El año debe ser mayor a 1900")
    .max(new Date().getFullYear() + 1, "El año no puede ser futuro"),
  fuel: z.enum(["gasolina", "diesel", "eléctrico", "híbrido"], {
    message: "Selecciona un tipo de combustible válido",
  }),
  status: z
    .enum(["available", "sold"], {
      message: "Selecciona un estado válido",
    })
    .default("available"),
  features: z.array(featureSchema).optional(),
  images: z
    .array(
      z.object({
        url: z.url("URL de imagen inválida"),
        order: z.number().min(0, "El orden debe ser mayor o igual a 0"),
      }),
    )
    .min(1, "Debe agregar al menos una imagen"),
});

export type VehicleSchema = z.infer<typeof zVehicleSchema>;
