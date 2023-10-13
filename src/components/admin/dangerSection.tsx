"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { handleDeleteBcAll, handleDeleteDbAll } from "@/utils/helper/handlers";

export const DangerSection = ({ refresher }: { refresher: () => {} }) => {
  const [dbCaution, setDbCaution] = useState(false);
  const [bcCaution, setBcCaution] = useState(false);
  return (
    <>
      <div className="my-4 text-xl uppercase text-red-500">danger zone</div>
      <div className="mb-4 w-full space-y-4 rounded-xl border border-red-500 bg-stone-800 bg-opacity-70 p-4 backdrop-blur-md">
        <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
          <div className="flex flex-col">
            <div className="text-2xl w-full font-bold capitalize">
              database storage:
            </div>
            <div>Delete every patient data stored in the database</div>
          </div>
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={async () => {
              setDbCaution(true);
            }}
            className="cursor-pointer rounded-lg bg-acc px-3 py-2 text-sm font-bold uppercase text-stone-950"
          >
            delete all
          </motion.div>
        </div>
        <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
          <div className="flex flex-col">
            <div className="text-2xl font-bold capitalize">
              contract storage:
            </div>
            <div>Delete every data stored in the smart contract</div>
          </div>
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={async () => {
              setBcCaution(true);
            }}
            className="cursor-pointer rounded-lg bg-acc px-3 py-2 text-sm font-bold uppercase text-stone-950"
          >
            delete all
          </motion.div>
        </div>
      </div>
      {dbCaution && (
        <div
          onClick={() => {
            setDbCaution(false);
          }}
          className="fixed left-0 top-0 flex h-screen  w-full items-center justify-center backdrop-blur-sm"
        >
          <div className="flex w-64 flex-col space-y-4 rounded-xl border border-stone-700 bg-stone-950 bg-opacity-70 p-4 backdrop-blur-md">
            <div className="text-center font-bold">
              This action will be unreversable, do you still want to proceed?
            </div>
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={async (event) => {
                handleDeleteDbAll(event, setDbCaution, refresher);
              }}
              className="cursor-pointer rounded-lg bg-acc px-3 py-2 text-center text-sm font-bold uppercase text-stone-950"
            >
              yes
            </motion.div>
          </div>
        </div>
      )}
      {bcCaution && (
        <div
          onClick={() => {
            setBcCaution(false);
          }}
          className="fixed left-0 top-0 flex h-screen w-full items-center justify-center backdrop-blur-sm"
        >
          <div className="flex w-64 flex-col space-y-4 rounded-xl border border-stone-700 bg-stone-950 bg-opacity-70 p-4 backdrop-blur-md">
            <div className="text-center font-bold">
              This action will be unreversable, do you still want to proceed?
            </div>
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={async (event) => {
                handleDeleteBcAll(event, setBcCaution, refresher);
              }}
              className="cursor-pointer rounded-lg bg-acc px-3 py-2 text-center text-sm font-bold uppercase text-stone-950"
            >
              yes
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};
