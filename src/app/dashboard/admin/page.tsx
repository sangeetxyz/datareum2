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
import { motion } from "framer-motion";
import axios from "axios";
import {
  getAdminStats,
  handleDeleteBcAll,
  handleDeleteDbAll,
} from "@/utils/helper/handlers";

const AdminPanel = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [userData, setUserData] = useState<userData | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [allUsersData, setAllUsersData] = useAtom(allUserData);
  const [dbRows, setDbRows] = useState(0);
  const [bcRows, setBcRows] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [apiUsers, setApiUsers] = useState(0);

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

  const valueSetter = async () => {
    const results = await getAdminStats();
    setApiUsers(results.apiUsers);
    setBcRows(results.bcRows);
    setDbRows(results.dbRows);
    setTotalUsers(results.totalUsers);
  };

  useEffect(() => {
    waiter();
    if (!user && !isLoading) {
      router.push("/");
    } else {
      dataRefresher();
    }
  }, [user, isLoading]);

  useEffect(() => {
    valueSetter();
    setTimeout(valueSetter, 3000);
  }, []);

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
            <AdminStats
              apiUsers={apiUsers}
              bcRows={bcRows}
              dbRows={dbRows}
              totalUsers={totalUsers}
            />
            <TableSection columns={columns} data={allUsersData} />
            <WalletSection />
            <DangerSection refresher={valueSetter} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AdminPanel;

const AdminStats = ({
  dbRows,
  bcRows,
  totalUsers,
  apiUsers,
}: {
  dbRows: number;
  bcRows: number;
  totalUsers: number;
  apiUsers: number;
}) => {
  return (
    <>
      <div className="my-4 text-xl uppercase">database stats</div>
      <div className="bg-whit flex w-full space-x-4">
        <div className="flex w-full flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <div className="flex h-48 w-full flex-col items-center justify-center rounded-xl bg-stone-800 bg-opacity-50 outline outline-2 outline-stone-700 backdrop-blur-md">
            <div className="text-7xl">{dbRows}</div>
            <div className="mx-4 text-center uppercase">db rows</div>
          </div>
          <div className="flex h-48 w-full flex-col items-center justify-center rounded-xl bg-stone-800 bg-opacity-50 outline outline-2 outline-stone-700 backdrop-blur-md">
            <div className="text-7xl">{bcRows}</div>
            <div className="mx-4 text-center uppercase">bc rows</div>
          </div>
        </div>
        <div className="flex w-full flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <div className="flex h-48 w-full flex-col items-center justify-center rounded-xl bg-stone-800 bg-opacity-50 outline outline-2 outline-stone-700 backdrop-blur-md">
            <div className="text-7xl">{totalUsers}</div>
            <div className="mx-4 text-center uppercase">total users</div>
          </div>
          <div className="flex h-48 w-full flex-col items-center justify-center rounded-xl bg-stone-800 bg-opacity-50 outline outline-2 outline-stone-700 backdrop-blur-md">
            <div className="text-7xl">{apiUsers}</div>
            <div className="mx-4 text-center uppercase">api users</div>
          </div>
        </div>
      </div>
    </>
  );
};

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
        <div className="flex flex-col items-start justify-between md:flex-row">
          <div className="mb-4 flex w-full flex-col space-y-2 overflow-x-auto md:mb-0 md:w-auto">
            <div className="text-2xl font-bold capitalize">
              private wallet address:
            </div>
            <div className="">{process.env.NEXT_PUBLIC_WALLET_PRIVATE_KEY}</div>
          </div>
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
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
            className="cursor-pointer rounded-lg bg-acc px-3 py-2 text-sm font-bold uppercase text-stone-950"
          >
            copy address
          </motion.div>
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

const DangerSection = ({ refresher }: { refresher: () => {} }) => {
  const [dbCaution, setDbCaution] = useState(false);
  const [bcCaution, setBcCaution] = useState(false);
  return (
    <>
      <div className="my-4 text-xl uppercase text-red-500">danger zone</div>
      <div className="mb-4 w-full space-y-4 rounded-xl border border-red-500 bg-stone-800 bg-opacity-70 p-4 backdrop-blur-md">
        <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
          <div className="flex flex-col">
            <div className="text-2xl font-bold capitalize">
              database storage:
            </div>
            <div>Delete every patient data stored in the database</div>
          </div>
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={async () => {
              setDbCaution(true);
            }}
            className="cursor-pointer rounded-lg bg-acc px-3 py-2 text-sm font-bold uppercase text-stone-950"
          >
            delete all
          </motion.div>
        </div>
        <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
          <div className="flex flex-col">
            <div className="text-2xl font-bold capitalize">
              contract storage:
            </div>
            <div>Delete every data stored in the smart contract</div>
          </div>
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={async () => {
              setBcCaution(true);
            }}
            className="cursor-pointer rounded-lg bg-acc px-3 py-2 text-sm font-bold uppercase text-stone-950"
          >
            delete all
          </motion.div>
        </div>
      </div>
      {dbCaution && (
        <div
          onClick={() => {
            setDbCaution(false);
          }}
          className="fixed left-0 top-0 flex h-screen  w-full items-center justify-center backdrop-blur-sm"
        >
          <div className="flex w-64 flex-col space-y-4 rounded-xl border border-stone-700 bg-stone-950 bg-opacity-70 p-4 backdrop-blur-md">
            <div className="text-center font-bold">
              This action will be unreversable, do you still want to proceed?
            </div>
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={async (event) => {
                handleDeleteDbAll(event, setDbCaution, refresher);
              }}
              className="cursor-pointer rounded-lg bg-acc px-3 py-2 text-center text-sm font-bold uppercase text-stone-950"
            >
              yes
            </motion.div>
          </div>
        </div>
      )}
      {bcCaution && (
        <div
          onClick={() => {
            setBcCaution(false);
          }}
          className="fixed left-0 top-0 flex h-screen w-full items-center justify-center backdrop-blur-sm"
        >
          <div className="flex w-64 flex-col space-y-4 rounded-xl border border-stone-700 bg-stone-950 bg-opacity-70 p-4 backdrop-blur-md">
            <div className="text-center font-bold">
              This action will be unreversable, do you still want to proceed?
            </div>
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={async (event) => {
                handleDeleteBcAll(event, setBcCaution, refresher);
              }}
              className="cursor-pointer rounded-lg bg-acc px-3 py-2 text-center text-sm font-bold uppercase text-stone-950"
            >
              yes
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};
