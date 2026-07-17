const WORDPRESS_URL = process.env.WORDPRESS_URL!;

export async function wpFetch<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(`${WORDPRESS_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`WordPress API Error: ${response.status}`);
  }

  return response.json();
}
