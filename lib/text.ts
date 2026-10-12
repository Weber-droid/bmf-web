export function splitHighlight(text: string, phrase: string) {
  const index = text.indexOf(phrase);
  if (index === -1) return { before: text, match: "", after: "" };
  return {
    before: text.slice(0, index),
    match: phrase,
    after: text.slice(index + phrase.length),
  };
}
