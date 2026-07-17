import { wpClient } from "@/libs/wordpress/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { response, data } = await wpClient.get("/cart");

    const nextResponse = NextResponse.json(data, {
      status: response.status,
    });

    const setCookie = response.headers.get("set-cookie");

    if (setCookie) {
      nextResponse.headers.set("set-cookie", setCookie);
    }

    return nextResponse;
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Internal Server Error",
      },
      {
        status: 500,
      },
    );
  }
}
