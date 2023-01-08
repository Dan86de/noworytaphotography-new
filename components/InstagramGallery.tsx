import { useEffect, useState } from "react";
import Image from "next/image";

interface Data {
  id: string;
  caption: string;
  media_url: string;
  media_type: string;
  permalink: string;
  timestamp: string;
}

//INFO data for portfolio images:
const exampleData: { data: Data[] } = {
  data: [
    {
      id: "18232092757087977",
      caption:
        "Do you dream about evenings spent by the fireplace in a beautiful, exclusive living room? \n\nThis large window makes this room even cozier and more spacious. Relax in this luxurious interior and feel at home!\n \n@lieblingsmakler @michael.rudkowski\n\n#livingroom #fireplace #interior #exclusive #windows #home #interior #interiordesign #design #luxury #luxuryhome #luxuryinterior #Wohnzimmer #Kamin #Inneneinrichtung #Exklusiv #Fenster #Zuhause #Inneneinrichtung #Innendesign #Design #Luxus #Luxushaus #Luxusinneneinrichtung #immobilienmaklerkoeln #immobilienmaklernrw #nrwfotograf #knoworyta_photo",
      media_url:
        "https://scontent-fra3-1.cdninstagram.com/v/t51.29350-15/323938835_479357984360564_4886302911829436897_n.webp?stp=dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=dqJV4DzrxUkAX9ITwja&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBcdYZ_dNiyjvmYjWWBLhEXe-Fhxl7QfHRKPW2eW8SRFw&oe=63BF73E0",
      timestamp: "2023-01-08T14:02:18+0000",
      media_type: "IMAGE",
      permalink: "https://www.instagram.com/p/CnKCS1PobjW/",
    },
    {
      id: "17991343090711035",
      caption:
        "This open kitchen and living room combo is the perfect combination of luxury and comfort. \n\nThe wooden table with the tour white chairs make this room look like the perfect place to relax or entertain guests. \n\nThe large plant in the foreground adds a natural touch to the space, making it feel even more inviting.\n\n#livingroom #plant #luxury #comfort #entertainguest #inviting #nrwfotograf #nrwinterior #nrwinbildern #cologneinterior",
      media_url:
        "https://scontent-fra3-1.cdninstagram.com/v/t51.29350-15/324297467_836910124273294_1609849687239016443_n.webp?stp=dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=cXvb2nuDJTsAX-CUJAQ&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDr6czr_H3IXq1rNtpAZfZb287db8FKc1d3pulYHmG8_A&oe=63BF5BF6",
      timestamp: "2023-01-07T18:34:56+0000",
      media_type: "IMAGE",
      permalink: "https://www.instagram.com/p/CnH8s2Orrvk/",
    },
    {
      id: "18000412075565858",
      caption:
        "Take a moment to breathe in the beauty of this living room. From the big wooden table to the cozy wool chairs, this room is a perfect place to relax and enjoy the view of the lush green garden outside the window. Time to sit back and enjoy the peace this space brings!\n\n#homesweethome #wintergarten #homedecor #homeinsporation #schöneansichten #gartenhausdeko #dekorationsidee #kamin #holzliebe #woodtable #brickwall #concreteinteriors #cozyhome #homestaging #immobilienbilder #schönwohnen #realestate #interiordesigner #interiorphotography #knoworyta_photo #inneneinrichtungideen #livingroom #nieruchomiści #zdjęciawnętrz #fotografwnętrz",
      media_url:
        "https://scontent-fra3-1.cdninstagram.com/v/t51.29350-15/320383646_559540015575435_6364540090155805451_n.webp?stp=dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=qPFu4Mg--8QAX_qd7uw&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDWVEZtYtlgJENgIkjSmWwDf5GVnyYEPTaAzLho_ndNLA&oe=63BEF041",
      timestamp: "2022-12-18T18:32:33+0000",
      media_type: "IMAGE",
      permalink: "https://www.instagram.com/p/CmUch7KLSGl/",
    },
    {
      id: "18196504159213088",
      caption:
        "Unlock your inner chef with this stunning kitchen! \n\nThe exposed stone walls and wooden elements create a rustic yet luxurious atmosphere, perfect for cooking up something special. \n\nTake advantage of the spacious island and top-of-the-line appliances to whip up something delicious!\n\n #kitchen #luxurykitchen #woodenelements #stonewalls #homemadesweets #photographyofkitchen #wood",
      media_url:
        "https://scontent-fra3-1.cdninstagram.com/v/t51.29350-15/320156434_445773221099372_7193193990739977128_n.webp?stp=dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=qiQVLAVjgmUAX8xB61n&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDhZrbudP0Or_eDm3l0EuSorkrRKgFwem0Rukoe0Ygogw&oe=63C017D4",
      timestamp: "2022-12-16T19:43:41+0000",
      media_type: "IMAGE",
      permalink: "https://www.instagram.com/p/CmPbFJ9rbd8/",
    },
    {
      id: "17967159479047052",
      caption:
        "This living space is perfect for hosting family dinners and gatherings. The rustic wooden table and black chairs provide a timeless look, while the kitchen area with its sleek silver fridge provides a modern touch. Make memories and enjoy a meal in this beautiful room. \n#dinnerparty #livingroom #homedecor #realestate #homestaging #home #interiordesigner #interiorphotography #knoworyta_photo #homestylinginfo #wohnzimmerinspirstion #schönwohnen #dekoideen #cozystyle #immobilienmaklernrw #inneneinrichtungideen #einrichtungsideenwohnen #küchentrends2022 #kitchendesign #nieruchomosci #fotografwnętrz #zdjecianieruchomosci #nieruchomościśląsk #nieruchomiscikrakow",
      media_url:
        "https://scontent-fra3-1.cdninstagram.com/v/t51.29350-15/319390179_8481247438614642_7223244879090604949_n.webp?stp=dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=FcSYMzAw2loAX87QGdv&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDxcBi77hoMmS9UDLrbZvE4Vp3GS1ev1MhccW20f5V2Pg&oe=63BFC740",
      timestamp: "2022-12-14T14:58:26+0000",
      media_type: "IMAGE",
      permalink: "https://www.instagram.com/p/CmJw2KhI-rV/",
    },
    {
      id: "17963201219286093",
      caption:
        "The black glossy stone wall in this bathroom is a showstopper! It adds a touch of glamour and sophistication to the space. \n\n#blackstone #luxeliving #bathroomdesign\n#bathroominspo #blackstone #interiordesign #modernhome #luxeliving #homedesign #luxuryhome #bathroomdecor #interiorinspo #modernbathroom #bathroomstyle #blackwalls #details #modernwohnen #knoworyta_photo\n#immobilienfotografköln\n#immobilienfoto",
      media_url:
        "https://scontent-fra3-1.cdninstagram.com/v/t51.29350-15/319813952_829997234759040_5536612383791931633_n.webp?stp=dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=GVIwdVMcue4AX-zo3lp&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDT1lVFa1cTEiPltGuHaxbyKPXp9n8M9pp11euCgPhEpA&oe=63C0397A",
      timestamp: "2022-12-12T14:44:44+0000",
      media_type: "IMAGE",
      permalink: "https://www.instagram.com/p/CmElsATouqR/",
    },
    {
      id: "17961230411150342",
      caption:
        "Dreaming in white. The perfect peaceful escape with a touch of abstract art to inspire the imagination.\n\n#sleepingroom #abstractartv #whitedecor #peacefulspace #serenebedroom #dreaminginwhite #inspiringart #creativeinteriors #artinspiration #minimalism #simplicity #beautifulbedrooms #sleepwell #whitepalette #abstractpainting",
      media_url:
        "https://scontent-fra3-1.cdninstagram.com/v/t51.29350-15/318763382_465436175790868_6565449750903564251_n.webp?stp=dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=y1hjNtxD9NMAX-ZoemL&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfC7wmiDer6O5PX98EBcOT97BnksJ0fHHy4RWRL9gzMkQA&oe=63C02F71",
      timestamp: "2022-12-11T09:55:31+0000",
      media_type: "IMAGE",
      permalink: "https://www.instagram.com/p/CmBfy16Le1y/",
    },
    {
      id: "17933332931547720",
      caption: "Some example caption",
      media_url:
        "https://scontent-fra3-1.cdninstagram.com/v/t51.29350-15/317459331_627165465832313_4883796829137637085_n.webp?stp=dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=1uLBLq2ZTN4AX9Gaq90&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAKrWigbl8St7FNzrx6U0JAH0UmXpmxjiUkA4Z0daLhTg&oe=63BEFAC3",
      timestamp: "2022-11-30T08:55:31+0000",
      media_type: "IMAGE",
      permalink: "https://www.instagram.com/p/CllELwrLA1H/",
    },
    {
      id: "17944651316413243",
      caption:
        "Cozy time....\n#realestate #home #luxuryrealestate #design #wohnzimmerdecor #wohnzimmerdesign #homedesign #schönerwohnen #livingroominterior #livingroomideas #details #dekoideen #homestaging #inneneinrichtung #innenarchitektur #homestylinginfo #whiteandblack #schickwohnen #kamin #cozytime #cozystyle #immobilienmakler #immobilien #immobilienfoto #immobilienfotograf #immobilienphotography #nieruchomosci #fotografwnętrz #zdjęcianieruchomosci",
      media_url:
        "https://scontent-fra3-1.cdninstagram.com/v/t51.29350-15/317157719_1837766829913767_1387407098226942604_n.webp?stp=dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=KHKsBysQ3mcAX_4e9en&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCWScGpVx4uPQfaR8W2w-c37VGO5gopLUY-ykF8Yinl4g&oe=63BF6A96",
      timestamp: "2022-11-29T08:26:16+0000",
      media_type: "IMAGE",
      permalink: "https://www.instagram.com/p/ClicCqZL5wo/",
    },
    {
      id: "18006489487510744",
      caption:
        "Gorgeous, minimal and clean style.\n#realestate #home #luxuryrealestate #design #wohnzimmerdecor #wohnzimmerdesign #homedesign #schönerwohnen #livingroominterior #livingroomideas #details #dekoideen #homestaging #inneneinrichtung #innenarchitektur #homestylinginfo #cozystyle #immobilienmakler #immobilien #immobilienfoto #immobilienfotograf #immobilienphotography #nieruchomosci #fotografwnętrz #zdjęcianieruchomosci",
      media_url:
        "https://scontent-fra3-1.cdninstagram.com/v/t51.29350-15/317366078_1075410056465911_7257994176134981900_n.webp?stp=dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=G7oJaDsblz0AX8XFnQp&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAWjNat3fDQI_d21jOa3dOl40Acs-XxM1CRM6KVa6WEtQ&oe=63BF1108",
      timestamp: "2022-11-28T12:46:14+0000",
      media_type: "IMAGE",
      permalink: "https://www.instagram.com/p/ClgU_4LopOA/",
    },
    {
      id: "17959173266131033",
      caption:
        "Stylish bathroom design ✨👌\n#realestate #home #luxuryrealestate #design #badezimmerinterior #badezimmerdecor #badezimmerdesign #homedesign #schönerwohnen #mybath #dekoideen #homestaging #inneneinrichtung #innenarchitektur #homestylinginfo #cozystyle #immobilienmakler #immobilien #immobilienfoto #immobilienfotograf #immobilienphotography #nieruchomosci #fotografwnętrz #zdjęcianieruchomosci",
      media_url:
        "https://scontent-fra3-1.cdninstagram.com/v/t51.29350-15/316715144_2408585582613050_5577117398792192128_n.webp?stp=dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Qgg6WqWosboAX8akdec&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCeom-Rffwk0y_DsEI259MhOAI55LOemafNL1HTz8LVTw&oe=63BED840",
      timestamp: "2022-11-23T16:18:14+0000",
      media_type: "IMAGE",
      permalink: "https://www.instagram.com/p/ClT1SQ0IBZ0/",
    },
    {
      id: "17933065694585026",
      caption:
        "A photo of a beautiful, luxurious bathroom interior.\n#realestate #home #luxuryrealestate #design #badezimmerinterior #badezimmerdecor #badezimmerdesign #homedesign #schönerwohnen #mybath #dekoideen #homestaging #inneneinrichtung #innenarchitektur #homestylinginfo #cozystyle #immobilienmakler #immobilien #immobilienfoto #immobilienfotograf #immobilienphotography #nieruchomosci #fotografwnętrz #zdjęcianieruchomosci",
      media_url:
        "https://scontent-fra3-1.cdninstagram.com/v/t51.29350-15/316149020_123214727068243_5420839589768483913_n.webp?stp=dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=mS3MOTTtG3MAX9r9Rht&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAFqlRZP7Oq-FLGK3Ia8IYgwJx9sxcBDE-sqxSK-HGXRQ&oe=63C0B90D",
      timestamp: "2022-11-21T08:27:33+0000",
      media_type: "IMAGE",
      permalink: "https://www.instagram.com/p/ClN11HVI88d/",
    },
  ],
};

const InstagramGallery = () => {
  const [data, setData] = useState<Data[] | null>(exampleData.data);
  const [isLoading, setLoading] = useState(false);

  //INFO going live we have to activate this
  // useEffect(() => {
  //   setLoading(true);
  //   fetch("/api/getInstagramPictures")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data.data as Data[]);
  //       setLoading(false);
  //     });Hi Siri
  // }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No instagram data</p>;

  return (
    <section
      className="container mx-auto max-w-screen-2xl md:px-12"
      id="portfolio"
    >
      <h1 className="hidden font-headings text-brand font-bold text-6xl lg:landscape:block mt-12">
        Portfolio
      </h1>
      <div className="grid gap-4 grid-cols-1 mt-12 md:grid-cols-3 lg:grid-cols-4 items-center">
        {data.map((data) => (
          <div key={data.id} className="relative w-full aspect-square">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              width={500}
              height={500}
              src={data.media_url}
              alt={data.caption}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramGallery;
