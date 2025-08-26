import { CreateTestimonial, TestimonialProp } from "@/app"

// get all course 
export function getDatasApi(): Promise<{ data: TestimonialProp[] }> {
    return new Promise(async (resolve) => {
        const responce = await fetch("/api/testimonial")
        const data: TestimonialProp[] = await responce.json()
        resolve({ data })
    })
}

// create course 
export function createApi(doc: CreateTestimonial): Promise<{ data: TestimonialProp }> {
    return new Promise(async (resolve) => {
        const responce = await fetch("/api/testimonial", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(doc)
        })
        const data: TestimonialProp = await responce.json()
        resolve({ data })
    })
}
// update course
export function updateApi({ update }: { update: TestimonialProp }): Promise<{ data: TestimonialProp }> {
    return new Promise(async (resolve) => {
        const responce = await fetch(`/api/testimonial/${update.id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ update })
        })
        const data: TestimonialProp = await responce.json()
        resolve({ data })
    })
}
// delete course
export function deleteApi(id: string): Promise<{ data: TestimonialProp }> {
    return new Promise(async (resolve) => {
        const responce = await fetch(`/api/testimonial/${id}`, {
            method: "DELETE",
        })
        const data: TestimonialProp = await responce.json()
        resolve({ data })
    })
}