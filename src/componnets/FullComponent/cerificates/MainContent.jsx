import Footer from "../../footer/Footer"
import Navbar from "../../header/NavBar"
import Documents from "./Documents"
import Hero from "./Hero"
import OurServices from "./OurServices"
import SampleCertificates from "./SampleCertificates"
import Testimonial from "./Testimonial"
import WhytoChoose from "./WhytoChoose"

const MainContent = () => {
  return (
    <div className="overflow-x-hidden box-border">
      <Navbar/>
      <Hero />
      <Documents />
      <OurServices />
      <WhytoChoose />
      <SampleCertificates />
      <Testimonial />
      <Footer/>
    </div>
  )
}

export default MainContent