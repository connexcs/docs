// Crisp bootstrap (load once)
(function crispBootstrap() {
    if (window.__CRISP_BOOTSTRAPPED__) return;
    window.__CRISP_BOOTSTRAPPED__ = true;

    window.$crisp = window.$crisp || [];
    window.CRISP_WEBSITE_ID = "fdc64bee-6a11-43fc-b928-6829623c9eaa";

    var d = document;
    var s = d.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
})();

// Utilities to capture and re-apply Crisp assets across SPA navigations
const CRISP_ASSET_KEY = "crisp:assetHrefs";
const CRISP_SCRIPT_KEY = "crisp:scriptSrc";
const CRISP_ASSET_META_KEY = CRISP_ASSET_KEY + ":meta";

// Clear only Crisp's session cache on hard refresh (not on normal SPA nav)
(function clearCrispCacheOnReload() {
    try {
        const navEntries = performance.getEntriesByType && performance.getEntriesByType('navigation');
        const nav = navEntries && navEntries[0];
        const reloaded = nav ? (nav.type === 'reload') : (performance.navigation && performance.navigation.type === 1);
        if (reloaded) {
            sessionStorage.removeItem(CRISP_ASSET_KEY);
            sessionStorage.removeItem(CRISP_ASSET_META_KEY);
            sessionStorage.removeItem(CRISP_SCRIPT_KEY);
        }
    } catch (e) { /* ignore */ }
})();

function collectCrispAssets() {
    try {
        // Collect all Crisp-related <link> elements in <head>
        const linkEls = Array.from(document.head.querySelectorAll('link[href*="crisp"]'));
        const hrefs = [];
        const meta = [];

        linkEls.forEach(l => {
            if (!l.href) return;
            hrefs.push(l.href);
            meta.push({
                href: l.href,
                rel: l.rel || "",
                as: l.as || "",
                type: l.type || "",
                media: l.media || "",
                crossOrigin: l.crossOrigin || "",
                referrerPolicy: l.referrerPolicy || "",
                integrity: l.integrity || ""
            });
        });

        if (hrefs.length) sessionStorage.setItem(CRISP_ASSET_KEY, JSON.stringify(Array.from(new Set(hrefs))));
        if (meta.length) sessionStorage.setItem(CRISP_ASSET_META_KEY, JSON.stringify(meta));

        // Persist the client script src if present
        const script = document.querySelector('script[src*="client.crisp"]');
        if (script && script.src) sessionStorage.setItem(CRISP_SCRIPT_KEY, script.src);
    } catch (e) { /* ignore */ }
}

// Re-apply captured Crisp assets into the current document
function ensureCrispAssets() {
    try {
        const raw = sessionStorage.getItem(CRISP_ASSET_KEY);
        if (!raw) return;

        const metaRaw = sessionStorage.getItem(CRISP_ASSET_META_KEY);
        const meta = metaRaw ? JSON.parse(metaRaw) : [];

        const hrefs = JSON.parse(raw);
        hrefs.forEach(href => {
            if (document.querySelector(`link[href="${href}"]`)) return;

            const m = meta.find(x => x.href === href) || { href, rel: "stylesheet" };
            const l = document.createElement('link');
            l.href = m.href;
            if (m.rel) l.rel = m.rel;
            if (m.as) l.as = m.as;
            if (m.type) l.type = m.type;
            if (m.media) l.media = m.media;
            if (m.crossOrigin) l.crossOrigin = m.crossOrigin;
            if (m.referrerPolicy) l.referrerPolicy = m.referrerPolicy;
            if (m.integrity) l.integrity = m.integrity;

            document.head.appendChild(l);
        });
    } catch (e) { /* ignore */ }
}

// Ensure the Crisp client script is present (handles SPA reloads)
function ensureCrispClient() {
    const chatbox = document.querySelector('#crisp-chatbox');
    const hasClient = !!window.$crisp;
    if (chatbox && hasClient) return;

    if (window.__CRISP_RELOADING__) return;
    window.__CRISP_RELOADING__ = true;

    const src = sessionStorage.getItem(CRISP_SCRIPT_KEY) || "https://client.crisp.chat/l.js";
    const existing = document.querySelector(`script[src*="client.crisp"]`);
    if (!existing) {
        const s = document.createElement('script');
        s.src = src;
        s.async = 1;
        s.onload = () => { window.__CRISP_RELOADING__ = false; };
        s.onerror = () => { window.__CRISP_RELOADING__ = false; };
        document.head.appendChild(s);
    } else {
        window.__CRISP_RELOADING__ = false;
    }
}

// Initial capture after first load (keep your original behavior)
window.addEventListener('load', () => {
    setTimeout(collectCrispAssets, 1500);
});

// Support MkDocs Material instant navigation (keep your original behavior)
if (typeof window.document$ !== 'undefined') {
    window.document$.subscribe(() => {
        ensureCrispAssets();
        ensureCrispClient();
        setTimeout(collectCrispAssets, 1500);
    });
}

// Also run once on initial DOM ready (non-SPA)
document.addEventListener('DOMContentLoaded', () => {
    ensureCrispAssets();
    ensureCrispClient();
});

// Snapshot *right before* the tab switches or page goes to bfcache (fixes missed-late-assets case)
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        try { collectCrispAssets(); } catch (_) { }
    }
}, { passive: true });

window.addEventListener('pagehide', () => {
    try { collectCrispAssets(); } catch (_) { }
}, { passive: true });
