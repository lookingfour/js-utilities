export interface RemoveStopWordsOptions {
  /**
   * Determine whether to remove consecutive whitespaces due to removal of the
   * stop words.
   *
   * @default true
   */
  stripWhitespace?: undefined | boolean;
}

/**
 * Generate the pattern that will be used for building the RegExp for stop
 * words.
 *
 * @param words The list of stop words to use
 */
export function generateStopWordPattern(words: string[]): string {
  return `\\b(${words.join("|")})\\b`;
}

/**
 * Generates the stop word RegExp from the given word list.
 *
 * @param words The list of stop words to use
 */
export function generateStopWordRegExp(words: string[]): RegExp {
  return new RegExp(generateStopWordPattern(words), "gi");
}

/**
 * Removes stop words from the given text.
 *
 * @param text The text where to remove stop words from
 * @param stopWords The list of stop words to remove
 * @param options Additional options to use before or after removal
 */
export function removeStopWords(
  text: string,
  stopWords: string[],
  options: RemoveStopWordsOptions = {}
): string {
  const { stripWhitespace = true } = options;

  const processedText = text.replace(generateStopWordRegExp(stopWords), "");

  return stripWhitespace
    ? processedText.trim().replace(/\s\s+/, " ")
    : processedText;
}
