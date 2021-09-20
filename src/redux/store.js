import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware,
  devTools: process.env.NODE_ENV !== "production"
});

export default store;
