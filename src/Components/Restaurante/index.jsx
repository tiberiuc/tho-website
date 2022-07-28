import Button from "Atoms/Button";
import FirstSection from "Components/FirstSection";
import Header from "Components/Header/Header";
import InformationsCard from "Components/InformationsCard";

function Restaurante() {
  const cardSection = [
    {
      number: "1",
      subTitle: `Alegi 
      produsele`,
      img: "images/i-phone-x-mockup.png",
      img2: "images/i-phone-x-mockup@2x.png",
      img3: "images/i-phone-x-mockup@3x.png",
    },
    {
      number: "2",
      subTitle: "Adaugi detaliile comenzii",
      details: "Data livrarii / Alte detalii",
      img: "images/finalizeaza-datele-comenzii.png",
      img2: "images/finalizeaza-datele-comenzii@2x.png",
      img3: "images/finalizeaza-datele-comenzii@3x.png",
    },
    {
      number: "3",
      subTitle: `Comanda 
      trimisa`,
      details: "Whatsapp, SMS, e-mail, ERP",
      img: "images/comanda-trimisa-img.png",
      img2: "images/comanda-trimisa-img@2x.png",
      img3: "images/comanda-trimisa-img@3x.png",
    },
    {
      icon: "SVGs/notif-icon.svg",
      subTitle: "Te notificam cand se confirma comanda",
      img: "images/notificare-img.png",
      img2: "images/notificare-img@2x.png",
      img3: "images/notificare-img@3x.png",
    },
  ];
  const information = [
    {
      subTitle: "Comanda de la furnizori",
      description: `Plasați comenzi și discutați cu toți furnizorii dvs. într-o singură aplicație. Comenzile sunt convertite în formatul dorit de furnizor – 
        e-mail, WhatsApp, SMS, Fax sau integrare directă in ERP-ul furnizorului. Da, chiar funcționează cu toți furnizorii tăi.`,
      buttonLink: "/restaurante",
      img: "images/i-phone-x.png",
      img2: "images/i-phone-x@2x.png",
      img3: "images/i-phone-x@3x.png",
      componentStyles: "bg-greyBg justify-items-center items-end h-113",
      subComponentStyles: "my-22",
      textColor: "text-black",
      pictureStyles: "object-scale-down h-104 w-72",
    },
    {
      subTitle: "Organizezi cataloagele de comanda",
      description: `Vizualizați și editați online toate foile de comandă. Uitați de teancurile de hârtie fixate pe pereți. Produsele, codurile unice, unitățile de masura și produse/unitatea de masura pot fi adăugate in HORECA ORDERS și organizate pe categorii. Trimiteți comenzi perfecte furnizorului dvs. Obțineți livrări mai precise.`,
      buttonLink: "/furnizori",
      img: "images/iphone-x-mockup-information.png",
      img2: "images/iphone-x-mockup-information@2x.png",
      img3: "images/iphone-x-mockup-information@3x.png",
      componentStyles: "bg-greyBg justify-items-center items-end h-113",
      textColor: "text-black",
      pictureStyles: "object-scale-down h-104 w-72",
    },
  ];
  return (
    <div>
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
        subHeader={{
          textTitle: "CEA MAI BUNA USTENSILA DIN BUCATARIA TA",
          paragraph: `Foloseste gratuit HORECA ORDERS sa comunici si sa plasezi comenzile catre furnizorii tai in secunde. 
          Gata cu erorile de livrare, așteptările la telefon noaptea tarziu sau cu foile de comandă nesfârșite.`,
          imgSet: {
            img: "images/ustensila-bucatarie.png",
            img2x: "images/ustensila-bucatarie@2x.png",
            img3x: "images/ustensila-bucatarie@3x.png",
          },
          info: [
            {
              img: "images/adio-greseli.png",
              img2: "images/adio-greseli@2x.png",
              img3: "images/adio-greseli@3x.png",
              subtitle: "Spune adio greselior",
              description: `Comanda ca un profesionist – Comenzile au mereu codul unic al produselor, unitatea de masura, data de livrare si confirmarea livrarii. 
                Reduceti greselile cu 85%.`,
            },
            {
              img: "images/castiga-timp.png",
              img2: "images/castiga-timp@2x.png",
              img3: "images/castiga-timp@3x.png",
              subtitle: "Castiga timp",
              description:
                "Plasati rapid toate comenzile furnizorilor dvs. dintr-o singură aplicație. Plasați comenzi în doar trei atingeri. Castigati peste 4 ore pe săptămână.",
            },
            {
              img: "images/suport-rapid.png",
              img2: "images/suport-rapid@2x.png",
              img3: "images/suport-rapid@3x.png",
              subtitle: "Suport rapid",
              description: `Discutati cu echipa
                HORECA ORDERS în aplicație. Aveti asistență rapida. 
               În plus, vă vom configura în mai puțin de 24 de ore.`,
            },
          ],
        }}
      />
      <div className="flex flex-col items-center w-full">
        <Button text="Rezerva o sesiune demonstrativa" link="/" />
        <div className="flex flex-col w-full items-center mt-20 pt-20 bg-bluePrimary relative">
          <p className="font-openSans font-extrabold text-5xl text-white">
            CUM FUNCTIONEAZA
          </p>
          <div className="grid grid-cols-4 gap-8 mt-13 max-w-5xl">
            {cardSection.map((card) => {
              return (
                <div className="flex flex-col items-center relative">
                  <p className="h-12 w-12 bg-yellowButton rounded-full font-bold text-2xl flex justify-center items-center">
                    {card?.number ? (
                      card?.number
                    ) : (
                      <img className="w-4 h-6" src={card?.icon} alt="" />
                    )}
                  </p>
                  <div className="flex flex-col items-center justify-start text-center h-24 mt-3">
                    <p className="font-openSans font-bold text-2xl text-white text-center whitespace-pre-line">
                      {card.subTitle}
                    </p>
                    {card.details && (
                      <p className="text-sm font-semibold font-openSans opacity-50 text-white mt-2">
                        {card.details}
                      </p>
                    )}
                  </div>
                  <picture>
                    <source media="(max-width: 799px)" srcset={card.img3} />
                    <source media="(min-width: 800px)" srcset={card.img2} />
                    <img src={card.img} alt="" />
                  </picture>
                </div>
              );
            })}
          </div>
          <div className="absolute bottom-0 left-0 h-7 w-full flex bg-white" />
        </div>
      </div>
      <div className="flex flex-col w-full items-center mt-13">
        <p className="uppercase font-openSans font-extrabold text-4xl text-bluePrimary">
          Plasezi comenzile mult mai bine
        </p>
        <InformationsCard data={information} />
      </div>
    </div>
  );
}

export default Restaurante;
