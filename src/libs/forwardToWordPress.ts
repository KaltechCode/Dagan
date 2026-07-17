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
        data: null,
      },
      { status: 500 },
    );
  }

  const upstreamUrl = new URL(
    pathSegments.length ? pathSegments.join("/") : "",
    `${baseUrl}/`,
  );

  request.nextUrl.searchParams.forEach((value, key) => {
    upstreamUrl.searchParams.set(key, value);
  });

  const headers = new Headers(request.headers);
  headers.delete("host");
  headers.delete("content-length");

  const method = request.method;
  const body =
    method !== "GET" && method !== "HEAD" ? await request.text() : undefined;

  const response = await fetch(upstreamUrl, {
    method,
    headers,
    body,
    cache: "no-store",
  });

  const contentType = response.headers.get("content-type") ?? "";
  const payload = contentType.includes("application/json")
    ? await response.json()
    : await response.text();

  const forwardedHeaders = new Headers();

  response.headers.forEach((value, key) => {
    if (key.toLowerCase() === "content-length") {
      return;
    }

    if (key.toLowerCase() === "set-cookie") {
      forwardedHeaders.append(key, value);
      return;
    }

    forwardedHeaders.set(key, value);
  });

  return NextResponse.json(
    {
      success: response.ok,
      message: response.statusText,
      data: payload,
    },
    {
      status: response.status,
      headers: forwardedHeaders,
    },
  );
}
