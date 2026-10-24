import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { photos } from "@/lib/photos";
import { breadcrumbJson } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import {
  emailDisplay,
  emailHref,
  hasEmail,
  hasPhone,
  hasWhatsApp,
  locationDisplay,
  phoneDisplay,
  phoneHref,
  siteUrl,
  whatsappDisplay,
  whatsappHref,
} from "@/lib/site";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

const powers = [
  {
    title: "The ancestors",
    text: "The dead are not gone from the family. In African spiritual life they remain a source of memory, warning, blessing, and duty. A healer can ask what the line of the family is asking for, and do the work the living need.",
  },
  {
    title: "Protection",
    text: "Homes, bodies, and livelihoods are understood as things that can be covered or left exposed. African practice has long offered protection and cleansing when peace leaves a compound, sleep breaks, or a person feels pursued by trouble.",
  },
  {
    title: "Healing",
    text: "Illness and distress are not treated as private accidents only. Traditional healing looks at the person, the household, and the spiritual weight they are carrying, and seeks to restore strength and balance.",
  },
  {
    title: "Direction",
    text: "Power, a court case, work, and travel all raise questions that ordinary talk does not finish. Ancestral divination exists so the way forward can be read, and the ritual or remedy done.",
  },
];

const history = [
  {
    era: "Before the borders",
    text: "For most of African history, spiritual life had no single book and no single capital. Each people kept its own names, shrines, and specialists. What travelled between them was a shared understanding: the seen world and the unseen world belong together, and a life can be repaired when both are addressed.",
  },
  {
    era: "Kingdoms of the Great Lakes",
    text: "Around Lake Victoria, long before Uganda was a country, kingdoms and clans kept spiritual orders of their own. In Buganda, people honoured Katonda as creator, the balubaale as powers of lake, war, rain, and death, and the emizimu, the spirits of the dead. Bunyoro, Busoga, Ankole, Toro, Acholi, and many other societies carried different names and rites. People already went to healers: for sickness, for a child, for a quarrel, for rain, for the safety of a house.",
  },
  {
    era: "Pressure, and survival",
    text: "In the late nineteenth century, Christian missions, Islam, and then colonial rule pushed traditional practice out of public power. Shrines lost their official place. The work did not end. It moved into the household, the night visit, and the hands of healers who were still asked for when the church, the mosque, or the clinic had not settled the matter.",
  },
  {
    era: "The city, still",
    text: "Kampala is a modern city, and African spirituality is still at work in it. People who pray on Sunday, or who keep Friday, still come to a traditional healer when a court case turns against them, political power is blocked, a business will not hold money, or a home feels wrong. The tradition survived because the healing still meets the problems people actually have.",
  },
];

export const metadata = buildMetadata({
  title: "The Power of African Spirituality",
  description:
    "The history and living power of African spirituality, and how House of Amathongo heals in Uganda. People still come because the work has held.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJson(crumbs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "The power of African spirituality",
          url: `${siteUrl()}/about`,
          description:
            "The history and living power of African spirituality, and how House of Amathongo heals as a traditional African healer in Uganda.",
          isPartOf: { "@type": "WebSite", name: "House of Amathongo", url: siteUrl() },
        }}
      />
      <PageHero
        eyebrow="About House of Amathongo"
        title="The power of African spirituality"
        lede="A living tradition of ancestors, protection, healing, and direction. People in Uganda still use it because it has worked on power, the court, the house, and the work they could not move alone."
        crumbs={crumbs}
      />

      <article>
        <section className="section" aria-labelledby="what-it-is">
          <div className="page-wrap grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 id="what-it-is" className="font-display text-3xl text-ink md:text-4xl">
                Not a costume. A way of seeing the world.
              </h2>
            </div>
            <div className="max-w-xl space-y-4 text-lg leading-relaxed text-bark lg:col-span-7">
              <p>
                African spirituality is the inherited knowledge by which communities have explained
                misfortune, guarded the living, honoured the dead, and restored what has broken.
                It is not one church and not one ritual. Yoruba, Kongo, Zulu, Akan, Baganda, and
                hundreds of other peoples each keep their own powers and their own names.
              </p>
              <p>
                What they share is power of a particular kind. A person is not alone in their
                skin. They stand in a family, on a land, among ancestors, and inside forces that
                can bless or disturb. When power is blocked, when a case turns against you, when money leaks out of a house, when
                sickness sits too long, or when peace leaves a compound, the tradition has
                something to say, and someone trained to work with it.
              </p>
              <p>
                That is the ground House of Amathongo stands on. The healing done in Kampala, or by phone from
                farther away, is a present-day use of this old African capacity: the healer faces
                the problem and does the work — ritual, cleansing, divination, or a remedy.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-moss-deep text-paper" aria-label="A tradition that endured">
          <div className="page-wrap py-16 md:py-20">
            <p className="max-w-3xl font-display text-3xl leading-snug md:text-4xl">
              African spirituality kept its power because people refused to stop needing it. Empires
              changed. Cities rose. The problems of love, children, protection, and livelihood did
              not become less spiritual.
            </p>
          </div>
        </section>

        <section className="section bg-cream" aria-labelledby="history">
          <div className="page-wrap grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">History</p>
              <h2 id="history" className="mt-3 font-display text-3xl text-ink md:text-4xl">
                How the tradition came to the present
              </h2>
              <ol className="mt-10 space-y-8">
                {history.map((item, index) => (
                  <li key={item.era} className="grid gap-3 border-t border-line pt-6 sm:grid-cols-[7rem_1fr]">
                    <p className="font-display text-sm text-clay">0{index + 1}</p>
                    <div>
                      <h3 className="font-display text-2xl text-ink">{item.era}</h3>
                      <p className="mt-3 leading-relaxed text-bark">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="lg:sticky lg:top-24">
              <Photo
                photo={photos.land}
                ratio="4/5"
                sizes="(min-width: 1024px) 20rem, 100vw"
              />
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="power">
          <div className="page-wrap">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">Its power</p>
              <h2 id="power" className="mt-3 font-display text-3xl text-ink md:text-4xl">
                What African spirituality is able to do
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-bark">
                Its power is not a show. It is the ability to work on the hidden side of a visible
                problem, and to hand a person back their direction.
              </p>
            </div>
            <ul className="mt-12 grid gap-6 md:grid-cols-2">
              {powers.map((item) => (
                <li key={item.title} className="border border-line p-6">
                  <h3 className="font-display text-2xl text-ink">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-bark">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section bg-cream" aria-labelledby="uganda">
          <div className="page-wrap grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Photo photo={photos.ankara} ratio="4/5" sizes="(min-width: 1024px) 36vw, 100vw" className="mb-8" />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">Uganda</p>
              <h2 id="uganda" className="mt-3 font-display text-3xl text-ink md:text-4xl">
                A Ugandan practice in an African inheritance
              </h2>
            </div>
            <div className="max-w-xl space-y-4 text-lg leading-relaxed text-bark lg:col-span-7">
              <p>
                Uganda is not one spiritual nation. The Baganda, Basoga, Banyoro, Banyankole,
                Acholi, Langi, Iteso, Karamojong, and many others each brought their own powers
                into the country that exists today. House of Amathongo does not pretend to speak for every
                shrine on this land. The healing draws on that wider African inheritance, and it
                is done here, in Uganda, for the person who is actually in trouble.
              </p>
              <p>
                People in Kampala come for political power, a court case they want won, a
                business that will not hold, a body and spirit that feel heavy, and a home that
                needs protection. People outside Uganda come for the same reasons, by phone or
                WhatsApp, because the tradition has always travelled with those who needed it.
              </p>
              <p>
                Faith is not a barrier. Many clients pray in church or mosque and still want the
                African spiritual help their grandparents understood. House of Amathongo receives them as
                they are.
              </p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="amathongo">
          <div className="page-wrap grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem]">
            <div className="max-w-3xl space-y-10">
              <section aria-labelledby="amathongo">
                <h2 id="amathongo" className="font-display text-3xl text-ink">
                  How House of Amathongo heals
                </h2>
                <div className="mt-4 space-y-4 text-lg leading-relaxed text-bark">
                  <p>
                    House of Amathongo puts this tradition to work for one person at a time. You bring the
                    trouble and the result you want kept. The healer reads the situation and does
                    the work: political power, a court case, cleansing, protection, ancestral
                    divination, or a traditional remedy. People return when that result has held.
                  </p>
                  <p>
                    The areas of work are{" "}
                    <Link href="/services/political-power" className="link">
                      political power
                    </Link>
                    ,{" "}
                    <Link href="/services/court-cases" className="link">
                      court cases
                    </Link>
                    ,{" "}
                    <Link href="/services/business-financial" className="link">
                      money and business rituals
                    </Link>
                    ,{" "}
                    <Link href="/services/traditional-healing" className="link">
                      traditional healing and remedies
                    </Link>
                    ,{" "}
                    <Link href="/services/spiritual-protection" className="link">
                      cleansing and protection
                    </Link>
                    , and{" "}
                    <Link href="/services/personal-family-guidance" className="link">
                      family troubles
                    </Link>
                    . Each one is the same tradition, turned toward a different trouble.
                  </p>
                  <p>
                    You can meet in Kampala when a visit is right, or speak from anywhere the
                    tradition is needed. The path from the first message to the healing is set out
                    on{" "}
                    <Link href="/how-it-works" className="link">
                      how it works
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <section aria-labelledby="private">
                <h2 id="private" className="font-display text-3xl text-ink">
                  A private healing
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-bark">
                  This work has always depended on trust. What you tell House of Amathongo stays with the
                  healing and is used to do it. Speak plainly about what you want changed. Leave
                  passwords, bank details, and identity papers out of the message.
                </p>
              </section>
            </div>

            <aside className="h-fit border border-line bg-cream p-6 lg:sticky lg:top-24">
              <h2 className="font-display text-2xl text-ink">Speak with House of Amathongo</h2>
              <p className="mt-3 leading-relaxed text-bark">
                Bring the trouble you want the healer to work on. A time is arranged around
                that matter.
              </p>
              <ul className="mt-5 space-y-2 text-bark">
                <li>
                  Phone:{" "}
                  {hasPhone() ? (
                    <a className="link" href={phoneHref()} data-track="phone_click">
                      {phoneDisplay()}
                    </a>
                  ) : (
                    phoneDisplay()
                  )}
                </li>
                <li>
                  WhatsApp:{" "}
                  {hasWhatsApp() ? (
                    <a className="link" href={whatsappHref()} data-track="whatsapp_click">
                      {whatsappDisplay()}
                    </a>
                  ) : (
                    whatsappDisplay()
                  )}
                </li>
                <li>
                  Email:{" "}
                  {hasEmail() ? (
                    <a className="link" href={emailHref()}>
                      {emailDisplay()}
                    </a>
                  ) : (
                    emailDisplay()
                  )}
                </li>
                <li>Location: {locationDisplay()}</li>
              </ul>
              <Link href="/contact" className="btn btn-primary mt-6 w-full" data-track="consultation_cta_click">
                Request the Healing
              </Link>
            </aside>
          </div>
        </section>
      </article>

      <CTASection
        id="about-cta"
        title="Bring the trouble to the healer"
        text="Tell House of Amathongo what has gone wrong and the result you want kept. The healing is the traditional work people return for: a case won, political power opened, a house cleansed."
      />
    </>
  );
}
