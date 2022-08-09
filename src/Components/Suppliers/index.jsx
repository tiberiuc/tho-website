import Button from "Atoms/Button";
import FirstSection from "Components/FirstSection";
import Header from "Components/Header/Header";
import InformationsCard from "Components/InformationsCard";
import Whirligig from "react-whirligig";

function Suppliers() {
  const information = [
    {
      subTitle: "Comenzi pe pilot automat",
      description:
        "Descifrarea mâzgălelilor și a mesajelor vocale noaptea târziu nu este distractiva. Cu HORECA ORDERS, comenzile au numere de clienți, ID-uri de produs și date de livrare. În plus, ne integrăm cu ERP-ul dumneavoastră. Lucru bine facut.",
      img: "images/comenzi.png",
      img2: "images/comenzi@2x.png",
      img3: "images/comenzi@3x.png",
      componentStyles: "bg-greyBg justify-items-end items-center lg:h-98",
      textColor: "text-black",
      pictureStyles: "object-scale-down lg:w-86 w-80 h-72",
    },
    {
      subTitle: "Seteaza zile de livrare si ora limita pentru ultima comanda",
      description:
        "Alegeți în ce zile clienții dvs. pot solicita livrări. Adăugați o oră limită pentru livrarea în ziua următoare. Schimbați acest lucru pentru toți clienții sau doar unul.",
      img: "images/i-phone-x-time-elapse.png",
      img2: "images/i-phone-x-time-elapse@2x.png",
      img3: "images/i-phone-x-time-elapse@3x.png",
      componentStyles:
        "bg-yellowSection justify-items-center items-end lg:h-98",
      textColor: "text-black",
      pictureStyles: "object-scale-down h-86 w-64",
    },
    {
      subTitle: "Promoveaza-ti catalogul",
      description:
        "Menținerea catalogului actualizat este una, dar să-ti informezi clienții despre el este alta. Gestionarea catalogului dvs. online cu Horeca Orders înseamnă că informațiile despre produse (unități, ID-uri de produse, disponibilitate) sunt întotdeauna actualizate și vizibile pentru clienți.",
      img: "images/ho-catalog.png",
      img2: "images/ho-catalog@2x.png",
      img3: "images/ho-catalog@3x.png",
      componentStyles: "bg-greyBg justify-items-end items-center lg:h-98",
      textColor: "text-black",
      pictureStyles: "object-scale-down lg:w-86 w-80 h-72",
    },
    {
      subTitle: "Creste-ti vanzarile prin mesaje trimise simultan",
      description:
        "Promovați oferte speciale și produsele sezoniere prin mesaje mai multor clienți simultan. Clientii primesc mesajul în aplicația lor Horeca Orders și pot comanda in doar trei pasi simplii.",
      img: "images/ho-oferte.png",
      img2: "images/ho-oferte@2x.png",
      img3: "images/ho-oferte@3x.png",
      componentStyles:
        "bg-yellowSection justify-items-end items-center lg:h-98",
      textColor: "text-black",
      pictureStyles: "object-scale-down lg:w-86 w-80 h-72",
    },
    {
      subTitle: "Seteaza zile de livrare si ora limita pentru ultima comanda",
      description:
        "Alegeți în ce zile clienții dvs. pot solicita livrări. Adăugați o oră limită pentru livrarea în ziua următoare. Schimbați acest lucru pentru toți clienții sau doar unul.",
      img: "images/i-phone-x.png",
      img2: "images/i-phone-x@2x.png",
      img3: "images/i-phone-x@3x.png",
      componentStyles: "bg-bluePrimary justify-items-center items-end lg:h-98",
      textColor: "text-white",
      pictureStyles: "object-scale-down h-86 w-64",
    },
  ];

  const slider = [
    {
      paragraphDescription: `Am facut un pas foarte mare in organizarea comenzilor in restaurantul nostru. Inainte de Horeca Orders plasam comenzi in maniera clasica, dezorganizata, prin poze trimise la furnizori, conversatii lungi la telefon, whatsapp, sms, email, foarte complicat.
      Acum totul e mai simplu, mai integrat si cel mai important am castigat timp si siguranţă.
      Sistemul odata pus in functiune poate fi folosit de orice coleg din echipa noastra, e excelent.`,
      personDescription: `
      Gabi Herdean - Papila, Bucuresti
      `,
      img: "images/gabi-papila.png",
      img2: "images/gabi-papila.png",
      img3: "images/gabi-papila.png",
    },
    {
      paragraphDescription: `Înainte petreceam cel puțin 1 oră comandând în fiecare zi, acum pot face asta în doar 5-10 minute. Nu există tensiune sau presiune.
      În urmă cu aproximativ 6 luni, afacerea noastră de la "numele restaurantului" era în creștere și era important să ne simplificăm procesul de comandă, mai ales că aveam diferiți oameni care se ocupau de el! Acum, cu Horeca Orders, comandarea ne ia 5 minute în loc de 30.`,
      personDescription: `
      Nadia Mihai (Manager) - Sushi Master, Bucuresti
      `,
      img: "images/Nadia-Sushi-Master.png",
      img2: "images/Nadia-Sushi-Master.png",
      img3: "images/Nadia-Sushi-Master.png",
    },
    {
      paragraphDescription: `Înainte de HORECA ORDERS, trebuia să mă asigur că trimiteam un
      SMS persoanei potrivite sau că e-mailul sau SMS-ul a ajuns la
      furnizor. Trebuia să-mi amintesc să verific din nou comenzile
      pentru că le tastam pe toate. HORECA ORDERS este atât de
      convenabil și eficient!`,
      personDescription: `
      Marcel Popescu (Bucatar Sef) - Blue Margarita, Bucuresti
      `,
      img: "images/barman-image.png",
      img2: "images/barman-image@2x.png",
      img3: "images/barman-image@3x.png",
    },
  ];

  let whirligig;
  const next = () => whirligig.next();
  const prev = () => whirligig.prev();
  return (
    <div>
      <Header
        bgHeader={"bg-white"}
        headingText={`GESTIONEAZA COMENZILE
        MAI USOR`}
        headerButtonLeft={{
          text: "Inregistrare",
          link: "/",
        }}
        headerButtonRight={{
          text: "Autentificare",
          link: "/",
        }}
        logoYellow
        supplier
      />
      <FirstSection
        colors={{ background: "bg-greyBg", text: "text-black" }}
        subHeader={{
          textTitle: "COMUNICARE MAI PRECISA CU PARTENERII",
          paragraph: `Utilizați platforma HORECA ORDERS pentru a gestiona comenzile, edita catalogul sau promova produse - totul într-un singur loc. Permiteți echipei dvs. să economisească timp, să reducă erorile și să îmbunătățească relațiile cu clienții.`,
          imgSet: {
            img: "images/comunicare-cu-partenerii.png",
            img2x: "images/comunicare-cu-partenerii@2x.png",
            img3x: "images/comunicare-cu-partenerii@3x.png",
          },
          marginOfSection: "mb-16",
          info: [
            {
              img: "images/integrare-erp.png",
              img2: "images/integrare-erp@2x.png",
              img3: "images/integrare-erp@3x.png",
              subtitle: "Integrare ERP",
              description: `HORECA ORDERS se integreaza cu ERP-ul pentru a renunta la introducerea manuala a comenzilor pentru totdeauna. Economisiti timp. Reduceti costuri.`,
            },
            {
              img: "images/fara-comenzi-gresite.png",
              img2: "images/fara-comenzi-gresite@2x.png",
              img3: "images/fara-comenzi-gresite@3x.png",
              subtitle: "Fara comenzi gresite",
              description:
                "Obtineti comenzile de la clienti cu coduri de produs si date de livrare. Adio presupuneri. Cresteti precizia livrarii cu 85%",
            },
            {
              img: "images/vindeti-mai-mult.png",
              img2: "images/vindeti-mai-mult@2x.png",
              img3: "images/vindeti-mai-mult@3x.png",
              subtitle: "Vindeti mai mult",
              description: `Deblocati un nou tip de marketing trimitand oferte direct in aplicatia HORECA ORDERS a clientilor. 20-30% din
              produsele promovate clientilor prin HORECA ORDERS sunt achizitionate`,
            },
          ],
        }}
      />
      <div className="flex flex-col items-center justify-center bg-bluePrimary mt-5 lg:py-20 py-14 px-5">
        <div className="flex justify-center w-full lg:max-w-4xl">
          <button onClick={prev}>
            <img className="w-8" src="SVGs/left-arrow.svg" alt="Arrow left" />
          </button>
          <Whirligig
            visibleSlides={1}
            gutter="1em"
            ref={(_whirligigInstance) => {
              whirligig = _whirligigInstance;
            }}
            infinte
            snapToSlide
            slideClass={"flex justify-center"}
            className={"scrollbar-hide w-full"}
          >
            {slider.map((sliderItem) => {
              return (
                <div className="flex lg:flex-row flex-col items-center">
                  <div className="flex flex-col lg:pr-4">
                    <p className="font-openSans text-white lg:text-start text-center font-bold lg:text-3xl text-2xl lg:max-w-md">
                      {sliderItem.paragraphDescription}
                    </p>
                    <p className="font-openSans font-semibold text-base lg:text-start text-center text-white lg:mt-0 mt-6">
                      {sliderItem.personDescription}
                    </p>
                  </div>
                  <picture>
                    <source
                      media="(max-width: 799px)"
                      srcset={sliderItem.img3}
                    />
                    <source
                      media="(min-width: 800px)"
                      srcset={sliderItem.img2}
                    />
                    <img
                      className="object-cover h-85 lg:mt-0 mt-8"
                      src={sliderItem.img}
                      alt=""
                    />
                  </picture>
                </div>
              );
            })}
          </Whirligig>
          <button onClick={next}>
            <img className="w-8" src="SVGs/right-arrow.svg" alt="Arrow right" />
          </button>
        </div>
        <Button styles="lg:mt-16 mt-8" text="Inregistrare" />
      </div>
      <div className="flex flex-col w-full items-center lg:mt-13">
        <p className="uppercase font-openSans font-extrabold text-4xl text-center text-bluePrimary px-10 lg:px-0 lg:my-0 my-13">
          COMENZI PLASATE MULT MAI BINE
        </p>
        <InformationsCard data={information} />
      </div>
      <div className="flex justify-center lg:mt-22">
        <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
          <picture>
            <source
              media="(max-width: 799px)"
              srcset="images/functioneaza-in-scurt-timp@3x.png"
            />
            <source
              media="(min-width: 800px)"
              srcset="images/functioneaza-in-scurt-timp@2x.png"
            />
            <img
              className="object-cover max-h-180 2xl:max-h-full lg:p-0 p-10 h-full"
              src="images/functioneaza-in-scurt-timp.png"
              alt=""
            />
          </picture>
          <div className="flex flex-col items-center justify-center px-10 lg:px-0">
            <p className="font-openSans font-extrabold lg:text-7xl text-4xl text-black italic text-center">
              FUNCTIONEAZA <br /> IN CEL MAI <br /> SCURT TIMP
            </p>
            <Button
              styles="mt-10 lg:mb-0 mb-10 text-center"
              text="Rezerva o sesiune demonstrativa"
            />
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: "url(/images/pregatit.png)" }}
        className="bg-opacity-25 flex flex-col justify-center items-center w-full lg:py-28 py-16 lg:px-0 px-10"
      >
        <p className="font-openSans font-extrabold italic lg:text-7xl text-4xl text-white text-center">
          ESTI PREGATIT PENTRU <br />
          MAI PUTIN STRES <br />
          SI MAI PUTINE BATAI DE CAP?
        </p>
        <Button
          styles="mt-12 lg:mb-0 text-center"
          text="Rezerva o sesiune demonstrativa"
        />
      </div>
    </div>
  );
}

export default Suppliers;
