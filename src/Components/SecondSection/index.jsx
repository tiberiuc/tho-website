import Button from "Atoms/Button";
import React from "react";

const SecondSection = ({ information }) => {
  return (
    <div>
      {information.map((item) => {
        return (
          <div className="flex justify-center mt-4">
            <div
              className={`grid lg:grid-cols-2 lg:gap-x-12 grid-cols-1 w-full max-w-3.5xl ${item.componentStyles}  `}
            >
              <div className="flex flex-col items-start w-full lg:pl-17 pl-5 pr-5 lg:pr-0 my-17">
                <span
                  className={`font-openSans font-bold text-3xl ${item.textColor}`}
                >
                  {item.subTitle}
                </span>
                <span
                  className={`font-openSans font-semibold text-base mt-3 ${item.textColor}`}
                >
                  {item.description}
                </span>
                <button
                  onClick={item.buttonLink}
                  className="rounded-3xl px-4 py-2 bg-yellow-400 font-openSans font-semibold mt-6"
                >
                  Afla mai multe
                </button>
              </div>
              <picture>
                <source media="(max-width: 799px)" srcset={item.img3} />
                <source media="(min-width: 800px)" srcset={item.img2} />
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
      <div
        style={{ backgroundImage: "url(/images/comenziInOrdine.png)" }}
        className={`lg:mt-22 mt-4 bg-opacity-50 flex flex-col items-center lg:py-40 py-20 lg:px-0 px-12`}
      >
        <span className="font-openSans font-extrabold italic lg:text-7xl text-5xl text-center max-w-3xl">
          PUNE-TI COMENZILE IN ORDINE
        </span>
        <Button
          text={"Inregistrare"}
          styles="w-auto justify-center mt-8 rounded-full"
        />
      </div>
      <div className="flex lg:flex-row flex-col w-full lg:divide-x-2 lg:divide-y-0 divide-y-2 divide-black">
        <div className="bg-yellowButton uppercase lg:w-1/2 w-full text-center font-openSans font-extrabold lg:text-5xl text-3xl	py-11">
          Restaurante
        </div>
        <div className="bg-yellowButton uppercase lg:w-1/2 w-full text-center font-openSans font-extrabold lg:text-5xl text-3xl	py-11">
          Furnizori
        </div>
      </div>
    </div>
  );
};
export default SecondSection;
