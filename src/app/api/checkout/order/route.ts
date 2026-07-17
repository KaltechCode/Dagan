import { wpClient } from "@/libs/wordpress/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { response, data } = await wpClient.post("/checkout", body);

    const nextResponse = NextResponse.json(data, {
      status: response.status,
    });

    const cookie = response.headers.get("set-cookie");

    if (cookie) {
      nextResponse.headers.set("set-cookie", cookie);
    }

    return nextResponse;
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Unable to place order",
      },
      {
        status: 500,
      },
    );
  }
}
