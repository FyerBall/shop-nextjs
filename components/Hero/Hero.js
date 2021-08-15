import Image from "next/image";
import HeroBG from "../../public/hero-bg.png";
function Hero() {
  return (
    <section className=" h-full flex justify-center items-center">
      <Image
        src={HeroBG}
        alt="picture of clothes"
        priority
        layout="fill"
        objectFit="cover"
        className="relative"
      />
      <div className="absolute top-0 bg-black w-full h-full bg-opacity-20"></div>

      <div className="z-10 bg-opacity-25 bg-white text-center py-2 px-3 rounded-md backdrop-filter backdrop-blur-lg shadow-xl leading-10 uppercase tracking-wider">
        <h1 className="text-5xl md:text-7xl text-white uppercase">
          free shipping
        </h1>
        <p className="text-gray-700 font-semibold">discover your new look</p>
      </div>
    </section>
  );
}

export default Hero;
