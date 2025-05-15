import { removeStopWords } from "./stopWord.js";

interface SlugifyOptions {
  /**
   * The separator to use.
   *
   * @default "-"
   */
  separator?: "-" | "_";
  /**
   * The list of stop words to remove if given.
   *
   * @default undefined
   */
  stopWords?: undefined | string[];
  /**
   * How do we transform the result. Use `null` if do not do anything.
   *
   * @default "lower"
   */
  transform?: undefined | null | "lower" | "upper";
}

export function slugify(text: string, options: SlugifyOptions = {}): string {
  const {
    separator = "-",
    stopWords = undefined,
    transform = "lower",
  } = options;

  // Convert all dashes/underscores into separator
  const flip = separator === "-" ? "_" : "-";

  text = (
    stopWords
      ? removeStopWords(text, stopWords, { stripWhitespace: true })
      : text
  ).replace(flip, separator);

  switch (transform) {
    case "lower":
      text = text.toLowerCase();
      break;
    case "upper":
      text = text.toUpperCase();
      break;
  }

  text = text.replace(new RegExp("[^a-z0-9" + separator + "\\s]", "g"), "");

  // Replace all separator characters and whitespace by a single separator
  text = text.replace(new RegExp("[" + separator + "\\s]+", "g"), separator);

  return text.replace(
    new RegExp("^[" + separator + "\\s]+|[" + separator + "\\s]+$", "g"),
    ""
  );
}
