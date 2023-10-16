import React, { useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { cursorVariant, keyHolder } from "@/jotai/atom";
import { LeftItem } from "./leftItem";
import { RightItem } from "./rightItem";
import { rightItemsList } from "@/utils/helper/listHolders";
const FeatureSection = () => {
  const mainDivRef = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useAtom(cursorVariant);
  const [key, setKey] = useAtom(keyHolder);

  return (
    <div
      ref={mainDivRef}
      className="relative flex justify-center bg-gradient-to-b from-stone-900 to-stone-950 lg:h-[400vh]"
    >
      <div className="flex h-full w-full max-w-6xl">
        {/* left */}
        <div className="flex h-full w-full flex-col items-center space-y-10 bg-gradient-to-b from-stone-900 to-stone-950 px-[5vw] py-10 lg:justify-between lg:space-y-0 lg:px-8 lg:py-[50vh]">
          {rightItemsList.map((el) => {
            return (
              <LeftItem
                text={el.text}
                description={el.description}
                id={el.id}
                key={el.id}
              />
            );
          })}
        </div>
        {/* right */}
        <div className="bg-stone-90 sticky top-0 hidden h-screen w-full flex-col items-center justify-center overflow-hidden pt-20 lg:flex">
          <div className="bg-red-95 relative flex aspect-square w-full items-center justify-center">
            <RightItem
              path={rightItemsList[key - 1].path}
              id={rightItemsList[key - 1].id}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
