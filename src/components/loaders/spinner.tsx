import React from "react";
import PuffLoader from "react-spinners/PuffLoader";
const Spinner = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-stone-950">
      <PuffLoader
        color={"#facc15"}
        loading={true}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
