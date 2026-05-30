import Header from "@/components/headers/Header";
import Footer from "@/components/Footer";
import HeroScrub from "@/components/HeroScrub";
import ServiceCardV4 from "@/components/cards/ServiceCardV4";
import {
  FadeUp,
  StaggerChildren,
  TextReveal,
  ImageRevealMask,
  MagneticButton,
  FilmGrain,
  Vignette,
  ScrollProgress,
} from "@/components/motion";
import { siteConfig } from "@/content/site-config";
import assetManifest from "@/content/asset-manifest.json";

const images = assetManifest.images as Record<string, string>;
const img = (slot: string) => images[slot] ?? "";

export default function HomePage() {
  return (
    <>
      <ScrollProgress color="var(--primary-color)" thickness={2} />
      <Header />

      <main className="relative">
        <HeroScrub />
        <AboutSection />
        <WorkSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <Footer />

      <FilmGrain opacity={0.04} />
      <Vignette color="#0F0617" strength={0.55} />
    </>
  );
}

// ── #about ────────────────────────────────────────────────────────────────
function AboutSection() {
  const lead = siteConfig.features[0];
  const aboutImg = img("section-about");

  return (
    <section
      id="about"
      className="relative scroll-mt-24 border-t border-white/5 bg-bg section-pad px-6"
    >
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.4em] text-primary/80">
            About — {siteConfig.company.tagline}
          </div>
        </FadeUp>

        <TextReveal
          as="h2"
          className="max-w-5xl font-display text-4xl font-light leading-[1.05] tracking-tight text-white md:text-6xl"
          stagger={0.05}
        >
          {siteConfig.manifesto}
        </TextReveal>

        <div className="mt-16 grid items-start gap-12 md:grid-cols-2">
          <div>
            <FadeUp>
              <h3 className="font-display text-2xl font-light leading-snug text-white md:text-3xl">
                {lead.title}
              </h3>
            </FadeUp>
            <FadeUp delay={0.12}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                {lead.description}
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary transition-opacity hover:opacity-80"
              >
                Start a project →
              </a>
            </FadeUp>
          </div>

          <div className="relative">
            {aboutImg ? (
              <ImageRevealMask
                src={aboutImg}
                alt="A DeepFrame AI cinematic still"
                aspectClass="aspect-[4/3]"
                className="rounded-2xl border border-white/10"
              />
            ) : (
              <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-primary/25 via-surface to-contrast/20" />
            )}
          </div>
        </div>

        <StaggerChildren
          staggerDelay={0.08}
          initialDelay={0.1}
          className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {siteConfig.whyUs.items.map((item) => (
            <div key={item.title} className="bg-bg p-7">
              <div className="font-display text-xl font-medium text-contrast">
                {item.title}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {item.description}
              </p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

// ── #work ─────────────────────────────────────────────────────────────────
function WorkSection() {
  return (
    <section
      id="work"
      className="relative scroll-mt-24 border-t border-white/5 bg-bg section-pad px-6"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <FadeUp>
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary/80">
                Work
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-display text-4xl font-light text-white md:text-6xl">
                {siteConfig.work.heading}
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="max-w-sm text-sm leading-relaxed text-white/55">
              {siteConfig.work.description}
            </p>
          </FadeUp>
        </div>

        <StaggerChildren
          staggerDelay={0.08}
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {siteConfig.work.items.map((item) => {
            const src = img(item.slot);
            return (
              <a
                key={item.slot}
                href="#contact"
                className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all hover:border-primary/40"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-primary/25 via-surface to-contrast/20">
                  {src && (
                    <img
                      src={src}
                      alt={`${item.client} — ${item.category}`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-contrast">
                      {item.category}
                    </div>
                    <div className="mt-2 font-display text-xl text-white">
                      {item.client}
                    </div>
                    <div className="mt-1 text-sm text-white/60">{item.result}</div>
                  </div>
                </div>
              </a>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}

// ── #services ───────────────────────────────────────────────────────────────
function ServicesSection() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/5 section-pad px-6"
      style={{
        background:
          "radial-gradient(ellipse 90% 60% at 50% 0%, rgba(217,70,239,0.12), transparent 70%), #0F0617",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <FadeUp>
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary/80">
              Services
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-4xl font-light text-white md:text-6xl">
              {siteConfig.servicesHeading}
            </h2>
          </FadeUp>
        </div>

        <StaggerChildren
          staggerDelay={0.08}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {siteConfig.services.map((svc, i) => {
            const src = img(`service-${svc.slug}`);
            return (
              <ServiceCardV4
                key={svc.slug}
                service={svc}
                index={i}
                imageSrc={src || undefined}
              />
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}

// ── #contact ────────────────────────────────────────────────────────────────
function ContactSection() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 border-t border-white/5 bg-bg px-6 py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <FadeUp>
          <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.4em] text-primary/80">
            Contact
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-display text-5xl font-light leading-[1.0] text-white md:text-7xl">
            {siteConfig.ctaBlock.heading}
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
            {siteConfig.ctaBlock.description}
          </p>
        </FadeUp>
        <FadeUp delay={0.32}>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <MagneticButton
              as="a"
              href={`mailto:${siteConfig.company.email}`}
              className="min-h-[48px] rounded-full bg-primary px-8 py-4 font-display text-sm font-medium text-bg transition-all hover:brightness-110"
            >
              {siteConfig.cta.primary}
            </MagneticButton>
            <a
              href={`mailto:${siteConfig.company.email}`}
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/20 px-8 py-4 font-display text-sm font-medium text-white transition-colors hover:bg-white/5"
            >
              {siteConfig.company.email}
            </a>
          </div>
        </FadeUp>
        <FadeUp delay={0.44}>
          <div className="mt-10 flex flex-wrap justify-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-wider text-white/45 md:text-[11px]">
            {siteConfig.trustBar.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
