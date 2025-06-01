import pool from "@/lib/db";
import type { RowDataPacket } from "mysql2/promise";

/**
 * GET handler for fetching the user's avatar.
 * Connects to the database, retrieves the avatar, and returns it as JSON.
 * Handles errors and ensures the connection is always released.
 */
export async function GET() {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query<RowDataPacket[]>(
      "SELECT avatar FROM user LIMIT 1",
    );
    const avatar = rows.length > 0 ? rows[0].avatar : null;
    return Response.json(avatar);
  } catch (error) {
    // Log the error and return a 500 response
    console.error("Error fetching avatar:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  } finally {
    connection.release();
  }
}
