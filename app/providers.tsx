"use client";

import FilmContext from "@/context/FilmContext";
import { useEffect, useState } from "react";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [films, setFilms] = useState<Film[]>([]);
  useEffect(() => {
    fetch("/api/films")
      .then((res) => res.json())
      .then((data) => {
        setFilms(data.data);
      });
  }, []);
  return (
    <FilmContext.Provider value={[films, setFilms]}>
      {children}
    </FilmContext.Provider>
  );
}
