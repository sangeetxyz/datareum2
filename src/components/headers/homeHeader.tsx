import { useAuth } from "@/context/context";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineClose,
  AiTwotoneExperiment,
} from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { FaEthereum } from "react-icons/fa";
import { RiMenu4Fill } from "react-icons/ri";
import {
  AnimatePresence,
  AnimationProps,
  motion,
  useTransform,
} from "framer-motion";
import { BiRightArrowAlt } from "react-icons/bi";
import { BsSuitHeartFill } from "react-icons/bs";

import { menuItem, menu1 } from "../custom/anim";
import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";
const lora = Lora({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const HomeHeader = (props: { setVariant: (data: string) => void }) => {
  const router = useRouter();
  const { user } = useAuth();
  const [isNavOpened, setIsNavOpened] = useState(false);
  const navbarItems = [
    {
      title: "get started",
      link: user ? "/dashboard" : "/signin",
    },
    {
      title: "documentation",
      link: "/docs",
    },
    {
      title: "explore stats",
      link: "/explore",
    },
    {
      title: "who we are",
      link: "/explore",
    },
    {
      title: "privacy policy",
      link: "/docs",
    },
    {
      title: "contact us",
      link: "/docs",
    },
  ];
  const menuItems = [
    {
      title: "docs",
      link: "/docs",
    },
    {
      title: "explore",
      link: "/explore",
    },
    {
      title: "about",
      link: "/about",
    },
    {
      title: "privacy",
      link: "/docs",
    },
    {
      title: "contact",
      link: "/docs",
    },
  ];
  return (
    <div className="bg-stone-95 fixed top-0 z-10 flex h-20 w-full justify-center border-gray-700 outline outline-1 outline-stone-700 backdrop-blur-sm backdrop-brightness-90">
      <div className="bg-red-30 flex w-full max-w-[94rem] items-center justify-between px-4 2xl:pl-0 2xl:pr-0">
        <div className="flex flex-col items-end justify-center">
          <div className="flex cursor-pointer items-center">
            <motion.div
              whileHover={{
                rotate: 20,
              }}
            >
              <FaEthereum size={28} color="#facc15" />
            </motion.div>
            <div
              className="text-xl uppercase text-white md:text-2xl lg:text-3xl"
              onClick={() => {
                router.push("/");
              }}
            >
              datareum
            </div>
          </div>
        </div>
        <div className="hidden space-x-10 text-sm uppercase lg:flex">
          {menuItems.map((item, index) => {
            return (
              <motion.div
                whileHover={{ scale: 1.1, color: "#facc15" }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer"
              >
                {item.title}
              </motion.div>
            );
          })}
        </div>
        {/* <Magnetic> */}
        <motion.div
          className="hidden cursor-pointer items-center rounded-lg bg-acc from-violet-500 to-teal-500 px-4 py-3 font-bold text-stone-950 md:flex"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => {
            if (!user) {
              router.push("/signin");
            } else {
              router.push("/dashboard");
            }
          }}
        >
          <div className="mx-1 text-sm uppercase">
            {user ? "dashboard" : "join now"}
          </div>
          <AiOutlineArrowRight size={20} />
        </motion.div>
        {/* </Magnetic> */}
        <div className="cursor-pointer md:hidden">
          <RiMenu4Fill
            size={35}
            onClick={() => {
              setIsNavOpened(true);
            }}
          />
        </div>
      </div>
      {/* for mobile */}
      <AnimatePresence>
        {isNavOpened && (
          <motion.div
            key={"mobile_menu"}
            variants={menu1}
            initial={"initial"}
            animate={"enter"}
            exit={"exit"}
            className="fixed top-0 h-screen w-screen"
          >
            <div
              className="flex h-full w-full flex-col items-center justify-between bg-acc"
              onClick={() => {
                setIsNavOpened(false);
              }}
            >
              <div className="flex w-full justify-between p-4 md:p-8">
                <div>
                  <FaEthereum size={40} color="#0C0A09" />
                </div>
                <div className="cursor-pointer">
                  <GrClose size={40} color="#0C0A09" />
                </div>
              </div>
              <div className="space- flex w-full flex-col items-center">
                {navbarItems.map((item, index) => {
                  return (
                    <motion.div
                      variants={menuItem}
                      initial={"initial"}
                      animate={"enter"}
                      exit={"exit"}
                      custom={index}
                      whileHover={{
                        backgroundColor: "#0C0A09",
                        color: "#facc15",
                        fontSize: "40px",
                        transition: {
                          duration: 0.5,
                        },
                      }}
                      whileTap={{
                        fontSize: "20px",
                      }}
                      onClick={(event) => {
                        event.stopPropagation();
                        router.push(item.link);
                      }}
                      className={cn(
                        "w-full cursor-pointer py-3 text-center text-4xl font-bold uppercase text-stone-950",
                        lora.className,
                      )}
                    >
                      {item.title}
                    </motion.div>
                  );
                })}
              </div>
              <div className="mb-4 flex items-center space-x-1">
                <div className="font-bold text-stone-950">Made with</div>
                <div>
                  <BsSuitHeartFill size={20} color="#0C0A09" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomeHeader;
