import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Logo from "../assets/img/buty.png";
import Hero2 from "../assets/img/jacketH.png";
import Hero3 from "../assets/img/sweaterH.png";
import Hero4 from "../assets/img/WholeH.png";

const Hero = () => {
  const [slide, setSlide] = useState(0);

  const images = [Logo, Hero2, Hero3, Hero4];

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlide((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearTimeout(timer);
  }, [slide]);

  return (
    <section className="relative h-auto min-h-[650px] overflow-hidden bg-pink-100 sm:h-[65vh] sm:min-h-[480px] lg:h-[70vh] lg:min-h-[520px]">

      {/* ================= FIRST SLIDE ================= */}
      <div
        className={`absolute inset-0 transition-transform duration-2000 ease-in-out ${
          slide === 0 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
       <div className="mx-auto flex min-h-[650px] max-w-7xl flex-col-reverse items-center justify-center gap-2 px-4 py-4 sm:min-h-0 sm:gap-3 sm:px-8 sm:py-6 lg:flex-row lg:justify-between lg:gap-12 lg:px-10 lg:py-0">
{/* TEXT SECTION */}
<div className="flex w-full flex-col justify-center text-center lg:w-1/2 lg:text-left">

  <div className="flex items-center justify-center pt-10 text-xs font-semibold uppercase tracking-wide sm:text-sm lg:justify-start">
    <span className="mr-3 h-[2px] w-8 bg-red-500 sm:mr-4 sm:w-10"></span>
    New Trend
  </div>

  <h1 className="mt-2 mb-3 text-3xl font-light leading-[1.05] sm:mt-4 sm:mb-5 sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]">
    R N Son Fashion Industry
  </h1>

  <Link
    to="/products"
    className="self-center border-b-2 border-black pb-1 text-xs font-semibold uppercase transition duration-300 hover:border-red-500 hover:text-red-500 sm:text-sm lg:self-start"
  >
    Discover More
  </Link>

</div>

{/* IMAGE */}
<div className="flex w-full items-center justify-center lg:w-1/2 lg:justify-end">
  <img
    src={Logo}
    alt="R N Son Fashion"
    className="h-[340px] w-auto object-contain sm:h-[380px] md:h-[420px] lg:h-[500px] xl:h-[560px]"
  />
</div>

</div>
      </div>

    
{/* IMAGE SLIDES */}
{images.slice(1).map((image, index) => {
  const actualIndex = index + 1;

  return (
    <div
      key={image}
      className={`absolute inset-0 flex items-center justify-center bg-white transition-transform duration-1000 ease-in-out ${
        slide === actualIndex
          ? "translate-x-0"
          : slide < actualIndex
          ? "translate-x-full"
          : "-translate-x-full"
      }`}
    >
      <img
        src={image}
        alt="R N Son Fashion"
        className="h-full w-full object-fill"
      />
    </div>
  );
})}

    </section>
  );
};

export default Hero;