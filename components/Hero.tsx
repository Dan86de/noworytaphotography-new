import hero1 from "../public/images/hero1.png";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="lg:relative">
      <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
          <h1 className="text-4xl font-bold tracking-tight text-brand sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">
              Lass mich deine Authentizität zeigen
            </span>{" "}
          </h1>
        </div>
      </div>
      <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2 border-2 border-brand">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src={hero1}
          alt="Hero Image"
        />
      </div>
    </main>
  );
};

export default Hero;
