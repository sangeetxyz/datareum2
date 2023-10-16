import React, { useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { cursorVariant, keyHolder } from "@/jotai/atom";
import { LeftItem } from "./leftItem";
import { RightItem } from "./rightItem";
const FeatureSection = () => {
  const mainDivRef = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useAtom(cursorVariant);
  const [key, setKey] = useAtom(keyHolder);

  const rightItemsList: {
    path: string;
    description: string;
    id: number;
    text: string;
  }[] = [
    {
      id: 1,
      text: "Passwordless authentication",
      description:
        "Our platform introduces a revolutionary password-less authentication system that leverages OTP (One-Time Password) technology. Say goodbye to the hassles of remembering complex passwords and the security risks they entail. With our system, users receive a unique OTP on their registered device, ensuring a highly secure login process.",
      path: "./features/passwordless.svg",
    },
    {
      id: 2,
      text: "CSV Processing Unit",
      description:
        "Discover our powerful CSV file processing system, designed to seamlessly parse and import data that perfectly aligns with your database schema. Say goodbye to manual data manipulation and let our system automate the data integration process for you, saving time and ensuring data accuracy.",
      path: "./features/csv.svg",
    },
    {
      id: 3,
      text: "Type Safe Database",
      description:
        "Experience the future of data management with our type-safe database solution. Eliminate the risk of data inconsistencies and errors by enforcing strict data typing and schema adherence, guaranteeing a reliable and robust database environment for your business needs.",
      path: "./features/db.svg",
    },
    {
      id: 4,
      text: "Blockchain Powered",
      description:
        "Revolutionize your data management with our Ethereum blockchain-powered system. Enjoy the benefits of transparency, security, and decentralized control as our platform harnesses the Ethereum network to empower your data-driven operations, ensuring trust and reliability at every step.",
      path: "./features/bitcoin.svg",
    },
    {
      id: 5,
      text: "RESTful API",
      description:
        "Access your data effortlessly through our user-friendly system, equipped with a RESTful API for seamless data retrieval. Our platform not only ensures the security of your information on the Ethereum blockchain but also provides a convenient and standardized way to access it, putting the power of your data in your hands.",
      path: "./features/api.svg",
    },
    {
      id: 6,
      text: "256-Bit Encryption",
      description:
        "Security is paramount in our system. Every single data row is fortified with robust 256-bit encryption, providing an impenetrable layer of protection for your sensitive information, guaranteeing the highest level of data security available.",
      path: "./features/encrypt.svg",
    },
  ];

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





