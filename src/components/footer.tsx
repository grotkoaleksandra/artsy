import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 px-6 py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Col 1 */}
          <div>
            <p className="text-[11px] tracking-[0.3px] uppercase text-gray-400 mb-4">
              Navigate
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/collective" className="text-[13px] tracking-[0.3px] uppercase hover:text-blue transition-colors duration-100">
                Collective
              </Link>
              <Link href="/about" className="text-[13px] tracking-[0.3px] uppercase hover:text-blue transition-colors duration-100">
                About
              </Link>
              <Link href="/contact" className="text-[13px] tracking-[0.3px] uppercase hover:text-blue transition-colors duration-100">
                Contact
              </Link>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <p className="text-[11px] tracking-[0.3px] uppercase text-gray-400 mb-4">
              Categories
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/collective" className="text-[13px] tracking-[0.3px] uppercase hover:text-blue transition-colors duration-100">
                Modern Art
              </Link>
              <Link href="/collective" className="text-[13px] tracking-[0.3px] uppercase hover:text-blue transition-colors duration-100">
                Old Masters
              </Link>
              <Link href="/collective" className="text-[13px] tracking-[0.3px] uppercase hover:text-blue transition-colors duration-100">
                Photography
              </Link>
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <p className="text-[11px] tracking-[0.3px] uppercase text-gray-400 mb-4">
              More
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/collective" className="text-[13px] tracking-[0.3px] uppercase hover:text-blue transition-colors duration-100">
                New &amp; Upcoming
              </Link>
              <Link href="/collective" className="text-[13px] tracking-[0.3px] uppercase hover:text-blue transition-colors duration-100">
                Abstract
              </Link>
              <Link href="/collective" className="text-[13px] tracking-[0.3px] uppercase hover:text-blue transition-colors duration-100">
                Sculpture
              </Link>
            </div>
          </div>

          {/* Col 4 */}
          <div>
            <p className="text-[11px] tracking-[0.3px] uppercase text-gray-400 mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] tracking-[0.3px] uppercase hover:text-blue transition-colors duration-100"
              >
                Instagram
              </a>
              <a
                href="mailto:hello@artsy.art"
                className="text-[13px] tracking-[0.3px] uppercase hover:text-blue transition-colors duration-100"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="font-[family-name:var(--font-playfair)] text-[18px] tracking-[0.5px]"
          >
            Artsy
          </Link>
          <p className="text-[11px] tracking-[0.3px] uppercase text-gray-400">
            &copy; {new Date().getFullYear()} Artsy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
