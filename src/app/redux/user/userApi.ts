import { UserData } from "@/app"

// get all the user
export function getAllUserInfo(): Promise<{ data: UserData[] }> {
    return new Promise(async (resolve) => {
        const responce = await fetch("/api/user")
        const data: UserData[] = await responce.json()
        resolve({ data })
    })
}

// get cureent user 
export function getUserInfo(id: string): Promise<{ data: UserData }> {
    return new Promise(async (resolve) => {
        const responce = await fetch("/api/user/currentUser", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ id })
        })
        const data: UserData = await responce.json()
        resolve({ data })
    })
}