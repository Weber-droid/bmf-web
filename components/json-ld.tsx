import { site } from "@/content/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}${site.logo.src}`,
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Accra",
      addressCountry: "GH",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: site.contact.email,
      contactType: "customer support",
      areaServed: "GH",
    },
    sameAs: [site.apps.appStore.href, site.apps.googlePlay.href],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
