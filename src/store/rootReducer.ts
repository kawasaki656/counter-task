import { combineReducers } from "@reduxjs/toolkit";
import counter from "./features/counter";

const reducers = {
  counter,
};

export const rootReducer =  combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>;
