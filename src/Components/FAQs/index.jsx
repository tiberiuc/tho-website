import Button from "Atoms/Button";
import Header from "Components/Header/Header";
import React from "react";
import { useTranslation } from "react-i18next";

function FAQs() {
  const { t } = useTranslation("translation");
  const faqs = [
    {
      styles: "",
      title: t("faq-page.section1"),
      description: t("faq-page.section1-description"),
    },
    {
      styles: "bg-greyBg text-bluePrimary",
      title: t("faq-page.section2"),
      description: t("faq-page.section2-description"),
    },
    {
      styles: "",
      title: t("faq-page.section3"),
      description: t("faq-page.section3-description"),
    },
    {
      styles: "bg-greyBg text-bluePrimary",
      title: t("faq-page.section4"),
      description: t("faq-page.section4-description"),
      button: t("register"),
    },
    {
      styles: "",
      title: t("faq-page.section5"),
      description: t("faq-page.section5-description"),
    },
  ];
  return (
    <>
      <Header
        headingText={t("faq-page.title")}
        home
        noButtons={"justify-center lg:px-8 px-16 text-center ml-0"}
        logoYellow
        bgHeader="bg-bluePrimary"
      />
      <div className="flex flex-col items-center">
        {faqs.map((question, key) => {
          return (
            <div
              key={key}
              className={`flex justify-center w-full py-14 px-8 lg:px-0 ${question.styles}`}
            >
              <div className="max-w-xl flex flex-col items-center">
                <p className="font-openSans font-extrabold lg:text-5xl text-4xl text-center">
                  {question?.title}
                </p>

                <p className="font-openSans lg:font-semibold font-normal text-center mt-4 lg:text-base text-xl">
                  {question?.description}
                </p>
                {question?.button && (
                  <Button
                    styles={"mt-4 text-black"}
                    text={question?.button}
                    link="https://app.horecaorders.com/user/register"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FAQs;
