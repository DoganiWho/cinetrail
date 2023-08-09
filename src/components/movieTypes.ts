export interface Movie {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string | null;
    backdrop_path: string | null;
    // Add more fields as needed
}

export interface Genre {
    id: number;
    name: string;
}