"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import type { Artist, Artwork } from "@/data/artists";

function Lightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  photos: Artwork[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const photo = photos[index];

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/50 hover:text-white z-10 text-[11px] tracking-[1.5px] uppercase transition-colors duration-100"
      >
        Close
      </button>

      <div className="absolute top-6 left-6 text-white/30 text-[11px] tracking-[0.3px]">
        {index + 1} / {photos.length}
      </div>

      <div
        className="relative max-w-[90vw] max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-w-full max-h-[85vh] object-contain"
        />
      </div>

      {photos.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 hover:text-white text-3xl transition-colors duration-100"
          >
            &#8249;
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/30 hover:text-white text-3xl transition-colors duration-100"
          >
            &#8250;
          </button>
        </>
      )}
    </div>
  );
}

export function ArtistProfile({ artist }: { artist: Artist }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const allWorks = [artist.featured, ...artist.works];

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i - 1 + allWorks.length) % allWorks.length : null
      ),
    [allWorks.length]
  );
  const next = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i + 1) % allWorks.length : null
      ),
    [allWorks.length]
  );

  return (
    <div className="pt-12 md:pt-14">
      {/* Back link */}
      <div className="px-6 py-6 max-w-[1400px] mx-auto">
        <Link
          href="/collective"
          className="text-[11px] tracking-[1.5px] uppercase text-gray-400 hover:text-black transition-colors duration-100"
        >
          &larr; Back to Collective
        </Link>
      </div>

      {/* Two-column layout: image left, info right */}
      <section className="px-6 max-w-[1400px] mx-auto pb-16 md:pb-24">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left: featured image */}
          <div className="lg:w-1/2">
            <button
              onClick={() => openLightbox(0)}
              className="img-hover block w-full cursor-pointer"
            >
              <div className="relative aspect-[2/3] bg-gray-100 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={artist.featured.src}
                  alt={artist.featured.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </button>
          </div>

          {/* Right: info (sticky on desktop) */}
          <div className="lg:w-1/2 lg:sticky lg:top-20 lg:self-start">
            <p className="text-[11px] tracking-[2px] uppercase text-gray-400 mb-4">
              {artist.category}
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-[32px] md:text-[42px] font-normal leading-[1.1] tracking-[0.3px] mb-6">
              {artist.name}
            </h1>
            <p className="text-[11px] tracking-[0.3px] text-gray-400 mb-8">
              {artist.tags.join(" / ")}
            </p>
            <p className="text-[13px] leading-[20px] tracking-[0.3px] text-gray-500 mb-8 max-w-md">
              {artist.bio}
            </p>

            {/* Statement */}
            <div className="border-t border-gray-100 pt-8 mb-8">
              <p className="text-[11px] tracking-[2px] uppercase text-gray-400 mb-4">
                Statement
              </p>
              <p className="font-[family-name:var(--font-playfair)] text-[18px] md:text-[22px] font-normal leading-[1.4] tracking-[0.3px] italic">
                &ldquo;{artist.statement}&rdquo;
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {artist.website && (
                <a
                  href={artist.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 border border-black text-[11px] tracking-[1.5px] uppercase hover:bg-black hover:text-white transition-colors duration-100"
                >
                  Website
                </a>
              )}
              {artist.instagram && (
                <a
                  href={`https://instagram.com/${artist.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 border border-gray-200 text-[11px] tracking-[1.5px] uppercase text-gray-500 hover:border-black hover:text-black transition-colors duration-100"
                >
                  Instagram
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Works gallery */}
      <section className="border-t border-gray-100 px-6 py-16 md:py-24 max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <p className="text-[11px] tracking-[2px] uppercase text-gray-400">
            Selected Works
          </p>
          <p className="text-[11px] tracking-[0.3px] text-gray-400">
            {allWorks.length} Works
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-[1px] bg-gray-100">
          {allWorks.map((work, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="img-hover block relative cursor-pointer bg-white"
            >
              <div className="relative aspect-[2/3] bg-gray-100 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={work.src}
                  alt={work.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={allWorks}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={next}
        />
      )}
    </div>
  );
}
