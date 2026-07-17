import { ApiError } from "@/redux/api/baseQuery";

export async function executeQuery<T>(callback: () => Promise<T>) {
  try {
    const data = await callback();

    return { data };
  } catch (error) {
    return {
      error: error as ApiError,
    };
  }
}
