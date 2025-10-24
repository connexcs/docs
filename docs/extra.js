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

// Clear only Crisp's session cache on hard refresh (not on normal SPA nav)
(function clearCrispCacheOnReload(){
    try {
        const navEntries = performance.getEntriesByType && performance.getEntriesByType('navigation');
        const nav = navEntries && navEntries[0];
        const reloaded = nav ? (nav.type === 'reload') : (performance.navigation && performance.navigation.type === 1);
        if (reloaded) {
            sessionStorage.removeItem(CRISP_ASSET_KEY);
            sessionStorage.removeItem(CRISP_SCRIPT_KEY);
        }
    } catch (e) { /* ignore */ }
})();

function collectCrispAssets() {
    const links = Array.from(document.querySelectorAll('link[href*="crisp"]'))
        .map(l => l.href)
        .filter(Boolean);

    const script = document.querySelector('script[src*="client.crisp"]');
    if (script && script.src) sessionStorage.setItem(CRISP_SCRIPT_KEY, script.src);

    const uniqueLinks = Array.from(new Set(links));
    if (uniqueLinks.length) sessionStorage.setItem(CRISP_ASSET_KEY, JSON.stringify(uniqueLinks));
}

function ensureCrispAssets() {
    try {
        const raw = sessionStorage.getItem(CRISP_ASSET_KEY);
        if (!raw) return;
        const hrefs = JSON.parse(raw);
        hrefs.forEach(href => {
            if (!document.querySelector(`link[href="${href}"]`)) {
                const l = document.createElement('link');
                l.rel = 'stylesheet';
                l.href = href;
                document.head.appendChild(l);
            }
        });
    } catch (e) { }
}

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

// Initial capture after first load
window.addEventListener('load', () => {
    setTimeout(collectCrispAssets, 1000);
});

// Support MkDocs Material instant navigation
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
