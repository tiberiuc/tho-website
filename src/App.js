import "./App.css";
import Home from "Components/Home";
import Footer from "Components/Footer";
import { Link, NavLink, Route, Routes } from "react-router-dom";
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
import Dropdown from "Atoms/Button/Dropdown";

export const languages = [
  { code: "ro", name: "Romana" },
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
];

function App() {
  const [navSize, setnavSize] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { t } = useTranslation("translation");

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
    <div id="parent" className={`relative`}>
      <nav
        id="navbar"
        className={`flex justify-between items-center py-2 px-4 bg-bluePrimary w-full fixed z-50 top-0 ${
          !navSize && "hidden"
        }  ${isNavOpen && "overflowHidden"}`}
      >
        <div className="flex justify-start lg:flex-1">
          <a href="/">
            <img
              className="h-14"
              src={"SVGs/horeca-orders-logo.svg"}
              alt="Logo of Horeca Orders"
            />
          </a>
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

          <div className={isNavOpen ? "showMenuNav pt-4 flex" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-6 py-6"
              onClick={() => setIsNavOpen(false)}
            >
              <img
                className="w-7 h-7"
                src="SVGs/closeBtn.svg"
                alt="Close Header Dropdown"
              />
            </div>
            <a href="/">
              <img
                src="SVGs/horeca-orders-logo-yellow.svg"
                alt="Logo of Horeca Orders"
              />
            </a>

            <div className="w-full bg-greyHairline h-px my-4" />
            <ul className="flex flex-col items-center justify-start ">
              <li
                className="my-4 
                lg:text-bluePrimary text-white
             uppercase font-openSans"
              >
                <Link onClick={() => setIsNavOpen(false)} to="/restaurante">
                  {t("restaurants")}
                </Link>
              </li>
              <li
                className="my-4 
                lg:text-bluePrimary text-white
             uppercase font-openSans"
              >
                <Link onClick={() => setIsNavOpen(false)} to="/furnizori">
                  {t("suppliers")}
                </Link>
              </li>
              <li
                className="my-4 hidden
                   lg:text-bluePrimary text-white
                uppercase font-openSans"
              >
                <Link onClick={() => setIsNavOpen(false)} to="/povesti">
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
                <a href="/despre"> {t("about")}</a>
              </li>
              <li
                className="my-4  
                lg:text-bluePrimary text-white
             uppercase font-openSans"
              >
                <a href="/intrebari-frecvente">{t("faq")}</a>
              </li>
            </ul>
            <div className="w-full bg-greyHairline h-px my-4" />
            <ul className="flex flex-col items-center justify-start">
              <Dropdown />
            </ul>
          </div>
        </section>
        <div className="hidden lg:flex md:space-x-10 items-center">
          <NavLink
            style={navLinkStyles}
            to="/restaurante"
            className={`text-base font-semibold text-white font-openSans uppercase hover:underline hover:underline-offset-8 decoration-3 transition ease-in-out delay-150`}
          >
            {t("restaurants")}
          </NavLink>
          <NavLink
            style={navLinkStyles}
            to="/furnizori"
            className={`text-base font-semibold text-white font-openSans uppercase hover:underline hover:underline-offset-8 decoration-3 transition ease-in-out delay-150`}
          >
            {t("suppliers")}
          </NavLink>
          <NavLink
            style={navLinkStyles}
            to="/povesti"
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
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<ErrorPage />} />
        <Route path="restaurante" element={<Restaurants />} />
        <Route path="furnizori" element={<Suppliers />} />
        <Route path="termeni-conditii" element={<TermsAndConditions />} />
        <Route
          path="politica-de-confidentialitate"
          element={<PrivacyPolicy />}
        />
        <Route path="intrebari-frecvente" element={<FAQs />} />
        <Route path="despre" element={<About />} />
        <Route path="preturi-restaurante" element={<PricingRestaurante />} />
        <Route path="preturi-furnizori" element={<PricingFurnizori />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
