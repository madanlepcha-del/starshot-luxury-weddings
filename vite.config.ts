// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
    // Prerender every page to static HTML at build time so the site can be deployed
    // as a static SPA (e.g. Cloudflare Pages) — no server runtime needed.
    prerender: {
      enabled: true,
      crawlLinks: true,
      pages: [
        { path: "/" },
        { path: "/about" },
        { path: "/gallery" },
        { path: "/contact" },
      ],
    },
    pages: [
      { path: "/" },
      { path: "/about" },
      { path: "/gallery" },
      { path: "/contact" },
    ],
  },
});
