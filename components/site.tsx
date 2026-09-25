"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
  MapPin,
  ZoomIn,
} from "lucide-react";
import {
  disclaimer,
  images,
  logoUrl,
  officeAddress,
  projects,
} from "@/lib/site-data";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
      aria-label="Sree Avani Properties home"
    >
      <div className="relative h-24 w-24 shrink-0">
        <Image
          src={logoUrl}
          alt="Sree Avani Properties logo"
          fill
          className="object-contain object-left"
          sizes="96px"
        />
      </div>
      <span
        className={`text-[11px] font-semibold leading-tight tracking-[0.18em] ${dark ? "text-[#40348C]" : "text-white"}`}
      >
        SREE AVANI
        <br />
        <span className="text-[#EC6253]">PROPERTIES</span>
      </span>
    </Link>
  );
}

export function Button({
  children,
  href = "/contact",
  light = false,
}: {
  children: React.ReactNode;
  href?: string;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] transition-all hover:-translate-y-0.5 ${light ? "bg-white text-[#22264e] hover:bg-[#f5d80d]" : "bg-[#f5d80d] text-[#22264e] hover:bg-[#ffe95a]"}`}
    >
      {children}
      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

export function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] ${light ? "text-[#E4CB08]" : "text-[#EC6253]"}`}
    >
      <span className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="site-nav">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          <div className="nav-projects">
            <Link
              href="/projects"
              className="nav-link inline-flex items-center gap-1"
            >
              Projects <ChevronDown className="size-3" />
            </Link>
            <div className="nav-dropdown">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="dropdown-item"
                >
                  <span>
                    <strong>{project.name}</strong>
                    <small>{project.location || "Project 02"}</small>
                  </span>
                  <ArrowUpRight className="size-4" />
                </Link>
              ))}
            </div>
          </div>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/gallery" className="nav-link">
            Gallery
          </Link>
          <Link href="/location" className="nav-link">
            Location
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
          <Button>Enquire now</Button>
        </div>
        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="mobile-menu md:hidden">
          <Link href="/projects" onClick={() => setOpen(false)}>
            Projects
          </Link>
          <div className="flex flex-col gap-3 border-l border-[#E4CB08]/50 pl-4 text-sm text-white/70">
            <Link href="/projects/yadadri-farms" onClick={() => setOpen(false)}>
              Yadadri Farms
            </Link>
            <Link href="/projects/coming-soon" onClick={() => setOpen(false)}>
              Coming Soon
            </Link>
          </div>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/gallery" onClick={() => setOpen(false)}>
            Gallery
          </Link>
          <Link href="/location" onClick={() => setOpen(false)}>
            Location
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image = images.hero,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  image?: string;
}) {
  return (
    <section className="relative flex min-h-[440px] items-end overflow-hidden bg-[#40348C] pb-16 pt-36 text-white">
      <Image
        src={image}
        alt=""
        fill
        className="object-cover opacity-35"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#102e26] via-[#40348C]/50 to-[#40348C]/20" />
      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-10">
        <SectionLabel light>{eyebrow}</SectionLabel>
        <h1 className="font-serif text-6xl leading-[.9] tracking-tight sm:text-8xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}

export function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const coming = project.slug === "coming-soon";
  return (
    <article className="project-card">
      {coming ? (
        <div className="project-placeholder">
          <span>PROJECT 02</span>
          <strong>COMING SOON</strong>
          <small>A new project from Sree Avani Properties</small>
        </div>
      ) : (
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.image!}
            alt="Yadadri Farms landscape"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
      <div className="flex flex-col gap-4 p-6">
        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[.18em] text-[#EC6253]">
          <span>{project.status}</span>
          {!coming && <MapPin className="size-4" />}
        </div>
        <h3 className="font-serif text-4xl text-[#40348C]">{project.name}</h3>
        <p className="text-sm text-[#65776e]">
          {project.location || "Project 02"}
        </p>
        {project.highlights && (
          <div className="flex flex-wrap gap-2">
            {project.highlights.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#cfc6b6] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#50685b]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <Link
          href={`/projects/${project.slug}`}
          className="mt-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#40348C]"
        >
          {coming ? "Coming Soon" : "View project"}{" "}
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}

export function EnquiryForm({
  project = "Yadadri Farms",
}: {
  project?: string;
}) {
  return (
    <form className="grid gap-5" onSubmit={(e) => e.preventDefault()}>
      <input
        className="field"
        placeholder="Full Name"
        aria-label="Full Name"
        required
      />
      <input
        className="field"
        placeholder="Phone Number"
        aria-label="Phone Number"
        type="tel"
        required
      />
      <select className="field" aria-label="Project" defaultValue={project}>
        <option>Yadadri Farms</option>
        <option>Coming Soon</option>
      </select>
      {project === "Yadadri Farms" && (
        <select className="field" aria-label="Plot Size" defaultValue="">
          <option value="" disabled>
            Plot Size
          </option>
          <option>121 SQ.YDS</option>
          <option>242 SQ.YDS</option>
        </select>
      )}
      <textarea
        className="field min-h-28 resize-none"
        placeholder="Message"
        aria-label="Message"
      />
      <button className="inline-flex items-center justify-center gap-3 rounded-full bg-[#40348C] px-6 py-4 text-xs font-bold uppercase tracking-[.18em] text-white transition hover:bg-[#287d6d]">
        Submit Enquiry <ArrowUpRight className="size-4" />
      </button>
    </form>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#40348C] py-16 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-6 text-sm leading-relaxed text-white/60">
              Sree Avani Properties
              <br />
              Real Estate · Projects
            </p>
          </div>
          <div>
            <p className="footer-title">Projects</p>
            <div className="footer-links">
              <Link href="/projects/yadadri-farms">Yadadri Farms</Link>
              <Link href="/projects/coming-soon">Coming Soon</Link>
            </div>
          </div>
          <div>
            <p className="footer-title">Company</p>
            <div className="footer-links">
              <Link href="/about">About</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/location">Location</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <p className="footer-title">Office</p>
            <address className="not-italic text-sm leading-relaxed text-white/60">
              {officeAddress.map((line) => (
                <span className="block" key={line}>
                  {line}
                </span>
              ))}
            </address>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-8 text-xs leading-relaxed text-white/45 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Sree Avani Properties</span>
          <span>{disclaimer}</span>
        </div>
      </div>
    </footer>
  );
}

export function MasterPlan() {
  return (
    <div className="master-plan">
      <div className="master-plan-art">
        <span className="master-plan-title">Yadadri Farms</span>
        <div className="master-road road-one" />
        <div className="master-road road-two" />
        <div className="master-blocks" />
        <strong>MASTER PLAN</strong>
      </div>
      <p>
        Supplied master-plan presentation · <ZoomIn className="inline size-4" />{" "}
        responsive viewing
      </p>
    </div>
  );
}
