!!! warning
    *Documentation coming soon...!!!!*

```js
    function main(_, ws) {
	const ws = this.scriptForge('myScriptForge')
	const {publish, subscribe} = require('cxPubSub');
	subscribe('chat', data => ws.send(data))
	wc.on('data', data => publish('chat', data))
}
```

The above code is for the **Server Side Chat Application**. 