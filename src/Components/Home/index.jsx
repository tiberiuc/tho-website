import FirstSection from "Components/FirstSection";
import SecondSection from "Components/SecondSection";
const secondSection = [
  {
    subTitle: "Pentru restaurante",
    description:
      "Scapa de formularele de comandă și de asteptatul nesfarsit la telefon noaptea târziu. Aplicația noastră gratuită este cel mai eficient mod de a comanda de la toți furnizorii. Plasezi comenzile mai rapid, ajungi acasa mai devreme.",
    buttonLink: "/",
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
      "Indiferent dacă aveti o fermă de familie sau un distribuitor național, platforma noastră personalizată va schimba modul în care faceți afaceri. Economisiți timp cu sarcinile manuale, reduceți comenzile gresite și vindeți mai multe produse.",
    buttonLink: "/",
    img: "images/comenzi.png",
    img2: "images/comenzi@2x.png",
    img3: "images/comenzi@3x.png",
    componentStyles: "bg-blueHeader justify-items-end items-center ",
    textColor: "text-white",
    pictureStyles: "object-scale-down lg:w-85 w-80 h-72",
  },
];
function Home() {
  return (
    <>
      <FirstSection />
      <SecondSection information={secondSection} />
    </>
  );
}

export default Home;
