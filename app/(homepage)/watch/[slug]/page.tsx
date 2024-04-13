import { getDataSheet } from "@/lib/gSheet";

export default async function Page({ params }: { params: { slug: string } }) {
  const films = await getDataSheet(
    "1rMHkjsupREVnnIKaAOEdNk78YgX1SBy_XNTpANhYfHA",
    "0"
  );

  const film = films.find((film) => film.id === params.slug);
  if (!film) {
    return <div>Not found</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="p-1 max-w-screen-lg w-full">
        <div className="rounded-lg overflow-hidden">
          <video
            className="max-w-screen-lg w-full"
            controls
            preload="auto"
            autoPlay
          >
            <source src={film.src} />
            Your browser does not support the video tag.
          </video>
        </div>
        <h2 className="text-white font-semibold py-4">{film.title}</h2>
      </div>
    </div>
  );
}
