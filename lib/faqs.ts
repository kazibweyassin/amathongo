import type { FaqItem } from "@/lib/schema";

export const faqs: FaqItem[] = [
  {
    question: "What does House of Amathongo do?",
    answer:
      "House of Amathongo is a traditional African healer. The work is the kind people still call a witch doctor: ancestral divination, political power, court cases, cleansing, protection, and traditional remedies. You bring the trouble. House of Amathongo works on it.",
  },
  {
    question: "How do I ask for the healing?",
    answer:
      "Message on WhatsApp, call, or use the contact form. Say what you want worked on and whether you can meet or must speak remotely. House of Amathongo confirms the time and the fee before the work begins.",
  },
  {
    question: "Is the work private?",
    answer:
      "Yes. Your story stays with the healing. Share what House of Amathongo needs in order to work, and leave out passwords, bank details, and copies of identity documents.",
  },
  {
    question: "Can the healing be done from outside Uganda?",
    answer:
      "Yes. People in Kampala can arrange a visit. People elsewhere in Uganda or abroad can have the work done by phone or WhatsApp. Say where you are when you enquire.",
  },
  {
    question: "How long does the work take?",
    answer:
      "Long enough to read the trouble and do the healing for it. The time is agreed when you book, so you can set it aside.",
  },
  {
    question: "Do I need to visit in person?",
    answer:
      "A visit is available for people in and around Kampala once the meeting place is confirmed. If you are farther away, phone or WhatsApp healing is available for most troubles.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring a clear account of what is happening: who is involved, when it started, and what you want changed. That is enough for House of Amathongo to work with. You do not need to bring objects from the house unless House of Amathongo asks.",
  },
  {
    question: "How much does the healing cost?",
    answer:
      "The fee is agreed with you before the work, so you know it in advance. Ask when you enquire.",
  },
  {
    question: "What can the healer work on?",
    answer:
      "Political power that is blocked, a court case you want won, money and business that will not move, a body or spirit that feels heavy, a home that needs cleansing and protection, and family trouble. Tell House of Amathongo the real problem. The ritual, the cleansing, or the remedy is built around it.",
  },
  {
    question: "What results do people keep?",
    answer:
      "People return, and they send family, when the work has done what they asked: a case won, political power opened, a house that feels clean, money that can stay, or a body that can rest. That is the healing House of Amathongo is known for. It is not a medical cure.",
  },
  {
    question: "Can I reach House of Amathongo on WhatsApp?",
    answer:
      "Yes. Use the WhatsApp button on any page. It opens a chat with House of Amathongo.",
  },
];

export const homeFaqs = faqs.filter((faq) =>
  [
    "How do I ask for the healing?",
    "Is the work private?",
    "What should I bring?",
    "How much does the healing cost?",
    "Can I reach House of Amathongo on WhatsApp?",
  ].includes(faq.question),
);
