"use client";

import { useState } from "react";
import Link from "next/link";
import { artists, categories } from "@/data/artists";

export default function CollectivePage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? artists
      : artists.filter((a) => a.category === activeCategory);

  return (
    <div className="pt-12 md:pt-14">
      {/* Header */}
      <section className="px-6 py-12 md:py-16 max-w-[1400px] mx-auto">
        <p className="text-[11px] tracking-[2px] uppercase text-gray-400 mb-4">
          The Collective
        </p>
        <h1 className="text-[13px] tracking-[0.3px] uppercase">
          {filtered.length} Artist{filtered.length !== 1 ? "s" : ""}
        </h1>
      </section>

      {/* Filter tabs — Acne sub-navigation style */}
      <div className="border-b border-gray-100 px-6 sticky top-12 md:top-14 bg-white z-40">
        <div className="max-w-[1400px] mx-auto flex gap-6 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[13px] tracking-[0.3px] uppercase whitespace-nowrap py-3 border-b transition-colors duration-100 ${
                activeCategory === cat
                  ? "text-black border-black"
                  : "text-gray-400 border-transparent hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Artist grid */}
      <section className="px-6 py-8 md:py-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1px] bg-gray-100">
          {filtered.map((artist) => (
            <Link
              key={artist.slug}
              href={`/artist/${artist.slug}`}
              className="group bg-white"
            >
              <div className="img-hover">
                <div className="relative aspect-[2/3] bg-gray-100 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={artist.featured.src}
                    alt={artist.featured.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="px-3 py-4">
                <p className="text-[13px] tracking-[0.3px] uppercase text-blue group-hover:text-blue-hover transition-colors duration-100">
                  {artist.name}
                </p>
                <p className="text-[11px] tracking-[0.3px] text-gray-400 mt-1">
                  {artist.category} — {artist.tags[0]}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-[13px] tracking-[0.3px] uppercase text-gray-400">
              No artists found in this category.
            </p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="border-t border-gray-100 px-6 py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[13px] tracking-[0.3px] uppercase">
              Want to join the collective?
            </p>
            <p className="text-[13px] leading-[20px] tracking-[0.3px] text-gray-500 mt-1">
              Submit your portfolio for review.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-blue text-white text-[11px] tracking-[1.5px] uppercase hover:bg-blue-hover transition-colors duration-100"
          >
            Apply Today
          </Link>
        </div>
      </section>
    </div>
  );
}
