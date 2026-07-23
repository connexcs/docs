// OpenPanel analytics (self-hosted at analytics.connexcs.com)
// Anonymous page-view/referrer tracking only — no identify(), no login on this site.
// Skipped on localhost so local `mkdocs serve` testing doesn't pollute real analytics.
(function () {
    var host = window.location.hostname;
    if (!host || host === "localhost" || host === "127.0.0.1") return;

    window.op = window.op || function () { var n = []; return new Proxy(function () { arguments.length && n.push([].slice.call(arguments)) }, { get: function (t, r) { return "q" === r ? n : function () { n.push([r].concat([].slice.call(arguments))) } }, has: function (t, r) { return "q" === r } }) }();
    window.op('init', {
        clientId: 'decff133-8f28-4c04-badc-400d06c2a8d9',
        apiUrl: 'https://analytics.connexcs.com/api',
        trackScreenViews: true,
        trackOutgoingLinks: true,
        trackAttributes: true
    });

    var s = document.createElement('script');
    s.src = 'https://analytics.connexcs.com/op1.js';
    s.defer = true;
    s.async = true;
    document.head.appendChild(s);
})();
