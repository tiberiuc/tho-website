import FirstSection from "Components/FirstSection";
import Header from "Components/Header/Header";
import SecondSection from "Components/SecondSection";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation("translation");
  return (
    <>
      <Header
        headingText={t("home-page.title")}
        headerButtonLeft={{
          text: t("home-page.header-button-left"),
          link: "/restaurante",
        }}
        headerButtonRight={{
          text: t("home-page.header-button-right"),
          link: "/furnizori",
        }}
        home={"text-4.5xl"}
      />
      <FirstSection
        colors={{ background: "bg-greyBg", text: "text-black" }}
        subHeader={{
          textTitle: t("home-page.first-section.text-title"),
          paragraph: t("home-page.first-section.paragraph"),
          secondParagraph: t("home-page.first-section.second-paragraph"),
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
              subtitle: t("home-page.first-section.info-subtitle1"),
              description: t("home-page.first-section.info-description1"),
            },
            {
              img: "images/castiga-timp.png",
              img2: "images/castiga-timp@2x.png",
              img3: "images/castiga-timp@3x.png",
              subtitle: t("home-page.first-section.info-subtitle2"),
              description: t("home-page.first-section.info-description2"),
            },
            {
              img: "images/salveaza-mai-mult.png",
              img2: "images/salveaza-mai-mult@2x.png",
              img3: "images/salveaza-mai-mult@3x.png",
              subtitle: t("home-page.first-section.info-subtitle3"),
              description: t("home-page.first-section.info-description3"),
            },
          ],
        }}
      />
      <SecondSection
        information={[
          {
            subTitle: t("home-page.second-section.sub-title1"),
            description: t("home-page.second-section.description1"),
            buttonLink: "/restaurante",
            img: t("home-page.second-section.img-iphone1"),
            img2: t("home-page.second-section.img-iphone2"),
            img3: t("home-page.second-section.img-iphone3"),
            componentStyles:
              "bg-yellowSection justify-items-center items-end lg:h-98",
            textColor: "text-black",
            pictureStyles: "object-scale-down lg:h-86 h-80 w-64",
            subComponentStyles: "lg:my-14 my-10",
          },
          {
            subTitle: "Pentru furnizori",
            description:
              "Indiferent dacă aveți o afacere de familie sau sunteți un distribuitor național, platforma noastră personalizată va schimba modul în care faceți afaceri.",
            buttonLink: "/furnizori",
            img: t("home-page.second-section.img-order1"),
            img2: t("home-page.second-section.img-order2"),
            img3: t("home-page.second-section.img-order3"),
            componentStyles:
              "bg-bluePrimary justify-items-end items-center lg:h-98",
            textColor: "text-white",
            pictureStyles: "object-scale-down lg:w-86 w-85 h-72 mb-10 lg:mb-0",
          },
        ]}
      />
    </>
  );
}

export default Home;
