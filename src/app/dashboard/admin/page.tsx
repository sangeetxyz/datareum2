"use client";

import Container from "@/components/containers/container";
import { useAuth } from "@/context/context";
import { unSigner } from "@/firebase/firebase";
import { userData } from "@/types/types";
import { getAllUsersData, getDashUserData } from "@/utils/helper/helpers";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import TableSection from "@/components/admin/tableSection";
import { columns } from "@/components/admin/tableHelpers/tableHelpers";
import AdminHeader from "@/components/headers/adminHeader";
import Spinner from "@/components/loaders/spinner";
import { useAtom } from "jotai";
import { allUserData } from "@/jotai/atom";

const AdminPanel = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [userData, setUserData] = useState<userData | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [allUsersData, setAllUsersData] = useAtom(allUserData);
  const waiter = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsLoading(false);
  };
  const getAndSetAllUsersData = async () => {
    const data = await getAllUsersData();
    setAllUsersData(data);
  };
  const setUserDataHelper = async () => {
    const data = await getDashUserData(user!);
    setUserData(data);
  };
  const dataRefresher = () => {
    getAndSetAllUsersData();
    setUserDataHelper();
  };
  useEffect(() => {
    // getAndSetAllUsersData();
    waiter();
    if (!user && !isLoading) {
      router.push("/");
    } else {
      dataRefresher();
    }
  }, [user, isLoading]);
  return !userData ? (
    <div>
      <Spinner />
      <div
        onClick={() => {
          unSigner();
        }}
      >
        signout
      </div>
    </div>
  ) : !userData.isGod ? (
    <div className="flex h-screen items-center justify-center bg-zinc-950">
      <div className="flex flex-col items-center justify-center text-zinc-50">
        <div className="text-2xl">
          Are you a <span className="font-bold">GOD</span>?
        </div>
        <div className="text-xl">{"- nah!"}</div>
        <div className="text-2xl">
          Go back{" "}
          <span
            className="cursor-pointer underline"
            onClick={() => {
              router.push("/");
            }}
          >
            home.
          </span>
        </div>
      </div>
    </div>
  ) : (
    <Container>
      <div className="relative min-h-screen w-full bg-stone-950">
        <AdminHeader />
        <div className="bg-pink-95 flex min-h-screen w-full flex-col items-center pt-20">
          <div className="h-full w-full max-w-6xl px-4">
            <TableSection columns={columns} data={allUsersData} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AdminPanel;
