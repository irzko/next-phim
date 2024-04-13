import { getDataSheet } from "@/lib/gSheet";

export default async function Page({ params }: { params: { slug: string } }) {
  const films = await getDataSheet(
    "1rMHkjsupREVnnIKaAOEdNk78YgX1SBy_XNTpANhYfHA",
    "7055404"
  );

  const film = films.find((film) => film.id === params.slug);
  if (!film) {
    return <div>Not found</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="p-2 max-w-screen-lg w-full">
        <div className="rounded-lg overflow-hidden">
          <video
            className="max-w-screen-lg w-full"
            controls
            crossOrigin="anonymous"
            preload="auto"
            autoPlay
            src={film.src}
          >
            {/* <source src={film.src} />
            Your browser does not support the video tag. */}
          </video>
        </div>
        <div className="border mt-2 border-gray-700 overflow-hidden bg-gray-800 rounded-lg">
          <h2 className="text-white font-semibold p-2">{film.title}</h2>
        </div>
      </div>
    </div>
  );
}
