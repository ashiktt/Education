import { prisma } from "@/app/Hook/Prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

// crate a user
export async function POST(req: NextRequest) {
    try {
      const data = await req.json();
  
      // Check if the user already exists
      const existingUser = await prisma.user.findUnique({
        where: { email: data.email },
      });
  
      if (existingUser) {
        return NextResponse.json(
          { message: "User already exists." },
          { status: 409 } // Conflict status code
        );
      }
  
      // Create a new user
      const result = await prisma.user.create({
        data: {
          email: data.email,
          name: data.name,
          password: data.password,
        },
      });
  
      return NextResponse.json({ message: "Success", user: result });
    } catch (error) {
      console.error("Error:", error);
      return NextResponse.json(
        { message: "An error occurred.", error: error },
        { status: 500 } 
      );
    }
  }


export async function GET() {
    try {
        const result = await prisma.user.findMany({})
        return NextResponse.json(result)
    } catch{
        return NextResponse.json("Something went wrong")
    }
}