import Button from "..";
import Whirligig from "react-whirligig";

export default function SliderWhirligig({ sliderInfo }) {
  let whirligig;
  const next = () => whirligig.next();
  const prev = () => whirligig.prev();

  return (
    <div className="flex flex-col items-center justify-center bg-bluePrimary mt-5 py-14 px-5">
      <div className="flex justify-center w-full lg:max-w-6xl">
        <button onClick={prev}>
          <img
            className="lg:w-8 w-5"
            src="SVGs/left-arrow.svg"
            alt="Arrow left"
          />
        </button>
        <Whirligig
          visibleSlides={1}
          gutter="1em"
          ref={(_whirligigInstance) => {
            whirligig = _whirligigInstance;
          }}
          infinite
          snapToSlide
          animationDuration={1000}
          slideClass={"flex justify-center lg:px-0 px-2"}
          className={"scrollbar-hide w-full"}
        >
          {sliderInfo.map((sliderItem) => {
            return (
              <div className="flex lg:flex-row flex-col items-center lg:space-x-14">
                <div className="flex flex-col items-center justify-center lg:pr-4">
                  <p className="font-openSans text-white text-center font-bold lg:text-3xl text-xl leading-6 lg:max-w-lg">
                    {sliderItem.paragraphDescription}
                  </p>
                  <p className="font-openSans font-semibold text-base text-center text-white lg:mt-2 mt-6">
                    {sliderItem.personDescription1}
                    <a
                      target="blank"
                      href={sliderItem?.linkOfWebsite}
                      className="font-openSans font-semibold text-base text-center text-white lg:mt-0 mt-6 underline"
                    >
                      {sliderItem?.hyperLink}
                    </a>
                    {sliderItem.personDescription2}
                  </p>
                </div>
                <picture>
                  <source media="(max-width: 799px)" srcSet={sliderItem.img3} />
                  <source media="(min-width: 800px)" srcSet={sliderItem.img2} />
                  <img
                    className="object-fit lg:h-104 h-52 lg:mt-0 mt-8"
                    src={sliderItem.img}
                    alt=""
                  />
                </picture>
              </div>
            );
          })}
        </Whirligig>
        <button onClick={next}>
          <img
            className="lg:w-8 w-5"
            src="SVGs/right-arrow.svg"
            alt="Arrow right"
          />
        </button>
      </div>
      <Button
        styles="lg:mt-16 mt-8 px-10 py-3"
        text="Inregistrare"
        link="https://app.horecaorders.com/users/register"
      />
    </div>
  );
}
