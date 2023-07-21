import "./App.css";
import Home from "Components/Home";
import Footer from "Components/Footer";
import {
  Link,
  NavLink,
  useNavigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Restaurants from "Components/Restaurants";
import Suppliers from "Components/Suppliers";
import TermsAndConditions from "Components/ Terms&Conditions";
import PrivacyPolicy from "Components/PrivacyPolicy";
import FAQs from "Components/FAQs";
import About from "Components/About";
import { useEffect, useState } from "react";
import Button from "Atoms/Button";
import ErrorPage from "Components/ErrorPage";
import PricingRestaurante from "Components/PricingRestaurante";
import PricingFurnizori from "Components/PricingFurnizori";
import { useTranslation } from "react-i18next";
import { Icon } from "Atoms/Button/Dropdown";
import i18n from "i18n";
import axios from "axios";
import { Helmet } from "react-helmet";
import ModalLanguage from "Atoms/Button/Modal";

export const languages = [
  { code: "ro", name: "Romana" },
  { code: "en", name: "English" },
  //  { code: "fr", name: "Français" },
];

export const countriesLanguages = {
  RO: "ro",
};

function LanguageMiddleware({ children }) {
  const navigate = useNavigate();

  const handleLanguageRedirection = async () => {
    const result = await axios.get("https://ipapi.co/json/");
    const defaultLocale = countriesLanguages[result.data.country_code] || "en";
    const currentPath = window.location.pathname;
    const currentLanguageCode = currentPath.split("/")[1];

    const languageExists = languages.some(
      (lang) => lang.code === currentLanguageCode
    );
    const locale = languageExists ? currentLanguageCode : defaultLocale;

    localStorage.setItem("i18nextLng", locale);
    i18n.changeLanguage(locale);

    if (!languageExists) {
      navigate(`/${defaultLocale}${currentPath}`);
    }
  };

  useEffect(() => {
    handleLanguageRedirection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
}

function App() {
  const [navSize, setnavSize] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [openLanguageModal, setOpenLanguageModal] = useState(false);

  const { t } = useTranslation("translation");
  const location = useLocation();
  const lang = location.pathname.split("/")[1];

  const listenScrollEvent = () => {
    window.scrollY > 150 ? setnavSize(true) : setnavSize(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  });

  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "",
      textUnderlineOffset: isActive ? "8px" : "",
      textDecorationThickness: isActive ? "3px" : "",
    };
  };

  return (
    <LanguageMiddleware>
      <ModalLanguage
        show={openLanguageModal}
        onClose={() => setOpenLanguageModal(false)}
        onCloseMenu={() => setIsNavOpen(false)}
      ></ModalLanguage>
      <Helmet htmlAttributes={{ lang: lang }} />
      <div id="parent" className={`relative`}>
        <nav
          id="navbar"
          className={`flex justify-between items-center py-2 px-4 bg-bluePrimary w-full fixed z-50 top-0 ${
            !navSize && "hidden"
          }  ${isNavOpen && "overflowHidden"}`}
        >
          <div className="flex justify-start lg:flex-1">
            <Link to={`/${lang}`}>
              <img
                className="h-14"
                src={"/SVGs/horeca-orders-logo.svg"}
                alt="Logo of Horeca Orders"
              />
            </Link>
          </div>
          <section className="flex lg:hidden">
            <div
              id="navbarActive"
              className="space-y-2 mt-2 mr-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className={`block h-0.5 w-8 bg-white `}></span>
              <span className={`block h-0.5 w-8 bg-white`}></span>
              <span className={`block h-0.5 w-8 bg-white`}></span>
            </div>

            <div
              className={isNavOpen ? "showMenuNav pt-4 flex" : "hideMenuNav"}
            >
              <div
                className="absolute top-0 right-0 px-6 py-6"
                onClick={() => setIsNavOpen(false)}
              >
                <img
                  className="w-7 h-7"
                  src="/SVGs/closeBtn.svg"
                  alt="Close Header Dropdown"
                />
              </div>
              <Link to={`/${lang}`}>
                <img
                  src="/SVGs/horeca-orders-logo-yellow.svg"
                  alt="Logo of Horeca Orders"
                />
              </Link>

              <div className="w-full bg-greyHairline h-px my-4" />
              <ul className="flex flex-col items-center justify-start ">
                <li
                  className="my-4 
                lg:text-bluePrimary text-white
             uppercase font-openSans"
                >
                  <Link
                    onClick={() => setIsNavOpen(false)}
                    to={`${lang}/restaurante`}
                  >
                    {t("restaurants")}
                  </Link>
                </li>
                <li
                  className="my-4 
                lg:text-bluePrimary text-white
             uppercase font-openSans"
                >
                  <Link
                    onClick={() => setIsNavOpen(false)}
                    to={`${lang}/furnizori`}
                  >
                    {t("suppliers")}
                  </Link>
                </li>
                <li
                  className="my-4 hidden
                   lg:text-bluePrimary text-white
                uppercase font-openSans"
                >
                  <Link
                    onClick={() => setIsNavOpen(false)}
                    to={`${lang}/povesti`}
                  >
                    {t("stories")}
                  </Link>
                </li>
                <li
                  className="my-4
                   lg:text-bluePrimary text-white
                uppercase font-openSans"
                >
                  <Button
                    link="https://horecaorders.com/login"
                    text="Log in"
                    styles={"text-black text-xl py-1"}
                    fontSizeText={"text-base"}
                  />
                </li>
              </ul>
              <div className="w-full bg-greyHairline h-px my-4" />
              <ul className="flex flex-col items-center justify-start ">
                <li
                  className="my-4  
                lg:text-bluePrimary text-white
             uppercase font-openSans"
                >
                  <Link to={`/${lang}/despre`}> {t("about")}</Link>
                </li>
                <li
                  className="my-4  
                lg:text-bluePrimary text-white
             uppercase font-openSans"
                >
                  <Link to={`/${lang}/intrebari-frecvente`}>{t("faq")}</Link>
                </li>
              </ul>
              <div className="w-full bg-greyHairline h-px my-4" />
              <ul className="flex flex-col items-center justify-start">
                <div
                  onClick={() => setOpenLanguageModal(true)}
                  className="flex justify-start items-center text-white"
                >
                  <div className="w-4 h-4 mr-2 ">
                    <Icon />
                  </div>
                  <span className={`uppercase font-openSans`}>
                    {i18n.language}
                  </span>
                </div>
              </ul>
            </div>
          </section>
          <div className="hidden lg:flex md:space-x-10 items-center">
            <NavLink
              style={navLinkStyles}
              to={`/${lang}/restaurante`}
              className={`text-base font-semibold text-white font-openSans uppercase hover:underline hover:underline-offset-8 decoration-3 transition ease-in-out delay-150`}
            >
              {t("restaurants")}
            </NavLink>
            <NavLink
              style={navLinkStyles}
              to={`/${lang}/furnizori`}
              className={`text-base font-semibold text-white font-openSans uppercase hover:underline hover:underline-offset-8 decoration-3 transition ease-in-out delay-150`}
            >
              {t("suppliers")}
            </NavLink>
            <NavLink
              style={navLinkStyles}
              to={`/${lang}/povesti`}
              className={`hidden text-base font-semibold text-white font-openSans uppercase hover:underline hover:underline-offset-8 decoration-3 transition ease-in-out delay-150`}
            >
              {t("stories")}
            </NavLink>
            <Button
              link="https://app.horecaorders.com/login"
              text="Log in"
              styles={"text-black text-xl py-1"}
            />
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<div />} />
          <Route path="/:lang" element={<Home />} />
          <Route path="/:lang/" element={<Home />} />
          <Route path="/:lang/restaurante" element={<Restaurants />} />
          <Route path="/:lang/furnizori" element={<Suppliers />} />
          <Route
            path="/:lang/termeni-conditii"
            element={<TermsAndConditions />}
          />
          <Route
            path="/:lang/politica-de-confidentialitate"
            element={<PrivacyPolicy />}
          />
          <Route path="/:lang/intrebari-frecvente" element={<FAQs />} />
          <Route path="/:lang/despre" element={<About />} />
          <Route
            path="/:lang/preturi-restaurante"
            element={<PricingRestaurante />}
          />
          <Route
            path="/:lang/preturi-furnizori"
            element={<PricingFurnizori />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </LanguageMiddleware>
  );
}

export default App;
