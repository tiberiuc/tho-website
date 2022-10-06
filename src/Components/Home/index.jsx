import FirstSection from "Components/FirstSection";
import Header from "Components/Header/Header";
import SecondSection from "Components/SecondSection";
const secondSection = [
  {
    subTitle: "Pentru restaurante",
    description:
      "Scapă de formularele de comandă și de așteptatul nesfârșit la telefon noaptea târziu. Aplicația noastră este cel mai eficient mod de a comanda de la toți furnizorii. Plasezi comenzile mai rapid, ajungi acasă mai devreme.",
    buttonLink: "/restaurante",
    img: "images/i-phone-x.png",
    img2: "images/i-phone-x@2x.png",
    img3: "images/i-phone-x@3x.png",
    componentStyles: "bg-yellowSection justify-items-center items-end lg:h-98",
    textColor: "text-black",
    pictureStyles: "object-scale-down lg:h-86 h-80 w-64",
    subComponentStyles: "lg:my-14 my-10",
  },
  {
    subTitle: "Pentru furnizori",
    description:
      "Indiferent dacă aveți o afacere de familie sau sunteți un distribuitor național, platforma noastră personalizată va schimba modul în care faceți afaceri.",
    buttonLink: "/furnizori",
    img: "images/comenzi.png",
    img2: "images/comenzi@2x.png",
    img3: "images/comenzi@3x.png",
    componentStyles: "bg-bluePrimary justify-items-end items-center lg:h-98",
    textColor: "text-white",
    pictureStyles: "object-scale-down lg:w-86 w-85 h-72 mb-10 lg:mb-0",
  },
];
function Home() {
  return (
    <>
      <Header
        headingText={`PLATFORMA DE COMENZI 
        PENTRU INDUSTRIA OSPITALITĂȚII`}
        headerButtonLeft={{
          text: "Pentru Restaurante",
          link: "/restaurante",
        }}
        headerButtonRight={{
          text: "Pentru Furnizori",
          link: "/furnizori",
        }}
        home={"text-4.5xl"}
      />
      <FirstSection
        colors={{ background: "bg-greyBg", text: "text-black" }}
        subHeader={{
          textTitle: "ALEGE SĂ MUNCEȘTI MAI EFICIENT",
          paragraph: `HORECA ORDERS face plasarea și primirea comenzilor mai eficientă. 
            Aplicația noastră intuitivă și instrumentele web simplifică operațiunile pentru bucătari, proprietari și reprezentanții de vânzări.`,
          secondParagraph: `Salvează timp. 
          Salvează bani. 
          Salvează mâncare.`,
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
              subtitle: "Gata cu hârtia",
              description:
                "Totul este in aplicație, gata cu teancurile de hârtie.",
            },
            {
              img: "images/castiga-timp.png",
              img2: "images/castiga-timp@2x.png",
              img3: "images/castiga-timp@3x.png",
              subtitle: "Câstigă timp",
              description:
                "Comenzile pe mobil sunt mai rapide. Utilizatorii noștri câstigă peste 4 ore pe săptămână.",
            },
            {
              img: "images/salveaza-mai-mult.png",
              img2: "images/salveaza-mai-mult@2x.png",
              img3: "images/salveaza-mai-mult@3x.png",
              subtitle: "Risipește mai puțin, salvează mai mult",
              description:
                "Comenzi mai precise înseamnă mai puține greșeli, mai puțină risipă și costuri mai mici.",
            },
          ],
        }}
      />
      <SecondSection information={secondSection} />
    </>
  );
}

export default Home;
