"use client";

import React, { useEffect, useState } from "react";
import {
  Bar,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Line,
} from "recharts";
import SmallSpinner from "@/components/loaders/smallSpinner";

export const AgeAnalytics = ({ data }: { data: {}[] | null }) => {
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
          <div>{`On Age - ${label + 0}`}</div>
          <div>{`Disease Count - ${payload[0].value}`}</div>
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
