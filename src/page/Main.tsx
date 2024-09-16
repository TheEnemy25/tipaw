import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // Підключаємо useTranslation
import CheckIcon from "../assets/svg/CheckIcon";
import CalenderIcon from "../assets/svg/CalenderIcon";
import ChevronIcon from "../assets/svg/ChevronIcon";

function Main() {
  const [isOpen, setIsOpen] = useState(true);
  const { t } = useTranslation(); // Використовуємо переклад

  return (
    <main className="pt-10 bg-gray-50 px-5 flex items-center flex-col">
      <article className="bg-white p-10 h-full w-full flex lg:justify-between lg:flex-row rounded-t-md flex-col">
        <div>
          <h1 className="text-teal-300 text-xl">
            {t("main.profileCompletion")} {/* Використовуємо переклад */}
          </h1>
          <h4 className="text-lg mt-6">{t("main.useTipaw")}</h4>
        </div>
        <div className="flex flex-col h-full lg:justify-between">
          <div className="flex lg:justify-between">
            <h1 className="text-xl mr-2 lg:mr-0">
              {t("main.completedProfile")}
            </h1>
            <h4 className="text-xl text-green-500">
              {t("main.completedPercentage")}
            </h4>
          </div>
          <div className="flex lg:justify-end w-full h-full content-end mt-10">
            {/* Bars */}
            <div className="flex rounded-md bg-green-500 px-3 w-16 h-2 mr-2"></div>
            <div className="flex rounded-md bg-green-500 px-3 w-16 h-2 mr-2"></div>
            <div className="flex rounded-md bg-green-500 px-3 w-16 h-2 mr-2"></div>
            <div className="flex rounded-md bg-green-500 px-3 w-16 h-2 mr-2"></div>
            <div className="flex rounded-md bg-green-500 px-3 w-16 h-2 mr-2"></div>
          </div>
        </div>
      </article>

      <article className="bg-white p-10 h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 shadow-sm rounded-b-md">
        {/* Cards */}
        <div className="bg-white shadow-2xl p-10 rounded-lg">
          <CheckIcon />
          <h1 className="text-xl font-bold mt-3">{t("main.verification")}</h1>
          <p className="mt-3">{t("main.verifiedAccount")}</p>
        </div>
        <div className="bg-white shadow-2xl p-10 rounded-lg">
          <CheckIcon />
          <h1 className="text-xl font-bold mt-3">{t("main.profilePicture")}</h1>
          <p className="mt-3">{t("main.addedProfilePicture")}</p>
        </div>
        <div className="bg-white shadow-2xl p-10 rounded-lg">
          <CheckIcon />
          <h1 className="text-xl font-bold mt-3">{t("main.parents")}</h1>
          <p className="mt-3">{t("main.addedParents")}</p>
        </div>
        <div className="bg-white shadow-2xl p-10 rounded-lg">
          <CheckIcon />
          <h1 className="text-xl font-bold mt-3">{t("main.litter")}</h1>
          <p className="mt-3">{t("main.createdLitter")}</p>
        </div>
      </article>

      <article className="mt-14 bg-white h-full w-full p-10">
        <h1 className="text-teal-300 text-xl font-semibold flex items-center space-x-2">
          <span className="mr-3">{t("main.announcement")}</span>
          <div className="rounded-full w-3 h-3 bg-red-600"></div>
        </h1>

        <div className="mt-5">
          <div
            className="bg-teal-300 text-white p-4 rounded-t-md cursor-pointer flex justify-between items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{t("main.whatIsTipaw")}</span>
            <span
              className={`transform transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <ChevronIcon />
            </span>
          </div>

          {isOpen && (
            <div className="bg-white border border-gray-300 p-4 rounded-b-md">
              <div className="flex items-center text-teal-400 mb-4">
                <CalenderIcon />
                <span className="flex items-center ml-3 text-xs font-thin">
                  24 January
                </span>
              </div>
              <p className="text-gray-600">
                {t("main.tipawDescription")} {/* Перекладений контент */}
              </p>
            </div>
          )}
        </div>
      </article>
    </main>
  );
}

export default Main;
