import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import * as schema from "@/modules/shared/database/infrastructure/drizzle/schema";

export interface ITransactionRunner {
  run<T>(
    callback: (tx: PostgresJsDatabase<typeof schema>) => Promise<T>,
  ): Promise<T>;
}

export class TransactionRunner implements ITransactionRunner {
  constructor(private readonly db: PostgresJsDatabase<typeof schema>) {}

  async run<T>(
    callback: (tx: PostgresJsDatabase<typeof schema>) => Promise<T>,
  ): Promise<T> {
    try {
      return await this.db.transaction(async (tx) => {
        try {
          const result = await callback(tx);
          return result;
        } catch (error) {
          // Log el error para debugging
          console.error("Error en transacción:", error);
          // Re-lanzar el error para que Drizzle haga rollback automáticamente
          throw error;
        }
      });
    } catch (error) {
      // Log el error final después del rollback
      console.error("Transacción falló y se hizo rollback:", error);
      throw error;
    }
  }
}
