"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BsDatabaseFill } from "react-icons/bs";
import medicalDataFields from "@/utils/helper/dataSets";

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

export default Database;
