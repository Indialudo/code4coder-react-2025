
const RedeemCard = ({text, img, classes}) => {
  return (
   
      <div className={`container px-5 md:py-8 py-4 flex flex-wrap mx-auto justify-between text-white rounded-lg ${classes}`}>
        <div className=" md:w-1/2 w-full text-left md:pr-5 md:py-0 py-5">
          <h4 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold ">{text}</h4>
        </div>
        <div className=" md:w-1/2 w-full md:px-5 md:py-0 py-5">
        <img src={`/assets/${img}`} width={300} height={300} alt={img} className="ml-auto" />
        </div>
      </div>
  );
};

export default RedeemCard;
