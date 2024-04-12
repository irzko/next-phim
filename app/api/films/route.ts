import { getDataSheet } from "@/lib/gSheet";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await getDataSheet(
    "1rMHkjsupREVnnIKaAOEdNk78YgX1SBy_XNTpANhYfHA",
    "0"
  );

  return NextResponse.json(
    {
      message: "Success",
      data,
    },
    { status: 200 }
  );
}
