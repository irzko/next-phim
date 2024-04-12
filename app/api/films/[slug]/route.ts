import { getDataSheet } from "@/lib/gSheet";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  const films = await getDataSheet(
    "1rMHkjsupREVnnIKaAOEdNk78YgX1SBy_XNTpANhYfHA",
    "0"
  );

  const film = films.find((film) => film.id === slug);
  return NextResponse.json({
    message: "Success",
    data: film,
  });
}
