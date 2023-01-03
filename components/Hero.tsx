import hero1 from "../public/images/hero1.png";
import Image from "next/image";

// ff-market-web font?

const Hero = () => {
  return (
    <main className="container mx-auto max-w-screen-2xl flex flex-col-reverse items-center justify-center sm:flex-row">
      <div className="w-full tracking-tight px-4 sm:w-1/2 sm:px-6">
        <h1 className="font-headings text-4xl font-bold text-brand mt-8 sm:mt-0 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl ">
          Lass mich deine{" "}
          <span className="underline-offset-2 underline underline-offset-8">
            Authentizität{" "}
          </span>
          zeigen
        </h1>
        <h2 className="mt-6 sm:mt-12 text-2xl font-light leading-6 italic text-brand sm:text-2xl md:text-4xl lg:text-2xl xl:text-3xl ">
          Ich beobachte sehr gern, was andere Menschen mit ihren Innenräumen
          machen. Ich will es in der bestmöglichen Weise zeigen.
        </h2>
      </div>
      <div className="w-full sm:w-1/2">
        <Image src={hero1} alt="Hero image" />
      </div>
    </main>
  );
};

export default Hero;
