import { convertBigIntsToInts } from "@/utils/helper/helpers";
import { InputObject, PatientBC, PatientDB, userData } from "@/types/types";
import { Prisma, PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { getPatientsDataFromBc } from "@/utils/helper/handlers";
import { decryptList } from "@/utils/cryptography/crypt";

const prisma = new PrismaClient();

export async function GET(request: Request, response: Response) {
  const dataFromDb = await prisma.patient.findMany();
  const dataFromBc = await getPatientsDataFromBc();
  return NextResponse.json(dataFromBc);
}

function combineDataAndSecretKeys(
  dataFromDb: PatientDB[],
  dataFromBc: PatientBC[],
): InputObject[] {
  const combinedObjects: InputObject[] = [];
  for (const dbObj of dataFromDb) {
    const matchingSecretKeyObj = dataFromBc.find(
      (bcObj) => bcObj.identifier === dbObj.identifier,
    );

    if (matchingSecretKeyObj) {
      console.log("matched");
      const combinedObj: InputObject = {
        identifier: dbObj.identifier,
        secretKey: matchingSecretKeyObj.secretKey,
        data: dbObj.data,
      };
      combinedObjects.push(combinedObj);
    }
  }

  return combinedObjects;
}

export async function POST(request: Request, response: Response) {}

export async function DELETE(request: Request) {}

export async function PUT(request: Request) {}
