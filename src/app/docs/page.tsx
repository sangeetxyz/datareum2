"use client";

import React, { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { BsDatabaseFill, BsStars } from "react-icons/bs";
import { SiFastapi } from "react-icons/si";
import Container from "@/components/containers/container";
import Header from "@/components/headers/header";
import { mobileItems, pcItems } from "@/utils/navBars/docsNav";
import Introduction from "@/components/docs/introduction";
import ApiRefs from "@/components/docs/apiRefs";
import { Database } from "lucide-react";

const Docs = () => {
  const [currentTab, setCurrentTab] = useState(2);
  const tabList = [
    {
      id: 1,
      title: "introduction",
      icon: () => <BsStars size={20} color={"#facc15"} />,
    },
    {
      id: 2,
      title: "aPI",
      icon: () => <SiFastapi size={20} color={"#facc15"} />,
    },
    {
      id: 3,
      title: "database",
      icon: () => <BsDatabaseFill size={20} color={"#facc15"} />,
    },
  ];
  return (
    <Container>
      <div className="relative min-h-screen bg-stone-950">
        <Header pcItems={pcItems} mobileItems={mobileItems} />
        <div className="bg-stone-95 flex h-full w-full items-center justify-center pt-20">
          <div className="bg-red-9 relative flex h-full w-full max-w-6xl text-stone-100">
            <div className="fixed bottom-4 top-24 hidden w-64 rounded-xl border border-stone-700 bg-stone-900 xl:block">
              <div className="flex w-full flex-col items-center justify-center space-y-8 rounded-xl border-b border-stone-700 bg-gradient-to-t from-stone-950 to-stone-900 py-8">
                <div>
                  <FaEthereum size={100} color={"#facc15"} />
                </div>
                <div className="flex flex-col">
                  <div className="text-center text-xl capitalize">offical</div>
                  <div className="text-center text-xl capitalize">
                    documentation
                  </div>
                  <div className="text-center text-xl">(v1)</div>
                </div>
              </div>
              <div className="h-ful borde bordersto absolute bottom-0 top-0 flex w-full flex-col rounded-xl pt-[17.6rem]">
                {tabList.map((tab, index) => {
                  return (
                    <div
                      onClick={() => {
                        setCurrentTab(tab.id);
                      }}
                      key={index}
                      className="flex w-full cursor-pointer items-center space-x-2 border-b border-stone-700 bg-gradient-to-b from-stone-900 to-stone-900 p-2"
                    >
                      <div>
                        <tab.icon />
                      </div>
                      <div className="text-lg capitalize">{tab.title}</div>
                    </div>
                  );
                })}
                <div className="h-full w-full rounded-xl bg-gradient-to-b from-stone-900 via-stone-950 to-stone-950"></div>
              </div>
            </div>
            <div className="borde mt-14 w-full bg-stone-950 p-4 xl:mt-0 xl:pl-[17rem]">
              {currentTab === 1 ? (
                <Introduction />
              ) : currentTab === 2 ? (
                <ApiRefs />
              ) : currentTab === 3 ? (
                <Database />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className="border-stone-70 fixed top-20 flex h-10 w-full justify-center px-4 pt-4 xl:hidden">
          <div className="mx-4 flex h-10 w-full max-w-6xl items-center justify-around space-x-2 rounded-full bg-stone-900 bg-opacity-50 px-4 outline outline-1 outline-stone-700">
            {tabList.map((tab, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setCurrentTab(tab.id);
                  }}
                  className="flex h-full cursor-pointer items-center space-x-1 border-stone-700"
                >
                  <tab.icon />
                  <div className="capitalize">{tab.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Docs;

