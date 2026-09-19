import { Heart, ShoppingBag, Sparkles } from "lucide-react";

function About() {
  return (
    <main className="min-h-screen bg-[#f7f7f5]">

      {/* HERO */}
      <section className="px-5 py-16 text-center sm:py-20">
        <p className="mb-2 text-[20px] font-semibold text-[#5f0707]">
          About StyleHub
        </p>

        <h1 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight text-[#1d2733] sm:text-5xl">
          Fashion that feels like you.
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#666666] sm:text-base">
          StyleHub is all about bringing together timeless fashion,
          everyday comfort, and effortless style in one place.
        </p>
      </section>

      {/* ABOUT CARD */}
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="rounded-3xl bg-white p-6 shadow-[0_8px_35px_rgba(29,39,51,0.06)] sm:p-10">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">

            {/* LEFT */}
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#76430c]">
                Our Story
              </p>

              <h2 className="text-2xl font-semibold text-[#1d2733] sm:text-3xl">
                Your style, your way.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#666666]">
                At StyleHub, we believe fashion should be simple,
                comfortable, and easy to express. Our collection is
                designed for everyday moments while keeping your
                personal style at the center.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#666666]">
                From casual T-shirts and cozy sweaters to stylish
                lowers and hoodies, we bring together pieces that
                easily fit into your everyday wardrobe.
              </p>
            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-3 gap-3">
              <div className="flex min-h-36 flex-col items-center justify-center rounded-2xl bg-pink-100 p-4 text-center">
                <Sparkles
                  size={25}
                  className="mb-3 text-[#5f0707]"
                  strokeWidth={1.7}
                />
                <h3 className="text-sm font-semibold text-[#1d2733]">
                  Modern
                </h3>
                <p className="mt-1 text-[10px] text-[#777777]">
                  Fresh styles
                </p>
              </div>

              <div className="flex min-h-36 flex-col items-center justify-center rounded-2xl bg-[#f7eee8] p-4 text-center">
                <Heart
                  size={25}
                  className="mb-3 text-[#5f0707]"
                  strokeWidth={1.7}
                />
                <h3 className="text-sm font-semibold text-[#1d2733]">
                  Comfort
                </h3>
                <p className="mt-1 text-[10px] text-[#777777]">
                  Made for you
                </p>
              </div>

              <div className="flex min-h-36 flex-col items-center justify-center rounded-2xl bg-[#eee8e3] p-4 text-center">
                <ShoppingBag
                  size={25}
                  className="mb-3 text-[#5f0707]"
                  strokeWidth={1.7}
                />
                <h3 className="text-sm font-semibold text-[#1d2733]">
                  Quality
                </h3>
                <p className="mt-1 text-[10px] text-[#777777]">
                  Everyday wear
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="text-center">
          <p className="mb-2 text-[20px] font-semibold text-[#5f0707]">
            What We Believe
          </p>

          <p className="mx-auto max-w-2xl text-sm leading-6 text-[#666666]">
            We keep fashion simple, comfortable, and accessible so
            you can wear what makes you feel confident.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
            <h3 className="font-semibold text-[#1d2733]">
              Simple Style
            </h3>
            <p className="mt-2 text-xs leading-6 text-[#777777]">
              Clean and versatile pieces for your everyday wardrobe.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
            <h3 className="font-semibold text-[#1d2733]">
              Everyday Comfort
            </h3>
            <p className="mt-2 text-xs leading-6 text-[#777777]">
              Styles designed to feel as good as they look.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
            <h3 className="font-semibold text-[#1d2733]">
              Your Expression
            </h3>
            <p className="mt-2 text-xs leading-6 text-[#777777]">
              Fashion that lets your personality take the spotlight.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}

export default About;