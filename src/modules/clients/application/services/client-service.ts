import { eq } from "drizzle-orm";
import { CreateDBClient } from "@/modules/shared/database/factories/CreateDBClient";
import {
  clients,
  clientVehicle,
} from "@/modules/shared/database/infrastructure/drizzle/schema";
import type {
  Client,
  ClientVehicle,
  ClientVehicleInput,
  ClientWithVehicles,
} from "@/types/client";

export class ClientService {
  private db = CreateDBClient();

  async getAllClients(): Promise<Client[]> {
    try {
      const result = await this.db.select().from(clients);
      return result;
    } catch (error) {
      console.error("Error fetching clients:", error);
      throw new Error("Failed to fetch clients");
    }
  }

  async getClientById(id: string): Promise<Client | null> {
    try {
      const result = await this.db
        .select()
        .from(clients)
        .where(eq(clients.id, id))
        .limit(1);

      return result[0] || null;
    } catch (error) {
      console.error("Error fetching client by id:", error);
      throw new Error("Failed to fetch client");
    }
  }

  async getClientWithVehicles(id: string): Promise<ClientWithVehicles | null> {
    try {
      const client = await this.getClientById(id);
      if (!client) return null;

      const vehicles = await this.db
        .select()
        .from(clientVehicle)
        .where(eq(clientVehicle.clientId, id));

      return {
        ...client,
        vehicles,
      };
    } catch (error) {
      console.error("Error fetching client with vehicles:", error);
      throw new Error("Failed to fetch client with vehicles");
    }
  }

  async createClient(
    clientData: Omit<Client, "id" | "createdAt">,
  ): Promise<Client> {
    try {
      const newClient = {
        id: crypto.randomUUID(),
        ...clientData,
        createdAt: new Date(),
      };

      const result = await this.db
        .insert(clients)
        .values(newClient)
        .returning();

      return result[0];
    } catch (error) {
      console.error("Error creating client:", error);
      throw new Error("Failed to create client");
    }
  }

  async updateClient(
    id: string,
    clientData: Partial<Omit<Client, "id" | "createdAt">>,
  ): Promise<Client | null> {
    try {
      const result = await this.db
        .update(clients)
        .set(clientData)
        .where(eq(clients.id, id))
        .returning();

      return result[0] || null;
    } catch (error) {
      console.error("Error updating client:", error);
      throw new Error("Failed to update client");
    }
  }

  async deleteClient(id: string): Promise<boolean> {
    try {
      const result = await this.db
        .delete(clients)
        .where(eq(clients.id, id))
        .returning();

      return result.length > 0;
    } catch (error) {
      console.error("Error deleting client:", error);
      throw new Error("Failed to delete client");
    }
  }

  // Métodos para gestionar vehículos de clientes
  async getClientVehicles(clientId: string): Promise<ClientVehicle[]> {
    try {
      const result = await this.db
        .select()
        .from(clientVehicle)
        .where(eq(clientVehicle.clientId, clientId));

      return result;
    } catch (error) {
      console.error("Error fetching client vehicles:", error);
      throw new Error("Failed to fetch client vehicles");
    }
  }

  async addClientVehicle(
    clientId: string,
    vehicleData: ClientVehicleInput,
  ): Promise<ClientVehicle> {
    try {
      const newVehicle = {
        id: crypto.randomUUID(),
        clientId,
        ...vehicleData,
        createdAt: new Date(),
      };

      const result = await this.db
        .insert(clientVehicle)
        .values(newVehicle)
        .returning();

      return result[0];
    } catch (error) {
      console.error("Error adding client vehicle:", error);
      throw new Error("Failed to add client vehicle");
    }
  }

  async updateClientVehicle(
    vehicleId: string,
    vehicleData: Partial<ClientVehicleInput>,
  ): Promise<ClientVehicle | null> {
    try {
      const result = await this.db
        .update(clientVehicle)
        .set(vehicleData)
        .where(eq(clientVehicle.id, vehicleId))
        .returning();

      return result[0] || null;
    } catch (error) {
      console.error("Error updating client vehicle:", error);
      throw new Error("Failed to update client vehicle");
    }
  }

  async deleteClientVehicle(vehicleId: string): Promise<boolean> {
    try {
      const result = await this.db
        .delete(clientVehicle)
        .where(eq(clientVehicle.id, vehicleId))
        .returning();

      return result.length > 0;
    } catch (error) {
      console.error("Error deleting client vehicle:", error);
      throw new Error("Failed to delete client vehicle");
    }
  }
}
