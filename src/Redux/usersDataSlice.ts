import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./middlewares/fetchUsers";

export interface IUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface IState<T> {
  users: T;
  isLoading: boolean;
}

const initialState: IState<IUser[]> = {
  users: [],
  isLoading: false,
};
export const usersDataSlice = createSlice({
  name: "usersDataSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.users = [];
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      });
  },
});

export default usersDataSlice.reducer;
