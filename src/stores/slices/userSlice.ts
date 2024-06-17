// userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface UserState {
    unique_id: string,
    first_name: string,
    last_name: string,
    country: string,
    email: string,
    is_blocked: boolean,
    is_deleted: boolean,
}

const initialState: UserState = {
    unique_id: "",
    first_name: "",
    last_name: "",
    country: "",
    email: "",
    is_blocked: false,
    is_deleted: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            return { ...state, ...action.payload };
        },
    },
});

// selector - allows app to update slice
export const { setUser } = userSlice.actions;

// selector - allows app to get slice
export const selectUser = (state: RootState) => state.user;

// reducer - registers slice in app redux-store
export default userSlice.reducer;
