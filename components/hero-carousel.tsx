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

/*
|--------------------------------------------------------------------------
| HERO VIDEO
|--------------------------------------------------------------------------
| IMPORTANT:
| Change this to the EXACT file that exists inside:
|
| public/videos/
|
*/
const HERO_VIDEO = "videos/sree-adani-logo-reveal.mp4";

const heroSlides = [
  {
    id: "hero-video",
    type: "video" as const,
    src: HERO_VIDEO,
    eyebrow: "Sree Adani Properties",
    title: "Yadadri Farms",
    subtitle: "Premium Farm Plots at Peddakandukur",
    cta: "Explore Yadadri Farms",
    href: "/projects/yadadri-farms",
  },
  {
    id: "hero-image",
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
    id: "field-image",
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

  /*
  |--------------------------------------------------------------------------
  | GO TO SLIDE
  |--------------------------------------------------------------------------
  */
  const goTo = useCallback((index: number) => {
    setActive((index + heroSlides.length) % heroSlides.length);
  }, []);

  /*
  |--------------------------------------------------------------------------
  | NEXT
  |--------------------------------------------------------------------------
  */
  const next = useCallback(() => {
    setActive((current) => {
      return (current + 1) % heroSlides.length;
    });
  }, []);

  /*
  |--------------------------------------------------------------------------
  | PREVIOUS
  |--------------------------------------------------------------------------
  */
  const previous = useCallback(() => {
    setActive((current) => {
      return (current - 1 + heroSlides.length) % heroSlides.length;
    });
  }, []);

  /*
  |--------------------------------------------------------------------------
  | AUTOMATIC SLIDING
  |--------------------------------------------------------------------------
  |
  | Changes slide every 6 seconds.
  |
  | IMPORTANT:
  | We do NOT pause when the mouse enters the hero.
  |
  */
  useEffect(() => {
    if (paused) return;

    const interval = window.setInterval(() => {
      setActive((current) => {
        return (current + 1) % heroSlides.length;
      });
    }, 6000);

    return () => {
      window.clearInterval(interval);
    };
  }, [paused]);

  /*
  |--------------------------------------------------------------------------
  | VIDEO CONTROL
  |--------------------------------------------------------------------------
  */
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (active === 0) {
      video.currentTime = 0;

      const playVideo = async () => {
        try {
          await video.play();
        } catch (error) {
          console.warn("Hero video autoplay failed:", error);
        }
      };

      void playVideo();
    } else {
      video.pause();
    }
  }, [active]);

  /*
  |--------------------------------------------------------------------------
  | TOUCH SWIPE
  |--------------------------------------------------------------------------
  */
  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    touchStart.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    if (touchStart.current === null) return;

    const endX = event.changedTouches[0]?.clientX ?? 0;

    const delta = endX - touchStart.current;

    if (Math.abs(delta) > 50) {
      if (delta < 0) {
        next();
      } else {
        previous();
      }
    }

    touchStart.current = null;
  };

  const activeSlide = heroSlides[active];

  return (
    <section
      className="
        relative
        min-h-[620px]
        h-[78svh]
        max-h-[900px]
        w-full
        overflow-hidden
        bg-black
        text-white
        touch-pan-y
      "
      aria-roledescription="carousel"
      aria-label="Sree Adani Properties highlights"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/*
      |--------------------------------------------------------------------------
      | SLIDES
      |--------------------------------------------------------------------------
      */}
      {heroSlides.map((item, index) => {
        const isActive = index === active;

        return (
          <div
            key={item.id}
            className={`
              absolute
              inset-0
              h-full
              w-full
              transition-opacity
              duration-700
              ease-in-out
              ${
                isActive
                  ? "z-20 opacity-100"
                  : "pointer-events-none z-0 opacity-0"
              }
            `}
            aria-hidden={!isActive}
          >
            {/*
            ------------------------------------------------------------------
            | VIDEO
            ------------------------------------------------------------------
            */}
            {item.type === "video" ? (
              <video
                ref={index === 0 ? videoRef : undefined}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  object-center
                "
                src={item.src}
                autoPlay
                muted
                playsInline
                loop
                preload="auto"
              />
            ) : (
              /*
              ----------------------------------------------------------------
              | IMAGE
              ----------------------------------------------------------------
              */
              <Image
                src={item.src}
                alt="Yadadri Farms landscape"
                fill
                priority={index === 1}
                className="
                  object-cover
                  object-center
                "
                sizes="
                  100vw
                "
              />
            )}

            {/*
            ------------------------------------------------------------------
            | DARK OVERLAY
            ------------------------------------------------------------------
            */}
            <div
              className="
                absolute
                inset-0
                bg-black/35
              "
            />

            {/*
            ------------------------------------------------------------------
            | GRADIENT
            ------------------------------------------------------------------
            */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-black/75
                via-black/35
                to-transparent
              "
            />

            {/*
            ------------------------------------------------------------------
            | CONTENT
            ------------------------------------------------------------------
            */}
            <div
              className="
                relative
                z-10
                mx-auto
                flex
                h-full
                w-full
                max-w-7xl
                items-end
                px-5
                pb-32
                pt-32
                sm:px-8
                sm:pb-32
                lg:px-10
                lg:pb-36
              "
            >
              <div
                className="
                  w-full
                  max-w-3xl
                "
              >
                {/*
                --------------------------------------------------------------
                | EYEBROW
                --------------------------------------------------------------
                */}
                <p
                  className="
                    mb-4
                    flex
                    items-center
                    gap-3
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#E4CB08]
                    sm:mb-6
                    sm:text-[10px]
                  "
                >
                  <span
                    className="
                      h-px
                      w-6
                      bg-current
                      sm:w-8
                    "
                  />

                  {item.eyebrow}
                </p>

                {/*
                --------------------------------------------------------------
                | TITLE
                --------------------------------------------------------------
                */}
                <h1
                  className="
                    max-w-4xl
                    font-serif
                    text-5xl
                    font-medium
                    leading-[0.9]
                    tracking-[-0.045em]
                    sm:text-7xl
                    md:text-8xl
                    lg:text-[8rem]
                  "
                >
                  {item.title}
                </h1>

                {/*
                --------------------------------------------------------------
                | SUBTITLE
                --------------------------------------------------------------
                */}
                <p
                  className="
                    mt-5
                    max-w-xl
                    text-sm
                    leading-relaxed
                    text-white/80
                    sm:mt-7
                    sm:text-base
                    lg:text-lg
                  "
                >
                  {item.subtitle}
                </p>

                {/*
                --------------------------------------------------------------
                | BUTTONS
                --------------------------------------------------------------
                */}
                <div
                  className="
                    mt-6
                    flex
                    flex-col
                    items-start
                    gap-3
                    sm:mt-8
                    sm:flex-row
                    sm:flex-wrap
                  "
                >
                  <Link
                    href={item.href}
                    tabIndex={isActive ? 0 : -1}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      bg-[#E4CB08]
                      px-5
                      py-3
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-[#40348C]
                      transition
                      hover:bg-white
                      sm:px-6
                      sm:py-3.5
                    "
                  >
                    {item.cta}

                    <ArrowUpRight
                      className="
                        size-4
                        transition-transform
                        group-hover:translate-x-0.5
                      "
                    />
                  </Link>

                  <Link
                    href="/projects/yadadri-farms#master-plan"
                    tabIndex={isActive ? 0 : -1}
                    className="
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      border
                      border-white/35
                      px-5
                      py-3
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-white
                      transition
                      hover:border-[#E4CB08]
                      hover:text-[#E4CB08]
                      sm:px-6
                      sm:py-3.5
                    "
                  >
                    View master plan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/*
      |--------------------------------------------------------------------------
      | DOWNLOAD VIDEO
      |--------------------------------------------------------------------------
      */}
      <a
        href={HERO_VIDEO}
        download
        className="
          absolute
          bottom-6
          left-5
          z-40
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-white/30
          bg-black/35
          px-3.5
          py-2.5
          text-[9px]
          font-bold
          uppercase
          tracking-[0.12em]
          text-white
          backdrop-blur-md
          transition
          hover:bg-white
          hover:text-black
          sm:bottom-8
          sm:left-8
          sm:px-5
          sm:py-3
          sm:text-[10px]
          lg:left-10
        "
      >
        <Download className="size-3.5 sm:size-4" />
        <span>Download video</span>
      </a>

      {/*
      |--------------------------------------------------------------------------
      | LOCATION
      |--------------------------------------------------------------------------
      */}
      <div
        className="
          absolute
          bottom-6
          right-5
          z-40
          hidden
          items-center
          gap-2
          text-[10px]
          font-medium
          text-white/80
          sm:flex
          lg:right-10
        "
      >
        <MapPin
          className="
            size-4
            text-[#E4CB08]
          "
        />

        <span>Yadadri Farms · Peddakandukur</span>
      </div>

      {/*
      |--------------------------------------------------------------------------
      | CONTROLS
      |--------------------------------------------------------------------------
      */}
      <div
        className="
          absolute
          bottom-20
          right-5
          z-40
          flex
          items-center
          gap-1.5
          sm:bottom-8
          sm:right-8
          sm:gap-2
          lg:right-10
        "
      >
        <button
          type="button"
          onClick={previous}
          aria-label="Previous slide"
          className="
            flex
            size-9
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            bg-black/30
            text-white
            backdrop-blur-md
            transition
            hover:bg-white
            hover:text-black
            sm:size-10
          "
        >
          <ArrowLeft className="size-4" />
        </button>

        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? "Play carousel" : "Pause carousel"}
          className="
            flex
            size-9
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            bg-black/30
            text-white
            backdrop-blur-md
            transition
            hover:bg-white
            hover:text-black
            sm:size-10
          "
        >
          {paused ? (
            <Play className="size-3.5" />
          ) : (
            <Pause className="size-3.5" />
          )}
        </button>

        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="
            flex
            size-9
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            bg-black/30
            text-white
            backdrop-blur-md
            transition
            hover:bg-white
            hover:text-black
            sm:size-10
          "
        >
          <ArrowRight className="size-4" />
        </button>
      </div>

      {/*
      |--------------------------------------------------------------------------
      | DOTS
      |--------------------------------------------------------------------------
      */}
      <div
        className="
          absolute
          bottom-7
          left-1/2
          z-40
          flex
          -translate-x-1/2
          items-center
          gap-1
          sm:bottom-9
        "
      >
        {heroSlides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={active === index ? "true" : undefined}
            className="group p-2"
          >
            <span
              className={`
                block
                h-1
                rounded-full
                transition-all
                duration-300
                ${
                  active === index
                    ? "w-8 bg-[#E4CB08] sm:w-10"
                    : "w-3 bg-white/50 group-hover:bg-white"
                }
              `}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
