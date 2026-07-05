import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Stats from "../components/Stats";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import CeoMessage from "../components/CeoMessage";
import Team from "../components/Team";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import CallButton from "../components/CallButton";
import WhatsappButton from "../components/WhatsappButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      <WhyChooseUs />
      <CeoMessage />
      <Team />
      <Projects />
      <Testimonials />
      <FAQ />
      <Contact />
      <WhatsappButton/>
      <CallButton />
      <ScrollToTop />
      <Footer />
    </>
  );
}