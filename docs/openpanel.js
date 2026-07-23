// OpenPanel analytics (self-hosted at analytics.connexcs.com)
// Anonymous tracking only — no identify(), no login on this site. Tracks page
// views/referrers (trackScreenViews), clicks on links leaving the site
// (trackOutgoingLinks), and any element tagged data-track="event_name"
// (trackAttributes). None of this ties events to a person or account.
// Only runs on connexcs.com hosts, so localhost/other mirrors don't pollute real analytics.
(function () {
    var host = window.location.hostname;
    var apex = "connexcs.com";
    var isConnexcsHost = host === apex || host.slice(-(apex.length + 1)) === "." + apex;
    if (!host || !isConnexcsHost) return;

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
    s.async = true;
    document.head.appendChild(s);
})();
