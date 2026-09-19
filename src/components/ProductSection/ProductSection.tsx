import { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import Card from "../Card/Card";
import type { Product } from "../../data/products";

interface ProductSectionProps {
  title: string;
  products: Product[];
}

function ProductSection({
  title,
  products,
}: ProductSectionProps) {

  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -sliderRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: sliderRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      id={title}
      className="mx-auto w-full max-w-[1400px] px-3 py-3 sm:px-5 sm:py-4 lg:px-7 lg:py-5"
    >

      {/* HEADER */}
      <div className="mb-3 flex items-center justify-between">

        <div className="flex items-center gap-3">

          {/* PINK ACCENT */}
          <span className="h-7 w-1 rounded-full bg-pink-200" />

          <div>
            <p className="mb-0.5 text-[8px] font-medium uppercase tracking-[0.22em] text-[#999999]">
              Collection
            </p>

            <h2 className="text-[21px] font-semibold tracking-tight text-[#181818] sm:text-[24px]">
              {title}
            </h2>
          </div>

        </div>


        {/* ARROWS */}
        <div className="hidden gap-2 sm:flex">

          <button
            type="button"
            onClick={scrollLeft}
            aria-label={`Previous ${title}`}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dedede] bg-white text-[#222] transition-all hover:bg-[#181818] hover:text-white"
          >
            <ChevronLeft size={15} />
          </button>

          <button
            type="button"
            onClick={scrollRight}
            aria-label={`Next ${title}`}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dedede] bg-white text-[#222] transition-all hover:bg-[#181818] hover:text-white"
          >
            <ChevronRight size={15} />
          </button>

        </div>

      </div>


      {/* PRODUCTS */}
      <div className="relative">

        {/* LEFT ARROW */}
        <button
          type="button"
          onClick={scrollLeft}
          aria-label={`Previous ${title}`}
          className="absolute left-0 top-1/2 z-10 hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#dddddd] bg-white shadow-sm lg:flex"
        >
          <ChevronLeft size={16} />
        </button>


        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="flex gap-3 overflow-x-auto scroll-smooth px-0.5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-4"
        >

          {products.map((product) => (

<div
key={`${title}-${product.id}`}
className="w-[calc((100%-12px)/2)] flex-shrink-0 sm:w-[calc((100%-32px)/3)] lg:w-[calc((100%-48px)/4)]"
>

              <Card
                image={product.image}
                title={product.name}
                price={product.price}
                oldPrice={product.oldPrice}
                discount={product.discount}
                category={product.category}
                colors={[product.color]}
              />

            </div>

          ))}

        </div>


        {/* RIGHT ARROW */}
        <button
          type="button"
          onClick={scrollRight}
          aria-label={`Next ${title}`}
          className="absolute right-0 top-1/2 z-10 hidden h-9 w-9 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#dddddd] bg-white shadow-sm lg:flex"
        >
          <ChevronRight size={16} />
        </button>

      </div>

    </section>
  );
}

export default ProductSection;