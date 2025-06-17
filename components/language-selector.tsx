"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { languages } from "@/lib/i18n"
import { useLanguage } from "@/app/page"

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const selectedLanguage = languages.find((lang) => lang.code === language) || languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-white border-blue-200 hover:bg-blue-50">
          <span className="text-2xl mr-2">{selectedLanguage.flag}</span>
          {selectedLanguage.code.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white border-blue-200">
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.code)} className="hover:bg-blue-50">
            <span className="text-2xl mr-3">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
