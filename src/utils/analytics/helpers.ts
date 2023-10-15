interface PatientData {
  age: number;
  disease: string;
}

interface DiseaseAnalytics {
  age: number;
  count: number;
}

interface DiseaseInfo {
  disease: string;
  analytics: DiseaseAnalytics[];
}

export function processData(inputData: PatientData[]): DiseaseInfo[] {
  const diseaseData: { [disease: string]: DiseaseInfo } = {};

  for (const patient of inputData) {
    const { disease, age } = patient;

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

  const result = Object.values(diseaseData);

  result.forEach((entry) => {
    entry.analytics.sort((a, b) => a.age - b.age);
  });

  return result;
}

export function extractDiseases(data: DiseaseInfo[]): string[] {
  return data.map((diseaseInfo) => diseaseInfo.disease);
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
    return diseaseInfo.analytics;
  } else {
    return null;
  }
}
