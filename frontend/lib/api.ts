// API utilities for wound analysis
export interface WoundAnalysisResult {
  filename: string;
  infected: boolean;
  confidence: number;
}

export interface WoundAnalysisError {
  error: string;
}

const API_BASE_URL = "http://localhost:8080";

export async function analyzeWoundImage(
  imageDataUrl: string
): Promise<WoundAnalysisResult> {
  try {
    // Convert data URL to blob
    const response = await fetch(imageDataUrl);
    const blob = await response.blob();

    // Create form data
    const formData = new FormData();
    formData.append("image", blob, "wound_image.jpg");

    // Send request to Flask backend
    const apiResponse = await fetch(`${API_BASE_URL}/api/v1/evaluate-wound`, {
      method: "POST",
      body: formData,
    });

    if (!apiResponse.ok) {
      const errorData: WoundAnalysisError = await apiResponse.json();
      throw new Error(
        errorData.error || `HTTP error! status: ${apiResponse.status}`
      );
    }

    const result: WoundAnalysisResult = await apiResponse.json();

    console.log(result)

    return result;
  } catch (error) {
    console.error("Error analyzing wound image:", error);
    throw error;
  }
}

export function isWoundInfected(result: WoundAnalysisResult): boolean {
  return result.infected && result.confidence > 0.7;
}
