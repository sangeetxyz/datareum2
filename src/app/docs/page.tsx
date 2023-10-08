"use client";
import DashHeader from "@/components/headers/dashHeader";
import React from "react";

const Docs = () => {
  return (
    <div className="h-screen bg-stone-950">
      <DashHeader />
      <div className="flex h-full w-full items-center justify-center bg-red-950 pt-20">
        {/* <div className="h-full w-full bg-red-900 flex max-w-6xl">
          <div className="w-64 h-full bg-yellow-950"></div>
        </div> */}
        <div className="text-stone-100">click me</div>
      </div>
    </div>
  );
};

export default Docs;
