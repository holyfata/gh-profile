import { apiHandler } from "@/lib/url";
import type { NextRequest } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ dbname: string; key: string }> },
) {
  const { dbname, key } = await params;
  return await apiHandler({ dbname, key });
}
