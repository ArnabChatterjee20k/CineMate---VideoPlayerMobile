import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visibleVideoIndex : -1
}

const visibleVideoSlice = createSlice({
    name:"visibleVideo",
    initialState,
    reducers:{
        setCurrentIndex:(state,action)=>{
            state.visibleVideoIndex = Number.parseInt(action.payload)
        }
    }
})

export const {setCurrentIndex} = visibleVideoSlice.actions
export const currentVisibleIndex = (state)=>state.visibleVideo.visibleVideoIndex

export default visibleVideoSlice.reducer