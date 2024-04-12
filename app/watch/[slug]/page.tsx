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
    <video width="320" height="240" controls preload="none">
      <source src={film.src} type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  );
}
