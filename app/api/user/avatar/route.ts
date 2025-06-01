import pool from "@/lib/db"
import type { RowDataPacket } from "mysql2/promise"

/**
 * GET handler for fetching the user's avatar.
 * Connects to the database, retrieves the avatar, and returns it as JSON.
 * Handles errors and ensures the connection is always released.
 */
export async function GET() {
  const connection = await pool.getConnection()
  try {
    const [rows] = await connection.query<RowDataPacket[]>("SELECT avatar FROM user LIMIT 1")
    const avatar = rows.length > 0 ? rows[0].avatar : null
    return Response.json(avatar)
  } catch (error) {
    // Log the error and return a 500 response
    console.error("Error fetching avatar:", error)
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 })
  } finally {
    connection.release()
  }
}

/**
 * POST handler for updating or uploading the user's avatar.
 * The request body should be JSON, e.g. { "avatar": "base64 string or image URL" }
 * This updates the avatar field of the first row in the user table.
 * Always releases the database connection and handles errors.
 */
export async function POST(request: Request) {
  const connection = await pool.getConnection()
  try {
    // Parse the avatar field from the request body
    const { avatar } = await request.json()
    if (!avatar) {
      // Return 400 if avatar field is missing
      return new Response(JSON.stringify({ error: "Missing avatar field" }), { status: 400 })
    }

    // Update the avatar field of the first user row
    await connection.query(
      "UPDATE user SET avatar = ? ORDER BY id ASC LIMIT 1",
      [avatar]
    )

    // Return success response
    return Response.json({ message: "Avatar updated successfully" })
  } catch (error) {
    // Error handling
    console.error("Error in POST /api/user/avatar:", error)
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 })
  } finally {
    // Always release the database connection
    connection.release()
  }
}
