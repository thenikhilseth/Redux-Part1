import { createSlice } from "@reduxjs/toolkit";
import { cakeActions } from "../cake/cakeSlice.js";

const initialState = {
  numOfIceCream: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCream--;
    },
    restocked: (state, action) => {
      state.numOfIceCream += action.payload;
    },
  },
  extraReducers: (builder) => {
    //Extra Reducer
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCream--;
    });
  },
});

export default iceCreamSlice.reducer;
export const iceCreamActions = iceCreamSlice.actions;
