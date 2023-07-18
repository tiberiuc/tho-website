import { languages } from "App";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ModalLanguage = ({ show, onClose }) => {
  const { t, i18n } = useTranslation("translation");
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const navigate = useNavigate();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    const remainingPath = window.location.pathname
      .split("/")
      .slice(2)
      .join("/");
    navigate(`/${lang}/${remainingPath}`);
    onClose();
  };

  useEffect(() => {
    i18n.on("languageChanged", (lang) => {
      setCurrentLanguage(lang);
    });
  }, [i18n]);

  return (
    <div
      className={`fixed w-full h-full top-0 left-0 flex items-center justify-center transition-all ease-in-out duration-500 transform ${
        show ? "scale-100" : "scale-0"
      } z-[100]`}
      style={{ transformOrigin: "center" }}
    >
      <div className="absolute flex items-center justify-left px-10 w-full h-full bg-bluePrimary">
        <div style={{ maxHeight: "90vh", overflowY: "auto", width: "100%" }}>
          <p className="text-white font-bold text-2xl mb-2">
            {t("header.description-for-translation")}
          </p>
          <div>
            {languages.map(({ code, name }) => {
              return (
                <div
                  key={code}
                  onClick={() => changeLanguage(code)}
                  className={`${
                    code === currentLanguage
                      ? "underline underline-offset-[5px]"
                      : ""
                  } text-white block py-3 text-xl font-semibold cursor-pointer`}
                >
                  {name}
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="absolute top-0 right-0 px-6 py-6"
          onClick={() => onClose()}
        >
          <img
            className="w-7 h-7"
            src="/SVGs/closeBtn.svg"
            alt="Close Header Dropdown"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalLanguage;
