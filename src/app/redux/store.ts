import { configureStore } from "@reduxjs/toolkit";
import memberSlice from "./member/memberSlice"
import testimonialSlice from "./testimonial/testimonialSlice"
import servicesSlice from "./service/servicesSlice"
import userSlice from "./user/userSlice"
import appointmentSlice from "./appointment/appointmentSlice"

export const store = configureStore({
    reducer: {
        member: memberSlice,
        testimonial: testimonialSlice,
        services: servicesSlice,
        user: userSlice,
        appointment: appointmentSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;