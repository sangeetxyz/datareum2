"use client";

import React from "react";
import { SiFastapi } from "react-icons/si";
import { CodeHighlighter } from "@/components/docs/codeHighlighter";

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

const apiUrl = '${process.env.NEXT_PUBLIC_WEB_URL}api/v2/patients';

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

export default ApiRefs;
