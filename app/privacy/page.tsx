import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy information for Crafting for Exiles.",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <a className="brand" href="/">
        <span className="brand-mark">CfE</span>
        <span>Crafting for Exiles</span>
      </a>
      <p className="eyebrow">Privacy Policy</p>
      <h1>Privacy Policy</h1>
      <p>Last updated: August 2, 2026</p>

      <h2>App Data</h2>
      <p>
        Crafting for Exiles does not require an account. Crafting sessions,
        recent crafts, creator export settings, audio and haptic preferences,
        training progress, Hideout progress, Tinks, supplies, and upgrades are
        stored locally on your device unless you choose to share or export them.
      </p>

      <h2>Purchases</h2>
      <p>
        In-app purchases are processed by Apple StoreKit. Crafting for Exiles
        does not receive your full payment card details from Apple.
      </p>

      <h2>Website Contact</h2>
      <p>
        If you email support or send a feature request, the message may include
        whatever you choose to provide, such as your email address, contact
        handle, request details, screenshots, import codes, or technical notes.
        That information is used to respond to support needs and improve the
        app.
      </p>

      <h2>Data Sharing</h2>
      <p>
        Crafting data is shared only when you use an export, import code, native
        share sheet, PNG export, or support email. Do not include private
        information in craft names, notes, screenshots, or requests if you do
        not want it shared.
      </p>

      <h2>Contact</h2>
      <p>
        Questions can be sent to{" "}
        <a href="mailto:support@craftforexiles.app">support@craftforexiles.app</a>.
      </p>
    </main>
  );
}
