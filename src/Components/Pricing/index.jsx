import Header from "Components/Header/Header";

function Pricing() {
  const pricing = {
    tiers: [
      {
        title: "Starter",
        price: "Gratis",
        frequency: "",
        frequencyTips: "cu limitari",
        description: "Planul include",
        features: [
          {
            feature: "Onboarding",
            subFeature:
              "Realizarea listelor de produse, conebuttonrea cu furnizorii si agentii de vanzari",
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
        backgroundButton: "bg-yellowButton text-black",
        mostPopular: false,
        styleOfCard: "bg-greyBg",
      },
      {
        title: "Pro",
        price: "20€",
        frequency: "/ luna",
        frequencyTips: "Plata anuala",
        description: "Tot ce e in oferta Starter plus:",
        features: [
          {
            feature: "Notificari",
            subFeature: `La confirmarea comenzii 
              La ora limita pentru plasarea comenzii cu livrare a doua zi`,
          },
          {
            feature: "Liste de produse",
            subFeature:
              "Mai multi furnizori in aceeasi lista. Trimiti o singura comanda catre mai multi furnizori.",
          },
          { feature: "Comanda minima / Cantitate minima" },
          { feature: "Multiutilizatori (in curand)" },
          { feature: "Multilocatii (in curand)" },
          { feature: "Statistici (in curand)" },
          { feature: "Verificarea comenzilor (in curand)" },
        ],
        button: "Incearca gratuit",
        backgroundButton: "bg-bluePrimary text-white",
        styleOfCard: "bg-yellowPricing",
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
        headingText={`PRETURI`}
        noButtons={"flex justify-center"}
        logoYellow
        supplier
      />
      <div className="max-w-7xl mx-auto px-4 bg-white sm:px-6 lg:px-8 my-24">
        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div
            className={`bg-bluePrimary relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col items-center `}
          >
            <span className="font-openSans text-4xl text-white">
              Comenzi plasate
            </span>
            <span className="font-openSans text-4xl font-bold text-white -mt-2">
              mult mai bine
            </span>
            <span className="font-openSans text-xl text-white mt-5">
              Plaseaza comenzile si discuta cu toti furnizorii intr-o singura
              aplicatie.
            </span>
            <span className="font-openSans text-xl text-white mt-5">
              Comenzile sunt convertite in formatul dorit de furnizor - e-mail,
              SMS sau integrare directa in ERP-ul furnizorului.
            </span>
          </div>

          {pricing.tiers.map((tier) => (
            <div
              key={tier.title}
              className={`relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col items-center ${tier.styleOfCard}`}
            >
              <div className="flex-1">
                <div className="flex justify-between items-end">
                  <h3 className="text-4xl font-bold text-black font-openSans">
                    {tier.title}
                  </h3>
                  <div className="flex flex-col items-end">
                    <span className="text-3xl font-semibold font-openSans">
                      {tier.price} {tier.frequency}
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
                        <span className="ml-3 text-black font-medium text-base font-openSans">
                          {feature.feature}
                        </span>
                        <span className="ml-3 text-black text-sm font-openSans whitespace-pre-line">
                          {feature.subFeature}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                href="/"
                className={classNames(
                  tier?.backgroundButton,
                  "w-40 rounded-full lg:font-semibold font-medium font-openSans lg:text-base text-xl py-2 hover:bg-blue transition ease-in-out delay-100 duration-300 mt-4"
                )}
              >
                {tier.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
