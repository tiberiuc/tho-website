import Header from "Components/Header/Header";
import "./style.css";

function PricingRestaurante() {
  const priceOfPlan = 8;
  const pricing = {
    tiers: [
      {
        toggle: false,
        title: "Starter",
        price: "Gratis",
        frequency: "",
        frequencyTips: "cu limitari",
        description: "Planul include",
        features: [
          {
            feature: "Onboarding",
            subFeature:
              "Realizarea listelor de produse, conectarea cu furnizorii si agentii de vanzari",
          },
          { feature: "Trimiti comenzi catre furnizori" },
          { feature: "Comentarii" },
          { feature: "Adauga/Sterge Furnizori si Produse" },
          {
            feature: "Istoricul de comenzi",
            subFeature: `Vezi comenzile plasate, statusul lor si
            comentariile din partea furnizorilor`,
          },
          { feature: "Repeta comanda" },
          { feature: "Data livrarii" },
          { feature: "Metoda de plata" },
          { feature: "Suport 24/7" },
        ],
        button: "Inregistrare",
        buttonLink: "https://app.horecaorders.com/users/register",
        backgroundButton: "bg-yellowButton text-black",
        mostPopular: false,
        styleOfCard: "bg-greyBg div3",
      },
      {
        toggle: true,
      },
      {
        toggle: false,
        title: "Pro",
        price: priceOfPlan,
        frequency: "€ / luna",
        frequencyTips: "per restaurant",
        description: "Tot ce e in oferta Starter plus:",
        features: [
          {
            feature: "Onboarding+",
            subFeature: `Access la documentatie si video-uri pentru echipa`,
          },
          {
            feature: "Catalog",
            subFeature:
              "Incarcati produsele, id-ul de preturi, unitatea de masura, disponibilitatea in stoc sau epuizat",
          },
          { feature: "Comanda minima / Cantitate minima" },
          {
            feature: "Zile de livrare si ora limita",
            subFeature: `Alegeti in ce zile clientii dvs. pot solicita livrari. 
              Adaugati o ora limita pentru livrarea a doua zi`,
          },
          {
            feature: "Multiutilizatori",
            commingSoon: "(in curand)",
            subFeature:
              "Manager/Reprezentant de vanzari/Contabilitate/Suport clienti",
          },
          { feature: "Promotii", commingSoon: "(in curand)" },
          { feature: "Integrare ERP" },
        ],
        button: "Incearca gratuit",
        buttonLink: "https://app.horecaorders.com/users/register",
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
        headingText={`PRETURI RESTAURANTE`}
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
              Comenzi plasate
            </span>
            <span className="font-openSans text-4xl font-bold text-white -mt-2">
              mult mai bine
            </span>
            <span className="font-openSans text-lg font-semibold text-white mt-5">
              Plaseaza comenzile si discuta cu toti furnizorii intr-o singura
              aplicatie.
            </span>
            <span className="font-openSans text-lg font-semibold text-white mt-5">
              Comenzile sunt convertite in formatul dorit de furnizor - e-mail,
              SMS sau integrare directa in ERP-ul furnizorului.
            </span>
            <picture>
              <source
                media="(max-width: 799px)"
                srcSet="images/pricing-hand@3x.png"
              />
              <source
                media="(min-width: 800px)"
                srcSet="images/pricing-hand@2x.png"
              />
              <img
                className="absolute bottom-0 left-0 object-cover lg:max-h-104 max-h-112"
                src="images/pricing-hand.png"
                alt=""
              />
            </picture>
          </div>
          <div className="div2 flex flex-col lg:pb-10 pb-0">
            <p className="font-openSans text-4xl leading-5 font-light text-bluePrimary">
              Incepe acum
            </p>
            <p className="font-openSans text-4xl font-bold text-bluePrimary">
              planul tau gratuit.
            </p>
          </div>

          {pricing.tiers.map((tier) => (
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
                        Most popular
                      </p>
                    ) : null}

                    <p className="mt-6 text-black font-openSans font-bold">
                      {tier.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start">
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
                            <span className="ml-3 text-black text-sm font-openSans whitespace-pre-line">
                              {feature.subFeature}
                            </span>
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
                <div></div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingRestaurante;
