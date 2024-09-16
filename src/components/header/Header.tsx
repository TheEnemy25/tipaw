import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import BellIcon from "../../assets/svg/BellIcon";
import Avatar from "../../assets/images/Avatar.png";
import ChevronIcon from "../../assets/svg/ChevronIcon";

function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-white text-lg h-16 flex items-center justify-between px-5 py-3 shadow-sm">
      <div className="text-xl font-semibold">{t("header.title")}</div>

      <div
        className="md:hidden cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <ChevronIcon />
      </div>

      {/* mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white w-full h-full flex flex-col justify-center items-center p-4 relative">
            <button
              className="absolute top-5 right-5"
              onClick={() => setIsMenuOpen(false)}
            >
              <ChevronIcon />
            </button>

            <div className="flex flex-col items-center space-y-6">
              <div className="flex items-center space-x-4">
                <span
                  className={
                    i18n.language === "en"
                      ? "text-blue-400 cursor-pointer text-2xl"
                      : "cursor-pointer text-2xl"
                  }
                  onClick={() => handleLanguageChange("en")}
                >
                  ENG
                </span>
                <span className="text-blue-400 text-2xl">•</span>
                <span
                  className={
                    i18n.language === "uk"
                      ? "text-blue-400 cursor-pointer text-2xl"
                      : "cursor-pointer text-2xl"
                  }
                  onClick={() => handleLanguageChange("uk")}
                >
                  UA
                </span>
              </div>

              <button className="text-2xl">
                <BellIcon />
              </button>

              <div className="flex items-center space-x-4">
                <img
                  src={Avatar}
                  alt="Avatar"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <span className="font-medium text-gray-700 text-2xl">
                  John Smith
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* bigscreens */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="flex items-center space-x-2 mr-3">
          <span
            className={
              i18n.language === "en"
                ? "text-blue-400 cursor-pointer"
                : "cursor-pointer"
            }
            onClick={() => handleLanguageChange("en")}
          >
            ENG
          </span>
          <span className="text-blue-400">•</span>
          <span
            className={
              i18n.language === "uk"
                ? "text-blue-400 cursor-pointer"
                : "cursor-pointer"
            }
            onClick={() => handleLanguageChange("uk")}
          >
            UA
          </span>
        </div>

        <button className="mx-3">
          <BellIcon />
        </button>

        <div className="flex items-center space-x-2">
          <img
            src={Avatar}
            alt="Avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-medium text-gray-700">John Smith</span>
          <div className="cursor-pointer">
            <ChevronIcon />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
