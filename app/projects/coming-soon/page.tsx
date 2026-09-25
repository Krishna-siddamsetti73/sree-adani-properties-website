import { ArrowLeft } from "lucide-react";
import { Button, Footer, Navbar, PageHero } from "@/components/site";
export const metadata = {
  title: "Coming Soon | Sree Avani Properties",
  description: "Project 02 from Sree Avani Properties.",
};
export default function ComingSoonPage() {
  return (
    <main className="bg-[#f5f1e8] text-[#183a30]">
      <Navbar />
      <PageHero
        eyebrow="Project 02"
        title={
          <>
            Coming <em className="font-normal text-[#e8ba55]">Soon</em>
          </>
        }
        intro="A new project from Sree Avani Properties. Project details will be announced soon."
        image="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85"
      />
      <section className="mx-auto max-w-3xl px-5 py-28 text-center lg:py-40">
        <p className="text-xs font-bold uppercase tracking-[.22em] text-[#a87b2e]">
          Project 02 · Coming Soon
        </p>
        <h2 className="mt-5 font-serif text-6xl">
          A new chapter
          <br />
          <em className="font-normal text-[#b26a63]">is taking shape.</em>
        </h2>
        <p className="mx-auto mt-7 max-w-lg leading-relaxed text-[#65776e]">
          Project details will be announced soon. Enquire with us to stay
          connected.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button href="/projects">
            <ArrowLeft className="size-4" /> Back to projects
          </Button>
          <Button href="/contact" light>
            Enquire with us
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
