const { createObjectCsvWriter } = require("csv-writer");
const faker = require("faker");

const medicalDataFields = [
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
    allowedValues: (value) =>
      ["A", "B", "AB", "O"].includes(value.toUpperCase()),
    customFunction: () => {
      // Define your custom logic to generate blood group values
      const bloodGroups = ["A", "B", "AB", "O"];
      return faker.random.arrayElement(bloodGroups);
    },
  },
  {
    name: "rhFactor",
    dataType: "string",
    allowedValues: (value) =>
      ["Positive", "Negative"].includes(
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
      ),
    customFunction: () => {
      // Define your custom logic to generate rh factor values
      const rhFactors = ["Positive", "Negative"];
      return faker.random.arrayElement(rhFactors);
    },
  },
  {
    name: "hemoglobinCount",
    dataType: "number",
    minValue: 0,
    maxValue: 20,
  },
  {
    name: "oxygenLevel",
    dataType: "number",
    minValue: 0,
    maxValue: 100,
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
    minValue: 0,
    maxValue: 500,
  },
  {
    name: "gender",
    dataType: "string",
    allowedValues: (value) =>
      ["Male", "Female", "Other"].includes(
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
      ),
    customFunction: () => {
      // Define your custom logic to generate gender values
      const genders = ["Male", "Female", "Other"];
      return faker.random.arrayElement(genders);
    },
  },
  {
    name: "weight",
    dataType: "number",
    minValue: 0,
    maxValue: 1000,
  },
  {
    name: "height",
    dataType: "number",
    minValue: 0,
    maxValue: 300,
  },
  {
    name: "bilirubin",
    dataType: "number",
    minValue: 0,
    maxValue: 10,
  },
  {
    name: "sodiumPotassiumLevel",
    dataType: "string",
  },
  {
    name: "wbcCount",
    dataType: "number",
    minValue: 0,
    maxValue: 50000,
  },
  {
    name: "plateletCount",
    dataType: "number",
    minValue: 0,
    maxValue: 1000000,
  },
  {
    name: "rbcCount",
    dataType: "number",
    minValue: 0,
    maxValue: 8000000,
  },
  {
    name: "cholesterol",
    dataType: "number",
    minValue: 0,
    maxValue: 300,
  },
  {
    name: "leukocytesCount",
    dataType: "number",
    minValue: 0,
    maxValue: 50000,
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
    minValue: 0,
    maxValue: 100,
  },
  {
    name: "temperature",
    dataType: "number",
    minValue: 0,
    maxValue: 100,
  },
  {
    name: "heartRate",
    dataType: "number",
    minValue: 0,
    maxValue: 250,
  },
  {
    name: "creatinineLevelMgDl",
    dataType: "number",
    minValue: 0,
    maxValue: 10,
  },
  {
    name: "colonyCountCfuMl",
    dataType: "number",
    minValue: 0,
    maxValue: 10000,
  },
  {
    name: "neutrophilsCount",
    dataType: "number",
    minValue: 0,
    maxValue: 100,
  },
  {
    name: "eosinophilsCount",
    dataType: "number",
    minValue: 0,
    maxValue: 100,
  },
  {
    name: "basophilsCount",
    dataType: "number",
    minValue: 0,
    maxValue: 100,
  },
  {
    name: "lymphocytesCount",
    dataType: "number",
    minValue: 0,
    maxValue: 100,
  },
  {
    name: "monocytesCount",
    dataType: "number",
    minValue: 0,
    maxValue: 100,
  },
  {
    name: "cReactiveProtineMgDl",
    dataType: "number",
    minValue: 0,
    maxValue: 10,
  },
  {
    name: "epithelialCellsHpf",
    dataType: "number",
    minValue: 0,
    maxValue: 100,
  },
  {
    name: "phLevel",
    dataType: "number",
    minValue: 0,
    maxValue: 14,
  },
  {
    name: "bilirubinTotalMgDl",
    dataType: "number",
    minValue: 0,
    maxValue: 10,
  },
  {
    name: "totalProtineGdl",
    dataType: "number",
    minValue: 0,
    maxValue: 10,
  },
  {
    name: "albuminGdl",
    dataType: "number",
    minValue: 0,
    maxValue: 10,
  },
  {
    name: "globulinGdl",
    dataType: "number",
    minValue: 0,
    maxValue: 10,
  },
  {
    name: "agRatio",
    dataType: "number",
    minValue: 0,
    maxValue: 10,
  },
  {
    name: "astAltRatio",
    dataType: "number",
    minValue: 0,
    maxValue: 10,
  },
  {
    name: "tshMuL",
    dataType: "number",
    minValue: 0,
    maxValue: 10,
  },
  {
    name: "freeT4PmolL",
    dataType: "number",
    minValue: 0,
    maxValue: 10,
  },
  {
    name: "freeT3PmolL",
    dataType: "number",
    minValue: 0,
    maxValue: 10,
  },
  {
    name: "glucoseFastingMgDl",
    dataType: "number",
    minValue: 0,
    maxValue: 300,
  },
  {
    name: "glucosePpMgDl",
    dataType: "number",
    minValue: 0,
    maxValue: 300,
  },
  {
    name: "uricAcidLevelsMgDl",
    dataType: "number",
    minValue: 0,
    maxValue: 10,
  },
  {
    name: "prIntervalSec",
    dataType: "number",
    minValue: 0,
    maxValue: 2,
  },
  {
    name: "qtIntervalMs",
    dataType: "number",
    minValue: 0,
    maxValue: 500,
  },
  {
    name: "qrsDurationMsec",
    dataType: "number",
    minValue: 0,
    maxValue: 200,
  },
];
function getRandomNumberOrEmptyString() {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    return faker.random.number();
  } else {
    return "";
  }
}
const generateRandomData = (errorPercentage) => {
  const rowData = {};
  medicalDataFields.forEach((field) => {
    const { name, dataType, minValue, maxValue, customFunction } = field;

    // Determine if there should be an error in this field
    const hasError = Math.random() * 100 < errorPercentage;

    if (hasError || errorPercentage === 100) {
      // Generate an error by choosing random data type and always incorrect value
      switch (dataType) {
        case "string":
          rowData[name] = getRandomNumberOrEmptyString(); // Empty string as an incorrect value
          break;
        case "number":
          rowData[name] = faker.random.word(); // Always generate incorrect data type
          break;
        default:
          rowData[name] = null; // Incorrect column name
      }
    } else {
      // Generate correct data using custom function if available
      if (customFunction) {
        rowData[name] = customFunction();
      } else {
        // Generate correct data based on data type
        switch (dataType) {
          case "string":
            rowData[name] = faker.lorem.word();
            break;
          case "number":
            if (minValue !== undefined && maxValue !== undefined) {
              rowData[name] = faker.random.number({
                min: minValue,
                max: maxValue,
              });
            }
            break;
          default:
            rowData[name] = null;
        }
      }
    }
  });
  return rowData;
};

// Set the error percentage (e.g., 100%)
const errorPercentage = 1;

// Generate rows with error percentage
const rows = Array.from({ length: 200 }, () =>
  generateRandomData(errorPercentage),
);

const csvWriter = createObjectCsvWriter({
  path: "error_data.csv",
  header: medicalDataFields.map((field) => ({
    id: field.name,
    title: field.name,
  })),
});
csvWriter
  .writeRecords(rows)
  .then(() => console.log("CSV file has been written successfully"))
  .catch((error) => console.error("Error writing CSV file:", error));
