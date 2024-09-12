import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    role: 'admin' | 'non-admin';
}

const initialState: UserState = {
    role: 'non-admin',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // saves user role after login
        setUserRole: (state, action: PayloadAction<'admin' | 'non-admin'>) => {
            state.role = action.payload;
        },
    },
});

// selector to get the user role from anywhere in the app
export const selectUserRole = (state: { user: UserState }) => state.user.role;

export const { setUserRole } = userSlice.actions;

export default userSlice.reducer;


