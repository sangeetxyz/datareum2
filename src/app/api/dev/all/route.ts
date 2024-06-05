import { combineDataAndSecretKeys } from "@/utils/helper/helpers";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { getPatientsDataFromBc } from "@/utils/helper/handlers";
import { decryptList } from "@/utils/cryptography/crypt";

const prisma = new PrismaClient();

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    if (token !== process.env.NEXT_PUBLIC_API_SECRET) {
      return NextResponse.json({ error: "Unauthorized" });
    } else {
      try {
        const dataFromDb = await prisma.patient.findMany();
        const dataFromBc = await getPatientsDataFromBc();
        const a = combineDataAndSecretKeys(dataFromDb, dataFromBc);
        const b = decryptList(a);
        return NextResponse.json(b);
      } catch (error) {
        console.log("Error msg: " + (error as Error).message);
        return NextResponse.json({ error: "Could not fetch data" });
      }
    }
  } catch (error) {
    console.log("Error msg: " + (error as Error).message);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
