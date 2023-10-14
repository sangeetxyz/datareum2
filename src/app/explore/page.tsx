"use client";
import DashHeader from "@/components/headers/dashHeader";
import Header from "@/components/headers/header";
import { mobileItems, pcItems } from "@/utils/navBars/exploreNav";
import React from "react";

const Explore = () => {
  return (
    <div className="flex min-h-screen justify-center bg-stone-950">
      <Header pcItems={pcItems} mobileItems={mobileItems} />
      <div className="h-screen w-full max-w-6xl pt-20">
        <div className="h-96 w-full bg-stone-800"></div>
      </div>
    </div>
  );
};

export default Explore;
