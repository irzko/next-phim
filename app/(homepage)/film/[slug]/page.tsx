import { getDataSheet } from "@/lib/gSheet";
import Link from "next/link";
import Image from "next/image";

export default async function Page({ params }: { params: { slug: string } }) {
  const allFilms = await getDataSheet(
    "1rMHkjsupREVnnIKaAOEdNk78YgX1SBy_XNTpANhYfHA",
    "7055404"
  );

  const filmIndex = await getDataSheet(
    "1rMHkjsupREVnnIKaAOEdNk78YgX1SBy_XNTpANhYfHA",
    "0"
  );

  const info = filmIndex.find((film) => film.id === params.slug);

  if (!info) {
    return <div>Not found</div>;
  }

  const films = allFilms.filter((film) => film.film_id === params.slug);

  if (!films) {
    return <div>Not found</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="p-2 max-w-screen-sm w-full">
        <div className="flex mb-2 border border-gray-700 overflow-hidden bg-gray-800 rounded-lg">
          <div className="relative w-64 aspect-[3/4]">
            <Image
              src={info.thumbnail}
              alt={info.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="p-2 space-y-2">
            <h2 className="font-semibold text-2xl text-white">{info.title}</h2>
            <hr className="border-gray-700" />
            <p className="text-white text-sm">
              Thể loại:
              <br />
              {info.genre.replace(/;/g, ", ")}
            </p>
            <hr className="border-gray-700" />
            <p className="text-white text-sm">Năm: {info.year}</p>
          </div>
        </div>
        <div>
          <ul className="flex gap-2 flex-wrap">
            {films.map((film) => (
              <li key={film.id}>
                <Link
                  className="flex p-2 h-10 w-10 justify-center items-center text-sm font-medium focus:outline-none rounded-lg border focus:z-10 focus:ring-4 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
                  href={`/watch/${film.id}`}
                >
                  <p className="text-white">{film.eps}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
