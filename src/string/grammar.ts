/**
 * Pluralize the given base word if the count is not equal to 1.
 *
 * @param baseWord The singular form of the word
 * @param count The count used as reference
 * @param pluralForm The plural form to use, if omitted, will just add `s` to
 *   the end of the `baseWord`
 * @returns The plural form if count is not equal to 1, otherwise the base word
 */
export function pluralizeWord(
  baseWord: string,
  count = 2,
  pluralForm = `${baseWord}s`
): string {
  return count === 1 ? baseWord : pluralForm;
}

/**
 * Determine whether to use "an" or "a" based on the given word.
 *
 * @param word The word to check
 * @returns An if starts with vowel, otherwise "a"
 */
export function anOrA(word: string): "an" | "a" {
  return ["a", "e", "i", "o", "u"].includes(word.charAt(0).toLowerCase())
    ? "an"
    : "a";
}
