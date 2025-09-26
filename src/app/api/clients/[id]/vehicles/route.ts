import { NextResponse } from "next/server";
import { ClientService } from "@/modules/clients/application/services/client-service";

const clientService = new ClientService();

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const vehicle = await clientService.addClientVehicle(id, body);
    return NextResponse.json(vehicle, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/clients/[id]/vehicles:", error);
    return NextResponse.json(
      { error: "Failed to add vehicle" },
      { status: 500 },
    );
  }
}
