# Table of Contents

- [Table of Contents](#table-of-contents)
- [DNC](#dnc)
  - [ScriptForge](#scriptforge) 

# DNC

In today's society, especially when dialling the UK, it is important that you recognise the **Do Not Call Lists (DNC).** Calling numbers on these lists can result in costly fines and prosecutions. To help you to manage these calls we have created a feature where the numbers can be added to the system and should they be called the caller will receive a message to alert them to the fact that the number is on the DNC list. 
 
To set this up please follow the instructions below.

1. Click on Setup> Advanced> **User Space Database**

![alt text][dnc-1]

2. Click + > name the data store

![alt text][dnc-2]

3. Select Customer
4. Select Dataset Type, in this case select Key / Value Store
5. Click Save

![alt text][dnc-3]

## ScriptForge

1) Go to Developer> **ScriptForge**

![alt text][dnc-4]

2) Add the Script Name
3) Select the Type> App
4) Enter the below javascript code

```
const userspace = require('cxUserspace');

function main(data) {
    api.rest.auth("api@yourdomain.com").post('setup/userspace/userspacedataname/', {
            key: vars["Caller-Caller-ID-Number"],
            value: +new Date()
        })
        .then(() => {
            data.routing.headers = [{
                key: "x-tts",
                value: "Thank you, you have been added to our D N C list you won't be called by us again."
            }];
            return data;
        }).catch(err => {
            return Promise.reject([500, err]);
        });
}
```

5. Click Save & Run





[dnc-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/dnc-1.png "DNC-1"
[dnc-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/dnc-2.png "DNC-2"
[dnc-3]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/dnc-3.png "DNC-3"
[dnc-4]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/dnc-4.png "DNC-4"
[dnc-5]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/dnc-5.png "DNC-5"
[dnc-6]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/dnc-6.png "DNC-6"







