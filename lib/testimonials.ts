export type Testimonial = {
  quote: string;
  attribution: string;
  context: string;
  service:
    | "spiritual-consultation"
    | "political-power"
    | "court-cases"
    | "business-financial"
    | "traditional-healing"
    | "spiritual-protection"
    | "personal-family-guidance";
};

/**
 * PLACEHOLDER CONTENT: replace with real, consented testimonials before launch.
 * Do not publish invented quotes attributed to people who don't exist.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "I had been dealing with trouble I could not name for two years. The reading named it, explained where it came from, and the work that followed finally moved things. I have been back twice since.",
    attribution: "Grace Nairobi., ",
    context: "Ancestral divination",
    service: "spiritual-consultation",
  },
  {
    quote:
      "He did not rush to give answers. He read slowly, and what he said matched things only my family knew. That is why I trusted the work that came after.",
    attribution: "Samuel K., USA",
    context: "Ancestral divination",
    service: "spiritual-consultation",
  },
  {
    quote:
      "I had been blocked for years in my bid for a local council seat. After the work, doors that had stayed shut began to open. I went back to give thanks and to ask for guidance on the next step.",
    attribution: "Moses T., Jinja",
    context: "Political power",
    service: "political-power",
  },
  {
    quote:
      "My case had dragged on for years and I was exhausted. The work gave me a steadiness I had lost. I walked into court calm, and I returned afterwards to give thanks.",
    attribution: "Peter O., Entebbe",
    context: "Court cases",
    service: "court-cases",
  },
  {
    quote:
      "My shop had slowed down badly and I was behind on rent. The guidance was practical as well as spiritual, and over the following months business steadied. I now send my own customers here.",
    attribution: "Rose A., Kampala",
    context: "Business and financial guidance",
    service: "business-financial",
  },
  {
    quote:
      "Body and spirit both felt heavy for a long time. The herbs and the quiet sessions helped me sleep, and I felt like myself again. I still come for balance every season.",
    attribution: "Brenda T., Wakiso",
    context: "Traditional healing and wellness",
    service: "traditional-healing",
  },
  {
    quote:
      "We kept hearing noises at night and arguing over nothing. After the cleansing and protection, our home felt calm for the first time in a year. My children sleep through the night now.",
    attribution: "The Okello family, Gulu",
    context: "Home protection and cleansing",
    service: "spiritual-protection",
  },
  {
    quote:
      "I was torn between family duty and my own plans to study abroad. The guidance was honest and clear, and I made my decision with a settled heart instead of fear.",
    attribution: "Amina S., Kampala",
    context: "Personal and family guidance",
    service: "personal-family-guidance",
  },
];