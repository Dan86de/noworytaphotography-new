import Image from "next/image";
import aboutCollage from "../public/images/kate_bw_collage.png";

const AboutSection = () => {
  return (
    <section className="container mx-auto max-w-screen-2xl ">
      <div className="px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-brand font-headings">
          Über-mich
        </h2>
      </div>
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center">
        <div className="px-4 sm:px-6  w-full tracking-tight px-4 md:w-1/2">
          <h2 className="text-4xl font-bold text-brand text-center font-headings">
            Hallo, mein Name ist Kascha
          </h2>
          <p>
            Ich will dir von meiner Passion erzählen. Ich bin
            Innenraum-Fotografin. Ich tue es, weil jeder Innenraum auf seine
            Weise einmalig und zu fotografieren wert ist. Ich möchte dir zeigen,
            wie du eine ungewöhnliche Geschichte deines Innenraumes mit Hilfe
            meines Fotoapparates erzählen kannst. In meiner Arbeit bemühe ich
            mich, jedes Detail zu beachten, weil:
          </p>
          <h2 className="text-4xl font-bold text-brand text-center font-headings">
            "der Teufel steckt im Detail"
          </h2>
        </div>
        <div className="w-full md:w-1/2 sm:px-6">
          <Image
            src={aboutCollage}
            className="w-full"
            alt="Picture with Kasia"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
