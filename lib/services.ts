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
    title: "Money & Business Rituals",
    description:
      "Rituals for a business that has gone quiet and money that will not stay. The result people keep is work that can hold what they earn.",
    metaTitle: "Money and Business Rituals in Uganda",
    metaDescription:
      "Money and business rituals with a traditional African healer in Uganda. Clear a blockage, steady a shop, and protect what you have already built.",
    h1: "Money and business rituals",
    intro: [
      "A shop goes quiet, a debt sits too long, or money leaves a house as fast as it enters. People bring that livelihood to House of Amathongo for traditional work, not for a lecture about business.",
      "The ritual looks at the blockage on the work you describe: bad luck, jealousy, a spiritual hand on the money, or a decision you cannot make. The result people keep is a livelihood that can hold. It is not a promise of sudden wealth.",
    ],
    relevantFor: [
      "A business is slow, new, or weighed down, and you want the blockage cleared.",
      "Money comes in and does not stay.",
      "You must decide whether to stay in work, change it, or start again.",
      "Family money has become a quarrel.",
    ],
    involves: [
      "A plain account of the work or the money trouble.",
      "A ritual for stability, protection of what you have built, and the decision in front of you.",
      "What you are to do in the business itself while the work is in motion.",
      "Another sitting if the situation needs to be revisited.",
    ],
    expect: [
      "Healing aimed at a steadier livelihood. That is the result people return to keep.",
      "A private working on the real numbers and the real fear.",
      "Room to keep an accountant or a lawyer where contracts, tax, or debt need them.",
    ],
    faqs: [
      {
        question: "Can you work on a business that is failing?",
        answer:
          "Yes. Say what changed, what you still have, and what you want recovered. House of Amathongo does the ritual for that situation. People have used it to steady the work again.",
      },
      {
        question: "Is this only for shop owners?",
        answer:
          "No. People also bring employment, family money, and new work.",
      },
      {
        question: "Do I need to bring my accounts?",
        answer:
          "Bring what helps you explain the trouble. Do not hand over bank cards or original documents.",
      },
    ],
    related: ["personal-family-guidance", "spiritual-consultation", "spiritual-protection"],
  },
  {
    slug: "traditional-healing",
    title: "Traditional Healing & Remedies",
    description:
      "Traditional healing for a body and spirit that feel heavy. People who came sleepless or worn down have used the remedies to feel steady again, beside their doctor.",
    metaTitle: "Traditional Healer in Uganda",
    metaDescription:
      "Traditional African healing and remedies in Uganda for rest, strength, and a heavy spirit. House of Amathongo works beside your doctor, not instead of a hospital.",
    h1: "Traditional healing and remedies",
    intro: [
      "Traditional healing in Uganda is the work of listening when a person is unwell in body, sleep, or spirit, and then treating that weight in the old way: cleansing, prayer, and a remedy prepared for that person.",
      "You describe how you have been living. House of Amathongo does the healing that matches you. People who came tired, sleepless, or heavy have felt steady again. Keep the medicine a doctor has given you. This is not a cure for a named disease, and a medical emergency belongs in a hospital.",
    ],
    relevantFor: [
      "Sleep, worry, or a heavy spirit is disturbing daily life.",
      "You want a traditional remedy, not a general talk about wellness.",
      "The family is caring for someone and needs spiritual support around that burden.",
      "You want the person treated as a whole, body and spirit together.",
    ],
    involves: [
      "A hearing of what you are suffering.",
      "Cleansing and a traditional remedy for that suffering.",
      "What to do in the days after the healing.",
      "A clear word to stay with the clinic if a doctor is already treating you.",
    ],
    expect: [
      "Healing aimed at rest and strength. That is the result people have kept.",
      "A remedy that belongs to your situation.",
      "Respect for medical care. If you are seriously unwell, see a hospital as well.",
    ],
    faqs: [
      {
        question: "Who is this healing for?",
        answer:
          "Anyone carrying poor sleep, a heavy spirit, long worry, or the strain of caring for family. People use it to feel steady enough for ordinary days again.",
      },
      {
        question: "Should I stop my medicine?",
        answer:
          "No. Keep the treatment a doctor has given you. The healing sits beside that care. It does not replace it.",
      },
      {
        question: "Can I speak about fertility or a long illness?",
        answer:
          "You can bring the worry. House of Amathongo offers traditional healing for the burden you are carrying and will tell you to stay with your clinic where the body needs a doctor.",
      },
    ],
    related: ["spiritual-protection", "spiritual-consultation", "personal-family-guidance"],
  },
  {
    slug: "spiritual-protection",
    title: "Cleansing & Protection",
    description:
      "Cleansing and protection for a home or a life that feels exposed, cursed, or disturbed. The result families keep is a house that feels covered again.",
    metaTitle: "Spiritual Cleansing and Protection in Uganda",
    metaDescription:
      "Cleansing and protection with a traditional African healer in Uganda. Clear a disturbed home and cover the people in it. Kampala and WhatsApp.",
    h1: "Cleansing and protection",
    intro: [
      "Some houses stop feeling like home. Sleep breaks. Worry follows a person to work. A family senses that something has been sent against them, or that peace has left the compound. House of Amathongo cleanses that disturbance and puts protection on the people and the place.",
      "You describe what changed. The work covers the home, clears what feels wrong, and restores a sense of safety. Families come back when the house feels calm enough to live in again.",
    ],
    relevantFor: [
      "The home feels unsettled, watched, or under a spiritual attack.",
      "Sleep, work, or peace of mind has been disturbed.",
      "You want a traditional cleansing for the whole household.",
      "You want the matter handled privately, without a spectacle.",
    ],
    involves: [
      "A careful account of what changed and who is affected.",
      "Cleansing and protection for the home and the people in it.",
      "What you are to do to keep the household steady afterward.",
      "A direct word if a living person is the threat and the police should be called.",
    ],
    expect: [
      "Work aimed at a cleansed, covered, quieter home. That is the result families keep.",
      "Healing that takes the fear seriously.",
      "Nothing that asks you to harm anyone or to spread an accusation through the family.",
    ],
    faqs: [
      {
        question: "Can this cover a whole household?",
        answer:
          "Yes. Say who lives there and what each person has noticed. The cleansing can cover the home. Households have used it to feel settled again.",
      },
      {
        question: "What if a person is threatening me?",
        answer:
          "Tell House of Amathongo, and also tell the police. Spiritual protection supports you. It does not replace help when a person is putting you in danger.",
      },
      {
        question: "Do I need to bring anything from the house?",
        answer:
          "No, unless House of Amathongo asks. Your account of what is happening is what the work uses.",
      },
    ],
    related: ["spiritual-consultation", "traditional-healing", "personal-family-guidance"],
  },
  {
    slug: "personal-family-guidance",
    title: "Family Troubles",
    description:
      "Divination and healing for family duty, study, travel, grief, and decisions that will not settle. People leave with a way that has been opened.",
    metaTitle: "Family Healing in Uganda",
    metaDescription:
      "Family healing and divination in Uganda for duty, study, travel, grief, and decisions that will not settle. A traditional African healer in Kampala.",
    h1: "Healing for family troubles",
    intro: [
      "Some troubles do not fit one name. A parent’s demand, a journey, a job, an exam, or grief the rest of the family will not touch. House of Amathongo reads them one by one and does the healing that opens the way.",
      "You bring the duty that is sitting on you. The divination separates what you can do from what you are waiting on, and the work is done for that path. People come back when the next trouble arrives.",
    ],
    relevantFor: [
      "A decision is stuck and you want it read before you commit.",
      "Family responsibility is heavy and you need it worked on in private.",
      "Study, travel, or work is blocked and the worry has entered the home.",
      "You have a question you are not ready to raise with relatives.",
    ],
    involves: [
      "A hearing of the decision or the duty.",
      "Divination that separates your part from what you are waiting on.",
      "Healing for the blockage, and help with how to speak to the family.",
      "Another sitting when the situation moves.",
    ],
    expect: [
      "A reading and a healing that point to a next step you can keep.",
      "Privacy inside the family. What you tell House of Amathongo is not passed on.",
      "Support while you also handle applications, studies, or employers in the ordinary way.",
    ],
    faqs: [
      {
        question: "Can I ask about work, study, or travel?",
        answer:
          "Yes. Bring the worry and what you are hoping to achieve. House of Amathongo reads it and does the work for that effort and for the family around it.",
      },
      {
        question: "Is this only for urgent problems?",
        answer:
          "No. People also come before a decision, while there is still time to choose well.",
      },
      {
        question: "Can I come without telling my family?",
        answer:
          "Yes. The work is private.",
      },
    ],
    related: ["political-power", "court-cases", "spiritual-consultation"],
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
