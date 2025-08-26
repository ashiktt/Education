import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, deleteApi, getDatasApi, updateApi } from "./memberApi";
import { CreateTeamMemberProp, TeamMemberProp } from "@/app";


import toast from "react-hot-toast";

// fetch all Team members
export const fetchTeamMemberAsync = createAsyncThunk<TeamMemberProp[]>(
    "member/getAllDataApi",
    async (): Promise<TeamMemberProp[]> => {
        const response = await getDatasApi();
        return response.data;
    }
);

// create Members
export const createTeamMemberAsync = createAsyncThunk<TeamMemberProp, CreateTeamMemberProp>(
    "member/createTeamMemberApi",
    async (data): Promise<TeamMemberProp> => {
        const response = await createApi(data);
        if (response.data.id) {
            toast.success("Team member created successfully!");
        } else {
            toast.error("Failed to create team member.");
        }
        return response.data;
    }
);

// update Members
export const updateTeamMemberAsync = createAsyncThunk<TeamMemberProp, { update: TeamMemberProp}>(
    "member/updateTeamMemberApi",
    async ({ update }): Promise<TeamMemberProp> => {

        const response = await updateApi({ update });
        if (response.data.id) {
            toast.success("Team member updated successfully!");
        } else {
            toast.error("Failed to update team member.");
        }
        return response.data;
    }
);

// delete TeamMember
export const deleteTeamMemberAsync = createAsyncThunk<TeamMemberProp, { id: string }>(
    "member/deleteApi",
    async ({ id }): Promise<TeamMemberProp> => {
        const response = await deleteApi(id);
        return response.data;
    }
);

const memberSlice = createSlice({
    name: "member",
    initialState: {
        members: [] as TeamMemberProp[], // All TeamMembers
        status: "idle" as "idle" | "loading" | "success" | "failed",
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetch all TeamMembers
            .addCase(fetchTeamMemberAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTeamMemberAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.members = action.payload;
            })
            .addCase(fetchTeamMemberAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to fetch announcements";
            })
            // create announcement
            .addCase(createTeamMemberAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createTeamMemberAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.members.push(action.payload)
            })
            .addCase(createTeamMemberAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to fetch announcement by ID";
            })

            // update announcement
            .addCase(updateTeamMemberAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateTeamMemberAsync.fulfilled, (state, action) => {
                state.status = 'success';
                const index = state.members.findIndex(i => i.id === action.payload.id);
                if (index !== -1) {
                    state.members[index] = action.payload;
                }
            })
            .addCase(updateTeamMemberAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to update announcement";
            })
            // delete announcement
            .addCase(deleteTeamMemberAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteTeamMemberAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.members = state.members.filter(del => del.id !== action.payload.id);
            })
            .addCase(deleteTeamMemberAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to delete announcement";
            });
    },
});

export default memberSlice.reducer;
