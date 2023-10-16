interface DiseaseAnalytics {
  age: number;
  count: number;
}

interface DiseaseInfo {
  disease: string;
  analytics: DiseaseAnalytics[];
}

export function processData(inputData: any[]): DiseaseInfo[] {
  const diseaseData: { [disease: string]: DiseaseInfo } = {};

  for (const patient of inputData) {
    const { disease, age } = patient;

    if (disease !== undefined) {
      if (!diseaseData[disease]) {
        diseaseData[disease] = {
          disease,
          analytics: [],
        };
      }

      const analyticsObject = diseaseData[disease].analytics.find(
        (item) => item.age === age,
      );

      if (analyticsObject) {
        analyticsObject.count += 1;
      } else {
        diseaseData[disease].analytics.push({
          age,
          count: 1,
        });
      }
    }
  }
  const result: DiseaseInfo[] = Object.values(diseaseData);
  return result;
}

export function extractDiseases(data: DiseaseInfo[]): string[] {
  return data
    .map((diseaseInfo) => diseaseInfo.disease)
    .filter((disease) => disease); // Filters out empty or falsy values
}

export function filterDiseaseData(
  data: DiseaseInfo[],
  disease: string,
): DiseaseAnalytics[] | null {
  const lowerCaseDisease = disease.toLowerCase();
  const diseaseInfo = data.find(
    (item) => item.disease.toLowerCase() === lowerCaseDisease,
  );

  if (diseaseInfo) {
    return diseaseInfo.analytics.slice().sort((a, b) => a.age - b.age);
  } else {
    return null;
  }
}
