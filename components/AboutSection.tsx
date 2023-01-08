import Image from "next/image";
import aboutCollage from "../public/images/kate_bw_collage.png";

const AboutSection = () => {
  return (
    <section className="container mx-auto max-w-screen-2xl" id="about">
      <div className="px-4">
        <h2 className="hidden font-headings text-brand font-bold text-6xl lg:landscape:block lg:landscape:px-6 mt-12">
          Über-mich
        </h2>
      </div>
      <div className="lg:landscape:flex ">
        <div className="px-4 md:portrait:px-8 lg:landscape:px-12 lg:landscape:flex lg:landscape:justify-center lg:landscape:items-center">
          <div>
            <h2 className="font-headings text-brand font-bold text-4xl my-8 text-center md:portrait:text-6xl xl:landscape:text-left xl:landscape:text-5xl 2xl:landscape:text-5xl 2xl:landscape:my-12">
              Hallo, mein Name ist Kascha
            </h2>
            <p className="text-brand font-extralight tracking-tight leading-6 text-xl mb-4 md:portrait:text-2xl md:portrait:tracking-tighter ">
              Ich will dir von meiner Passion erzählen.{" "}
            </p>
            <p className="text-brand font-extralight tracking-tight leading-6 text-xl mb-4 md:portrait:text-2xl md:portrait:tracking-tighter">
              Ich bin Innenraum-Fotografin. Ich tue es, weil jeder Innenraum auf
              seine Weise einmalig und zu fotografieren wert ist. Ich möchte dir
              zeigen, wie du eine ungewöhnliche Geschichte deines Innenraumes
              mit Hilfe meines Fotoapparates erzählen kannst.{" "}
            </p>
            <p className="text-brand font-extralight tracking-tight leading-6 text-xl md:portrait:text-2xl md:portrait:tracking-tighter">
              In meiner Arbeit bemühe ich mich, jedes Detail zu beachten, weil:
            </p>
            <h2 className="font-headings text-brand font-bold text-4xl my-8 text-center md:portrait:text-6xl md:portrait:my-10 xl:landscape:text-5xl xl:landscape:pt-16 2xl:landscape:text-5xl 2xl:landscape:my-12">
              {'"der Teufel steckt im Detail"'}
            </h2>
          </div>
        </div>
        <div className="relative w-full aspect-square lg:landscape:h-[80vh] xl:landscape:h-[90vh] 3xl:landscape:h-[50vh] 3xl:landscape:w-100">
          <Image
            src={aboutCollage}
            className="absolute inset-0 h-full w-full object-contain -z-10"
            alt="Hero image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
