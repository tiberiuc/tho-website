import React from "react";

const navigation = {
  info: [
    { name: "Home", href: "#" },
    { name: "Restaurante", href: "#" },
    { name: "Furnizori", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Noutati Produs", href: "#" },
  ],
  horecaOrders: [
    { name: "Despre", href: "#" },
    { name: "Cariere", href: "#" },
    { name: "Contacteaza-ne", href: "#" },
    { name: "Presa", href: "#" },
    { name: "Media Kit", href: "#" },
  ],
  povesti: [
    { name: "Toate povestile", href: "#" },
    { name: "Managementul Restaurantului", href: "#" },
    { name: "Lumea Culinara", href: "#" },
    { name: "Ghidul Producatorului", href: "#" },
    { name: "Viata lui HORECA ORDERS", href: "#" },
    { name: "Laboratorul HORECA ORDERS pentru bucatari", href: "#" },
  ],
  social: [
    {
      name: "YouTube",
      href: "#",
      icon: "SVGs/youtube.svg",
    },
    {
      name: "Facebook",
      href: "#",
      icon: "SVGs/facebook.svg",
    },
    {
      name: "Instagram",
      href: "#",
      icon: "SVGs/instagram.svg",
    },
    {
      name: "Linkedin",
      href: "#",
      icon: "SVGs/linkedin.svg",
    },
  ],
};

console.log(navigation.solutions);
function Footer() {
  return (
    <footer
      className="bg-bluePrimary flex flex-col items-center"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-3.5xl items-center w-full lg:pt-12">
        <div className="flex lg:flex-row flex-col justify-center lg:gap-22 gap-6 lg:px-0 px-5">
          <div className="mt-12 md:mt-0">
            <h3 className="lg:text-base text-xl font-bold text-white uppercase font-openSans">
              Info
            </h3>
            <ul className="mt-4">
              {navigation.info.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="font-openSans lg:text-base text-xl text-white hover:text-gray-900 font-semibold"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="lg:text-base text-xl font-bold text-white uppercase font-openSans">
              Horeca Orders
            </h3>
            <ul className="mt-4">
              {navigation.horecaOrders.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="font-openSans lg:text-base text-xl text-white hover:text-gray-900 font-semibold"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h3 className="lg:text-base text-xl font-bold text-white uppercase font-openSans">
              Povesti
            </h3>
            <ul className="mt-4">
              {navigation.povesti.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="font-openSans lg:text-base text-xl text-white hover:text-gray-900 font-semibold"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <img
            className="w-30 h-24 lg:mt-0 mt-8"
            src="SVGs/horeca-orders-logo.svg"
            alt="Horeca Orders Logo"
          />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between w-full lg:items-end max-w-3.5xl lg:mt-20 mt-14 lg:px-0 px-5">
        <div className="flex flex-col">
          <p className="font-openSans text-white font-extrabold lg:text-base text-xl">
            Pune-ti comenzile in ordine
          </p>
          <div className="flex flex-row lg:mt-0 mt-4">
            <a href="https://apps.apple.com/ro/app/horeca-orders/id1612229474">
              <img
                className="lg:h-9 h-12"
                src="SVGs/appstore.svg"
                alt="Appstore button"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.horecaorders.app">
              <img
                className="lg:h-9 h-12 ml-1"
                src="SVGs/google-play.svg"
                alt="Google play button"
              />
            </a>
          </div>
        </div>
        <div className="flex space-x-3 lg:mt-0 mt-14">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <img
                src={item.icon}
                alt={item.name}
                className="lg:h-6 lg:w-6 h-12 w-12"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="flex justify-between w-full items-end max-w-3.5xl mt-16 mb-12">
        <div className="flex lg:flex-row flex-col lg:space-x-10 space-x-0 lg:px-0 px-5 lg:gap-0 gap-1">
          <p className="text-xs text-white opacity-50 font-openSans">
            2022 &copy; HORECA ORDERS Inc
          </p>
          <a className="text-xs text-white opacity-50 font-openSans" href="/">
            Contact
          </a>
          <a className="text-xs text-white opacity-50 font-openSans" href="/">
            Politica de confidentialitate
          </a>
          <a className="text-xs text-white opacity-50 font-openSans" href="/">
            Termeni si conditii
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
