"use client";
import DashHeader from "@/components/headers/dashHeader";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark, docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaEthereum } from "react-icons/fa";
import { BsDatabaseFill, BsStars } from "react-icons/bs";
import { SiFastapi } from "react-icons/si";
import { PiCopy } from "react-icons/pi";
import { toast } from "react-toastify";
import Container from "@/components/containers/container";
import medicalDataFields from "@/utils/helper/dataSets";

const Docs = () => {
  const [currentTab, setCurrentTab] = useState(2);
  const tabList = [
    {
      id: 1,
      title: "introduction",
      icon: () => <BsStars size={20} color={"#facc15"} />,
    },
    {
      id: 2,
      title: "aPI Refs",
      icon: () => <SiFastapi size={20} color={"#facc15"} />,
    },
    {
      id: 3,
      title: "database",
      icon: () => <BsDatabaseFill size={20} color={"#facc15"} />,
    },
    // {
    //   id: 4,
    //   title: "introduction",
    //   icon: () => <BsStars size={20} color={"#facc15"} />,
    // },
  ];
  return (
    <Container>
      <div className="relative min-h-screen bg-stone-950">
        <DashHeader />
        <div className="bg-stone-95 flex h-full w-full items-center justify-center pt-20">
          <div className="bg-red-9 relative flex h-full w-full max-w-6xl text-stone-100">
            <div className="fixed bottom-4 top-24 hidden w-64 rounded-xl border border-stone-700 bg-stone-900 xl:block">
              <div className="flex w-full flex-col items-center justify-center space-y-8 rounded-xl border-b border-stone-700 bg-gradient-to-t from-stone-950 to-stone-900 py-8">
                <div>
                  <FaEthereum size={100} color={"#facc15"} />
                </div>
                <div className="flex flex-col">
                  <div className="text-center text-xl capitalize">offical</div>
                  <div className="text-center text-xl capitalize">
                    documentation
                  </div>
                  <div className="text-center text-xl">(v1)</div>
                </div>
              </div>
              <div className="h-ful borde bordersto absolute bottom-0 top-0 flex w-full flex-col rounded-xl pt-[17.6rem]">
                {tabList.map((tab, index) => {
                  return (
                    <div
                      onClick={() => {
                        setCurrentTab(tab.id);
                      }}
                      key={index}
                      className="flex w-full cursor-pointer items-center space-x-2 border-b border-stone-700 bg-gradient-to-b from-stone-900 to-stone-900 p-2"
                    >
                      <div>
                        <tab.icon />
                      </div>
                      <div className="text-lg capitalize">{tab.title}</div>
                    </div>
                  );
                })}
                <div className="h-full w-full rounded-xl bg-gradient-to-b from-stone-900 via-stone-950 to-stone-950"></div>
              </div>
            </div>
            <div className="borde mt-14 w-full bg-stone-950 p-4 xl:mt-0 xl:pl-[17rem]">
              {currentTab === 1 ? (
                <Introduction />
              ) : currentTab === 2 ? (
                <ApiRefs />
              ) : currentTab === 3 ? (
                <Database />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className="border-stone-70 fixed top-20 flex h-10 w-full justify-center px-4 pt-4 xl:hidden">
          <div className="flex h-10 w-full max-w-6xl items-center justify-around space-x-2 rounded-xl bg-stone-900 px-4 outline outline-1 outline-stone-700">
            {tabList.map((tab, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setCurrentTab(tab.id);
                  }}
                  className="flex h-full cursor-pointer items-center space-x-1 border-stone-700"
                >
                  <tab.icon />
                  <div className="capitalize">{tab.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Docs;

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

const ApiRefs = () => {
  const responseExample = `[
    {
      PreviousDiseases: "Diabetes",
      BloodPressure: "Migraine",
      Allergies: "Migraine",
      PastMedicalConditions: "Migraine",
      Bilirubin: "2",
      SodiumPotassiumLevel: "144/3.68",
      RBCCount: "6",
      LeukocytesCount: "6958",
      SurgicalHistory: "Hypertension",
      Medicines: "Common Cold",
    },
    {
      Disease: "Pneumonia",
      PreviousDiseases: "Bronchitis",
      BloodPressure: "108/64",
      Allergies: "Bronchitis",
      SugarLevel: "125",
      NumberOfTests: "2",
      PastMedicalConditions: "Bronchitis",
      Weight: "66",
      Bilirubin: "2",
      SodiumPotassiumLevel: "137/3.72",
      RBCCount: "4",
      Cholesterol: "139",
      LeukocytesCount: "7985",
      SurgicalHistory: "Flu",
      FamilyMedicalHistory: "Bronchitis",
      Medicines: "Pneumonia",
    },
    // ... more patient records
  ]`;
  const ts = `
import axios, { AxiosResponse } from 'axios';

// Replace 'YOUR_API_TOKEN' with the actual API token provided by Datareum
const API_TOKEN = 'YOUR_API_TOKEN';

const apiUrl = '${process.env.NEXT_PUBLIC_WEB_URL}/api/v2/patients';

const config = {
  headers: {
    Authorization: \`Bearer \${API_TOKEN}\`,
  },
};

axios
  .get(apiUrl, config)
  .then((response: AxiosResponse) => {
    // Handle successful response here
    console.log('Patient data:', response.data);
  })
  .catch((error) => {
    // Handle error here
    console.error('Error:', error);
  });
`;
  return (
    <div className="flex flex-col space-y-16 rounded-xl border-x border-y border-stone-700 bg-gradient-to-r from-stone-950 to-stone-900 px-4 py-8 pt-32 text-center text-stone-200 xl:text-left">
      <div className="flex w-full justify-center xl:justify-start">
        <SiFastapi size={100} color={"#facc15"} />
      </div>
      <div className="flex flex-col space-y-4">
        <div className="text-5xl capitalize">
          <span className="underline decoration-acc">API</span> Reference
        </div>
        <div>
          Welcome to the Datareum API Reference Documentation. This guide
          provides detailed information on how to access patient data via the
          Datareum API. To get started, make sure you have an API token, which
          can be obtained from the Dashboard section of your Datareum account.
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="text-3xl capitalize">
          <span className="underline decoration-acc">Base</span> URL
        </div>
        <div className="flex w-full flex-col space-y-2">
          <div>The base URL for the Datareum API is:</div>
          <CodeHighlighter
            language="url"
            code={`${process.env.NEXT_PUBLIC_WEB_URL}api/v2`}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="text-3xl capitalize">
          <span className="underline decoration-acc">endpoints</span>
        </div>
        <div className="flex w-full flex-col space-y-2">
          <div>Retrieve Patient Data Endpoint:</div>
          <CodeHighlighter language="shell" code={`GET /patients`} />
        </div>
        <div className="flex flex-col space-y-2">
          <div className="font-bold">Description: </div>
          <div>
            Retrieve patient data stored in the Datareum database. This endpoint
            returns a list of patient objects, with each object containing
            patient details.
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="font-bold">Request Example: </div>
          <CodeHighlighter
            language="shell"
            code={`GET ${process.env.NEXT_PUBLIC_WEB_URL}api/v2/patients`}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <div className="font-bold">Response Example: </div>
          <CodeHighlighter language="json" code={responseExample} />
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="text-3xl capitalize">
          <span className="underline decoration-acc">Authentication</span>{" "}
          {/* Started */}
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col space-y-2">
            <div>
              <span className="font-bold">Sign Up:</span> If you haven&apos;t
              already, sign up for a Datareum account.
            </div>
            <div>
              <span className="font-bold">API Key Generation:</span> Generate an
              API key in your Datareum account dashboard.
            </div>
            <div>
              <span className="font-bold">Authentication:</span> Include your
              API key in the headers of your API requests using the
              Authorization header.
            </div>
          </div>
          <CodeHighlighter
            language="headers"
            code={`Authorization: Bearer YOUR_API_TOKEN`}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="text-3xl capitalize">
          <span className="underline decoration-acc">Example</span> codes
        </div>
        <div className="flex w-full flex-col space-y-2">
          <div>
            Certainly, here&apos;s an example of a curl command to make a GET
            request to retrieve patient data from the Datareum API using an API
            token:
          </div>
          <CodeHighlighter
            language="curl"
            code={`curl -X GET "${process.env.NEXT_PUBLIC_WEB_URL}api/v2/patients" -H "Authorization: Bearer YOUR_API_TOKEN"`}
          />
          <div>
            Replace YOUR_API_TOKEN with the actual API token provided by
            Datareum.
          </div>
          <div>
            Here&apos;s an example of an Axios code snippet in TypeScript to
            make a GET request to retrieve patient data from the Datareum API
            using an API token:
          </div>
          <CodeHighlighter language="typescript" code={ts} />
          <div>
            Make sure to replace &apos;YOUR_API_TOKEN&apos; with the actual API
            token provided by Datareum. This code sets up an Axios request to
            make a GET request to the /patients endpoint with the API token
            included in the headers.
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="text-3xl capitalize">
          <span className="underline decoration-acc">Error</span> Handling
        </div>
        <div className="flex w-full flex-col space-y-2">
          <div>
            In case of errors, the Datareum API will return appropriate HTTP
            status codes and error messages. Common status codes include:
          </div>
          <div className="flex flex-col">
            <div>
              <span className="font-bold">400 Bad Request:</span> Invalid
              request format or parameters.
            </div>
            <div>
              <span className="font-bold">401 Unauthorized:</span> Missing or
              invalid API token.
            </div>
            <div>
              <span className="font-bold">404 Not Found:</span> Resource not
              found.
            </div>
            <div>
              <span className="font-bold">500 Internal Server Error:</span>{" "}
              Unexpected server error.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Database = () => {
  const invoices = medicalDataFields;
  return (
    <div className="flex flex-col space-y-16 rounded-xl border-x border-y border-stone-700 bg-gradient-to-r from-stone-950 to-stone-900 px-4 py-8 pt-32 text-center text-stone-200 xl:text-left">
      <div className="flex w-full justify-center xl:justify-start">
        <BsDatabaseFill size={100} color={"#facc15"} />
      </div>
      <div className="flex flex-col space-y-4">
        <div className="text-5xl capitalize">
          <span className="underline decoration-acc">Database</span> Schema
        </div>
        <div>
          The Datareum database stores patient data in a structured format to
          ensure consistency and accuracy. This section provides an overview of
          the database schema, including attribute names, data types, and
          allowed values.
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="text-3xl capitalize">
          <span className="underline decoration-acc">Patient</span> Data
          Attributes
        </div>
        <div>
          The following table lists the attributes used in the Datareum database
          schema, along with their data types and any additional constraints:
        </div>
        <div className="text-start">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Attribute Name</TableHead>
                <TableHead className="w- whitespace-nowrap">
                  Data Type
                </TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Constraints</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.name}>
                  <TableCell className="font-medium">{invoice.name}</TableCell>
                  <TableCell>{invoice.dataType}</TableCell>
                  <TableCell>{invoice.description}</TableCell>
                  <TableCell className="text-right">
                    {invoice.constraints}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="text-3xl capitalize">
          <span className="underline decoration-acc">CSV</span> File Submission
          Guidelines
        </div>
        <div>
          When submitting patient data via CSV files, adhere to the following
          guidelines:
        </div>
        <div className="flex flex-col space-y-2">
          <div>
            1. <span className="font-bold">Column Names:</span> Ensure that
            column names match the attribute names listed in the schema. Our
            system can detect up to 50% column name errors in CSV files.
          </div>
          <div>
            2. <span className="font-bold">Empty Cells:</span> Do not leave
            cells empty. All cells should contain data, and any missing data
            should be appropriately filled.
          </div>
          <div>
            3. <span className="font-bold">Data Types:</span> Make sure that the
            data in each cell matches the data type specified in the schema
            (e.g., strings, numbers).
          </div>
          <div>
            4. <span className="font-bold">Units:</span> Do not include units
            (e.g., &quot;mg/dL,&quot; &quot;cm&quot;) in the cells. The schema
            defines specific units for each attribute.
          </div>
          <div>
            5. <span className="font-bold">Value Range:</span> Values should
            fall within the specified minimum and maximum value ranges for
            numerical attributes.
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        {/* <div className="text-3xl capitalize">
          <span className="underline decoration-acc">Database</span> Schema
        </div> */}
        <div>
          This documentation section provides a comprehensive overview of the
          database schema, attributes, data types, and submission guidelines for
          CSV files. It ensures that users have a clear understanding of how to
          format and submit data for research purposes.
        </div>
      </div>
    </div>
  );
};

const CodeHighlighter = ({
  language,
  code,
}: {
  language: string;
  code: string;
}) => {
  return (
    <div className="text-start outline outline-1 outline-stone-700">
      <div className="flex">
        <div className="w-full bg-stone-800 p-2 text-sm capitalize">
          {language}
        </div>
        <div
          onClick={async () => {
            await navigator.clipboard.writeText(code);
            toast.success("Code copied!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              pauseOnFocusLoss: false,
              theme: "dark",
            });
          }}
          className="flex cursor-pointer items-center space-x-2 bg-stone-800 px-2 text-sm"
        >
          <div className="whitespace-nowrap capitalize">copy code</div>
          <PiCopy size={20} />
        </div>
      </div>
      <SyntaxHighlighter
        language={language}
        style={a11yDark}
        wrapLines
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
