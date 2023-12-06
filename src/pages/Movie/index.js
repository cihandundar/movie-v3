import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMovies, searchMovies } from "../../features/movie/movieSlice";
import { addToFavorites, remove } from "features/movie/favoritesSlice";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
const Movie = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const movies = useSelector((state) => state.movies.data);
  const favorites = useSelector((state) => state?.favorites?.movieItems);
  const isLoading = useSelector((state) => state.movies.loading);
  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleSearch = () => {
    if (searchTerm) {
      dispatch(searchMovies(searchTerm));
    } else {
      dispatch(fetchMovies());
    }
  };

  const handleAdd = (movie) => {
    const isSelected = favorites.some((favorite) => favorite.id === movie.id);
    if (isSelected) {
      dispatch(remove(movie));
    } else {
      dispatch(addToFavorites(movie));
    }
  };

  return (
    <div className="movie">
      <div className="movie__search">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div>
          <div className="movie__title">
            <div className="movie__title__container">
              <h1> Popular Movies</h1>
            </div>
          </div>
          <div className="movie__container">
            {movies?.map((movie) => (
              <div style={{ position: "relative" }}>
                <button
                  onClick={() => handleAdd(movie)}
                  style={{
                    all: "unset",
                    display: "flex",
                    cursor: "pointer",
                    position: "absolute",
                    right: "10px",
                    top: "-10px",
                  }}
                >
                  {favorites.some((favorite) => favorite.id === movie.id) ? (
                    <MdFavorite />
                  ) : (
                    <MdFavoriteBorder />
                  )}
                </button>
                <Link key={movie?.id} to={`/movie/${movie.id}`}>
                  <div className="movie__card" key={movie?.id}>
                    <div className="movie__card__img">
                      <img
                        src={IMG_API + movie?.poster_path}
                        alt={IMG_API + movie?.poster_path}
                      />
                    </div>
                    <div className="movie__card__title">
                      <h3>{movie?.title}</h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
