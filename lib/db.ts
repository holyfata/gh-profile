import mysql from "mysql2/promise";
import type { RowDataPacket } from "mysql2/promise";

// Create a connection pool for efficient database access
const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT || "3306", 10),
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

/**
 * Fetch a value from the specified database table by key.
 * @param dbname - The table name to query.
 * @param key - The key to look up.
 * @returns The value as a string if found, otherwise null.
 */
async function fetchValueFromDb(
  dbname: string,
  key: string,
): Promise<string | null> {
  // Get a connection from the pool
  const connection = await pool.getConnection();
  try {
    // Query the value field from the specified table where key matches
    const [rows] = await connection.query<RowDataPacket[]>(
      "SELECT value FROM " + dbname + " WHERE `key` = ?",
      [key],
    );
    // Return the value if found, otherwise null
    return rows.length > 0 ? rows[0].value : null;
  } finally {
    // Always release the connection back to the pool
    connection.release();
  }
}

export default pool;
export { fetchValueFromDb }; // Export the function for use in other modules
