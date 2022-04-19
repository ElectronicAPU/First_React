import AboutUs from "../components/Aboutus";
import Banner from "../components/Banner";
import JoinUs from "../components/JoinUs";
import Navbar from "../components/Navbar/Navbar";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";
import WhatWeDo from "../components/WhatWeDo";
import Whychooseus from "../components/Whychooseus";


export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <WhatWeDo />
      <AboutUs />
      <Whychooseus />
      <Testimonials />
      <Partners />
      <JoinUs />
    </>
  );
}
