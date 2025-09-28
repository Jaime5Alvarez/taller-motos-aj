import { NextResponse } from "next/server";
import { badResponsePrintable } from "@/lib/server-errors";
import { zVehicleSchema } from "@/lib/validations/vehicle";
import { VehicleService } from "@/modules/vehicles/application/services/vehicle-service";

const vehicleService = new VehicleService();

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await request.json();

    // Validar datos
    const validationResult = zVehicleSchema.safeParse(body);
    if (!validationResult.success) {
      return badResponsePrintable(
        "Datos inválidos",
        validationResult.error.issues.map((issue) => issue.message),
      );
    }

    const { features, images, ...vehicleData } = validationResult.data;

    // Extraer solo las características válidas
    const featuresList =
      features?.map((f) => f.feature).filter((f) => f && f.trim() !== "") || [];

    const vehicle = await vehicleService.updateVehicle(
      id,
      vehicleData,
      featuresList,
      images,
    );

    if (!vehicle) {
      return NextResponse.json({ error: "Vehicle not found" }, { status: 404 });
    }

    return NextResponse.json(vehicle);
  } catch (error) {
    console.error("Error in PUT /api/vehicles/[id]:", error);
    return NextResponse.json(
      { error: "Failed to update vehicle" },
      { status: 500 },
    );
  }
}
