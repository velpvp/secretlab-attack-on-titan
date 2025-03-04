import Image from "next/image";
import bg from "../../../public/collab_aot_splash_cta-min.png";
import logoImg from "../../../public/collab_aot_sl_logo-min.png";
import cadeiraImg from "../../../public/collab_aot_splash_chairs-min.png";
import mikasaImg from "../../../public/collab_aot_splash_mikasa-min.png";
import erenImg from "../../../public/collab_aot_splash_eren-min.png";
import arminImg from "../../../public/collab_aot_splash_armin-min.png";

export function Header() {
  return (
    <header className="w-full lg:min-h-100vh bg-[#9abedb] bg-[url('/collab_aot_bg-min.jpg')] bg-cover bg-top bg-no-repeat -z-2 overflow-hidden">
      <div className="relative pt-20 flex items-center justify-center flex-col z-999 p-3">
        <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent -z-1"></div>
        <Image
          src={logoImg}
          alt="Logo Secretlab x Attack on Titan"
          priority
          data-aos="fade"
        />
        <div data-aos="fade" data-aos-delay="200">
          <div className="pt-5">
            <Image
              src={cadeiraImg}
              alt="Imagem cadeira Secretlab x Attack on Titan"
              quality={100}
              priority
            />
          </div>
          <div className="relative min-w-full lg:min-w-[500px] min-h-[200px] -mt-5 flex items-start justify-center">
            <Image
              src={bg}
              alt="background moldura attack on titan"
              className="absolute"
            />
            <h1 className="absolute max-md:-top-5 flex flex-col pt-8 font-bold text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent max-md:min-height-[200px]">
              <span className="text-[1.2rem] lg:text-2xl">
                SECRETLAB TITAN EVO
              </span>
              <span className="text-[1.6rem] lg:text-[2rem]">
                ATTACK ON TITAN EDITION
              </span>
              <a
                href="https://secretlab.co/products/titan-evo-2022-series?sku=M08-E24PU-ATKOT1X"
                className="text-[1.2rem] lg:text-2xl"
              >
                SHOP NOW
              </a>
            </h1>
          </div>
        </div>

        <div className="pb-[100px]"></div>
        <div className="absolute translate-x-[-75%] translate-y-[-20%] -z-1 hidden lg:block">
          <Image
            src={mikasaImg}
            alt="Imagem da Mikasa Ackerman"
            quality={100}
            priority
            data-aos="fade-left"
            data-aos-delay="320"
          />
        </div>
        <div className="absolute translate-x-[100%] translate-y-[-50%] -z-1 hidden lg:block">
          <Image
            src={erenImg}
            alt="Imagem do Eren Yeager"
            quality={100}
            priority
            data-aos="fade-up-right"
            data-aos-delay="320"
          />
        </div>
        <div className="absolute translate-x-[105%] translate-y-[45%] -z-1 hidden lg:block">
          <Image
            src={arminImg}
            alt="Imagem do Armin Arlert"
            quality={100}
            priority
            data-aos="fade-up-left"
            data-aos-delay="320"
          />
        </div>
      </div>
    </header>
  );
}
