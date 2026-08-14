"use client";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative min-h-[650px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={"/banner.jpg"}
        alt="Cow and goat bazar"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="max-w-2xl text-white">
          <span className="mb-5 inline-block rounded-full bg-white/15 px-5 py-2 text-sm font-medium backdrop-blur-md">
            🐄 Trusted Livestock Marketplace
          </span>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
            Your Trusted
            <span className="block text-green-300">
              Qurbani Livestock
            </span>
            Marketplace
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
            Find healthy cows and goats from trusted farms and sellers.
            Choose your preferred animal and book your Qurbani livestock
            easily from anywhere.
          </p>

          <div className="mt-8">
            <Link
              href="/animals"
              className="inline-flex items-center gap-3 rounded-xl bg-green-600 px-7 py-4 font-semibold text-white shadow-lg transition hover:bg-green-700 hover:scale-105"
            >
              Browse Animals
              <span className="text-xl">→</span>
            </Link>
          </div>

          {/* Trust Features */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-xl">✓</span>
              Trusted Farms
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xl">✓</span>
              Healthy Animals
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xl">✓</span>
              Safe Delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;