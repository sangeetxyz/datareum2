"use client";

import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import SmallSpinner from "../loaders/smallSpinner";
import LoadingText from "../loaders/loadingText";

export const FeedbackSection = ({
  rawStats,
  parsedStats,
}: {
  rawStats: {
    objectCount: number;
    shortestObjectLength: number;
    longestObjectLength: number;
  } | null;
  parsedStats: {
    objectCount: number;
    shortestObjectLength: number;
    longestObjectLength: number;
  } | null;
}) => {
  return (
    <>
      <div className="mb-4 mt-8 text-xl uppercase">feedback</div>
      <div className="flex w-full flex-col space-y-4 rounded-xl bg-stone-900 bg-opacity-30 p-4 outline outline-2 outline-stone-700 backdrop-blur-md">
        {!rawStats || !parsedStats ? <LoadingText /> : <></>}
        {rawStats?.shortestObjectLength === parsedStats?.shortestObjectLength &&
        parsedStats?.shortestObjectLength &&
        parsedStats.objectCount > 0 ? (
          <GoodFeedback text="Every Column Name has been detected and parsed successfully!" />
        ) : rawStats?.shortestObjectLength! >
            parsedStats?.longestObjectLength! &&
          rawStats?.objectCount &&
          parsedStats?.objectCount &&
          parsedStats.objectCount > 0 ? (
          <BadFeedback text="We cannot identify every column of your data!" />
        ) : parsedStats?.longestObjectLength === 0 ? (
          <BadFeedback text="None of your columns are detected!" />
        ) : (
          <></>
        )}
        {rawStats?.objectCount! > parsedStats?.objectCount! && (
          <BadFeedback text="Analytics graphs may overlap eachother due to unequal row sizes!" />
        )}
        {rawStats?.objectCount === parsedStats?.objectCount &&
        parsedStats?.objectCount ? (
          <GoodFeedback text="Each and every row of your data has been parsed successfully!" />
        ) : rawStats?.objectCount! > parsedStats?.objectCount! ? (
          <BadFeedback text="Not every row has been parsed from your data!" />
        ) : parsedStats?.objectCount === 0 ? (
          <BadFeedback text="No data has been parsed from your data!" />
        ) : (
          <></>
        )}
        {parsedStats?.shortestObjectLength! < 10 && (
          <BadFeedback text="Minimum Column Retention is too low for your data!" />
        )}
        {parsedStats?.longestObjectLength! -
          parsedStats?.shortestObjectLength! >
          10 && (
          <BadFeedback text="Column names are too diverse in your data!" />
        )}
      </div>
    </>
  );
};

const GoodFeedback = ({ text }: { text: string }) => {
  return (
    <div className="flex w-full rounded-lg bg-stone-800 bg-opacity-30 px-3 py-4 outline outline-1 outline-green-800">
      <div className="">
        <TiTick color="#1ED760" size={28} />
      </div>
      <div className="mt-0.5">{text}</div>
    </div>
  );
};

const BadFeedback = ({ text }: { text: string }) => {
  return (
    <div className="flex w-full space-x-2 rounded-lg bg-stone-800 bg-opacity-30 p-4 outline outline-1 outline-red-900">
      <div className="pt-1">
        <BsFillExclamationDiamondFill color={"red"} size={20} />
      </div>
      <div className="mt-0.5">{text}</div>
    </div>
  );
};
