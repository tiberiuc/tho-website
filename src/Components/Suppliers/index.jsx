import Button from "Atoms/Button";
import SliderWhirligig from "Atoms/Button/SliderWhirligig";
import FirstSection from "Components/FirstSection";
import Header from "Components/Header/Header";
import InformationsCard from "Components/InformationsCard";
import { useTranslation } from "react-i18next";

function Suppliers() {
  const { t } = useTranslation("translation");
  const information = [
    {
      subTitle: t("suppliers-page.info-cards.sub-title1"),
      description: t("suppliers-page.info-cards.description1"),
      img: t("suppliers-page.info-cards.img-orders1"),
      img2: t("suppliers-page.info-cards.img-orders2"),
      img3: t("suppliers-page.info-cards.img-orders3"),
      componentStyles: "bg-greyBg justify-items-end items-center lg:h-98",
      textColor: "text-black",
      pictureStyles: "object-scale-down lg:w-86 w-85 h-72 mb-10 lg:mb-0",
    },
    {
      subTitle: t("suppliers-page.info-cards.sub-title2"),
      description: t("suppliers-page.info-cards.description2"),
      img: t("suppliers-page.info-cards.img-iphone-elapse1"),
      img2: t("suppliers-page.info-cards.img-iphone-elapse2"),
      img3: t("suppliers-page.info-cards.img-iphone-elapse3"),
      componentStyles:
        "bg-yellowSection justify-items-center items-end lg:h-98",
      textColor: "text-black",
      pictureStyles: "object-scale-down h-86 w-64",
    },
    {
      subTitle: t("suppliers-page.info-cards.sub-title3"),
      description: t("suppliers-page.info-cards.description3"),
      img: t("suppliers-page.info-cards.img-catalog1"),
      img2: t("suppliers-page.info-cards.img-catalog2"),
      img3: t("suppliers-page.info-cards.img-catalog3"),
      componentStyles: "bg-greyBg justify-items-end items-center lg:h-98",
      textColor: "text-black",
      pictureStyles: "object-scale-down lg:w-86 w-85 h-72 mb-10 lg:mb-0",
    },
    {
      subTitle: t("suppliers-page.info-cards.sub-title4"),
      description: t("suppliers-page.info-cards.description4"),
      img: t("suppliers-page.info-cards.img-oferte1"),
      img2: t("suppliers-page.info-cards.img-oferte2"),
      img3: t("suppliers-page.info-cards.img-oferte3"),
      componentStyles:
        "bg-yellowSection justify-items-end items-center lg:h-98",
      textColor: "text-black",
      pictureStyles: "object-scale-down lg:w-86 w-85 h-72 mb-10 lg:mb-0",
    },
    {
      subTitle: t("suppliers-page.info-cards.sub-title5"),
      description: t("suppliers-page.info-cards.description5"),
      img: t("suppliers-page.info-cards.img-iphone1"),
      img2: t("suppliers-page.info-cards.img-iphone2"),
      img3: t("suppliers-page.info-cards.img-iphone3"),
      componentStyles: "bg-bluePrimary justify-items-center items-end lg:h-98",
      textColor: "text-white",
      pictureStyles: "object-scale-down h-86 w-64",
    },
  ];

  const slider = [
    {
      paragraphDescription: t("suppliers-page.slider.paragraphDescription1"),
      personDescription1: t("suppliers-page.slider.personDescription1"),
      hyperLink: "",
      linkOfWebsite: "",
      personDescription2: t("suppliers-page.slider.city"),
      img: "images/tolga.png",
      img2: "images/tolga.png",
      img3: "images/tolga.png",
    },
  ];

  return (
    <div>
      <Header
        bgHeader={"bg-white"}
        headingText={t("suppliers-page.title")}
        headerButtonLeft={{
          text: t("register"),
          externalLink: "https://app.horecaorders.com/user/register",
        }}
        headerButtonRight={{
          text: t("login"),
          externalLink: "https://app.horecaorders.com/users/log_in",
        }}
        logoYellow
        supplier
      />
      <FirstSection
        colors={{ background: "bg-greyBg", text: "text-black" }}
        subHeader={{
          textTitle: t("suppliers-page.first-section.text-title"),
          paragraph: t("suppliers-page.first-section.paragraph"),
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
              subtitle: t("suppliers-page.first-section.info-subtitle1"),
              description: t("suppliers-page.first-section.info-description1"),
            },
            {
              img: "images/fara-comenzi-gresite.png",
              img2: "images/fara-comenzi-gresite@2x.png",
              img3: "images/fara-comenzi-gresite@3x.png",
              subtitle: t("suppliers-page.first-section.info-subtitle2"),
              description: t("suppliers-page.first-section.info-description2"),
            },
            {
              img: "images/vindeti-mai-mult.png",
              img2: "images/vindeti-mai-mult@2x.png",
              img3: "images/vindeti-mai-mult@3x.png",
              subtitle: t("suppliers-page.first-section.info-subtitle3"),
              description: t("suppliers-page.first-section.info-description3"),
            },
          ],
        }}
      />
      <SliderWhirligig sliderInfo={slider} />
      <div className="flex flex-col w-full items-center lg:mt-13">
        <p className="uppercase font-openSans font-extrabold text-4xl text-center text-bluePrimary px-10 lg:px-0 lg:mt-0 mt-14">
          {t("suppliers-page.order-placed")}
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
            <p
              dangerouslySetInnerHTML={{
                __html: t("suppliers-page.works-fast"),
              }}
              className="font-openSans font-extrabold lg:text-7xl text-4xl text-black italic text-center"
            ></p>
            <Button
              styles="mt-10 lg:mb-0 mb-10 text-center px-10 py-3"
              text={t("register")}
              link="https://app.horecaorders.com/user/register"
            />
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: "url(/images/pregatit.png)" }}
        className="bg-opacity-25 flex flex-col justify-center items-center w-full lg:py-28 py-16 lg:px-0 px-10"
      >
        <p
          dangerouslySetInnerHTML={{
            __html: t("suppliers-page.less-stress"),
          }}
          className="font-openSans font-extrabold italic lg:text-7xl text-4xl text-white text-center"
        ></p>
        <Button
          styles="mt-12 lg:mb-0 text-center px-10 py-3"
          text={t("register")}
          link="https://app.horecaorders.com/user/register"
        />
      </div>
    </div>
  );
}

export default Suppliers;
