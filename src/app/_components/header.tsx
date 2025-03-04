import Image from "next/image";
import logoImg from "../../../public/collab_aot_sl_logo-min.png";
import cadeiraImg from "../../../public/collab_aot_splash_chairs-min.png";
import mikasaImg from "../../../public/collab_aot_splash_mikasa-min.png";
import erenImg from "../../../public/collab_aot_splash_eren-min.png";
import arminImg from "../../../public/collab_aot_splash_armin-min.png";

export function Header() {
  return (
    <header className="w-full lg:min-h-100vh bg-[url('/collab_aot_bg-min.jpg')] bg-cover bg-top bg-no-repeat -z-2 p-3">
      <div className="relative pt-20 flex items-center justify-center flex-col z-999">
        <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent -z-1"></div>
        <Image src={logoImg} alt="Logo Secretlab x Attack on Titan" priority />
        <div className="pt-5">
          <Image
            src={cadeiraImg}
            alt="Imagem cadeira Secretlab x Attack on Titan"
            quality={100}
            priority
          />
        </div>
        <div className="min-w-[105%] lg:min-w-[500px] min-h-[200px] -mt-5 flex items-start justify-center bg-[url('/collab_aot_splash_cta-min.png')] bg-[100%] bg-no-repeat">
          <h1 className="flex flex-col pt-8 font-bold text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            <span className="text-2xl">SECRETLAB TITAN EVO</span>
            <span className="text-[2rem]">ATTACK ON TITAN EDITION</span>
            <a
              href="https://secretlab.co/products/titan-evo-2022-series?sku=M08-E24PU-ATKOT1X"
              className="text-2xl"
            >
              SHOP NOW
            </a>
          </h1>
        </div>
        <div className="pb-[100px]"></div>
        <div className="absolute translate-x-[-75%] translate-y-[-20%] -z-1 hidden lg:block">
          <Image
            src={mikasaImg}
            alt="Imagem da Mikasa Ackerman"
            quality={100}
            priority
          />
        </div>
        <div className="absolute translate-x-[100%] translate-y-[-50%] -z-1 hidden lg:block">
          <Image
            src={erenImg}
            alt="Imagem do Eren Yeager"
            quality={100}
            priority
          />
        </div>
        <div className="absolute translate-x-[105%] translate-y-[45%] -z-1 hidden lg:block">
          <Image
            src={arminImg}
            alt="Imagem do Armin Arlert"
            quality={100}
            priority
          />
        </div>
      </div>
    </header>
  );
}
