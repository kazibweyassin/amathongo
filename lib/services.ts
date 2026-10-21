import type { FaqItem } from "@/lib/schema";

export type Service = {
  slug: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  relevantFor: string[];
  involves: string[];
  expect: string[];
  faqs: FaqItem[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "spiritual-consultation",
    title: "Ancestral Divination",
    description:
      "House of Amathongo reads the trouble through ancestral divination and does the healing that belongs to it. People return when that reading has moved the life they brought.",
    metaTitle: "Ancestral Divination in Uganda",
    metaDescription:
      "Ancestral divination with a traditional African healer in Kampala or by WhatsApp. House of Amathongo reads the trouble and does the healing. People return when it has moved.",
    h1: "Ancestral divination with a traditional healer",
    intro: [
      "This is not a talk about your problem. It is a divination. You set the situation down. House of Amathongo reads it in the ancestral way and does the healing the reading calls for: a ritual, a cleansing, a protection, or a remedy.",
      "People in Kampala, across Uganda, and abroad come when power, a court case, the house, the work, or the body will not move on its own. They come back, and they send relatives, when the work has held.",
    ],
    relevantFor: [
      "A trouble has stayed and you want a healer to read it and work on it.",
      "You want to know what the ancestors are asking before you act.",
      "You are in Kampala, elsewhere in Uganda, or abroad.",
      "You want the work done in private, with the fee agreed first.",
    ],
    involves: [
      "You tell what is wrong, who is in it, and when it started.",
      "Ancestral divination on that account, not on a general story.",
      "The healing the reading calls for.",
      "A next step, and another sitting if the work needs to be continued.",
      "The fee and the time agreed before anything begins.",
    ],
    expect: [
      "A private reading and healing shaped to the trouble you brought.",
      "A result people keep: the case won, the position opened, the house quiet, the work able to hold.",
      "Room for a doctor or a lawyer when the matter also needs one.",
      "A follow-up when the situation calls for it.",
    ],
    faqs: [
      {
        question: "What should I say in the first message?",
        answer:
          "Your name, where you are, and the trouble you want worked on. A short note is enough to arrange the healing.",
      },
      {
        question: "Can this be done on WhatsApp?",
        answer:
          "Yes, when you cannot meet. Say so when you enquire and House of Amathongo will confirm how the work will be done.",
      },
      {
        question: "What do people usually bring?",
        answer:
          "A court case, political power that is blocked, money that will not stay, a home that feels attacked, and a body or spirit that feels heavy. They return when the healing has moved it.",
      },
    ],
    related: ["political-power", "court-cases", "spiritual-protection"],
  },
  {
    slug: "political-power",
    title: "Political Power",
    description:
      "Traditional work for people who want political power: a seat, an office, or influence that has been refused. People return when the position has opened.",
    metaTitle: "Political Power in Uganda",
    metaDescription:
      "Traditional African healing for political power. House of Amathongo works on the seat, the office, and the influence you want. Kampala and WhatsApp.",
    h1: "Traditional work for political power",
    intro: [
      "People come when a position is blocked, a campaign will not move, or authority keeps passing them by. House of Amathongo does the traditional work to open that power.",
      "This is healer’s work, not a lecture about politics. You bring the seat, the office, or the influence you want. The ritual follows that story. People return when the position has opened.",
    ],
    relevantFor: [
      "You want a seat, an office, or a place of authority.",
      "A campaign or a promotion will not move.",
      "Rivals or a spiritual hand are standing in the way of your rise.",
      "You want the work done in private, before the contest.",
    ],
    involves: [
      "The position you want, and who is standing in the way.",
      "A ritual for that political power.",
      "What you are to do, and what you are to stop doing, while the work is in motion.",
      "Another sitting if the contest needs more than one working.",
    ],
    expect: [
      "Healing aimed at power that holds. That is the result people keep.",
      "A private working. Your rivals are not told that you came.",
      "The ordinary work of the campaign still belongs to you. The healing is the traditional work on the rise itself.",
    ],
    faqs: [
      {
        question: "Can you work for a seat or an office?",
        answer:
          "Yes. Name the position and who is standing in the way. House of Amathongo does the ritual for that rise. People return when the position has opened.",
      },
      {
        question: "Can this be done before a campaign begins?",
        answer:
          "Yes. Many people come before they announce, while the way can still be opened.",
      },
      {
        question: "Will anyone be told that I came?",
        answer:
          "No. The work is private. You decide what you later share.",
      },
    ],
    related: ["court-cases", "spiritual-consultation", "business-financial"],
  },
  {
    slug: "court-cases",
    title: "Court Cases",
    description:
      "Traditional work for a court case you want decided in your favor. People return when the judgment has gone their way.",
    metaTitle: "Court Cases in Uganda",
    metaDescription:
      "Traditional African healing for court cases. House of Amathongo works on the case you want won, whether it is coming or already before a judge. Kampala and WhatsApp.",
    h1: "Traditional work for court cases",
    intro: [
      "People come when a case is standing against them, a hearing is near, or a judgment has gone the wrong way. House of Amathongo does the traditional work so the case turns in their favor.",
      "This is healer’s work, not a lecture about the law. You bring the charge, the claim, or the dispute. The ritual follows that case. People return when the judgment has gone their way.",
    ],
    relevantFor: [
      "A court case is coming, and you want it won.",
      "The matter is already before a judge.",
      "A rival or a spiritual hand is pressing the case against you.",
      "You want the work done in private, before the hearing.",
    ],
    involves: [
      "The story of the case, and the judgment you want kept.",
      "A ritual for that court matter to be decided in your favor.",
      "What you are to do, and what you are to stop doing, while the work is in motion.",
      "Another sitting if the case needs more than one working.",
    ],
    expect: [
      "Healing aimed at a case that goes your way. That is the result people keep.",
      "A private working. The court is not told that you came.",
      "Your lawyer still handles the papers. The healing is the traditional work on the case itself.",
    ],
    faqs: [
      {
        question: "Can you work on a case that is already in court?",
        answer:
          "Yes. Bring the charge, the claim, or the dispute, and what you want the judgment to be. House of Amathongo does the work for that case. People have kept a decision that went their way.",
      },
      {
        question: "Can you work before the hearing?",
        answer:
          "Yes. Say when the court sits. The work is arranged before that day.",
      },
      {
        question: "Will the court be told that I came?",
        answer:
          "No. The work is private. You decide what you later share.",
      },
    ],
    related: ["political-power", "spiritual-consultation", "spiritual-protection"],
  },
  {
    slug: "business-financial",
    title: "Business & Financial Guidance",
    description:
      "Proven traditional guidance for a business that has slowed and for money worries that need a steadier path. Helping Ugandan livelihoods stabilize and grow for over a decade.",
    metaTitle: "Business and Financial Guidance in Uganda — Proven Results",
    metaDescription:
      "Business and financial guidance in Uganda. amathongo helps with a struggling livelihood, protection of what you have built, and a clearer way forward. Proven outcomes.",
    h1: "Business and financial guidance — steady your livelihood",
    intro: [
      "A shop goes quiet, a debt sits too long, or a person cannot tell whether to stay in a job or begin something new. People bring those livelihood worries to amathongo because they want traditional guidance as well as their own effort.",
      "The consultation looks at the business or the money problem you describe and offers direction for stability, protection of what you have already built, and a clearer path for the work ahead. Business owners and workers return because the guidance produces tangible results.",
    ],
    relevantFor: [
      "A business is slow, new, or weighed down by debt, and you want help steadying it — with proven guidance.",
      "You are deciding whether to stay in work, change it, or start again.",
      "Money in the family has become a quarrel and you want guidance before you act.",
      "You want spiritual support for the livelihood you are trying to build — support that delivers.",
    ],
    involves: [
      "A plain description of the work or the money worry.",
      "Traditional guidance for stability and for the decision in front of you.",
      "Attention to what you can do next in the business itself.",
      "A follow-up if the situation needs to be revisited.",
    ],
    expect: [
      "Guidance aimed at a steadier livelihood and protection of your effort — proven by client outcomes.",
      "A private conversation about the real numbers and the real fear, spoken in ordinary language.",
      "Room to keep your accountant or lawyer involved where contracts, tax, or debt need them.",
    ],
    faqs: [
      {
        question: "Can I consult about a business that is failing?",
        answer:
          "Yes. Explain what changed, what you still have, and what you want to recover. amathongo gives guidance for that situation. Many businesses have stabilized after consultation.",
      },
      {
        question: "Is this only for shop owners?",
        answer:
          "No. People consult about employment, family money, and new work as well as about a trading business. The guidance adapts to your livelihood.",
      },
      {
        question: "Do I need to bring my accounts?",
        answer:
          "Bring what helps you explain the problem. You do not need to hand over bank cards or original documents.",
      },
    ],
    related: ["personal-family-guidance", "spiritual-consultation", "spiritual-protection"],
  },
  {
    slug: "traditional-healing",
    title: "Traditional Healing & Wellness",
    description:
      "Proven traditional support for strength, rest, and balance when body and spirit both feel heavy. A decade of helping people feel steadier.",
    metaTitle: "Traditional Healing in Uganda — Proven Wellness Guidance",
    metaDescription:
      "Traditional healing consultations in Uganda for people seeking strength, rest, and spiritual balance. Speak with amathongo in private. Proven outcomes.",
    h1: "Traditional healing and wellness — feel steady again",
    intro: [
      "Traditional healing in Uganda is a long practice of listening when a person feels unwell in body, sleep, or spirit. amathongo offers that kind of consultation: a private sitting for people who want to feel steadier and to receive guidance for their wellbeing.",
      "You describe how you have been living and what feels wrong. amathongo responds with traditional guidance aimed at rest, strength, and peace of mind, so the help matches the person in the room. Clients return because the guidance produces real improvement.",
    ],
    relevantFor: [
      "You want traditional support for how you have been feeling — with proven results.",
      "Sleep, worry, or a heavy mood is disturbing daily life.",
      "The family is caring for someone and needs spiritual support around that burden.",
      "You want wellness guidance that treats you as a whole person.",
    ],
    involves: [
      "Listening to what you are experiencing.",
      "Traditional guidance for wellness, rest, and peace of mind.",
      "Advice you can follow in the days after the consultation.",
      "Encouragement to keep clinic care where a doctor is already treating you.",
    ],
    expect: [
      "A calm consultation focused on your strength and balance.",
      "Guidance that belongs to your situation, not a single remedy for every person.",
      "Respect for medical care. If you are seriously unwell, see a hospital as well.",
    ],
    faqs: [
      {
        question: "Who is this consultation for?",
        answer:
          "Anyone who wants traditional support for wellbeing: poor sleep, a heavy spirit, long worry, or the strain of caring for family. People report feeling steadier after their consultation.",
      },
      {
        question: "Should I stop my medicine?",
        answer:
          "No. Keep the treatment a doctor has given you. The consultation is spiritual support alongside that care.",
      },
      {
        question: "Can I speak about fertility or a long illness?",
        answer:
          "You can bring the worry. amathongo offers traditional guidance for the burden you are carrying and will tell you to stay with your clinic where health needs a doctor.",
      },
    ],
    related: ["spiritual-protection", "spiritual-consultation", "personal-family-guidance"],
  },
  {
    slug: "spiritual-protection",
    title: "Spiritual Protection & Guidance",
    description:
      "Proven protection and cleansing for a home or a life that feels exposed, disturbed, or in need of covering. A decade of restoring peace in Ugandan homes.",
    metaTitle: "Spiritual Protection and Guidance in Uganda — Proven Results",
    metaDescription:
      "Spiritual protection in Uganda for the home and family. amathongo offers traditional guidance to restore peace and covering. Private consultations. Proven outcomes.",
    h1: "Spiritual protection and guidance — restore peace in your home",
    intro: [
      "Some houses stop feeling like home. Sleep breaks, worry follows a person to work, or a family senses that peace has left the compound. amathongo consults with people who want spiritual protection and a return to calm.",
      "You describe what changed. The consultation offers traditional guidance for covering the home and the people in it, cleansing what feels disturbed, and restoring a sense of safety in daily life. Families return because the protection holds.",
    ],
    relevantFor: [
      "The home feels unsettled and you want protection for the family — with proven guidance.",
      "Sleep, work, or peace of mind has been disturbed.",
      "You want a traditional cleansing and guidance for the household.",
      "You want the matter handled privately and calmly.",
    ],
    involves: [
      "A careful account of what changed and who is affected.",
      "Traditional guidance for protection and for peace in the home.",
      "Steps you can take to steady the household afterward.",
      "A direct word if a living person is the threat and the police should be involved.",
    ],
    expect: [
      "Guidance aimed at protection, cleansing, and a quieter home — proven by client outcomes.",
      "A consultation that takes the fear seriously without turning it into a spectacle.",
      "Help that does not ask you to harm anyone or to spread an accusation through the family.",
    ],
    faqs: [
      {
        question: "Can this be for a whole household?",
        answer:
          "Yes. Say who lives there and what each person has noticed. The guidance can cover the home, not only one person. Households have reported feeling settled again.",
      },
      {
        question: "What if I am being threatened by someone?",
        answer:
          "Tell amathongo, and also tell the police or a trusted local authority. Spiritual guidance supports you. It does not replace help when a person is putting you in danger.",
      },
      {
        question: "Do I need to bring anything from the house?",
        answer:
          "No. Your account of what is happening is what the consultation uses.",
      },
    ],
    related: ["spiritual-consultation", "traditional-healing", "personal-family-guidance"],
  },
  {
    slug: "personal-family-guidance",
    title: "Personal & Family Concerns",
    description:
      "Proven guidance for private decisions, family duty, study, travel, and work that will not settle on their own. A decade of helping people find their way forward.",
    metaTitle: "Personal and Family Guidance in Uganda — Proven Results",
    metaDescription:
      "Personal and family guidance in Uganda for study, work, travel, and decisions at home. Speak privately with amathongo and get a way forward. Proven outcomes.",
    h1: "Personal and family guidance — find your way forward",
    intro: [
      "Some problems do not fit one name. A parent's expectation, a plan to travel, a job you want, an exam that matters, or grief the rest of the family has no time for. amathongo takes these personal and family concerns one by one.",
      "You bring the decision or the duty that is sitting on you. The consultation gives traditional guidance for that path, so you can see what to do next and how to carry the family with you. Clients return because the guidance works.",
    ],
    relevantFor: [
      "You are facing a decision and want traditional direction before you commit — with proven guidance.",
      "Family responsibility is heavy and you need a private place to speak.",
      "Study, travel, or work is stuck and the worry has entered the home.",
      "You have a question you are not ready to raise with relatives.",
    ],
    involves: [
      "Listening to the decision or the duty in front of you.",
      "Guidance that separates what you can do from what you are waiting on.",
      "Help with how to speak to family about it.",
      "A follow-up when the situation moves.",
    ],
    expect: [
      "A consultation that stays with your circumstances and points to a next step.",
      "Privacy inside the family: what you share with amathongo is not passed on.",
      "Support while you also handle applications, studies, or employers in the ordinary way.",
    ],
    faqs: [
      {
        question: "Can I ask about work, study, or travel?",
        answer:
          "Yes. Bring the worry and what you are hoping to achieve. amathongo gives guidance for that effort and for the family around it. People report clearer decisions after consulting.",
      },
      {
        question: "Is this only for urgent problems?",
        answer:
          "No. People also consult before a decision, while there is still time to choose well.",
      },
      {
        question: "Can I consult without telling my family?",
        answer:
          "Yes. The conversation is confidential.",
      },
    ],
    related: ["marriage-family", "spiritual-consultation", "business-financial"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function relatedServices(service: Service): Service[] {
  return service.related
    .map((slug) => getService(slug))
    .filter((item): item is Service => Boolean(item));
}
