import React from "react";

function FirstSection({ colors, subHeader }) {
  return (
    <div>
      <div className="flex justify-center">
        <div
          className={`grid lg:grid-cols-2 grid-cols-1 w-full items-center ${colors?.background}`}
        >
          <div
            className={`flex flex-col justify-start lg:pl-32 lg:pr-16 pl-10 pr-10 mb-7 2xl:items-center 2xl:max-w-3xl justify-items-center ${colors.text}`}
          >
            <span className="text-4xl 2xl:text-center font-extrabold font-openSans max-w-lg mt-15">
              {subHeader?.textTitle}
            </span>
            <span className="font-medium 2xl:text-center font-openSans mt-5 whitespace-pre-line">
              {subHeader?.paragraph}
            </span>
            {subHeader?.secondParagraph && (
              <span className="font-semibold font-openSans mt-5 2xl:text-center">
                {subHeader?.secondParagraph}
              </span>
            )}
          </div>
          <div>
            <picture>
              <source
                media="(max-width: 799px)"
                srcSet={subHeader?.imgSet.img3x}
              />
              <source
                media="(min-width: 800px)"
                srcSet={subHeader?.imgSet.img2x}
              />
              <img
                className="object-cover max-h-128 w-screen"
                src={subHeader?.imgSet.img}
                alt="Man cooking"
              />
            </picture>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div
          className={`grid lg:grid-cols-3 grid-cols-1 gap-x-20 justify-items-center lg:mt-14 ${
            subHeader?.marginOfSection ? subHeader?.marginOfSection : "mb-0"
          } max-w-3.5xl`}
        >
          {subHeader?.info.map((item) => {
            return (
              <div className="grid grid-rows-[200px_minmax(100px,_1fr)_150px] justify-center w-60 w-full mt-34 lg:mt-0">
                <picture>
                  <source media="(max-width: 799px)" srcSet={item.img3} />
                  <source media="(min-width: 800px)" srcSet={item.img2} />
                  <img
                    className="object-cover w-52 h-52"
                    src={item.img}
                    alt=""
                  />
                </picture>
                <span className="font-openSans font-bold text-2xl lg:mt-9 mt-12 text-center">
                  {item.subtitle}
                </span>
                <span className="font-openSans lg:font-semibold lg:text-base text-lg text-center">
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
