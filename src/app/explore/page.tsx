"use client";
import Header from "@/components/headers/header";
import { mobileItems, pcItems } from "@/utils/navBars/exploreNav";
import React, { useEffect, useState } from "react";
import data1 from "../../../fake_medical_data.json";

import {
  extractDiseases,
  filterDiseaseData,
  processData,
} from "@/utils/analytics/helpers";
import { useAtom } from "jotai";
import { currentDisease } from "@/jotai/atom";
import { DiseaseSelector } from "@/components/explore/diseaseSelector";
import { AgeAnalytics } from "@/components/explore/ageAnalytics";
import Spinner from "@/components/loaders/spinner";
import axios from "axios";

const Explore = () => {
  const [data, setData] = useState<object[] | null>(null);
  const [diseaseList, setDiseaseList] = useState<string[]>([]);
  const [currentDiseasePrivate, setCurrentDiseasePrivate] =
    useAtom(currentDisease);
  const [chartsData, setChartsData] = useState<object[] | null>([{}]);
  const [isLoading, setIsLoading] = useState(false);

  const processor = () => {
    try {
      if (data) {
        const processed = processData(data);
        console.log(processed);
        const diseases = extractDiseases(processed);
        setDiseaseList(diseases);
        const forCharts = filterDiseaseData(processed, currentDiseasePrivate);
        setChartsData(forCharts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const dataSetter = async () => {
    setIsLoading(true);
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_WEB_URL}api/dev/all`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET}`,
        },
      },
    );
    console.log(data);
    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    processor();
  }, [currentDiseasePrivate, data]);

  useEffect(() => {
    dataSetter();
  }, []);
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="flex min-h-screen justify-center bg-stone-950">
      <Header pcItems={pcItems} mobileItems={mobileItems} />
      <div className="h-screen w-full max-w-6xl pt-20">
        <div className="bg-stone-90 flex h-full w-full flex-col">
          <div className="flex w-full flex-col items-center justify-between space-y-4 p-4 md:flex-row md:space-y-0">
            <div className="text-center text-xl">
              Select a Disease to see the analytics by Age
            </div>
            <div className="">
              <DiseaseSelector diseaseList={diseaseList} />
            </div>
          </div>
          <div className="h-96 px-4">
            <AgeAnalytics data={chartsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
