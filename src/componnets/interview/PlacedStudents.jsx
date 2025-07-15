import PlacedSlider from "./slider/PlacedSlider";

const PlacedStudents = () => {
  return (
    <section className="bg-gradient-to-r to-black from-[#0b0b3e] text-white border-b">
      <div className="mx-auto px-0 py-8">
        <div className="px-4">
        <h4 className="my-4 text-2xl font-semibold text-center mx-auto tracking-tight leading-none md:text-3xl xl:text-4xl">
          Our students that took the course got hired at…
        </h4>
        </div>
        <PlacedSlider />

      </div>
    </section>
  );
};

export default PlacedStudents;
