import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { IUser} from "../usersDataSlice";


export const fetchUsers=createAsyncThunk<IUser[], string>('usersDataSlice/fetchUsers',
    (login)=>axios.get(`${process.env.REACT_APP_SEARCH_URL}?q=${login}&per_page=30 `).then(({data})=>data.items))
