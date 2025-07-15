import ServicesMain from "./services/ServicesMain";

const OurServices = () => {
  return (
    <section className="text-black body-font bg-gray-100 box-border  py-5 ">
      <div className="max-w-screen-xl px-3 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <p className="text-darkyellow text-center">
            Build Your Dream Job By Getting
          </p>
          <h3 className="text-2xl lg:text-5xl text-center md:text-4xl sm:text-3xl  font-bold title-font mb-4 text-gray-900 capitalize">
            Our Services
          </h3>
        </div>
       <ServicesMain />
      </div>
    </section>
  );
};

export default OurServices;
