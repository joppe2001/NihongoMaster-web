/** Central config for download / install links. Edit these as things ship. */

export const DOWNLOADS = {
  /** Live on the App Store. */
  ios: "https://apps.apple.com/us/app/nihonmaster/id6761620677",

  /** Live on Google Play. */
  android: "https://play.google.com/store/apps/details?id=com.nihongomaster.app",

  /**
   * Legacy: kept for backwards compatibility in case the AndroidWaitlistModal
   * is reintroduced for a future closed test. Currently unused since Android
   * is live on Google Play.
   */
  androidWaitlistForm: "https://forms.gle/aerFXqdm1NyFsm287",

  /** Email used for the mailto fallback in HonestNote when contactForm is empty. */
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
