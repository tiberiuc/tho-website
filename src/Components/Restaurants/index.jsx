import Button from "Atoms/Button";
import SliderWhirligig from "Atoms/Button/SliderWhirligig";
import FirstSection from "Components/FirstSection";
import Header from "Components/Header/Header";
import InformationsCard from "Components/InformationsCard";
import { useTranslation } from "react-i18next";

function Restaurants() {
  const { t } = useTranslation("translation");
  const cardSection = [
    {
      number: "1",
      subTitle: t("restaurants-page.card-section.sub-title1"),
      img: t("restaurants-page.card-section.img-iphone1"),
      img2: t("restaurants-page.card-section.img-iphone2"),
      img3: t("restaurants-page.card-section.img-iphone3"),
    },
    {
      number: "2",
      subTitle: t("restaurants-page.card-section.sub-title2"),
      details: t("restaurants-page.card-section.details2"),
      img: t("restaurants-page.card-section.img-order1"),
      img2: t("restaurants-page.card-section.img-order2"),
      img3: t("restaurants-page.card-section.img-order3"),
    },
    {
      number: "3",
      subTitle: t("restaurants-page.card-section.sub-title3"),
      details: t("restaurants-page.card-section.details3"),
      img: t("restaurants-page.card-section.img-sent1"),
      img2: t("restaurants-page.card-section.img-sent2"),
      img3: t("restaurants-page.card-section.img-sent3"),
    },
    {
      icon: "SVGs/notif-icon.svg",
      subTitle: t("restaurants-page.card-section.sub-title4"),
      img: t("restaurants-page.card-section.img-order-confirmed1"),
      img2: t("restaurants-page.card-section.img-order-confirmed2"),
      img3: t("restaurants-page.card-section.img-order-confirmed3"),
    },
  ];
  const information = [
    {
      subTitle: t("restaurants-page.place-orders.sub-title1"),
      description: t("restaurants-page.place-orders.description1"),
      img: t("restaurants-page.place-orders.img-iphone1"),
      img2: t("restaurants-page.place-orders.img-iphone2"),
      img3: t("restaurants-page.place-orders.img-iphone3"),
      componentStyles: "bg-greyBg justify-items-center items-end lg:h-113",
      subComponentStyles: "lg:my-28 my-10",
      textColor: "text-black",
      pictureStyles: "object-scale-down h-104 w-72",
    },
    {
      subTitle: t("restaurants-page.place-orders.sub-title2"),
      description: t("restaurants-page.place-orders.description2"),
      img: t("restaurants-page.place-orders.img-iphone1"),
      img2: t("restaurants-page.place-orders.img-iphone2"),
      img3: t("restaurants-page.place-orders.img-iphone3"),
      componentStyles: "bg-greyBg justify-items-center items-end lg:h-113",
      subComponentStyles: "lg:my-22 my-10",
      textColor: "text-black",
      pictureStyles: "object-scale-down h-104 w-72",
    },
  ];

  const slider = [
    {
      paragraphDescription: t("restaurants-page.slider.paragraphDescription1"),
      personDescription1: `
      Gabi Herdean - 
      `,
      hyperLink: "Papila",
      linkOfWebsite: "https://papilakitchen.ro/",
      personDescription2: t("restaurants-page.slider.city"),
      img: "images/gabi-papila.png",
      img2: "images/gabi-papila.png",
      img3: "images/gabi-papila.png",
    },
    {
      paragraphDescription: t("restaurants-page.slider.paragraphDescription2"),
      personDescription1: `
      Nadia Mihai (Manager) - 
      `,
      hyperLink: "Sushi Master",
      linkOfWebsite: "https://sushimaster.ro/",
      personDescription2: t("restaurants-page.slider.city"),
      img: "images/Nadia-Sushi-Master.png",
      img2: "images/Nadia-Sushi-Master.png",
      img3: "images/Nadia-Sushi-Master.png",
    },
    {
      paragraphDescription: t("restaurants-page.slider.paragraphDescription3"),
      personDescription1: `
      Andrei Iulian Dumitru - 
      `,
      hyperLink: "FoodKit",
      linkOfWebsite: "https://foodkit.ro/",
      personDescription2: t("restaurants-page.slider.city"),
      img: "images/barman-image.png",
      img2: "images/barman-image@2x.png",
      img3: "images/barman-image@3x.png",
    },
  ];

  return (
    <div>
      <Header
        bgHeader={"bg-greyBg"}
        restaurant={true}
        headingText={t("restaurants-page.title")}
        headerButtonLeft={{
          text: t("register"),
          externalLink: "https://app.horecaorders.com/user/register",
        }}
        headerButtonRight={{
          text: t("login"),
          externalLink: "https://app.horecaorders.com/login",
        }}
        logoYellow
      />
      <FirstSection
        colors={{ background: "bg-bluePrimary", text: "text-white" }}
        subHeader={{
          textTitle: t("restaurants-page.first-section.text-title"),
          paragraph: t("restaurants-page.first-section.paragraph"),
          imgSet: {
            img: "images/ustensila-bucatarie.png",
            img2x: "images/ustensila-bucatarie@2x.png",
            img3x: "images/ustensila-bucatarie@3x.png",
          },
          marginOfSection: "mb-14 lg:mb-8",
          info: [
            {
              img: "images/adio-greseli.png",
              img2: "images/adio-greseli@2x.png",
              img3: "images/adio-greseli@3x.png",
              subtitle: t("restaurants-page.first-section.info-subtitle1"),
              description: t(
                "restaurants-page.first-section.info-description1"
              ),
            },
            {
              img: "images/castiga-timp.png",
              img2: "images/castiga-timp@2x.png",
              img3: "images/castiga-timp@3x.png",
              subtitle: t("restaurants-page.first-section.info-subtitle2"),
              description: t(
                "restaurants-page.first-section.info-description2"
              ),
            },
            {
              img: "images/suport-rapid.png",
              img2: "images/suport-rapid@2x.png",
              img3: "images/suport-rapid@3x.png",
              subtitle: t("restaurants-page.first-section.info-subtitle3"),
              description: t(
                "restaurants-page.first-section.info-description3"
              ),
            },
          ],
        }}
      />
      <div className="flex flex-col items-center w-full">
        <Button
          styles="lg:flex hidden px-10 py-3"
          text={t("register")}
          link="https://app.horecaorders.com/user/register"
        />
        <div className="flex flex-col w-full items-center lg:mt-14 pt-14 lg:pb-0 mt-0 pb-14 px-10 lg:px-0 bg-bluePrimary relative">
          <p className="font-openSans font-extrabold lg:text-5xl text-4xl text-white text-center">
            {t("restaurants-page.how-it-works")}
          </p>
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-8 lg:mt-13 mt-5 max-w-5xl">
            {cardSection.map((card, key) => {
              return (
                <div
                  key={key}
                  className="flex flex-col items-center relative lg:px-0 sm:px-24 px-6"
                >
                  <p className="h-12 w-12 bg-yellowButton rounded-full font-bold text-2xl flex justify-center items-center mt-4 lg:mt-0">
                    {card?.number ? (
                      card?.number
                    ) : (
                      <img className="w-4 h-6" src={card?.icon} alt="" />
                    )}
                  </p>
                  <div className="flex flex-col items-center justify-start text-center h-20 mt-3">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: card.subTitle,
                      }}
                      className="font-openSans font-bold leading-7	text-2xl text-white text-center whitespace-pre-line"
                    ></p>
                    {card.details && (
                      <p className="text-sm font-semibold font-openSans opacity-50 text-white mt-2">
                        {card.details}
                      </p>
                    )}
                  </div>
                  <picture>
                    <source media="(max-width: 799px)" srcSet={card.img3} />
                    <source media="(min-width: 800px)" srcSet={card.img2} />
                    <img
                      className="mt-2 lg:h-auto h-120"
                      src={card.img}
                      alt=""
                    />
                  </picture>
                </div>
              );
            })}
          </div>
          <div className="absolute bottom-0 left-0 h-7 w-full flex bg-white lg:flex hidden" />
        </div>
      </div>
      <div className="flex flex-col w-full items-center mt-14">
        <p className="uppercase font-openSans font-extrabold lg:text-4xl text-5xl leading-10 text-center text-bluePrimary px-10 lg:px-0">
          {t("restaurants-page.order-placed")}
        </p>
        <InformationsCard data={information} />
      </div>
      <SliderWhirligig sliderInfo={slider} />
      <div className="flex justify-center bg-greyBg lg:pt-8 pt-14">
        <div className="grid lg:grid-cols-2 grid-cols-1 max-w-4xl w-full">
          <div className="flex flex-col items-center justify-center px-10 lg:px-0">
            <p className="font-openSans font-extrabold text-5xl text-bluePrimary text-center">
              {t("restaurants-page.its-free")}
            </p>
            <p className="font-openSans font-semibold text-base py-6 text-center text-bluePrimary">
              {t("restaurants-page.free-platform-for")}
            </p>
            <Button
              styles="px-10 py-3"
              link="/intrebari-frecvente"
              text="Întrebări Frecvente"
            />
          </div>
          <div className="flex lg:justify-center justify-start w-full">
            <picture>
              <source
                media="(max-width: 799px)"
                srcSet={t("restaurants-page.iphone-image3")}
              />
              <source
                media="(min-width: 800px)"
                srcSet={t("restaurants-page.iphone-image2")}
              />
              <img
                className="object-cover lg:max-h-104 max-h-112 lg:mt-0 mt-11"
                src={t("restaurants-page.iphone-image1")}
                alt=""
              />
            </picture>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
        <picture>
          <source
            media="(max-width: 799px)"
            srcSet="images/hands-photo@3x.png"
          />
          <source
            media="(min-width: 800px)"
            srcSet="images/hands-photo@2x.png"
          />
          <img
            className="object-fit max-h-180 2xl:max-h-full lg:p-0 p-10"
            src="images/hands-photo.png"
            alt=""
          />
        </picture>
        <div className="flex flex-col items-center justify-center px-10 lg:px-0">
          <p
            dangerouslySetInnerHTML={{
              __html: t("restaurants-page.lets-explore"),
            }}
            className="font-openSans font-extrabold lg:text-7xl text-5xl leading-10 text-black italic text-center"
          ></p>
          <Button
            styles="mt-12 lg:mb-0 mb-10 text-center px-10 py-3"
            text={t("register")}
            link="https://app.horecaorders.com/user/register"
          />
        </div>
      </div>
    </div>
  );
}

export default Restaurants;
