import { convertBigIntsToInts } from "@/utils/helpers";
import { userData } from "@/types/types";
import { Prisma, PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: Request, response: Response) {
  // const userData = await prisma.user.findMany();
  // if (userData) {
  //   return NextResponse.json(convertBigIntsToInts(userData));
  // }
  // return NextResponse.json({});
  // as
  try {
    const authHeader = request.headers.get("authorization");
    if (authHeader) {
      const token = authHeader?.split(" ")[1];
      if (token !== process.env.NEXT_PUBLIC_API_SECRET) {
        return NextResponse.json({ error: "Unauthorized" });
      } else {
        const userData = await prisma.user.findMany();
        if (userData) {
          return NextResponse.json(convertBigIntsToInts(userData));
        }
        return NextResponse.json({ error: "No User Found" });
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
  // const body: userData = await request.json();
  // console.log(body);
  // const userData: userData = {
  //   name: body.name,
  //   org: body.org,
  //   email: body.email,
  //   phone: body.phone,
  //   isGod: body.isGod,
  //   isOrgVerified: body.isOrgVerified,
  //   isEmailVerified: body.isEmailVerified,
  //   isPhoneVerified: body.isPhoneVerified,
  //   canContribute: body.canContribute,
  //   canDownload: body.canDownload,
  //   token: body.token,
  //   fireUid: body.fireUid,
  //   isTac: body.isTac,
  // };
  // const res = await prisma.user.create({
  //   data: userData,
  // });
  // return NextResponse.json({ status: "file uploaded" });
  // asd
  try {
    const authHeader = request.headers.get("authorization");
    if (authHeader) {
      const token = authHeader?.split(" ")[1];
      if (token !== process.env.NEXT_PUBLIC_API_SECRET) {
        return NextResponse.json({ error: "Unauthorized" });
      } else {
        const body: userData = await request.json();
        const userData: userData = {
          name: body.name,
          org: body.org,
          email: body.email,
          phone: body.phone,
          isGod: body.isGod,
          isOrgVerified: body.isOrgVerified,
          isEmailVerified: body.isEmailVerified,
          isPhoneVerified: body.isPhoneVerified,
          canContribute: body.canContribute,
          canDownload: body.canDownload,
          token: body.token,
          fireUid: body.fireUid,
          isTac: body.isTac,
        };
        const res = await prisma.user.create({
          data: userData,
        });
        return NextResponse.json({ status: "User Uploaded" });
      }
    } else {
      return NextResponse.json({ error: "Unauthorized" });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}

export async function DELETE(request: Request) {
  // const body = await request.json();
  // console.log(body);
  // const user = await prisma.user.findFirst({
  //   where: {
  //     id: body.id,
  //   },
  // });
  // if (user) {
  //   const res = await prisma.user.delete({
  //     where: {
  //       id: body.id,
  //     },
  //   });
  // } else {
  //   return NextResponse.json({ status: "No User Found" });
  // }
  // return NextResponse.json({ status: "User sDeleted" });
  // as
  try {
    const authHeader = request.headers.get("authorization");
    if (authHeader) {
      const token = authHeader?.split(" ")[1];
      if (token !== process.env.NEXT_PUBLIC_API_SECRET) {
        return NextResponse.json({ error: "Unauthorized" });
      } else {
        const body = await request.json();
        const user = await prisma.user.findFirst({
          where: {
            id: body.id,
          },
        });
        if (user) {
          const res = await prisma.user.delete({
            where: {
              id: body.id,
            },
          });
        } else {
          return NextResponse.json({ status: "No User Found" });
        }
        return NextResponse.json({ status: "User Deleted" });
      }
    } else {
      return NextResponse.json({ error: "Unauthorized" });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}

export async function PUT(request: Request) {
  // const body = await request.json();
  // console.log(body);
  // const user = await prisma.user.findFirst({
  //   where: {
  //     phone: body.phone,
  //   },
  // });
  // if (user) {
  //   const res = await prisma.user.update({
  //     where: {
  //       id: user.id,
  //     },
  //     data: {
  //       name: body.name,
  //       org: body.org,
  //       email: body.email,
  //       phone: body.phone,
  //       isOrgVerified: body.isOrgVerified,
  //       isEmailVerified: body.isEmailVerified,
  //       isPhoneVerified: body.isPhoneVerified,
  //       canContribute: body.canContribute,
  //       canDownload: body.canDownload,
  //       token: body.token,
  //       proUrl: body.proUrl,
  //       fireUid: body.fireUid,
  //       isTac: body.isTac,
  //       isGod: body.isGod,
  //     },
  //   });
  // } else {
  //   return NextResponse.json({ status: "no user" });
  //   throw Error("No User Found");
  // }
  // return NextResponse.json({ status: "deleted" });
  // as
  try {
    const authHeader = request.headers.get("authorization");
    if (authHeader) {
      const token = authHeader?.split(" ")[1];
      if (token === process.env.NEXT_PUBLIC_API_SECRET) {
        const body = await request.json();
        const user = await prisma.user.findFirst({
          where: {
            phone: body.phone,
          },
        });
        if (user) {
          const res = await prisma.user.update({
            where: {
              id: user.id,
            },
            data: {
              name: body.name,
              org: body.org,
              email: body.email,
              phone: body.phone,
              isOrgVerified: body.isOrgVerified,
              isEmailVerified: body.isEmailVerified,
              isPhoneVerified: body.isPhoneVerified,
              canContribute: body.canContribute,
              canDownload: body.canDownload,
              token: body.token,
              proUrl: body.proUrl,
              fireUid: body.fireUid,
              isTac: body.isTac,
              isGod: body.isGod,
            },
          });
        } else {
          console.log("no user found");
          return NextResponse.json({ status: "no user found" });
        }
        console.log("updated");
        return NextResponse.json({ status: "updated" });
      } else {
        return NextResponse.json({ error: "Unauthorized" });
      }
    } else {
      console.log("un auth");

      return NextResponse.json({ error: "Unauthorized" });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
