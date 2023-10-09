import Fuse from "fuse.js";

export const analyzeObjectList = (
  objList: object[],
): {
  objectCount: number;
  shortestObjectLength: number;
  longestObjectLength: number;
} => {
  let objectCount = 0;
  let longestObjectLength = 0;
  let shortestObjectLength = Infinity;
  let longestObjectIndex;
  let shortestObjectIndex;
  for (const key in objList) {
    if (objList.hasOwnProperty(key)) {
      objectCount++;
      const currentObject = objList[key];
      const currentObjectLength = Object.keys(currentObject).length;
      if (currentObjectLength > longestObjectLength) {
        longestObjectLength = currentObjectLength;
        longestObjectIndex = key;
      }
      if (currentObjectLength < shortestObjectLength) {
        shortestObjectLength = currentObjectLength;
        shortestObjectIndex = key;
      }
    }
  }
  return {
    objectCount,
    shortestObjectLength,
    longestObjectLength,
  };
  console.log(`Number of objects in the main list: ${objectCount}`);
  console.log(
    `Length of the longest object (index ${longestObjectIndex}): ${longestObjectLength}`,
  );
  console.log(
    `Length of the shortest object (index ${shortestObjectIndex}): ${shortestObjectLength}`,
  );
};

export const medicalDataFields: {
  name: string;
  dataType: string;
  allowedValues?: (value: string) => boolean;
  minValue?: number;
  maxValue?: number;
}[] = [
  {
    name: "dateOfBirth",
    dataType: "string",
  },
  {
    name: "disease",
    dataType: "string",
  },
  {
    name: "previousDiseases",
    dataType: "string",
  },
  {
    name: "bloodGroup",
    dataType: "string",
    allowedValues: (value: string) =>
      ["A", "B", "AB", "O"].includes(value.toUpperCase()),
  },
  {
    name: "rhFactor",
    dataType: "string",
    allowedValues: (value: string) =>
      ["Positive", "Negative"].includes(
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
      ),
  },
  {
    name: "hemoglobinCount",
    dataType: "number",
    minValue: 0, // Minimum hemoglobin count value
    maxValue: 20, // Maximum hemoglobin count value
  },
  {
    name: "oxygenLevel",
    dataType: "number",
    minValue: 0, // Minimum oxygen level value
    maxValue: 100, // Maximum oxygen level value
  },
  {
    name: "bloodPressure",
    dataType: "string",
  },
  {
    name: "allergies",
    dataType: "string",
  },
  {
    name: "sugarLevel",
    dataType: "number",
    minValue: 0, // Minimum sugar level value
    maxValue: 500, // Maximum sugar level value
  },
  {
    name: "gender",
    dataType: "string",
    allowedValues: (value: string) =>
      ["Male", "Female", "Other"].includes(
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
      ),
  },
  {
    name: "weight",
    dataType: "number",
    minValue: 0, // Minimum weight value
    maxValue: 1000, // Maximum weight value
  },
  {
    name: "height",
    dataType: "number",
    minValue: 0, // Minimum height value
    maxValue: 300, // Maximum height value
  },
  {
    name: "bilirubin",
    dataType: "number",
    minValue: 0, // Minimum bilirubin value
    maxValue: 10, // Maximum bilirubin value
  },
  {
    name: "sodiumPotassiumLevel",
    dataType: "string",
  },
  {
    name: "wbcCount",
    dataType: "number",
    minValue: 0, // Minimum WBC count value
    maxValue: 50000, // Maximum WBC count value
  },
  {
    name: "plateletCount",
    dataType: "number",
    minValue: 0, // Minimum platelet count value
    maxValue: 1000000, // Maximum platelet count value
  },
  {
    name: "rbcCount",
    dataType: "number",
    minValue: 0, // Minimum RBC count value
    maxValue: 8000000, // Maximum RBC count value
  },
  {
    name: "cholesterol",
    dataType: "number",
    minValue: 0, // Minimum cholesterol value
    maxValue: 300, // Maximum cholesterol value
  },
  {
    name: "leukocytesCount",
    dataType: "number",
    minValue: 0, // Minimum leukocytes count value
    maxValue: 50000, // Maximum leukocytes count value
  },
  {
    name: "surgicalHistory",
    dataType: "string",
  },
  {
    name: "medicines",
    dataType: "string",
  },
  {
    name: "respiratoryRate",
    dataType: "number",
    minValue: 0, // Minimum respiratory rate value
    maxValue: 100, // Maximum respiratory rate value
  },
  {
    name: "temperature",
    dataType: "number",
    minValue: 0, // Minimum temperature value
    maxValue: 100, // Maximum temperature value
  },
  {
    name: "heartRate",
    dataType: "number",
    minValue: 0, // Minimum heart rate value
    maxValue: 250, // Maximum heart rate value
  },
  {
    name: "creatinineLevel",
    dataType: "number",
    minValue: 0, // Minimum creatinine level value
    maxValue: 10, // Maximum creatinine level value
  },
  {
    name: "colonyCount",
    dataType: "number",
    minValue: 0, // Minimum colony count value
    maxValue: 10000, // Maximum colony count value
  },
  {
    name: "neutrophilsCount",
    dataType: "number",
    minValue: 0, // Minimum neutrophils count value
    maxValue: 100, // Maximum neutrophils count value
  },
  {
    name: "eosinophilsCount",
    dataType: "number",
    minValue: 0, // Minimum eosinophils count value
    maxValue: 100, // Maximum eosinophils count value
  },
  {
    name: "basophilsCount",
    dataType: "number",
    minValue: 0, // Minimum basophils count value
    maxValue: 100, // Maximum basophils count value
  },
  {
    name: "lymphocytesCount",
    dataType: "number",
    minValue: 0, // Minimum lymphocytes count value
    maxValue: 100, // Maximum lymphocytes count value
  },
  {
    name: "monocytesCount",
    dataType: "number",
    minValue: 0, // Minimum monocytes count value
    maxValue: 100, // Maximum monocytes count value
  },
  {
    name: "cReactiveProtine",
    dataType: "number",
    minValue: 0, // Minimum C-reactive protein value
    maxValue: 10, // Maximum C-reactive protein value
  },
  {
    name: "epithelialCells",
    dataType: "number",
    minValue: 0, // Minimum epithelial cells value
    maxValue: 100, // Maximum epithelial cells value
  },
  {
    name: "phLevel",
    dataType: "number",
    minValue: 0, // Minimum pH level value
    maxValue: 14, // Maximum pH level value
  },
  {
    name: "bilirubinTotal",
    dataType: "number",
    minValue: 0, // Minimum total bilirubin value
    maxValue: 10, // Maximum total bilirubin value
  },
  {
    name: "totalProtine",
    dataType: "number",
    minValue: 0, // Minimum total protein value
    maxValue: 10, // Maximum total protein value
  },
  {
    name: "albumin",
    dataType: "number",
    minValue: 0, // Minimum albumin value
    maxValue: 10, // Maximum albumin value
  },
  {
    name: "globulin",
    dataType: "number",
    minValue: 0, // Minimum globulin value
    maxValue: 10, // Maximum globulin value
  },
  {
    name: "agRatio",
    dataType: "number",
    minValue: 0, // Minimum A/G ratio value
    maxValue: 10, // Maximum A/G ratio value
  },
  {
    name: "astAltRatio",
    dataType: "number",
    minValue: 0, // Minimum AST/ALT ratio value
    maxValue: 10, // Maximum AST/ALT ratio value
  },
  {
    name: "tsh",
    dataType: "number",
    minValue: 0, // Minimum TSH value
    maxValue: 10, // Maximum TSH value
  },
  {
    name: "freeT4",
    dataType: "number",
    minValue: 0, // Minimum free T4 value
    maxValue: 10, // Maximum free T4 value
  },
  {
    name: "freeT3",
    dataType: "number",
    minValue: 0, // Minimum free T3 value
    maxValue: 10, // Maximum free T3 value
  },
  {
    name: "glucoseFasting",
    dataType: "number",
    minValue: 0, // Minimum fasting glucose value
    maxValue: 300, // Maximum fasting glucose value
  },
  {
    name: "glucosePp",
    dataType: "number",
    minValue: 0, // Minimum post-prandial glucose value
    maxValue: 300, // Maximum post-prandial glucose value
  },
  {
    name: "uricAcidLevels",
    dataType: "number",
    minValue: 0, // Minimum uric acid level value
    maxValue: 10, // Maximum uric acid level value
  },
  {
    name: "prInterval",
    dataType: "number",
    minValue: 0, // Minimum PR interval value
    maxValue: 2, // Maximum PR interval value
  },
  {
    name: "qtInterval",
    dataType: "number",
    minValue: 0, // Minimum QT interval value
    maxValue: 500, // Maximum QT interval value
  },
  {
    name: "qrsDuration",
    dataType: "number",
    minValue: 0, // Minimum QRS duration value
    maxValue: 200, // Maximum QRS duration value
  },
];

export const isInvalidString = (value: string): boolean => {
  return !/[a-zA-Z/]/.test(value);
};

export const isInvalidNumber = (value: string): boolean => {
  return !/^\d+$/.test(value);
};

export const processCsvData = (csvData: object[]): object[] => {
  const fuse = new Fuse(medicalDataFields, {
    threshold: 0.5,
    keys: ["name"],
  });
  const processedData = csvData
    .map((row: any) => {
      const processedRow: any = {};
      Object.keys(row).forEach((columnName: string) => {
        const result = fuse.search(columnName);
        if (result.length > 0 && result[0].item) {
          const mainAttribute = result[0].item.name;
          const csvValue = row[columnName];
          const expectedAttribute = medicalDataFields.find(
            (attribute) => attribute.name === mainAttribute,
          );
          if (expectedAttribute) {
            const expectedDataType: any = expectedAttribute.dataType;
            if (typeof expectedDataType === "string") {
              if (
                (expectedDataType === "string" &&
                  typeof csvValue === "string" &&
                  csvValue.trim() !== "" &&
                  !isInvalidString(csvValue)) ||
                (expectedDataType === "number" && !isInvalidNumber(csvValue))
              ) {
                if (
                  expectedAttribute.allowedValues &&
                  !expectedAttribute.allowedValues(csvValue)
                ) {
                  return;
                }

                if (
                  expectedDataType === "number" &&
                  (typeof expectedAttribute.minValue === "number" ||
                    typeof expectedAttribute.maxValue === "number") &&
                  !isNaN(parseFloat(csvValue))
                ) {
                  const numericValue = parseFloat(csvValue);
                  if (
                    (isNaN(expectedAttribute.minValue!) ||
                      numericValue >= expectedAttribute.minValue!) &&
                    (isNaN(expectedAttribute.maxValue!) ||
                      numericValue <= expectedAttribute.maxValue!)
                  ) {
                    processedRow[mainAttribute] = numericValue;
                  }
                } else {
                  processedRow[mainAttribute] = csvValue;
                }
              }
            } else if (typeof expectedDataType === "function") {
              if (expectedDataType(csvValue)) {
                processedRow[mainAttribute] = csvValue;
              }
            }
          }
        }
      });
      return processedRow;
    })
    .filter((row) => Object.keys(row).length > 0);
  return processedData;
};

export const calculateColumnCounts = (
  rawObjects: object[],
  parsedObjects: object[],
): { name: string; rawColumns: number; parsedColumns: number }[] => {
  const result: { name: string; rawColumns: number; parsedColumns: number }[] =
    [];

  for (let i = 0; i < rawObjects.length && i < parsedObjects.length; i++) {
    const rawObject: any = rawObjects[i];
    const parsedObject: any = parsedObjects[i];

    // Initialize counters for rawColumns and parsedColumns
    let rawColumns = 0;
    let parsedColumns = 0;

    // Count attributes with non-empty string values
    for (const key in rawObject) {
      if (rawObject.hasOwnProperty(key) && rawObject[key] !== "") {
        rawColumns++;
      }
    }

    for (const key in parsedObject) {
      if (parsedObject.hasOwnProperty(key) && parsedObject[key] !== "") {
        parsedColumns++;
      }
    }

    // Add the result to the array
    result.push({ name: (i + 1).toString(), rawColumns, parsedColumns });
  }

  return result;
};

export const countAttributes = (
  obj: object[],
): { name: string; attributeCount: number }[] => {
  const result: { name: string; attributeCount: number }[] = [];

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const innerObject = obj[key];
      const attributeCount = Object.keys(innerObject).length;
      result.push({ name: key, attributeCount });
    }
  }

  return result;
};
