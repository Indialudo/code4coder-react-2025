import InternshipTable from "./InternshipTable";

const InternshipBatches = () => {
  return (
    <section className="bg-gray-100 text-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <h2 className="my-4 text-2xl font-semibold text-center mx-auto tracking-tight leading-none md:text-3xl xl:text-4xl">
          New Upcoming Internship Batches information:👨🏻‍🎓
        </h2>
        <InternshipTable />
      </div>
    </section>
  );
};

export default InternshipBatches;
