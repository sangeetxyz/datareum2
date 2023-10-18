"use client";
import Footer from "@/components/footers/footer";
import Header from "@/components/headers/header";

import React from "react";
import contactSvg from "../../../public/contact/contact.svg";
import { mobileItems, pcItems } from "@/utils/navBars/contactNav";

const Contact = () => {
  return (
    <div className="min-h-screen bg-stone-950 pt-20 text-stone-100">
      <Header pcItems={pcItems} mobileItems={mobileItems} />
      <div className="flex h-full flex-col items-center justify-center bg-stone-950 ">
        <div className="flex w-full max-w-6xl flex-col space-y-4 px-4 py-8">
          <img src={contactSvg.src} alt="" className="mx-8" />

          <div className="flex w-full flex-col">
            <div className="capitalize text-stone-100">Name</div>
            <input
              type="text"
              className="w-full rounded-lg bg-stone-100 px-3 py-1 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <div className="w-full capitalize text-stone-100">email</div>
            <input
              type="text"
              className="rounded-lg bg-stone-100 px-3 py-1 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <div className="capitalize text-stone-100">enquery</div>
            <textarea className="rounded-lg bg-stone-100 px-3 py-1 focus:outline-none" />
          </div>
          <div className="rounded-lg mt-6 bg-acc px-4 py-2 text-center font-bold capitalize text-stone-950">
            submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
