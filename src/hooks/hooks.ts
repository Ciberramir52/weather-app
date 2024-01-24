import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { ThunkAction, UnknownAction } from "@reduxjs/toolkit";

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UnknownAction
>