import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import PortfolioSection from "../components/PortfolioSection";
import ContactSection from "../components/ContactSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/*<AboutSection />*/}
      {/*<PortfolioSection />*/}
      {/*<ContactSection />*/}
      {/*<Footer />*/}
    </>
  );
}
