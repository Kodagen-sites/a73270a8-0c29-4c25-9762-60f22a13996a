"use client";

import { useState } from "react";
import ScrollCanvas from "@/components/ScrollCanvas";
import { HeroScrollText, ScrollHint } from "@/components/motion";
import { siteConfig } from "@/content/site-config";
import framesManifest from "@/content/frames-manifest.json";

/**
 * Scrub-cinematic hero (Archetype G, Mode 2). The frame sequence is scrubbed
 * by scroll via ScrollCanvas; live progress is piped into HeroScrollText so the
 * overlay copy changes through three chapters as the user scrolls.
 */
export default function HeroScrub() {
  const [progress, setProgress] = useState(0);

  const frameCount = framesManifest.frameCount || siteConfig.scrollHero.frameCount;
  const pattern =
    framesManifest.frameUrlTemplate ||
    `${framesManifest.frameDir}/frame-{NNNN}.jpg`;

  return (
    <section id="top" className="relative">
      <ScrollCanvas
        frameCount={frameCount}
        pattern={pattern}
        padLength={4}
        scrollDistance={siteConfig.scrollHero.scrollDistance}
        loadingLabel={siteConfig.scrollHero.loadingLabel}
        loadingVariant={siteConfig.scrollHero.loadingVariant}
        onProgress={setProgress}
      >
        <HeroScrollText
          progress={progress}
          chapters={siteConfig.hero.chapters as never}
          position="bottom-left"
          textColor="#F4ECFA"
          accentColor="#F0ABFC"
          accentTextColor="#0F0617"
        />
        {progress < 0.04 && (
          <div className="pointer-events-none absolute bottom-8 right-8 hidden md:block">
            <ScrollHint label="Scroll" accentColor="#F0ABFC" />
          </div>
        )}
      </ScrollCanvas>
    </section>
  );
}
