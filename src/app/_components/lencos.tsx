import Image from "next/image";
import bg from "../../../public/collab_aot_wipes_bg-min.jpg";
import lencoImg from "../../../public/collab_aot_wipes-min.png";

export function Lencos() {
  return (
    <section className="relative w-full pt-32 min-h-screen flex items-center justify-center p-3">
      <div className="w-full max-w-[850px] lg:min-h-0 2xl:max-w-[950px] clip-path-container">
        <div className="clip-path-wrapper">
          <Image
            src={bg}
            alt="Background Attack on Titan"
            className="w-full h-full min-h-[800px] lg:min-h-[350px] clip-path-img object-cover"
          />
        </div>
      </div>
      <div className="absolute w-full max-w-[833px] max-md:top-50 max-md:text-center max-md:flex max-md:justify-center">
        <div className="max-w-[400px] lg:pl-15">
          <p className="text-[0.9rem] font-semibold mb-6">
            Every Secretlab Attack on Titan Edition chair comes with a pack of
            <span className="text-[#C4AD58] drop-shadow-xs">
              {" "}
              Secretlab Leather Wipes Attack on Titan Edition
            </span>
            . Specially formulated to keep chairs upholstered in Secretlab NEO™
            Hybrid Leatherette and MAGPAD™ Desk Mats in pristine condition.
            Captain Levi would only be so proud.
          </p>
          <div className="w-full flex max-md:justify-center">
            <a href="#" className="button-shop max-w-[300px] mb-5">
              <span>REGISTER INTEREST</span>
            </a>
          </div>
          <p className="text-[0.9rem]">
            Currently not available in your region
          </p>
        </div>
        <div>
          <Image
            src={lencoImg}
            alt="Lenços Attack on Titan"
            quality={100}
            className="absolute w-full max-w-[383px] top-80 max-md:left-1/2 max-md:-translate-x-1/2 lg:-top-30 lg:right-0"
          />
        </div>
      </div>
    </section>
  );
}
