"use client";

import { useState, createContext, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Heart, Shield, UserCheck, ArrowLeft } from "lucide-react";
import LanguageSelector from "@/components/language-selector";
import CameraInterface from "@/components/camera-interface";
import ProcessingScreen from "@/components/processing-screen";
import ResultsScreen from "@/components/results-screen";
import PrivacyNotice from "@/components/privacy-notice";
import { type Language, getTranslation } from "@/lib/i18n";
import {
  analyzeWoundImage,
  isWoundInfected,
  type WoundAnalysisResult,
} from "@/lib/api";

type Step = "landing" | "camera" | "processing" | "results";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export default function WoundChecker() {
  const [currentStep, setCurrentStep] = useState<Step>("landing");
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isInfected, setIsInfected] = useState<boolean>(false);
  const [confidence, setConfidence] = useState<number>(0);
  const [language, setLanguage] = useState<Language>("en");
  const [analysisResult, setAnalysisResult] =
    useState<WoundAnalysisResult | null>(null);
  const [analysisError, setAnalysisError] = useState<string | null>(null);

  const t = (key: string) => getTranslation(language, key);

  const handleStartCheck = () => {
    setCurrentStep("camera");
  };

  const handleImageCapture = async (imageData: string) => {
    setCapturedImage(imageData);
    setCurrentStep("processing");
    setAnalysisError(null);

    try {
      // Send image to Flask backend for analysis
      const result = await analyzeWoundImage(imageData);
      setAnalysisResult(result);

      // Determine if wound is infected based on confidence threshold
      const infected = isWoundInfected(result);
      setIsInfected(infected);
      setConfidence(result.confidence);

      setCurrentStep("results");
    } catch (error) {
      console.error("Analysis failed:", error);
      setAnalysisError(
        error instanceof Error ? error.message : "Unknown error occurred"
      );
      // For demo purposes, show an error state or fallback
      setCurrentStep("results");
      setIsInfected(false);
      setConfidence(0);
    }
  };

  const handleGoBack = () => {
    setCurrentStep("landing");
    setCapturedImage(null);
    setIsInfected(false);
    setConfidence(0);
    setAnalysisResult(null);
    setAnalysisError(null);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div
        className={`min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 ${
          language === "ar" ? "rtl" : "ltr"
        }`}
      >
        <div className="container mx-auto px-4 py-6 max-w-4xl">
          {/* Header with Go Back and Language Selector */}
          <div className="flex justify-between items-center mb-6">
            <div className="w-32">
              {currentStep !== "landing" && (
                <Button
                  onClick={handleGoBack}
                  variant="outline"
                  className="bg-white border-blue-200 hover:bg-blue-50"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t("goBack")}
                </Button>
              )}
            </div>
            <LanguageSelector />
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            {currentStep === "landing" && (
              <LandingPage onStart={handleStartCheck} />
            )}

            {currentStep === "camera" && (
              <CameraInterface onCapture={handleImageCapture} />
            )}

            {currentStep === "processing" && (
              <ProcessingScreen image={capturedImage} />
            )}

            {currentStep === "results" && (
              <ResultsScreen
                isInfected={isInfected}
                image={capturedImage}
                confidence={confidence}
                analysisResult={analysisResult}
                error={analysisError}
              />
            )}
          </div>

          {/* Privacy Notice */}
          <PrivacyNotice />
        </div>
      </div>
    </LanguageContext.Provider>
  );
}

function LandingPage({ onStart }: { onStart: () => void }) {
  const { t } = useLanguage();

  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <div className="flex justify-center">
          <div className="bg-blue-500 p-4 rounded-full">
            <Heart className="w-12 h-12 text-white" />
          </div>
        </div>
        <h1 className="font-bold text-blue-900 text-5xl">{t("title")}</h1>
        <p className="text-xl text-blue-700 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
      </div>

      <Card className="max-w-md mx-auto border-2 border-blue-200 shadow-lg">
        <CardContent className="p-8">
          <Button
            onClick={onStart}
            size="lg"
            className="w-full h-16 text-xl bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
          >
            <Camera className="w-8 h-8 mr-3" />
            {t("startButton")}
          </Button>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        <div className="text-center space-y-2">
          <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto">
            <Camera className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-blue-900">{t("step1Title")}</h3>
          <p className="text-sm text-blue-700">{t("step1Desc")}</p>
        </div>
        <div className="text-center space-y-2">
          <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto">
            <UserCheck className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-blue-900">{t("step2Title")}</h3>
          <p className="text-sm text-blue-700">{t("step2Desc")}</p>
        </div>
        <div className="text-center space-y-2">
          <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto">
            <Shield className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-blue-900">{t("step3Title")}</h3>
          <p className="text-sm text-blue-700">{t("step3Desc")}</p>
        </div>
      </div>
    </div>
  );
}
