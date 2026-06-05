// Gallery images — add new photos by dropping them in src/assets/ and importing here.
// `category` filters the gallery page.
import w1 from "@/assets/g-wedding-1.jpg";
import w2 from "@/assets/g-wedding-2.jpg";
import w3 from "@/assets/feat-4.jpg";
import w4 from "@/assets/feat-1.jpg";
import e1 from "@/assets/g-engagement-1.jpg";
import e2 from "@/assets/g-engagement-2.jpg";
import el1 from "@/assets/g-elopement-1.jpg";
import el2 from "@/assets/feat-2.jpg";
import r1 from "@/assets/g-reception-1.jpg";
import r2 from "@/assets/g-reception-2.jpg";
import r3 from "@/assets/feat-3.jpg";
import r4 from "@/assets/feat-5.jpg";

export type GalleryCategory = "weddings" | "engagements" | "elopements" | "reception";

export type GalleryImage = {
  src: string;
  alt: string;
  category: GalleryCategory;
};

export const galleryImages: GalleryImage[] = [
  { src: w1, alt: "Bridal bouquet", category: "weddings" },
  { src: w2, alt: "Bride getting ready", category: "weddings" },
  { src: w3, alt: "First kiss at ceremony", category: "weddings" },
  { src: w4, alt: "Bride in lace gown", category: "weddings" },
  { src: e1, alt: "Engagement in wildflower field", category: "engagements" },
  { src: e2, alt: "Engagement at Sydney harbour", category: "engagements" },
  { src: el1, alt: "Elopement on Sydney clifftop", category: "elopements" },
  { src: el2, alt: "Couple on coastal cliffs", category: "elopements" },
  { src: r1, alt: "Champagne toast", category: "reception" },
  { src: r2, alt: "First dance", category: "reception" },
  { src: r3, alt: "Luxury reception table", category: "reception" },
  { src: r4, alt: "Dancing under fairy lights", category: "reception" },
];

export const categories: { id: GalleryCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "weddings", label: "Weddings" },
  { id: "engagements", label: "Engagements" },
  { id: "elopements", label: "Elopements" },
  { id: "reception", label: "Reception" },
];
