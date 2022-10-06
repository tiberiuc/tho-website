import Button from "Atoms/Button";
import InformationsCard from "Components/InformationsCard";
import React from "react";

const SecondSection = ({ information }) => {
  return (
    <div>
      <InformationsCard data={information} />
      <div
        style={{ backgroundImage: "url(/images/comenziInOrdine.png)" }}
        className={`lg:mt-22 mt-4 bg-opacity-50 flex flex-col items-center lg:py-40 py-20 lg:px-0 px-12`}
      >
        <span className="font-openSans font-extrabold italic lg:text-7xl text-5xl leading-10 text-center max-w-3xl">
          PUNE-ȚI COMENZILE ÎN ORDINE
        </span>
        <a href="https://app.horecaorders.com/users/register">
          <Button
            text={"Înregistrare"}
            link="https://app.horecaorders.com/users/register"
            styles="w-auto justify-center mt-8 rounded-full px-10 py-3"
          />
        </a>
      </div>
      <div className="flex lg:flex-row flex-col w-full lg:divide-x-2 lg:divide-y-0 divide-y-2 divide-black">
        <a
          href="/restaurante"
          className="bg-yellowButton hover:bg-blue uppercase lg:w-1/2 w-full text-center font-openSans font-extrabold lg:text-5xl text-3xl py-11 hover:underline"
        >
          Restaurante
        </a>
        <a
          href="/furnizori"
          className="bg-yellowButton hover:bg-blue uppercase lg:w-1/2 w-full text-center font-openSans font-extrabold lg:text-5xl text-3xl py-11 hover:underline"
        >
          Furnizori
        </a>
      </div>
    </div>
  );
};
export default SecondSection;
