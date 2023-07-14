import Header from "Components/Header/Header";
import "./style.css";
import { useTranslation } from "react-i18next";

function PricingFurnizori() {
  const { t } = useTranslation("translation");
  const priceOfPlan = 8;
  const pricing = {
    tiers: [
      {
        toggle: false,
        title: t("suppliers-price.free-tier.title"),
        price: t("suppliers-price.free-tier.price"),
        frequency: t("suppliers-price.free-tier.frequency"),
        frequencyTips: t("suppliers-price.free-tier.frequency-tips"),
        description: t("suppliers-price.free-tier.description"),
        features: [
          {
            feature: t("suppliers-price.free-tier.feature1"),
            subFeature: t("suppliers-price.free-tier.sub-feature1"),
          },
          {
            feature: t("suppliers-price.free-tier.feature2"),
            subFeature: t("suppliers-price.free-tier.sub-feature2"),
          },
          { feature: t("suppliers-price.free-tier.feature3") },
          {
            feature: t("suppliers-price.free-tier.feature4"),
            subFeature: t("suppliers-price.free-tier.sub-feature4"),
          },
          { feature: t("suppliers-price.free-tier.feature5") },
          { feature: t("suppliers-price.free-tier.feature6") },
        ],
        button: t("register"),
        buttonLink: "https://app.horecaorders.com/user/register",
        backgroundButton: "bg-yellowButton text-black",
        mostPopular: false,
        styleOfCard: "bg-greyBg div3",
      },
      {
        toggle: true,
      },
      {
        toggle: false,
        title: t("suppliers-price.pro-tier.title"),
        price: priceOfPlan,
        frequency: t("suppliers-price.pro-tier.frequency"),
        frequencyTips: t("suppliers-price.pro-tier.frequency-tips"),
        description: t("suppliers-price.pro-tier.description"),
        features: [
          {
            feature: t("suppliers-price.pro-tier.feature1"),
            subFeature: t("suppliers-price.pro-tier.sub-feature1"),
          },
          {
            feature: t("suppliers-price.pro-tier.feature2"),
            subFeature: t("suppliers-price.pro-tier.sub-feature2"),
          },
          { feature: t("suppliers-price.pro-tier.feature3") },
          {
            feature: t("suppliers-price.pro-tier.feature4"),
            subFeature: t("suppliers-price.pro-tier.sub-feature4"),
          },
          {
            feature: t("suppliers-price.pro-tier.feature5"),
            commingSoon: t("suppliers-price.pro-tier.cooming-soon"),
            subFeature: t("suppliers-price.pro-tier.sub-feature5"),
          },
          {
            feature: t("suppliers-price.pro-tier.feature6"),
            commingSoon: t("suppliers-price.pro-tier.cooming-soon"),
          },
          { feature: t("suppliers-price.pro-tier.feature7") },
        ],
        button: t("suppliers-price.pro-tier.try-free"),
        buttonLink: "https://app.horecaorders.com/user/register",
        backgroundButton: "bg-bluePrimary text-white",
        styleOfCard: "bg-yellowPricing div5",
        mostPopular: false,
      },
    ],
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <Header
        bgHeader={"bg-white"}
        headingText={t("suppliers-price.title")}
        noButtons={"flex justify-center px-4"}
        logoYellow
        supplier
      />
      <div className="max-w-7xl mx-auto px-4 bg-white sm:px-6 lg:px-8 z-50">
        <div className="items-end space-y-12 lg:space-y-0 parent marginTop mb-14">
          <div
            className={` div1 bg-bluePrimary relative h-204 max-h-4xl p-8 border border-gray-200 rounded-2xl flex flex-col items-start `}
          >
            <span className="font-openSans text-4xl text-white">
              {t("suppliers-price.description1")}
            </span>
            <span className="font-openSans text-4xl font-bold text-white -mt-2">
              {t("suppliers-price.description2")}
            </span>
            <span className="font-openSans text-lg font-semibold text-white mt-5">
              {t("suppliers-price.description3")}
            </span>
            <span className="font-openSans text-lg font-semibold text-white mt-5">
              {t("suppliers-price.description4")}
            </span>
            <picture>
              <source
                media="(max-width: 799px)"
                srcSet={t("suppliers-price.img-order3")}
              />
              <source
                media="(min-width: 800px)"
                srcSet={t("suppliers-price.img-order2")}
              />
              <img
                className="absolute right-0 pl-8 lg:pl-0 w-85 mt-14 object-cover"
                src={t("suppliers-price.img-order1")}
                alt=""
              />
            </picture>
          </div>
          <div className="div2 flex flex-col lg:pb-10 pb-0">
            <p className="font-openSans text-4xl leading-5 font-light text-bluePrimary">
              {t("suppliers-price.try-now1")}
            </p>
            <p className="font-openSans text-4xl font-bold text-bluePrimary">
              {t("suppliers-price.try-now2")}
            </p>
          </div>

          {pricing.tiers.map((tier, key) => (
            <>
              {!tier.toggle ? (
                <div
                  key={tier.title}
                  className={`relative lg:h-168 p-8 bg-white border border-gray-200 rounded-2xl flex flex-col items-center ${tier.styleOfCard}`}
                >
                  <div className="flex-1">
                    <div className="flex justify-between items-end">
                      <h3 className="text-4xl font-bold text-black font-openSans">
                        {tier.title}
                      </h3>
                      <div className="flex flex-col items-end">
                        <span className="text-3xl font-semibold font-openSans">
                          {tier.price}
                          {tier.frequency}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm flex flex-col items-end font-semibold text-gray-500 font-openSans">
                      {tier.frequencyTips}
                    </span>
                    {tier.mostPopular ? (
                      <p className="absolute top-0 py-1.5 px-4 bg-indigo-500 rounded-full text-sm font-semibold text-white transform -translate-y-1/2">
                        {t("suppliers-price.most-popular")}
                      </p>
                    ) : null}

                    <p className="mt-6 text-black font-openSans font-bold">
                      {tier.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {tier.features.map((feature, key) => (
                        <li key={key} className="flex items-start">
                          <img
                            className="h-2.5 mt-2"
                            src="images/shape.png"
                            alt="Checkmark"
                          />
                          <div className="flex flex-col">
                            <span className="ml-3 text-black font-semibold text-base font-openSans">
                              {feature.feature}{" "}
                              <span className="font-normal">
                                {feature.commingSoon}
                              </span>
                            </span>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: feature.subFeature,
                              }}
                              className="ml-3 text-black text-sm font-openSans whitespace-pre-line"
                            ></p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={tier.buttonLink}
                    className={classNames(
                      tier?.backgroundButton,
                      "flex justify-center w-40 rounded-full font-semibold font-openSans text-base py-2 hover:bg-blue transition ease-in-out delay-100 duration-300 mt-4"
                    )}
                  >
                    {tier.button}
                  </a>
                </div>
              ) : (
                <div key={key}></div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingFurnizori;
