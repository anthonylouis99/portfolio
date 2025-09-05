import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("fr")}>FR</button>
    </div>
  );
}
