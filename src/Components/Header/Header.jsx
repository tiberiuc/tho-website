import { useState } from "react";
import Button from "Atoms/Button";
import "./style.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="relative bg-bluePrimary">
      <div className="flex justify-between items-start lg:pt-10 pt-4 lg:px-10 px-4">
        <div className="flex justify-start lg:flex-1">
          <a href="/">
            <img className="" src="SVGs/horeca-orders-logo.svg" alt="" />
          </a>
        </div>
        <section className="flex lg:hidden">
          <div
            className="space-y-2 mt-2 mr-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav mt-4 flex" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-4"
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
              <li className="my-4 text-white uppercase font-openSans">
                <a href="/about">Restaurante</a>
              </li>
              <li className="my-4 text-white uppercase font-openSans">
                <a href="/portfolio">Furnizori</a>
              </li>
              <li className="my-4 text-white uppercase font-openSans">
                <a href="/contact">Povesti</a>
              </li>
            </ul>
            <div className="w-full bg-greyHairline h-px my-4" />
            <ul className="flex flex-col items-center justify-start ">
              <li className="my-4 text-white uppercase font-openSans">
                <a href="/portfolio">Despre</a>
              </li>
              <li className="my-4 text-white uppercase font-openSans">
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
            className="text-base font-medium text-white hover:text-gray-900 font-openSans uppercase"
          >
            Restaurante
          </Link>
          <a
            href="/furnizori"
            className="text-base font-medium text-white hover:text-gray-900 font-openSans uppercase"
          >
            Furnizori
          </a>
          <a
            href="/povesti"
            className="text-base font-medium text-white hover:text-gray-900 font-openSans uppercase"
          >
            Povesti
          </a>
        </div>
      </div>
      <h1 className="flex justify-center text-center text-white font-extrabold font-openSans italic text-4xl sm:text-5xl lg:text-7xl lg:px-8 px-16 mt-12">
        PLATFORMA DE COMENZI <br /> PENTRU INDUSTRIA OSPITALITATII
      </h1>
      <div className="flex flex-col lg:flex-row lg:flex justify-center items-center lg:space-x-4 mt-8 lg:pb-32 pb-14">
        <Button
          text={"Pentru Restaurante"}
          styles="lg:w-48 w-64 justify-center"
        />
        <Button
          text={"Pentru Furnizori"}
          styles="mt-4 lg:mt-0 lg:w-48 w-64 justify-center"
        />
      </div>
    </nav>
  );
}
