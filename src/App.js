import "./App.css";
import Home from "Components/Home";
import Footer from "Components/Footer";
import { Route, Routes } from "react-router-dom";
import Restaurants from "Components/Restaurants";
import Suppliers from "Components/Suppliers";
import TermsAndConditions from "Components/ Terms&Conditions";
import PrivacyPolicy from "Components/PrivacyPolicy";
import FAQs from "Components/FAQs";
import About from "Components/About";
// import { useEffect, useState } from "react";

function App() {
  // const [show, setShow] = useState(false);

  // const controlNavBar = () => {
  //   if (window.screenY > 50) {
  //     setShow(true);
  //   } else {
  //     setShow(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", controlNavBar);
  //   return () => {
  //     window.removeEventListener("scroll", controlNavBar);
  //   };
  // }, []);
  return (
    <div className="relative">
      {/* <nav className={`mt-96 bg-red-400 h-20 ${!show && "hidden"}`}>orice</nav> */}
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
