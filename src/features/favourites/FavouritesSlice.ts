import { createSlice } from '@reduxjs/toolkit';
import FavouritesState from './types/FavouritesState';

// Функция для получения начального состояния из localStorage
const getInitialStateFromLocalStorage = (): FavouritesState => {
  const savedState = localStorage.getItem('favouritesState');
  return savedState ? JSON.parse(savedState) : { favourites: [] };
};

const initialState: FavouritesState = getInitialStateFromLocalStorage();

const FavouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const { id } = action.payload;
      // Проверяем, есть ли фильм с таким же id уже в списке избранных
      const isAlreadyAdded = state.favourites.some((movie) => movie.id === id);
      // Если фильма с таким id еще нет в избранных, добавляем его
      if (!isAlreadyAdded) {
        state.favourites.push(action.payload);
        // Сохраняем обновленное состояние в localStorage
        localStorage.setItem('favouritesState', JSON.stringify(state));
      }
    },
  },
});

export const { addToFavorites } = FavouritesSlice.actions;

export default FavouritesSlice.reducer;
