import {
  Bike,
  CalendarClock,
  Headset,
  Heart,
  Megaphone,
  ReceiptText,
  Store,
  TabletSmartphone,
  UtensilsCrossed,
  Wallet,
  type LucideProps,
} from "lucide-react";

import type { IconName } from "@/content/types";

const icons = {
  megaphone: Megaphone,
  tablet: TabletSmartphone,
  bike: Bike,
  headset: Headset,
  wallet: Wallet,
  calendar: CalendarClock,
  receipt: ReceiptText,
  utensils: UtensilsCrossed,
  store: Store,
  heart: Heart,
} satisfies Record<IconName, React.ComponentType<LucideProps>>;

/** Resolves an icon name from the content files to a lucide-react icon. */
export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = icons[name];
  return <Component aria-hidden {...props} />;
}
