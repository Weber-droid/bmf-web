/**
 * Shared shapes for the editable copy in /content.
 * Components import these types; copy lives in the sibling data files.
 */

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
  /** Optional second line, shown smaller beneath the title */
  description?: string;
  image: ImageAsset;
};

export type Feature = {
  title: string;
  body: string;
  /** Name of a lucide-react icon, resolved in components/icon.tsx */
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
