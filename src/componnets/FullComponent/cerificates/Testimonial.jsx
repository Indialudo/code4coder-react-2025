import { placementReview } from "../../constant/data";
import TestimonialCard from "./certificate/testimonial/TestimonialCard";

const Testimonial = () => {

  const limitedReviews = placementReview.slice(0, 4);

  return (
    <section className="text-black body-font box-border py-5 w-full">
      <div className="max-w-screen-xl px-3 mx-auto">
        <h3 className="text-2xl lg:text-4xl md:text-3xl font-bold title-font mb-4 text-gray-900 capitalize text-center">
          What Our Candidates Say
        </h3>
        <div className="flex flex-wrap -m-4 text-center" >
        {limitedReviews.map((review, i)=>(
          <TestimonialCard review={review} key={i} />
        ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
