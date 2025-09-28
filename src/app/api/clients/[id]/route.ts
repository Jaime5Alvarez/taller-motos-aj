import { NextResponse } from "next/server";
import { ClientService } from "@/modules/clients/application/services/client-service";

const clientService = new ClientService();

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const client = await clientService.updateClient(id, body);
    if (!client) {
      return NextResponse.json({ error: "Client not found" }, { status: 404 });
    }
    return NextResponse.json(client);
  } catch (error) {
    console.error("Error in PUT /api/clients/[id]:", error);
    return NextResponse.json(
      { error: "Failed to update client" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const success = await clientService.deleteClient(id);

    if (!success) {
      return NextResponse.json({ error: "Client not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: "Client deleted successfully",
    });
  } catch (error) {
    console.error("Error in DELETE /api/clients/[id]:", error);
    return NextResponse.json(
      { error: "Failed to delete client" },
      { status: 500 },
    );
  }
}
