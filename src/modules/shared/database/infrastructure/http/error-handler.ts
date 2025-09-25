import { isDev } from "@/lib/utils";
import { ApiError } from "@/modules/shared/logging/errors/ApiError";
import { logger } from "@/modules/shared/logging/logger-instance";

import { NextResponse } from "next/server";

export function withErrorHandler<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends (...args: any[]) => Promise<Response>,
>(handler: T): (...args: Parameters<T>) => Promise<Response> {
  return async (...args: Parameters<T>) => {
    try {
      return await handler(...args);
    } catch (err: unknown) {
      const request = args?.[0];
      const url = request?.url;
      const method = request?.method;

      await logger.error(err, {
        url,
        method,
        timestamp: new Date().toISOString(),
      });

      if (err instanceof ApiError) {
        return NextResponse.json(
          {
            error: err.message,
            ...(isDev() && err.details ? { details: err.details } : {}),
          },
          { status: err.statusCode },
        );
      }

      return NextResponse.json(
        isDev()
          ? {
              error: "Internal server error",
              message: err instanceof Error ? err.message : "Unknown error",
              stack: err instanceof Error ? err.stack : "Unknown stack",
            }
          : {
              error: "Internal server error",
            },
        { status: 500 },
      );
    }
  };
}
