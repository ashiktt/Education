import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { Appointment, CreateAppointment } from "@/app";
import { getAppointmentsApi ,createAppointmentApi ,deleteAppointmentApi ,updateAppointmentApi } from "./appointmentApi";

// Fetch all appointments
export const fetchAppointmentsAsync = createAsyncThunk<Appointment[]>(
  "appointment/getDatasApi",
  async (): Promise<Appointment[]> => {
    const response = await getAppointmentsApi();
    return response.data;
  }
);

// Create appointment
export const createAppointmentAsync = createAsyncThunk<Appointment, CreateAppointment>(
  "appointment/createApi",
  async (data): Promise<Appointment> => {
    const response = await createAppointmentApi(data);
    if (response.data.id) {
      toast.success("Appointment created successfully!");
    } else {
      toast.error("Failed to create appointment.");
    }
    return response.data;
  }
);

// Update appointment
export const updateAppointmentAsync = createAsyncThunk<Appointment, { update: { id:string, complite: boolean} }>(
  "appointment/updateApi",
  async ({ update }): Promise<Appointment> => {
    const response = await updateAppointmentApi({ update });
    if (response.data.id) {
      toast.success("Appointment updated successfully!");
    } else {
      toast.error("Failed to update appointment.");
    }
    return response.data;
  }
);

// Delete appointment
export const deleteAppointmentAsync = createAsyncThunk<Appointment, { id: string }>(
  "appointment/deleteApi",
  async ({ id }): Promise<Appointment> => {
    const response = await deleteAppointmentApi(id);
    if (response.data.id) {
      toast.success("Appointment deleted successfully!");
    } else {
      toast.error("Failed to delete appointment.");
    }
    return response.data;
  }
);

const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    appointments: [] as Appointment[],
    status: "idle" as "idle" | "loading" | "success" | "failed",
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchAppointmentsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAppointmentsAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.appointments = action.payload;
      })
      .addCase(fetchAppointmentsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch appointments";
      })

      // Create
      .addCase(createAppointmentAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createAppointmentAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.appointments.push(action.payload);
      })
      .addCase(createAppointmentAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to create appointment";
      })

      // Update
      .addCase(updateAppointmentAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateAppointmentAsync.fulfilled, (state, action) => {
        state.status = "success";
        const index = state.appointments.findIndex((i) => i.id === action.payload.id);
        if (index !== -1) {
          state.appointments[index] = action.payload;
        }
      })
      .addCase(updateAppointmentAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to update appointment";
      })

      // Delete
      .addCase(deleteAppointmentAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteAppointmentAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.appointments = state.appointments.filter((app:any) => app.id !== action.payload.id);
      })
      .addCase(deleteAppointmentAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to delete appointment";
      });
  },
});

export default appointmentSlice.reducer;
