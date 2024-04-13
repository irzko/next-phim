import { getDataSheet } from "@/lib/gSheet";

export async function GET() {
  const data = await getDataSheet(
    "1rMHkjsupREVnnIKaAOEdNk78YgX1SBy_XNTpANhYfHA",
    "0"
  );

  return Response.json(data);
}
