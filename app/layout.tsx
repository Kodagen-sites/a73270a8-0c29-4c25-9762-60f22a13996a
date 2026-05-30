import type { Metadata } from "next";
import { Outfit, Figtree } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site-config";
import assetManifest from "@/content/asset-manifest.json";

const display = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const ogImage = (assetManifest.images as Record<string, string>)["og-image"];

export const metadata: Metadata = {
  metadataBase: new URL("https://deepframe.ai"),
  title: {
    default: `${siteConfig.company.name} — ${siteConfig.company.tagline}`,
    template: `%s — ${siteConfig.company.name}`,
  },
  description: siteConfig.company.description,
  keywords: [
    "AI video production",
    "AI commercials",
    "brand films",
    "product commercials",
    "AI film studio",
    "generative video",
  ],
  openGraph: {
    title: `${siteConfig.company.name} — ${siteConfig.company.tagline}`,
    description: siteConfig.company.description,
    type: "website",
    siteName: siteConfig.company.name,
    ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630 }] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.company.name} — ${siteConfig.company.tagline}`,
    description: siteConfig.company.description,
    ...(ogImage ? { images: [ogImage] } : {}),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
