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
  night: photo(
    "1507400492013-162706c8c05e",
    "A dark night sky full of stars over a black ridgeline of trees.",
  ),
  office: photo(
    "1507679799987-c73779587ccf",
    "A person in a dark suit fastening a jacket in a stairwell.",
  ),
  gavel: photo(
    "1575505586569-646b2ca898fc",
    "A wooden judge's gavel resting on its block.",
  ),
  coffee: photo(
    "1447933601403-0c6688de566e",
    "A close spread of roasted coffee beans.",
  ),
  herbs: photo(
    "1532336414038-cf19250c5757",
    "Metal bowls of dried herbs, roots, bark, and spices laid out for remedies.",
  ),
  forestMist: photo(
    "1448375240586-882707db888b",
    "Sunlight falling through mist in a dense forest.",
  ),
  sunrise: photo(
    "1490730141103-6cac27aaab94",
    "A person standing with arms open on wet sand at sunrise, reflected in the water.",
  ),
  ankaraPurple: photo(
    "1531123897727-8f129e1688ce",
    "A woman in a purple patterned top and white collar, looking slightly aside.",
  ),
  land: photo(
    "1547471080-7cc2caa01a7e",
    "An acacia tree on open East African grassland at sunset, with hills beyond.",
  ),
  ankara: photo(
    "1523824921871-d6f1a15151f1",
    "A woman in a black top and a yellow and red patterned skirt, standing against a warm wall.",
  ),
  savanna: photo(
    "1516026672322-bc52d61a55d5",
    "A lone tree on open grassland at dusk, with hills along the horizon.",
  ),
  spiral: photo(
    "1472214103451-9374bd1c798e",
    "A stone spiral set in green hills, with the sun low on the horizon.",
  ),
  ridge: photo(
    "1469474968028-56623f02e42e",
    "A person standing on a rocky ridge above green hills in low sun.",
  ),
  man: photo(
    "1522529599102-193c0d76b5b6",
    "A man standing outdoors in daylight, looking toward the camera.",
  ),
  canopy: photo(
    "1513836279014-a89f7a76ae86",
    "Tall trees photographed from the ground, looking up through the canopy.",
  ),
  hills: photo(
    "1542273917363-3b1817f69a2d",
    "Green forested hills with mist lying in the valley.",
  ),
} as const;

export const servicePhotos: Record<string, StockPhoto> = {
  "spiritual-consultation": photos.night,
  "political-power": photos.office,
  "court-cases": photos.gavel,
  "business-financial": photos.coffee,
  "traditional-healing": photos.herbs,
  "spiritual-protection": photos.forestMist,
  "personal-family-guidance": photos.sunrise,
};

export const blogPhotos: Record<string, StockPhoto> = {
  "traditional-spiritual-consultation-uganda": photos.spiral,
  "spiritual-guidance-uganda": photos.ridge,
  "what-to-expect-from-a-spiritual-consultation": photos.man,
  "traditional-healing-uganda": photos.canopy,
  "spiritual-consultation-kampala": photos.hills,
};
