import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ByIdApi, createApi, deleteApi, getDatasApi, updateApi } from "./servicesApi";
import { CreateServiceData, ServiceData } from "@/app";
import toast from "react-hot-toast";

// fetch all services
export const fetchServicestAsync = createAsyncThunk<ServiceData[]>(
    "services/getDatasApi",
    async (): Promise<ServiceData[]> => {
        const response = await getDatasApi();
        return response.data;
    }
);

// create services
export const createServicesAsync = createAsyncThunk<ServiceData, CreateServiceData>(
    "services/createApi",
    async (data): Promise<ServiceData> => {
        
        const response = await createApi(data);
        if (response.data.id) {
            toast.success("Service created successfully!");
        } else {
            toast.error("Failed to create Service.");
        }

        return response.data;
    }
);

// update services
export const updateServicesAsync = createAsyncThunk<ServiceData, { update: ServiceData }>(
    "services/updateApi",
    async (update): Promise<ServiceData> => {
        const response = await updateApi(update);
        if (response.data.id) {
            toast.success("Service updated successfully!");
        } else {
            toast.error("Failed to update Service.");
        }
        return response.data;
    }
);

// delete services
export const deleteServicesAsync = createAsyncThunk<ServiceData, { id: string }>(
    "services/deleteApi",
    async ({ id }): Promise<ServiceData> => {
        const response = await deleteApi(id);
        if (response.data.id) {
            toast.success("Service deleted successfully!");
        } else {
            toast.error("Failed to delete Service.");
        }
        return response.data;
    }
);


// find by id services
export const fetchServicesByIdAsync = createAsyncThunk<ServiceData, { id: string }>(
    "services/ByIdApi",
    async ({ id }): Promise<ServiceData> => {
        const response = await ByIdApi(id);
        return response.data;
    }
);

const serviceSlice = createSlice({
    name: "services",
    initialState: {
        Services: [] as ServiceData[],
        course: null as ServiceData | null,
        status: "idle" as "idle" | "loading" | "success" | "failed",
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetch all services
            .addCase(fetchServicestAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchServicestAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.Services = action.payload;
            })
            .addCase(fetchServicestAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to fetch services";
            })

            // create services
            .addCase(createServicesAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createServicesAsync.fulfilled, (state, action) => {
                state.status = 'success';
                console.log(action.payload, "action.payload")
                state.Services.push(action.payload);
            })
            .addCase(createServicesAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to create course";
            })

            // update services
            .addCase(updateServicesAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateServicesAsync.fulfilled, (state, action) => {
                state.status = 'success';
                const index = state.Services.findIndex(i => i.id === action.payload.id);
                if (index !== -1) {
                    state.Services[index] = action.payload;
                }
            })
            .addCase(updateServicesAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to update course";
            })

            // delete services
            .addCase(deleteServicesAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteServicesAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.Services = state.Services.filter(del => del.id !== action.payload.id);
            })
            .addCase(deleteServicesAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to delete course";
            })

            // find by id services
            .addCase(fetchServicesByIdAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchServicesByIdAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.course = action.payload;
            })
            .addCase(fetchServicesByIdAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to delete course";
            });
    },
});

export default serviceSlice.reducer;
