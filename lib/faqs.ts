import type { FaqItem } from "@/lib/schema";

export const faqs: FaqItem[] = [
  {
    question: "What is a spiritual consultation?",
    answer:
      "It is a private sitting with Amani. You explain the difficulty in front of you, and you receive traditional spiritual guidance aimed at that situation: direction for love, family, work, protection, or a personal matter that needs a way through. The guidance is proven by the outcomes clients keep.",
  },
  {
    question: "How do I book a consultation?",
    answer:
      "Message on WhatsApp, call, or use the contact form. Say what you want help with and whether you prefer to meet or to speak remotely. Amani confirms the time and the fee before you begin.",
  },
  {
    question: "Are consultations confidential?",
    answer:
      "Yes. Your story stays private. Share what Amani needs in order to help, and leave out passwords, bank details, and copies of identity documents.",
  },
  {
    question: "Can I consult from outside Uganda?",
    answer:
      "Yes. People in Kampala can arrange a visit, and people elsewhere in Uganda or abroad can consult by phone or WhatsApp. Say where you are when you enquire, and Amani will set the consultation up in the way that fits.",
  },
  {
    question: "How long does a consultation take?",
    answer:
      "Long enough to understand the problem and give you guidance for it. The time is agreed when you book, so you can set it aside.",
  },
  {
    question: "Do I need to visit in person?",
    answer:
      "A visit is available for people in and around Kampala once the meeting place is confirmed. If you are farther away, a phone or WhatsApp consultation is available for most concerns.",
  },
  {
    question: "What should I bring to a consultation?",
    answer:
      "Bring a clear account of what is happening: who is involved, when it started, and what you want to see change. That is enough for Amani to work with.",
  },
  {
    question: "How much does a consultation cost?",
    answer:
      "The fee is agreed with you before the consultation, so you know it in advance. Ask when you enquire.",
  },
  {
    question: "What kind of help can I ask for?",
    answer:
      "People come for love and relationships, marriage and family peace, business and money worries, traditional wellness, spiritual protection, and personal decisions. Tell Amani the real problem. The guidance is built around it.",
  },
  {
    question: "Can I contact Amani through WhatsApp?",
    answer:
      "Yes. Use the WhatsApp button on any page. If a number has not been published yet, the button opens the contact form so your message still gets through.",
  },
];

export const homeFaqs = faqs.filter((faq) =>
  [
    "What is a spiritual consultation?",
    "How do I book a consultation?",
    "Are consultations confidential?",
    "What kind of help can I ask for?",
    "Can I contact Amani through WhatsApp?",
  ].includes(faq.question),
);