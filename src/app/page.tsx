import Link from "next/link";
import { artists } from "@/data/artists";

export default function Home() {
  const featured = artists.slice(0, 8);

  return (
    <>
      {/* Hero — full-bleed artwork image */}
      <section className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://picsum.photos/seed/artsy-hero-main/1600/1000')",
          }}
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Minimal text overlay */}
        <div className="relative z-10 h-full flex flex-col items-center justify-end pb-16 px-6">
          <p className="text-[11px] tracking-[2px] uppercase text-white/70 mb-3">
            A curated artist database
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-[40px] md:text-[56px] lg:text-[72px] font-normal leading-[1] text-white text-center tracking-[0.5px]">
            Artsy
          </h1>
          <div className="mt-8">
            <Link
              href="/collective"
              className="inline-block px-8 py-3 bg-white text-black text-[11px] tracking-[1.5px] uppercase hover:bg-gray-100 transition-colors duration-100"
            >
              Explore the Collective
            </Link>
          </div>
        </div>
      </section>

      {/* Two-column intro */}
      <section className="px-6 py-20 md:py-28 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
          <div>
            <p className="text-[11px] tracking-[2px] uppercase text-gray-400 mb-6">
              The Collective
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-[28px] md:text-[36px] font-normal leading-[1.15] tracking-[0.3px]">
              Connecting dealers and collectors with exceptional artists
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-[13px] leading-[20px] tracking-[0.3px] text-gray-500 max-w-md">
              Not a gallery. Not a marketplace. A curated database of
              hand-selected artists spanning every medium and era — made
              accessible to professionals who are actively looking to discover,
              acquire, and represent new talent.
            </p>
          </div>
        </div>
      </section>

      {/* Featured artists — edge-to-edge grid */}
      <section className="px-6 pb-20 md:pb-28 max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <p className="text-[11px] tracking-[2px] uppercase text-gray-400">
            Featured Artists
          </p>
          <Link
            href="/collective"
            className="text-[11px] tracking-[1.5px] uppercase text-blue hover:text-blue-hover transition-colors duration-100"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-gray-100">
          {featured.map((artist) => (
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
                  {artist.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Statement */}
      <section className="border-t border-b border-gray-100 px-6 py-20 md:py-28">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="font-[family-name:var(--font-playfair)] text-[24px] md:text-[32px] font-normal leading-[1.35] tracking-[0.3px]">
            We believe in the power of curation — bringing together artists
            whose work speaks, collectors who listen, and dealers who build
            the bridge.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-20 md:py-28 max-w-[1400px] mx-auto">
        <p className="text-[11px] tracking-[2px] uppercase text-gray-400 mb-12">
          How It Works
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div>
            <p className="text-[11px] tracking-[2px] uppercase text-blue mb-4">01</p>
            <p className="text-[13px] tracking-[0.3px] uppercase mb-3">Apply</p>
            <p className="text-[13px] leading-[20px] tracking-[0.3px] text-gray-500">
              Submit your portfolio for review. We look for originality,
              craft, and a distinct artistic voice.
            </p>
          </div>
          <div>
            <p className="text-[11px] tracking-[2px] uppercase text-blue mb-4">02</p>
            <p className="text-[13px] tracking-[0.3px] uppercase mb-3">Get Curated</p>
            <p className="text-[13px] leading-[20px] tracking-[0.3px] text-gray-500">
              Our team reviews every application. Accepted artists join a
              database visible to dealers and collectors worldwide.
            </p>
          </div>
          <div>
            <p className="text-[11px] tracking-[2px] uppercase text-blue mb-4">03</p>
            <p className="text-[13px] tracking-[0.3px] uppercase mb-3">Connect</p>
            <p className="text-[13px] leading-[20px] tracking-[0.3px] text-gray-500">
              Dealers and collectors browse the collective, discover your
              work, and reach out directly. No middleman fees.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 px-6 py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[13px] tracking-[0.3px] uppercase">
              Want to join the collective?
            </p>
            <p className="text-[13px] leading-[20px] tracking-[0.3px] text-gray-500 mt-1">
              We are always looking for exceptional artists.
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
    </>
  );
}
