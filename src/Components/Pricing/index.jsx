import Header from "Components/Header/Header";

function Pricing() {
  const pricing = {
    tiers: [
      {
        title: "Freelancer",
        price: 24,
        frequency: "/month",
        description: "The essentials to provide your best work for clients.",
        features: [{ feature: "", subFeature: "" }],
        cta: "Monthly billing",
        mostPopular: false,
      },
      {
        title: "Starter",
        price: "Gratis",
        frequency: "",
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
        cta: "Monthly billing",
        mostPopular: false,
        styleOfCard: "bg-greyBg",
      },
      {
        title: "Pro",
        price: "25€",
        frequency: "/month",
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
        cta: "Monthly billing",
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
          {pricing.tiers.map((tier) => (
            <div
              key={tier.title}
              className={`relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col ${tier.styleOfCard}`}
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-black">
                  {tier.title}
                </h3>
                {tier.mostPopular ? (
                  <p className="absolute top-0 py-1.5 px-4 bg-indigo-500 rounded-full text-sm font-semibold text-white transform -translate-y-1/2">
                    Most popular
                  </p>
                ) : null}
                <p className="mt-4 flex items-baseline text-black">
                  <span className="text-5xl tracking-tight font-bold">
                    {tier.price}
                  </span>
                  <span className="ml-1 text-xl font-semibold">
                    {tier.frequency}
                  </span>
                </p>
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

              <a
                href="/"
                className={classNames(
                  tier.mostPopular
                    ? "bg-indigo-500 text-white hover:bg-indigo-600"
                    : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100",
                  "mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                )}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
