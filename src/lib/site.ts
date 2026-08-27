// Canonical origin for the deployed site. Every consumer that needs an
// ABSOLUTE url — JSON-LD (`image`, `url`, `sameAs`), a page's canonical
// <link>, an OpenGraph/Twitter image reference, and every entry in
// sitemap.ts — resolves through this one constant so there's a single
// place to repoint if the domain ever changes.
//
// Deliberately separate from `SHARE_URL` in src/lib/share.ts: that constant
// is a bare domain (no protocol) meant to read well pasted into a social
// post, not a URL meant to be fetched or embedded in structured data.
export const SITE_URL = 'https://architectle.carlosrodriguezpardo.es';
