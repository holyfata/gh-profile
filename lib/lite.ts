import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";
import path from "path";
import fs from "fs";

// Define the path to the SQLite database file
const DB_PATH = path.resolve("data/cache.db");
console.error(__dirname, DB_PATH);

// Ensure the database directory exists
const DB_DIR = path.dirname(DB_PATH);
if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true });
}

let db: Database | null = null;

// Get or initialize the SQLite database connection
async function getDb(): Promise<Database> {
  if (!db) {
    db = await open({
      filename: DB_PATH,
      driver: sqlite3.Database,
    });
    // Create the cache table if it does not exist
    await db.run(`
      CREATE TABLE IF NOT EXISTS cache (
        key TEXT PRIMARY KEY,
        value TEXT,
        updated_at INTEGER
      )
    `);
  }
  return db;
}

// Retrieve a cached value by key
export async function getCache(key: string): Promise<any | null> {
  const database = await getDb();
  const row = await database.get("SELECT value FROM cache WHERE key = ?", key);
  if (row && row.value) {
    try {
      return JSON.parse(row.value);
    } catch {
      // Return the raw value if JSON parsing fails
      return row.value;
    }
  }
  return null;
}

// Set or update a cached value by key
export async function setCache(key: string, value: any): Promise<void> {
  const database = await getDb();
  const valueStr = JSON.stringify(value);
  const now = Date.now();
  await database.run(
    "INSERT OR REPLACE INTO cache (key, value, updated_at) VALUES (?, ?, ?)",
    key,
    valueStr,
    now,
  );
}
