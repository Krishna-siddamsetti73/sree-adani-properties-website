import { Footer, Navbar, PageHero, ProjectCard } from "@/components/site";
import { projects } from "@/lib/site-data";
export const metadata = {
  title: "Our Projects | Sree Avani Properties",
  description: "Explore projects from Sree Avani Properties.",
};
export default function ProjectsPage() {
  return (
    <main className="bg-[#f5f1e8] text-[#183a30]">
      <Navbar />
      <PageHero
        eyebrow="Sree Avani Properties"
        title={
          <>
            Our <em className="font-normal text-[#e8ba55]">Projects</em>
          </>
        }
        intro="Explore projects from Sree Avani Properties."
      />
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
