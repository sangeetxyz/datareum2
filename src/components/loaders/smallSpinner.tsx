import React from "react";
import PuffLoader from "react-spinners/PuffLoader";
const SmallSpinner = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <PuffLoader
        color={"#facc15"}
        loading={true}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default SmallSpinner;
