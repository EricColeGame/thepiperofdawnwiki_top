export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "The Piper of Dawn Wiki",
  shortName: "The Piper of Dawn",
  logoText: "P",
  tagline: "Alchemy, Farming, Character Routes & Endings",
  description: "Your ultimate guide to The Piper of Dawn! Explore alchemy recipes, magical crops, character routes, factions, endings, and progression strategies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://thepiperofdawnwiki.top",
  supportEmail: "support@thepiperofdawnwiki.top",
  gameUrl: "https://store.steampowered.com/app/3804370/The_Piper_of_Dawn/",
  heroVideoId: "JZhQzwi_YBg", // The Piper of Dawn | Official Trailer (2P Games)
  social: {
    discord: "https://discord.gg/2p-games-539635951513632768",
    youtube: "https://www.youtube.com/watch?v=JZhQzwi_YBg",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
