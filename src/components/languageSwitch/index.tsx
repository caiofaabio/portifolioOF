import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import { CircleFlag } from "react-circle-flags";
import { CurrentLanguege } from "../currentLanguage";

interface LanguageProps {
  flag?: boolean;
}

export function LanguageSwitch({ flag }: LanguageProps) {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative inline-block">
      <div
        className="flex p-1.5 px-2 rounded-md  items-center cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        {flag ? <CurrentLanguege /> : <CurrentLanguege flag />}
        <ChevronDown size={16} />
      </div>

      {open && (
        <div className="absolute mt-1 mx-2 w-40 rounded-lg bg-gray-600 dark:bg-gray-800 shadow-lg z-10">
          <div className="py-1">
            <div className="px-4 py-2 text-sm font-semibold text-white">
              {t("language")}
            </div>
            <div className="border-t border-gray-600 mb-2"></div>
            <div
              className="cursor-pointer px-4 py-2 hover:bg-gray-600 flex gap-2 items-center"
              onClick={() => handleLanguageChange("us")}
            >
              <CircleFlag countryCode="us" height={24} width={24} />
              <span className="text-gray-200 dark:text-white text-sm">
                English
              </span>
            </div>
            <div
              className="cursor-pointer px-4 py-2 hover:bg-gray-600 flex gap-2 items-center"
              onClick={() => handleLanguageChange("br")}
            >
              <CircleFlag countryCode="br" height={24} width={24} />
              <span className="text-gray-200 dark:text-white text-sm">
                Portuguesse
              </span>
            </div>
            <div
              className="cursor-pointer px-4 py-2 hover:bg-gray-600 flex gap-2 items-center"
              onClick={() => handleLanguageChange("es")}
            >
              <CircleFlag countryCode="es" height={24} width={24} />
              <span className="text-gray-200 dark:text-white text-sm">
                Espanish
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
