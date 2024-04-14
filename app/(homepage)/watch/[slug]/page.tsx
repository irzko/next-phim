import { getDataSheet } from "@/lib/gSheet";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: string } }) {
  const films = await getDataSheet(
    "1rMHkjsupREVnnIKaAOEdNk78YgX1SBy_XNTpANhYfHA",
    "7055404"
  );

  const film = films.find((film) => film.id === params.slug);
  if (!film) {
    return <div>Not found</div>;
  }

  const eps = films.filter((f) => f.film_id === film.film_id);

  const info = await getDataSheet(
    "1rMHkjsupREVnnIKaAOEdNk78YgX1SBy_XNTpANhYfHA",
    "0"
  );

  const filmIndex = info.find((f) => f.id === film.film_id);

  if (!filmIndex) {
    return <div>Not found</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="p-2 max-w-screen-lg space-y-2 w-full">
        <div className="rounded-lg overflow-hidden">
          <video
            className="max-w-screen-lg w-full"
            controls
            preload="auto"
            autoPlay
            src={film.src}
          >
            {/* <source src={film.src} />
            Your browser does not support the video tag. */}
          </video>
        </div>
        <div>
          <h2 className="text-white font-semibold p-2">
            {filmIndex.title} - Tập {film.eps}
          </h2>
        </div>
        <div>
          <ul className="flex gap-2 flex-wrap">
            {eps.map((f) => (
              <li key={f.id}>
                <Link
                  className="flex p-2 h-10 w-10 justify-center items-center text-sm font-medium focus:outline-none rounded-lg border focus:z-10 focus:ring-4 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
                  href={`/watch/${f.id}`}
                >
                  <p className="text-white">{f.eps}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
