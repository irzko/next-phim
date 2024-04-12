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
    <div>
      <div className="p-2">
        <div className="rounded-sm overflow-hidden">

        <video
          className="max-w-screen-lg w-full"
          controls
          preload="auto"
          autoPlay
        >
          <source src={film.src} type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
        </div>
        <h2 className="font-semibold text-md">{film.title}</h2>
      </div>
    </div>
  );
}
