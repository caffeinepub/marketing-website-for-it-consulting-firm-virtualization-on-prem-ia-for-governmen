/**
 * Utility for generating valid deployment domain labels/slugs
 * 
 * Domain label constraints:
 * - 5-50 characters
 * - Only lowercase letters, numbers, and hyphens
 * - No leading/trailing hyphens
 * - No consecutive hyphens
 */

/**
 * Converts arbitrary text into a valid domain label slug
 * @param text - Input text to convert
 * @returns Valid domain label (5-50 chars, lowercase alphanumeric + hyphens)
 */
export function generateSlug(text: string): string {
  // Normalize Unicode hyphen-like characters to ASCII hyphen
  let slug = text
    .replace(/[\u2010-\u2015\u2212\uFE58\uFE63\uFF0D]/g, '-') // Various Unicode hyphens
    .toLowerCase()
    .trim();

  // Replace invalid separators (spaces, parentheses, plus, etc.) with hyphens
  slug = slug.replace(/[\s()+/\\.,;:'"!@#$%^&*=[\]{}|<>?`~]/g, '-');

  // Remove any remaining invalid characters (keep only letters, numbers, hyphens)
  slug = slug.replace(/[^a-z0-9-]/g, '');

  // Collapse consecutive hyphens
  slug = slug.replace(/-+/g, '-');

  // Trim leading/trailing hyphens
  slug = slug.replace(/^-+|-+$/g, '');

  // Enforce length constraints (5-50 characters)
  if (slug.length < 5) {
    // Pad with a deterministic suffix if too short
    slug = slug + '-app';
  }

  if (slug.length > 50) {
    // Truncate intelligently at word boundary (hyphen) if possible
    const truncated = slug.substring(0, 50);
    const lastHyphen = truncated.lastIndexOf('-');
    
    // If we can truncate at a hyphen and still have at least 5 chars, do so
    if (lastHyphen >= 5) {
      slug = truncated.substring(0, lastHyphen);
    } else {
      slug = truncated;
    }
    
    // Remove trailing hyphen if truncation created one
    slug = slug.replace(/-+$/, '');
  }

  // Final safety check - ensure we still meet minimum length
  if (slug.length < 5) {
    slug = 'app-' + slug;
  }

  return slug;
}

/**
 * Validates if a string is a valid domain label
 * @param slug - String to validate
 * @returns true if valid, false otherwise
 */
export function isValidSlug(slug: string): boolean {
  if (!slug || slug.length < 5 || slug.length > 50) {
    return false;
  }

  // Must contain only lowercase letters, numbers, and hyphens
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return false;
  }

  // Must not start or end with hyphen
  if (slug.startsWith('-') || slug.endsWith('-')) {
    return false;
  }

  // Must not contain consecutive hyphens
  if (slug.includes('--')) {
    return false;
  }

  return true;
}
