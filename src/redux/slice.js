import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "data",
  initialState: [],
  reducers: {
    saveData: (state, action) => {
      state = action.payload;
      return state;
    }
  }
});

const { reducer, actions } = slice;
export const { saveData } = actions;
export default reducer;
