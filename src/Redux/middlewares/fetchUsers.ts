import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../usersDataSlice";

interface IDataFetch {
  incomplete_results: boolean;
  items: IUser[];
  total_count: number;
}

export const fetchUsers = createAsyncThunk<IUser[], string>(
  "usersDataSlice/fetchUsers",
  (login) =>
    axios
      .get<IDataFetch>(
        `${process.env.REACT_APP_SEARCH_URL}?q=${login}&per_page=30 `
      )
      .then(({ data }) => data.items)
);
