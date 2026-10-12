export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Link = {
  label: string;
  href: string;
};

export type Step = {
  title: string;
  // optional second line under the title
  description?: string;
  image: ImageAsset;
};

export type Feature = {
  title: string;
  body: string;
  // see components/icon.tsx
  icon: IconName;
};

export type IconName =
  | "megaphone"
  | "tablet"
  | "bike"
  | "headset"
  | "wallet"
  | "calendar"
  | "receipt"
  | "utensils"
  | "store"
  | "heart";

export type Teaser = {
  title: string;
  body: string;
  cta: Link;
  image: ImageAsset;
};
