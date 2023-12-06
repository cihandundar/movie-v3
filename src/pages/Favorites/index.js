import { Footer } from "components";
import { remove } from "features/movie/favoritesSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Favorites = () => {
  const movies = useSelector((state) => state?.favorites);
  const dispatch = useDispatch();
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  return (
    <section className="favorites">
      <div className="favorites__title">
        <h1> Favorites</h1>
      </div>
      <div className="favorites__container">
        {movies.movieItems.map((movieFavorites) => (
          <div className="favorites__card" key={movieFavorites.id}>
            <Link to={`/movie/${movieFavorites.id}`}>
              <div className="favorites__card__img">
                <img
                  src={IMG_API + movieFavorites?.poster_path}
                  alt={IMG_API + movieFavorites?.poster_path}
                />
              </div>
              <div className="favorites__card__title">
                <h3>{movieFavorites?.title}</h3>
              </div>
            </Link>
            <button
              className="remove"
              onClick={() => dispatch(remove(movieFavorites))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default Favorites;
