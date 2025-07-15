import Button from "../../common/buttons/Button";
import { IoMdArrowDropright } from "react-icons/io";

const PricingCard = ({ data }) => {
  function isEven(number) {
    return number % 2 === 0;
  }
  return (
    <div className="h-full max-w-md mx-auto w-full border border-lightyellow shadow-[6px_7px_2px_0px_#90cdf4] flex flex-col relative overflow-hidden">
      <div className={`h-[92px] relative w-fullmr-auto  bg-no-repeat bg-contain bg-left-top`} 
      style={{
        backgroundImage: `url(/icons/${isEven(data.cardNumber) ? "transformer.svg" : "accelerator.svg"})`
      }}
      >
        <div className="py-4 px-2 z-50 text-white">
          <h3 className="text-xl font-bold my-2 leading-none">{data.title}</h3>
          <h5 className="text-base leading-none">{data.category}</h5>
        </div>
      </div>
      <div className="body pt-8 pb-4 px-2">
        <h4 className="text-gray-400 text-base">
          For{" "}
          <span className={`${isEven(data.cardNumber) ? 'text-orange-700' : 'text-blue-700'} font-bold`}>
            {" "}
            {data.targetAudience}{" "}
          </span>{" "}
        </h4>
        <ul className="py-4 flex flex-col gap-2 list-inside list-disc pl-2">
          <li>
            <span className="text-lightyellow">
              {" "}
              {data.placementGuarantee}{" "}
            </span>
            {"  "}Avg. Placement Rate
          </li>
          <li>
            <span className="text-lightyellow"> {data.placedStudents} </span>
            {"  "}
            {data.tillDatePlacements}
          </li>
          <li>
            <span className="text-lightyellow"> {data.package} </span>
            {"  "}
            {data.avgPackage}
          </li>
        </ul>
        <h4 className="text-blue-500">What you will learn ?</h4>
        <ul className="py-4 pl-2 flex flex-col gap-2">
          {data.whatYouWillLearn.map((learn, i) => (
            <li key={i} className="flex gap-2">
              {" "}
              <IoMdArrowDropright size={24} className="text-gray-500" /> {learn}
            </li>
          ))}
        </ul>
        <Button
          text={`₹${data.price} Enroll Now`}
          classes="border mt-auto border-lightyellow text-lightyellow mt-5 hover:bg-lightyellow hover:text-white hover:border-transparent transition-all font-mediam text-lg px-10 w-full rounded-sm"
        />
      </div>
    </div>
  );
};

export default PricingCard;
