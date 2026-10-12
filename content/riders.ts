import type { ImageAsset, Step } from "./types";

export const riders = {
  hero: {
    title: "BMF Riders",
    subtitle: "Join our fleet of on-demand delivery riders and make money working when you want.",
    image: {
      src: "/images/rider-banner.png",
      alt: "Illustration of a BringMe-Food rider on a red scooter riding out of a phone map",
      width: 470,
      height: 449,
    } satisfies ImageAsset,
  },

  benefits: {
    title: "Why Join our Fleet?",
    items: [
      {
        title: "Earn money when you want",
        image: {
          src: "/images/riders/earn-money.png",
          alt: "Illustration of a rider leaning on a giant gold coin",
          width: 314,
          height: 202,
        },
      },
      {
        title: "Choose when & where you want to work",
        image: {
          src: "/images/riders/choose-when-where.png",
          alt: "Illustration of a rider choosing a schedule and location",
          width: 312,
          height: 202,
        },
      },
      {
        title: "Know how much you’ll make before accepting any order",
        image: {
          src: "/images/riders/know-earnings.png",
          alt: "Illustration of a rider checking earnings for an order",
          width: 313,
          height: 202,
        },
      },
    ] satisfies Step[],
  },

  requirements: {
    title: "Requirements",
    image: {
      src: "/images/rider-delivering.jpg",
      alt: "A BringMe-Food rider in a red uniform handing over a delivery bag",
      width: 395,
      height: 482,
    } satisfies ImageAsset,
    items: [
      "18+",
      "Car, Motorbike or Bicycle",
      "Valid ID",
      "Background Check (all applicants will be subject to a basic background check)",
    ],
  },
};
