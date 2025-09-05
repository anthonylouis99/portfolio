import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
export const Footer=() => {
  const {t}=useTranslation()
  return <div className="text-center flex flex-col justify-center items-center gap-4 p-4 bg-gray-200">
    <p>{t("footer.text")}</p>
   
  </div>;
}