"use client";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { provider } from "@/utils/ethereum/contract";
import { ethers } from "ethers";
import { motion } from "framer-motion";

export const WalletSection = () => {
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
