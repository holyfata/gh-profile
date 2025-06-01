import pool from "@/lib/db"

export async function GET() {
  const connection = await pool.getConnection()
  try {
    const [rows] = 
      await connection.query("SELECT avatar FROM user LIMIT 1") as [Array<{ avatar: string }>, any]
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
