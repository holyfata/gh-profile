import pool from "@/lib/db";
import type { RowDataPacket } from "mysql2/promise";
import { getWithCache } from "@/lib/cache"; // Import cache utility

/**
 * GET handler for fetching the user's avatar.
 * Uses cache for fast response and background refresh.
 */
export async function GET() {
  // Define cache key
  const cacheKey = "user:avatar";

  // Define a function to fetch avatar from the database
  async function fetchAvatarFromDb(): Promise<string | null> {
    const connection = await pool.getConnection();
    try {
      // Query the avatar field from the user table
      const [rows] = await connection.query<RowDataPacket[]>(
        "SELECT avatar FROM user LIMIT 1",
      );
      // Return avatar if found, otherwise null
      return rows.length > 0 ? rows[0].avatar : null;
    } finally {
      // Release the database connection
      connection.release();
    }
  }

  try {
    // Use cache utility function to get avatar (with background refresh)
    const avatar = await getWithCache<string | null>(
      cacheKey,
      fetchAvatarFromDb,
    );
    // Return the avatar as JSON response
    return Response.json(avatar);
  } catch (error) {
    // Log error and return 500 response
    console.error("Error fetching avatar:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
