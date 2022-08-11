import Button from "Atoms/Button";
import Header from "Components/Header/Header";
import React from "react";

function FAQs() {
  const faqs = [
    {
      styles: "",
      title: "CE ESTE HORECA ORDERS?",
      description: `Pentru restaurante, HORECA ORDERS este o aplicație mobilă care le
      permite bucătarilor și managerilor să comande și să discute cu
      furnizorii. Pentru furnizori, HORECA ORDERS este o aplicație web și
      mobilă care le permite să gestioneze relațiile cu clienții și
      comenzile.`,
    },
    {
      styles: "bg-greyBg text-bluePrimary",
      title: "PENTRU CINE ESTE HORECA ORDERS?",
      description: `Oricine cumpără produse de la furnizori – bucătari, manageri de comenzi, proprietari, manageri de bar – și oricine vinde lucruri restaurantelor – furnizori și agenti de vânzări. Oricine din industrie este interesat să optimizeze modul în care comandă, să înlăture greșelile și să reducă risipa.`,
    },
    {
      styles: "",
      title: "FURNIZORII MEI TREBUIE SĂ FIE PE HORECA ORDERS?",
      description: `Nu. Puteți comanda de la toți furnizorii dvs. de pe HORECA ORDERS, indiferent dacă sunt sau nu înscriși pe platformă. Comenzile plasate în aplicație sunt convertite în formatul ales de furnizorul dvs. - e-mail, text 
      și prin integrare directă.`,
    },
    {
      styles: "bg-greyBg text-bluePrimary",
      title: "CUM MĂ POT ÎNSCRIE?",
      description: `Inregistrați-vă aici și echipa noastră vă va contacta pentru a vă configura în mai puțin de 24 de ore!`,
      button: "Inregistrare",
    },
    {
      styles: "",
      title: "EXISTĂ PREȚURI ÎN APLICAȚIE?",
      description: `Aplicația HORECA ORDERS nu afișează prețuri și nu compară prețurile între diferiți furnizori. HORECA ORDERS conectează bucătarii și managerii cu furnizorii lor existenți pentru a-și digitaliza procesul de comandă curent.`,
    },
  ];
  return (
    <>
      <Header
        headingText={`Intrebari 
        Frecvente`}
        home
        noButtons={"justify-center lg:px-8 px-16 text-center ml-0"}
        logoYellow
        bgHeader="bg-bluePrimary"
      />
      <div className="flex flex-col items-center">
        {faqs.map((question) => {
          return (
            <div
              className={`flex justify-center w-full py-14 px-8 lg:px-0 ${question.styles}`}
            >
              <div className="max-w-xl flex flex-col items-center">
                <p className="font-openSans font-extrabold lg:text-5xl text-4xl text-center">
                  {question?.title}
                </p>

                <p className="font-openSans lg:font-semibold font-normal text-center mt-4 lg:text-base text-xl">
                  {question?.description}
                </p>
                {question?.button && (
                  <Button styles={"mt-4 text-black"} text={question?.button} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FAQs;
