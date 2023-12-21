# ConneXML

**Class 5 :material-menu-right: ConneXML**

## Introduction

### What's ConneXML?

ConneXML is a set of instructions you can use to tell Class 5 Applications what to do when you receive an incoming call.

When the customers receive an External or Internal Call, it hits the [DID](https://docs.connexcs.com/customer/did/) section.

<<<<<<< HEAD
In the DID section you can allocate the calls at different places. Click on Call :material-menu-right: Destination:
=======
In the DID section you can allocate the calls at different places. Click on DID (on the left) :material-menu-right: Destination:
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e

1.**URI**: Its points to a client's server. You can send the call either to the Destination DID or an IP address.

<img src= "/class5/img/ml2.png"  width="400">

<<<<<<< HEAD
2.**External**: Allows you to re-direct the call out back again to the network.

<img src= "/class5/img/ml3.png" width="400">

3.**Internal**: Allows you to route the call internally like a SIP user or a Queue.

<img src= "/class5/img/ml4.png" width="400">

Later, the Class5 Applications makes an HTTP request to the URL endpoint you configured for that number. The endpoint will contain instructions telling ConnexML what to do next with the call.

### How does ConneXML work?

In a general call scenario, the call goes from the Carrier to ConnexCS Class4 to the Customer.

In this case, the call goes from Carrier to ConnexCS Class4 to ConnexCS Class5.

The Class5 initially doesn't pass the call to the Customer.

The call gets terminated here and instead Class4 sends a request to the Routing Engine via HTTP and then the HTTP replies back to the Class4 system.

Class4 passes the call to Class5. Then Class5 asks the Routing Engine how to handle the call.

Further, the Routing Engine questions the same thing to the Customer on how to handle the call. The Customer can ask to collect some information or play a music or something else via a an HTTP Request. The same request is sent to the Class5 from the Routing Engine. The Class5 then replies to the requests of the customer.

ConneXML uses the standard `.xml` file extension.

.<img src= "/class5/img/ml1.png">
=======
2.**Internal**: Allows you to route the call internally like a SIP user or a Queue.

<img src= "/class5/img/ml4.png" width="400">

Later, the Class 5 Applications makes an HTTP request to the URL endpoint you configured for that number. The endpoint will contain instructions telling ConneXML what to do next with the call.

### How does ConneXML work?

In a general call scenario, the call goes from the Carrier to ConnexCS Class 4 to the Customer.

Now let's understand how ConneXML can control calls.

In this case, the call goes from Carrier to ConnexCS Class 4 to ConnexCS Class 5.

The Class 5 initially doesn't pass the call to the Customer.

The call gets terminated here and instead Class 4 sends a request to the Routing Engine via HTTP and then the HTTP replies back to the Class 4 system.

Class 4 passes the call to Class 5. Then Class 5 asks the Routing Engine how to handle the call.

Further, the Routing Engine questions the same thing to the Customer on how to handle the call. The Customer can ask to collect some information or play a music or something else via a an HTTP Request. The same request is sent to the Class 5 from the Routing Engine. The Class 5 then replies to the requests of the customer.

Another scenario might be when the Routing Engine might talk to the ConnexCS Applications like `ScriptForge`, `ConneXML`, `Call Flow Builder`.
In case it hits the `ConneXML` application, `ConneXML` can as to direct it (Routing Engine) to a 3<sup>rd</sup> party customer and that customer can access the 3<sup>rd</sup> party data hit back to `ConneXML`, then the Routing Engine followed by Class 5 Application and lastly the Customer.

ConneXML uses the standard [`.xml` markup](https://en.wikipedia.org/wiki/XML) language.

.<img src= "/class5/img/ml11.png">

### How to reach and code the ConneXML Editor?

To get ConneXML working you will need to:

1. Go to Class 5 :material-menu-right: Apps.
2. On the top right click on blue `+` sign.
3. Add new and make sure you choose App Type = ConneXML. The destination can be alpha-numeric and contains an endpoint, for example "customer_a_connexml".

<img src= "/class5/img/ml5.png">

4.After saving the above information. Click on `Go to App` to enter the ConneXML editor. Write your code and click `Save`.

<img src= "/class5/img/ml6.png">

5.If you initially want this to hit a customers server same as before, you can use something like this in the XML field.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Redirect method="POST">https://yourdomain.com/yourscript.php</Redirect>
</Response>
```

6.Point the DID to internal and then the name of the endpoint that you created (for example customer_a_connexml)
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e

### ConneXML Components

In ConneXML, the XML components can be divided into 4 categories:

1. `Response`: Its the root element tag that defines the main body of the ConneXML document. All the **verbs** must be contained inside the Response body.
2. `Verbs`: Just like in english language, Verbs are action words which tells what action to perform on the received call.
3. `Attributes`: These are the methods for each Verb. Verbs may have optional XML attributes that override the flow of execution, allowing you customize the verb behavior.
4. `Nouns`: As the name suggests, a noun can described on which the action has to be performed. For example, it can be a phone number on which a Dial action has to be performed.

!!! example
    ```xml
    <Response> <!--Body of the code>
        <!-- Here, Play and Dial are the Verbs -->
        <Play loop="2">http://www.music.com/fun.wav</Play>
        <Dial>
<<<<<<< HEAD
        <!-- Number is a Dial Noun -->
        <Number>+189765441</Number>
=======
            <!-- Number is a Dial Noun -->
            <Number>189765441</Number>
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e
        </Dial>
    </Response>
    ```

!!! note
    **Verbs** and **Nouns** are **case-sensitive**.

In the next section, we shall discuss the various `Verbs`,`Attributes` and `Nouns`.

## Verbs, Attributes and Nouns

### Hangup

The current call is terminated with the `Hangup` verb.

<<<<<<< HEAD
It has **no attributes** and doesn;t include any **nouns**.
=======
It has **no attributes** and doesn't include any **nouns**.
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e

!!! example
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
<<<<<<< HEAD
        <Say voice=""kal"">I will hangup call in 1 second even though there is say after hangup </Say>
        <Hangup />
=======
        <Hangup/>
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e
    </Response>
    ```

### Pause

<<<<<<< HEAD
The `Pause` verb waits silently for a given amount of time, or by default, one second.
=======
The `Pause` verb waits silently for a given amount of time, or by default, 5 seconds.
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e
`Pause` doesn't use any nouns, and a self-closing tag is mandatory.

!!! example
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
<<<<<<< HEAD
        <Say voice=""kal"">I will pause default time starting now!</Say>
=======
        <Say>I will pause default time starting now!</Say>
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e
        <Pause/>
    </Response>
    ```

|**Attribute**|**Description**|**Seconds**|**Default Value**|
|-------------|---------------|----------|-|
<<<<<<< HEAD
|`length`|How many seconds for waiting|1-180|1|
=======
|`length`|How many seconds for waiting|`1-180`|`5`|
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e

!!! example
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
        <Pause length="10"/>
<<<<<<< HEAD
        <Say voice="kal">I just paused 10 seconds</Say>
=======
        <Say>I just paused 10 seconds</Say>
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e
    </Response>
    ```

### Say

Text to speech is enabled for any application by using the `Say` verb, which speaks the provided text back to the caller.

!!! example
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
<<<<<<< HEAD
        <Say>This is better  text to speech. </Say>
=======
        <Say>This is better  text to speech.</Say>
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e
    </Response>
    ```

### Reject

This verb rejects the current call.

!!! note
    `Reject` can't be nested in any other verb and reject can't include any other verb.

!!! example
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
<<<<<<< HEAD
        <Reject  />
=======
        <Reject/>
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e
    </Response>
    ```

|**Attribute**|**Description**|**Options**|**Default**|
|-------------|---------------|-----------|-----------|
<<<<<<< HEAD
|`reason`|The sound to play in order to explain why the call was turned down|rejected, busy|rejected|
=======
|`reason`|The sound to play in order to explain why the call was turned down|`rejected`, `busy`|`rejected`|
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e

!!! example
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
<<<<<<< HEAD
        <Reject  reason="busy"/>
=======
        <Reject reason="busy"/>
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e
    </Response>
    ```

### Play

The `Play` verb allows you to play back to the caller an MP3 or WAV audio file.

You can use `Play` as a verb  standalone or as a noun nested inside `Gather` to play audio while you wait for DTMF tones.

|**Attribute**|**Description**|**Options**|**Default Value**|
|-------------|---------------|------------|---------|
<<<<<<< HEAD
|`loop`|How many times you wish to repeat the audio|[1-100], [0] for infinite| 1|
|`Local files`|You can play from default built-in messages|
|`Remote HTTP`|You can play from a remote datasource, the file can be anywhere on the internet; starts with `HTTP`|
|`User Files`|You can play the audio that you have uploaded with ConnexCS. Login to your account :material-menu-right: Management :material-menu-right: File :material-menu-right: Upload.
=======
|`loop`|How many times you wish to repeat the audio|`[1-100]`| `1`|

The value of Play can either be:

1. **Local files**: You can play from default built-in messages. List of default sounds to follow.
2. **Remote HTTP**: You can play from a remote datasource, the file can be anywhere on the internet; starts with HTTP.
3. **User Files**: You can play the audio that you have uploaded with ConnexCS. Login to your account :material-menu-right: Management :material-menu-right: File :material-menu-right: Upload.
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e

!!!example
    1. **Loop**
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
        <Play loop="3">ivr/ivr-invalid_number_format.wav</Play>
    </Response>
    ```

    2. **Local Files**
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
        <Play>ivr/ivr-invalid_number_format.wav</Play>
    </Response>
    ```
    3. **Remote HTTP**
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
        <Play>https://file-examples.com/storage/fef3ad87fb6568c5a9d7b04/2017/11/file_example_WAV_1MG.wav</Play>
    </Response>
    ```
    4. **User Files**
        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <Response>
            <Play>user/adam.wav</Play>
        </Response>
        ```

### Redirect

<<<<<<< HEAD
The current call gets transferred to another ConnexCS CLass5 application using the `Redirect` verb.
=======
The current call gets transferred to another ConnexCS Class 5 application using the `Redirect` verb.
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e

`Redirect` doesn't allow for the nesting of nouns.

!!! Example
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
<<<<<<< HEAD
        <Redirect>http://www.abc.com/Connex/redirect.xml</Redirect>
=======
        <Redirect>http://yourdomain.com/connex/test.xml</Redirect>
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e
    </Response>
    ```

|**Attribute**|**Description**|**Options**|**Default Method**
|-------------|---------------|-----------|-------|
<<<<<<< HEAD
|`method`|The type of redirect method used URL|GET, POST| POST|
=======
|`method`|The type of redirect method used URL|`GET`, `POST`| `POST`|
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e

!!! example
    ```xml
    <Response>
<<<<<<< HEAD
        <Redirect method="GET">https://cdn.cnxcdn.com/public/1093/test.xml</Redirect>
=======
        <Redirect method="GET">https://yourdomain.com/yourscript.php</Redirect>
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e
    </Response>
    ```

!!! Note
<<<<<<< HEAD
    After 'Redirect', all verbs are unreachable and disregarded.

### Conference

You can connect to a conference room using the `Dial` verb's `Conference` noun.

The `Conference`` noun lets you connect to a designated conference room and converse with other callers who have already connected to that room.

This is similar to how the `Number` noun lets you connect to another phone number.

!!! example
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
        <Dial>
            <Conference>Room 10481</Conference>
        </Dial>
    </Response>
    ```
=======
    After `Redirect`, all verbs are unreachable and disregarded.
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e

### Gather

During a call, the `Gather` verb accumulates DTMF tones.

You can create an interactive IVR with text-to-speech by nesting `Say` within `Gather`.

!!! example
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
<<<<<<< HEAD
        <Gather  actionOnEmptyResult="false" action="https://cdn.cnxcdn.com/public/1093/test.xml" method="GET" numDigits="6" finishOnKey="*" timeout="120">
            <Play>https://samplelib.com/lib/preview/wav/sample-12s.wav</Play>
        </Gather>
    <Say voice="kal">This is outside Gather</Say>
=======
        <Gather actionOnEmptyResult="false" action="https://yourdomain.com/youwebserver.php" method="GET" numDigits="6" finishOnKey="*" timeout="120">
            <Play>https://samplelib.com/lib/preview/wav/sample-12s.wav</Play>
        </Gather>
        <Say>Sorry.The entered number in invalid</Say>
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e
    </Response>
    ```

|**Attribute**|**Description**|**Options**|**Default Method**
|-------------|---------------|-----------|-------|
<<<<<<< HEAD
|`method`|The type of redirect method used URL|GET, POST| POST|
|`action`|Delegates the current call's control to the returned TeXML file| URLs|
|`actionOnEmptyResult`|When there is no DTMF input, you can still force `Gather` to send a webhook to the action URL by using `actionOnEmptyResult`.<br> When `Gather` runs out of time while awaiting DTMF input, it will automatically move on to the following ConneXML command| true, false|
|`numDigits`|Total number of digits to be gathered|
|`minDigits`|Minimum number of digits to be gathered|[1-128]|1|
|`maxDigits`|Maximum number of digits to be gathered|[1-128]|128|
|`timeout`|You can configure the `timeout` to determine how long ConnexCS will wait (in seconds) before sending data to your action URL to wait for the caller to press or say another number|[1-120]|5|

|**Noun**|**Description**|
|-------------|----------|
|`say`|Reads the supplied text back to the caller|
|`play`|Plays the audio URL back to the caller|

!!! example
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
        <Dial fromDisplayName="+1234" timeout="10" >160</Dial>
    </Response>
    ```

### Enqueque
=======
|`method`|The type of redirect method used URL|`GET`, `POST`| `POST`|
|`action`|Delegates the current call's control to the returned TeXML file| `URLs`|
|`actionOnEmptyResult`|When there is no DTMF input, you can still force `Gather` to send a webhook to the action URL by using `actionOnEmptyResult`.<br> When `Gather` runs out of time while awaiting DTMF input, it will automatically move on to the following ConneXML command| `true`, `false`|
|`numDigits`|Total number of digits to be gathered|
|`minDigits`|Minimum number of digits to be gathered|[`1-128`]|`1`|
|`maxDigits`|Maximum number of digits to be gathered|[`1-128`]|`128`|
|`timeout`|You can configure the `timeout` to determine how long ConnexCS will wait (in seconds) before sending data to your action URL to wait for the caller to press or say another number|`[1-120]`|`5`|

|**Noun**|**Description**|
|-------------|----------|
|`Say`|Reads the supplied text back to the caller|
|`Play`|Plays the audio URL back to the caller|

### Enqueue
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e

The current call is enqueued in a call queue using the `Enqueue` verb.

!!! example
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
<<<<<<< HEAD
        <Enqueue>10482</Enqueue>
=======
        <Enqueue>1000</Enqueue>
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e
    </Response>
    ```

### Dial

An existing call is transferred to a different destination using the `Dial` verb.

 `Dial` will end this call if:

   * The called person doesn't answer.
   * The number is invalid.
   * ConnexCS receives a busy signal.
  
!!! example
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
        <Dial>123456</Dial>
    </Response>
    ```

<<<<<<< HEAD

|**Attribute**|**Description**|**Options**|**Default Method**
|-------------|---------------|-----------|-------|
|`callerID`|Caller ID that must be a valid E.164 format number|
|`fromdisplayName`|The fromDisplayName string to be used as the caller id name (SIP From Display Name) presented to the destination. The string should have a maximum of 128 characters, containing only letters, numbers, spaces, and -_~!.+ special characters. If omited, the display name will be the same as the number in the callerId field|
|`hangupOnStar`|By tapping the `*` key on their phone, the initial caller can hang up on the called party using the hangupOnStar attribute. It doesn't apply for `Conference` noun|true, false| false|
|`rignTone`|The ringback tone played back to the caller|at,au,bg,br,be,ch,cl,cn,cz,de,dk,ee,es,fi,fr,gr,hu,il,in,it,lt,jp,mx,my,nl,no,nz,ph,pl,pt,ru,se,sg,th,uk,us,us-old,tw,ve,za|us|
=======
|**Attribute**|**Description**|**Options**|**Default Method**
|-------------|---------------|-----------|-------|
|`callerID`|Caller ID that must be a valid E.164 format number|
|`fromDisplayName`|The fromDisplayName string to be used as the caller id name (SIP From Display Name) presented to the destination. The string should have a maximum of 128 characters, containing only letters, numbers, spaces, and -_~!.+ special characters. If omitted, the display name will be the same as the number in the callerId field|
|`hangupOnStar`|By tapping the `*` key on their phone, the initial caller can hang up on the called party using the hangupOnStar attribute. It doesn't apply for `Conference` noun|`true`, `false`| `false`|
|`ringTone`|The ringback tone played back to the caller|`at`,`au`,`bg`,`br`,<br>`be`,`ch`,`cl`,`cn`,`cz`,</br>`de`,`dk`,`ee`,`es`,`fi`,<br>`fr`,`gr`,`hu`,`il`,`in`,<br>`it`,`lt`,`jp`,`mx`,`my`,<br>`nl`,`no`,`nz`,`ph`,`pl`,<br>`pt`,`ru`,`se`,`sg`,<br>`th`,`uk`,`us`,`us-old`,`tw`,<br>`ve`,`za`|`us`|
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e

|**Noun**|**Description**|
|-------------|----------|
|`Number`|Its is an E.164 phone number|
|`Queue`|Its a queue name|
|`Client`|It specifies a client identifier to dial|
<<<<<<< HEAD
=======
|`Conference`|You can connect to a conference room using the `Dial` verb's `Conference` noun|

!!! Info
    `Conference` is similar to how the `Number` noun lets you connect to another phone number.
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e

!!! example
    1. **callerID**
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
<<<<<<< HEAD
        <Dial callerId="+1234">12345</Dial>
        <Say voice="kal">This is after hangup. </Say>
=======
        <Dial callerId="1234">12345</Dial>
        <Say>This is after hangup.</Say>
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e
    </Response>
    ```

    2. **fromDisplayName**
        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <Response>
<<<<<<< HEAD
            <Dial fromDisplayName="+1234">12345</Dial>
            <Say voice="kal">This is after hangup. </Say>
=======
            <Dial fromDisplayName="1234">12345</Dial>
            <Say>This is after hangup.</Say>
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e
        </Response>
        ```

    3. **hangupOnStar**
        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <Response>
<<<<<<< HEAD
            <Dial hangOnStar="+1234">12345</Dial>
            <Say voice="kal">This is after hangup. </Say>
        </Response>
        ```
    4. **ringTone**
       ```xml
       <?xml version="1.0" encoding="UTF-8"?>
        <Response>
            <Dial fromDisplayName="+1234" ringTone="in">160</Dial>
        </Response>
        ```    
=======
            <Dial hangupOnStar="true">12345</Dial>
            <Say>This is after hangup.</Say>
        </Response>
        ```
    4. **ringTone**
        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <Response>
            <Dial fromDisplayName="1234" ringtone="in">160</Dial>
        </Response>
        ```
    
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e
    5. **Number**
        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <Response>
            <Dial>
                <Number>4423456789</Number>
            </Dial>
        </Response>"
        ```
    6. **Queue**
        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <Response>
            <Dial>
<<<<<<< HEAD
                <Queue>10482</Queue>
=======
                <Queue>1000</Queue>
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e
            </Dial>
        </Response>
        ```

    7. **Client**
        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <Response>
            <Dial>
<<<<<<< HEAD
                <Client>testadam</Client>
            </Dial>
        </Response>
        ```
| **Verbs/Attributes/Nouns** | **Twilio** | **ConnexCS** | **Telnyx** |
|----------------------------|------------|--------------|------------|
|**Play**|Yes|Yes|Yes|
|**loop**|Yes|Yes|Yes|
|**Remote HTTP**|No|Yes|No|
|**User Files**|No|Yes|No|
|**digits**|Yes|No|Yes|
|**Hangup**|Yes|Yes|Yes|
|**Pause**|Yes|Yes|Yes|
|**length**|Yes|Yes|Yes|
|**Say**|Yes|Yes|Yes|
|**voice**|Yes|No|Yes|
|**language**|Yes|No|Yes|
|**loop**|Yes|No|Yes|
|**Reject**|Yes|Yes|Yes|
|**reason**|Yes|Yes|Yes|
|**Dial**|Yes|Yes|Yes|
|**callerId**|Yes|Yes|Yes|
|**fromDispalyName**|No|Yes|Yes|
|**hangupOnStar**|Yes|Yes|Yes|
|**ringTone**|Yes|Yes|Yes|
|**timeout**|Yes|Yes|Yes|
|**Number**|Yes|Yes|Yes|
|**Queue**|Yes|Yes|Yes|
|**Client**|Yes|Yes|No|
|**Conference**|Yes|Yes|Yes|
|**Enqueue**|Yes|Yes|Yes|
|**Play**|Yes|Yes|Yes|
=======
                <Client>test1</Client>
            </Dial>
        </Response>
        ```
    8. **Conference**
        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <Response>
            <Dial>
                <Conference>Room5</Conference>
            </Dial>
        </Response>
        ```

|**Verbs/Attributes/Nouns**|**ConnexCS (ConneXML)**|**Twilio<sup>TM</sup> (TwiML)[^1]**|**Telnyx (TeXML)[^2]**|
|----------------------------|------------|--------------|------------|
|**Play**|✅|✅|✅|
|➡️loop|✅|✅|✅|
|**Hangup**|✅|✅|✅|
|**Pause**|✅|✅|✅|
|➡️length|✅|✅|✅|
|**Say**|✅|✅|✅|
|➡️voice|❌|✅|✅|
|➡️language|❌|✅|✅|
|➡️loop|✅|✅|✅|
|**Reject**|✅|✅|✅|
|➡️reason|✅|✅|✅|
|**Dial**|✅|✅|✅|
|➡️Conference|✅|✅|✅|
|➡️callerId|✅|✅|✅|
|➡️fromDisplayName|✅|✅|✅|
|➡️hangupOnStar|✅|✅|✅|
|➡️ringTone|✅|✅|✅|
|➡️Number|✅|✅|✅|
|➡️Queue|✅|✅|✅|
|➡️Client|✅|✅|❌|
|**Enqueue**|✅|✅|✅|
|**Play**|✅|✅|✅|
|**Redirect**|✅|✅|✅|
|➡️method|✅|✅|✅|
|**Gather**|✅|✅|✅|
|➡️method|✅|✅|✅|
|➡️action|✅|✅|✅|
|➡️actionOnEmptyResult|✅|✅|❌|
|➡️numDigits|✅|✅|❌|
|➡️minDigits|✅|✅|✅|
|➡️maxDigits|✅|✅|✅|
|➡️timeout|✅|✅|✅|
|**digits**|❌|✅|✅|
|**Stop**|❌|❌|✅|
|**Transcription**|❌|❌|✅|
|**Stream**|❌|✅|✅|
|**Refer**|❌|✅|✅|
|**Record**|❌|✅|✅|
|**HttpRequest**|❌|❌|✅|
|**Leave**|❌|✅|✅|
|**Pay**|❌|✅|❌|
|**Connect**|❌|✅|❌|
|**Suppression**|❌|❌|✅|

[^1]:  https://www.twilio.com/docs/voice/twiml
[^2]:  https://developers.telnyx.com/docs/v2/voice/programmable_voice/texml/texml-translator/texml_translator/

!!! Note
    TwiML is a trademark of TWILIO.
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e