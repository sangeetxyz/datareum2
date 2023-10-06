"use client";

import axios from "axios";
import React from "react";

const Expermental = () => {
  return (
    <div className="h-screen bg-black text-white">
      <div
        className="cursor-pointer"
        onClick={async () => {
          const authToken = "YOUR_BEARER_TOKEN";
          const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_WEB_URL}api/v1`,
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            },
          );
          console.log(data);
        }}
      >
        ask data
      </div>
    </div>
  );
};

export default Expermental;
