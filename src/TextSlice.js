import { createSlice } from "@reduxjs/toolkit";

export const TextSlice = createSlice({
    name:'text2',
    initialState:{
        value:"empty",
    },
    reducers:{
        updateText:(state,action) =>{
            state.value = action.payload
        },
    },
}) 

export const {updateText} = TextSlice.actions
export default TextSlice.reducer