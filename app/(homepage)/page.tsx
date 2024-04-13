import { getDataSheet } from "@/lib/gSheet";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const data = await getDataSheet(
    "1rMHkjsupREVnnIKaAOEdNk78YgX1SBy_XNTpANhYfHA",
    "0"
  );

  return (
    <main className="flex justify-center">
      <div className="max-w-screen-lg w-full">
        <ul className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-2 p-2">
          {data.map((item) => (
            <li
              key={item.id}
              className="border border-gray-700 overflow-hidden bg-gray-800 rounded-lg"
            >
              <Link href={`watch/${item.id}`}>
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover rounded-b-lg"
                    // width={200}
                    // height={300}
                  />
                </div>

                <h2 className="font-semibold p-2 text-white">{item.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
