import Image from "next/image";
import cadeiraImg from "../../../public/aot_feature_1.webp";
import cadeiraImg2 from "../../../public/aot_feature_2.webp";

export function SobreCadeira() {
  return (
    <section className="min-h-screen p-3">
      <div className="pt-32 flex items-center justify-center flex-col lg:flex-row gap-8">
        <div className="w-full max-w-[450px] clip-path-container">
          <div className="clip-path-wrapper">
            <Image
              src={cadeiraImg}
              alt="Imagem cadeira Secretlab x Attack on Titan"
              className="w-full clip-path-img"
            />
          </div>
        </div>

        <div className="w-full max-w-[450px] flex flex-col gap-[25px]">
          <h2 className="font-bold text-[1.2rem] tracking-widest">
            BRING HOPE TO HUMANITY
          </h2>
          <p className="font-semibold text-[0.9rem]">
            Upholstered in Secretlab NEO™ Hybrid Leatherette, the
            <span className="text-[#C4AD58]">
              {" "}
              Secretlab TITAN Evo Attack on Titan Edition{" "}
            </span>
            features harness strap detailing and khaki microsuede panels along
            its side wings, and “The Wings of Freedom” insignia emblazoned on
            both sides of the chair’s backrest.
          </p>
        </div>
      </div>
      <div className="pt-32 flex items-center justify-center gap-8 flex-col lg:flex-row-reverse">
        <div className="w-full max-w-[450px] clip-path-container">
          <div className="clip-path-wrapper">
            <Image
              src={cadeiraImg2}
              alt="Imagem cadeira Secretlab x Attack on Titan"
              className="w-full clip-path-img"
            />
          </div>
        </div>

        <div className="w-full max-w-[450px] flex flex-col gap-[25px]">
          <h2 className="font-bold text-[1.2rem] tracking-widest">
            GEAR UP TO LEAD THE CHARGE
          </h2>
          <p>
            Cloaked in dark military green, the{" "}
            <span className="text-[#C4AD58]">
              Secretlab MAGPAD™ Desk Mat Attack on Titan Edition
            </span>{" "}
            is the perfect finish for a battlestation worthy of the bravest and
            most honorable Scouts. Also available in 1.77m (70”) for{" "}
            <span className="text-[#C4AD58]">Secretlab MAGNUS Pro XL</span>,
            reclaim your space and elevate your everyday with the ultimate
            sit-to-stand metal desk.
          </p>
        </div>
      </div>
    </section>
  );
}
