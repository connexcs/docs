# ConneXML

**Class 5 :material-menu-right: ConneXML**

## Introduction

### What's ConneXML?

ConneXML is a set of instructions you can use to tell Class 5 Applications what to do when you receive an incoming call.

When the customers receive an External or Internal Call, it hits the [DID](https://docs.connexcs.com/customer/did/) section.

In the DID section you can allocate the calls at different places. Click on Call :material-menu-right: Destination:

1.**URI**: Its points to a client's server. You can send the call either to the Destination DID or an IP address.

<img src= "/class5/img/ml2.png"  width="400">

2.**External**: Allows you to re-direct the call out back again to the network.

<img src= "/class5/img/ml3.png" width="400">

3.**Internal**: Allows you to route the call internally like a SIP user or a Queue.

<img src= "/class5/img/ml4.png" width="400">

Later, the Class5 Applications makes an HTTP request to the URL endpoint you configured for that number. The endpoint will contain instructions telling ConnexML what to do next with the call.

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
            <!-- Number is a Dial Noun -->
            <Number>189765441</Number>
        </Dial>
    </Response>
    ```

!!! note
    **Verbs** and **Nouns** are **case-sensitive**.

In the next section, we shall discuss the various `Verbs`,`Attributes` and `Nouns`.

## Verbs, Attributes and Nouns

### Hangup

The current call is terminated with the `Hangup` verb.

It has **no attributes** and doesn't include any **nouns**.

!!! example
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
        <Hangup/>
    </Response>
    ```

### Pause

The `Pause` verb waits silently for a given amount of time, or by default, 5 seconds.
`Pause` doesn't use any nouns, and a self-closing tag is mandatory.

!!! example
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
        <Say>I will pause default time starting now!</Say>
        <Pause/>
    </Response>
    ```

|**Attribute**|**Description**|**Seconds**|**Default Value**|
|-------------|---------------|----------|-|
|`length`|How many seconds for waiting|`1-180`|`5`|

!!! example
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
        <Pause length="10"/>
        <Say>I just paused 10 seconds</Say>
    </Response>
    ```

### Say

Text to speech is enabled for any application by using the `Say` verb, which speaks the provided text back to the caller.

!!! example
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
        <Say>This is better  text to speech.</Say>
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
        <Reject/>
    </Response>
    ```

|**Attribute**|**Description**|**Options**|**Default**|
|-------------|---------------|-----------|-----------|
|`reason`|The sound to play in order to explain why the call was turned down|`rejected`, `busy`|`rejected`|

!!! example
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
        <Reject reason="busy"/>
    </Response>
    ```

### Play

The `Play` verb allows you to play back to the caller an MP3 or WAV audio file.

You can use `Play` as a verb  standalone or as a noun nested inside `Gather` to play audio while you wait for DTMF tones.

|**Attribute**|**Description**|**Options**|**Default Value**|
|-------------|---------------|------------|---------|
|`loop`|How many times you wish to repeat the audio|`[1-100]`| `1`|

The value of Play can either be:

1. **Local files**: You can play from default built-in messages. List of default sounds to follow.
2. **Remote HTTP**: You can play from a remote datasource, the file can be anywhere on the internet; starts with HTTP.
3. **User Files**: You can play the audio that you have uploaded with ConnexCS. Login to your account :material-menu-right: Management :material-menu-right: File :material-menu-right: Upload.

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

The current call gets transferred to another ConnexCS Class 5 application using the `Redirect` verb.

`Redirect` doesn't allow for the nesting of nouns.

!!! Example
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
        <Redirect>http://yourdomain.com/connex/test.xml</Redirect>
    </Response>
    ```

|**Attribute**|**Description**|**Options**|**Default Method**
|-------------|---------------|-----------|-------|
|`method`|The type of redirect method used URL|`GET`, `POST`| `POST`|

!!! example
    ```xml
    <Response>
        <Redirect method="GET">https://yourdomain.com/yourscript.php</Redirect>
    </Response>
    ```

!!! Note
    After `Redirect`, all verbs are unreachable and disregarded.

### Gather

During a call, the `Gather` verb accumulates DTMF tones.

You can create an interactive IVR with text-to-speech by nesting `Say` within `Gather`.

!!! example
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
        <Gather actionOnEmptyResult="false" action="https://yourdomain.com/youwebserver.php" method="GET" numDigits="6" finishOnKey="*" timeout="120">
            <Play>https://samplelib.com/lib/preview/wav/sample-12s.wav</Play>
        </Gather>
        <Say>Sorry.The entered number in invalid</Say>
    </Response>
    ```

|**Attribute**|**Description**|**Options**|**Default Method**
|-------------|---------------|-----------|-------|
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

The current call is enqueued in a call queue using the `Enqueue` verb.

!!! example
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
        <Enqueue>1000</Enqueue>
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

|**Attribute**|**Description**|**Options**|**Default Method**|
|-------------|---------------|-----------|-------|
|`callerID`|Caller ID that must be a valid E.164 format number|
|`fromDisplayName`|The fromDisplayName string to be used as the caller id name (SIP From Display Name) presented to the destination. The string should have a maximum of 128 characters, containing only letters, numbers, spaces, and -_~!.+ special characters. If omitted, the display name will be the same as the number in the callerId field|
|`hangupOnStar`|By tapping the `*` key on their phone, the initial caller can hang up on the called party using the hangupOnStar attribute. It doesn't apply for `Conference` noun|`true`, `false`| `false`|
|`ringTone`|The ringback tone played back to the caller|`at`,`au`,`bg`,`br`,<br>`be`,`ch`,`cl`,`cn`,`cz`,</br>`de`,`dk`,`ee`,`es`,`fi`,<br>`fr`,`gr`,`hu`,`il`,`in`,<br>`it`,`lt`,`jp`,`mx`,`my`,<br>`nl`,`no`,`nz`,`ph`,`pl`,<br>`pt`,`ru`,`se`,`sg`,<br>`th`,`uk`,`us`,`us-old`,`tw`,<br>`ve`,`za`|`us`|
|`timeout`|timeout in <Dial> lets you specify the maximum waiting time in seconds for the dialed party to answer|||

|**Noun**|**Description**|**Attribute**|**Options**|**Default Method**|
|--------|---------------|-------------|-------------|---|
|`Number`|Its is an E.164 phone number|
|`Queue`|Its a queue name|
|`Client`|It specifies a client identifier to dial|
|`Conference`|You can connect to a conference room using the `Dial` verb's `Conference` noun|
|`Voicemail`| Your voicemails can be played using the `Voicemail` noun. [Click here](https://docs.connexcs.com/class5/voicemail/#voicemail-dialpad-options) to know more options for the Voicemail Dialpad options|`Voicemail Inbox`- It sends you to the inbox to leave a message|
|`barge`|Allows you to join an ongoing call, without alerting the participants|<table><tr> <td>`whisper`- listen to a conversation without the other party knowing</td> </tr> <tr> <td>`bridge`- listening in on a conference call where the eavesdropper isn't a participant but can still monitor the conversation</tr> </td> <tr> <td>`command`- DTMF signals during eavesdrop</td> </tr></table>|<table><tr> <td>`whisper`- `a`, `b`, `ab`</td> </tr> <tr> <td>`bridge`- `a`, `b`, `ab`</tr> </td> <tr> <td>`command`- <br> `2 to speak with the uuid` <br> `1 to speak with the other half` <br> `3 to engage a three way` <br> `0 to restore eavesdrop` <br> `* to next channel`</td> </tr></table>| all the attributes will be executed|

!!! Info
    `Conference` is similar to how the `Number` noun lets you connect to another phone number.

!!! example
    1. **callerID**
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
        <Dial callerId="1234">12345</Dial>
        <Say>This is after hangup.</Say>
    </Response>
    ```

    2. **fromDisplayName**
        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <Response>
            <Dial fromDisplayName="1234">12345</Dial>
            <Say>This is after hangup.</Say>
        </Response>
        ```

    3. **hangupOnStar**
        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <Response>
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
    
    5. **timeout**
        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <Response>
            <Dial timeout="60">123456</Dial>
        </Response>
        ```

    6. **Number**
        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <Response>
            <Dial>
                <Number>4423456789</Number>
            </Dial>
        </Response>"
        ```
    7. **Queue**
        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <Response>
            <Dial>
                <Queue>1000</Queue>
            </Dial>
        </Response>
        ```

    8. **Client**
        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <Response>
            <Dial>
                <Client>test1</Client>
            </Dial>
        </Response>
        ```
    9. **Conference**
        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <Response>
            <Dial>
                <Conference>Room5</Conference>
            </Dial>
        </Response>
        ```
    
    10. **Voicemail**
        ``` xml
        <?xml version="1.0" encoding="UTF-8"?>
        <Response>
            <Dial>
                <Voicemail />
            </Dial>
        </Response>
        ```
    
    11. **Voicemail Inbox**
        ``` xml
        <?xml version="1.0" encoding="UTF-8"?>
        <Response>
            <Dial>
                <Voicemail inbox="true">
                 <Voicemail/>
            </Dial>
        </Response>
        ```

    12. **Barge**
        ``` xml
        <?xml version="1.0" encoding="UTF-8"?>
        <Response>
            <Dial>
                <Barge></Barge>
            </Dial>
        </Response>
        ```
    
    13.  **Barge**
        ``` xml
        <?xml version="1.0" encoding="UTF-8"?>
        <Response>
            <Dial>
                <Barge>
                    whisper="ab" or "a" or 'b'// enables whisper mode in aleg, bleg or both
                    bridge="ab" or "a" or 'b // enables listen to in aleg, bleg or both
                    commands= "false" // false means no DTMF signals/commands during eavesdrop
                </Barge>
            </Dial>
        </Response>
        ```

    14. **Barge (Group)** 
        ``` xml
        <?xml version="1.0" encoding="UTF-8"?>
        <Response>
            <Dial>
                <Barge
                >GROUPA</Barge> // Add a group of customers in SIP Profile to listen to the conversation of that particular group. If no group is mentioned then you can listen to any ongoing calls 
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
|➡️Voicemail|✅|❌|❌|
|➡️Voicemail Inbox|✅|❌|❌|
|➡️Barge|✅|❌|❌|
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
