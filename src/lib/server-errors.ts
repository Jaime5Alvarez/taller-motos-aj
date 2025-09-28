import { NextResponse } from "next/server";

export const badResponsePrintable = (messsage: string, details?: string[]) => {
  return NextResponse.json({ error: messsage, details }, { status: 400 });
};
