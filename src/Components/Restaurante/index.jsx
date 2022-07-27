import Button from "Atoms/Button";
import FirstSection from "Components/FirstSection";
import Header from "Components/Header/Header";

function Restaurante() {
  const cardSection = [
    {
      number: "1",
      subTitle: "Alegi produsele",
      img: "images/i-phone-x-mockup.png",
      img2: "images/i-phone-x-mockup@2x.png",
      img3: "images/i-phone-x-mockup@3x.png",
    },
    {
      number: "2",
      subTitle: "Adaugi detaliile comenzii",
      details: "Data livrarii / Alte detalii",
      img: "images/i-phone-x-mockup.png",
      img2: "images/i-phone-x-mockup@2x.png",
      img3: "images/i-phone-x-mockup@3x.png",
    },
    {
      number: "3",
      subTitle: "Comanda trimisa",
      details: "Whatsapp, SMS, e-mail, ERP",
      img: "images/i-phone-x-mockup.png",
      img2: "images/i-phone-x-mockup@2x.png",
      img3: "images/i-phone-x-mockup@3x.png",
    },
    {
      number: "4",
      subTitle: "Te notificam cand se confirma comanda",
      img: "images/i-phone-x-mockup.png",
      img2: "images/i-phone-x-mockup@2x.png",
      img3: "images/i-phone-x-mockup@3x.png",
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
        <div className="flex flex-col w-full items-center mt-20 pt-20 bg-bluePrimary">
          <p className="font-openSans font-extrabold text-5xl text-white">
            CUM FUNCTIONEAZA
          </p>
          <div className="grid grid-cols-4 gap-8 mt-13 max-w-3.5xl">
            {cardSection.map((card) => {
              return (
                <div className="flex flex-col items-center">
                  <p className="px-5 py-2 bg-yellowButton rounded-full font-bold text-2xl">
                    {card.number}
                  </p>
                  <div className="flex flex-col items-center justify-between text-center h-24">
                    <p className="font-openSans font-bold text-2xl text-white text-center">
                      {card.subTitle}
                    </p>
                    {card.details && (
                      <p className="text-sm font-openSans opacity-50 text-white">
                        {card.details}
                      </p>
                    )}
                  </div>
                  <picture>
                    <source media="(max-width: 799px)" srcset={card.img3} />
                    <source media="(min-width: 800px)" srcset={card.img2} />
                    <img
                      className={`${card.pictureStyles}`}
                      src={card.img}
                      alt=""
                    />
                  </picture>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurante;
