import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../utils/constant";
import i18next from "i18next";
import Cookies from "js-cookie";
const Header = () => {
  const { t } = useTranslation();
  const currentLanguage = Cookies.get("i18next") || LANGUAGES.VI;
  useEffect(() => {}, [t, currentLanguage]);
  return (
    <div>
      <p>Cookie là: {currentLanguage}</p>
      {t("content.functional")}
      <div className="flex flex-row gap-3">
        <div
          onClick={() => {
            Cookies.set("i18next", LANGUAGES.EN);
            i18next.changeLanguage(LANGUAGES.EN);
          }}
        >
          Anh
        </div>
        <div
          onClick={() => {
            Cookies.set("i18next", LANGUAGES.VI);
            i18next.changeLanguage(LANGUAGES.VI);
          }}
        >
          Việt
        </div>
      </div>
    </div>
  );
};

export default Header;
