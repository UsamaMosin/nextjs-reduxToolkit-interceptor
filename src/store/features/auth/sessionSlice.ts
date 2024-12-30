import { createSlice } from "@reduxjs/toolkit";


export interface AuthState {
    signedIn: boolean;
    token: string | null;
}

const initialState: AuthState = {
    signedIn: false,
    token: null,
}

export const authSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        onSignInSuccess: (state, action) => {
            state.signedIn = true
            state.token = action.payload
        },
        onSignOutSuccess: (state) => {
            state.signedIn = false
            state.token = ''
        },
        setToken: (state, action) => {
            state.token = action.payload
        },
    },
});

// Action creators are generated for each case reducer function
export const { onSignInSuccess, onSignOutSuccess, setToken } = authSlice.actions;

export default authSlice.reducer;