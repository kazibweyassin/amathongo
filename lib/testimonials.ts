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
      "I had been blocked for years in my bid for a local council seat. After the work, doors that had stayed shut began to open. I went back to give thanks and to ask for guidance on the next step.",
    attribution: "Moses T., Jinja",
    context: "Political power",
    service: "political-power",
  },
  {
    quote:
      "My case had dragged on for years and I was exhausted. The work gave me a steadiness I had lost. I walked into court calm, and I returned afterwards to give thanks.",
    attribution: "Peter O., Italy",
    context: "Court cases",
    service: "court-cases",
  },
  {
    quote:
      "My shop had slowed down badly and I was behind on rent. The guidance was practical as well as spiritual, and over the following months business steadied. I now send my own customers here.",
    attribution: "Rose A., Kampala",
    context: "Business and financial Enhancement",
    service: "business-financial",
  }

];