import { NextRequest, NextResponse } from "next/server";
import { generateResponse } from "@/lib/mockResponses";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, mode } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const validModes = ["short", "long", "degen"];
    const safeMode = validModes.includes(mode) ? mode : "short";

    // Simulate thinking time — proportional to mode depth
    const delays: Record<string, number> = {
      short: 400,
      long: 1200,
      degen: 600,
    };

    await new Promise((resolve) =>
      setTimeout(resolve, delays[safeMode] + Math.random() * 500)
    );

    const response = generateResponse(message, safeMode);

    return NextResponse.json({ response });
  } catch {
    return NextResponse.json(
      { error: "The neck retracted unexpectedly." },
      { status: 500 }
    );
  }
}
