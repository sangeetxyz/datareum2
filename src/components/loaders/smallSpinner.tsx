import React from "react";
import HashLoader from "react-spinners/HashLoader";
const SmallSpinner = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <HashLoader
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
