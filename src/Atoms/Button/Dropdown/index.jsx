import React, { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { languages } from "App";
import useDesktopCheck from "helpers/useDesktopCheck";

export const Icon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 51 51"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50 25.338c-.054-6.206-2.395-12.412-7.186-17.148-4.628-4.628-10.78-7.186-17.312-7.186-6.533 0-12.685 2.558-17.312 7.186a24.492 24.492 0 0 0-7.187 17.148v.327C1.058 31.871 3.4 38.077 8.19 42.814 12.817 47.44 18.969 50 25.502 50c6.533 0 12.684-2.559 17.312-7.186A24.495 24.495 0 0 0 50 25.665v-.327zm-8.22 14.59a25.595 25.595 0 0 0-4.737-3.32c.763-2.94 1.252-6.26 1.361-9.745h8.82c-.273 4.682-2.124 9.31-5.444 13.065zm-38-13.065h8.82c.109 3.538.598 6.805 1.36 9.745-1.687.87-3.266 2.014-4.736 3.32-3.32-3.756-5.171-8.383-5.444-13.065zm5.444-15.788a25.595 25.595 0 0 0 4.737 3.321c-.817 2.94-1.252 6.206-1.361 9.745H3.78c.273-4.682 2.124-9.31 5.444-13.066zm14.917 3.43c-2.34-.164-4.682-.654-6.914-1.579 1.633-4.79 4.083-8.166 6.914-8.982v10.56zm0 2.722v6.914h-8.82c.11-3.049.49-5.989 1.144-8.602 2.45.98 5.063 1.524 7.676 1.688zm0 9.636v6.914c-2.613.163-5.226.707-7.676 1.687-.653-2.613-1.035-5.553-1.144-8.601h8.82zm0 9.636V47.06c-2.831-.816-5.28-4.246-6.914-8.982 2.232-.926 4.573-1.416 6.914-1.58zm2.722 0c2.34.163 4.682.653 6.914 1.578-1.633 4.791-4.083 8.166-6.914 8.983V36.499zm0-2.722v-6.914h8.82c-.11 3.048-.49 5.988-1.144 8.601-2.45-.98-5.063-1.524-7.676-1.687zm0-9.636v-6.914c2.613-.164 5.226-.708 7.676-1.688.653 2.613 1.035 5.553 1.144 8.602h-8.82zm0-9.636V3.943c2.831.817 5.28 4.247 6.914 8.983-2.232.925-4.573 1.415-6.914 1.579zm5.716-9.582a21.918 21.918 0 0 1 7.295 4.247c-1.143.98-2.34 1.85-3.593 2.558-.98-2.722-2.232-5.063-3.702-6.805zm-17.802 6.805a20.55 20.55 0 0 1-3.593-2.558 21.923 21.923 0 0 1 7.295-4.247c-1.524 1.742-2.776 4.083-3.702 6.805zm0 27.547c.98 2.722 2.233 5.008 3.648 6.805a21.918 21.918 0 0 1-7.295-4.246c1.143-.98 2.34-1.851 3.647-2.56zm21.45 0a20.55 20.55 0 0 1 3.593 2.559 21.923 21.923 0 0 1-7.295 4.246c1.524-1.742 2.776-4.083 3.702-6.805zm2.177-15.134c-.108-3.539-.544-6.805-1.36-9.745 1.687-.871 3.266-2.014 4.735-3.321 3.321 3.756 5.118 8.384 5.444 13.066h-8.819z"
      fill="currentColor"
    />
  </svg>
);

const Dropdown = ({ children, ...props }) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const isOnDesktop = useDesktopCheck();
  console.log(isOnDesktop);
  useEffect(() => {
    i18n.on("languageChanged", (lang) => {
      setCurrentLanguage(lang);
    });
  }, [i18n]);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={`flex items-center w-full justify-center rounded-m  
            ${props.restaurant && isOnDesktop && "text-bluePrimary"} 
            ${props.home && isOnDesktop && "text-white"} 
            ${props.supplier && isOnDesktop && "text-black"}
            ${!isOnDesktop && "text-white"}`}
        >
          <div className="w-4 h-4 mr-2 ">
            <Icon />
          </div>

          <span
            className={` ${
              props.restaurant && isOnDesktop && "text-bluePrimary"
            } 
            ${props.home && isOnDesktop && "text-white"} 
            ${props.supplier && isOnDesktop && "text-black"} ${
              !isOnDesktop && "text-white"
            } uppercase font-openSans`}
          >
            {i18n.language}
          </span>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute z-10 mt-4 ${
            isOnDesktop ? "w-28 right-0" : "w-auto -left-0.5"
          } origin-top-right rounded-md 
          ${
            (props.restaurant && isOnDesktop && "bg-greyBg") ||
            (props.home && isOnDesktop && "bg-bluePrimary text-white") ||
            (props.supplier && isOnDesktop && "bg-white") ||
            (!isOnDesktop && "bg-white")
          }
          shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          <div className="py-1">
            {languages.map(({ code, name }) => {
              return (
                <Menu.Item key={code}>
                  <div
                    onClick={() => i18n.changeLanguage(code)}
                    className={`${
                      code === currentLanguage
                        ? ` ${
                            props.home && isOnDesktop && "text-yellowButton"
                          } ${
                            props.restaurant &&
                            isOnDesktop &&
                            "text-bluePrimary"
                          } ${
                            props.supplier && isOnDesktop && "text-bluePrimary"
                          }`
                        : ""
                    } ${
                      !isOnDesktop ? "uppercase" : ""
                    } block px-4 py-2 text-sm cursor-pointer 
                    ${
                      props.restaurant &&
                      isOnDesktop &&
                      "hover:bg-bluePrimary hover:text-white"
                    }  
                    ${
                      props.home &&
                      isOnDesktop &&
                      "hover:bg-yellowButton hover:text-gray-900 text-white"
                    }  
                    ${
                      props.supplier &&
                      isOnDesktop &&
                      "hover:bg-bluePrimary hover:text-white"
                    }  
                    `}
                  >
                    {!isOnDesktop ? code : name}
                  </div>
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
