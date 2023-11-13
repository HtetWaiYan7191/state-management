import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        isAuth: false,
        username: ''
    }
}


export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: () =>{
            localStorage.removeItem('userData');
            return initialState;

        },
        logIn: (_, action) => {
            const userData = {
                isAuth: true,
                username: action.payload
            }
            localStorage.setItem('userData', JSON.stringify(userData));
            return {
                value: userData
            };
            
        }
    }
})

export const {logIn, logOut} = auth.actions;
export default auth.reducer;