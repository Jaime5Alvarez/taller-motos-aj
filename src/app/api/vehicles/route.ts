import { NextResponse } from "next/server";
import { zVehicleSchema } from "@/lib/validations/vehicle";
import { VehicleService } from "@/modules/vehicles/application/services/vehicle-service";

const vehicleService = new VehicleService();

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validar datos
    const validationResult = zVehicleSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Invalid data",
          details: validationResult.error.issues,
        },
        { status: 400 },
      );
    }

    const { features, images, ...vehicleData } = validationResult.data;

    // Extraer solo las características válidas
    const featuresList =
      features?.map((f) => f.feature).filter((f) => f && f.trim() !== "") || [];

    const vehicle = await vehicleService.createVehicle(
      vehicleData,
      featuresList,
      images,
    );

    return NextResponse.json(vehicle, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/vehicles:", error);
    return NextResponse.json(
      { error: "Failed to create vehicle" },
      { status: 500 },
    );
  }
}
