import { Rating } from "../../../../common/Rating";

const TestimonialCard = ({ review }) => {
  return (
    <div className="p-4 md:w-1/2 w-full text-black">
      <div className="h-full  p-8 shadow-lg rounded-md border-lightyellow border-b-2">
        <div className="text-sm font-light text-gray-500 dark:text-gray-400 mb-4 text-center">
          <Rating rating={review.rating} classes="justify-center text-center" />
        </div>
        <p className="leading-relaxed mb-6">{review.content}</p>
        <div className="inline-flex items-center mt-auto">
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-semibold mb-3 text-gray-900">
              {review.author}
            </span>
            <span className="text-gray-500 text-sm uppercase">
              {review.destination}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
