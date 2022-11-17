import { configureStore } from "@reduxjs/toolkit";
import select from "app/slices/selectSlice";
import upcomingList from "app/slices/upcomingListSlice";

export const store = configureStore({
  reducer: {
    select,
    upcomingList,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
