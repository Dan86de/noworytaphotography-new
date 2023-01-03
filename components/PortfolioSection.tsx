import Image from "next/image";
import aboutCollage from "../public/images/kate_bw_collage.png";

const PortfolioSection = () => {
  return (
    <section className="container mx-auto max-w-screen-2xl ">
      <div className="px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-brand font-headings">
          Portfolio
        </h2>
      </div>
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center">
        <h1>Here portfolio bilder</h1>
      </div>
    </section>
  );
};

export default PortfolioSection;
