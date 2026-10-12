import type { ImageAsset, Step, Teaser } from "./types";

export const home = {
  hero: {
    title: "BringMe-Food is the platform for all Food Lovers.",
    // must match text in the title exactly
    highlight: "Food Lovers",
    subtitle: "Bringing you all your favourite foods at your fingertips.",
    image: {
      src: "/images/hero-dish.png",
      alt: "A bowl of creamy chicken pasta with cherry tomatoes and fresh herbs",
      width: 476,
      height: 397,
    } satisfies ImageAsset,
    badges: [
      { emoji: "🍲", label: "Food" },
      { emoji: "🥤", label: "Drinks" },
      { emoji: "🛒", label: "Groceries" },
    ],
  },

  marquee: ["Food", "Drinks", "Groceries", "and more"],

  community: {
    // joined together, the parts must read as the full sentence
    parts: [
      { text: "Our Community is made up of " },
      { text: "Food Lovers", highlight: "saffron" },
      { text: ", " },
      { text: "On-demand Delivery Riders", highlight: "jollof" },
      { text: " & a variety of " },
      { text: "Kitchens", highlight: "indigo" },
      {
        text: " bringing you mouthwatering flavours and dishes customized to your palate.",
      },
    ] as { text: string; highlight?: "saffron" | "jollof" | "indigo" }[],
  },

  discover: {
    title: "Discover & Order from your local favourites.",
    subtitle: "Food, Drinks, Groceries and more",
    image: {
      src: "/images/app-screens.png",
      alt: "The BringMe-Food app showing nearby restaurants and a restaurant menu",
      width: 563,
      height: 545,
    } satisfies ImageAsset,
    stepsLabel: "How it Works",
    steps: [
      {
        title: "Discover",
        image: {
          src: "/images/steps/discover.png",
          alt: "Illustration of a phone with a storefront and location pin",
          width: 240,
          height: 206,
        },
      },
      {
        title: "Order",
        image: {
          src: "/images/steps/order.png",
          alt: "Illustration of a woman placing an order on her phone",
          width: 232,
          height: 236,
        },
      },
      {
        title: "Enjoy",
        image: {
          src: "/images/steps/enjoy.png",
          alt: "Illustration of someone enjoying their delivered meal",
          width: 250,
          height: 192,
        },
      },
    ] satisfies Step[],
  },

  riders: {
    title: "On-demand Delivery Riders",
    body: "Join our fleet of on-demand delivery riders and make money working when you want.",
    cta: { label: "Become a rider", href: "/riders" },
    image: {
      src: "/images/rider-delivering.jpg",
      alt: "A BringMe-Food rider in a red uniform handing over a delivery bag",
      width: 395,
      height: 482,
    },
  } satisfies Teaser,

  vendors: {
    title: "Vendors",
    body: "Reach new customers, increase your sales and grow your business by joining our community as a vendor.",
    cta: { label: "Become a Vendor", href: "/vendors" },
    image: {
      src: "/images/vendor-restaurant-owner.jpg",
      alt: "A smiling restaurant owner standing beside a “We are open” chalkboard",
      width: 395,
      height: 482,
    },
  } satisfies Teaser,

  statement: {
    text: "Here at BMF, we believe it is our responsibility to uplift, educate and celebrate our abundant Ghanaian communities.",
    // must match text in the statement exactly
    highlight: "uplift, educate and celebrate",
  },

  lunchScheme: {
    title: "BringMe-Food Lunch Scheme",
    body: "BMF strives to enrich ghanaian society with an initial focus on children and young people through the BMF Lunch Scheme.",
    image: {
      src: "/images/lunch-scheme-cooking.jpg",
      alt: "A woman smiling while preparing a meal in her kitchen",
      width: 395,
      height: 482,
    } satisfies ImageAsset,
    cta: "Find Out More",
    modal: {
      image: {
        src: "/images/lunch-scheme-dish.jpg",
        alt: "A colourful seafood salad with lime, tomatoes and fresh herbs",
        width: 417,
        height: 626,
      } satisfies ImageAsset,
      title: "BringMe-Food Lunch Scheme",
      paragraphs: [
        "Through the BringMe-Food School Lunch Scheme, we will endeavour to empower children and young people through a series of educative programmes designed to highlight the importance of nutrition and its links with cognitive/physical development as well as creating tangible opportunities for professional growth for senior high school students through work experience and our BringMe-Food Award programme.",
        "Our people at BringMe-Food truly understand the importance of giving back to the community and if we consciously invest in our children and young people, and equip them with the skills and knowledge they need to prosper the future of Ghana is limitless.",
      ],
    },
  },
};
