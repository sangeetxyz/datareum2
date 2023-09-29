import React from "react";
import HashLoader from "react-spinners/HashLoader";
const Spinner = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-stone-950">
      <HashLoader
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
