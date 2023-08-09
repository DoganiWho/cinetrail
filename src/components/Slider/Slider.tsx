import { HTMLAttributes, useEffect, useState } from "react";
import axios from "axios";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Movie } from "../movieTypes";
import "./Slider.css";
import { Genres } from "../Genres/Genres";
import StarRatings from "react-star-ratings";

export default function Slider() {
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [index, setIndex] = useState<number>(0);

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

  const handleSlideClick = (direction: "left" | "right"): void => {
    if (direction === "left") {
      index === 0
        ? setIndex(upcoming.length - 1)
        : setIndex((prevState) => prevState - 1);
    } else {
      index === upcoming.length - 1
        ? setIndex(0)
        : setIndex((prevState) => prevState + 1);
    }
  };

  const sliderStyle = {
    backgroundImage: `url(${import.meta.env.VITE_API_BASE_IMG_URL}${
      upcoming[0]?.backdrop_path
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "60vh",
    width: "100%",
    position: "relative",
  } as HTMLAttributes<StyleSheet>;

  return (
    <>
      <div style={sliderStyle}>
        <div className="slider-overlay">
          <MdKeyboardArrowLeft
            className="left-arrow"
            onClick={() => handleSlideClick("left")}
          />
          <MdKeyboardArrowRight
            className="right-arrow"
            onClick={() => handleSlideClick("right")}
          />
        </div>
        <div className="slider-info">
          <h1>{upcoming[index]?.title}</h1>
          <p className="slider-description">
            {upcoming[index]?.overview.slice(0, 150)}...
          </p>
          <Genres genreIds={upcoming[index]?.genres.map(genre => genre.id)} />
          <p>Release Date: {upcoming[index]?.release_date}</p>
          {upcoming[index] && (
            <StarRatings
              rating={4.5}
              starRatedColor="red"
              numberOfStars={5}
              name="rating"
              starDimension="15px"
              starSpacing="1px"
            />
          )}
        </div>
        {/* {upcoming.map((movie) => (
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
        ))} */}
      </div>
    </>
  );
}
