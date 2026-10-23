export type StockPhoto = {
  src: string;
  alt: string;
};

function photo(file: string, alt: string): StockPhoto {
  return {
    src: `/images/${file}`,
    alt,
  };
}

export const photos = {
  shrine: photo(
    "shrine-work.jpg",
    "A healer seated on a red cloth among candles, cowrie shells, calabashes, and ritual objects.",
  ),
  notes: photo(
    "candles-notes.jpg",
    "Lit candles beside a spread of banknotes, a glass of water, and small ritual items.",
  ),
  herbs: photo(
    "herb-smoke.jpg",
    "A bundle of dried herbs smoking in a stone bowl.",
  ),
  figure: photo(
    "power-figure.jpg",
    "A carved wooden power figure dressed with feathers, cloth, and bundles of sticks.",
  ),
  river: photo(
    "river-prayer.jpg",
    "A woman wrapped in white cloth standing in a river, with trees behind her.",
  ),
  offerings: photo(
    "ritual-offerings.jpg",
    "A hand holding a rooster beside a red leather bag set with cowrie shells and a carved wooden tablet.",
  ),
  cowrie: photo(
    "cowrie-shell.jpg",
    "A hand holding a large cowrie shell.",
  ),
} as const;

export const servicePhotos: Record<string, StockPhoto> = {
  "spiritual-consultation": photos.shrine,
  "political-power": photos.offerings,
  "business-financial": photos.notes,
  "traditional-healing": photos.herbs,
  "spiritual-protection": photos.figure,
  "personal-family-guidance": photos.river,
};

export const blogPhotos: Record<string, StockPhoto> = {};
