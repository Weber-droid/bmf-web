import type { ImageAsset, Link } from "./types";

export const site = {
  name: "BringMe-Food",
  shortName: "BMF",
  url: "https://bringme-food.com",
  description: "Bringing you all your favourite foods at your fingertips.",
  locale: "en_GH",

  logo: {
    src: "/images/bringme-food-logo.png",
    alt: "BringMe-Food",
    width: 150,
    height: 143,
  } satisfies ImageAsset,

  nav: [
    { label: "Vendors", href: "/vendors" },
    { label: "Riders", href: "/riders" },
    { label: "Contact", href: "#contact" },
  ] satisfies Link[],

  headerCta: { label: "Get the App", href: "#get-the-app" } satisfies Link,

  scrollCue: "Scroll Down",

  apps: {
    appStore: {
      label: "Download on the App Store",
      href: "https://apps.apple.com/us/app/bringmefood/id1594332502",
      badge: "/images/app-store-badge.svg",
    },
    googlePlay: {
      label: "Get it on Google Play",
      href: "https://play.google.com/store/apps/details?id=com.bringmefood.app",
      badge: "/images/google-play-badge.svg",
    },
  },

  contact: {
    heading: "Contact Us",
    body: "We’re here to help you whenever you need us, Feel free to contact us",
    email: "info@bringme-food.com",
    location: "Accra, Ghana",
  },

  notFound: {
    code: "404",
    title: "This plate is empty.",
    body: "We couldn’t find the page you were looking for.",
    cta: { label: "Back to home", href: "/" } satisfies Link,
  },

  footer: {
    links: [
      { label: "Vendors", href: "/vendors" },
      { label: "Riders", href: "/riders" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & conditions", href: "/terms-conditions" },
    ] satisfies Link[],
    /** `{year}` is replaced with the current year at render time */
    copyright: "Copyright © {year} Bring Me-Group. All rights reserved",
    credit: { prefix: "Website by", label: "DeduceInc", href: "https://deduceinc.com/" },
  },
} as const;

export type Site = typeof site;
