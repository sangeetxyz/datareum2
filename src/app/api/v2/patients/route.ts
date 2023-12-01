import {
  combineDataAndSecretKeys,
  getAllUsersData,
  verifyToken,
} from "@/utils/helper/helpers";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import { getPatientsDataFromBc } from "@/utils/helper/handlers";
import { decryptList } from "@/utils/cryptography/crypt";
import { ForDbTypes, userData } from "@/types/types";

const prisma = new PrismaClient();

export async function GET(request: NextRequest, response: NextResponse) {
  console.log("api");
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    const usersData = await getAllUsersData();
    const isValid = verifyToken(usersData, token);
    if (!isValid) {
      return NextResponse.json({ error: "Unauthorized" });
    } else {
      const dataFromDb = await prisma.patient.findMany();
      const dataFromBc = await getPatientsDataFromBc();
      console.log(dataFromBc, dataFromDb);
      const a = combineDataAndSecretKeys(dataFromDb, dataFromBc);
      const b = decryptList(a);
      return NextResponse.json(b);
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
