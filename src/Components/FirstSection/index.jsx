import React from "react";

function FirstSection({ colors, subHeader }) {
  return (
    <div>
      <div
        className={`grid lg:grid-cols-2 grid-cols-1 w-full bg-white items-center ${colors?.background}`}
      >
        <div
          className={`flex flex-col justify-start w-full lg:pl-32 lg:pr-16 pl-10 pr-10 mb-7 ${colors.text}`}
        >
          <span className="text-4xl font-extrabold font-openSans max-w-lg mt-15">
            {subHeader?.textTitle}
          </span>
          <span className="font-medium font-openSans mt-5 whitespace-pre-line">
            {subHeader?.paragraph}
          </span>
          {subHeader?.secondParagraph && (
            <span className="font-semibold font-openSans mt-5">
              {subHeader?.secondParagraph}
            </span>
          )}
        </div>
        <div>
          <picture>
            <source
              media="(max-width: 799px)"
              srcset={subHeader?.imgSet.img3x}
            />
            <source
              media="(min-width: 800px)"
              srcset={subHeader?.imgSet.img2x}
            />
            <img
              className="object-cover max-h-128 w-screen"
              src={subHeader?.imgSet.img}
              alt="Man cooking"
            />
          </picture>
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className={`grid lg:grid-cols-3 grid-cols-1 gap-x-20 justify-items-center lg:mt-14 lg:mb-13 ${
            subHeader.marginOfSection ? subHeader.marginOfSection : "mb-34"
          } max-w-3.5xl`}
        >
          {subHeader?.info.map((item) => {
            return (
              <div className="flex flex-col items-center w-60 w-full mt-34 lg:mt-0">
                <picture>
                  <source media="(max-width: 799px)" srcset={item.img3} />
                  <source media="(min-width: 800px)" srcset={item.img2} />
                  <img
                    className="object-cover w-52 h-52"
                    src={item.img}
                    alt=""
                  />
                </picture>
                <span className="font-openSans font-bold text-2xl lg:mt-9 mt-12 text-center">
                  {item.subtitle}
                </span>
                <span className="font-openSans lg:font-semibold lg:text-base text-lg lg:mt-11 mt-7 text-center">
                  {item.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
