import {useSelector, useDispatch, TypedUseSelectorHook} from "react-redux";
import type {RootState, AppDispatch} from "../Redux/store";

export const useAppDispatch=()=>useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;