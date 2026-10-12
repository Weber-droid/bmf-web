"use client";

import { useEffect, useState } from "react";

export function CurrentYear({ initial }: { initial: number }) {
  const [year, setYear] = useState(initial);
  // pages are static, so refresh the year on the client
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <>{year}</>;
}
