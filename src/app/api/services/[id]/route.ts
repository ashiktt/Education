import { prisma } from "@/app/Hook/Prisma/prisma";
import { NextRequest, NextResponse } from "next/server";


// patch
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params
    const { update } = await req.json()
    try {
        const result = await prisma.service.update({
            where: { id },
            data: {
                authorName: update.authorName,
                bannerImg: update.bannerImg,
                courseName: update.courseName,
                authorImg: update.authorImg,
                totalAdmission: update.totalAdmission,
                semesterCost: update.semesterCost,
                universityName: update.universityName,
                tag: update.tag,
                duration: update.duration,
                level: update.level,
                semester: update.semester,
                description: update.description,
            }
        })
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}

// delete
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params

    try {
        const result = await prisma.service.delete({
            where: { id },
        })
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}


// find by id
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params
    try {
        const result = await prisma.service.findUnique({
            where: { id },
        })
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}