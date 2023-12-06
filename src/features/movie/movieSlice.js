// moviesSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  details: {},
  loading: false,
  error: "",
};

export const fetchMovies = createAsyncThunk("fetchMovies", async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=ccb0a8566b23ab43471cda53fed3d9e7&language=en-US&page=1"
  );
  return response.data.results;
});

export const fetchMoviesDetails = createAsyncThunk(
  "fetchMoviesDetails",
  async (id) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ccb0a8566b23ab43471cda53fed3d9e7&language=en-US`
    );
    return response.data;
  }
);

export const searchMovies = createAsyncThunk(
  "movies/searchMovies",
  async (searchTerm) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=ccb0a8566b23ab43471cda53fed3d9e7&language=en-US&query=${searchTerm}&page=1&include_adult=false`
    );
    return response.data.results;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(fetchMoviesDetails.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchMoviesDetails.fulfilled, (state, action) => {
      state.details = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchMoviesDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(searchMovies.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(searchMovies.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(searchMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default movieSlice.reducer;
