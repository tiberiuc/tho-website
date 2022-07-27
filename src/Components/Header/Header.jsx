import { useState } from "react";
import Button from "Atoms/Button";
import "./style.css";
import { Link } from "react-router-dom";

export default function Header({
  bgHeader,
  restaurant,
  headingText,
  headerButtonLeft,
  headerButtonRight,
}) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className={`relative ${!!bgHeader ? bgHeader : "bg-bluePrimary"}`}>
      <div className="flex justify-between items-start lg:pt-10 pt-4 lg:px-10 px-4">
        <div className="flex justify-start lg:flex-1">
          <a href="/">
            <img
              src={
                !!restaurant
                  ? "SVGs/horeca-orders-logo-yellow.svg"
                  : "SVGs/horeca-orders-logo.svg"
              }
              alt="Logo of Horeca Orders"
            />
          </a>
        </div>
        <section className="flex lg:hidden">
          <div
            className="space-y-2 mt-2 mr-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span
              className={`block h-0.5 w-8 ${
                restaurant ? "bg-bluePrimary" : "bg-white "
              }`}
            ></span>
            <span
              className={`block h-0.5 w-8 ${
                restaurant ? "bg-bluePrimary" : "bg-white "
              }`}
            ></span>
            <span
              className={`block h-0.5 w-8 ${
                restaurant ? "bg-bluePrimary" : "bg-white "
              }`}
            ></span>
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
            <img
              src="SVGs/horeca-orders-logo-yellow.svg"
              alt="Logo of Horeca Orders"
            />
            <div className="w-full bg-greyHairline h-px my-4" />
            <ul className="flex flex-col items-center justify-start ">
              <li
                className={`my-4 ${
                  !!restaurant ? "lg:text-bluePrimary text-white" : "text-white"
                } uppercase font-openSans`}
              >
                <Link to="/restaurante">Restaurante</Link>
              </li>
              <li
                className={`my-4 ${
                  !!restaurant ? "lg:text-bluePrimary text-white" : "text-white"
                } uppercase font-openSans`}
              >
                <Link to="/furnizori">Furnizori</Link>
              </li>
              <li
                className={`my-4 ${
                  !!restaurant ? "lg:text-bluePrimary text-white" : "text-white"
                } uppercase font-openSans`}
              >
                <Link to="/povesti">Povesti</Link>
              </li>
            </ul>
            <div className="w-full bg-greyHairline h-px my-4" />
            <ul className="flex flex-col items-center justify-start ">
              <li
                className={`my-4 ${
                  !!restaurant ? "lg:text-bluePrimary text-white" : "text-white"
                } uppercase font-openSans`}
              >
                <a href="/portfolio">Despre</a>
              </li>
              <li
                className={`my-4 ${
                  !!restaurant ? "lg:text-bluePrimary text-white" : "text-white"
                } uppercase font-openSans`}
              >
                <a href="/contact">Intrebari frecvente</a>
              </li>
            </ul>
            <div className="w-full bg-greyHairline h-px my-4" />
            <ul className="flex flex-col items-center justify-start">
              <li className="flex items-center my-4 text-white uppercase font-openSans">
                <img
                  className="w-4 h-4 mr-2"
                  src="SVGs/translationIcon.svg"
                  alt="Translations"
                />
                <a href="/portfolio">RO</a>
              </li>
            </ul>
          </div>
        </section>
        <div className="hidden lg:flex md:space-x-10">
          <Link
            to="/restaurante"
            className={`text-base font-semibold ${
              !!restaurant ? "text-bluePrimary" : "text-white"
            } font-openSans uppercase hover:underline hover:underline-offset-8`}
          >
            Restaurante
          </Link>
          <Link
            to="/furnizori"
            className={`text-base font-semibold ${
              !!restaurant ? "text-bluePrimary" : "text-white"
            } font-openSans uppercase hover:underline hover:underline-offset-8`}
          >
            Furnizori
          </Link>
          <Link
            to="/povesti"
            className={`text-base font-semibold ${
              !!restaurant ? "text-bluePrimary" : "text-white"
            } font-openSans uppercase hover:underline hover:underline-offset-8`}
          >
            Povesti
          </Link>
        </div>
      </div>
      <h1
        className={`flex justify-center text-center ${
          !!restaurant ? "text-bluePrimary" : "text-white"
        } font-extrabold font-openSans italic text-4xl sm:text-5xl lg:text-7xl lg:px-8 px-16 mt-12 lg:whitespace-pre-line`}
      >
        {headingText}
      </h1>
      <div className="flex flex-col lg:flex-row lg:flex justify-center items-center lg:space-x-4 mt-8 lg:pb-32 pb-14">
        <Link to={headerButtonLeft.link}>
          <Button
            text={headerButtonLeft.text}
            styles="lg:w-48 w-64 justify-center"
          />
        </Link>
        <Link to={headerButtonRight.link}>
          <Button
            text={headerButtonRight.text}
            styles="mt-4 lg:mt-0 lg:w-48 w-64 justify-center"
          />
        </Link>
      </div>
    </nav>
  );
}
