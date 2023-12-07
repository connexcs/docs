# ConneXML

## Introduction

### What is ConneXML?

ConneXML is a set of instructions you can use to tell Class 5 Applications what to do when you receive an incoming call.

When the customers receive an External or Internal Call, it hits the [DID](https://docs.connexcs.com/customer/did/) section.

In the DID section you can allocate the calls at different places. Click on Call :material-menu-right: Destination:

1. **URI**: Its points to a client's server. You can send the call either to the Destination DID or an IP address.<img src= "/class5/img/ml2.png">
2. **External**: Allows you to re-direct the call out back again to the network.<img src= "/class5/img/ml3.png">
3. **Internal**: Allows you to route the call internally like a SIP user or a Queue.<img src= "/class5/img/ml4.png">

Later, the Class5 Applications makes an HTTP request to the URL endpoint you configured for that number. The endpoint will contain instructions telling ConnexML what to do next with the call.

### How does ConneXML work?

In a general call scenario, the call goes from the Carrier to ConnexCS Class4 to the Customer.

But in this case, the call goes from Carrier to ConnexCS Class4 to ConnexCS Class5.

The Class5 initially doesn't pass the call to the Customer.

The call gets terminated here and instead Class4 sends a request to the Routing Engine via HTTP and then the HTTP replies back to the Class4 system.

Class4 passes the call to Class5. Then Class5 asks the Routing Engine how to handle the call.

Further, the Routing Engine questions the same thing to the Customer on how to handle the call. The Customer can ask to collect some information or play a music or something else via a an HTTP Request. The same request is sent to the Class5 from the Routing Engine. The Class5 then replies to the requests of the customer.

ConneXML uses the standard '.xml' file extension.

.<img src= "/class5/img/ml1.png">

### ConneXML Components

In ConneXML, the XML components can be divided into 3 categories:

1. `Response`: Its the root element tag that defines the main body of the ConneXML document. All the **verbs** must be contained inside the Response body.
2. `Verbs`: Just like in english language, Verbs are action words which tells what action to perform on the received call.
3. `Nouns`: As the name suggests, a noun can described on which the action has to be performed. For example, it can be a phone number on which a Dial action has to be performed.

!!! example
    ```xml
    <Response> <!--Body of the code>
    <!-- Here, Play and Dial are the Verbs -->
    <Play loop="2">http://www.music.com/fun.wav</Play>
    <Dial>
    <!-- Number is a Dial Noun -->
        <Number>+189765441</Number>
    </Dial>
    </Response>
    ```

!!! note
    **Verbs** and **Nouns** are **case-sensitive**.

In the next section, we shall discuss the various `Verbs` and `Nouns`.

## Various Verbs and Nouns

1. **Hangup**: The current call is terminated with the `Hangup` verb. 
It has **no attributes** and doesn;t include any **nouns**.

!!! example
    ```xml
    "<?xml version=""1.0"" encoding=""UTF-8""?>
    <Response>
    <Say voice=""kal"">I will hangup call in 1 second even though there is say after hangup </Say>
    <Hangup />
    <Say voice=""kal"">This is Kal!</Say>
    </Response>"
    ```