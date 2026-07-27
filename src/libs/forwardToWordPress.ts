import { NextRequest, NextResponse } from "next/server";

export async function forwardToWordPress(
  request: NextRequest,
  pathSegments: string[],
) {
  const baseUrl = process.env.WORDPRESS_API_URL?.replace(/\/$/, "");

  if (!baseUrl) {
    return NextResponse.json(
      {
        success: false,
        message: "WORDPRESS_API_URL is not configured.",
      },
      { status: 500 },
    );
  }

  const upstreamUrl = new URL(pathSegments.join("/"), `${baseUrl}/`);

  // Forward query parameters
  request.nextUrl.searchParams.forEach((value, key) => {
    upstreamUrl.searchParams.set(key, value);
  });

  // Forward request headers
  const headers = new Headers();

  request.headers.forEach((value, key) => {
    switch (key.toLowerCase()) {
      case "host":
      case "content-length":
      case "accept-encoding":
        // Let fetch negotiate compression itself
        break;

      default:
        headers.set(key, value);
    }
  });

  // Read request body only for methods that support it
  let body: string | undefined;

  if (request.method !== "GET" && request.method !== "HEAD") {
    body = await request.text();
  }

  let response: Response;

  try {
    response = await fetch(upstreamUrl.toString(), {
      method: request.method,
      headers,
      body,
      redirect: "manual",
      cache: "no-store",
    });
  } catch (error) {
    console.error("WordPress fetch failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to connect to WordPress.",
      },
      {
        status: 502,
      },
    );
  }

  // Read body ONCE
  const responseBody = await response.text();

  // console.log("========== WORDPRESS RESPONSE ==========");
  // console.log("URL:", upstreamUrl.toString());
  // console.log("Status:", response.status);
  // console.log("Body:", responseBody);
  // console.log("========================================");

  // Copy response headers except problematic ones
  const responseHeaders = new Headers();

  response.headers.forEach((value, key) => {
    switch (key.toLowerCase()) {
      case "content-length":
      case "content-encoding":
      case "transfer-encoding":
      case "connection":
      case "keep-alive":
        break;

      default:
        responseHeaders.set(key, value);
    }
  });

  return new NextResponse(responseBody, {
    status: response.status,
    headers: responseHeaders,
  });
}
