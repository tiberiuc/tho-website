import "./App.css";
import Home from "Components/Home";
import Footer from "Components/Footer";
import { Link, Route, Routes } from "react-router-dom";
import Restaurants from "Components/Restaurants";
import Suppliers from "Components/Suppliers";
import TermsAndConditions from "Components/ Terms&Conditions";
import PrivacyPolicy from "Components/PrivacyPolicy";
import FAQs from "Components/FAQs";
import About from "Components/About";
import { useEffect, useState } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function App() {
  const [navSize, setnavSize] = useState(false);
  const { width } = useWindowDimensions();

  const listenScrollEvent = () => {
    window.scrollY > 150 ? setnavSize(true) : setnavSize(false);
    width < 1024 && setnavSize(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div id="parent" className="relative">
      <nav
        id="navbar"
        className={`flex justify-between items-center py-2 px-4 bg-bluePrimary w-full fixed z-50 top-0 ${
          !navSize && "hidden"
        }`}
      >
        <div className="flex justify-start lg:flex-1">
          <a href="/">
            <img
              className="h-16"
              src={"SVGs/horeca-orders-logo.svg"}
              alt="Logo of Horeca Orders"
            />
          </a>
        </div>
        <div className="hidden lg:flex md:space-x-10">
          <Link
            to="/restaurante"
            className={`text-base font-semibold text-white font-openSans uppercase hover:underline hover:underline-offset-8 decoration-3	`}
          >
            Restaurante
          </Link>
          <Link
            to="/furnizori"
            className={`text-base font-semibold text-white font-openSans uppercase hover:underline hover:underline-offset-8 decoration-3	`}
          >
            Furnizori
          </Link>
          <Link
            to="/povesti"
            className={`hidden text-base font-semibold text-white font-openSans uppercase hover:underline hover:underline-offset-8 decoration-3	`}
          >
            Povesti
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="restaurante" element={<Restaurants />} />
        <Route path="furnizori" element={<Suppliers />} />
        <Route path="termeni-conditii" element={<TermsAndConditions />} />
        <Route
          path="politica-de-confidentialitate"
          element={<PrivacyPolicy />}
        />
        <Route path="intrebari-frecvente" element={<FAQs />} />
        <Route path="despre" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
