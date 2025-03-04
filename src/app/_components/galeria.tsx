import img from "../../../public/collab_aot_gallery_05-min.webp";
import img2 from "../../../public/collab_aot_galley_03-min.webp";
import img3 from "../../../public/collab_aot_gallery_06-min.webp";
import img4 from "../../../public/collab_aot_galley_01-min.webp";
import Image from "next/image";

export function Galeria() {
  return (
    <section
      className="w-full object-cover mt-32 grid lg:grid-cols-4 duration-300 group"
      data-aos="fade"
    >
      <Image
        src={img}
        alt="Secretlab x Attack on Titan"
        quality={100}
        className="w-full h-full object-cover border-[1px] border-gray-500 duration-300 group-hover:brightness-[40%] hover:brightness-100"
      />
      <Image
        src={img2}
        alt="Secretlab x Attack on Titan"
        quality={100}
        className="w-full h-full object-cover border-[1px] border-gray-500 duration-300 group-hover:brightness-[40%] hover:brightness-100"
      />
      <Image
        src={img3}
        alt="Secretlab x Attack on Titan"
        quality={100}
        className="w-full h-full object-cover border-[1px] border-gray-500 duration-300 group-hover:brightness-[40%] hover:brightness-100"
      />
      <Image
        src={img4}
        alt="Secretlab x Attack on Titan"
        quality={100}
        className="w-full h-full object-cover border-[1px] border-gray-500 duration-300 group-hover:brightness-[40%] hover:brightness-100"
      />
    </section>
  );
}
