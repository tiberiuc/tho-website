import Button from "Atoms/Button";
import FirstSection from "Components/FirstSection";
import Header from "Components/Header/Header";
import InformationsCard from "Components/InformationsCard";
import Whirligig from "react-whirligig";

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
      componentStyles: "bg-greyBg justify-items-center items-end lg:h-113",
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
      componentStyles: "bg-greyBg justify-items-center items-end lg:h-113",
      textColor: "text-black",
      pictureStyles: "object-scale-down h-104 w-72",
    },
  ];

  const slider = [
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
          marginOfSection: "mb-0",
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
        <Button
          styles="lg:flex hidden"
          text="Rezerva o sesiune demonstrativa"
          link="/"
        />
        <div className="flex flex-col w-full items-center mt-20 pt-20 lg:pb-0 pb-20 px-10 lg:px-0 bg-bluePrimary relative">
          <p className="font-openSans font-extrabold lg:text-5xl text-4xl text-white text-center ">
            CUM FUNCTIONEAZA
          </p>
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-8 lg:mt-13 mt-5 max-w-5xl">
            {cardSection.map((card) => {
              return (
                <div className="flex flex-col items-center relative lg:px-0 sm:px-24 px-6">
                  <p className="h-12 w-12 bg-yellowButton rounded-full font-bold text-2xl flex justify-center items-center mt-8 lg:mt-0">
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
          <div className="absolute bottom-0 left-0 h-7 w-full flex bg-white lg:flex hidden" />
        </div>
      </div>
      <div className="flex flex-col w-full items-center mt-13">
        <p className="uppercase font-openSans font-extrabold text-4xl text-center text-bluePrimary px-10 lg:px-0">
          Plasezi comenzile mult mai bine
        </p>
        <InformationsCard data={information} />
      </div>
      <div className="flex flex-col items-center justify-center bg-bluePrimary mt-5 lg:py-20 py-14 px-5">
        <div className="flex justify-center max-w-4xl">
          <button onClick={prev}>
            <img className="w-8" src="SVGs/left-arrow.svg" alt="Arrow left" />
          </button>
          <Whirligig
            visibleSlides={1}
            gutter="1em"
            ref={(_whirligigInstance) => {
              whirligig = _whirligigInstance;
            }}
            infinte={true}
            snapToSlide
            slideClass={"flex justify-center"}
            className={"scrollbar-hide"}
          >
            {slider.map((sliderItem) => {
              return (
                <div className="flex lg:flex-row flex-col items-center">
                  <div className=" flex flex-col">
                    <p className="font-openSans text-white lg:text-start text-center font-bold lg:text-3xl text-2xl max-w-md">
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
      <div className="flex justify-center bg-greyBg lg:pt-8 pt-28">
        <div className="grid lg:grid-cols-2 grid-cols-1 max-w-4xl w-full">
          <div className="flex flex-col items-center justify-center px-10 lg:px-0">
            <p className="font-openSans font-extrabold text-5xl text-bluePrimary text-center">
              E GRATIS
            </p>
            <p className="font-openSans font-semibold text-base py-6 text-center text-bluePrimary">
              Platforma HORECA ORDERS este gratuită pentru restaurante și
              furnizori, având disponibile funcții opționale plătite. Vorbeste
              cu echipa noastra pentru a afla mai multe!
            </p>
            <Button text="Intrebari Frecvente" />
          </div>
          <div className="flex lg:justify-center justify-start w-full">
            <picture>
              <source
                media="(max-width: 799px)"
                srcset="images/i-phone-x-in-hand-mobile@3x.png"
              />
              <source
                media="(min-width: 800px)"
                srcset="images/i-phone-x-in-hand@2x.png"
              />
              <img
                className="object-cover max-h-104 lg:mt-0 mt-11"
                src="images/i-phone-x-in-hand.png"
                alt=""
              />
            </picture>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
          <div className="flex justify-center w-full">
            <picture>
              <source
                media="(max-width: 799px)"
                srcset="images/hands-photo@3x.png"
              />
              <source
                media="(min-width: 800px)"
                srcset="images/hands-photo@2x.png"
              />
              <img
                className="object-cover max-h-180 lg:p-0 p-10"
                src="images/hands-photo.png"
                alt=""
              />
            </picture>
          </div>
          <div className="flex flex-col items-center justify-center px-10 lg:px-0">
            <p className="font-openSans font-extrabold lg:text-7xl text-5xl text-black italic text-center">
              HAI SA <br /> EXPLORAM <br /> HORECA <br />
              ORDERS
            </p>
            <Button
              styles="mt-12 lg:mb-0 mb-10 text-center"
              text="Rezerva o sesiune demonstrativa"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurante;
