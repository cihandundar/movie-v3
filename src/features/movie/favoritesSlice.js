import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const storedMovieItems = localStorage.getItem("movieItems");
const initialState = {
  movieItems: storedMovieItems ? JSON.parse(storedMovieItems) : [],
  movieTotalQuantity: 0,
  selectedItems: [],
};

const favoritesSlice = createSlice({
  name: `favorites`,
  initialState,
  reducers: {
    addToFavorites(state, action) {
      const itemIndex = state.movieItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.movieItems[itemIndex].cartQuantity += 1;
      } else {
        const tempMovie = {
          ...action.payload,
          cartQuantity: 1,
        };
        state.movieItems.push(tempMovie);
        toast.success(`${action.payload.title} added`);
      }
      localStorage.setItem("movieItems", JSON.stringify(state.movieItems));
    },
    remove(state, action) {
      const nextmovieItems = state.movieItems.filter(
        (mmovieItem) => mmovieItem.id !== action.payload.id
      );
      state.movieItems = nextmovieItems;
      state.selectedItems = state.selectedItems.filter(
        (itemId) => itemId !== action.payload.id
      );
      localStorage.setItem("movieItems", JSON.stringify(state.movieItems));
      toast.info(`${action.payload.title} deleted`);
    },
  },
});

export const { addToFavorites, remove } = favoritesSlice.actions;

export default favoritesSlice.reducer;
