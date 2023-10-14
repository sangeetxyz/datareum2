function processMedicalData(dataList) {
  // Initialize variables to store insights
  const ageDiseaseMap = new Map();

  // Loop through the data
  dataList.forEach((data) => {
    // Check if the data has a "dateOfBirth" attribute
    if (data.dateOfBirth) {
      // Calculate age from date of birth
      const birthDate = new Date(data.dateOfBirth);
      const currentDate = new Date();
      const age = currentDate.getFullYear() - birthDate.getFullYear();

      // Check if the data has a "disease" attribute
      if (data.disease) {
        // Record disease for the age group
        if (!ageDiseaseMap.has(age)) {
          ageDiseaseMap.set(age, []);
        }
        ageDiseaseMap.get(age).push(data.disease);
      }
    }
  });

  // Log insights
  ageDiseaseMap.forEach((diseases, age) => {
    console.log(`Age: ${age} years`);
    console.log(`Common Diseases: ${getCommonDiseases(diseases)}`);
    console.log("---");
  });
}

function getCommonDiseases(diseases) {
  // Count the occurrences of diseases
  const diseaseCount = new Map();
  diseases.forEach((disease) => {
    if (diseaseCount.has(disease)) {
      diseaseCount.set(disease, diseaseCount.get(disease) + 1);
    } else {
      diseaseCount.set(disease, 1);
    }
  });

  // Sort diseases by frequency
  const sortedDiseases = [...diseaseCount.entries()].sort(
    (a, b) => b[1] - a[1],
  );

  // Return the most common diseases
  return sortedDiseases
    .slice(0, 3)
    .map(([disease, count]) => `${disease} (${count} times)`);
}

// Example usage with sample data
const medicalDataList = [
  { dateOfBirth: "1980-05-15", disease: "Hypertension" },
  { dateOfBirth: "1990-03-20", disease: "Diabetes" },
  { dateOfBirth: "1975-11-10", disease: "Hypertension" },
  { dateOfBirth: "1995-08-25", disease: "Asthma" },
  { dateOfBirth: "1982-12-05", disease: "Diabetes" },
  // Add more data here
];

processMedicalData(medicalDataList);
