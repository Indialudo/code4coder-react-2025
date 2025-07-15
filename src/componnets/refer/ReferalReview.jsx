
import RefereReviewSlider from "./slider/RefereReviewSlider";


const ReferalReview = () => {
  return (
    <section className="bg-gray-100 text-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="my-4 text-2xl font-semibold text-center mx-auto tracking-tight md:text-3xl xl:text-4xl ">
        Our students are earning up to <span className="text-white bg-darkyellow px-4"> Rs. 2,00,000 per month </span>
        </h2>
        </div>
        <RefereReviewSlider />
      </div>
    </section>
  );
};

export default ReferalReview;
