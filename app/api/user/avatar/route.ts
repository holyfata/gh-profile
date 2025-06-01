import pool from "@/lib/db"
import type { RowDataPacket } from "mysql2/promise"

export async function GET() {
  const connection = await pool.getConnection()
  try {
    const [rows] = await connection.query<RowDataPacket[]>("SELECT avatar FROM user LIMIT 1")
    const avatar = rows.length > 0 ? rows[0].avatar : null
    return Response.json({ avatar })
  } finally {
    connection.release()
  }
}

export async function POST() {
  const connection = await pool.getConnection()

  connection.release()

  return Response.json({ message: 'Hello World' })
}
