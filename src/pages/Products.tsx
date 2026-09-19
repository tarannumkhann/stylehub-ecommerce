

import ProductSection from "../components/ProductSection/ProductSection";

import {
  tshirts,
  sweaters,
  lowers,
 
  hoodies,
} from "../data/products";

function Products() {
  return (
    <div className="min-h-screen bg-[#f7f7f5]">
     

      <main>
        {/* PAGE INTRO */}
        <section className="mx-auto max-w-6xl px-4 pb-8 pt-10 text-center sm:px-6 sm:pt-12">
          <p className="mb-2 text-[20px] font-semibold text-[#5f0707]">
            Our Collection
          </p>

          <h1 className="text-3xl font-semibold text-[#1d2733] sm:text-4xl">
            Explore Products
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#666666]">
            Explore our carefully selected fashion collection, created
            for everyday comfort, effortless styling, and a modern
            wardrobe.
          </p>
        </section>

        {/* PRODUCT CATEGORIES */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          {/* T-SHIRTS */}
          <section className="mb-10 rounded-2xl bg-white px-4 py-5 shadow-[0_5px_25px_rgba(29,39,51,0.05)] sm:px-6">
            <div className="mb-5 max-w-3xl">
              <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#76430c]">
                Everyday Essentials
              </p>

              <h2 className="text-2xl font-semibold text-[#1d2733]">
                T-Shirts
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#666666]">
                Our T-Shirts collection is designed for simple,
                comfortable everyday dressing. From relaxed casual
                looks to easy layering, these pieces are versatile
                enough to become an essential part of your wardrobe.
              </p>

              <p className="mt-2 text-xs leading-5 text-[#888888]">
                Perfect for daily wear, casual outings, travel,
                college, and effortless everyday styling.
              </p>
            </div>

            <ProductSection title="T-Shirts" products={tshirts} />
          </section>

          {/* SWEATERS */}
          <section className="mb-10 rounded-2xl bg-white px-4 py-5 shadow-[0_5px_25px_rgba(29,39,51,0.05)] sm:px-6">
            <div className="mb-5 max-w-3xl">
              <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#76430c]">
                Warm & Comfortable
              </p>

              <h2 className="text-2xl font-semibold text-[#1d2733]">
                Sweaters
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#666666]">
                Our Sweaters collection brings together comfortable
                layers that add warmth while keeping your outfit
                polished. They can be styled easily with everyday
                bottoms for a relaxed yet put-together appearance.
              </p>

              <p className="mt-2 text-xs leading-5 text-[#888888]">
                Ideal for cooler days, layering, casual evenings,
                and comfortable seasonal outfits.
              </p>
            </div>

            <ProductSection title="Sweaters" products={sweaters} />
          </section>

          {/* LOWERS */}
          <section className="mb-10 rounded-2xl bg-white px-4 py-5 shadow-[0_5px_25px_rgba(29,39,51,0.05)] sm:px-6">
            <div className="mb-5 max-w-3xl">
              <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#76430c]">
                Relaxed Everyday Wear
              </p>

              <h2 className="text-2xl font-semibold text-[#1d2733]">
                Lowers
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#666666]">
                Our Lowers collection focuses on comfort and easy
                movement without compromising on everyday style.
                These versatile pieces are suitable for relaxed
                outfits and can be paired with your favorite
                T-Shirts, hoodies, or casual tops.
              </p>

              <p className="mt-2 text-xs leading-5 text-[#888888]">
                Great for home, travel, casual days, workouts,
                and relaxed outdoor activities.
              </p>
            </div>

            <ProductSection title="Lowers" products={lowers} />
          </section>

        

          {/* HOODIES */}
          <section className="mb-8 rounded-2xl bg-white px-4 py-5 shadow-[0_5px_25px_rgba(29,39,51,0.05)] sm:px-6">
            <div className="mb-5 max-w-3xl">
              <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#76430c]">
                Casual & Cozy
              </p>

              <h2 className="text-2xl font-semibold text-[#1d2733]">
                Hoodies
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#666666]">
                Our Hoodies collection combines a relaxed feel with
                an effortless street-style look. They are easy to
                wear, easy to layer, and perfect for creating a
                comfortable casual outfit.
              </p>

              <p className="mt-2 text-xs leading-5 text-[#888888]">
                Perfect for casual outings, travel, cooler weather,
                and relaxed everyday styling.
              </p>
            </div>

            <ProductSection title="Hoodies" products={hoodies} />
          </section>

        </div>
      </main>

     
    </div>
  );
}

export default Products;