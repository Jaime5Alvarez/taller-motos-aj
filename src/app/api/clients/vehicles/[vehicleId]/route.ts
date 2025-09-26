import { NextResponse } from "next/server";
import { ClientService } from "@/modules/clients/application/services/client-service";

const clientService = new ClientService();

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ vehicleId: string }> },
) {
  try {
    const { vehicleId } = await params;
    const body = await request.json();
    const vehicle = await clientService.updateClientVehicle(vehicleId, body);
    if (!vehicle) {
      return NextResponse.json({ error: "Vehicle not found" }, { status: 404 });
    }
    return NextResponse.json(vehicle);
  } catch (error) {
    console.error("Error in PUT /api/clients/vehicles/[vehicleId]:", error);
    return NextResponse.json(
      { error: "Failed to update vehicle" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ vehicleId: string }> },
) {
  try {
    const { vehicleId } = await params;
    const success = await clientService.deleteClientVehicle(vehicleId);
    if (!success) {
      return NextResponse.json({ error: "Vehicle not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in DELETE /api/clients/vehicles/[vehicleId]:", error);
    return NextResponse.json(
      { error: "Failed to delete vehicle" },
      { status: 500 },
    );
  }
}
