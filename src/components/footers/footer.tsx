import { cursorVariant } from "@/jotai/atom";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import React from "react";
import { FaEthereum } from "react-icons/fa";

const Footer = () => {
  const router = useRouter();
  const [variant, setVariant] = useAtom(cursorVariant);
  return (
    <div
      onMouseEnter={() => {
        setVariant("hide");
      }}
      onMouseLeave={() => {
        setVariant("default");
      }}
      className="flex w-full cursor-default justify-center bg-stone-950 py-4"
    >
      <div className="flex w-full max-w-6xl flex-col items-center p-4">
        <div className="mx-4 flex shrink flex-col items-center justify-between space-y-4 rounded-xl px-4 py-4 sm:bg-acc md:w-full md:flex-row md:space-y-0 md:rounded-full">
          <div className="px-4 text-xl font-bold text-acc sm:text-stone-950">
            Subscribe to the Newsletter
          </div>
          <div className="flex space-x-4">
            <input
              placeholder="email"
              type="email"
              className="rounded-full bg-stone-100 px-4 text-stone-950 focus:outline-none"
            />
            <div className="cursor-pointer rounded-full bg-acc px-4 py-2 font-semibold text-stone-950 sm:bg-stone-950 sm:font-normal sm:text-stone-100">
              Submit
            </div>
          </div>
        </div>
        <div className="my-8 flex w-full flex-col md:flex-row">
          <div className="border-1 bg-red-95 flex w-full flex-col items-center justify-center border-b border-stone-700 md:border-b-0 md:border-r">
            <div className="flex flex-col items-center py-8">
              <div className="flex cursor-pointer items-center">
                <FaEthereum size={28} color="#facc15" />
                <div
                  className="text-4xl uppercase text-stone-100"
                  onClick={() => {
                    // router.push("/");
                  }}
                >
                  datareum
                </div>
              </div>
              <div className="text-center text-sm">
                The next gen storage solution for healthcare!
              </div>
            </div>
          </div>
          <div className="bg-yellow-95 flex w-full items-center justify-around py-4">
            <div className="flex flex-col space-y-2 text-sm">
              <div className="text-lg font-bold capitalize underline decoration-acc">
                quick links
              </div>
              <div
                className="cursor-pointer capitalize"
                onClick={() => {
                  router.push("/contact");
                }}
              >
                contact us
              </div>
              <div
                className="cursor-pointer capitalize"
                onClick={() => {
                  router.push("/about");
                }}
              >
                about us
              </div>
              <div
                className="blog cursor-pointer capitalize"
                onClick={() => {
                  router.push("/privacy");
                }}
              >
                privacy policy
              </div>
            </div>
            <div className="flex flex-col space-y-2 text-sm">
              <div className="text-lg font-bold capitalize underline decoration-acc">
                Resources
              </div>
              <div
                className="cursor-pointer capitalize"
                onClick={() => {
                  router.push("/docs");
                }}
              >
                docs
              </div>
              <div
                className="cursor-pointer capitalize"
                onClick={() => {
                  router.push("/docs");
                }}
              >
                aPI
              </div>
              <div
                className="cursor-pointer capitalize"
                onClick={() => {
                  router.push("/docs");
                }}
              >
                database
              </div>
            </div>
            <div className="flex flex-col space-y-2 text-sm">
              <div className="text-lg font-bold capitalize underline decoration-acc">
                more
              </div>
              <div
                className="cursor-pointer capitalize"
                onClick={() => {
                  router.push("/donate");
                }}
              >
                donate
              </div>
              <div
                className="cursor-pointer capitalize"
                onClick={() => {
                  router.push("/explore");
                }}
              >
                explore
              </div>
              <div
                className="cursor-pointer capitalize"
                onClick={() => {
                  router.replace("https://www.youtube.com/watch?v=h-TIRIxhq6E");
                }}
              >
                help
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center text-xs">
          © 2023 Datareum All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
