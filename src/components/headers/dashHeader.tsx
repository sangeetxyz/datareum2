import { useAuth } from "@/context/context";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { FaEthereum } from "react-icons/fa";
import { RiMenu4Fill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import { BsSuitHeartFill } from "react-icons/bs";
import { menuItem, menu1 } from "../custom/anim";
import { cn } from "@/lib/utils";
import { unSigner } from "@/firebase/firebase";
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const DashHeader = () => {
  const navbarItems = [
    {
      title: "documentation",
      link: "/docs",
    },
    {
      title: "explore stats",
      link: "/explore",
    },
    {
      title: "privacy policy",
      link: "/docs",
    },
    {
      title: "sign out",
      link: "unsigner",
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
      title: "contact",
      link: "/docs",
    },
  ];
  const [isNavOpened, setIsNavOpened] = useState(false);
  const router = useRouter();
  return (
    <div className="fixed top-0 z-10 flex h-20 w-full justify-center border-gray-700 outline outline-1 outline-stone-700 backdrop-blur-sm backdrop-brightness-90">
      <div className="flex w-full max-w-6xl items-center justify-between px-4">
        <div className="flex flex-col items-end justify-center">
          <div className="flex cursor-pointer items-center">
            <FaEthereum size={28} color="#facc15" />
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
        <div className="hidden space-x-10 text-sm uppercase md:flex">
          {menuItems.map((item, index) => {
            return (
              <motion.div
                whileHover={{ scale: 1.1, color: "#facc15" }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer text-stone-100"
                key={index}
              >
                {item.title}
              </motion.div>
            );
          })}
        </div>
        {/* dashboard button */}

        <div className="cursor-pointer md:hidden">
          <RiMenu4Fill
            color="fff"
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
                        if (item.link === "unsigner") {
                          unSigner();
                        }
                        router.push(item.link);
                      }}
                      className={cn(
                        "w-full cursor-pointer py-3 text-center text-4xl font-bold uppercase text-stone-950",
                        lora.className,
                      )}
                      key={index}
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

export default DashHeader;
