import {
  type ITransactionRunner,
  TransactionRunner,
} from "../application/use-cases/transaction-runner";
import { DBFactory } from ".";

export function CreateTransactionRunner(): ITransactionRunner {
  return new TransactionRunner(DBFactory.createDBClient());
}
