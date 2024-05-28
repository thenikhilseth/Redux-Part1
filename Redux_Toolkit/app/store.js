import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice.js";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
  },
});

export default store;
