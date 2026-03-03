export interface Artwork {
  src: string;
  alt: string;
}

export interface Artist {
  slug: string;
  name: string;
  category: string;
  tags: string[];
  bio: string;
  statement: string;
  featured: Artwork;
  works: Artwork[];
  website?: string;
  instagram?: string;
}

export const artists: Artist[] = [
  // — Modern Art —
  {
    slug: "elena-vasquez",
    name: "Elena Vasquez",
    category: "Modern Art",
    tags: ["Expressionist", "Bold Color"],
    bio: "Madrid-born painter whose large-scale canvases explore emotional landscapes through explosive color and gestural brushwork. Exhibited at Museo Reina Sofía and Frieze London.",
    statement: "I paint what silence sounds like — the weight of unspoken feeling rendered in pigment and fury.",
    featured: { src: "https://picsum.photos/seed/elena-feat/800/1000", alt: "Abstract expressionist painting with bold reds and golds" },
    works: [
      { src: "https://picsum.photos/seed/elena-1/800/1000", alt: "Large canvas with sweeping orange gestures" },
      { src: "https://picsum.photos/seed/elena-2/800/600", alt: "Diptych in crimson and cobalt" },
      { src: "https://picsum.photos/seed/elena-3/600/800", alt: "Intimate study in burnt sienna" },
      { src: "https://picsum.photos/seed/elena-4/800/800", alt: "Square composition with layered textures" },
    ],
    website: "https://elenavasquez.art",
    instagram: "elenavasquezart",
  },
  {
    slug: "kai-nakamura",
    name: "Kai Nakamura",
    category: "Modern Art",
    tags: ["Minimalist", "Installation"],
    bio: "Tokyo-based installation artist working at the intersection of light, space, and perception. Known for immersive environments that dissolve the boundary between viewer and artwork.",
    statement: "Empty space is never empty. I build rooms where you can hear the architecture breathe.",
    featured: { src: "https://picsum.photos/seed/kai-feat/800/1000", alt: "Minimalist light installation in white gallery" },
    works: [
      { src: "https://picsum.photos/seed/kai-1/800/600", alt: "Neon light grid suspended in darkness" },
      { src: "https://picsum.photos/seed/kai-2/800/1000", alt: "Paper and wire installation detail" },
      { src: "https://picsum.photos/seed/kai-3/800/800", alt: "Shadow play on gallery wall" },
    ],
    website: "https://kai-nakamura.com",
    instagram: "kainakamura.studio",
  },
  {
    slug: "priya-sharma",
    name: "Priya Sharma",
    category: "Modern Art",
    tags: ["Mixed Media", "Digital Fusion"],
    bio: "Mumbai-born, Berlin-based artist fusing traditional Indian textile patterns with digital projection and hand-painted elements. Her layered works examine cultural memory in the age of technology.",
    statement: "Thread and pixel share the same DNA — both are lines that build worlds.",
    featured: { src: "https://picsum.photos/seed/priya-feat/800/1000", alt: "Mixed media work combining textile and digital elements" },
    works: [
      { src: "https://picsum.photos/seed/priya-1/800/1000", alt: "Embroidered circuit board pattern" },
      { src: "https://picsum.photos/seed/priya-2/600/800", alt: "Projected light on silk installation" },
      { src: "https://picsum.photos/seed/priya-3/800/600", alt: "Digital collage with sari fragments" },
      { src: "https://picsum.photos/seed/priya-4/800/1000", alt: "Hand-painted motherboard mandala" },
    ],
    instagram: "priyasharma.art",
  },

  // — Old Masters / Classic —
  {
    slug: "willem-de-groot",
    name: "Willem de Groot",
    category: "Old Masters",
    tags: ["Dutch Golden Age", "Oil Painting"],
    bio: "Amsterdam-based painter reviving the techniques of Vermeer and Rembrandt. His meticulously crafted oil paintings celebrate the drama of chiaroscuro and the poetry of everyday objects.",
    statement: "The Old Masters never left — they are waiting in the shadows between the candle and the canvas.",
    featured: { src: "https://picsum.photos/seed/willem-feat/800/1000", alt: "Still life with dramatic lighting in Dutch Golden Age style" },
    works: [
      { src: "https://picsum.photos/seed/willem-1/800/1000", alt: "Portrait with Rembrandt lighting" },
      { src: "https://picsum.photos/seed/willem-2/800/600", alt: "Vanitas still life with skull and flowers" },
      { src: "https://picsum.photos/seed/willem-3/600/800", alt: "Interior scene with single window light" },
    ],
    website: "https://willemdegroot.nl",
  },
  {
    slug: "isabelle-moreau",
    name: "Isabelle Moreau",
    category: "Old Masters",
    tags: ["Impressionist", "Plein Air"],
    bio: "Provençal painter working in the direct lineage of Monet and Cézanne. She paints exclusively en plein air, capturing Mediterranean light with a palette knife and fearless color choices.",
    statement: "I chase the light the way Monet did — knowing I will never catch it, and painting anyway.",
    featured: { src: "https://picsum.photos/seed/isabelle-feat/800/1000", alt: "Impressionist landscape of lavender fields" },
    works: [
      { src: "https://picsum.photos/seed/isabelle-1/800/600", alt: "Sunrise over olive groves" },
      { src: "https://picsum.photos/seed/isabelle-2/800/1000", alt: "Harbor scene with boats" },
      { src: "https://picsum.photos/seed/isabelle-3/800/800", alt: "Garden path in dappled light" },
      { src: "https://picsum.photos/seed/isabelle-4/600/800", alt: "Self-portrait at easel" },
    ],
    website: "https://isabelle-moreau.fr",
    instagram: "isabellemoreau.peintre",
  },
  {
    slug: "alessandro-benedetti",
    name: "Alessandro Benedetti",
    category: "Old Masters",
    tags: ["Renaissance", "Fresco"],
    bio: "Florence-based master restorer and practicing painter who applies Renaissance fresco techniques to contemporary subjects. His work bridges five centuries of Italian artistic tradition.",
    statement: "Fresco demands humility — you must work while the plaster is wet, and you cannot go back.",
    featured: { src: "https://picsum.photos/seed/alessandro-feat/800/1000", alt: "Contemporary fresco with Renaissance technique" },
    works: [
      { src: "https://picsum.photos/seed/alessandro-1/800/1000", alt: "Detail of fresco figure study" },
      { src: "https://picsum.photos/seed/alessandro-2/800/600", alt: "Gold leaf and tempera on panel" },
      { src: "https://picsum.photos/seed/alessandro-3/800/1000", alt: "Architectural trompe-l'oeil" },
    ],
    website: "https://benedetti-studio.it",
  },

  // — New & Upcoming —
  {
    slug: "zara-chen",
    name: "Zara Chen",
    category: "New & Upcoming",
    tags: ["AI-Augmented", "Generative"],
    bio: "22-year-old San Francisco artist pioneering the collaboration between human intuition and machine learning. Her process involves training custom models on her own sketches, then painting over the outputs.",
    statement: "The algorithm proposes. The brush disposes. Neither of us works alone anymore.",
    featured: { src: "https://picsum.photos/seed/zara-feat/800/1000", alt: "AI-augmented portrait blending digital and painted elements" },
    works: [
      { src: "https://picsum.photos/seed/zara-1/800/800", alt: "Generative landscape with painted interventions" },
      { src: "https://picsum.photos/seed/zara-2/800/1000", alt: "Neural network pattern study" },
      { src: "https://picsum.photos/seed/zara-3/600/800", alt: "Hybrid digital-analog self portrait" },
      { src: "https://picsum.photos/seed/zara-4/800/600", alt: "Large-scale generative print" },
    ],
    instagram: "zara.chen.art",
  },
  {
    slug: "marcus-williams",
    name: "Marcus Williams",
    category: "New & Upcoming",
    tags: ["Urban Contemporary", "Street Art"],
    bio: "Detroit-raised muralist and studio painter whose work documents the resilience of American cities. Bold graphic style influenced by graffiti, comics, and social realism.",
    statement: "Every wall I paint is a love letter to the neighborhood that raised me.",
    featured: { src: "https://picsum.photos/seed/marcus-feat/800/1000", alt: "Urban mural with bold graphic figures" },
    works: [
      { src: "https://picsum.photos/seed/marcus-1/800/600", alt: "Large-scale building mural" },
      { src: "https://picsum.photos/seed/marcus-2/800/1000", alt: "Studio painting of city figures" },
      { src: "https://picsum.photos/seed/marcus-3/800/800", alt: "Spray paint and acrylic on canvas" },
    ],
    instagram: "marcuswilliams.art",
  },
  {
    slug: "luna-petrov",
    name: "Luna Petrov",
    category: "New & Upcoming",
    tags: ["Surrealist", "Digital"],
    bio: "Belgrade-born digital artist creating dreamlike worlds that blur reality and fantasy. Her hyper-detailed digital paintings have garnered a following of 500K across social platforms.",
    statement: "I paint the dreams I wish I could return to — impossible places that feel like home.",
    featured: { src: "https://picsum.photos/seed/luna-feat/800/1000", alt: "Surrealist digital landscape with floating architecture" },
    works: [
      { src: "https://picsum.photos/seed/luna-1/800/1000", alt: "Underwater city with bioluminescent light" },
      { src: "https://picsum.photos/seed/luna-2/800/600", alt: "Forest of crystal trees" },
      { src: "https://picsum.photos/seed/luna-3/600/800", alt: "Portrait dissolving into butterflies" },
      { src: "https://picsum.photos/seed/luna-4/800/800", alt: "Gravity-defying interior space" },
    ],
    website: "https://lunapetrov.art",
    instagram: "luna.petrov",
  },

  // — Photography —
  {
    slug: "james-osullivan",
    name: "James O'Sullivan",
    category: "Photography",
    tags: ["Landscape", "Nature"],
    bio: "Irish photographer whose long-exposure landscapes reveal the hidden rhythms of the natural world. His work has appeared in National Geographic, The Guardian, and multiple solo exhibitions across Europe.",
    statement: "A photograph is a collaboration between the photographer and time itself.",
    featured: { src: "https://picsum.photos/seed/james-feat/800/1000", alt: "Long-exposure seascape at dusk" },
    works: [
      { src: "https://picsum.photos/seed/james-1/800/600", alt: "Misty mountain range at dawn" },
      { src: "https://picsum.photos/seed/james-2/800/1000", alt: "Ancient forest in morning fog" },
      { src: "https://picsum.photos/seed/james-3/800/600", alt: "Coastal cliffs with crashing waves" },
      { src: "https://picsum.photos/seed/james-4/800/800", alt: "Star trails over stone circle" },
    ],
    website: "https://jamesosullivan.photo",
    instagram: "james.osullivan.photo",
  },
  {
    slug: "amara-osei",
    name: "Amara Osei",
    category: "Photography",
    tags: ["Portrait", "Documentary"],
    bio: "Accra-based documentary photographer capturing the dignity and complexity of everyday life across West Africa. Her intimate portraits have earned the World Press Photo award and a Magnum nomination.",
    statement: "Every face carries a novel. I just try to photograph the opening line.",
    featured: { src: "https://picsum.photos/seed/amara-feat/800/1000", alt: "Intimate portrait with natural window light" },
    works: [
      { src: "https://picsum.photos/seed/amara-1/800/1000", alt: "Market vendor portrait" },
      { src: "https://picsum.photos/seed/amara-2/800/600", alt: "Children playing in village square" },
      { src: "https://picsum.photos/seed/amara-3/600/800", alt: "Elder with ceremonial dress" },
    ],
    instagram: "amara.osei",
  },
  {
    slug: "sofia-lindstrom",
    name: "Sofia Lindström",
    category: "Photography",
    tags: ["Architectural", "Minimalism"],
    bio: "Stockholm-based architectural photographer whose stark, geometric compositions transform buildings into abstract art. Her work explores the emotional language of constructed space.",
    statement: "Buildings speak. Concrete whispers. Glass shouts. I photograph the conversation.",
    featured: { src: "https://picsum.photos/seed/sofia-feat/800/1000", alt: "Minimalist architectural photograph of glass facade" },
    works: [
      { src: "https://picsum.photos/seed/sofia-1/800/800", alt: "Geometric staircase from above" },
      { src: "https://picsum.photos/seed/sofia-2/800/600", alt: "Brutalist concrete detail" },
      { src: "https://picsum.photos/seed/sofia-3/800/1000", alt: "Shadow patterns on white wall" },
      { src: "https://picsum.photos/seed/sofia-4/600/800", alt: "Reflected sky in glass tower" },
    ],
    website: "https://sofialindstrom.se",
    instagram: "sofia.lindstrom.photo",
  },

  // — Abstract —
  {
    slug: "rafael-torres",
    name: "Rafael Torres",
    category: "Abstract",
    tags: ["Geometric", "Hard-Edge"],
    bio: "São Paulo artist known for precise, large-scale geometric paintings that vibrate with optical energy. His work draws from Constructivism, Op Art, and the color theory of Josef Albers.",
    statement: "A straight line is never simple. Between any two points lies an infinity of decisions.",
    featured: { src: "https://picsum.photos/seed/rafael-feat/800/1000", alt: "Hard-edge geometric painting with vibrating color" },
    works: [
      { src: "https://picsum.photos/seed/rafael-1/800/800", alt: "Concentric squares in shifting hues" },
      { src: "https://picsum.photos/seed/rafael-2/800/600", alt: "Triangular composition in primary colors" },
      { src: "https://picsum.photos/seed/rafael-3/800/1000", alt: "Optical illusion grid painting" },
    ],
    website: "https://rafaeltorres.art",
  },
  {
    slug: "yuki-tanaka",
    name: "Yuki Tanaka",
    category: "Abstract",
    tags: ["Zen", "Ink Wash"],
    bio: "Kyoto-based artist practicing a meditative form of abstract ink painting rooted in Zen calligraphy. Each work is completed in a single session — no corrections, no second chances.",
    statement: "The brush moves. The ink falls. What appears was always there, waiting.",
    featured: { src: "https://picsum.photos/seed/yuki-feat/800/1000", alt: "Zen ink wash painting with dynamic brushstroke" },
    works: [
      { src: "https://picsum.photos/seed/yuki-1/800/1000", alt: "Single-stroke circular composition" },
      { src: "https://picsum.photos/seed/yuki-2/800/600", alt: "Ink splatter on handmade paper" },
      { src: "https://picsum.photos/seed/yuki-3/600/800", alt: "Calligraphic abstract in sumi ink" },
      { src: "https://picsum.photos/seed/yuki-4/800/800", alt: "Minimal ink wash landscape" },
    ],
    website: "https://yukitanaka.jp",
    instagram: "yuki.tanaka.ink",
  },
  {
    slug: "nadia-kovac",
    name: "Nadia Kovač",
    category: "Abstract",
    tags: ["Color Field", "Large Scale"],
    bio: "Zagreb-born, New York-based painter creating immersive color field works that envelop the viewer. Her canvases — often exceeding 3 meters — pulse with saturated, luminous pigment.",
    statement: "Color is not decoration. Color is experience. Stand inside it and feel.",
    featured: { src: "https://picsum.photos/seed/nadia-feat/800/1000", alt: "Monumental color field painting in deep violet" },
    works: [
      { src: "https://picsum.photos/seed/nadia-1/800/600", alt: "Gradient canvas from cerulean to indigo" },
      { src: "https://picsum.photos/seed/nadia-2/800/1000", alt: "Layered crimson field with subtle variation" },
      { src: "https://picsum.photos/seed/nadia-3/800/800", alt: "Split composition in warm and cool tones" },
    ],
    instagram: "nadiakovac.studio",
  },

  // — Sculpture —
  {
    slug: "bjorn-eriksson",
    name: "Björn Eriksson",
    category: "Sculpture",
    tags: ["Steel", "Monumental"],
    bio: "Swedish sculptor fabricating monumental steel installations for public spaces. His work transforms industrial material into organic, wind-responsive forms that change with weather and light.",
    statement: "Steel remembers every hammer blow. My job is to make it forget it was ever flat.",
    featured: { src: "https://picsum.photos/seed/bjorn-feat/800/1000", alt: "Monumental curved steel sculpture in landscape" },
    works: [
      { src: "https://picsum.photos/seed/bjorn-1/800/600", alt: "Steel ribbon sculpture in public park" },
      { src: "https://picsum.photos/seed/bjorn-2/800/1000", alt: "Welded steel tower detail" },
      { src: "https://picsum.photos/seed/bjorn-3/800/800", alt: "Outdoor installation at sunset" },
    ],
    website: "https://bjorneriksson.se",
  },
  {
    slug: "carmen-delgado",
    name: "Carmen Delgado",
    category: "Sculpture",
    tags: ["Ceramic", "Contemporary"],
    bio: "Mexico City ceramicist pushing the boundaries of clay into architectural and bodily forms. Her glazed sculptures reference pre-Columbian traditions while speaking a decidedly contemporary language.",
    statement: "Clay is earth that wants to become something. I just listen to what it asks for.",
    featured: { src: "https://picsum.photos/seed/carmen-feat/800/1000", alt: "Contemporary ceramic sculpture with textured glaze" },
    works: [
      { src: "https://picsum.photos/seed/carmen-1/800/1000", alt: "Biomorphic glazed ceramic form" },
      { src: "https://picsum.photos/seed/carmen-2/800/600", alt: "Ceramic wall installation" },
      { src: "https://picsum.photos/seed/carmen-3/600/800", alt: "Hand-built vessel with volcanic glaze" },
      { src: "https://picsum.photos/seed/carmen-4/800/800", alt: "Series of small totemic forms" },
    ],
    instagram: "carmendelgado.ceramics",
  },
  {
    slug: "david-achebe",
    name: "David Achebe",
    category: "Sculpture",
    tags: ["Found Object", "Assemblage"],
    bio: "Lagos-based sculptor transforming discarded electronics, auto parts, and industrial waste into powerful figurative assemblages. His work confronts consumption, waste, and the afterlife of manufactured objects.",
    statement: "Nothing is garbage. Everything had a purpose once. I give it a second story.",
    featured: { src: "https://picsum.photos/seed/david-feat/800/1000", alt: "Figurative assemblage from found electronics" },
    works: [
      { src: "https://picsum.photos/seed/david-1/800/1000", alt: "Life-size figure from car parts" },
      { src: "https://picsum.photos/seed/david-2/800/600", alt: "Wall-mounted circuit board mosaic" },
      { src: "https://picsum.photos/seed/david-3/800/800", alt: "Kinetic sculpture from fan motors" },
    ],
    website: "https://davidachebe.art",
    instagram: "david.achebe.art",
  },
];

export const categories = [
  "All",
  "Modern Art",
  "Old Masters",
  "New & Upcoming",
  "Photography",
  "Abstract",
  "Sculpture",
];
