import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  dataValue: string;
}

const initialState: IState<IUser[]> = {
  users: [],
  isLoading: false,
  dataValue: "",
};
export const usersDataSlice = createSlice({
  name: "usersDataSlice",
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
      state.dataValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.users = [];
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
      });
  },
});
export const { changeValue } = usersDataSlice.actions;
export default usersDataSlice.reducer;
