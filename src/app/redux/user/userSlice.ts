import { UserData } from "@/app";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUserInfo, getUserInfo } from "./userApi";

// GEt all the user
export const fetchAllUserAsync = createAsyncThunk<UserData[]>(
    "user/getAllUserInfo",
    async (): Promise<UserData[]> => {
        const response = await getAllUserInfo();
        return response.data;
    }
);
// find user with id
export const fetchuserAsync = createAsyncThunk<UserData, { id: string }>(
    "user/getuserApi",
    async ({ id }): Promise<UserData> => {
        const response = await getUserInfo(id);
        return response.data;
    }
);

interface UserState {
    currentUser: UserData | null;
    users: UserData[]
    status: "idle" | "loading" | "success" | "failed";
    error: string | null;
}

const initialState: UserState = {
    currentUser: null,
    users: [],
    status: "idle",
    error: null,
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            // get current user
            .addCase(fetchuserAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchuserAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.currentUser = action.payload;
            })
            .addCase(fetchuserAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to fetch courses";
            })
            // get All the user
            .addCase(fetchAllUserAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllUserAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.users = action.payload;
            })
            .addCase(fetchAllUserAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to fetch courses";
            })
    },
})
export default userSlice.reducer