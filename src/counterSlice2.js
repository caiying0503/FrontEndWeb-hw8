import {createSlice} from '@reduxjs/toolkit';

export const counterSlice2 = createSlice({
    name:'counter2',
    initialState:{
        value:0,
    },
    reducers:{
        increment:(state) =>{
            state.value += 2
        },
        decrement:(state) => {
            state.value -= 2
        },
        incrementByAmount:(state,action) => {
            state.value += action.payload
        },
    },
})

export const {increment , decrement , incrementByAmount} = counterSlice2.actions

export default counterSlice2.reducer