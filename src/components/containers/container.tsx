import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-stone-100 scrollbar-none scrollbar-track-stone-900 scrollbar-thumb-acc selection:bg-black selection:text-acc">
      {children}
      <ToastContainer />
    </div>
  );
};

export default Container;
