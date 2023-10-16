import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-stone-100 scrollbar-track-stone-900 scrollbar-thumb-acc selection:bg-acc selection:text-stone-950">
      {children}
      <ToastContainer />
    </div>
  );
};

export default Container;
