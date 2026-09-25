"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Download,
  MapPin,
  Pause,
  Play,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { images } from "@/lib/site-data";

const heroSlides = [
  {
    type: "video" as const,
    src: "/videos/sree-Avani-logo-reveal.mp4",
    eyebrow: "Sree Avani Properties",
    title: "Yadadri Farms",
    subtitle: "Premium Farm Plots at Peddakandukur",
    cta: "Explore Yadadri Farms",
    href: "/projects/yadadri-farms",
  },
  {
    type: "image" as const,
    src: images.hero,
    eyebrow: "Project 01 · Peddakandukur",
    title: "A considered place to grow",
    subtitle:
      "A gated community farm site with open land, fruit plantation and lifestyle facilities.",
    cta: "Explore project",
    href: "/projects/yadadri-farms",
  },
  {
    type: "image" as const,
    src: images.field,
    eyebrow: "A new address for weekends",
    title: "Land with room to breathe",
    subtitle:
      "Discover the location, layout and thoughtful details behind Yadadri Farms.",
    cta: "View project",
    href: "/projects/yadadri-farms",
  },
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const slide = heroSlides[active];

  const goTo = useCallback(
    (index: number) =>
      setActive((index + heroSlides.length) % heroSlides.length),
    [],
  );
  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const previous = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused) return;
    const timer = window.setTimeout(next, 6500);
    return () => window.clearTimeout(timer);
  }, [active, next, paused, slide.type]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (active === 0) {
      video.currentTime = 0;
      void video.play().catch(() => undefined);
    } else video.pause();
  }, [active]);

  return (
    <section
      className="hero-carousel"
      aria-roledescription="carousel"
      aria-label="Sree Avani Properties highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(event) => {
        touchStart.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return;
        const delta =
          (event.changedTouches[0]?.clientX ?? 0) - touchStart.current;
        if (Math.abs(delta) > 45) delta < 0 ? next() : previous();
        touchStart.current = null;
      }}
    >
      {heroSlides.map((item, index) => (
        <div
          key={item.title}
          className={`hero-slide ${index === active ? "is-active" : ""}`}
          aria-hidden={index !== active}
        >
          {item.type === "video" ? (
            <video
              ref={index === 0 ? videoRef : undefined}
              className="hero-media"
              src={item.src}
              autoPlay
              muted
              playsInline
              loop
              preload="metadata"
              poster={images.hero}
            />
          ) : (
            <Image
              src={item.src}
              alt="Yadadri Farms landscape"
              fill
              priority={index === 1}
              className="hero-media object-cover"
              sizes="100vw"
            />
          )}
          <div className="hero-overlay" />
          <div className="mx-auto flex min-h-[min(88vh,850px)] w-full max-w-7xl items-end px-5 pb-28 pt-40 lg:px-10 lg:pb-32">
            <div className="max-w-3xl text-white">
              <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.24em] text-[#E4CB08]">
                <span className="h-px w-8 bg-current" />
                {item.eyebrow}
              </p>
              <h1 className="font-serif text-6xl leading-[.88] tracking-[-.04em] sm:text-8xl lg:text-[8.5rem]">
                {item.title}
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                {item.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={item.href}
                  tabIndex={index === active ? 0 : -1}
                  className="group inline-flex items-center gap-3 rounded-full bg-[#E4CB08] px-5 py-3 text-[11px] font-bold uppercase tracking-[.16em] text-[#40348C] transition hover:bg-white"
                >
                  {item.cta}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/projects/yadadri-farms#master-plan"
                  tabIndex={index === active ? 0 : -1}
                  className="inline-flex items-center gap-3 rounded-full border border-white/35 px-5 py-3 text-[11px] font-bold uppercase tracking-[.16em] text-white transition hover:border-[#E4CB08] hover:text-[#E4CB08]"
                >
                  View master plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      <a
        href="/videos/sree-Avani-logo-reveal.mp4"
        download="sree-Avani-properties-logo-reveal.mp4"
        className="hero-download"
      >
        <Download className="size-4" /> Download video
      </a>
      <div className="hero-location">
        <MapPin className="size-4 text-[#E4CB08]" />
        <span>Yadadri Farms · Peddakandukur</span>
      </div>
      <div className="hero-controls">
        <button type="button" onClick={previous} aria-label="Previous slide">
          <ArrowLeft />
        </button>
        <button
          type="button"
          onClick={() => setPaused(!paused)}
          aria-label={paused ? "Play carousel" : "Pause carousel"}
        >
          {paused ? <Play /> : <Pause />}
        </button>
        <button type="button" onClick={next} aria-label="Next slide">
          <ArrowRight />
        </button>
        <div className="hero-dots">
          {heroSlides.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={active === index ? "true" : undefined}
            >
              <span />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
