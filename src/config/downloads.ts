/** Central config for download / install links. Edit these as things ship. */

export const DOWNLOADS = {
  /** Live on the App Store. */
  ios: "https://apps.apple.com/us/app/nihonmaster/id6761620677",

  /**
   * Android closed testing waitlist.
   *
   * Recommended: create a Google Form that collects email + why-you-want-in,
   * then paste its public link here. You can also use Tally.so or Typeform —
   * anything that gives you a single URL.
   *
   * Fallback: a mailto link. Leave this value empty string if you prefer
   * the mailto fallback handled in the modal.
   */
  androidWaitlistForm: "https://forms.gle/aerFXqdm1NyFsm287", // e.g. 'https://forms.gle/XXXXXXXXXX'

  /** Email used for the mailto fallback (only used if androidWaitlistForm is empty). */
  androidWaitlistEmail: "joppe.montezinos@gmail.com",

  /**
   * GitHub releases. The "latest" URL always resolves to the newest release.
   * We never hardcode a version — the build that matches the user's OS is
   * pulled from assets on whichever release is marked "latest".
   */
  githubOwner: "joppe2001",
  githubRepo: "NihongoMaster",

  /**
   * Contact form. Same pattern as the Android waitlist — paste a Google
   * Form link here and the Contact footer link routes there. Leave empty
   * to fall back to a mailto link using androidWaitlistEmail.
   */
  contactForm: "",
} as const;

export function githubReleasesBase(): string {
  return `https://github.com/${DOWNLOADS.githubOwner}/${DOWNLOADS.githubRepo}/releases`;
}

/** Page that lists all assets for the latest release. Safe universal fallback. */
export function githubLatestPage(): string {
  return `${githubReleasesBase()}/latest`;
}
