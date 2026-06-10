// =====================================================================
// SITE CONTENT — edit text and swap images here to update the website.
//
// HOW TO USE:
//  • Text: change any string below (titles, paragraphs, contact info…).
//  • Images: drop a new file into  src/content/images/  and either
//      (a) replace an existing file with the same name, OR
//      (b) add a new `import` line at the top and reference it below.
//  • Save the file — the preview updates automatically.
// =====================================================================

import hero from "./images/hero.jpg";
import about from "./images/about.jpg";
import feat1 from "./images/feat-1.jpg";
import feat2 from "./images/feat-2.jpg";
import feat3 from "./images/feat-3.jpg";
import feat4 from "./images/feat-4.jpg";
import feat5 from "./images/feat-5.jpg";
import gWedding1 from "./images/g-wedding-1.jpg";
import gWedding2 from "./images/g-wedding-2.jpg";
import gEngagement1 from "./images/g-engagement-1.jpg";
import gEngagement2 from "./images/g-engagement-2.jpg";
import gElopement1 from "./images/g-elopement-1.jpg";
import gReception1 from "./images/g-reception-1.jpg";
import gReception2 from "./images/g-reception-2.jpg";

export const images = {
  hero,
  about,
  feat1,
  feat2,
  feat3,
  feat4,
  feat5,
  gWedding1,
  gWedding2,
  gEngagement1,
  gEngagement2,
  gElopement1,
  gReception1,
  gReception2,
};

// ---------- HOME PAGE ----------
export const home = {
  hero: {
    eyebrow: "Sydney Wedding Photography",
    title: "Capturing Timeless",
    titleItalic: "Love Stories",
    subtitle: "Elegant wedding photography across Sydney and beyond.",
    ctaLabel: "Start Your Journey",
    image: images.hero,
    imageAlt: "Bride and groom embracing at Sydney Harbour sunset",
  },
  carousel: {
    eyebrow: "Featured Weddings",
    title: "A glimpse of recent love stories",
    intro:
      "Each wedding is photographed with care, intention, and an eye for the quiet, beautiful moments in between.",
    items: [
      { src: images.feat1, alt: "Bride in lace gown by window" },
      { src: images.feat2, alt: "Couple walking on coastal cliffs" },
      { src: images.feat3, alt: "Luxury reception table" },
      { src: images.feat4, alt: "First kiss at ceremony" },
      { src: images.feat5, alt: "First dance under fairy lights" },
    ],
  },
  aboutPreview: {
    eyebrow: "About Starshot",
    title: "A storyteller behind the lens",
    paragraphs: [
      "Starshot is a Sydney-based wedding photography studio devoted to capturing genuine emotion, natural moments, and the quiet beauty of a love that's entirely your own.",
      "Every couple is welcomed into a calm, luxurious experience — from the first hello to the final heirloom album. The result: timeless photographs you'll return to for a lifetime.",
    ],
    ctaLabel: "Learn More",
    image: images.about,
    imageAlt: "Wedding photographer behind the camera",
  },
  testimonials: {
    eyebrow: "Kind Words",
    title: "Loved by couples across Sydney",
    items: [
      {
        quote:
          "Starshot captured our wedding day with such artistry and grace. Every photograph feels like a film still — we will treasure them forever.",
        author: "Olivia & James",
        venue: "Gunners Barracks, Sydney",
      },
      {
        quote:
          "From the first call to the final album, the entire experience felt effortless and luxurious. The images are breathtaking.",
        author: "Charlotte & Daniel",
        venue: "Palm Beach Elopement",
      },
      {
        quote:
          "We didn't just hire a photographer — we gained a calm, generous presence who made our day even more beautiful.",
        author: "Amelia & Hugo",
        venue: "Bells at Killcare",
      },
    ],
  },
  cta: {
    eyebrow: "Enquire Today",
    title: "Ready to Begin",
    titleItalic: "Your Story?",
    body:
      "Limited weddings booked each year to ensure every couple receives our full attention and care.",
    ctaLabel: "Contact Us",
    backgroundImage: images.feat5,
  },
};

// ---------- ABOUT PAGE ----------
export const about_page = {
  hero: {
    eyebrow: "About Starshot",
    title: "A studio devoted to your story",
    subtitle: "Sydney-based, available worldwide.",
  },
  story: {
    eyebrow: "Our Story",
    title: "Photography rooted in feeling, not formula",
    paragraphs: [
      "Starshot began with a simple belief: a wedding day is best remembered through the small, unscripted moments — the laughter shared, the held breath before vows, the warmth of a quiet glance.",
      "For more than a decade we've had the privilege of documenting weddings across Sydney's most beloved venues, from intimate coastal elopements to grand harbourside celebrations.",
      "Our work is quiet, considered, and deeply personal — designed to feel as timeless in twenty years as it does today.",
    ],
    image: images.about,
    imageAlt: "Photographer portrait",
  },
  philosophy: {
    eyebrow: "Philosophy",
    title: "Natural storytelling. Genuine emotion.",
    titleItalic: "Timeless editing.",
    pillars: [
      { title: "Natural Storytelling", text: "We document your day as it unfolds — present, patient, never intrusive." },
      { title: "Genuine Emotion", text: "We create the space for real moments and capture them with care." },
      { title: "Timeless Editing", text: "Soft, refined tones that age gracefully — never trend-driven." },
    ],
  },
  reasons: {
    eyebrow: "Why Starshot",
    title: "A complete, considered experience",
    items: [
      { iconName: "Camera", title: "Experienced eye", text: "Years of photographing Sydney's most loved venues with a calm, prepared presence." },
      { iconName: "Clock", title: "Fast turnaround", text: "Sneak peeks within a week, full galleries delivered in 4–6 weeks." },
      { iconName: "Sparkles", title: "Refined editing", text: "Timeless, true-to-life colour with a soft, editorial finish." },
      { iconName: "BookHeart", title: "Heirloom albums", text: "Hand-bound fine art albums crafted to last generations." },
      { iconName: "Heart", title: "Stress-free experience", text: "Thoughtful planning support so your day feels effortless." },
    ] as const,
  },
  cta: {
    title: "Let's create something beautiful",
    ctaLabel: "Start Your Journey",
    backgroundImage: images.feat2,
  },
};

// ---------- CONTACT PAGE ----------
export const contact = {
  hero: {
    eyebrow: "Contact",
    title: "Let's begin your story",
    subtitle: "Share a few details about your day and we'll be in touch within 48 hours.",
  },
  studio: {
    label: "Studio",
    text: "By appointment in Sydney, Australia",
  },
  email: "hello@starshot.studio",
  phone: "+61 400 000 000",
  phoneHref: "+61400000000",
  location: "Sydney · NSW · Available worldwide",
  instagram: "@starshot.studio",
  instagramHref: "#",
  investment: {
    label: "Investment",
    text: "Wedding collections begin at $4,800 AUD. Detailed pricing shared upon enquiry.",
  },
  thankYou: {
    eyebrow: "Thank you",
    title: "Your enquiry is on its way",
    body: "We'll be in touch shortly with availability and next steps.",
  },
  submitLabel: "Start Your Journey",
};

// ---------- GALLERY PAGE ----------
export const gallery = {
  hero: {
    eyebrow: "Gallery",
    title: "Moments, gathered with care",
    subtitle: "Browse a curated selection of recent work.",
  },
  categories: [
    { id: "all", label: "All" },
    { id: "weddings", label: "Weddings" },
    { id: "engagements", label: "Engagements" },
    { id: "elopements", label: "Elopements" },
    { id: "reception", label: "Reception" },
  ] as const,
  images: [
    { src: images.gWedding1, alt: "Bridal bouquet", category: "weddings" },
    { src: images.gWedding2, alt: "Bride getting ready", category: "weddings" },
    { src: images.feat4, alt: "First kiss at ceremony", category: "weddings" },
    { src: images.feat1, alt: "Bride in lace gown", category: "weddings" },
    { src: images.gEngagement1, alt: "Engagement in wildflower field", category: "engagements" },
    { src: images.gEngagement2, alt: "Engagement at Sydney harbour", category: "engagements" },
    { src: images.gElopement1, alt: "Elopement on Sydney clifftop", category: "elopements" },
    { src: images.feat2, alt: "Couple on coastal cliffs", category: "elopements" },
    { src: images.gReception1, alt: "Champagne toast", category: "reception" },
    { src: images.gReception2, alt: "First dance", category: "reception" },
    { src: images.feat3, alt: "Luxury reception table", category: "reception" },
    { src: images.feat5, alt: "Dancing under fairy lights", category: "reception" },
  ] as const,
};
