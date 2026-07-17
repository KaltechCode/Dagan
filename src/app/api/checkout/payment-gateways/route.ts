import { wpClient } from "@/libs/wordpress/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { response, data } = await wpClient.get("/checkout/payment-gateways");

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
          error instanceof Error
            ? error.message
            : "Unable to load payment methods",
      },
      {
        status: 500,
      },
    );
  }
}
