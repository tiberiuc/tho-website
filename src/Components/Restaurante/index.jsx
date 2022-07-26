import FirstSection from "Components/FirstSection";
import Header from "Components/Header/Header";

function Restaurante() {
  return (
    <div className="">
      <Header
        bgHeader={"bg-greyBg"}
        restaurant={true}
        headingText={`PLASEAZA COMENZILE 
        CATRE TOTI FURNIZORII TAI`}
        headerButtonLeft={{
          text: "Inregistrare",
          link: "/",
        }}
        headerButtonRight={{
          text: "Autentificare",
          link: "/",
        }}
      />
      <FirstSection
        colors={{ background: "bg-bluePrimary", text: "text-white" }}
      />
    </div>
  );
}

export default Restaurante;
