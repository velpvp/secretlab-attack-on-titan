import Image from "next/image";
import bg from "../../../public/collab_aot_wipes_bg-min.jpg";
import lencoImg from "../../../public/collab_aot_wipes-min.png";

export function Lencos() {
  return (
    <section className="relative w-full pt-32 min-h-screen flex items-center justify-center p-3">
      <div
        className="w-full max-w-[850px] lg:min-h-0 2xl:max-w-[950px] clip-path-container"
        data-aos="fade"
      >
        <div className="clip-path-wrapper">
          <Image
            src={bg}
            alt="Background Attack on Titan"
            className="w-full h-full min-h-[800px] lg:min-h-[350px] clip-path-img object-cover"
          />
        </div>
      </div>
      <div className="absolute w-full max-w-[833px] max-lg:top-50 max-lg:text-center max-lg:flex max-lg:justify-center">
        <div className="w-full max-w-[400px] lg:pl-15 flex items-center justify-center flex-col">
          <p
            className="text-[0.9rem] font-semibold mb-6 max-md:max-w-[300px]"
            data-aos="fade"
            data-aos-delay="100"
          >
            Every Secretlab Attack on Titan Edition chair comes with a pack of
            <span className="text-[#C4AD58] drop-shadow-xs">
              {" "}
              Secretlab Leather Wipes Attack on Titan Edition
            </span>
            . Specially formulated to keep chairs upholstered in Secretlab NEO™
            Hybrid Leatherette and MAGPAD™ Desk Mats in pristine condition.
            Captain Levi would only be so proud.
          </p>
          <div
            className="w-full flex max-lg:justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a href="#" className="button-shop max-w-[300px] mb-5">
              <span>REGISTER INTEREST</span>
            </a>
          </div>
          <p className="text-[0.9rem]" data-aos="fade" data-aos-delay="400">
            Currently not available in your region
          </p>
        </div>
        <div>
          <Image
            src={lencoImg}
            alt="Lenços Attack on Titan"
            quality={100}
            className="absolute w-full max-w-[383px] top-80 max-lg:left-1/2 max-lg:-translate-x-1/2 lg:-top-30 lg:right-0"
            data-aos="fade-down"
            data-aos-delay="500"
          />
        </div>
      </div>
    </section>
  );
}
