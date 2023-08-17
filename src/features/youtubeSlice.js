import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  videos: [],
};

export const youtubeSlice = createSlice({
  name: "youtube",
  initialState,
  reducers: {
    fetchAllVideos: (state) => {
      state.videos = action.payload;
    },
  },
});

export const useYoutubeVideos = () =>
  useSelector((state) => {
    return state.youtube.videos;
  });
