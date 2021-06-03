import { createSlice, current } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    showNavigation: false,
  },
  reducers: {
    navigationButtonClicked: (state) => {
      console.log({ state: current(state) });
      state.showNavigation = !state.showNavigation;
    },
  },
});

export const { navigationButtonClicked } = navigationSlice.actions;

export default navigationSlice.reducer;
