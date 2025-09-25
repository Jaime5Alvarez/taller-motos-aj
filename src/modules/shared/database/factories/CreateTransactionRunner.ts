import { DBFactory } from ".";
import {
  ITransactionRunner,
  TransactionRunner,
} from "../application/use-cases/transaction-runner";

export function CreateTransactionRunner(): ITransactionRunner {
  return new TransactionRunner(DBFactory.createDBClient());
}
