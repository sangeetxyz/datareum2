"use client";
import React from "react";
import { BsStars } from "react-icons/bs";

const Introduction = () => {
  return (
    <div className="flex flex-col space-y-16 rounded-xl border-x border-y border-stone-700 bg-gradient-to-r from-stone-950 to-stone-900 px-4 py-8 pt-32 text-center text-stone-200 xl:text-left">
      <div className="flex w-full justify-center xl:justify-start">
        <BsStars size={100} color={"#facc15"} />
      </div>
      <div className="flex flex-col space-y-4">
        <div className="text-5xl capitalize">
          <span className="underline decoration-acc">Datareum</span>{" "}
          Documentation
        </div>
        <div>
          Welcome to the Datareum Documentation. This comprehensive guide
          provides detailed information on how to interact with our
          platform&apos;s API, understand the database schema for data
          submission, and access valuable patient data for research purposes.
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="text-3xl capitalize">
          <span className="underline decoration-acc">introduction</span>{" "}
        </div>
        <div>
          Datareum is a cutting-edge platform designed to facilitate medical
          research by providing access to patient data while ensuring data
          security and privacy. Whether you&apos;re a researcher, developer, or
          healthcare professional, this documentation will guide you through the
          process of utilizing our services effectively.
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="text-3xl capitalize">
          <span className="underline decoration-acc">aPI</span> documentation
        </div>
        <div>
          Our API Documentation section provides insights into how to access
          patient data through the Datareum API. Learn about authentication,
          endpoints, request and response formats, rate limiting, and error
          handling. Leverage the API to retrieve patient information and
          accelerate your research projects.
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="text-3xl capitalize">
          <span className="underline decoration-acc">Database</span> Schema
        </div>
        <div>
          In the Database Schema section, you will find information about the
          structure of the database where users submit patient data. Understand
          the data fields, data types, and relationships within the schema,
          enabling you to prepare and format data for submission efficiently.
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="text-3xl capitalize">
          <span className="underline decoration-acc">Getting</span> Started
        </div>
        <div>
          To begin using Datareum&apos;s services, explore the sections above to
          access the information you need. Whether you&apos;re a newcomer or an
          experienced user, this documentation will help you navigate our
          platform seamlessly.
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        {/* <div className="text-4xl capitalize">
                  <span className="underline decoration-acc">Getting</span>{" "}
                  Started
                </div> */}
        <div>
          Now, let&apos;s delve into the specifics of utilizing the Datareum
          platform, starting with our API documentation and database schema.
        </div>
      </div>
    </div>
  );
};

export default Introduction;
