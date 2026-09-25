import Image from "next/image";
import { MapPin } from "lucide-react";
import {
  Button,
  EnquiryForm,
  Footer,
  Navbar,
  PageHero,
  SectionLabel,
  MasterPlan,
} from "@/components/site";
import {
  areaStatement,
  fruits,
  highlights,
  images,
  keyLocationDetails,
  locationHighlights,
} from "@/lib/site-data";
import { ImageFeature, YouTubeVideoSection } from "@/components/media-sections";
export const metadata = {
  title: "Yadadri Farms | Sree Avani Properties",
  description: "Yadadri Farms at Peddakandukur.",
};
export default function YadadriFarmsPage() {
  return (
    <main className="bg-[#f5f1e8] text-[#183a30]">
      <Navbar />
      <PageHero
        eyebrow="Project 01 · Peddakandukur"
        title={
          <>
            Yadadri <em className="font-normal text-[#e8ba55]">Farms</em>
          </>
        }
        intro="A gated community farm site at Peddakandukur, Yadadri."
      />
      <ImageFeature
        src={images.orchard}
        alt="Fruit plantation at Yadadri Farms"
        eyebrow="A place to grow"
        title="Land that becomes a way of life."
      >
        Yadadri Farms brings open land, fruit plantation and considered
        lifestyle facilities together in a planned community at Peddakandukur.
      </ImageFeature>
      <YouTubeVideoSection
        title="See the setting"
        description="Add the official Yadadri Farms YouTube link here when it is available."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-32">
        <div>
          <SectionLabel>Project introduction</SectionLabel>
          <h2 className="font-serif text-5xl leading-none sm:text-6xl">
            More than
            <br />
            <em className="font-normal text-[#b26a63]">a plot.</em>
          </h2>
        </div>
        <div className="max-w-xl lg:pt-12">
          <p className="text-xl leading-relaxed text-[#50685b]">
            Yadadri Farms brings together farm plots, fruit plantation and
            lifestyle facilities in a planned community at Peddakandukur.
          </p>
          <div className="mt-8">
            <Button href="#enquire">Enquire now</Button>
          </div>
        </div>
      </section>
      <section className="bg-[#173d31] py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionLabel light>Project highlights</SectionLabel>
          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, i) => (
              <div
                key={item}
                className="border-t border-white/20 py-5 pr-4 text-sm text-white/80"
              >
                <span className="mr-4 text-xs text-[#e8ba55]">0{i + 1}</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
          <div>
            <SectionLabel>Plot options</SectionLabel>
            <h2 className="font-serif text-5xl leading-none">
              Choose your
              <br />
              <em className="font-normal text-[#b26a63]">space.</em>
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-[#cfc6b6] p-5">
                <p className="font-serif text-4xl">121</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#7b887d]">
                  SQ.YDS
                </p>
              </div>
              <div className="rounded-2xl border border-[#cfc6b6] p-5">
                <p className="font-serif text-4xl">242</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#7b887d]">
                  SQ.YDS
                </p>
              </div>
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem]">
            <Image
              src={images.field}
              alt="Yadadri Farms open land"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#dfe8df] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionLabel>Fruit plantation</SectionLabel>
              <h2 className="font-serif text-5xl">
                Grown with{" "}
                <em className="font-normal text-[#287d6d]">purpose.</em>
              </h2>
              <div className="mt-8 flex flex-wrap gap-2">
                {fruits.map((fruit) => (
                  <span
                    key={fruit}
                    className="rounded-full border border-[#aabda9] px-4 py-2 text-sm text-[#365449]"
                  >
                    {fruit}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative min-h-[320px] overflow-hidden rounded-[2rem]">
              <Image
                src={images.orchard}
                alt="Fruit plantation landscape"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <SectionLabel>Master plan</SectionLabel>
        <h2 className="font-serif mb-10 text-5xl">
          See the <em className="font-normal text-[#287d6d]">layout.</em>
        </h2>
        <MasterPlan />
      </section>
      <section className="bg-[#173d31] py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionLabel light>Area statement</SectionLabel>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {areaStatement.map(([value, label]) => (
              <div key={label} className="border-t border-white/20 pt-5">
                <p className="font-serif text-4xl text-[#e8ba55]">{value}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-white/60">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
        <div>
          <SectionLabel>Location highlights</SectionLabel>
          <h2 className="font-serif text-5xl leading-none">
            Close to
            <br />
            <em className="font-normal text-[#287d6d]">what matters.</em>
          </h2>
          <div className="mt-10 grid gap-4 text-sm text-[#50685b]">
            {locationHighlights.map((item) => (
              <div
                key={item}
                className="flex gap-3 border-b border-[#d8d0c0] pb-3"
              >
                <MapPin className="size-4 shrink-0 text-[#a87b2e]" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] bg-[#dfe8df] p-8">
          <SectionLabel>Key location details</SectionLabel>
          <div className="grid gap-4 text-sm text-[#50685b]">
            {keyLocationDetails.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#b26a63] py-20 text-[#fff7ee]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 sm:flex-row sm:items-center lg:px-10">
          <div>
            <SectionLabel light>Promotional information</SectionLabel>
            <h2 className="font-serif text-5xl">
              Book 242 SQ.YDS
              <br />
              <em className="font-normal">Get EV Scooty Free</em>
            </h2>
            <p className="mt-5 text-sm text-white/80">
              Down Payment: ₹3,00,000/- · @ PEDDAKANDUKUR
            </p>
          </div>
          <p className="font-serif text-5xl">₹6,00,000/-</p>
        </div>
      </section>
      <section
        id="enquire"
        className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:px-10 lg:py-32"
      >
        <div>
          <SectionLabel>Enquire about Yadadri Farms</SectionLabel>
          <h2 className="font-serif text-5xl">
            Find your <em className="font-normal text-[#b26a63]">place.</em>
          </h2>
        </div>
        <EnquiryForm />
      </section>
      <Footer />
    </main>
  );
}
