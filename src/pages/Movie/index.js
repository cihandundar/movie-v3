import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMovies } from "../../redux/movieSlice";

const Movie = () => {
  const movies = useSelector((state) => state?.movies?.data);

  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="movie">
      <div className="movie__title">
        <div className="movie__title__container">
          <h1>Movies</h1>
        </div>
      </div>
      <div className="movie__container">
        {movies?.map((movie) => (
          <Link key={movie?.id} to={`/movie/${movie.id}`}>
            <div className="movie__card">
              <div className="movie__card__img">
                <img src={IMG_API + movie?.poster_path} alt="" />
              </div>
              <div className="movie__card__title">
                <h3>{movie?.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Movie;
