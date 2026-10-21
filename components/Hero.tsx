"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
  const indexRef = useRef(0);
  const touchRef = useRef<{ x: number; y: number; interactive: boolean } | null>(null);
  const holdRef = useRef<number | null>(null);
  const [index, setIndex] = useState(0);
  const [interacting, setInteracting] = useState(false);
  const [hidden, setHidden] = useState(false);
  const running = !hidden && !interacting;
  const service = services[index];

  useEffect(() => {
    const apply = () => setHidden(document.hidden);
    apply();
    document.addEventListener("visibilitychange", apply);
    return () => document.removeEventListener("visibilitychange", apply);
  }, []);

  useEffect(() => {
    return () => {
      if (holdRef.current) window.clearTimeout(holdRef.current);
    };
  }, []);

  useEffect(() => {
    if (!running) return;
    const id = window.setTimeout(() => {
      const next = (indexRef.current + 1) % count;
      indexRef.current = next;
      setIndex(next);
    }, HERO_MS);
    return () => window.clearTimeout(id);
  }, [running, index, count]);

  function goTo(next: number) {
    const clamped = (next + count) % count;
    indexRef.current = clamped;
    setIndex(clamped);
  }

  function holdAutoplay() {
    setInteracting(true);
    if (holdRef.current) window.clearTimeout(holdRef.current);
    holdRef.current = window.setTimeout(() => setInteracting(false), 900);
  }

  function onTouchStart(event: React.TouchEvent) {
    const target = event.target;
    const point = event.changedTouches[0];
    touchRef.current = {
      x: point.clientX,
      y: point.clientY,
      interactive: target instanceof Element && Boolean(target.closest("a, button")),
    };
    holdAutoplay();
  }

  function onTouchEnd(event: React.TouchEvent) {
    const start = touchRef.current;
    touchRef.current = null;
    if (!start || start.interactive) return;
    const point = event.changedTouches[0];
    const dx = point.clientX - start.x;
    const dy = point.clientY - start.y;
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
    goTo(indexRef.current + (dx < 0 ? 1 : -1));
  }

  return (
    <section
      className="relative bg-moss-deep text-paper"
      aria-roledescription="carousel"
      aria-labelledby="home-heading"
      data-hero-index={index}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
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

      <div className="page-wrap relative flex w-full min-w-0 flex-col justify-end pb-20 pt-14 min-h-[calc(100svh-5.5rem)] sm:pb-24 sm:pt-16 md:min-h-[44rem] md:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream">The healing</p>
        <h1 id="home-heading" className="mt-3 w-full max-w-xl font-display text-3xl leading-tight md:text-4xl">
          Traditional African healer in Uganda
        </h1>

        <div
          id="hero-slide"
          className="mt-6 w-full min-w-0 max-w-2xl"
          aria-live="off"
          role="group"
          aria-roledescription="slide"
          aria-label={service.title}
        >
          <h2 className="max-w-full text-balance font-display text-[clamp(1.85rem,7vw,4.6rem)] leading-[1.05]">
            {service.title}
          </h2>
          <p className="mt-3 max-w-full text-base leading-relaxed text-cream sm:mt-4 sm:text-lg">
            {lines[service.slug] ?? service.description}
          </p>
        </div>

        <div className="mt-6 h-px w-40 bg-cream/30" aria-hidden="true">
          <div key={index} className="hero-meter h-px bg-paper" style={{ animationPlayState: running ? "running" : "paused" }} />
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
          <EnquiryLink className="btn btn-light" />
          <Link href={`/services/${service.slug}`} className="btn btn-outline-light">
            Read this healing
          </Link>
          <div className="hidden sm:contents">
            <WhatsAppButton variant="outline-light" />
          </div>
        </div>
        <p className="mt-4 text-sm text-cream sm:mt-5">Confidential · Follow-up when the matter needs it</p>
      </div>

      <div className="page-wrap relative pb-8">
        <div className="w-full min-w-0 max-w-full overflow-x-auto pb-1">
          <div className="flex w-max gap-2">
            {services.map((item, itemIndex) => {
              const active = itemIndex === index;
              return (
                <button
                  key={item.slug}
                  type="button"
                  aria-current={active ? "true" : undefined}
                  aria-controls="hero-slide"
                  onClick={() => goTo(itemIndex)}
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
