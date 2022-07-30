import FirstSection from "Components/FirstSection";
import Header from "Components/Header/Header";
import SecondSection from "Components/SecondSection";
const secondSection = [
  {
    subTitle: "Pentru restaurante",
    description:
      "Scapa de formularele de comandă și de asteptatul nesfarsit la telefon noaptea târziu. Aplicația noastră este cel mai eficient mod de a comanda de la toți furnizorii. Plasezi comenzile mai rapid, ajungi acasa mai devreme.",
    buttonLink: "/restaurante",
    img: "images/i-phone-x.png",
    img2: "images/i-phone-x@2x.png",
    img3: "images/i-phone-x@3x.png",
    componentStyles: "bg-yellowSection justify-items-center items-end lg:h-98",
    textColor: "text-black",
    pictureStyles: "object-scale-down h-86 w-64",
  },
  {
    subTitle: "Pentru furnizori",
    description:
      "Indiferent dacă aveti o afacere de familie sau sunteti un distribuitor național, platforma noastră personalizată va schimba modul în care faceți afaceri.",
    buttonLink: "/furnizori",
    img: "images/comenzi.png",
    img2: "images/comenzi@2x.png",
    img3: "images/comenzi@3x.png",
    componentStyles: "bg-bluePrimary justify-items-end items-center lg:h-98",
    textColor: "text-white",
    pictureStyles: "object-scale-down lg:w-86 w-80 h-72",
  },
];
function Home() {
  return (
    <>
      <Header
        headingText={`PLATFORMA DE COMENZI 
        PENTRU INDUSTRIA OSPITALITATII`}
        headerButtonLeft={{
          text: "Pentru Restaurante",
          link: "/restaurante",
        }}
        headerButtonRight={{
          text: "Pentru Furnizori",
          link: "/furnizori",
        }}
      />
      <FirstSection
        colors={{ background: "bg-greyBg", text: "text-black" }}
        subHeader={{
          textTitle: "ALEGE SA MUNCESTI MAI EFICIENT",
          paragraph: `HORECA ORDERS face plasarea și primirea comenzilor mai eficientă. 
            Aplicația noastră intuitivă și instrumentele web simplifică operațiunile pentru bucătari, proprietari și reprezentanții de vânzări.`,
          secondParagraph: `Salveaza timp. Salveaza bani. Salveaza mancare.`,
          imgSet: {
            img: "images/manCooking.png",
            img2x: "images/manCooking@2x.png",
            img3x: "images/manCooking@3x.png",
          },
          info: [
            {
              img: "images/Gata-cu-hartia.png",
              img2: "images/Gata-cu-hartia@2x.png",
              img3: "images/Gata-cu-hartia@3x.png",
              subtitle: "Gata cu hartia",
              description:
                "Totul este in aplicatie, gata cu teancurile de hartie.",
            },
            {
              img: "images/castiga-timp.png",
              img2: "images/castiga-timp@2x.png",
              img3: "images/castiga-timp@3x.png",
              subtitle: "Castiga timp",
              description:
                "Comenzile pe mobil sunt mai rapide. Utilizatorii noștri castiga peste 4 ore pe săptămână.",
            },
            {
              img: "images/salveaza-mai-mult.png",
              img2: "images/salveaza-mai-mult@2x.png",
              img3: "images/salveaza-mai-mult@3x.png",
              subtitle: "Risipeste mai putin, salveaza mai mult",
              description:
                "Comenzi mai precise înseamnă mai puține greșeli, mai puțina risipa și costuri mai mici.",
            },
          ],
        }}
      />
      <SecondSection information={secondSection} />
    </>
  );
}

export default Home;
