import { prisma } from "@/app/Hook/Prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const result = await prisma.testimonial.findMany({})
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}

export async function POST(req: NextRequest) {
    try {
        const data = await req.json()
        const result = await prisma.testimonial.create({
            data: {
                image:data.image,
                name:data.name,
                rating:data.rating,
                role:data.role,
                text:data.text
            }
        })
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}