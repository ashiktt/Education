import { prisma } from "@/app/Hook/Prisma/prisma";
// import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const result = await prisma.service.findMany({})
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}

export async function POST(req: NextRequest) {
    // const session = await getServerSession(authOptions)
    // if (!session || session.token?.role !== "") {
    //     return NextResponse.json({ message: "UADMINnauthorized access" }, { status: 403 });
    // }
    try {
        const doc = await req.json()
        console.log(doc,"api")
        const result = await prisma.service.create({
            data: {
                authorName: doc.authorName,
                bannerImg: doc.bannerImg,
                courseName: doc.courseName,
                authorImg: doc.authorImg,
                totalAdmission: doc.totalAdmission,
                semesterCost: doc.semesterCost,
                universityName: doc.universityName,
                tag: doc.tag,
                duration: doc.duration,
                level: doc.level,
                semester: doc.semester,
                // recomanded: doc.recommended,
                description: doc.description,
            }
        })
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}