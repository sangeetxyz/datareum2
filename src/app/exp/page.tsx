"use client";

import axios from "axios";
import React, { useState } from "react";

const Expermental = () => {
  const [token, setToken] = useState(
    "ZjN8JtYlZ4PnEdfa3d4T87puZYVtC8PZjZH84boF08b7IA7isS",
  );
  return (
    <div className="h-screen bg-black text-white">
      <input
        type="text"
        value={token}
        className="w-full bg-black focus:outline-none"
        onChange={(event) => {
          setToken(event.currentTarget.value);
        }}
      />
      <div
        className="cursor-pointer"
        onClick={async () => {
          const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_WEB_URL}api/v2`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
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
