import { useState } from "react";
import Button from "Atoms/Button";
import "./style.css";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="relative bg-blueHeader">
      <div className="flex justify-between items-start pt-10 px-10">
        <div className="flex justify-start lg:flex-1">
          <a href="/">
            <img className="" src="./horeca-orders-logo.png" alt="" />
          </a>
        </div>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-grey-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="my-4 uppercase">
                <a href="/about">Restaurante</a>
              </li>
              <li className="my-4 uppercase">
                <a href="/portfolio">Furnizori</a>
              </li>
              <li className="my-4 uppercase">
                <a href="/contact">Povesti</a>
              </li>
            </ul>
          </div>
        </section>
        <div className="hidden lg:flex md:space-x-10">
          <a
            href="/restaurante"
            className="text-base font-medium text-white hover:text-gray-900"
          >
            Restaurante
          </a>
          <a
            href="/furnizori"
            className="text-base font-medium text-white hover:text-gray-900"
          >
            Furnizori
          </a>
          <a
            href="/povesti"
            className="text-base font-medium text-white hover:text-gray-900"
          >
            Povesti
          </a>
        </div>
      </div>
      <h1 className="flex justify-center text-center text-white font-extrabold text-5xl lg:text-7xl px-8 mt-12">
        PLATFORMA DE COMENZI <br /> PENTRU INDUSTRIA OSPITALITATII
      </h1>
      <div className="flex flex-col lg:flex-row lg:flex justify-center items-center lg:space-x-4 mt-8 pb-32 ">
        <Button
          text={"Pentru Restaurante"}
          styles="w-48 justify-center"
        />
        <Button
          text={"Pentru Furnizori"}
          styles="mt-4 lg:mt-0 w-48 justify-center"
        />
      </div>

      {/* <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style> */}
    </nav>
  );
}
