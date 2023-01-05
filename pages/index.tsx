import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      {/*<PortfolioSection />*/}
      <ContactSection />
      <Footer />
    </>
  );
}
