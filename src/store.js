import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import counterReducer2 from './counterSlice2'
import TextSlice from './TextSlice'

export default configureStore({
    reducer:{
        counter:counterReducer,
        counter2:counterReducer2,
        text2:TextSlice,
    },
})
