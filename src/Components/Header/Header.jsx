import { useState } from "react";
import Button from "Atoms/Button";
import "./style.css";
import { Link, NavLink } from "react-router-dom";

export default function Header({
  bgHeader,
  home,
  restaurant,
  supplier,
  headingText,
  headerButtonLeft,
  headerButtonRight,
  logoYellow,
  noButtons,
  lastModificationDate,
  noButtonsWithoutModificationText,
}) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "",
      textUnderlineOffset: isActive ? "8px" : "",
      textDecorationThickness: isActive ? "3px" : "",
    };
  };

  return (
    <nav className={`relative ${!!bgHeader ? bgHeader : "bg-bluePrimary"}`}>
      <div className="flex justify-between items-start lg:pt-10 pt-4 lg:px-10 px-4">
        <div className="flex justify-start lg:flex-1">
          <a href="/">
            <img
              src={
                logoYellow
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
              className={`block h-0.5 w-8 ${restaurant && "bg-bluePrimary"} 
              ${home && "bg-white"}  ${supplier && "bg-black"}`}
            ></span>
            <span
              className={`block h-0.5 w-8 ${restaurant && "bg-bluePrimary"} 
              ${home && "bg-white"} ${supplier && "bg-black"}`}
            ></span>
            <span
              className={`block h-0.5 w-8 ${restaurant && "bg-bluePrimary"} 
              ${home && "bg-white"} ${supplier && "bg-black"}`}
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
                  restaurant && "lg:text-bluePrimary text-white"
                } ${
                  (home || supplier) && "text-white"
                } uppercase font-openSans`}
              >
                <Link to="/restaurante">Restaurante</Link>
              </li>
              <li
                className={`my-4 ${
                  restaurant && "lg:text-bluePrimary text-white"
                } ${
                  (home || supplier) && "text-white"
                } uppercase font-openSans`}
              >
                <Link to="/furnizori">Furnizori</Link>
              </li>
              <li
                className={`my-4 hidden ${
                  restaurant && "lg:text-bluePrimary text-white"
                } ${
                  (home || supplier) && "text-white"
                } uppercase font-openSans`}
              >
                <Link to="/povesti">Povesti</Link>
              </li>
            </ul>
            <div className="w-full bg-greyHairline h-px my-4" />
            <ul className="flex flex-col items-center justify-start ">
              <li
                className={`my-4 ${
                  restaurant && "lg:text-bluePrimary text-white"
                } ${
                  (home || supplier) && "text-white"
                } uppercase font-openSans`}
              >
                <a href="/portfolio">Despre</a>
              </li>
              <li
                className={`my-4 ${
                  restaurant && "lg:text-bluePrimary text-white"
                } ${
                  (home || supplier) && "text-white"
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
          <NavLink
            style={navLinkStyles}
            to="/restaurante"
            className={`text-base font-semibold 
            ${restaurant && "text-bluePrimary"} 
            ${home && "text-white"} 
            ${
              supplier && "text-black"
            } font-openSans uppercase hover:underline hover:underline-offset-8 decoration-3`}
          >
            Restaurante
          </NavLink>
          <NavLink
            style={navLinkStyles}
            to="/furnizori"
            className={`text-base font-semibold 
            ${restaurant && "text-bluePrimary"} 
            ${home && "text-white"} 
            ${
              supplier && "text-black"
            } font-openSans uppercase hover:underline hover:underline-offset-8 decoration-3`}
          >
            Furnizori
          </NavLink>
          <NavLink
            style={navLinkStyles}
            to="/povesti"
            className={`hidden text-base font-semibold 
            ${restaurant && "text-bluePrimary"} 
            ${home && "text-white"} 
            ${
              supplier && "text-black"
            } font-openSans uppercase hover:underline hover:underline-offset-8 decoration-3`}
          >
            Povesti
          </NavLink>
        </div>
      </div>
      <h1
        className={`flex ${
          noButtons
            ? `${noButtons}`
            : "justify-center lg:px-8 px-16 text-center"
        }   
        ${restaurant && "text-bluePrimary"} 
        ${home && "text-white"} 
        ${supplier && "text-black"} 
        ${
          noButtonsWithoutModificationText && "lg:pb-32 pb-14"
        } font-extrabold font-openSans italic text-4xl sm:text-5xl lg:text-7xl mt-12 lg:whitespace-pre-line`}
      >
        {headingText}
      </h1>
      {(!noButtons || noButtonsWithoutModificationText) && (
        <div className="flex flex-col lg:flex-row lg:flex justify-center items-center lg:space-x-4 lg:space-y-0 space-y-4 mt-8 lg:pb-32 pb-14">
          {!headerButtonLeft?.externalLink ? (
            <Link to={headerButtonLeft?.link}>
              <Button
                text={headerButtonLeft?.text}
                styles="lg:w-48 w-64 justify-center px-2 py-4"
              />
            </Link>
          ) : (
            <Button
              text={headerButtonLeft?.text}
              styles="lg:w-48 w-64 justify-center px-2 py-4"
              link={headerButtonLeft?.externalLink}
            />
          )}
          {!headerButtonRight?.externalLink ? (
            <Link to={headerButtonRight?.link}>
              <Button
                text={headerButtonRight?.text}
                styles="lg:w-48 w-64 justify-center px-2 py-4"
              />
            </Link>
          ) : (
            <Button
              text={headerButtonRight?.text}
              styles="lg:w-48 w-64 justify-center px-2 py-4"
              link={headerButtonRight?.externalLink}
            />
          )}
        </div>
      )}
      {noButtons && (
        <div
          className={`${
            restaurant ? "text-black" : "text-white"
          } font-bold font-openSans text-3xl lg:ml-52 lg:pb-32 pb-14 mt-10 lg:mx-0 mx-8`}
        >
          {lastModificationDate}
        </div>
      )}
    </nav>
  );
}
