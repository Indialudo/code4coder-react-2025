import { FaArrowRight } from "react-icons/fa6";


const GradientButton = ({text, classes, Icon, onclick}) => {
  return (
    <button onClick={onclick} className={`relative inline-flex items-center justify-start p-0.5 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white ${classes}`}>
      <span className="flex flex-wrap items-center gap-2 relative px-3 py-2  hover:text-white transition-all ease-in duration-75 bg-white rounded-full group-hover:bg-opacity-0 text-sm">
     {Icon ? Icon : ""} {text}
      </span>
      <span className="px-3 rounded-full text-white">
      <FaArrowRight size={18} />

      </span>
    </button>
  );
};

export default GradientButton;
