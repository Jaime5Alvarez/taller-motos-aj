import { CreateDBClient } from "./CreateDBClient";
import { CreateTransactionRunner } from "./CreateTransactionRunner";

export const DBFactory = {
  createDBClient: CreateDBClient,
  createTransactionRunner: CreateTransactionRunner,
};
