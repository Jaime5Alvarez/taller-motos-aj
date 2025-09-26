import { NextResponse } from "next/server";
import { ClientService } from "@/modules/clients/application/services/client-service";

const clientService = new ClientService();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const client = await clientService.createClient(body);
    return NextResponse.json(client, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/clients:", error);
    return NextResponse.json(
      { error: "Failed to create client" },
      { status: 500 },
    );
  }
}
