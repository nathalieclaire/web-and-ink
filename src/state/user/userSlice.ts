import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    email: string | null;
    role: 'admin' | 'non-admin';
}

const initialState: UserState = {
    email: null,
    role: 'non-admin',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Save user role and email after login
        setUser: (state, action: PayloadAction<{ role: 'admin' | 'non-admin'; email: string }>) => {
            state.role = action.payload.role;
            state.email = action.payload.email;
        },
    },
});

// selector to get the user email and role from anywhere in the app
export const selectUserEmail = (state: { user: UserState }) => state.user.email;
export const selectUserRole = (state: { user: UserState }) => state.user.role;


export const { setUser } = userSlice.actions;

export default userSlice.reducer;


