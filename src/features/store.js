import { configureStore } from "@reduxjs/toolkit";
// import { youtubeSlice } from './youtubeSlice'
import visibleVideoSliceReducer from "./visibleVideoSlice";
export const store = configureStore({
  reducer: {
    visibleVideo: visibleVideoSliceReducer,
  },
});
