import Image from "next/image";
import bg from "../../../public/aot_chair_catalog_bg.jpg";
import cadeiraImg from "../../../public/collab_aot_catalog_chairs-min.png";
import feature1 from "../../../public/aot_features_armrest.svg";
import feature2 from "../../../public/aot_features_lumbar.svg";
import feature3 from "../../../public/aot_features_pillow.svg";
import feature4 from "../../../public/aot_features_seatbase.svg";

export function Comprar() {
  return (
    <section className="relative w-full pt-120 lg:pt-32 min-h-screen flex items-center justify-center p-3">
      <div className="w-full max-w-[1100px] 2xl:max-w-[1200px]">
        <Image
          src={bg}
          alt="Background Attack on Titan"
          className="w-full h-full min-h-[105vh] lg:min-h-[100px] object-cover rounded-lg"
        />
      </div>
      <div className="absolute w-full max-w-[1100px] flex items-center justify-center flex-col md:flex-row left-1/2 -translate-x-1/2">
        <Image
          src={cadeiraImg}
          alt="Cadeira Secretlab x Attack on Titan"
          quality={100}
          className="w-full max-w-[600px] p-5"
        />
        <div className="max-w-[600px] justify-start items-start p-5">
          <h2 className="font-bold text-[2.5rem] mb-2.5">
            SECRETLAB TITAN EVO
          </h2>
          <p className="text-[1.2rem] font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Attack on Titan
            </span>{" "}
            Edition
          </p>
          <p className="mb-6">
            Upholstered in Secretlab NEO™ Hybrid Leatherette Available in sizes
            Small, Regular and XL
          </p>
          <h3 className="font-bold">FEATURES</h3>
          <div className="flex flex-row gap-2">
            <Image
              src={feature1}
              alt="Imagem Feature 1"
              className="p-0 m-0 w-full h-auto max-w-[80px] duration-300 hover:bg-[#ffffff0c] rounded-[10px] cursor-pointer"
            />
            <Image
              src={feature2}
              alt="Imagem Feature 2"
              className="p-0 m-0 w-full h-auto max-w-[80px] duration-300 hover:bg-[#ffffff0c] rounded-[10px] cursor-pointer"
            />
            <Image
              src={feature3}
              alt="Imagem Feature 3"
              className="p-0 m-0 w-full h-auto max-w-[80px] duration-300 hover:bg-[#ffffff0c] rounded-[10px] cursor-pointer"
            />
            <Image
              src={feature4}
              alt="Imagem Feature 4"
              className="p-0 m-0 w-full h-auto max-w-[80px] duration-300 hover:bg-[#ffffff0c] rounded-[10px] cursor-pointer"
            />
          </div>
          <a href="#" className="text-[0.8rem] border-b-[1px] border-[#A72A2F]">
            Learn more about <strong>Secretlab TITAN Evo</strong>
          </a>
          <a href="#" className="mt-[30px] button-shop max-w-[300px]">
            <span>SHOP NOW</span>
          </a>
        </div>
      </div>
    </section>
  );
}
