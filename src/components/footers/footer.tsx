import React from "react";
import { FaEthereum } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex w-full justify-center bg-stone-950">
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
            <div className="cursor-pointer rounded-full bg-acc px-4 py-2 font-semibold sm:font-normal text-stone-950 sm:bg-stone-950 sm:text-stone-100">
              Submit
            </div>
          </div>
        </div>
        <div className="mt-4 flex w-full flex-col md:flex-row">
          <div className="border-1 bg-red-95 flex w-full flex-col items-center justify-center border-b md:border-r md:border-b-0 border-stone-700">
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
                Lorem ipsum dolor sit amet consectetur
              </div>
            </div>
          </div>
          <div className="bg-yellow-95 py-4 flex w-full items-center justify-around">
            <div className="flex flex-col space-y-2 text-sm">
              <div className="text-lg font-bold capitalize">services</div>
              <div className="cursor-pointer capitalize">contact us</div>
              <div className="cursor-pointer capitalize">about us</div>
              <div className="blog cursor-pointer">about us</div>
            </div>
            <div className="flex flex-col space-y-2 text-sm">
              <div className="text-lg font-bold capitalize">Resources</div>
              <div className="cursor-pointer capitalize">dashboard</div>
              <div className="cursor-pointer capitalize">docs</div>
              <div className="blog cursor-pointer">API</div>
            </div>
            <div className="flex flex-col space-y-2 text-sm">
              <div className="text-lg font-bold capitalize">Contact</div>
              <div className="cursor-pointer capitalize">dashboard</div>
              <div className="cursor-pointer capitalize">docs</div>
              <div className="blog cursor-pointer">API</div>
            </div>
          </div>
        </div>
        <div className="mt-4 w-full text-center text-xs">
          © 2023 Datareum All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
