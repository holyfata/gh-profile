import { apiHandler } from "@/lib/url";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  return await apiHandler(url);
}
