import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import navigationReducer from "../features/navigation/navigationSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    navigation: navigationReducer,
  },
});
