import { MapPin } from "lucide-react";
import { Footer, Navbar, PageHero, SectionLabel } from "@/components/site";
import { keyLocationDetails, locationHighlights } from "@/lib/site-data";
export const metadata = {
  title: "Location | Sree Avani Properties",
  description: "Yadadri Farms location at Peddakandukur.",
};
export default function LocationPage() {
  return (
    <main className="bg-[#f5f1e8] text-[#183a30]">
      <Navbar />
      <PageHero
        eyebrow="Yadadri Farms"
        title={
          <>
            Find your <em className="font-normal text-[#e8ba55]">way.</em>
          </>
        }
        intro="Peddakandukur · Yadadri"
      />
      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
        <div>
          <SectionLabel>Location highlights</SectionLabel>
          <h2 className="font-serif text-5xl leading-none">
            Connected to
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
          <div className="relative min-h-[360px] overflow-hidden rounded-[1.5rem] bg-[#cbd9c7]">
            <div className="absolute inset-10 rounded-[45%] border-2 border-dashed border-[#9bb092]" />
            <div className="absolute left-1/2 top-1/2 flex size-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#173d31] text-center text-[10px] font-bold uppercase tracking-widest text-white">
              Peddakandukur
              <br />
              Yadadri
            </div>
          </div>
          <SectionLabel>Key location details</SectionLabel>
          <div className="grid gap-3 text-sm text-[#50685b]">
            {keyLocationDetails.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
