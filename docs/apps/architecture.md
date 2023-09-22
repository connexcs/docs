# Introduction

Primary WebServer is stateless (including sessions). Deployed Globally and serves via Anycast on Edge Nodes.

Sessions are managed by encrypted cookies.

Bank-end links to ScriptForge:
    * Database
    * KV Access
    * Jobs
    * ConnexCS Introspection API
    * Pub-Sub
    * Call Origination / Class 5 Features

Assests is served via a global CDN.
Version Locking (Repeatable Delivery) OR Continous Integration (Latest Features and Patches Worry Free)

function main(_, ws) {
	const ws = this.scriptForge('myScriptForge')
	const {publish, subscribe} = require('cxPubSub');
	subscribe('chat', data => ws.send(data))
	wc.on('data', data => publish('chat', data))
}

It's a Server Side Chat Application.

## Platform Features

Drag & Drop Admin Interface Builder, using the following components.

1. Alert
2. Button
3. Card
4. Cascader
5. Chart
6. Checkbox
7. Collapse
8. Color
9. Component
10. Custom
11. Data Grid
12. Date
13. Dialog
14. Divider
15. Editor
16. File
17. Grid
18. Group
19. HTML
20. I-Frame
21. Image
22. Inline
23. Input
24. Link
25. Number
26. Page Layout
27. Pagination
28. Portal
29. Radio
30. Rate
31. Select
32. Slider
33. Sub-Form
34. Switch
35. Table
36. Tabs
37. Text
38. Textures
39. Time
40. Transfer
41. Tree-Select
42. Use Case
43. Webphone
