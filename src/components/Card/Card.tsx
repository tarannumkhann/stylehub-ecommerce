import { Heart, ShoppingBag } from "lucide-react";

interface CardProps {
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  discount: number;
  category?: string;
  rating?: number;
  colors?: string[];
  badge?: string;
}

function Card({
  image,
  title,
  price,
  oldPrice,
  discount,
  category = "Fashion",
  badge,
}: CardProps) {
  return (
    <article className="group w-full">

      {/* IMAGE CARD */}
      <div className="relative aspect-[4/4.1] overflow-hidden rounded-2xl bg-[#f7f4f2] shadow-[0_3px_12px_rgba(0,0,0,0.06)]">

        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Discount */}
        <span className="absolute left-3 top-3 rounded-full bg-[#171717] px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-white">
          {badge || `${discount}% OFF`}
        </span>

        {/* Wishlist */}
        <button
          type="button"
          aria-label={`Add ${title} to wishlist`}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[#171717] shadow-sm transition-all duration-300 hover:bg-[#171717] hover:text-white"
        >
          <Heart
            size={17}
            strokeWidth={1.7}
          />
        </button>

      </div>


      {/* PRODUCT DETAILS - IMAGE CARD SEPARATE */}
      <div className="px-1 pt-3">

        {/* Category */}
        <p className="mb-1 text-[8px] font-medium uppercase tracking-[0.18em] text-[#999999]">
          {category}
        </p>

        {/* Product Name */}
        <h3 className="truncate text-[14px] font-semibold leading-[1.4] text-[#1c1c1c]">
          {title}
        </h3>

        {/* Price */}
        <div className="mt-1.5 flex items-center gap-2">

          <span className="text-[16px] font-bold text-[#171717]">
            ₹{price}
          </span>

          {oldPrice > price && (
            <>
              <span className="text-[11px] text-[#999999] line-through">
                ₹{oldPrice}
              </span>

              <span className="text-[9px] font-semibold text-[#d85c7a]">
                {discount}% OFF
              </span>
            </>
          )}

        </div>

        {/* Add Cart */}
        <button
          type="button"
          className="mt-2.5 flex h-9 w-full items-center justify-center gap-1.5 rounded-lg border border-[#171717] bg-[#171717] text-[10px] font-semibold uppercase tracking-[0.06em] text-white transition-all duration-300 hover:bg-white hover:text-[#171717] sm:h-10 sm:text-[11px]"
        >
          <ShoppingBag
            size={14}
            strokeWidth={1.7}
          />
          Add to Cart
        </button>

      </div>

    </article>
  );
}

export default Card;