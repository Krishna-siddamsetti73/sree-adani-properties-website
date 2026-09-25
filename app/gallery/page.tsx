import Image from "next/image";
import { Footer, Navbar, PageHero, SectionLabel } from "@/components/site";
import { galleryImages } from "@/lib/site-data";
export const metadata = {
  title: "Gallery | Sree Avani Properties",
  description: "Yadadri Farms gallery.",
};
export default function GalleryPage() {
  return (
    <main className="bg-[#f5f1e8] text-[#183a30]">
      <Navbar />
      <PageHero
        eyebrow="Visual archive"
        title={
          <>
            Project <em className="font-normal text-[#e8ba55]">Gallery</em>
          </>
        }
        intro="Yadadri Farms · Peddakandukur"
      />
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <SectionLabel>All · Yadadri Farms</SectionLabel>
            <h2 className="font-serif text-5xl">
              A closer <em className="font-normal text-[#b26a63]">look.</em>
            </h2>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={image}
              className={`relative min-h-[300px] overflow-hidden ${index === 0 ? "sm:row-span-2 sm:min-h-[620px]" : ""}`}
            >
              <Image
                src={image}
                alt={`Yadadri Farms gallery image ${index + 1}`}
                fill
                className="object-cover transition duration-700 hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
