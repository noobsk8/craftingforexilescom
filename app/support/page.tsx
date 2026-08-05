import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Crafting for Exiles.",
};

export default function SupportPage() {
  return (
    <main className="legal-page">
      <a className="brand" href="/">
        <span className="brand-mark">CfE</span>
        <span>Crafting for Exiles</span>
      </a>
      <p className="eyebrow">Support</p>
      <h1>Need help with the bench?</h1>
      <p>
        Send a note with your app version, device model, iOS version, and a
        short description of what happened. Screenshots, import codes, and the
        crafting action you were trying to use are especially helpful.
      </p>
      <div className="legal-actions">
        <a className="button primary" href="mailto:support@rudeus.io?subject=Crafting%20for%20Exiles%20Support">
          Email Support
        </a>
        <a className="button secondary" href="/#requests">
          Request a Feature
        </a>
      </div>

      <h2>Common Issues</h2>
      <ul>
        <li>Restore purchases if Hideout Management does not appear after buying.</li>
        <li>Check that an import code was copied completely if it fails to decode.</li>
        <li>Review the blocked-action explanation when a craft cannot be applied.</li>
        <li>Confirm audio and haptic settings if feedback feels different than expected.</li>
      </ul>

      <h2>Independent Companion App</h2>
      <p>
        Crafting for Exiles is not affiliated with, endorsed by, sponsored by,
        or approved by Grinding Gear Games. Path of Exile and related names are
        trademarks of their respective owners.
      </p>
    </main>
  );
}
