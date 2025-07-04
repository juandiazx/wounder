"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, MapPin, Info } from "lucide-react";
import { useLanguage } from "@/app/page";
import { useEffect } from "react";
import { type WoundAnalysisResult } from "@/lib/api";

interface ResultsScreenProps {
  isInfected: boolean;
  image: string | null;
  confidence?: number;
  analysisResult?: WoundAnalysisResult | null;
  error?: string | null;
}

export default function ResultsScreen({
  isInfected,
  image,
  confidence = 0,
  analysisResult,
  error,
}: ResultsScreenProps) {
  const { t, language } = useLanguage();

  // Read out loud the result text when shown
  useEffect(() => {
    const text = isInfected ? t("infectedDesc") : t("notInfectedDesc");
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel(); // Stop any ongoing speech
      const utterance = new window.SpeechSynthesisUtterance(text);
      // Set language for better pronunciation using context
      utterance.lang =
        (language === "es" && "es-ES") ||
        (language === "ar" && "ar-SA") ||
        "en-US";
      window.speechSynthesis.speak(utterance);
    }
    // Cleanup: cancel speech on unmount
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isInfected, t, language]);

  return (
    <div className="space-y-8">
      {/* Results Section with Image and Status */}
      <Card className="max-w-4xl mx-auto border-2 border-blue-200">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Image Section */}
            {image && (
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={image || "/placeholder.svg"}
                    alt="Analyzed wound"
                    className="w-48 h-36 object-cover rounded-lg border-2 border-gray-200"
                  />
                  {/* Status Icon Overlay */}
                  <div className="absolute -top-2 -left-2">
                    <div
                      className={`p-2 rounded-full border-2 border-white shadow-lg ${
                        isInfected ? "bg-red-500" : "bg-green-500"
                      }`}
                    >
                      {isInfected ? (
                        <AlertTriangle className="w-5 h-5 text-white" />
                      ) : (
                        <CheckCircle className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Result Text Section */}
            <div className="flex-1 space-y-4">
              {error ? (
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-orange-900">
                    {t("analysisError") || "Analysis Error"}
                  </h3>
                  <div className="p-4 rounded-lg border-l-4 bg-orange-50 border-orange-400 text-orange-800">
                    <p className="text-base leading-relaxed">{error}</p>
                    <p className="text-sm mt-2 opacity-75">
                      {t("tryAgainLater") ||
                        "Please try again later or consult a healthcare professional."}
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <h3
                    className={`text-2xl font-bold mb-3 ${
                      isInfected ? "text-red-900" : "text-green-900"
                    }`}
                  >
                    {isInfected ? t("infectedTitle") : t("notInfectedTitle")}
                  </h3>

                  <div
                    className={`p-4 rounded-lg border-l-4 ${
                      isInfected
                        ? "bg-red-50 border-red-400 text-red-800"
                        : "bg-green-50 border-green-400 text-green-800"
                    }`}
                  >
                    <p className="text-base leading-relaxed">
                      {isInfected ? t("infectedDesc") : t("notInfectedDesc")}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Health Centers Map - Now More Prominent */}
      <Card className="max-w-4xl mx-auto border-2 border-blue-200 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-blue-500 p-2 rounded-full">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900">
                {t("nearbyHealthCenters")}
              </h3>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border-2 border-blue-100 shadow-inner">
            <iframe
              src="https://valencia.opendatasoft.com/explore/embed/dataset/hospitales/custom/?dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7InR5cGUiOiJjb2x1bW4iLCJmdW5jIjoiU1VNIiwieUF4aXMiOiJjYW1hcyIsInNjaWVudGlmaWNEaXNwbGF5Ijp0cnVlLCJjb2xvciI6IiM2NmMyYTUifV0sInhBeGlzIjoiYmFycmlvIiwibWF4cG9pbnRzIjoxMCwidGltZXNjYWxlIjoiIiwic29ydCI6InNlcmllMS0xIiwiY29uZmlnIjp7ImRhdGFzZXQiOiJob3NwaXRhbGVzIiwib3B0aW9ucyI6e319fV0sImRpc3BsYXlMZWdlbmQiOnRydWUsImFsaWduTW9udGgiOnRydWUsInRpbWVzY2FsZSI6IiJ9&static=false&datasetcard=false"
              width="100%"
              height="500"
              frameBorder="0"
              title={t("interactiveMap")}
              className="w-full"
            />
          </div>

          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800 text-center">
              {t("healthCenterMapTip")}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
