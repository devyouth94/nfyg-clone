import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "app/instance";
import { basicParams } from "utils/params";

export const __getList = createAsyncThunk("/getList", async (params, thunkAPI) => {
  try {
    const { data } = await instance.get("/v2/nfyg/meetups", {
      params: { ...basicParams, ...params },
    });
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const __getListMore = createAsyncThunk("/getListMore", async (params, thunkAPI) => {
  try {
    const { data } = await instance.get("/v2/nfyg/meetups", {
      params: { ...basicParams, ...params },
    });
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const initialState = {
  data: [],
  isNext: null,
  isLoading: null,
  error: null,
};

export const upcomingListSlice = createSlice({
  name: "select",
  initialState,
  extraReducers: {
    [__getList.fulfilled]: (state, action) => {
      state.data = action.payload.meetups;
      state.isNext = action.payload.pagination.nextPage;
    },
    [__getList.rejected]: (state, action) => {
      state.error = action.payload;
    },

    [__getListMore.pending]: (state) => {
      state.isLoading = true;
    },
    [__getListMore.fulfilled]: (state, action) => {
      const newArr = action.payload.meetups.filter(
        (value) => !state.data.some((item) => item.id === value.id),
      );
      state.data = [...state.data, ...newArr];
      state.isNext = action.payload.pagination.nextPage;
      state.isLoading = false;
    },
    [__getListMore.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default upcomingListSlice.reducer;
