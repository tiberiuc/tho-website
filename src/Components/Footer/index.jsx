import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const { t } = useTranslation("translation");
  const location = useLocation();
  const lang = location.pathname.split("/")[1];

  const navigation = {
    info: [
      { name: t("home"), href: `/${lang}` },
      { name: t("restaurants"), href: `/${lang}/restaurante` },
      { name: t("suppliers"), href: `/${lang}/furnizori` },
      { name: t("faq"), href: `/${lang}/intrebari-frecvente` },
    ],
    horecaOrders: [
      { name: t("about"), href: `/${lang}/despre` },
      { name: t("contact-us"), href: "mailto:" + t("contact-email") },
      { name: t("restaurants-prices"), href: `/${lang}/preturi-restaurante` },
      { name: t("suppliers-prices"), href: `/${lang}/preturi-furnizori` },
    ],
    povesti: [
      { name: t("footer.stories.all-stories"), href: "#" },
      { name: t("footer.stories.restaurant-management"), href: "#" },
      { name: t("footer.stories.culinary-world"), href: "#" },
      { name: t("footer.stories.manufacturer-guide"), href: "#" },
      { name: t("footer.stories.hc-life"), href: "#" },
      { name: t("footer.stories.hc-laboratory"), href: "#" },
    ],
    social: [
      {
        name: "YouTube",
        href: "https://www.youtube.com/channel/UCZEmGsfqjxY-i1MDt4SAC2g",
        icon: "/SVGs/youtube.svg",
      },
      {
        name: "Facebook",
        href: "https://www.facebook.com/HORECAORDERS",
        icon: "/SVGs/facebook.svg",
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/horeca.orders/",
        icon: "/SVGs/instagram.svg",
      },
      {
        name: "Linkedin",
        href: "https://www.linkedin.com/company/82645202",
        icon: "/SVGs/linkedin.svg",
      },
    ],
  };

  return (
    <footer
      className="bg-bluePrimary flex flex-col items-center"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        {t("footer.footer")}
      </h2>
      <div className="max-w-3.5xl items-center w-full lg:pt-12">
        <div className="flex lg:flex-row justify-between flex-col lg:gap-22 gap-6 lg:px-0 px-5">
          <div className="mt-12 md:mt-0">
            <h3 className="lg:text-base text-xl font-bold text-white font-openSans">
              {t("footer.info")}
            </h3>
            <ul className="mt-4">
              {navigation.info.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="font-openSans lg:text-base text-xl text-white hover:underline font-semibold"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="lg:text-base text-xl font-bold text-white uppercase font-openSans">
              {t("footer.hc")}
            </h3>
            <ul className="mt-4">
              {navigation.horecaOrders.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="font-openSans lg:text-base text-xl text-white hover:underline font-semibold"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden">
            <h3 className="lg:text-base text-xl font-bold text-white uppercase font-openSans">
              {t("stories")}
            </h3>
            <ul className="mt-4">
              {navigation.povesti.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="font-openSans lg:text-base text-xl text-white hover:underline font-semibold"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link to={`/${lang}`}>
            <img
              className="w-30 h-24 lg:mt-0 mt-8"
              src="/SVGs/horeca-orders-logo.svg"
              alt="Horeca Orders Logo"
            />
          </Link>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between w-full lg:items-end items-start max-w-3.5xl lg:mt-20 mt-14 lg:px-0 px-5">
        <div className="flex flex-col">
          <p className="font-openSans text-white font-bold lg:text-base text-xl">
            {t("footer.orders-in-order")}
          </p>
          <div className="flex flex-row lg:mt-1 mt-4">
            <a href="https://apps.apple.com/ro/app/horeca-orders/id1612229474">
              <img
                className="lg:h-9 h-12"
                src={t("footer.appstore-image")}
                alt="Appstore button"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.horecaorders.app">
              <img
                className="lg:h-9 h-12 ml-1"
                src={t("footer.google-play-image")}
                alt="Google play button"
              />
            </a>
          </div>
        </div>
        <img
          className="lg:h-9 h-12 mt-8 lg:mt-0"
          src="/SVGs/netopia.svg"
          alt="Appstore button"
        />
        <div className="flex space-x-3 lg:mt-0 mt-8">
          {navigation.social.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-white hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <img
                src={item.icon}
                alt={item.name}
                className="lg:h-6 lg:w-6 h-12 w-12"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-between w-full items-end max-w-3.5xl mt-16 mb-12">
        <div className="flex lg:flex-row flex-col lg:space-x-10 space-x-0 lg:px-0 px-5 lg:gap-0 gap-1">
          <p className="text-xs text-white opacity-50 font-openSans">
            {new Date().getFullYear()} &copy; {t("footer.copyright-name")}
          </p>
          <a
            className="text-xs text-white opacity-50 font-openSans"
            href="mailto:denis@horecaorders.com"
          >
            {t("footer.contact")}
          </a>
          <Link
            className="text-xs text-white opacity-50 font-openSans"
            to={`/${lang}/politica-de-confidentialitate`}
          >
            {t("footer.privacy-policy")}
          </Link>
          <Link
            className="text-xs text-white opacity-50 font-openSans"
            to={`/${lang}/termeni-conditii`}
          >
            {t("footer.terms-and-conditions")}
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
