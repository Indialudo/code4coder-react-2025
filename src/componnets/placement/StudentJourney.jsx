import GridSlider from "./sliders/GridSlider";

const StudentJourney = () => {
  return (
      <section className="bg-gray-100 box-border  py-8 overflow-x-hidden">
        <div className="container md:px-5 max-w-7xl mx-auto px-2">
          <h3 className="text-1xl lg:text-4xl text-center md:text-4xl sm:text-3xl  font-bold title-font mb-4 text-gray-900 capitalize">
            Take a peek into the journeys of our students & Professionals
          </h3>
          <GridSlider />
        </div>
      </section>
  );
};
// 
export default StudentJourney;
