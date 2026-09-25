"use client";

import Image from "next/image";
import { Play, Download } from "lucide-react";

export function ImageFeature({
  src,
  alt,
  eyebrow,
  title,
  children,
  reverse = false,
}: {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <section
      className={`mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10 lg:py-28 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
    >
      <div className="relative min-h-[420px] overflow-hidden bg-[#40348C] lg:min-h-[620px]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div>
        <p className="mb-5 text-[10px] font-bold uppercase tracking-[.24em] text-[#EC6253]">
          {eyebrow}
        </p>
        <h2 className="max-w-xl text-5xl font-black leading-[.92] tracking-[-.05em] text-[#40348C] sm:text-7xl">
          {title}
        </h2>
        <div className="mt-7 max-w-lg text-base leading-relaxed text-[#50685b]">
          {children}
        </div>
      </div>
    </section>
  );
}

export function YouTubeVideoSection({
  title,
  description,
  url,
}: {
  title: string;
  description?: string;
  url?: string;
}) {
  if (!url) return null;
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
      <div className="mb-8 max-w-2xl">
        <p className="mb-4 text-[10px] font-bold uppercase tracking-[.24em] text-[#EC6253]">
          Project film
        </p>
        <h2 className="text-5xl font-black tracking-[-.05em] text-[#40348C] sm:text-7xl">
          {title}
        </h2>
        {description && (
          <p className="mt-5 text-base leading-relaxed text-[#50685b]">
            {description}
          </p>
        )}
      </div>
      <div className="aspect-video overflow-hidden bg-[#40348C] shadow-2xl">
        <iframe
          className="size-full"
          src={url}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export function VideoDownload({ src }: { src: string }) {
  return (
    <a
      href={src}
      download="sree-Avani-properties-logo-reveal.mp4"
      className="inline-flex items-center gap-2 border border-white/35 px-4 py-3 text-[10px] font-bold uppercase tracking-[.16em] text-white transition hover:border-[#E4CB08] hover:bg-[#E4CB08] hover:text-[#40348C]"
    >
      <Download className="size-4" /> Download video
    </a>
  );
}

export function VideoPlaceholder({ title }: { title: string }) {
  return (
    <div className="flex aspect-video items-center justify-center bg-[#40348C] text-white">
      <div className="text-center">
        <Play className="mx-auto mb-4 size-10 text-[#E4CB08]" />
        <p className="text-sm font-bold uppercase tracking-[.16em]">{title}</p>
        <p className="mt-2 text-xs text-white/55">
          Add a YouTube URL to activate this section.
        </p>
      </div>
    </div>
  );
}
