"use client";
import DashHeader from "@/components/headers/dashHeader";
import React, { useEffect, useState } from "react";
import { MdAccountBalanceWallet } from "react-icons/md";
import { PiCopyFill } from "react-icons/pi";
import { ethers } from "ethers";
import { GrConnect } from "react-icons/gr";

const Donate = () => {
  type windowExtended = {
    window: Window;
    ethereum?: object;
  };
  const [amount, setAmount] = useState(0.0);
  const [provider, setProvider] = useState<any>(null);
  const [signer, setSigner] = useState<any>(null);
  const connectMetamask = async (): Promise<{
    provider: object;
    signer: object;
  } | null> => {
    let signer = null;
    let provider = null;
    const windowExtended: windowExtended = window;
    if (windowExtended.ethereum === null) {
      console.log("MetaMask not installed");
      return null;
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      return { provider, signer };
    }
  };
  const handleConnect = () => {
    connectMetamask().then((result) => {
      if (result) {
        setProvider(result?.provider);
        setSigner(result?.signer);
        console.log("done");
      } else {
        console.log("error");
      }
    });
  };
  const handlePayment = async () => {
    const transaction = {
      to: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
      value: ethers.parseEther(amount.toString()),
    };
    try {
      const tx = await signer.sendTransaction(transaction);
      await tx.wait();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {}, []);

  return (
    <div className="relative flex h-screen items-center justify-center bg-stone-950 pt-20 outline outline-1 outline-stone-600">
      <DashHeader />
      <div className="justify-cente shadow-ac w- z-10 flex h-96 flex-col items-center rounded-xl bg-stone-900 bg-opacity-50 text-stone-100 shadow-2xl outline outline-1 outline-stone-600 backdrop-blur-xl">
        <div className="w-full rounded-xl py-4 text-center text-xl capitalize outline outline-1 outline-stone-600">
          donation
        </div>
        <div className="bg-red-95 flex h-full w-full flex-col justify-between p-2">
          <div className="flex h-full flex-col items-center justify-center space-y-2 rounded-xl bg-stone-800 bg-opacity-20 outline outline-1 outline-stone-600 backdrop-blur-3xl">
            <div className="flex items-center space-x-4">
              <div className="rounded-full border px-4 py-2 text-sm">
                0x443 ... Bf7
              </div>
              <div className="cursor-pointer rounded-full bg-acc p-1 font-bold text-stone-100">
                <PiCopyFill size={30} color={"#1C1917"} />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mx-6 h-[1px] w-full bg-stone-100"></div>
            <div>OR</div>
            <div className="mx-6 h-[1px] w-full bg-stone-100"></div>
          </div>

          {provider && signer ? (
            <div className="flex h-full items-center justify-center space-x-4 rounded-xl bg-stone-800 bg-opacity-20 px-8 outline outline-1 outline-stone-600 backdrop-blur-md">
              <input
                type="number"
                step="0.01"
                onChange={(event) => {
                  setAmount(parseFloat(event.currentTarget.value));
                }}
                className="w-44 appearance-none rounded-full px-3 py-2 text-sm text-stone-950 focus:outline-none"
                placeholder="Enter amount in Eth"
              />
              <div
                onClick={handlePayment}
                className="flex cursor-pointer items-center justify-center rounded-full bg-acc p-1.5"
              >
                <MdAccountBalanceWallet size={30} color={"#1C1917"} />
              </div>
            </div>
          ) : (
            <div className="flex h-full items-center justify-center space-x-4 rounded-xl bg-stone-800 bg-opacity-20 px-10 outline outline-1 outline-stone-600 backdrop-blur-md">
              <div className="capitalize">connect metamask</div>
              <div
                onClick={handleConnect}
                className="flex cursor-pointer items-center justify-center rounded-full bg-acc p-1.5"
              >
                <GrConnect size={30} color={"#1C1917"} />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center overflow-hidden pt-20">
        <div className="relative bottom-32 h-96 w-96 shrink-0 rounded-full bg-acc"></div>
        <div className="relative top-32 h-96 w-96 shrink-0 rounded-full bg-acc"></div>
      </div>
    </div>
  );
};

export default Donate;
