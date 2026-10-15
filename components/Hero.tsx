"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { EnquiryLink } from "@/components/EnquiryLink";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { servicePhotos } from "@/lib/photos";
import { services } from "@/lib/services";

const HERO_MS = 6000;

const lines: Record<string, string> = {
  "spiritual-consultation":
    "The trouble is read in the ancestral way, and the healing for it is done.",
  "political-power":
    "Traditional work for a seat, an office, or influence that has been refused.",
  "court-cases":
    "Traditional work for a case you want decided in your favor. Your lawyer still handles the papers.",
  "business-financial": "Rituals for a shop that has gone quiet and money that will not stay.",
  "traditional-healing":
    "Remedies for a body and spirit that feel heavy. This sits beside a doctor, not in place of a hospital.",
  "spiritual-protection": "Cleansing and protection for a home or a life that feels exposed.",
  "personal-family-guidance":
    "Healing for family duty, study, travel, grief, and a decision that will not settle.",
};

function weavePosition(index: number) {
  const x = index * 28;
  const y = index * 14;
  return [`${x}px ${y}px`, `${x + 22}px ${y}px`, `${x + 22}px ${y - 22}px`, `${x}px ${y + 22}px`].join(", ");
}

export function Hero() {
  const count = services.length;
  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [hidden, setHidden] = useState(false);
  const service = services[index];
  const running = !reduced && !userPaused && !hoverPaused && !hidden;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const apply = () => setHidden(document.hidden);
    apply();
    document.addEventListener("visibilitychange", apply);
    return () => document.removeEventListener("visibilitychange", apply);
  }, []);

  useEffect(() => {
    if (!running) return;
    const id = window.setTimeout(() => {
      setIndex((current) => (current + 1) % count);
    }, HERO_MS);
    return () => window.clearTimeout(id);
  }, [running, index, count]);

  function step(direction: -1 | 1) {
    setIndex((current) => (current + direction + count) % count);
  }

  function pauseOnHover(next: boolean) {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setHoverPaused(next);
    }
  }

  return (
    <section
      className="relative isolate overflow-hidden bg-moss-deep text-paper"
      aria-roledescription="carousel"
      aria-labelledby="home-heading"
      onMouseEnter={() => pauseOnHover(true)}
      onMouseLeave={() => pauseOnHover(false)}
    >
      <div className="absolute inset-0" aria-hidden="true">
        {services.map((item, itemIndex) => {
          const photo = servicePhotos[item.slug];
          if (!photo) return null;
          return (
            <Image
              key={item.slug}
              src={photo.src}
              alt=""
              fill
              priority={itemIndex === 0}
              loading={itemIndex === 0 ? undefined : "eager"}
              sizes="100vw"
              className={`object-cover transition-opacity duration-700 ${
                itemIndex === index ? "opacity-100" : "opacity-0"
              }`}
            />
          );
        })}
        <div
          className="hero-weave absolute inset-0 transition-[background-position] duration-700"
          style={{ backgroundPosition: weavePosition(index) }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-moss-deep from-15% via-moss-deep/80 via-45% to-moss-deep/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-moss-deep/70 via-transparent to-moss-deep/20" />
      </div>

      <div className="page-wrap relative flex w-full min-w-0 min-h-[40rem] flex-col justify-end py-12 md:min-h-[44rem] md:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream">The healing</p>
        <h1 id="home-heading" className="mt-3 w-full max-w-xl font-display text-3xl leading-tight md:text-4xl">
          Traditional African healer in Uganda
        </h1>

        <div
          id="hero-slide"
          className="mt-8 w-full min-w-0 max-w-2xl"
          aria-live="off"
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${count}: ${service.title}`}
        >
          <p className="text-sm text-cream">
            {index + 1} of {count}
          </p>
          <h2 className="mt-2 max-w-full text-balance font-display text-[clamp(2.15rem,7.2vw,4.6rem)] leading-[1.05]">
            {service.title}
          </h2>
          <p className="mt-4 max-w-full text-lg leading-relaxed text-cream">
            {lines[service.slug] ?? service.description}
          </p>
        </div>

        <div className="mt-6 h-px w-40 bg-cream/30" aria-hidden="true">
          <div
            key={index}
            className={reduced ? "h-px w-full bg-paper" : "hero-meter h-px bg-paper"}
            style={reduced ? undefined : { animationPlayState: running ? "running" : "paused" }}
          />
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <EnquiryLink className="btn btn-light" />
          <Link href={`/services/${service.slug}`} className="btn btn-outline-light">
            Read this healing
          </Link>
          <WhatsAppButton variant="outline-light" />
        </div>
        <p className="mt-5 text-sm text-cream">Confidential · Follow-up when the matter needs it</p>

        <div className="mt-8 flex w-full min-w-0 flex-wrap gap-2">
          <button type="button" className="btn btn-outline-light min-h-11 px-4" onClick={() => step(-1)}>
            Previous
          </button>
          <button
            type="button"
            className="btn btn-outline-light min-h-11 px-4 disabled:opacity-60"
            aria-pressed={userPaused || reduced}
            disabled={reduced}
            onClick={() => setUserPaused((current) => !current)}
          >
            {reduced ? "Paused" : userPaused ? "Play" : "Pause"}
          </button>
          <button type="button" className="btn btn-outline-light min-h-11 px-4" onClick={() => step(1)}>
            Next
          </button>
        </div>

        <div className="mt-5 w-full min-w-0 max-w-full overflow-x-auto pb-1">
          <div className="flex w-max gap-2">
          {services.map((item, itemIndex) => {
            const active = itemIndex === index;
            return (
              <button
                key={item.slug}
                type="button"
                aria-current={active ? "true" : undefined}
                aria-controls="hero-slide"
                onClick={() => setIndex(itemIndex)}
                className={`shrink-0 border px-3 py-2 text-left text-sm font-semibold ${
                  active ? "border-paper bg-paper text-moss-deep" : "border-cream/40 text-cream hover:border-paper"
                }`}
              >
                {item.title}
              </button>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
