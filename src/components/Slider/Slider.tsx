import { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "../movieTypes";

export default function Slider() {
  const [upcoming, setUpcoming] = useState<Movie[]>([]);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_BASE_URL}upcoming?api_keys${
          import.meta.env.VITE_APP_API_KEY
        }`
      )
      .then((res) => {
        const movies: Movie[] = res.data.results;
        setUpcoming(movies);
      })
      .catch((err) => console.error(err));
  }, []);

  const sliderStyle = {
    backgroundImage: `url(${import.meta.env.VITE_API_BASE_IMG_URL}${
      upcoming[0]?.backdrop_path
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "60vh",
    width: "100%",
  };

  return (
    <div style={sliderStyle}>
      {upcoming.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
