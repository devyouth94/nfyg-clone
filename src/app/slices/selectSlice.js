import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
  day: [],
  region: [],
  soldOut: null,
};

export const selectSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    getSelect: (state, action) => {
      if (action.payload.name === "카테고리") {
        state.category = [...state.category, action.payload.item];
      } else if (action.payload.name === "요일") {
        state.day = [...state.day, action.payload.item];
      } else if (action.payload.name === "지역") {
        state.region = [...state.region, action.payload.item];
      }
    },

    delSelect: (state, action) => {
      if (action.payload.name === "카테고리") {
        state.category = state.category.filter((item) => item !== action.payload.item);
      } else if (action.payload.name === "요일") {
        state.day = state.day.filter((item) => item !== action.payload.item);
      } else if (action.payload.name === "지역") {
        state.region = state.region.filter((item) => item !== action.payload.item);
      }
    },

    resetSelect: (state, action) => {
      if (action.payload.name === "카테고리") {
        state.category = [];
      } else if (action.payload.name === "요일") {
        state.day = [];
      } else if (action.payload.name === "지역") {
        state.region = [];
      }
    },

    isSoldOut: (state, action) => {
      if (action.payload === null) {
        state.soldOut = false;
      } else {
        state.soldOut = null;
      }
    },
  },
});

export const { getSelect, delSelect, resetSelect, isSoldOut } = selectSlice.actions;

export default selectSlice.reducer;
