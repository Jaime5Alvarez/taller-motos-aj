import { NextResponse } from "next/server";
import { ClientService } from "@/modules/clients/application/services/client-service";

const clientService = new ClientService();

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const client = await clientService.updateClient(params.id, body);
    if (!client) {
      return NextResponse.json(
        { error: "Client not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(client);
  } catch (error) {
    console.error("Error in PUT /api/clients/[id]:", error);
    return NextResponse.json(
      { error: "Failed to update client" },
      { status: 500 }
    );
  }
}
