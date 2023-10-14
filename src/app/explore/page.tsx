"use client";
import DashHeader from "@/components/headers/dashHeader";
import Header from "@/components/headers/header";
import { mobileItems, pcItems } from "@/utils/navBars/exploreNav";
import React, { useEffect, useState } from "react";
import data1 from "../../../fake_medical_data.json";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { processData } from "@/utils/analytics/helpers";

const Explore = () => {
  const [data, setData] = useState<any>(data1);

  const processor = () => {
    const c = processData(data);
    console.log(c);
  };

  useEffect(() => {
    processor();
  }, []);
  return (
    <div className="flex min-h-screen justify-center bg-stone-950">
      <Header pcItems={pcItems} mobileItems={mobileItems} />
      <div className="h-screen w-full max-w-6xl pt-20">
        <div className="h-96 w-full bg-stone-800">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data.splice(0, 100)}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="age" />
              <YAxis />
              <Tooltip />
              <Legend />
              {/* <Bar dataKey="count" fill="#8884d8" /> */}
              <Bar dataKey="age" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Explore;
