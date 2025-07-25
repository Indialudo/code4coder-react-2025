import React, { useEffect } from "react";

const QuizNavbar = ({
  themeMode,
  setThemeMode,
  handleThemeMode,
  title,
  icon,
  iconbg,
}) => {
  useEffect(() => {
    const savedThemeMode = localStorage.getItem("themeMode");
    if (savedThemeMode) {
      setThemeMode(savedThemeMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode]);

  return (
    <nav className="flex h-[72px] items-center justify-between px-6 sm:p-16 xl:w-full xl:px-0 xl:py-20">
    {/* // <nav className="flex h-[56px] items-center justify-between px-4 sm:px-10 xl:w-full xl:px-0 xl:py-12"> */}
      {title && icon && iconbg ? (
        <section className="flex items-center justify-start gap-4 sm:gap-6">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-md sm:h-14 sm:w-14"
            style={{ backgroundColor: iconbg }}
          >
            <img src={icon} alt={title} className="h-7 w-7 sm:h-10 sm:w-10" />
          </div>
          <h1 className="text-[18px] font-medium sm:text-[28px]">{title}</h1>
        </section>
      ) : (
        <section></section>
      )}

      <section className="flex items-center gap-2 sm:gap-3">
        {themeMode === "dark" ? (
          <img
            src="/quizImg/icon-sun-light.svg"
            alt="Light Mode"
            className="h-4 w-4 sm:h-6 sm:w-6"
          />
        ) : (
          <img
            src="/quizImg/icon-sun-dark.svg"
            alt="Light Mode"
            className="h-4 w-4 sm:h-6 sm:w-6"
          />
        )}

        <div
          className="h-5 w-8 cursor-pointer rounded-full bg-purples p-1 sm:h-7 sm:w-12"
          onClick={handleThemeMode}
        >
          <div
            className={
              themeMode === "dark"
                ? "ml-auto h-3 w-3 rounded-full bg-white transition-all duration-300 ease-in-out sm:h-5 sm:w-5"
                : "mr-auto h-3 w-3 rounded-full bg-white transition-all duration-300 ease-in-out sm:h-5 sm:w-5"
            }
          ></div>
        </div>

        {themeMode === "dark" ? (
          <img
            src="/quizImg/icon-moon-light.svg"
            alt="Dark Mode"
            className="h-4 w-4 sm:h-6 sm:w-6"
          />
        ) : (
          <img
            src="/quizImg/icon-moon-dark.svg"
            alt="Dark Mode"
            className="h-4 w-4 sm:h-6 sm:w-6"
          />
        )}
      </section>
    </nav>
  );
};


export default QuizNavbar