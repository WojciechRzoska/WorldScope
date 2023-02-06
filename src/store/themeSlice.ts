import { createSlice } from '@reduxjs/toolkit';

export interface DarkModeInitialState {
  darkMode: boolean;
}
export interface IRootState {
  theme: DarkModeInitialState;
}

const initialState: DarkModeInitialState = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toogleTheme: (state: DarkModeInitialState) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toogleTheme } = themeSlice.actions;

export default themeSlice.reducer;
