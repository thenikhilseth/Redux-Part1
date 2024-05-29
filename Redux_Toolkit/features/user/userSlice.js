import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

//Async Thunk create 3 action types automatically - PENDING, FULFILLED and REJECTED.
const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
    response.data.map((user) => user.name);
  });
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});
