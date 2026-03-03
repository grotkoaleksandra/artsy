import Link from "next/link";
import { artists } from "@/data/artists";
import { ArtistProfile } from "@/components/artist-profile";

export function generateStaticParams() {
  return artists.map((artist) => ({
    slug: artist.slug,
  }));
}

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artist = artists.find((a) => a.slug === slug);

  if (!artist) {
    return (
      <div className="pt-32 pb-24 px-6 text-center">
        <h1 className="font-[family-name:var(--font-cormorant)] text-5xl font-semibold italic text-foreground">
          Artist Not Found
        </h1>
        <Link
          href="/collective"
          className="mt-6 inline-block text-accent hover:text-accent-light text-sm tracking-[0.2em] uppercase transition-colors"
        >
          &larr; Back to Collective
        </Link>
      </div>
    );
  }

  return <ArtistProfile artist={artist} />;
}
