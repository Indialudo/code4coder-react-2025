import { Certificates } from "../../constant/certificates.js/data";
import CertificateCard from "./certificate/CertificateCard";


const SampleCertificates = () => {
  return (
    <section className="text-black body-font bg-gray-100 box-border py-5 w-full">
      <div className="max-w-screen-xl px-3 mx-auto">
        <h3 className="text-2xl lg:text-4xl md:text-3xl font-bold title-font mb-4 text-gray-900 capitalize text-center">
          Our Samples
        </h3>
        <div className="flex flex-wrap -m-4 mt-5">
        {
          Certificates.map((certificate, i)=>(
            <CertificateCard certificate={certificate} key={i} />
          ))
        }
         
        </div>

      </div>
    </section>
  );
};

export default SampleCertificates;
