import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Crafting for Exiles.",
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <a className="brand" href="/">
        <span className="brand-mark">CfE</span>
        <span>Crafting for Exiles</span>
      </a>
      <p className="eyebrow">Terms of Service</p>
      <h1>Terms of Service</h1>
      <p>Last updated: August 2, 2026</p>

      <h2>Independent Companion App</h2>
      <p>
        Crafting for Exiles is an independent companion app and is not
        affiliated with, endorsed by, sponsored by, or approved by Grinding Gear
        Games. Path of Exile and related names are trademarks of their
        respective owners.
      </p>

      <h2>Simulator Results</h2>
      <p>
        The simulator is informational and may differ from live game behavior.
        Supported mechanics are modeled from generated data references and
        documented behavior checks, while ambiguous or unsupported mechanics may
        be disabled until verified. You are responsible for your own in-game
        crafting decisions.
      </p>

      <h2>In-App Purchases</h2>
      <p>
        Hideout Management is planned as a one-time in-app purchase. Payments,
        refunds, purchase restoration, and related billing matters are handled
        through Apple StoreKit and Apple&apos;s App Store policies.
      </p>

      <h2>Submissions</h2>
      <p>
        Feature requests, support messages, and future community submissions may
        be used to improve the app and website. Do not submit illegal content,
        harassment, spam, misleading impersonation, or copyrighted material you
        do not have rights to share.
      </p>

      <h2>Contact</h2>
      <p>
        Questions can be sent to{" "}
        <a href="mailto:support@craftforexiles.app">support@craftforexiles.app</a>.
      </p>
    </main>
  );
}
