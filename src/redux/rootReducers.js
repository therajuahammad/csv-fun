import { combineReducers } from "@reduxjs/toolkit";
import dataReducer from "./slice";

const rootReducers = combineReducers({
  data: dataReducer
});

export default rootReducers;
