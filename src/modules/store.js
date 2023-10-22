import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import MovieReducer from "../features/movie/movieSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: MovieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});
