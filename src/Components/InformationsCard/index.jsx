import Button from "Atoms/Button";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const InformationsCard = ({ data }) => {
  const { t } = useTranslation("translation");
  return (
    <>
      {data.map((item, key) => {
        return (
          <div key={key} className="flex justify-center lg:mt-4 mt-14">
            <div
              className={`grid lg:grid-cols-2 lg:gap-x-12 grid-cols-1 w-full max-w-3.5xl ${item.componentStyles}  `}
            >
              <div
                className={`flex flex-col items-start justify-center w-full lg:pl-17 pl-5 pr-5 lg:pr-0 ${
                  item?.subComponentStyles
                    ? item?.subComponentStyles
                    : "lg:my-17 my-10"
                }`}
              >
                <span
                  className={`font-openSans font-bold text-3xl ${item.textColor}`}
                >
                  {item.subTitle}
                </span>
                <span
                  className={`font-openSans font-semibold lg:text-base mt-3 whitespace-pre-line text-lg leading-6 ${item.textColor}`}
                >
                  {item.description}
                </span>
                {item?.buttonLink && (
                  <Link to={item.buttonLink}>
                    <Button
                      styles="mt-6 font-semibold text-lg px-10 py-3"
                      text={t("information-card.find-out-more")}
                    />
                  </Link>
                )}
              </div>
              <picture>
                <source media="(max-width: 799px)" srcSet={item.img3} />
                <source media="(min-width: 800px)" srcSet={item.img2} />
                <img
                  className={`${item.pictureStyles}`}
                  src={item.img}
                  alt=""
                />
              </picture>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default InformationsCard;
