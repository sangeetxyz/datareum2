const faker = require("faker");
const fs = require("fs");
const medicalDataFieldsPrivate = [
  {
    name: "age",
    dataType: "number",
    description: "Age count in Years.",
    constraints: "Value between 0 and 200",
    minValue: 0,
    maxValue: 100,
  },
  {
    name: "disease",
    dataType: "string",
    description: "Primary medical condition or disease of the patient.",
    constraints: "Free text",
  },
  {
    name: "previousDiseases",
    dataType: "string",
    description: "Previous medical conditions or diseases of the patient.",
    constraints: "Free text",
  },
  {
    name: "bloodGroup",
    dataType: "string",
    description: "Blood group of the patient.",
    constraints: "Must be one of: 'A,' 'B,' 'AB,' 'O'",
    allowedValues: (value) =>
      ["A", "B", "AB", "O"].includes(value.toUpperCase()),
  },
  {
    name: "rhFactor",
    dataType: "string",
    description: "Rh factor of the blood.",
    constraints: "Must be 'Positive' or 'Negative'",
    allowedValues: (value) =>
      ["Positive", "Negative"].includes(
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
      ),
  },
  {
    name: "hemoglobinCount",
    dataType: "number",
    description: "Hemoglobin count in g/dL.",
    constraints: "Value between 0 and 20",
    minValue: 0, // Minimum hemoglobin count value
    maxValue: 20, // Maximum hemoglobin count value
  },
  {
    name: "oxygenLevel",
    dataType: "number",
    description: "Oxygen level in percentage.",
    constraints: "Value between 0 and 100",
    minValue: 0, // Minimum oxygen level value
    maxValue: 100, // Maximum oxygen level value
  },
  {
    name: "bloodPressure",
    dataType: "string",
    description: "Blood pressure readings.",
    constraints: "Free text",
  },
  {
    name: "allergies",
    dataType: "string",
    description: "Known allergies of the patient.",
    constraints: "Free text",
  },
  {
    name: "sugarLevel",
    dataType: "number",
    description: "Blood sugar level in mg/dL.",
    constraints: "Value between 0 and 500",
    minValue: 0, // Minimum sugar level value
    maxValue: 500, // Maximum sugar level value
  },
  {
    name: "gender",
    dataType: "string",
    description: "Gender of the patient.",
    constraints: "Must be 'Male,' 'Female,' or 'Other'",
    allowedValues: (value) =>
      ["Male", "Female", "Other"].includes(
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
      ),
  },
  {
    name: "weight",
    dataType: "number",
    description: "Weight in kilograms.",
    constraints: "Value between 0 and 1000",
    minValue: 0, // Minimum weight value
    maxValue: 1000, // Maximum weight value
  },
  {
    name: "height",
    dataType: "number",
    description: "Height in centimeters.",
    constraints: "Value between 0 and 300",
    minValue: 0, // Minimum height value
    maxValue: 300, // Maximum height value
  },
  {
    name: "bilirubin",
    dataType: "number",
    description: "Bilirubin level in mg/dL.",
    constraints: "Value between 0 and 10",
    minValue: 0, // Minimum bilirubin value
    maxValue: 10, // Maximum bilirubin value
  },
  {
    name: "sodiumPotassiumLevel",
    dataType: "string",
    description: "Sodium and potassium levels in the blood.",
    constraints: "Free text",
  },
  {
    name: "wbcCount",
    dataType: "number",
    description: "White blood cell (WBC) count.",
    constraints: "Value between 0 and 50,000",
    minValue: 0, // Minimum WBC count value
    maxValue: 50000, // Maximum WBC count value
  },
  {
    name: "plateletCount",
    dataType: "number",
    description: "Platelet count.",
    constraints: "Value between 0 and 1,000,000",
    minValue: 0, // Minimum platelet count value
    maxValue: 1000000, // Maximum platelet count value
  },
  {
    name: "rbcCount",
    dataType: "number",
    description: "Red blood cell (RBC) count.",
    constraints: "Value between 0 and 8,000,000",
    minValue: 0, // Minimum RBC count value
    maxValue: 8000000, // Maximum RBC count value
  },
  {
    name: "cholesterol",
    dataType: "number",
    description: "Cholesterol level in mg/dL.",
    constraints: "Value between 0 and 300",
    minValue: 0, // Minimum cholesterol value
    maxValue: 300, // Maximum cholesterol value
  },
  {
    name: "leukocytesCount",
    dataType: "number",
    description: "Leukocytes count.",
    constraints: "Value between 0 and 50,000",
    minValue: 0, // Minimum leukocytes count value
    maxValue: 50000, // Maximum leukocytes count value
  },
  {
    name: "surgicalHistory",
    dataType: "string",
    description: "Surgical history of the patient.",
    constraints: "Free text",
  },
  {
    name: "medicines",
    dataType: "string",
    description: "Medications taken by the patient.",
    constraints: "Free text",
  },
  {
    name: "respiratoryRate",
    dataType: "number",
    description: "Respiratory rate in breaths per minute.",
    constraints: "Value between 0 and 100",
    minValue: 0, // Minimum respiratory rate value
    maxValue: 100, // Maximum respiratory rate value
  },
  {
    name: "temperature",
    dataType: "number",
    description: "Body temperature in degrees Celsius.",
    constraints: "Value between 0 and 100",
    minValue: 0, // Minimum temperature value
    maxValue: 100, // Maximum temperature value
  },
  {
    name: "heartRate",
    dataType: "number",
    description: "Heart rate in beats per minute.",
    constraints: "Value between 0 and 250",
    minValue: 0, // Minimum heart rate value
    maxValue: 250, // Maximum heart rate value
  },
  {
    name: "creatinineLevel",
    dataType: "number",
    description: "Creatinine level in mg/dL.",
    constraints: "Value between 0 and 10",
    minValue: 0, // Minimum creatinine level value
    maxValue: 10, // Maximum creatinine level value
  },
  {
    name: "colonyCount",
    dataType: "number",
    description: "Colony count in a specific test.",
    constraints: "Value between 0 and 10,000",
    minValue: 0, // Minimum colony count value
    maxValue: 10000, // Maximum colony count value
  },
  {
    name: "neutrophilsCount",
    dataType: "number",
    description: "Neutrophils count.",
    constraints: "Value between 0 and 100",
    minValue: 0, // Minimum neutrophils count value
    maxValue: 100, // Maximum neutrophils count value
  },
  {
    name: "eosinophilsCount",
    dataType: "number",
    description: "Eosinophils count.",
    constraints: "Value between 0 and 100",
    minValue: 0, // Minimum eosinophils count value
    maxValue: 100, // Maximum eosinophils count value
  },
  {
    name: "basophilsCount",
    dataType: "number",
    description: "Basophils count.",
    constraints: "Value between 0 and 100",
    minValue: 0, // Minimum basophils count value
    maxValue: 100, // Maximum basophils count value
  },
  {
    name: "lymphocytesCount",
    dataType: "number",
    description: "Lymphocytes count.",
    constraints: "Value between 0 and 100",
    minValue: 0, // Minimum lymphocytes count value
    maxValue: 100, // Maximum lymphocytes count value
  },
  {
    name: "monocytesCount",
    dataType: "number",
    description: "Monocytes count.",
    constraints: "Value between 0 and 100",
    minValue: 0, // Minimum monocytes count value
    maxValue: 100, // Maximum monocytes count value
  },
  {
    name: "cReactiveProtine",
    dataType: "number",
    description: "C-reactive protein level in mg/dL.",
    constraints: "Value between 0 and 10",
    minValue: 0, // Minimum C-reactive protein value
    maxValue: 10, // Maximum C-reactive protein value
  },
  {
    name: "epithelialCells",
    dataType: "number",
    description: "Epithelial cells count.",
    constraints: "Value between 0 and 100",
    minValue: 0, // Minimum epithelial cells value
    maxValue: 100, // Maximum epithelial cells value
  },
  {
    name: "phLevel",
    dataType: "number",
    description: "pH level of a substance.",
    constraints: "Value between 0 and 14",
    minValue: 0, // Minimum pH level value
    maxValue: 14, // Maximum pH level value
  },
  {
    name: "bilirubinTotal",
    dataType: "number",
    description: "Total bilirubin level in mg/dL.",
    constraints: "Value between 0 and 10",
    minValue: 0, // Minimum total bilirubin value
    maxValue: 10, // Maximum total bilirubin value
  },
  {
    name: "totalProtine",
    dataType: "number",
    description: "Total protein level in g/dL.",
    constraints: "Value between 0 and 10",
    minValue: 0, // Minimum total protein value
    maxValue: 10, // Maximum total protein value
  },
  {
    name: "albumin",
    dataType: "number",
    description: "Albumin level in g/dL.",
    constraints: "Value between 0 and 10",
    minValue: 0, // Minimum albumin value
    maxValue: 10, // Maximum albumin value
  },
  {
    name: "globulin",
    dataType: "number",
    description: "Globulin level in g/dL.",
    constraints: "Value between 0 and 10",
    minValue: 0, // Minimum globulin value
    maxValue: 10, // Maximum globulin value
  },
  {
    name: "agRatio",
    dataType: "number",
    description: "Albumin/Globulin (A/G) ratio.",
    constraints: "Value between 0 and 10",
    minValue: 0, // Minimum A/G ratio value
    maxValue: 10, // Maximum A/G ratio value
  },
  {
    name: "astAltRatio",
    dataType: "number",
    description:
      "Aspartate aminotransferase (AST)/Alanine aminotransferase (ALT) ratio.",
    constraints: "Value between 0 and 10",
    minValue: 0, // Minimum AST/ALT ratio value
    maxValue: 10, // Maximum AST/ALT ratio value
  },
  {
    name: "tsh",
    dataType: "number",
    description: "Thyroid-stimulating hormone (TSH) level.",
    constraints: "Value between 0 and 10",
    minValue: 0, // Minimum TSH value
    maxValue: 10, // Maximum TSH value
  },
  {
    name: "freeT4",
    dataType: "number",
    description: "Free thyroxine (T4) level.",
    constraints: "Value between 0 and 10",
    minValue: 0, // Minimum free T4 value
    maxValue: 10, // Maximum free T4 value
  },
  {
    name: "freeT3",
    dataType: "number",
    description: "Free triiodothyronine (T3) level.",
    constraints: "Value between 0 and 10",
    minValue: 0, // Minimum free T3 value
    maxValue: 10, // Maximum free T3 value
  },
  {
    name: "glucoseFasting",
    dataType: "number",
    description: "Fasting blood glucose level in mg/dL.",
    constraints: "Value between 0 and 300",
    minValue: 0, // Minimum fasting glucose value
    maxValue: 300, // Maximum fasting glucose value
  },
  {
    name: "glucosePp",
    dataType: "number",
    description: "Post-prandial glucose level in mg/dL.",
    constraints: "Value between 0 and 300",
    minValue: 0, // Minimum post-prandial glucose value
    maxValue: 300, // Maximum post-prandial glucose value
  },
  {
    name: "uricAcidLevels",
    dataType: "number",
    description: "Uric acid levels in the blood.",
    constraints: "Value between 0 and 10",
    minValue: 0, // Minimum uric acid level value
    maxValue: 10, // Maximum uric acid level value
  },
  {
    name: "prInterval",
    dataType: "number",
    description: "PR interval in seconds.",
    constraints: "Value between 0 and 2",
    minValue: 0, // Minimum PR interval value
    maxValue: 2, // Maximum PR interval value
  },
  {
    name: "qtInterval",
    dataType: "number",
    description: "QT interval in milliseconds.",
    constraints: "Value between 0 and 500",
    minValue: 0, // Minimum QT interval value
    maxValue: 500, // Maximum QT interval value
  },
  {
    name: "qrsDuration",
    dataType: "number",
    description: "QRS duration in milliseconds.",
    constraints: "Value between 0 and 200",
    minValue: 0, // Minimum QRS duration value
    maxValue: 200, // Maximum QRS duration value
  },
];

const numRows = 10000; // Number of rows to generate

const realDiseases = [
  "Hypertension",
  "Diabetes",
  "Asthma",
  "Arthritis",
  "Cancer",
  "Alzheimer",
  "Heart Disease",
  "Stroke",
  "Parkinson",
  "Sclerosis",
];

// Helper function to generate fake data based on field type and constraints
function generateFakeData(field) {
  switch (field.dataType) {
    case "string":
      if (field.name === "gender") {
        return faker.random.arrayElement(["Male", "Female", "Other"]);
      } else if (field.name === "rhFactor") {
        return faker.random.arrayElement(["Positive", "Negative"]);
      } else if (field.name === "bloodGroup") {
        return faker.random.arrayElement(["A", "B", "AB", "O"]);
      }
      return faker.lorem.word();
    case "number":
      return parseFloat(
        faker.datatype
          .number({
            min: field.minValue || 0,
            max: field.maxValue || 100,
            // precision: 0.01, // Set the precision to 2 decimal places
          })
          .toFixed(2),
      );
    default:
      return "";
  }
}

// Generate fake data as a list of objects
const data = [];
for (let i = 0; i < numRows; i++) {
  const rowData = {};
  for (const field of medicalDataFieldsPrivate) {
    if (field.name === "disease") {
      rowData[field.name] = faker.random.arrayElement(realDiseases);
    } else {
      rowData[field.name] = generateFakeData(field);
    }
  }
  data.push(rowData);
}

// Convert the data to JSON
const jsonData = JSON.stringify(data, null, 2); // The '2' is for pretty-printing

// Save the JSON data to a file on disk
const fileName = "fake_medical_data.json";
fs.writeFileSync(fileName, jsonData);

console.log(`Fake medical data saved as ${fileName}`);
