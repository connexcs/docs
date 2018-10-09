# Table of Contents

- [Table of Contents](#table-of-contents)
- [DNC](#dnc)
  - [ScriptForge](#scriptforge) 

# DNC

In today's society, especially when dialling the UK, it is important that you recognise the **Do Not Call Lists (DNC).** Calling numbers on these lists can result in costly fines and prosecutions. To help you to manage these calls we have created a feature where the numbers can be added to the system and should they be called the caller will receive a message to alert them to the fact that the number is on the DNC list. 
 
To set this up please follow the instructions below.

1. Click on Setup> Advanced> **User Space Database**
2. Click + > name the data store
3. Select Customer
4. Select Dataset Type, in this case select Key / Value Store
5. Click Save

## ScriptForge

1) Go to Development> **ScriptForge**
2) Add the Script Name
3) Select the Type> App
4) Enter the below javascript code

```
const userspace = require('cxUserspace');

function main(data){
  return userspace.create('userspacedataname', data["Caller-Caller-ID-Number"].replace('+', '').replace(/^0/, '44'), + new Date())
  .then(() => {
	if (!data.routing) data.routing = {};
  	return [{key: "x-tts", value: "Thank you, you have been added to our D N C list you won't be called by us again."}];
  }).catch(err => {
	  console.error(err)
	return Promise.reject([500, err]);
  });
}
```

5. Click Save & Run




