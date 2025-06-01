import { fetchValueFromDb } from "@/lib/db";
import { getWithCache } from "@/lib/cache";

/**
 * Handles API requests by extracting dbname and key, fetching value with cache, and returning a JSON response.
 * @param url - The NextURL object representing the request URL.
 * @returns A Response object with the fetched value or an error message.
 */
export async function apiHandler(opt: { dbname: string; key: string }) {
  // Destructure dbname and key from the parsed result
  const { dbname, key } = opt;
  // Construct a cache key using dbname and key
  const cacheKey = `${dbname}:${key}`;
  try {
    // Try to get the value from cache, or fetch from DB if not cached
    const value = await getWithCache<string | null>(cacheKey, () =>
      fetchValueFromDb(dbname, key),
    );
    // Return the value as a JSON response (200 OK)
    return Response.json(value);
  } catch (error) {
    // If any error occurs during fetching, log it and return a 500 error
    console.error(`Error fetching ${key} from ${dbname}:`, error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
