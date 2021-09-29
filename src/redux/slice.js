import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "data",
  initialState: {
    csvData: [],
    inheritance: "",
    target: "",
    renderedData: []
  },
  reducers: {
    saveData: (state, action) => {
      state = { ...state, csvData: action.payload };
      return state;
    },
    saveInheritance: (state, action) => {
      state = { ...state, inheritance: action.payload };
      return state;
    },
    saveTarget: (state, action) => {
      state = { ...state, target: action.payload };
      return state;
    },
    saveRenderedData: (state, action) => {
      state = { ...state, renderedData: action.payload };
      return state;
    }
  }
});

const { reducer, actions } = slice;
export const {
  saveData,
  saveTarget,
  saveInheritance,
  saveRenderedData
} = actions;
export default reducer;
