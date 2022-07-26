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
    componentStyles: "bg-yellowSection justify-items-center items-end",
    textColor: "text-black",
    pictureStyles: "object-scale-down h-85 w-64",
  },
  {
    subTitle: "Pentru furnizori",
    description:
      "Indiferent dacă aveti o afacere de familie sau sunteti un distribuitor național, platforma noastră personalizată va schimba modul în care faceți afaceri.",
    buttonLink: "/furnizori",
    img: "images/comenzi.png",
    img2: "images/comenzi@2x.png",
    img3: "images/comenzi@3x.png",
    componentStyles: "bg-bluePrimary justify-items-end items-center ",
    textColor: "text-white",
    pictureStyles: "object-scale-down lg:w-85 w-80 h-72",
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
      <FirstSection colors={{ background: "bg-greyBg", text: "text-black" }} />
      <SecondSection information={secondSection} />
    </>
  );
}

export default Home;
