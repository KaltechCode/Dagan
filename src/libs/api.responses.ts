import { NextResponse } from "next/server";

export function success<T>(data: T, message?: string, status = 200) {
  return NextResponse.json(
    {
      success: true,
      message,
      data,
    },
    {
      status,
    },
  );
}

export function failure(message: string, status = 500, errors?: unknown) {
  return NextResponse.json(
    {
      success: false,
      message,
      errors,
    },
    {
      status,
    },
  );
}
