"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Loader2, Brain } from "lucide-react"
import { useLanguage } from "@/app/page"

interface ProcessingScreenProps {
  image: string | null
}

export default function ProcessingScreen({ image }: ProcessingScreenProps) {
  const { t } = useLanguage()

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">{t("analyzingTitle")}</h2>
        <p className="text-blue-700">{t("analyzingDesc")}</p>
      </div>

      <Card className="max-w-2xl mx-auto border-2 border-blue-200">
        <CardContent className="p-6">
          {image && (
            <div className="relative mb-6">
              <img src={image || "/placeholder.svg"} alt="Captured wound" className="w-full h-auto rounded-lg" />

              {/* Processing overlay */}
              <div className="absolute inset-0 bg-blue-900/20 rounded-lg flex items-center justify-center">
                <Card className="bg-white/95 border-blue-200">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center space-x-3 mb-3">
                      <Brain className="w-6 h-6 text-blue-600" />
                      <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
                    </div>
                    <h3 className="font-semibold text-blue-900 mb-1">{t("processingImage")}</h3>
                    <p className="text-sm text-blue-700">{t("aiAnalysis")}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
