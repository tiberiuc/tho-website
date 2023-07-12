import Header from "Components/Header/Header";
import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation("translation");
  return (
    <>
      <Header
        headingText={t("about.title")}
        restaurant
        noButtons={"justify-center lg:px-8 px-16 text-center ml-0"}
        logoYellow
        bgHeader="bg-greyBg"
      />
      <div className="flex justify-center">
        <div
          className={`grid lg:grid-cols-2 grid-cols-1 w-full items-center bg-bluePrimary`}
        >
          <div
            className={`flex flex-col justify-start lg:pl-32 lg:pr-16 pl-10 pr-10 mb-7 2xl:items-center 2xl:max-w-3xl justify-items-center text-white`}
          >
            <span className="text-4xl 2xl:text-center font-extrabold font-openSans max-w-lg mt-15">
              {t("about.section1")}
            </span>
            <span className="font-medium 2xl:text-center font-openSans mt-5 whitespace-pre-line">
              {t("about.section1-description")}
            </span>
          </div>
          <div>
            <picture>
              <source
                media="(max-width: 799px)"
                srcSet="images/ustensila-bucatarie-fata@3x.png"
              />
              <source
                media="(min-width: 800px)"
                srcSet="images/ustensila-bucatarie-fata@2x.png"
              />
              <img
                className="object-cover max-h-128 w-screen"
                src="images/ustensila-bucatarie-fata.png"
                alt="Girl in the kitchen"
              />
            </picture>
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:my-14 my-10 mx-8">
        <div className="flex flex-col items-center max-w-3xl">
          <p className="font-openSans font-extrabold lg:text-5xl text-3xl">
            {t("about.section2")}
          </p>
          <p className="font-openSans lg:font-semibold font-normal lg:text-3xl text-2xl lg:mt-14 mt-8">
            {t("about.section2-description1")}
          </p>
          <p className="font-openSans lg:font-semibold font-normal lg:text-3xl text-2xl lg:mt-8 mt-4">
            {t("about.section2-description2")}
          </p>
          <p className="font-openSans lg:font-semibold font-normal lg:text-3xl text-2xl lg:mt-8 mt-4">
            {t("about.section2-description3")}
          </p>
          <p className="font-openSans font-bold lg:text-3xl text-2xl lg:mt-8 mt-4">
            {t("about.section2-description4")}
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url(/images/pune-ti-comenzile-in-ordine.png)",
        }}
        className="bg-opacity-25 flex flex-col justify-center items-center w-full lg:py-28 py-16 lg:px-0 px-10"
      >
        <p
          dangerouslySetInnerHTML={{
            __html: `${t("about.section3")}`,
          }}
          className="font-openSans font-extrabold italic lg:text-7xl text-4xl text-white text-center"
        ></p>
      </div>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
          <picture>
            <source
              media="(max-width: 799px)"
              srcSet="images/juan-manuel@3x.png"
            />
            <source
              media="(min-width: 800px)"
              srcSet="images/juan-manuel@2x.png"
            />
            <img
              className="object-cover max-h-180 2xl:max-h-full lg:p-0 p-10 h-full"
              src="images/juan-manuel.png"
              alt=""
            />
          </picture>
          <div className="flex flex-col items-center justify-center px-10 lg:pb-0 pb-10">
            <p
              dangerouslySetInnerHTML={{
                __html: `${t("about.section4")}`,
              }}
              className="font-openSans font-extrabold lg:text-7xl text-4xl text-black italic text-center"
            ></p>
            <p className="font-openSans font-semibold lg:text-2xl text-xl text-center mt-6">
              {t("about.section4-description")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
