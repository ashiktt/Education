import { CreateTeamMemberProp, TeamMemberProp } from "@/app"

// get all announcement 
export function getDatasApi(): Promise<{ data: TeamMemberProp[] }> {
    return new Promise(async (resolve) => {
        const responce = await fetch("/api/members")
        const data: TeamMemberProp[] = await responce.json()
        resolve({ data })
    })
}

// create Team 
export function createApi(doc: CreateTeamMemberProp): Promise<{ data: TeamMemberProp }> {
    return new Promise(async (resolve) => {
        const responce = await fetch("/api/members", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(doc)
        })
        const data: TeamMemberProp = await responce.json()
        resolve({ data })
    })
}
// update TeamMemberProp
export function updateApi({ update }: { update: TeamMemberProp}): Promise<{ data: TeamMemberProp }> {
    return new Promise(async (resolve) => {
        const responce = await fetch(`/api/members/${update.id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(update)
        })
        const data: TeamMemberProp = await responce.json()
        resolve({ data })
    })
}

// delete teamMember
export function deleteApi(id: string): Promise<{ data: TeamMemberProp }> {
    return new Promise(async (resolve) => {
        const responce = await fetch(`/api/members/${id}`, {
            method: "DELETE",
        })
        const data: TeamMemberProp = await responce.json()
        resolve({ data })
    })
}