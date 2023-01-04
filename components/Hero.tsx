import hero1 from "../public/images/hero1.png";
import Image from "next/image";

// ff-market-web font?

const Hero = () => {
  return (
    <main className="container flex flex-col-reverse h-[calc(100vh_-_64px)] md:h-[calc(100vh_-_96px)] mx-auto max-w-screen-2xl lg:landscape:flex-row lg:landscape:h-auto">
      <div className="h-1/4 flex justify-center items-center lg:landscape:h-[calc(100vh_-_96px)] lg:landscape:flex-col 2xl:landscape:h-[calc(75vh_-_64px)] 3xl:landscape:h-[calc(50vh_-_64px)]">
        <h1 className="px-2 font-headings font-bold text-brand text-center text-3xl md:portrait:text-5xl lg:portrait:text-6xl lg:landscape:text-6xl">
          Lass mich deine{" "}
          <span className="underline underline-offset-8">Authentizität </span>
          zeigen
        </h1>
        {/*<h2 className="hidden lg:landscape:block">*/}
        {/*  Ich beobachte sehr gern, was andere Menschen mit ihren Innenräumen*/}
        {/*  machen. Ich will es in der bestmöglichen Weise zeigen.*/}
        {/*</h2>*/}
      </div>
      <div className="relative w-full h-[calc(100vh_-_64px)] lg:landscape:h-[calc(100vh_-_96px)] 2xl:landscape:h-[calc(75vh_-_64px)] 3xl:landscape:h-[calc(50vh_-_64px)]">
        <Image
          src={hero1}
          className="absolute inset-0 h-full w-full object-cover -z-10"
          alt="Hero image"
        />
      </div>
    </main>
  );
};

export default Hero;
