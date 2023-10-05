"use client";
import DashHeader from "@/components/headers/dashHeader";
import React, { useEffect, useState } from "react";
import { MdAccountBalanceWallet } from "react-icons/md";
import { PiCopyFill } from "react-icons/pi";
import { ethers } from "ethers";
import { GrConnect } from "react-icons/gr";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "react-toastify";
import Container from "@/components/containers/container";

const Donate = () => {
  type windowExtended = {
    window: Window;
    ethereum?: any;
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
      toast.error("Metamask is not installed!", {
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
      return null;
    } else {
      provider = new ethers.BrowserProvider(windowExtended.ethereum);
      signer = await provider.getSigner();
      toast.success("Metamask connected!", {
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
      return { provider, signer };
    }
  };
  const handleConnect = () => {
    connectMetamask().then((result) => {
      if (result) {
        setProvider(result?.provider);
        setSigner(result?.signer);
      } else {
        toast.success("Metamask connected!", {
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
    });
  };
  const handlePayment = async () => {
    if (amount === 0) {
      toast.error("Enter a valid amount!", {
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
      return;
    }
    const transaction = {
      to: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
      value: ethers.parseEther(amount.toString()),
    };
    try {
      const tx = await signer.sendTransaction(transaction);
      await tx.wait();
      toast.success("Payment successful!", {
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
    } catch (error) {
      toast.error("Payment rejected!", {
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
  };

  return (
    <Container>
      <div className="relative flex h-screen items-center justify-center overflow-hidden bg-stone-950 pt-20 outline outline-1 outline-stone-600">
        <DashHeader />
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          className="justify-cente shadow-ac w- z-10 flex h-96 flex-col items-center rounded-xl bg-stone-900 bg-opacity-50 text-stone-100 shadow-2xl outline outline-1 outline-stone-600 backdrop-blur-xl"
        >
          <div className="w-full rounded-xl py-4 text-center text-xl capitalize outline outline-1 outline-stone-600">
            donation
          </div>
          <div className="bg-red-95 flex h-full w-full flex-col justify-between p-2">
            <motion.div
              key={"3nd"}
              initial={{
                opacity: 0,
                x: 500,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              className="flex h-full flex-col items-center justify-center space-y-2 rounded-xl bg-stone-800 bg-opacity-20 outline outline-1 outline-stone-600 backdrop-blur-3xl"
            >
              <div className="flex items-center space-x-4">
                <div className="rounded-full border px-4 py-2 text-sm">
                  0x443 ... Bf7
                </div>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  className="cursor-pointer rounded-full bg-acc p-1 font-bold text-stone-100"
                >
                  <PiCopyFill size={30} color={"#1C1917"} />
                </motion.div>
              </div>
            </motion.div>
            <div className="flex items-center">
              <div className="mx-6 h-[1px] w-full bg-stone-100"></div>
              <div>OR</div>
              <div className="mx-6 h-[1px] w-full bg-stone-100"></div>
            </div>
            <AnimatePresence>
              {provider && signer ? (
                <motion.div
                  key={"2nd"}
                  initial={{
                    opacity: 0,
                    x: 500,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.5,
                  }}
                  className="flex h-full items-center justify-center space-x-4 rounded-xl bg-stone-800 bg-opacity-20 px-8 outline outline-1 outline-stone-600 backdrop-blur-md"
                >
                  <input
                    type="number"
                    step="0.01"
                    onChange={(event) => {
                      setAmount(parseFloat(event.currentTarget.value));
                    }}
                    className="w-44 appearance-none rounded-full px-3 py-2 text-sm text-stone-950 focus:outline-none"
                    placeholder="Enter amount in Eth"
                  />
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    onClick={handlePayment}
                    className="flex cursor-pointer items-center justify-center rounded-full bg-acc p-1.5"
                  >
                    <MdAccountBalanceWallet size={30} color={"#1C1917"} />
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key={"1st"}
                  initial={{
                    opacity: 0,
                    x: -500,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0,
                  }}
                  className="flex h-full items-center justify-center space-x-4 rounded-xl bg-stone-800 bg-opacity-20 px-10 outline outline-1 outline-stone-600 backdrop-blur-md"
                >
                  <div className="capitalize">connect metamask</div>
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    onClick={handleConnect}
                    className="flex cursor-pointer items-center justify-center rounded-full bg-acc p-1.5"
                  >
                    <GrConnect size={30} color={"#1C1917"} />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center overflow-hidden pt-20">
          <motion.div
            initial={{
              x: 1000,
            }}
            animate={{
              x: 0,
            }}
            transition={{
              delay: 1,
              // duration: 1,
            }}
            className="relative bottom-32 h-96 w-96 shrink-0 rounded-full bg-acc"
          ></motion.div>
          <motion.div
            initial={{
              x: -1000,
            }}
            animate={{
              x: 0,
            }}
            transition={{
              delay: 1,
              // duration: 1,
            }}
            className="relative top-32 h-96 w-96 shrink-0 rounded-full bg-acc"
          ></motion.div>
        </div>
      </div>
    </Container>
  );
};

export default Donate;
