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
import { toast } from "react-toastify";
import { provider } from "@/utils/ethereum/contract";
import { ethers } from "ethers";

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
          <div className="flex h-full w-full max-w-6xl flex-col px-4">
            <TableSection columns={columns} data={allUsersData} />
            <WalletSection />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AdminPanel;

const WalletSection = () => {
  const [wei, setWei] = useState("Loading... ");
  const [gwei, setGwei] = useState("Loading... ");
  const [ether, setEther] = useState("Loading... ");
  const balanceResolver = async () => {
    if (process.env.NEXT_PUBLIC_WALLET_PUBLIC_KEY) {
      const b = await provider.getBalance(
        process.env.NEXT_PUBLIC_WALLET_PUBLIC_KEY,
      );
      const bG = ethers.formatUnits(b, "gwei");
      const bE = ethers.formatEther(b);
      setWei(b.toString());
      setGwei(bG.toString().slice(0, 13));
      setEther(bE.toString().slice(0, 4));
    } else {
      console.log("error");
    }
  };
  useEffect(() => {
    balanceResolver();
  }, []);

  return (
    <>
      <div className="my-4 text-xl uppercase">ethereum wallet</div>
      <div className="w-full rounded-xl border border-stone-500 bg-stone-800 bg-opacity-70 p-4 backdrop-blur-md">
        <div className="flex items-start justify-between">
          <div className="flex flex-col space-y-2">
            <div className="text-2xl font-bold capitalize">
              private wallet address:
            </div>
            <div className="text-sm">
              {process.env.NEXT_PUBLIC_WALLET_PRIVATE_KEY}
            </div>
          </div>
          <div
            onClick={async () => {
              if (process.env.NEXT_PUBLIC_WALLET_PRIVATE_KEY) {
                await navigator.clipboard.writeText(
                  process.env.NEXT_PUBLIC_WALLET_PRIVATE_KEY,
                );
                toast.success("Address copied!", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: true,
                  progress: undefined,
                  pauseOnFocusLoss: false,
                  theme: "dark",
                });
              }
            }}
            className="rounded-lg bg-acc px-3 py-2 text-sm font-bold uppercase text-stone-950"
          >
            copy address
          </div>
        </div>
        <div className="mt-4 flex flex-col">
          <div className="mb-2 text-2xl font-bold capitalize">
            wallet balance
          </div>
          <div className="text-sm">{wei + " Wei"}</div>
          <div className="text-sm">{gwei + " Gwei"}</div>
          <div className="text-sm">{ether + " Ether"}</div>
        </div>
      </div>
    </>
  );
};
