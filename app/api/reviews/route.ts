import { NextResponse } from "next/server";
import { fetchGuestReviews } from "@/lib/reviews";

export async function GET() {
  const payload = await fetchGuestReviews();
  if (!payload) {
    return NextResponse.json({ error: "Reviews unavailable" }, { status: 502 });
  }
  return NextResponse.json(payload);
}
