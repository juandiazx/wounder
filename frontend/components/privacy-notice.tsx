"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Eye, Database, Phone } from "lucide-react"
import { useLanguage } from "@/app/page"

export default function PrivacyNotice() {
  const { t } = useLanguage()

  return (
    <Card className="mt-12 border-2 border-blue-200 bg-blue-50/50">
      <CardContent className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Shield className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-blue-900">{t("privacyTitle")}</h3>
        </div>

        <div className="space-y-4 text-sm text-blue-800 max-h-32 overflow-y-auto">
          <div className="flex items-start space-x-3">
            <Eye className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
            <p>
              <strong>{t("anonymityTitle")}</strong> {t("anonymityDesc")}
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <Database className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
            <p>
              <strong>{t("noDataTitle")}</strong> {t("noDataDesc")}
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <Phone className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
            <p>
              <strong>{t("noAuthoritiesTitle")}</strong> {t("noAuthoritiesDesc")}
            </p>
          </div>

          <div className="pt-2 border-t border-blue-200">
            <p className="text-xs text-blue-700">
              <strong>{t("medicalDisclaimer")}</strong>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
