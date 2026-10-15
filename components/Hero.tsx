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
  const trackRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const holdRef = useRef<number | null>(null);
  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [hidden, setHidden] = useState(false);
  const running = !reduced && !userPaused && !hoverPaused && !hidden && !interacting;

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
    const end = () => setInteracting(false);
    window.addEventListener("pointerup", end);
    window.addEventListener("pointercancel", end);
    window.addEventListener("touchend", end);
    window.addEventListener("touchcancel", end);
    return () => {
      window.removeEventListener("pointerup", end);
      window.removeEventListener("pointercancel", end);
      window.removeEventListener("touchend", end);
      window.removeEventListener("touchcancel", end);
      if (holdRef.current) window.clearTimeout(holdRef.current);
    };
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let width = el.clientWidth;
    const observer = new ResizeObserver(() => {
      const nextWidth = el.clientWidth;
      if (nextWidth === 0 || nextWidth === width) return;
      width = nextWidth;
      el.scrollTo({ left: indexRef.current * nextWidth, behavior: "auto" });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!running) return;
    const id = window.setTimeout(() => {
      const el = trackRef.current;
      if (!el || el.clientWidth === 0) return;
      const current = Math.round(el.scrollLeft / el.clientWidth);
      const next = (current + 1) % count;
      indexRef.current = next;
      setIndex(next);
      el.scrollTo({ left: next * el.clientWidth, behavior: "auto" });
    }, HERO_MS);
    return () => window.clearTimeout(id);
  }, [running, index, count]);

  useEffect(() => {
    const row = chipsRef.current;
    const chip = row?.querySelector<HTMLElement>(`[data-hero-chip="${index}"]`);
    if (!row || !chip) return;
    const rowBox = row.getBoundingClientRect();
    const chipBox = chip.getBoundingClientRect();
    const delta = chipBox.left - rowBox.left - (rowBox.width - chipBox.width) / 2;
    row.scrollBy({ left: delta, behavior: reduced ? "auto" : "smooth" });
  }, [index, reduced]);

  function syncFromTrack() {
    const el = trackRef.current;
    if (!el || el.clientWidth === 0) return;
    const raw = el.scrollLeft / el.clientWidth;
    const nearest = Math.round(raw);
    if (Math.abs(raw - nearest) > 0.08) return;
    const next = Math.min(count - 1, Math.max(0, nearest));
    if (next === indexRef.current) return;
    indexRef.current = next;
    setIndex(next);
  }

  function goTo(next: number) {
    const el = trackRef.current;
    const clamped = (next + count) % count;
    indexRef.current = clamped;
    setIndex(clamped);
    if (!el || el.clientWidth === 0) return;
    el.scrollTo({
      left: clamped * el.clientWidth,
      behavior: reduced ? "auto" : "smooth",
    });
  }

  function pauseOnHover(next: boolean) {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setHoverPaused(next);
    }
  }

  function holdAutoplay() {
    setInteracting(true);
    if (holdRef.current) window.clearTimeout(holdRef.current);
    holdRef.current = window.setTimeout(() => setInteracting(false), 900);
  }

  return (
    <section
      className="relative bg-moss-deep text-paper"
      aria-roledescription="carousel"
      aria-labelledby="home-heading"
      data-hero-index={index}
      onMouseEnter={() => pauseOnHover(true)}
      onMouseLeave={() => pauseOnHover(false)}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20">
        <div className="page-wrap flex justify-end pt-4">
          <button
            type="button"
            className="pointer-events-auto border border-cream/50 bg-moss-deep/50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cream disabled:opacity-60"
            aria-pressed={userPaused || reduced}
            disabled={reduced}
            onClick={() => setUserPaused((current) => !current)}
          >
            {reduced ? "Paused" : userPaused ? "Play" : "Pause"}
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className={`hero-track flex w-full min-w-0 snap-x snap-mandatory overflow-x-auto overscroll-x-contain ${
          reduced ? "" : "scroll-smooth"
        }`}
        onScroll={syncFromTrack}
        onPointerDown={holdAutoplay}
        onTouchStart={holdAutoplay}
      >
        {services.map((item, itemIndex) => {
          const photo = servicePhotos[item.slug];
          const active = itemIndex === index;
          return (
            <article
              key={item.slug}
              id={`hero-${item.slug}`}
              className="relative flex w-full min-w-full shrink-0 basis-full snap-start flex-col"
              aria-roledescription="slide"
              aria-label={item.title}
            >
              <div className="absolute inset-0" aria-hidden="true">
                {photo ? (
                  <Image
                    src={photo.src}
                    alt=""
                    fill
                    priority={itemIndex === 0}
                    loading={itemIndex === 0 ? undefined : "eager"}
                    sizes="100vw"
                    className="object-cover"
                  />
                ) : null}
                <div className="hero-weave absolute inset-0" style={{ backgroundPosition: weavePosition(itemIndex) }} />
                <div className="absolute inset-0 bg-gradient-to-r from-moss-deep from-15% via-moss-deep/80 via-45% to-moss-deep/15" />
                <div className="absolute inset-0 bg-gradient-to-t from-moss-deep/70 via-transparent to-moss-deep/20" />
              </div>

              <div className="page-wrap relative flex w-full min-w-0 flex-1 flex-col justify-end pb-20 pt-14 min-h-[calc(100svh-5.5rem)] sm:pb-24 sm:pt-16 md:min-h-[44rem] md:py-16">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream">The healing</p>
                {itemIndex === 0 ? (
                  <h1 id="home-heading" className="mt-3 w-full max-w-xl font-display text-3xl leading-tight md:text-4xl">
                    Traditional African healer in Uganda
                  </h1>
                ) : (
                  <p className="mt-3 w-full max-w-xl font-display text-3xl leading-tight md:text-4xl" aria-hidden="true">
                    Traditional African healer in Uganda
                  </p>
                )}
                <div className="mt-6 w-full min-w-0 max-w-2xl">
                  <h2 className="max-w-full text-balance font-display text-[clamp(1.85rem,7vw,4.6rem)] leading-[1.05]">
                    {item.title}
                  </h2>
                  <p className="mt-3 max-w-full text-base leading-relaxed text-cream sm:mt-4 sm:text-lg">
                    {lines[item.slug] ?? item.description}
                  </p>
                </div>
                <div className="mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap" inert={active ? undefined : true}>
                  <EnquiryLink className="btn btn-light" />
                  <Link href={`/services/${item.slug}`} className="btn btn-outline-light">
                    Read this healing
                  </Link>
                  <div className="hidden sm:contents">
                    <WhatsAppButton variant="outline-light" />
                  </div>
                </div>
                <p className="mt-4 text-sm text-cream sm:mt-5">Confidential · Follow-up when the matter needs it</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="page-wrap pb-8 pt-5">
        <div className="h-px w-40 bg-cream/30" aria-hidden="true">
          <div
            key={index}
            className={reduced ? "h-px w-full bg-paper" : "hero-meter h-px bg-paper"}
            style={reduced ? undefined : { animationPlayState: running ? "running" : "paused" }}
          />
        </div>
        <div
          ref={chipsRef}
          className="mt-5 w-full min-w-0 max-w-full overflow-x-auto pb-1"
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault();
              goTo(indexRef.current + 1);
            } else if (event.key === "ArrowLeft") {
              event.preventDefault();
              goTo(indexRef.current - 1);
            }
          }}
        >
          <div className="flex w-max gap-2">
            {services.map((item, itemIndex) => {
              const active = itemIndex === index;
              return (
                <button
                  key={item.slug}
                  type="button"
                  data-hero-chip={itemIndex}
                  aria-current={active ? "true" : undefined}
                  aria-controls={`hero-${item.slug}`}
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
