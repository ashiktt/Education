import { CreateServiceData, ServiceData } from "@/app"

// get all course 
export function getDatasApi(): Promise<{ data: ServiceData[] }> {
    return new Promise(async (resolve) => {
        const responce = await fetch("/api/services")
        const data: ServiceData[] = await responce.json()
        resolve({ data })
    })
}

// create course 
export function createApi(doc: CreateServiceData): Promise<{ data: ServiceData }> {
    console.log(doc,"createApi")
    return new Promise(async (resolve) => {
        const responce = await fetch("/api/services", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(doc)
        })
        const data: ServiceData = await responce.json()
        resolve({ data })
    })
}
// update course
export function updateApi({ update }: { update: ServiceData }): Promise<{ data: ServiceData }> {
    return new Promise(async (resolve) => {
        const responce = await fetch(`/api/services/${update.id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ update })
        })
        const data: ServiceData = await responce.json()
        resolve({ data })
    })
}
// delete course
export function deleteApi(id: string): Promise<{ data: ServiceData }> {
    return new Promise(async (resolve) => {
        const responce = await fetch(`/api/services/${id}`, {
            method: "DELETE",
        })
        const data: ServiceData = await responce.json()
        resolve({ data })
    })
}

// delete course
export function ByIdApi(id: string): Promise<{ data: ServiceData }> {
    return new Promise(async (resolve) => {
        const responce = await fetch(`/api/services/${id}`, {
            method: "GET",
            headers: { "content-type": "application/json" },
        })
        const data: ServiceData = await responce.json()
        resolve({ data })
    })
}