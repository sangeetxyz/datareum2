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
  ComposedChart,
  Line,
} from "recharts";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  extractDiseases,
  filterDiseaseData,
  processData,
} from "@/utils/analytics/helpers";
import { Check, ChevronsUpDown } from "lucide-react";
import { useAtom } from "jotai";
import { currentDisease } from "@/jotai/atom";
import Spinner from "@/components/loaders/spinner";
import SmallSpinner from "@/components/loaders/smallSpinner";

const Explore = () => {
  const [data, setData] = useState<any>(data1);
  const [diseaseList, setDiseaseList] = useState<string[]>([]);
  const [currentDiseasePrivate, setCurrentDiseasePrivate] =
    useAtom(currentDisease);
  const [chartsData, setChartsData] = useState<object[] | null>([{}]);

  const processor = () => {
    const processed = processData(data);
    const diseases = extractDiseases(processed);
    setDiseaseList(diseases);
    const forCharts = filterDiseaseData(processed, currentDiseasePrivate);
    setChartsData(forCharts);
  };

  useEffect(() => {
    processor();
  }, [currentDiseasePrivate]);
  return (
    <div className="flex min-h-screen justify-center bg-stone-950">
      <Header pcItems={pcItems} mobileItems={mobileItems} />
      <div className="h-screen w-full max-w-6xl pt-20">
        <div className="bg-stone-90 flex h-full w-full flex-col">
          <div className="flex w-full flex-col items-center justify-between space-y-4 p-4 md:flex-row md:space-y-0">
            <div className="text-xl text-center">Select a Disease to see the analytics by Age</div>
            <DiseaseSelector diseaseList={diseaseList} />
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

const AgeAnalytics = ({ data }: { data: {}[] | null }) => {
  const [chartData, setChartData] = useState([{}]);
  useEffect(() => {}, []);

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: {
    active: boolean | undefined;
    payload: any;
    label: string;
  }) => {
    if (active && payload && payload.length > 0) {
      return (
        <div className="flex flex-col items-center rounded-lg bg-stone-950 p-2 text-sm outline outline-1 outline-stone-700">
          <div>{`On Age - ${label + 1}`}</div>
          <div>{`Disease Count - ${payload[0].value}`}</div>
          {/* <div>{`Parsed Columns - ${payload[1].value}`}</div> */}
        </div>
      );
    }
    return null;
  };

  return data ? (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart width={500} height={300} data={data}>
        <XAxis dataKey="age" />
        <Tooltip
          content={(event) => (
            <CustomTooltip
              active={event.active}
              label={event.label}
              payload={event.payload}
            />
          )}
        />
        <Legend
          iconType="diamond"
          payload={[
            {
              value: "Trend Line",
              type: "line",
              id: "trend",
              color: "#fff",
            },
            {
              value: "Disease Count",
              type: "diamond",
              id: "count",
              color: "#facc15",
            },
          ]}
        />
        <Bar dataKey="count" fill="#facc15" />
        <Line type="natural" dataKey="count" stroke="#fff" />
      </ComposedChart>
    </ResponsiveContainer>
  ) : (
    <div className="flex h-full w-full items-center justify-center">
      <SmallSpinner />
    </div>
  );
};

const DiseaseSelector = ({ diseaseList }: { diseaseList: string[] }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [currentDiseasePrivate, setCurrentDiseasePrivate] =
    useAtom(currentDisease);

  useEffect(() => {
    setCurrentDiseasePrivate(value);
  }, [value]);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="justify-between space-x-4 bg-acc font-bold"
        >
          {value ? value.toUpperCase() : "Select disease..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {diseaseList.map((disease, index) => (
              <CommandItem
                key={index}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === disease ? "opacity-100" : "opacity-0",
                  )}
                />
                {disease}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
