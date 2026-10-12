import type { Feature, ImageAsset, Step } from "./types";

export const vendors = {
  hero: {
    title: "Grow Your Business",
    subtitle: "Reach new customers, increase your sales and grow your business.",
    image: {
      src: "/images/vendor-banner.png",
      alt: "Illustration of a phone storefront taking a pizza order with rising sales",
      width: 446,
      height: 436,
    } satisfies ImageAsset,
    intro:
      "Your business is our passion. Your success is our success therefore we proactively seek and develop new ways to ensure your business reaches its full potential.",
  },

  services: {
    title: "Our Services",
    images: [
      {
        src: "/images/services-team.jpg",
        alt: "Three colleagues smiling at a laptop together",
        width: 395,
        height: 482,
      },
      {
        src: "/images/services-couple-ordering.jpg",
        alt: "A couple in their kitchen browsing a phone together",
        width: 395,
        height: 482,
      },
    ] satisfies ImageAsset[],
    items: [
      {
        title: "Marketing",
        icon: "megaphone",
        body: "Our platform is an efficient and convenient channel that helps increase exposure of your brand/business to a wide variety of eager customers online. We capitalise on this exposure by developing strategic sales and marketing plans suited to your business needs helping generate sales and increasing growth.",
      },
      {
        title: "Order Management platform",
        icon: "tablet",
        body: "We provide our partners (your business) with an automated and user friendly order management platform (tablet) that gives you access to the BMF Portal where you can accept orders, manage your inventory, and track your business performance (sales, customers, reach etc).",
      },
      {
        title: "On-Demand Delivery Service",
        icon: "bike",
        body: "We provide an easily accessible platform to dispatch riders including drivers helping create the largest on-demand delivery fleet in Ghana. This ensures your products can be delivered to your customers rapidly. Our on-demand service is fully transparent, and allows your customers to track their orders every step of the journey using end-to-end encrypted communication and GPS tracking.",
      },
      {
        title: "Support centre",
        icon: "headset",
        body: "We provide you with a 24/7 support line with well trained staff who are dedicated to solving any queries you or your customers may have.",
      },
    ] satisfies Feature[],
  },

  technology: {
    title: "Our Technology",
    /** P1 is split around the stat so "15* minutes" can be highlighted in place */
    lead: {
      before:
        "Our highly scalable platform, available on Android, iOS and online is capable of processing multiple orders at the same time enabled by our algorithms that ensure orders can be delivered in as early as ",
      stat: { value: 15, suffix: "*", unit: "minutes" },
      after: " from when the order is placed.",
    },
    body: "We’ve developed multiple algorithms that constantly monitor trends in consumer behavior from the data we gather, allowing us to provide your customers with the right products to meet their needs in a convenient and efficient way.",
  },

  howItWorks: {
    title: "How it Works",
    steps: [
      {
        title: "Sign Up",
        description: "as Vendor",
        image: {
          src: "/images/steps/vendor-sign-up.png",
          alt: "",
          width: 77,
          height: 65,
        },
      },
      {
        title: "We onboard your business",
        description: "on our platform",
        image: {
          src: "/images/steps/vendor-onboard.png",
          alt: "",
          width: 74,
          height: 67,
        },
      },
      {
        title: "Start receiving orders",
        description: "and increase your sales",
        image: {
          src: "/images/steps/vendor-orders.png",
          alt: "",
          width: 71,
          height: 70,
        },
      },
    ] satisfies Step[],
  },

  whyBmf: {
    title: "Why BMF?",
    quote:
      "Your business is our passion. Your success is our success therefore we proactively seek and develop ways to ensure your business reaches its full potential.",
    image: {
      src: "/images/why-bmf-dish.jpg",
      alt: "Rice with vegetables and spiced fried fish served on a rustic wooden table",
      width: 330,
      height: 399,
    } satisfies ImageAsset,
    listA: [
      "We operate the most diverse and easily accessible platform for FMCG (Fast Moving Consumer Goods) and food service businesses",
      "Local customers are looking for your business online",
      "We invest heavily in marketing to ensure your orders keep coming",
      "You’ll be supported by a dedicated support team and a business development team",
    ],
    listB: [
      "Once your business is listed on our platform you’ll be instantly connected to local customers already ordering over the internet",
      "We’ll feature your business on our platform exposing you to millions of customers",
      "We have a strong rider network who care about food as much as you do and will always ensure deliveries are on time.",
    ],
  },

  partners: {
    title: "Our Technology Partners",
    logos: [
      { src: "/images/partners/aws.jpg", alt: "AWS", width: 100, height: 72 },
      { src: "/images/partners/google.jpg", alt: "Google", width: 173, height: 74 },
      { src: "/images/partners/google-apis.jpg", alt: "Google APIs", width: 255, height: 62 },
      { src: "/images/partners/flutterwave.jpg", alt: "Flutterwave", width: 293, height: 66 },
    ] satisfies ImageAsset[],
  },
};
