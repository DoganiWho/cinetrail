import axios from "axios";
import { useEffect, useState } from "react";
import { Genre } from "../movieTypes";

export function Genres({ genreIds }): JSX.Element {
  const [genres, setGenres] = useState<Genre[]>([]);
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_BASE_URL}list?api_key=${
          import.meta.env.VITE_APP_API_KEY
        }`
      )
      .then((res) => setGenres(res.data.genres))
      .catch((err) => console.log(err));
  });

  return (
    <div className="genre-container">
      <p>Genres:&nbsp;</p>
      {genreIds.map((id: number, index: number) => {
        for (let i = 0; i < genres.length; i++) {
          if (genres[i].id === id)
            return (
              <p>
                {genres[i].name}
                {index === genreIds.length - 1 ? "" : ","}&nbsp;
              </p>
            );
        }
      })}
    </div>
  );
}
