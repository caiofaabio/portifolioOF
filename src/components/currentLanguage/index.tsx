import { useTranslation } from "react-i18next";
import { CircleFlag } from "react-circle-flags";

interface languegeProps {
  flag?: boolean;
}
export function CurrentLanguege({ flag }: languegeProps) {
  const { i18n } = useTranslation();
  // //console.log(i18n.language)
  const currentLanguege = () => {
    if (i18n.language == "br") {
      return "Portuguesse";
    }
    if (i18n.language == "us") {
      return "English";
    }
    if (i18n.language == "es") {
      return "Espanish";
    }
  };

  return (
    <>
      <div className="flex items-center gap-1">
        <CircleFlag countryCode={i18n.language} height={20} width={20} />
        <p>{flag ? currentLanguege() : ""}</p>
      </div>
    </>
  );
}
