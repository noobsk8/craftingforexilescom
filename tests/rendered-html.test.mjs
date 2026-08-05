import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function readExported(path) {
  return readFile(new URL(path, projectRoot), "utf8");
}

test("exports the Crafting for Exiles landing page", async () => {
  const html = await readExported("out/index.html");

  assert.match(html, /<title>Crafting for Exiles<\/title>/i);
  assert.match(html, /Craft smarter before you spend your currency\./);
  assert.match(html, /The free bench for planning risky crafts\./);
  assert.match(html, /Run the shop after training\./);
  assert.match(html, /Help shape the next bench\./);
  assert.match(html, /not affiliated with or endorsed by Grinding Gear Games/i);
  assert.match(html, /property="og:image" content="https:\/\/craftforexiles\.app\/og\.png"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("exports support and legal pages", async () => {
  const pages = [
    ["out/support/index.html", /Need help with the bench\?/],
    ["out/privacy/index.html", /Privacy Policy/],
    ["out/TOS/index.html", /Terms of Service/],
  ];

  for (const [path, expected] of pages) {
    const html = await readExported(path);
    assert.match(html, expected);
    assert.match(html, /support@rudeus\.io/);
  }
});

test("exports the custom domain and public assets", async () => {
  const cname = await readExported("out/CNAME");

  assert.equal(cname.trim(), "craftforexiles.app");
  await access(new URL("out/og.png", projectRoot));
  await access(new URL("out/favicon.svg", projectRoot));
});

test("removes starter and Cloudflare-only assets", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview|_sites-preview/);
  assert.doesNotMatch(packageJson, /vinext|wrangler|@cloudflare\/vite-plugin/);

  await assert.rejects(access(new URL("app/_sites-preview/SkeletonPreview.tsx", projectRoot)));
  await assert.rejects(access(new URL("worker/index.ts", projectRoot)));
  await assert.rejects(access(new URL("vite.config.ts", projectRoot)));
});
