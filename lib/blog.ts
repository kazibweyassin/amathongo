export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  date: string;
  author: string;
  sections: {
    heading?: string;
    paragraphs: string[];
  }[];
  relatedPosts: string[];
  relatedServices: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "traditional-spiritual-consultation-uganda",
    title: "What a traditional African healer can do for you",
    description:
      "What a traditional African healer in Uganda can do for political power, a court case, money, a house, and a body that will not rest, and how people ask House of Amathongo to do the work.",
    h1: "What a traditional African healer can do for you",
    date: "2026-03-12",
    author: "House of Amathongo",
    relatedPosts: [
      "what-to-expect-from-a-spiritual-consultation",
      "spiritual-guidance-uganda",
    ],
    relatedServices: ["spiritual-consultation", "personal-family-guidance"],
    sections: [
      {
        paragraphs: [
          "People look for a traditional African healer in Uganda when a problem has stayed too long and talking has not moved it. This is the work people call a witch doctor. House of Amathongo does the healing: political power, a court case, a cleansing, protection, ancestral divination, or a traditional remedy. People come back when that work has held — a case won, a seat opened, a house that feels clean, money that can stay.",
          "The healer is based in Uganda, with particular care for people in Kampala. If you are elsewhere, the same healing can be done by phone or WhatsApp.",
        ],
      },
      {
        heading: "Problems people bring",
        paragraphs: [
          "A court case is standing against you. A seat or an office will not open. A child or a parent is carrying something the family cannot fix by talking. A business in Kampala will not hold money. The house no longer feels peaceful. These are the ordinary, serious reasons people write.",
          "[[/services/spiritual-consultation|Ancestral divination]] reads the trouble and names the work. You do not leave with advice to try on your own. The healing is done for the problem you named, and you can return if it needs to be continued.",
        ],
      },
      {
        heading: "What the healing does",
        paragraphs: [
          "The unseen side of the trouble is worked on. A case is turned. Political power is opened. A house is cleansed. Protection is set. A remedy is prepared for rest and strength. The result is the change people keep.",
          "A doctor, a lawyer, or an accountant still has their own role. The healing sits beside that help. It is not a medical cure, and it is not a promise of a court win, a visa, a job, or sudden wealth.",
        ],
      },
      {
        heading: "How to begin",
        paragraphs: [
          "Send a short note with your name, where you are, and the trouble you want worked on. The steps are on the [[/how-it-works|how it works]] page. The fee and the time are agreed before the healing starts.",
          "If you want a closer look at the work itself, read [[/blog/what-to-expect-from-a-spiritual-consultation|what to expect when the healer works]].",
        ],
      },
    ],
  },
  {
    slug: "spiritual-guidance-uganda",
    title: "How a traditional African healer in Uganda works",
    description:
      "How a traditional African healer in Uganda does the work — political power, court cases, cleansing, protection, and ancestral divination — and how people ask House of Amathongo to begin.",
    h1: "How a traditional African healer in Uganda works",
    date: "2026-04-02",
    author: "House of Amathongo",
    relatedPosts: [
      "traditional-spiritual-consultation-uganda",
      "spiritual-consultation-kampala",
    ],
    relatedServices: ["spiritual-consultation", "spiritual-protection"],
    sections: [
      {
        paragraphs: [
          "A traditional African healer is most useful when the work is private, specific, and done on the trouble you named. People return to House of Amathongo when the healing has moved that trouble. That is the standard this practice works to. The work is ritual, cleansing, divination, and remedies.",
          "Before you write, name what must change. A case won. Political power opened. A home cleansed. A business that can hold money. Protection for the family. Say it, even in a few lines.",
        ],
      },
      {
        heading: "What the healing includes",
        paragraphs: [
          "The trouble is read before the work begins. A time and a fee are agreed in advance. The ritual, cleansing, protection, or remedy is done for your situation. The matter stays private.",
          "For many people in Kampala, a visit is the right form. For others, phone or WhatsApp is better. Say which you prefer. House of Amathongo will arrange the one that fits the trouble.",
        ],
      },
      {
        heading: "How House of Amathongo works",
        paragraphs: [
          "You name the situation. The healing follows that story, whether it is a court case, political power, money, or a home that feels disturbed. The aim is the work itself.",
          "The [[/services|services]] pages set out the main areas: political power and court cases, money rituals, traditional remedies, cleansing and protection, and family troubles. Start with the one closest to your life, or send a general enquiry.",
        ],
      },
      {
        heading: "A practical first step",
        paragraphs: [
          "Write three or four sentences about the trouble. Send them through the [[/contact|contact page]] or on WhatsApp. You will hear how the healing can be arranged and what to prepare.",
        ],
      },
    ],
  },
  {
    slug: "what-to-expect-from-a-spiritual-consultation",
    title: "What to expect when the healer works",
    description:
      "What happens before, during, and after traditional healing with House of Amathongo: the reading, the ritual or remedy, and what people keep.",
    h1: "What to expect when the healer works",
    date: "2026-05-18",
    author: "House of Amathongo",
    relatedPosts: [
      "traditional-spiritual-consultation-uganda",
      "spiritual-consultation-kampala",
    ],
    relatedServices: ["spiritual-consultation", "personal-family-guidance"],
    sections: [
      {
        paragraphs: [
          "The first healing is easier when you know the shape of it. You name the trouble. House of Amathongo reads it and does the traditional work: divination, a ritual, cleansing, protection, or a remedy. People come back when that result has held.",
          "The pattern below is the usual one. Your own work can be shorter or longer. The length is agreed when you ask.",
        ],
      },
      {
        heading: "Before you arrive or call",
        paragraphs: [
          "You will already know the time, the fee, and whether you are meeting or speaking remotely. Come ready to say what happened and what you want changed.",
          "The [[/faq|FAQ]] covers the practical questions people still have at this point, including what to say and how healing by WhatsApp is done.",
        ],
      },
      {
        heading: "During the healing",
        paragraphs: [
          "You describe the trouble. House of Amathongo reads it and does the work for it. A case is turned. Political power is opened. A house is cleansed. Protection is set. A remedy is given for rest. If a clinic or a lawyer would also serve you, House of Amathongo will say so. The healing continues alongside that. It does not replace a doctor or a lawyer.",
        ],
      },
      {
        heading: "Afterwards",
        paragraphs: [
          "The work has been done for the problem you brought. If a later sitting would carry it further, House of Amathongo arranges it. If one sitting is enough, you keep what was done.",
          "The full sequence is on [[/how-it-works|how the healing is arranged]]. When you are ready, use [[/contact|contact]].",
        ],
      },
    ],
  },
  {
    slug: "traditional-healing-uganda",
    title: "Traditional healing in Uganda",
    description:
      "How a traditional African healer in Uganda works on rest, strength, and a heavy spirit, and how to ask House of Amathongo for a remedy.",
    h1: "Traditional healing in Uganda",
    date: "2026-06-30",
    author: "House of Amathongo",
    relatedPosts: [
      "traditional-spiritual-consultation-uganda",
      "what-to-expect-from-a-spiritual-consultation",
    ],
    relatedServices: ["traditional-healing", "spiritual-protection"],
    sections: [
      {
        paragraphs: [
          "Traditional healing in Uganda is a living practice. People still look for a healer when sleep, strength, or peace of mind has failed them. Those who came heavy or sleepless have used this work to feel steady again, alongside their doctor.",
          "House of Amathongo’s [[/services/traditional-healing|traditional healing and remedies]] are for that need. You explain how you have been living. A remedy, and the spiritual work that belongs with it, is prepared for you.",
        ],
      },
      {
        heading: "What people ask for",
        paragraphs: [
          "Help with a heavy mood. Disturbed sleep. The strain of caring for a relative. A wish to feel strong again in daily life. Worry about illness can be brought as well. Stay with your clinic. The remedy is not a medical cure.",
          "The work is private. The remedy belongs to your situation, not to a single mixture offered to everyone who walks in.",
        ],
      },
      {
        heading: "Alongside the clinic",
        paragraphs: [
          "Many people keep their doctor and their medicine while they seek traditional healing. That is welcome. Tell House of Amathongo what care you are already receiving so the remedy can sit beside it.",
          "If you are in severe pain, struggling to breathe, or otherwise in danger, go to a hospital first. Ask for the healing when you are safe enough to speak.",
        ],
      },
      {
        heading: "How to enquire",
        paragraphs: [
          "Say that the body or the spirit is the concern, and describe in a few lines how you have been feeling. You can [[/contact|enquire]] from Kampala or from farther away. Read [[/blog/spiritual-guidance-uganda|how a traditional African healer works]] if you are still deciding whether this is the right step.",
        ],
      },
    ],
  },
  {
    slug: "spiritual-consultation-kampala",
    title: "Asking a traditional healer in Kampala",
    description:
      "How to ask a traditional African healer in Kampala to begin, what to send in the first message, and how visits and WhatsApp healing are arranged.",
    h1: "Asking a traditional healer in Kampala",
    date: "2026-08-14",
    author: "House of Amathongo",
    relatedPosts: [
      "what-to-expect-from-a-spiritual-consultation",
      "spiritual-guidance-uganda",
    ],
    relatedServices: ["spiritual-consultation", "personal-family-guidance"],
    sections: [
      {
        paragraphs: [
          "Kampala is where most people enquire, and where many of them have kept the result they came for. Some want to meet the healer. Some are elsewhere in Uganda, or outside the country, and want the work done by phone or WhatsApp. Both can be arranged. Tell House of Amathongo which you need.",
          "The meeting place is confirmed with you before you travel. Use the details on the [[/contact|contact page]], and wait for a reply before you set out.",
        ],
      },
      {
        heading: "What to send first",
        paragraphs: [
          "Your name, the healing you want, and whether you are in Kampala or farther away. A few sentences are more useful than a long history. You can leave other people’s private details out of the first note.",
          "If a doctor, a lawyer, or an accountant is already part of the story, mention it. That helps House of Amathongo shape the [[/services/spiritual-consultation|ancestral divination]] and the rest of the healing so it sits beside what you are already doing.",
        ],
      },
      {
        heading: "A visit, or a call",
        paragraphs: [
          "If a visit is right, the time, the place, and the fee are agreed first. If you are outside Kampala, ask for phone or WhatsApp. House of Amathongo does the healing in the form that lets the work be done.",
          "You know the cost before you pay and before you travel. That keeps the arrangement clear for both of you.",
        ],
      },
      {
        heading: "After you enquire",
        paragraphs: [
          "You should receive a reply about which healing is needed and when it can be done. The [[/how-it-works|steps from the first message to the healing]] show the whole path in one place.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function relatedPosts(post: BlogPost): BlogPost[] {
  return post.relatedPosts
    .map((slug) => getPost(slug))
    .filter((item): item is BlogPost => Boolean(item));
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-UG", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}
