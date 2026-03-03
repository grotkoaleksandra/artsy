import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-12 md:pt-14">
      {/* Header */}
      <section className="px-6 py-12 md:py-16 max-w-[1400px] mx-auto">
        <p className="text-[11px] tracking-[2px] uppercase text-gray-400 mb-4">
          About
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-[28px] md:text-[36px] font-normal leading-[1.15] tracking-[0.3px] max-w-2xl">
          A curated database for the art world
        </h1>
      </section>

      {/* Mission */}
      <section className="px-6 pb-16 md:pb-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-[13px] leading-[20px] tracking-[0.3px] text-gray-500">
              Artsy was founded with a simple conviction: the art world needs
              better connections. Too often, exceptional artists remain
              invisible to the dealers and collectors who would champion their
              work.
            </p>
          </div>
          <div>
            <p className="text-[13px] leading-[20px] tracking-[0.3px] text-gray-500">
              We are not a gallery. We do not take commissions. We are not a
              marketplace where transactions happen. Instead, we are a curated
              database — a living directory of artists whose work we believe
              in, made accessible to professionals who are actively looking to
              discover, acquire, and represent new talent.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width image */}
      <section className="px-6 max-w-[1400px] mx-auto pb-16 md:pb-24">
        <div className="aspect-[21/9] bg-gray-100 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://picsum.photos/seed/artsy-about/1400/600"
            alt="Gallery interior"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-gray-100 px-6 py-16 md:py-24 max-w-[1400px] mx-auto">
        <p className="text-[11px] tracking-[2px] uppercase text-gray-400 mb-12">
          Our Values
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="border-t border-gray-100 pt-6">
            <p className="text-[13px] tracking-[0.3px] uppercase mb-3">
              Curation Over Volume
            </p>
            <p className="text-[13px] leading-[20px] tracking-[0.3px] text-gray-500">
              We will never be the biggest database. We aim to be the most
              thoughtful. Every artist is hand-selected, every profile
              reviewed for quality and authenticity.
            </p>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <p className="text-[13px] tracking-[0.3px] uppercase mb-3">
              Direct Connections
            </p>
            <p className="text-[13px] leading-[20px] tracking-[0.3px] text-gray-500">
              We facilitate introductions, not transactions. When a dealer
              discovers an artist through our collective, the relationship is
              theirs — we take no commission, no cut, no percentage.
            </p>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <p className="text-[13px] tracking-[0.3px] uppercase mb-3">
              Every Medium Welcome
            </p>
            <p className="text-[13px] leading-[20px] tracking-[0.3px] text-gray-500">
              From oil on canvas to AI-augmented digital works, from bronze
              sculpture to documentary photography. If the work has integrity,
              it belongs in the collective.
            </p>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <p className="text-[13px] tracking-[0.3px] uppercase mb-3">
              Global Perspective
            </p>
            <p className="text-[13px] leading-[20px] tracking-[0.3px] text-gray-500">
              Our artists span six continents and every career stage — from
              emerging voices to established masters. Geography should never
              limit visibility.
            </p>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="border-t border-gray-100 px-6 py-20 md:py-28">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="font-[family-name:var(--font-playfair)] text-[24px] md:text-[32px] font-normal leading-[1.35] tracking-[0.3px] italic">
            &ldquo;Curation is an act of belief. Every artist we include is
            someone whose voice deserves to be heard.&rdquo;
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 px-6 py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[13px] tracking-[0.3px] uppercase">
            Ready to explore?
          </p>
          <div className="flex gap-4">
            <Link
              href="/collective"
              className="inline-block px-8 py-3 bg-blue text-white text-[11px] tracking-[1.5px] uppercase hover:bg-blue-hover transition-colors duration-100"
            >
              Browse Artists
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 border border-black text-[11px] tracking-[1.5px] uppercase hover:bg-black hover:text-white transition-colors duration-100"
            >
              Apply
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
