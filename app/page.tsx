import Hero from "@/components/Hero";
import Navbar from "../components/Navbar";
import OurMenu from "@/components/OurMenu";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurMenu />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Contact />
      <Location />
      <Footer />
    </>
  );
}
