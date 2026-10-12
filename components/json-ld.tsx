import { site } from "@/content/site";

/** Organization structured data for search engines. */
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
      // JSON.stringify output is safe here: all values are static strings we control.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
