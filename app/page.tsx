const simulatorFeatures = [
  "Test currency, Essence, Omen, Desecration, Catalyst, and socket actions.",
  "Inspect legal modifier pools, affix slots, and item-level restrictions.",
  "Star exact modifier tiers and see target hits on the item card.",
  "Undo, redo, reset, and review full action history.",
  "Export summaries, copy import codes, and follow shared craft plans.",
];

const hideoutFeatures = [
  "Repeatable customer contracts",
  "Tinks wallet and supply pressure",
  "Supply Shop and Upgrade Shop",
  "Runner, weapon, and ward paths",
  "Market Trends and bonus payouts",
];

const requests = [
  "More item categories",
  "More Vaal and Divine outcomes",
  "Saved craft library",
  "Hosted craft pages",
  "Creator profiles",
  "More Hideout contract families",
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Crafting for Exiles home">
            <span className="brand-mark">CfE</span>
            <span>Crafting for Exiles</span>
          </a>
          <div className="nav-links">
            <a href="#simulator">Simulator</a>
            <a href="#hideout">Hideout</a>
            <a href="#requests">Requests</a>
            <a href="/support">Support</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">PoE2-style crafting simulator for iOS</p>
            <h1>Craft smarter before you spend your currency.</h1>
            <p className="hero-text">
              Crafting for Exiles gives you a free simulator, guided training,
              target tracking, import/export, and an optional Hideout Management
              unlock for shop contracts, Tinks, upgrades, and creator-branded
              sharing.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#app-store" aria-label="Download on the App Store coming soon">
                Download on the App Store
              </a>
              <a className="button secondary" href="#requests">
                Request a Feature
              </a>
            </div>
            <div className="status-row" aria-label="Product highlights">
              <span>Free simulator</span>
              <span>11 training stages</span>
              <span>One-time Hideout unlock</span>
            </div>
          </div>

          <div className="phone-wrap" aria-label="Crafting simulator preview">
            <div className="phone">
              <div className="phone-top">
                <span>Item Preview</span>
                <span className="tiny-button">•••</span>
              </div>
              <div className="item-card">
                <p className="item-name">Dread Tread</p>
                <p className="item-base">Expert Strider Boots · Item Level 82</p>
                <div className="divider" />
                <div className="mod-section">
                  <div className="mod-header"><span>Prefixes</span><span>2/3</span></div>
                  <p><b>+89</b> to maximum Life <span>T1</span></p>
                  <p><b>18%</b> increased Movement Speed <span>T3</span></p>
                </div>
                <div className="mod-section">
                  <div className="mod-header"><span>Suffixes</span><span>3/3</span></div>
                  <p><b>+42%</b> to Fire Resistance <span>T2</span></p>
                  <p><b>+38%</b> to Cold Resistance <span>T2</span></p>
                  <p><b>+35%</b> to Lightning Resistance <span>T3</span></p>
                </div>
              </div>
              <div className="target-panel">
                <span>Target Hits</span>
                <strong>5/6</strong>
                <small>Keep, then decide if the Exalt is worth it.</small>
              </div>
              <div className="history">
                <p>Recent Craft History</p>
                <ol>
                  <li>Regal Orb added Fire Resistance</li>
                  <li>Exalted Orb added Movement Speed</li>
                  <li>Omen consumed on suffix attempt</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section split" id="simulator">
        <div>
          <p className="eyebrow">Free Simulator</p>
          <h2>The free bench for planning risky crafts.</h2>
          <p>
            Create new crafts from generated item bases, test supported
            PoE2-style actions, and learn why an action is blocked before you
            commit resources in game.
          </p>
        </div>
        <div className="feature-list">
          {simulatorFeatures.map((feature) => (
            <article className="feature" key={feature}>
              <span aria-hidden="true">✦</span>
              <p>{feature}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="section training">
          <div>
            <p className="eyebrow">Guided Training</p>
            <h2>Learn the decisions that matter.</h2>
            <p>
              Hibara&apos;s 11-stage training board turns crafting rules into
              small lessons: what can roll, what can block you, when to push,
              and when to restart.
            </p>
          </div>
          <div className="training-grid" aria-label="Training topics">
            {["Open slots", "Resistance suffixes", "Movement tiers", "Omen control", "Desecration flow", "Annulment risk", "Fracturing odds", "Essence setup"].map((topic) => (
              <span key={topic}>{topic}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section split reverse" id="hideout">
        <div className="shop-panel">
          <div className="panel-head">
            <span>Hideout Management</span>
            <strong>One-time unlock</strong>
          </div>
          <div className="wallet">
            <span>Tinks Wallet</span>
            <strong>1,840</strong>
          </div>
          {hideoutFeatures.map((feature) => (
            <div className="shop-row" key={feature}>
              <span>{feature}</span>
              <span>Ready</span>
            </div>
          ))}
        </div>
        <div>
          <p className="eyebrow">Paid Upgrade</p>
          <h2>Run the shop after training.</h2>
          <p>
            Hideout Management turns the simulator into a progression loop.
            Accept contracts, spend limited supplies, deliver useful items, earn
            Tinks, and upgrade the kind of work your shop does best.
          </p>
        </div>
      </section>

      <section className="section share">
        <div>
          <p className="eyebrow">Sharing and Creator Tools</p>
          <h2>Share crafts people can actually follow.</h2>
        </div>
        <p>
          Export a craft summary, copy an import code, or render a tall PNG for
          social posts. Creators who unlock Hideout Management can add a name,
          short line, and locally stored logo to exported craft images.
        </p>
      </section>

      <section className="section accuracy">
        <div>
          <p className="eyebrow">Data and Accuracy</p>
          <h2>Built carefully, with unsupported mechanics kept honest.</h2>
        </div>
        <p>
          The simulator uses generated data and documented behavior checks for
          item bases, modifier pools, crafting rules, and supported
          interactions. When a mechanic is ambiguous or not modeled yet, the app
          disables it with a reason instead of guessing. Community-estimated
          weights may differ from live outcomes.
        </p>
      </section>

      <section className="section requests" id="requests">
        <div>
          <p className="eyebrow">Feature Requests</p>
          <h2>Help shape the next bench.</h2>
          <p>
            Want a mechanic, base type, export layout, or Hideout contract added
            next? Send details, screenshots, item examples, or source links.
          </p>
          <a className="button primary" href="mailto:support@rudeus.io?subject=Crafting%20for%20Exiles%20Feature%20Request">
            Send a Request
          </a>
        </div>
        <div className="request-tags">
          {requests.map((request) => (
            <span key={request}>{request}</span>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark">CfE</span>
            <span>Crafting for Exiles</span>
          </a>
          <p>
            Crafting for Exiles is an independent companion app and is not
            affiliated with or endorsed by Grinding Gear Games. Path of Exile
            and related names are trademarks of their respective owners.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#app-store">App Store</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/TOS">Terms of Service</a>
          <a href="/support">Support</a>
          <a href="#requests">Feature Requests</a>
        </nav>
      </footer>
    </main>
  );
}
