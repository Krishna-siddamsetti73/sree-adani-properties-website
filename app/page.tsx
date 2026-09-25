"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  MapPin,
  Play,
  ShieldCheck,
  Sparkles,
  Trees,
  Waves,
} from "lucide-react";
import {
  Button,
  EnquiryForm,
  Footer,
  Navbar,
  SectionLabel,
} from "@/components/site";
import { HeroCarousel } from "@/components/hero-carousel";
import {
  areaStatement,
  fruits,
  highlights,
  images,
  locationHighlights,
} from "@/lib/site-data";

const storyVideo = "https://www.youtube.com/watch?v=ScMzIvxBSi4";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f7f4ec] text-[#40348C]">
      <Navbar />
      <div className="mt-[2]">
        <HeroCarousel />
      </div>

      <section
        id="why"
        className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32"
      >
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <SectionLabel>More than a plot</SectionLabel>
            <h2 className="font-serif text-5xl leading-[.92] tracking-tight sm:text-7xl">
              A place to
              <br />
              <em className="font-normal text-[#E82F50]">come back to.</em>
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-[#66708a]">
            You are not only buying square yards. You are choosing clean air, a
            slower morning, a secure address and the freedom to build a future
            around the land.
          </p>
        </div>
        <div className="mt-16 grid gap-px bg-[#d8d5ca] sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Location", "Near Yadadri Temple City"],
            ["02", "Ownership", "Clear plots, clear process"],
            ["03", "Lifestyle", "Orchards, lawns and leisure"],
            ["04", "Care", "Security and managed upkeep"],
          ].map(([no, title, body]) => (
            <div key={no} className="bg-[#f7f4ec] p-7">
              <span className="text-xs font-bold text-[#E82F50]">{no}</span>
              <h3 className="mt-10 font-serif text-3xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#66708a]">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#40348C] text-white">
        <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-2">
          <div className="relative min-h-[500px] overflow-hidden">
            <Image
              src={images.orchard}
              alt="Fruit orchard at Yadadri Farms"
              fill
              className="object-cover opacity-80"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#40348C] via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="rounded-full bg-[#E4CB08] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#40348C]">
                Designed for living
              </span>
              <p className="mt-3 font-serif text-4xl">The farm, reimagined.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-14 lg:p-20">
            <SectionLabel light>What your plot includes</SectionLabel>
            <h2 className="font-serif text-5xl leading-none sm:text-6xl">
              Everything you need
              <br />
              <em className="font-normal text-[#E4CB08]">to make it yours.</em>
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {highlights.slice(0, 8).map((item) => (
                <div
                  key={item}
                  className="flex gap-3 border-b border-white/15 pb-3 text-sm text-white/75"
                >
                  <Check className="size-4 shrink-0 text-[#169E94]" />
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="/projects/yadadri-farms"
              className="mt-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E4CB08]"
            >
              See full specifications <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div>
            <SectionLabel>Built for your weekends</SectionLabel>
            <h2 className="font-serif text-5xl leading-[.9] sm:text-7xl">
              Your own
              <br />
              <em className="font-normal text-[#169E94]">green room.</em>
            </h2>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-[#66708a]">
              Wake up to your orchard, host family under the sky, or build a
              nature home that feels like an escape without being far away.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-5">
              {[
                [Trees, "Fruit orchard"],
                [Waves, "Mini pool + lawn"],
                [ShieldCheck, "24/7 security"],
                [Sparkles, "Nature house ready"],
              ].map(([Icon, label]) => (
                <div
                  key={label as string}
                  className="flex items-center gap-3 text-sm font-semibold"
                >
                  <span className="grid size-10 place-items-center rounded-full bg-[#169E94]/10 text-[#169E94]">
                    <Icon className="size-5" />
                  </span>
                  {label as string}
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#e9e4d8]">
            <Image
              src={images.home}
              alt="Modern weekend home surrounded by greenery"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#40348C]">
              Illustrative lifestyle reference
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#efebdf] px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionLabel>Choose your size</SectionLabel>
              <h2 className="font-serif text-5xl sm:text-7xl">
                A plot that fits
                <br />
                <em className="font-normal text-[#E82F50]">your plan.</em>
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#40348C]"
            >
              Ask for availability <ChevronRight className="size-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="border border-[#40348C]/15 bg-[#f7f4ec] p-8 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-widest text-[#E82F50]">
                For a personal escape
              </p>
              <h3 className="mt-4 font-serif text-5xl">
                121 <span className="text-2xl">SQ.YDS</span>
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#66708a]">
                A manageable green retreat for a nature house, orchard corner
                and slow weekends.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
              >
                Enquire for this plot <ArrowUpRight className="size-4" />
              </Link>
            </div>
            <div className="border border-[#40348C]/15 bg-[#40348C] p-8 text-white sm:p-10">
              <p className="text-xs font-bold uppercase tracking-widest text-[#E4CB08]">
                For a fuller lifestyle
              </p>
              <h3 className="mt-4 font-serif text-5xl">
                242 <span className="text-2xl">SQ.YDS</span>
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
                More room for a larger farm home, family gatherings, planting
                and outdoor living.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E4CB08]"
              >
                Enquire for this plot <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel>Make a confident decision</SectionLabel>
            <h2 className="font-serif text-5xl leading-[.92] sm:text-7xl">
              Clarity before
              <br />
              <em className="font-normal text-[#EC6253]">you commit.</em>
            </h2>
            <p className="mt-7 text-base leading-relaxed text-[#66708a]">
              From first call to site visit, we keep the process clear. Tell us
              what you are looking for and our team will guide you through
              availability, visit scheduling and next steps.
            </p>
            <div className="mt-8 flex flex-col gap-4 text-sm font-semibold">
              {[
                "Share your preferred plot size",
                "Schedule a guided site visit",
                "Review layout and documentation",
                "Reserve your chosen plot",
              ].map((step, i) => (
                <div key={step} className="flex items-center gap-4">
                  <span className="grid size-8 place-items-center rounded-full bg-[#E82F50] text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  {step}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-white p-7 shadow-[0_20px_70px_rgba(34,38,78,.08)] sm:p-10">
            <h3 className="font-serif text-4xl">Plan your site visit</h3>
            <p className="mt-2 text-sm text-[#66708a]">
              Leave your details. We&apos;ll share the current availability and
              call you back.
            </p>
            <div className="mt-7">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#169E94] text-white">
        <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col justify-center p-8 sm:p-14 lg:p-20">
            <SectionLabel light>Location advantage</SectionLabel>
            <h2 className="font-serif text-5xl leading-none sm:text-7xl">
              Close to what
              <br />
              <em className="font-normal text-[#E4CB08]">matters.</em>
            </h2>
            <p className="mt-7 max-w-md text-white/75">
              A location connected to temple tourism, highways, education and
              the future growth of Yadadri.
            </p>
            <div className="mt-8 grid gap-3">
              {locationHighlights.slice(0, 6).map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/85"
                >
                  <MapPin className="size-4 text-[#E4CB08]" />
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="/location"
              className="mt-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E4CB08]"
            >
              Explore the location <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="relative min-h-[460px]">
            <Image
              src={images.field}
              alt="Open farmland near Yadadri"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#169E94]/20 mix-blend-multiply" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div>
            <SectionLabel>Fruit, shade, seasons</SectionLabel>
            <h2 className="font-serif text-5xl leading-[.9] sm:text-7xl">
              Let your land
              <br />
              <em className="font-normal text-[#E82F50]">grow with you.</em>
            </h2>
            <p className="mt-7 max-w-md text-base leading-relaxed text-[#66708a]">
              Planned fruit plantation and drip irrigation bring a living rhythm
              to your property from the first season.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {fruits.map((fruit, i) => (
              <div
                key={fruit}
                className="group relative aspect-square overflow-hidden bg-[#40348C]"
              >
                <Image
                  src={
                    [
                      images.orchard,
                      images.field,
                      images.palms,
                      images.orchard,
                    ][i % 4]
                  }
                  alt={`${fruit} plantation`}
                  fill
                  className="object-cover opacity-65 transition duration-500 group-hover:scale-110 group-hover:opacity-90"
                  sizes="200px"
                />
                <span className="absolute bottom-3 left-3 text-sm font-semibold text-white">
                  {fruit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#40348C] px-5 py-24 text-white lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionLabel light>Explore the vision</SectionLabel>
              <h2 className="font-serif text-5xl sm:text-7xl">
                See it before
                <br />
                <em className="font-normal text-[#E4CB08]">you visit.</em>
              </h2>
            </div>
            <Link
              href={storyVideo}
              target="_blank"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E4CB08]"
            >
              Open on YouTube <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="relative mt-12 aspect-video overflow-hidden rounded-[2rem] bg-black">
            <iframe
              title="Yadadri Farms project video"
              src="https://www.youtube.com/embed/ScMzIvxBSi4?rel=0"
              className="size-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-0 grid place-items-center">
              <span className="grid size-16 place-items-center rounded-full bg-[#E82F50] text-white shadow-xl">
                <Play className="ml-1 size-6 fill-current" />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <SectionLabel>At a glance</SectionLabel>
            <h2 className="font-serif text-5xl sm:text-7xl">
              The numbers
              <br />
              <em className="font-normal text-[#169E94]">made simple.</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {areaStatement.map(([value, label]) => (
              <div key={label} className="bg-white p-6">
                <p className="font-serif text-4xl text-[#E82F50]">{value}</p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-[#66708a]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 flex flex-col items-start justify-between gap-8 border-t border-[#40348C]/15 pt-10 sm:flex-row sm:items-end">
          <div>
            <p className="font-serif text-4xl">Ready to see your plot?</p>
            <p className="mt-2 text-sm text-[#66708a]">
              Start with a conversation, not a sales pitch.
            </p>
          </div>
          <Button href="/contact">Book a site visit</Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
