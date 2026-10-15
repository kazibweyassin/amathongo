export type StockPhoto = {
  src: string;
  alt: string;
  href: string;
};

function photo(id: string, alt: string): StockPhoto {
  return {
    src: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`,
    alt,
    href: "https://unsplash.com",
  };
}

export const photos = {
  ankara: photo(
    "1523824921871-d6f1a15151f1",
    "A woman in a black top and a yellow and red patterned skirt, standing against a warm wall.",
  ),
  land: photo(
    "1547471080-7cc2caa01a7e",
    "An acacia tree on open East African grassland at sunset, with hills beyond.",
  ),
  divination: photo(
    "1478131143081-80f7f84ca84d",
    "People seated around a fire at night under the trees.",
  ),
  political: photo(
    "1529107386315-e1a2ed48a620",
    "A parliament chamber in session, with seats filled around the floor.",
  ),
  court: photo(
    "1575505586569-646b2ca898fc",
    "A wooden judge's gavel resting on its block.",
  ),
  money: photo(
    "1553729459-efe14ef6055d",
    "Hands holding a fan of banknotes.",
  ),
  remedies: photo(
    "1532336414038-cf19250c5757",
    "Metal bowls of dried herbs, roots, bark, and spices laid out for remedies.",
  ),
  protection: photo(
    "1449844908441-8829872d2607",
    "A wooden house in the morning light, with trees around it.",
  ),
  family: photo(
    "1511895426328-dc8714191300",
    "A large family holding hands together at sunset.",
  ),
} as const;

export const servicePhotos: Record<string, StockPhoto> = {
  "spiritual-consultation": photos.divination,
  "political-power": photos.political,
  "court-cases": photos.court,
  "business-financial": photos.money,
  "traditional-healing": photos.remedies,
  "spiritual-protection": photos.protection,
  "personal-family-guidance": photos.family,
};

export const blogPhotos: Record<string, StockPhoto> = {
  "traditional-spiritual-consultation-uganda": photos.divination,
  "spiritual-guidance-uganda": photos.ankara,
  "what-to-expect-from-a-spiritual-consultation": photos.protection,
  "traditional-healing-uganda": photos.remedies,
  "spiritual-consultation-kampala": photos.land,
};
