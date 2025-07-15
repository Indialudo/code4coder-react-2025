import FirstSection from "./whytochoose/FirstSection";
import FourthSection from "./whytochoose/FourthSection";
import SecondSection from "./whytochoose/SecondSection";
import ThirdSection from "./whytochoose/ThirdSection";

const WhytoChoose = () => {
  return (
    <section className="text-black body-font box-border  py-5 ">
      <div className="max-w-screen-xl px-3 mx-auto">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
      </div>
    </section>
  );
};

export default WhytoChoose;
