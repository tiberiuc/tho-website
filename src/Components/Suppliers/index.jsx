import Button from "Atoms/Button";
import SliderWhirligig from "Atoms/Button/SliderWhirligig";
import FirstSection from "Components/FirstSection";
import Header from "Components/Header/Header";
import InformationsCard from "Components/InformationsCard";

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
      pictureStyles: "object-scale-down lg:w-86 w-85 h-72 mb-10 lg:mb-0",
    },
    {
      subTitle: "Setează zile de livrare și ora limită pentru ultima comandă",
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
      subTitle: "Promovează-ți catalogul",
      description:
        "Menținerea catalogului actualizat este una, dar să-ți informezi clienții despre el este alta. Gestionarea catalogului dvs. online cu Horeca Orders înseamnă că informațiile despre produse (unități, ID-uri de produse, disponibilitate) sunt întotdeauna actualizate și vizibile pentru clienți.",
      img: "images/ho-catalog.png",
      img2: "images/ho-catalog@2x.png",
      img3: "images/ho-catalog@3x.png",
      componentStyles: "bg-greyBg justify-items-end items-center lg:h-98",
      textColor: "text-black",
      pictureStyles: "object-scale-down lg:w-86 w-85 h-72 mb-10 lg:mb-0",
    },
    {
      subTitle: "Crește-ți vanzarile prin mesaje trimise simultan",
      description:
        "Promovați oferte speciale și produsele sezoniere prin mesaje mai multor clienți simultan. Clienții primesc mesajul în aplicația lor Horeca Orders și pot comanda in doar trei pași simplii.",
      img: "images/ho-oferte.png",
      img2: "images/ho-oferte@2x.png",
      img3: "images/ho-oferte@3x.png",
      componentStyles:
        "bg-yellowSection justify-items-end items-center lg:h-98",
      textColor: "text-black",
      pictureStyles: "object-scale-down lg:w-86 w-85 h-72 mb-10 lg:mb-0",
    },
    {
      subTitle:
        "Furnizați clienților cea mai buna experiență de plasat comenzi",
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
      paragraphDescription: `  
      Horeca Orders îmi permite să adun toate comenzile sub o singură umbrelă, astfel încât conversația să fie mult mai bine organizată.
Îi pot oferi clientului propriul catalog, astfel încât în loc să trebuiască să îi spun că trebuie să comande o anumita cantitate, o vede direct si este la un click distanță, ei știu numele produselor, este foarte clar pentru ei.
Ceea ce mă surprinde plăcut la Horeca Orders este cât de bine imi poate organiza afacerea!  
      `,
      personDescription1: `Tolga Cingiz - Batiatus Express, Furnizor HoReCa`,
      hyperLink: "",
      linkOfWebsite: "",
      personDescription2: ", Bucuresti",
      img: "images/tolga.png",
      img2: "images/tolga.png",
      img3: "images/tolga.png",
    },
  ];

  return (
    <div>
      <Header
        bgHeader={"bg-white"}
        headingText={`GESTIONEAZĂ COMENZILE
        MAI UȘOR`}
        headerButtonLeft={{
          text: "Înregistrare",
          externalLink: "https://app.horecaorders.com/users/register",
        }}
        headerButtonRight={{
          text: "Autentificare",
          externalLink: "https://app.horecaorders.com/users/log_in",
        }}
        logoYellow
        supplier
      />
      <FirstSection
        colors={{ background: "bg-greyBg", text: "text-black" }}
        subHeader={{
          textTitle: "COMUNICARE MAI PRECISĂ CU PARTENERII",
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
              description: `HORECA ORDERS se integrează cu ERP-ul pentru a renunța la introducerea manuala a comenzilor pentru totdeauna. Economisiți timp. Reduceți costuri.`,
            },
            {
              img: "images/fara-comenzi-gresite.png",
              img2: "images/fara-comenzi-gresite@2x.png",
              img3: "images/fara-comenzi-gresite@3x.png",
              subtitle: "Fără comenzi greșite",
              description:
                "Obțineți comenzile de la clienți cu coduri de produs si date de livrare. Adio presupuneri. Creșteți precizia livrării cu 85%",
            },
            {
              img: "images/vindeti-mai-mult.png",
              img2: "images/vindeti-mai-mult@2x.png",
              img3: "images/vindeti-mai-mult@3x.png",
              subtitle: "Vindeți mai mult",
              description: `Deblocați un nou tip de marketing trimițând oferte direct în aplicația HORECA ORDERS a clienților. 20-30% din
              produsele promovate clienților prin HORECA ORDERS sunt achiziționate`,
            },
          ],
        }}
      />
      <SliderWhirligig sliderInfo={slider} />
      <div className="flex flex-col w-full items-center lg:mt-13">
        <p className="uppercase font-openSans font-extrabold text-4xl text-center text-bluePrimary px-10 lg:px-0 lg:mt-0 mt-14">
          COMENZI PLASATE MULT MAI BINE
        </p>
        <InformationsCard data={information} />
      </div>
      <div className="flex justify-center lg:mt-22">
        <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
          <picture>
            <source
              media="(max-width: 799px)"
              srcSet="images/functioneaza-in-scurt-timp@3x.png"
            />
            <source
              media="(min-width: 800px)"
              srcSet="images/functioneaza-in-scurt-timp@2x.png"
            />
            <img
              className="object-fit max-h-180 2xl:max-h-full lg:p-0 p-10"
              src="images/functioneaza-in-scurt-timp.png"
              alt=""
            />
          </picture>
          <div className="flex flex-col items-center justify-center px-10 lg:px-0">
            <p className="font-openSans font-extrabold lg:text-7xl text-4xl text-black italic text-center">
              FUNCȚIONEAZĂ <br /> ÎN CEL MAI <br /> SCURT TIMP
            </p>
            <Button
              styles="mt-10 lg:mb-0 mb-10 text-center px-10 py-3"
              text="Înregistrare"
              link="https://app.horecaorders.com/users/register"
            />
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: "url(/images/pregatit.png)" }}
        className="bg-opacity-25 flex flex-col justify-center items-center w-full lg:py-28 py-16 lg:px-0 px-10"
      >
        <p className="font-openSans font-extrabold italic lg:text-7xl text-4xl text-white text-center">
          EȘTI PREGĂTIT PENTRU <br />
          MAI PUȚIN STRES <br />
          ȘI MAI PUȚINE BĂTĂI DE CAP?
        </p>
        <Button
          styles="mt-12 lg:mb-0 text-center px-10 py-3"
          text="Înregistrare"
          link="https://app.horecaorders.com/users/register"
        />
      </div>
    </div>
  );
}

export default Suppliers;
