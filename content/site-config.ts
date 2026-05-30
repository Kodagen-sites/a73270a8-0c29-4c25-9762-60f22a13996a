export const siteConfig = {
  company: {
    name: "DeepFrame AI",
    tagline: "AI Film Studio",
    description:
      "DeepFrame is an AI-native film studio crafting cinematic brand and product commercials — concepted, generated, and finished by a senior creative team. Global, remote, fast.",
    email: "hello@deepframe.ai",
    location: "Global · Remote-first",
  },

  brand: {
    primary: "#D946EF",
    accent: "#D946EF",
    contrast: "#F0ABFC",
    bg: "#0F0617",
  },

  headerVariant: "glass-plasma",

  // Scrub-cinematic hero (Archetype G, Mode 2). Frames come from
  // content/frames-manifest.json — frameCount/pattern are read there at
  // render time; the values below are fallbacks for first paint.
  scrollHero: {
    archetype: "G",
    styleId: "S8",
    assetMode: "live-generate" as const,
    imageUrl: "",
    frameCount: 0,
    scrollDistance: 5,
    loadingLabel: "Rendering",
    loadingVariant: "L2" as const,
  },

  hero: {
    eyebrow: "AI Film Studio",
    chapters: [
      {
        at: 0,
        eyebrow: "AI Film Studio",
        headlineLines: ["Commercials at", "the speed", "of thought."],
        subline:
          "Cinematic brand and product films, generated and finished in days — not months.",
      },
      {
        at: 0.42,
        eyebrow: "Concept → Final cut",
        headlineLines: ["Generated.", "Directed.", "Delivered."],
        subline:
          "A senior creative team drives every frame. AI just makes it faster.",
      },
      {
        at: 0.76,
        eyebrow: "Your brand, in cinema",
        headlineLines: ["Let's make", "something", "unforgettable."],
        subline: "Tell us the brief. We'll show you a first cut.",
        cta: { label: "Start a project", href: "/#contact" },
      },
    ],
    // Legacy h1 shape kept for any archetype-G section that reads it.
    h1: [
      { text: "Commercials at", accent: false },
      { text: "the speed of thought", accent: true },
    ],
  },

  cta: {
    primary: "Start a project",
    secondary: "See the work",
  },

  // About / feature section copy
  sectionThemeWord: "Cinematic",
  manifesto:
    "We believe a great commercial should be limited by imagination, not by budgets, build days, or shipping crates.",

  features: [
    {
      title: "A studio that renders as fast as you can brief it.",
      description:
        "DeepFrame pairs a senior creative director, editor, and AI pipeline so you get a directed first cut in days. No location scouts, no rental gear, no waiting on a shoot window.",
    },
    {
      title: "Directed, not auto-generated",
      description:
        "Every project is led by a human creative team — styleframes, edit, sound, grade.",
    },
    {
      title: "Broadcast-grade finish",
      description:
        "We deliver in the formats and color spaces your channels actually require.",
    },
    {
      title: "Built for iteration",
      description:
        "Want the jacket red instead of blue? That's a re-render, not a reshoot.",
    },
  ],

  whyUs: {
    heading: "Why DeepFrame",
    items: [
      {
        title: "Speed",
        description:
          "First cut in days. We compress the entire production timeline — concept, shoot, and post — into a single AI-driven pipeline.",
      },
      {
        title: "Cost",
        description:
          "No crews, sets, or shipping. A fraction of a traditional commercial budget.",
      },
      {
        title: "Control",
        description: "Infinite variations and revisions without a reshoot.",
      },
      {
        title: "Craft",
        description: "Human creative direction on every frame.",
      },
    ],
  },

  servicesHeading: "What we make",
  services: [
    {
      slug: "brand-films",
      name: "AI Brand Films",
      description:
        "Story-led brand films generated and graded to a broadcast finish — concept to delivery in days, not months.",
    },
    {
      slug: "product-commercials",
      name: "Product Commercials",
      description:
        "Photoreal product spots that place your hero object in impossible, beautiful worlds. No studio. No shipping.",
    },
    {
      slug: "concept-art",
      name: "Concept & Art Direction",
      description:
        "Moodboards, styleframes, and storyboards that lock the look before a single frame renders.",
    },
    {
      slug: "motion-vfx",
      name: "Motion & VFX",
      description:
        "Title design, compositing, and finishing that turn generated plates into a polished, on-brand cut.",
    },
  ],

  // #work showcase tiles
  work: {
    heading: "Selected frames",
    description:
      "A look at recent brand and product films from the DeepFrame pipeline.",
    items: [
      {
        slot: "section-work-1",
        client: "Lumen Skincare",
        category: "Product Commercial",
        result: "30s hero spot · 4-day turnaround",
      },
      {
        slot: "section-work-2",
        client: "Atlas Mobility",
        category: "Brand Film",
        result: "Launch film for a global EV reveal",
      },
      {
        slot: "section-work-3",
        client: "Nocturne Audio",
        category: "Social Cutdowns",
        result: "12 vertical edits from one master",
      },
    ],
  },

  mixedMedia: {
    skipSecondaryVideo: true,
    accentEyebrow: "The Outcome",
    accentLine:
      "Frames that look impossible to have made this fast — because, until now, they were.",
  },

  ctaBlock: {
    heading: "Let's make something unforgettable.",
    description:
      "Send us a brief, a brand, or just a feeling. We'll come back with a direction and a first cut.",
  },

  trustBar: [
    "First cut in days",
    "Broadcast-grade finish",
    "Global · Remote",
    "Concept → Delivery",
  ],

  social: {
    instagram: "https://instagram.com/deepframe.ai",
    linkedin: "https://linkedin.com/company/deepframe-ai",
    youtube: "https://youtube.com/@deepframe.ai",
    x: "https://x.com/deepframe_ai",
  },
} as const;

export type SiteConfig = typeof siteConfig;
