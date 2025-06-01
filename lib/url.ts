import { NextURL } from "next/dist/server/web/next-url";
import { fetchValueFromDb } from "@/lib/db";
import { getWithCache } from "@/lib/cache";

/**
 * Parses the URL path to extract the database name and key.
 * Example: "/api/v1/mydb/mykey" => ["mydb", "mykey"]
 * @param url - The full URL string.
 * @returns A tuple [dbname, key] if valid, otherwise null.
 */
export function parseUrlPath(url: string): [string, string] | null {
  const prefix = "/api/v1/";
  try {
    // Parse the URL to get the pathname
    const { pathname } = new URL(url);

    // Check if the pathname starts with the required prefix
    if (!pathname.startsWith(prefix)) return null;

    // Remove the prefix and split the rest by '/'
    const segments = pathname.slice(prefix.length).split("/");

    // Ensure there are at least two segments (dbname and key), and both are non-empty
    if (segments.length < 2 || !segments[0] || !segments[1]) return null;

    // Return the dbname and key as a tuple
    return [segments[0], segments[1]];
  } catch (error) {
    // If URL parsing fails, log the error and return null
    console.error("Invalid URL:", error);
    return null;
  }
}

/**
 * Handles API requests by extracting dbname and key, fetching value with cache, and returning a JSON response.
 * @param url - The NextURL object representing the request URL.
 * @returns A Response object with the fetched value or an error message.
 */
export async function apiHandler(url: NextURL) {
  // Parse the URL to get dbname and key
  const parsed = parseUrlPath(url.toString());
  if (!parsed) {
    // If parsing fails, return a 400 Bad Request response
    return new Response(
      JSON.stringify({ error: "Bad Request: Missing dbname or key" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
  // Destructure dbname and key from the parsed result
  const [dbname, key] = parsed;
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
