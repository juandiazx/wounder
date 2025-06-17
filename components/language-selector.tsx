"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { languages } from "@/lib/i18n";
import { useLanguage } from "@/app/page";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const selectedLanguage =
    languages.find((lang) => lang.code === language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="bg-white border-blue-200 hover:bg-blue-50"
        >
          <img
            src={selectedLanguage.flag}
            alt={selectedLanguage.code}
            className="inline w-6 h-6 mr-2 rounded-full"
          />
          {selectedLanguage.code.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white border-blue-200">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className="hover:bg-blue-50"
          >
            <img
              src={lang.flag}
              alt={lang.code}
              className="inline w-6 h-6 mr-3 rounded-full"
            />
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
