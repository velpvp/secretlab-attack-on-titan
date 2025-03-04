import Image from "next/image";
import mesa from "../../../public/aot-magnus-og-pro.webp";
import mesa2 from "../../../public/MPB2-15B-AOT_08.webp";
import mesa3 from "../../../public/MAGBDL15S-AOT_08.webp";
import mousepad from "../../../public/MMAT15PU-AOT.webp";
import { HiArrowNarrowRight } from "react-icons/hi";

export function Mesa() {
  return (
    <section className="grid lg:grid-cols-2 max-md:flex-col-reverse items-center justify-center gap-5 min-h-screen pt-32 px-2 lg:px-20">
      <div className="bg-[url('/aot_chair_catalog_bg.jpg')] min-h-screen rounded-lg p-5 lg:p-10">
        <div className="border-b-2 border-gray-600 mb-5">
          <h2 className="text-[3rem] font-bold">SECRETLAB MAGNUS</h2>
          <p className="text-[1.2rem] font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Attack on Titan
            </span>{" "}
            Edition
          </p>
        </div>
        <div className="flex flex-col gap-5 mb-5">
          <div className="flex items-center justify-start gap-5 text-black bg-white p-5 rounded-lg">
            <Image
              src={mesa2}
              alt=""
              quality={100}
              className="w-full max-w-[150px]"
            />
            <div>
              <h3 className="text-[1.2rem] font-bold mb-2">
                Secretlab MAGNUS Pro
              </h3>
              <p className="mb-2">
                Sit-to-Stand Metal Desk with Magnetic Ecosystem Available in
                sizes <strong>Pro</strong> and <strong>Pro XL</strong>
              </p>
              <a
                href="#"
                className="text-[#A72A2F] font-semibold text-[1rem] tracking-widest flex items-center gap-2 duration-300 hover:gap-5"
              >
                REGISTER INTEREST{" "}
                <HiArrowNarrowRight className="text-[1.2rem]" />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-start gap-5 text-black bg-white p-5 rounded-lg">
            <Image
              src={mesa3}
              alt="Secretlab MAGNUS Metal Desk"
              quality={100}
              className="w-full max-w-[150px]"
            />
            <div>
              <h3 className="text-[1.2rem] font-bold mb-2">
                Secretlab MAGNUS Metal<br></br> Desk
              </h3>
              <p className="mb-2">with Magnetic Ecosystem</p>
              <a
                href="#"
                className="text-[#A72A2F] font-semibold text-[1rem] tracking-widest flex items-center gap-2 duration-300 hover:gap-5"
              >
                REGISTER INTEREST{" "}
                <HiArrowNarrowRight className="text-[1.2rem]" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-[2rem] font-bold mb-5">MAGNUS DESK ADD-ONS</h3>
          <div className="flex items-center justify-start flex-col gap-5 text-black bg-white p-5 rounded-lg max-w-1/3">
            <Image
              src={mousepad}
              alt="Secretlab MAGNUS Metal Desk"
              quality={100}
              className="w-full max-w-[150px]"
            />
            <div>
              <h3 className="text-[1.2rem] font-bold mb-2">
                Secretlab MAGPAD™ Desk Mat
              </h3>
              <a
                href="#"
                className="text-[#A72A2F] font-semibold text-[1rem] tracking-widest flex items-center justify-start gap-2 duration-300 hover:gap-3"
              >
                REGISTER <br></br>INTEREST{" "}
                <HiArrowNarrowRight className="text-[1.5rem]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={mesa}
        alt="Mesa Secretlab Magnus Attack on Titan Edition"
        quality={100}
        priority
        className="w-full max-w-[800pc] p-5"
      />
    </section>
  );
}
