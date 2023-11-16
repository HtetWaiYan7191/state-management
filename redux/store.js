import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/authSlice';
import playerReducer from './features/playerSlice'
const store = configureStore({
    reducer: {
         authReducer,
         playerReducer,

    }
})

export default store;