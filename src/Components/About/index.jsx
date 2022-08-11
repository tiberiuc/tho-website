import Header from "Components/Header/Header";
import React from "react";

function About() {
  return (
    <>
      <Header
        headingText={`SPRIJINIM OAMENII SI AFACERILE 
        DIN INDUSTRIA OSPITALITATII
        PRIN TEHNOLOGIE`}
        restaurant
        noButtons={"justify-center lg:px-8 px-16 text-center ml-0"}
        logoYellow
        bgHeader="bg-greyBg"
      />
      <div className="flex justify-center">
        <div
          className={`grid lg:grid-cols-2 grid-cols-1 w-full items-center bg-bluePrimary`}
        >
          <div
            className={`flex flex-col justify-start lg:pl-32 lg:pr-16 pl-10 pr-10 mb-7 2xl:items-center 2xl:max-w-3xl justify-items-center text-white`}
          >
            <span className="text-4xl 2xl:text-center font-extrabold font-openSans max-w-lg mt-15">
              MAI MULT SUCCES PENTRU AFACERILE DIN INDUSTRIA OSPITALITATII
            </span>
            <span className="font-medium 2xl:text-center font-openSans mt-5 whitespace-pre-line">
              Afacerea dvs. din industria ospitalitatii reprezinta sufletul
              comunitatii. Noi suntem aici pentru a vă ajuta să aveți si mai
              mult succes. Construim tehnologia de care aveți nevoie pentru a
              concura cu francizele globale (fără să acționați ca una), astfel
              încât să puteți crește în moduri care să vă servească cifrele,
              viziunea și comunitatea.
            </span>
          </div>
          <div>
            <picture>
              <source
                media="(max-width: 799px)"
                srcset="images/ustensila-bucatarie-fata@3x.png"
              />
              <source
                media="(min-width: 800px)"
                srcset="images/ustensila-bucatarie-fata@2x.png"
              />
              <img
                className="object-cover max-h-128 w-screen"
                src="images/ustensila-bucatarie-fata.png"
                alt="Girl in the kitchen"
              />
            </picture>
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:my-14 my-10 mx-8">
        <div className="flex flex-col items-center max-w-3xl">
          <p className="font-openSans font-extrabold lg:text-5xl text-3xl">
            DACA PERSONALUL ZAMBESTE, CLIENTII ZAMBESC SI ASA VOM TRAI INTR-O
            LUME MAI BUNA
          </p>
          <p className="font-openSans lg:font-semibold font-normal lg:text-3xl text-2xl lg:mt-14 mt-8">
            Clienții vor să intre într-un restaurant și să gaseasca mancarea
            potrivita și personalul amabil si fericit. Ei nu vor să afle
            coșmarul instituit în culise pentru a avea toate ingredientele
            pentru mancarea de pe masa.
          </p>
          <p className="font-openSans lg:font-semibold font-normal lg:text-3xl text-2xl lg:mt-8 mt-4">
            Am descoperit că modul în care restaurantele își comandă
            ingredientele este un proces defectuos, atât pentru restaurant, cât
            și pentru furnizor.
          </p>
          <p className="font-openSans lg:font-semibold font-normal lg:text-3xl text-2xl lg:mt-8 mt-4">
            Așa ne-am decis să construim un software care să îmbunătățească
            acest proces pentru ambele părți - și să digitalizăm întregul lanț
            de aprovizionare începând de acolo.
          </p>
          <p className="font-openSans font-bold lg:text-3xl text-2xl lg:mt-8 mt-4">
            HORECA ORDERS este solutia la o problema, nu doar o idee pentru o
            afacere.
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url(/images/pune-ti-comenzile-in-ordine.png)",
        }}
        className="bg-opacity-25 flex flex-col justify-center items-center w-full lg:py-28 py-16 lg:px-0 px-10"
      >
        <p className="font-openSans font-extrabold italic lg:text-7xl text-4xl text-white text-center">
          SISTEMUL ALIMENTAR POATE
          <br />
          FI EFICIENTIZAT IAR VIATA
          <br />
          A MILIOANE DE OAMENI
          <br />
          POATE FI IMBUNATATITA
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
          <picture>
            <source
              media="(max-width: 799px)"
              srcset="images/juan-manuel@3x.png"
            />
            <source
              media="(min-width: 800px)"
              srcset="images/juan-manuel@2x.png"
            />
            <img
              className="object-cover max-h-180 2xl:max-h-full lg:p-0 p-10 h-full"
              src="images/juan-manuel.png"
              alt=""
            />
          </picture>
          <div className="flex flex-col items-center justify-center px-10 lg:px-0 lg:pb-0 pb-10">
            <p className="font-openSans font-extrabold lg:text-7xl text-4xl text-black italic text-center">
              DE CE <br /> “HORECA <br /> ORDERS”?
            </p>
            <p className="font-openSans font-semibold lg:text-2xl text-xl text-center mt-6">
              HORECA reprezinta abrevierea a trei cuvinte: Hotel, Restaurant şi
              Catering. Afacerile din HORECA sunt cele pentru care ne trezim
              dimineata si pentru care ne straduim sa-si pastreze magia
              sizambetul.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
