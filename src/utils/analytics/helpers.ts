interface Patient {
  age: number;
  disease: string;
}

interface DiseaseCount {
  age: number;
  disease: string;
  count: number;
}

export function processData(inputData: Patient[]): DiseaseCount[] {
  // Create an object to store the disease counts for each age
  const ageCounts: DiseaseCount[] = [];

  // Process the input data and count diseases for each age
  for (const patient of inputData) {
    const { age, disease } = patient;
    if (age >= 1 && age <= 100) {
      // Check if an entry already exists for this age and disease
      const existingEntry = ageCounts.find(
        (entry) => entry.age === age && entry.disease === disease,
      );
      if (existingEntry) {
        // If an entry exists, increment the count
        existingEntry.count++;
      } else {
        // If no entry exists, create a new entry
        ageCounts.push({ age, disease, count: 1 });
      }
    }
  }

  // Sort the array in ascending order of ages
  ageCounts.sort((a, b) => a.age - b.age);

  return ageCounts;
}
