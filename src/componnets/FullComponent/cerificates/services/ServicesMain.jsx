import ServiceCard from "./ServiceCard";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { GrAtm } from "react-icons/gr";
import { FaChartLine, FaFileAlt } from "react-icons/fa";

const ServicesMain = () => {
  return (
    <div className="flex flex-wrap -m-4">
      <ServiceCard
        text="Bank Statements"
        desc="We deal with only 100% authentic Bank Statements certificates for all your desires & demands"
        icon={HiClipboardDocumentList}
      />
      <ServiceCard
        text="Experience Letter"
        desc="An Experience Certificate Assumes A Significant Part In Boosting Your Work Profile and Getting a Job."
        icon={FaEnvelopeOpenText}
      />
      <ServiceCard
        text="Form - 16"
        desc="We furnish you with valid and genuine Form - 16 Certificate that are checked from believed sources."
        icon={HiClipboardDocumentList}
      />
      <ServiceCard
        text="Pay Slips"
        desc="We provide both Soft and Hard copies of your Genuine experience certificates."
        icon={GrAtm}
      />
      <ServiceCard
        text="Relieving Letter"
        desc="A Relieving Letter Assumes A Significant Part In Boosting Your Work Profile and Getting a Job."
        icon={FaFileAlt}
      />
      <ServiceCard
        text="Hike Letter"
        desc="We Are Here To Provide You Genuine Hike Letters."
        icon={FaChartLine}
      />
    </div>
  );
};

export default ServicesMain;
