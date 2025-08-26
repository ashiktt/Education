import { prisma } from "@/app/Hook/Prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const result = await prisma.appointment.findMany({})
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}

export async function POST(req: NextRequest) {
    try {
        const data = await req.json()
        console.log(data)
        const result = await prisma.appointment.create({
            data: {
                name: data.name,
                email: data.email,
                phoneNumber: data.phoneNumber,
                coursesid: data.coursesid,
                complite: data.complite,
            }
        })
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}