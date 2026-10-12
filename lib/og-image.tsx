import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import { home } from "@/content/home";
import { site } from "@/content/site";
import { ogSize } from "@/lib/og-image-meta";

export { ogAlt, ogSize } from "@/lib/og-image-meta";

export async function renderOgImage() {
  const [logo, dish] = await Promise.all([
    readFile(join(process.cwd(), "public", site.logo.src)),
    readFile(join(process.cwd(), "public", home.hero.image.src)),
  ]);
  const toSrc = (buf: Buffer) => `data:image/png;base64,${buf.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#fff7ec",
        position: "relative",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -120,
          top: -80,
          width: 720,
          height: 720,
          borderRadius: 9999,
          background: "#ffb020",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          width: 700,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={toSrc(logo)} width={120} height={114} alt="" />
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: -2,
            color: "#14122b",
          }}
        >
          {home.hero.title}
        </div>
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            background: "#c93a1f",
            color: "white",
            fontSize: 26,
            fontWeight: 700,
            padding: "14px 28px",
            borderRadius: 999,
          }}
        >
          {home.marquee.join(" • ")}
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={toSrc(dish)}
        width={560}
        height={467}
        alt=""
        style={{ position: "absolute", right: 20, top: 90 }}
      />
    </div>,
    ogSize,
  );
}
