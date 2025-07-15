import RedeemCard from "./card/RedeemCard";

const HowToRedeemReward = () => {
  return (
    <section className="bg-gradient-to-r to-black from-[#0b0b3e] text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-8 text-center">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="my-4 text-2xl font-semibold text-center mx-auto tracking-tight leading-none  md:text-3xl xl:text-4xl">
            Redeem your <span className="text-darkyellow"> Rewards </span> as
            you Like
          </h2>
        </div>
        <div className="w-full flex flex-col gap-4">
          <RedeemCard
            text="Redeem Cash Directly into your Bank Account"
            img="bank.png"
            classes="bg-gradient-to-r from-indigo-600 to-fuchsia-400"
          />
          <RedeemCard
            text="iPad Pro and MacBook Pro"
            img="macbook.png"
            classes="bg-gradient-to-r from-orange-300  to-orange-700"
          />
        <div className="w-full flex md:flex-row flex-col gap-4">
          <div className="md:w-1/2 w-full ">
            <RedeemCard
              text="iPhone 14 (128 GB)"
              img="iPhone.png"
              classes="bg-gradient-to-r from-indigo-600 to-fuchsia-400"
            />
          </div>
          <div className="md:w-1/2 w-full ">
            <RedeemCard
              text="Apple Airpods Pro 2"
              img="earbuds.png"
              classes="bg-gradient-to-r from-orange-300  to-orange-700"
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default HowToRedeemReward;
