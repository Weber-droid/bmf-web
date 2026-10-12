"use client";

import { useEffect, useState } from "react";

/**
 * Pages are statically generated, so the server-rendered year is the build year.
 * This re-reads the visitor's clock after hydration so it never goes stale.
 */
export function CurrentYear({ initial }: { initial: number }) {
  const [year, setYear] = useState(initial);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <>{year}</>;
}
