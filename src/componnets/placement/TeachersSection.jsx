
import CommunityCard from "./CommunityCard";
import TeachersCard from "./TeachersCard";

const TeachersSection = () => {
  return (
    <section className="bg-gray-100 box-border  py-10 px-2 overflow-x-hidden">
      <TeachersCard
        title="100% Job Assurance with AlmaX Career Track"
        head="Take a moonshot at your tech career"
        desc="Explore our courses to enroll today"
        courses="Explore courses"
        secondaryBtn="Talk to admission team" primaryHrf="#" secondaryHrf="#" />
      <CommunityCard />
    </section>
  );
};

export default TeachersSection;
