import { Appointment, CreateAppointment } from "@/app";

// Get all appointments
export function getAppointmentsApi(): Promise<{ data: Appointment[] }> {
    return new Promise(async (resolve) => {
        const response = await fetch("/api/appointment");
        const data: Appointment[] = await response.json();
        resolve({ data });
    });
}

// Create appointment
export function createAppointmentApi(doc: CreateAppointment): Promise<{ data: Appointment }> {
    return new Promise(async (resolve) => {
        console.log(doc)
        const response = await fetch("/api/appointment", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(doc),
        });
        const data: Appointment = await response.json();
        resolve({ data });
    });
}

// Update appointment
export function updateAppointmentApi({ update }: { update: { id:string, complite:boolean} }): Promise<{ data: Appointment }> {
    console.log(update)
    return new Promise(async (resolve) => {
        const response = await fetch(`/api/appointment/${update.id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ update }),
        });
        const data: Appointment = await response.json();
        resolve({ data });
    });
}

// Delete appointment
export function deleteAppointmentApi(id: string): Promise<{ data: Appointment }> {
    return new Promise(async (resolve) => {
        const response = await fetch(`/api/appointment/${id}`, {
            method: "DELETE",
        });
        const data: Appointment = await response.json();
        resolve({ data });
    });
}
