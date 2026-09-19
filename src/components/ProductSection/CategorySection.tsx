import { Link } from "react-router-dom";
import {
  Shirt,
  Layers,

} from "lucide-react";

import {
  tshirts,
  sweaters,
  lowers,
  hoodies,
} from "../../data/products";

const categories = [
  {
    name: "T-Shirts",
    image: tshirts[0]?.image,
    link: "#T-Shirts",
    icon: Shirt,
  },
  {
    name: "Sweaters",
    image: sweaters[0]?.image,
    link: "#Sweaters",
    icon: Layers,
  },
  {
    name: "Lowers",
    image: lowers[0]?.image,
    link: "#Lowers",
    icon: Shirt,
  },
  {
    name: "Hoodies",
    image: hoodies[0]?.image,
    link: "#Hoodies",
    icon: Shirt,
  },
];

function CategorySection() {
  return (
    <section className="bg-[#f7f7f5] px-0 m-2 pt-8 sm:px-2 lg:px-3">
 

<div className="mx-auto mb-8 max-w-2xl px-4 text-center">

<p className="mb-2 text-[20px] font-semibold uppercase tracking-[0.3em] text-[#5f0707]">
  Made for Your Style
</p>

<p className="text-sm leading-6 text-[#666666] sm:text-base">
  Discover timeless pieces, effortless comfort, and styles made to
  become a part of your everyday look.
</p>

</div>

{/* CATEGORY BOXES */}
<div className="mb-4 flex justify-center gap-2 overflow-x-auto px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-3">

  {categories.map((category) => {
    const Icon = category.icon;

    return (
      <Link
        key={category.name}
        to={category.link}
        className="group flex h-14 w-20 flex-shrink-0 flex-col items-center justify-center rounded-xl bg-pink-100 text-[#1d2733] shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:h-16 sm:w-24"
      >
        <Icon
          size={19}
          strokeWidth={1.7}
          className="mb-1 transition-transform duration-300 group-hover:scale-110"
        />

        <span className="text-[8px] font-semibold uppercase tracking-[0.08em] sm:text-[9px]">
          {category.name}
        </span>
      </Link>
    );
  })}

</div>

      {/* BIG CARD */}
      <div className="relative mx-auto w-full max-w-10xl rounded-2xl bg-white px-1 py-5 shadow-[0_8px_35px_rgba(29,39,51,0.06)] sm:px-4 sm:py-5 lg:px-5">

       


        {/* TITLE */}
        <div className="mb-8 text-center">

          <p className="mb-2 text-[15px] font-semibold uppercase tracking-[0.3em] text-[#5f0707]">
            Explore
          </p>

          <h2 className="text-2xl font-light tracking-wide text-[#1d2733] sm:text-4xl">
            All Items
          </h2>

        </div>


        {/* CIRCLE IMAGES */}
        <div className="flex gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:justify-center sm:gap-10">

          {categories.map((category) => (

            <Link
              key={category.name}
              to={category.link}
              className="group flex flex-shrink-0 items-center justify-center"
            >

              <div className="h-24 w-24 overflow-hidden rounded-full border border-[#e5e5e2] bg-[#f1f1ef] transition-all duration-300 group-hover:border-[#c8a47e] group-hover:shadow-md sm:h-28 sm:w-28 lg:h-32 lg:w-32">

                {category.image ? (
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full bg-[#f1f1ef]" />
                )}

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}

export default CategorySection;