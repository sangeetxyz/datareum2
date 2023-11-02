"use client";

//dM8GkzFyLM3ak9SY

import { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import {
  BiSolidBusiness,
  BiSolidQuoteAltLeft,
  BiSolidQuoteAltRight,
} from "react-icons/bi";
import { Tooltip } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/context";
import { userData } from "@/types/types";
import { getAllUsersData, switchSizeReturner } from "@/utils/helper/helpers";
import { MdEmail } from "react-icons/md";
import abstract from "../../../../public/auth/abstract.png";
import {
  handleGetOtpClickedForSignup,
  handleProceedClickedForSignup,
} from "@/utils/helper/handlers";
import { Switch } from "@/components/ui/switch";

import Container from "@/components/containers/container";
import Image from "next/image";

const Signup = () => {
  const [name, setName] = useState("Matte Black");
  const [email, setEmail] = useState("nateblcak9089@gmail.com");
  const [org, setOrg] = useState("Google INC");
  const [phoneNumber, setPhoneNumber] = useState("1212121212");
  const [isContributing, setIsContributing] = useState(false);
  const [isTacAccepted, setIsTacAccepted] = useState(true);
  const [isOtpClicked, setIsOtpClicked] = useState(false);
  const [OTP, setOTP] = useState("121212");
  const [allUserData, setAllUserData] = useState<userData[] | null>(null);
  const router = useRouter();
  const user = useAuth();

  const setAllUsersDataHelper = async () => {
    const data = await getAllUsersData();
    console.log(data);
    setAllUserData(data);
  };

  useEffect(() => {
    if (user.user) {
      console.log(user);
      router.push("/dashboard");
    }
    setAllUsersDataHelper();
  }, [user]);
  return (
    <div className="h-screen bg-gradient-to-b from-stone-900 to-stone-950">
      <div className="grid h-full grid-cols-3">
        {/* for mobile */}
        <div className="relative col-span-3 flex h-full flex-col items-center justify-center xl:col-span-1 xl:bg-stone-950">
          <AnimatePresence>
            {isOtpClicked ? (
              // second page
              <motion.div
                key={"second page"}
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  scale: 0.9,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                }}
                className="flex flex-col rounded-xl border-2 border-stone-700 bg-stone-800 bg-opacity-50 p-6 backdrop-blur-sm"
              >
                <div
                  className="w-72 cursor-pointer text-3xl font-bold text-stone-200 md:w-80"
                  onClick={() => {
                    setIsOtpClicked(false);
                  }}
                >
                  Back
                </div>
                <div className="mb-4 text-stone-200">
                  Enter your one time password
                </div>
                <div className="my-4 flex w-full justify-center">
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                    }}
                  >
                    <FaEthereum size={100} color="#facc15" />
                  </motion.div>
                </div>
                <div className="font-bold text-stone-200">6 Digit OTP</div>
                <div className="mt-1 flex items-center space-x-2">
                  <div className="">
                    <RiLockPasswordFill size={30} color="#facc15" />
                  </div>
                  <input
                    type="text"
                    value={OTP}
                    maxLength={6}
                    onChange={(value) => {
                      setOTP(value.target.value);
                    }}
                    placeholder="121212"
                    className="h-10 w-full rounded-xl bg-stone-200 px-4 text-stone-800 focus:outline-none"
                  />
                </div>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() => {
                    handleProceedClickedForSignup(
                      OTP,
                      name,
                      org,
                      email,
                      phoneNumber,
                      isContributing,
                      isTacAccepted,
                    );
                  }}
                  className="mt-6 w-full cursor-pointer rounded-xl bg-acc py-2 text-center font-bold text-stone-950"
                >
                  Proceed
                </motion.div>
                <div className="mt-1 text-center text-sm text-stone-200">
                  Already have an account?{" "}
                  <span
                    onClick={() => {
                      router.push("/signup");
                    }}
                    className="cursor-pointer capitalize underline"
                  >
                    sign in
                  </span>
                </div>
              </motion.div>
            ) : (
              // first page
              <motion.div
                key={"first page"}
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  scale: 0.9,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                }}
                className="flex flex-col rounded-xl border-2 border-stone-700 bg-stone-800 bg-opacity-50 p-6 backdrop-blur-sm"
              >
                <div className="w-72 text-3xl font-bold text-stone-200 md:w-80">
                  Get started
                </div>
                <div className="mb-4 text-stone-200">
                  Create a new account now
                </div>
                <div className="my-4 flex w-full justify-center">
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                    }}
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    <FaEthereum size={100} color="#facc15" />
                  </motion.div>
                </div>
                <div className="font-bold text-stone-100">Full Name</div>
                <div className="mt-1 flex items-center space-x-2">
                  <div className="">
                    <BsFillPersonFill size={30} color="#facc15" />
                  </div>
                  <input
                    type="text"
                    value={name || ""}
                    onChange={(value) => {
                      setName(value.target.value);
                    }}
                    placeholder="John Smith"
                    className="h-8 w-full rounded-lg bg-stone-200 px-4 text-stone-800 focus:outline-none"
                  />
                </div>
                <div className="mt-2 font-bold text-white">Email</div>
                <div className="mt-1 flex items-center space-x-2">
                  <div className="">
                    <MdEmail size={30} color="#facc15" />
                  </div>
                  <input
                    type="text"
                    value={email || ""}
                    onChange={(value) => {
                      setEmail(value.target.value);
                    }}
                    placeholder="abc@xyz.com"
                    className="h-8 w-full rounded-lg bg-stone-200 px-4 text-stone-800 focus:outline-none"
                  />
                </div>
                <div className="mt-2 font-bold text-white">Organization</div>
                <div className="mt-1 flex items-center space-x-2">
                  <div className="">
                    <BiSolidBusiness size={30} color="#facc15" />
                  </div>
                  <input
                    type="text"
                    value={org || ""}
                    onChange={(value) => {
                      setOrg(value.target.value);
                    }}
                    placeholder="Google"
                    className="h-8 w-full rounded-lg bg-stone-200 px-4 text-stone-800 focus:outline-none"
                  />
                </div>
                <div className="mt-2 font-bold text-white">Phone Number</div>
                <div className="mt-1 flex items-center space-x-2">
                  <div className="">
                    <AiFillPhone size={30} color="#facc15" />
                  </div>
                  <input
                    type="text"
                    value={phoneNumber || ""}
                    onChange={(value) => {
                      setPhoneNumber(value.target.value);
                    }}
                    placeholder="1234567890"
                    className="h-8 w-full rounded-lg bg-stone-200 px-4 text-stone-800 focus:outline-none"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="font-bold text-stone-100">
                    <Tooltip
                      title="Contribute to the health system"
                      arrow={false}
                    >
                      <span>I want to contribute</span>
                    </Tooltip>
                  </div>

                  <Switch
                    onCheckedChange={(checked) => {
                      setIsContributing(checked);
                    }}
                    className="bg-zinc-300"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="font-bold text-white">
                    I agree to{" "}
                    <span className="cursor-pointer underline">
                      Policy Terms
                    </span>
                  </div>
                  <Switch
                    onCheckedChange={(checked) => {
                      setIsTacAccepted(checked);
                    }}
                    className="bg-zinc-300"
                    // size={30}
                  />
                </div>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() => {
                    handleGetOtpClickedForSignup(
                      name,
                      email,
                      org,
                      phoneNumber,
                      isTacAccepted,
                      allUserData,
                    ).then((response) => {
                      if (response) {
                        setIsOtpClicked(true);
                      }
                    });
                  }}
                  className="mt-6 w-full cursor-pointer rounded-xl bg-acc py-2 text-center font-bold text-stone-950"
                >
                  Get OTP
                </motion.div>
                <div className="mt-1 text-center text-sm text-white">
                  Already have an account?{" "}
                  <span
                    onClick={() => {
                      router.push("/signin");
                    }}
                    className="cursor-pointer capitalize underline"
                  >
                    sign in
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* for pc */}
        <div className="relative col-span-2 hidden h-full w-full border-l border-stone-700 xl:block">
          <div className="absolute left-0 top-0 h-full w-full">
            <Image
              src={abstract.src}
              className="h-full w-full object-cover"
              width={2000}
              height={2000}
              priority
              alt="background"
            />
          </div>
          <div className="flex h-full w-full items-center justify-center">
            <div className="z-10 mx-48 flex flex-col items-center">
              <div className="flex items-center">
                <div className="relative bottom-32">
                  <BiSolidQuoteAltLeft size={100} />
                </div>
                <div className="text-justify text-xl capitalize">
                  I gave @datereum a try this weekend and I was able to create a
                  quick dashboard to visualize the data from the PostgreSQL
                  instance. Its super easy to use thir API or the direct DB
                  connection. Check out the tutorial{" "}
                </div>
                <div className="relative top-32">
                  <BiSolidQuoteAltRight size={100} />
                </div>
              </div>
              <div className="ml-24 mt-4 flex items-center space-x-4 self-start">
                {/* <img
                  src="/rolando.png"
                  alt=""
                  className="h-12 w-12 rounded-full object-cover"
                /> */}
                <Image
                  src={"/auth/rolando.png"}
                  alt=""
                  width={100}
                  height={100}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="capitalize">narendra rolando</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="sign-in"></div>
    </div>
  );
};

export default Signup;
