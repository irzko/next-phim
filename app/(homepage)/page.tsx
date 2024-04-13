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
      <div className="max-w-screen-lg w-full p-2">
        {/* <div className="flex justify-end mb-4">
          <input
            type="text"
            id="first_name"
            className="border text-sm rounded-lg block max-w-xs p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Tìm kiếm phim"
          /> */}
        <div className="relative justify-end mb-4">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-2 ps-10 text-sm max-w-xs border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search..."
          ></input>
        </div>

        {/* </div> */}
        <ul className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-2">
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
