import React from "react";

const ScorePage = ({ title, icon, iconbg, score, numberOfQuestions }) => {
  return (
    <section className="mt-6 px-4 sm:px-10 xl:mt-0 xl:flex xl:px-0" style={{ height: "100vh" }}>
      <div className="xl:w-1/2 mb-8 xl:mb-0">
        <h2 className="text-[28px] font-light leading-none sm:text-[48px]">
          Quiz completed
        </h2>
        <h3 className="text-[28px] font-medium leading-snug sm:text-[48px]">
          You scored...
        </h3>
      </div>

      <div className="xl:w-1/2 xl:space-y-8 flex flex-col items-center">
        <section className="mb-4 mt-6 flex flex-col items-center rounded-xl bg-white p-6 drop-shadow-sm dark:bg-navy sm:p-10 xl:mb-0 xl:mt-0 xl:w-[520px]">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-md sm:h-12 sm:w-12"
              style={{ backgroundColor: iconbg }}
            >
              <img
                src={icon}
                alt={title}
                className="h-6 w-6 sm:h-8 sm:w-8"
              />
            </div>
            <h1 className="text-[16px] font-medium sm:text-[22px]">
              {title}
            </h1>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-[72px] font-semibold sm:text-[100px]">
              {score}
            </h4>
            <h5 className="text-base font-light dark:text-lightBluish sm:text-xl">
              out of {numberOfQuestions}
            </h5>
          </div>
        </section>

        <button
          className="hover:bg-btnHover h-12 w-full rounded-lg bg-purples py-1.5 text-sm font-semibold text-white transition-all duration-200 ease-in-out sm:h-[72px] sm:rounded-2xl sm:text-[22px] xl:w-[520px]"
          onClick={() => (window.location.href = "/")}
        >
          Play Again
        </button>
      </div>
    </section>
  );
};

export default ScorePage;
