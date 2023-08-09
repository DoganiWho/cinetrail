interface Genre {
    id: number;
    name: string;
}

type GenresProps = {
  genreIds: number[];
}

interface Movie {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string | null;
    backdrop_path: string | null;
    genres: Genre[]
    // Add more fields as needed
}


export type {Genre, Movie, GenresProps};