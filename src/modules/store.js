import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import MovieReducer from "../features/movie/movieSlice";
import favoritesReducer from "../features/movie/favoritesSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: MovieReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});
