export type LegalInline = string | { strong: string };

export type LegalBlock =
  | { type: "h2" | "h3"; id: string; text: string }
  | { type: "p"; content: LegalInline[] }
  | { type: "ul" | "ol"; items: LegalInline[][] };

export type LegalDocument = {
  title: string;
  blocks: LegalBlock[];
};
