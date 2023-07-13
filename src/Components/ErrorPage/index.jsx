import React from "react";
import { useTranslation } from "react-i18next";

function ErrorPage() {
  const { t } = useTranslation("translation");
  return (
    <>
      <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-shrink-0 justify-center">
            <a href="/" className="inline-flex">
              <span className="sr-only">{t("error-page.name")}</span>
              <img
                src={"SVGs/horeca-orders-logo-yellow.svg"}
                alt="Logo of Horeca Orders"
              />
            </a>
          </div>
          <div className="py-12">
            <div className="text-center">
              <p className="text-8xl font-bold text-bluePrimary">
                {t("error-page.error-number")}
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {t("error-page.error")}
              </h1>
              <p className="mt-2 text-base text-gray-500">
                {t("error-page.error-description")}
              </p>
              <div className="mt-6">
                <a
                  href="/"
                  className="text-base font-medium text-bluePrimary hover:text-indigo-500"
                >
                  {t("error-page.go-home")}
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default ErrorPage;
