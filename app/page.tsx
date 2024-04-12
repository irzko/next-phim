import { getDataSheet } from "@/lib/gSheet";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const data = await getDataSheet(
    "1rMHkjsupREVnnIKaAOEdNk78YgX1SBy_XNTpANhYfHA",
    "0"
  );

  return (
    <main className="flex justify-center flex-wrap">
      <div className="max-w-screen-lg w-full">
        <ul className="flex gap-2">
          {data.map((item) => (
            <li key={item.id}>
              <Link href={`watch/${item.id}`}>
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={200}
                  height={300}
                />
                <h2>{item.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
