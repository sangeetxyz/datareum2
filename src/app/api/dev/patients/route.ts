import { convertBigIntsToInts } from "@/utils/helper/helpers";
import { PatientDB, userData } from "@/types/types";
import { Prisma, PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: Request, response: Response) {
  // const userData = await prisma.patient.findMany();
  // return NextResponse.json(convertBigIntsToInts(userData));
  try {
    const authHeader = request.headers.get("authorization");
    if (authHeader) {
      const token = authHeader?.split(" ")[1];
      if (token !== process.env.NEXT_PUBLIC_API_SECRET) {
        return NextResponse.json({ error: "Unauthorized" });
      } else {
        const patientData = await prisma.patient.findMany();
        return NextResponse.json(convertBigIntsToInts(patientData));
      }
    } else {
      return NextResponse.json({ error: "Unauthorized" });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}

export async function POST(request: Request, response: Response) {
  try {
    const authHeader = request.headers.get("authorization");
    if (authHeader) {
      const token = authHeader?.split(" ")[1];
      if (token !== process.env.NEXT_PUBLIC_API_SECRET) {
        return NextResponse.json({ error: "Unauthorized" });
      } else {
        const body = await request.json();
        const res = await prisma.patient.createMany({
          data: body.data,
          skipDuplicates: true,
        });
        return NextResponse.json({ status: "Patient Uploaded" });
      }
    } else {
      return NextResponse.json({ error: "Unauthorized" });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}

export async function DELETE(request: Request, response: Response) {
  try {
    const authHeader = request.headers.get("authorization");
    if (authHeader) {
      const token = authHeader?.split(" ")[1];
      if (token !== process.env.NEXT_PUBLIC_API_SECRET) {
        return NextResponse.json({ error: "Unauthorized" });
      } else {
        const res = await prisma.patient.deleteMany({});
        return NextResponse.json({ status: "All Deleted" });
      }
    } else {
      return NextResponse.json({ error: "Unauthorized" });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
