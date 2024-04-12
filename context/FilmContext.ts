import { createContext } from "react";

export type FilmContextType = [films: Film[], setFilms: (film: Film[]) => void];

const FilmContext = createContext<FilmContextType>([[], () => {}]);

export default FilmContext;
