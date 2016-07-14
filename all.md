<h2>Far End NAT Traversal</h2>

<h4>Pre Text</h4>

 Near end refers to the UA (User Agent) such as the softphone. Far End refers to the ConnexCS Switch.

 NAT is the process that allows you to have an internal and external IP address.

<h2>SIP Traces</h2>

 The ConnexCS system support always on SIP Trace capture. This means that we keep a record of every packet sent and received by your server over the last 7 days. This is enormously useful for debugging problems with customer's / carrier configuration.

<h2>Limiting CPS & Channels</h2>

 The switch can limit CPS and channels in the following areas:

1. Your entire ConnexCS account 
2. Per Customer 
3. Per Customer IP Address 
4. Per Carrier 
5. Per Carrier IP Address 
6. Ingress Routing 

<h2>Scaling and Load Balancing</h2>

 The ConnexCS platform is highly scalable in terms of Channels, CPS and in single / multiple zones.

 We aim to run all servers at a maximum of 50% their capacity. This enables us to accept unforecast bursts comfortably.

<h2>Billing</h2>

 When you subscribe to ConnexCS you have 2 main tariffs that you can use, either per minute or per channel.

<h4>ConnexCS Billing per channel</h4>

 This is the traditional approach where you pay for a set number of channels.

<h4>ConnexCS Billing per minute</h4>

 This billing strategy is similar, but not exactly the same as how you would get charged by your

<h2>Credit Control</h2>

<h4>Pre-pay / Post Pay</h4>

 The ConnexCS system does not have a distinct setting to differentiate between Pre and Post pay customers. This is simply determined by the debit limit.

<h2>SBC or Class 4 Softswitch</h2>

 SBC or Class 4 Softswitch?

We have given it a great deal of thought as to whether to brand our system as a class 4 cloudswitch or a SBC (Session Border Controller). As our platform is delivered OTT (Over The Top), sitting on cloud architecture, the typical Border part of the Session Border Controller is blurred. An SBC is (almost always) a class 4 switch, however a class 4 switch does not have to be a SBC.

<h2>ConnexCS Media Handling</h2>

 Why do I see different media IP addresses?

 When a SIP session is created with your ConnexCS Cloudswitch, the switch decides (or you can choose from ingress routing) a zone to route your media through, e.g USA East, USA West, Europe.

<h2>Asynchronous AMQP API</h2>

 Advanced Message Queuing Protocol is an open standard application layer protocol for delivering arbitrary messages.

 Unlike the RESTful JSON over HTTP interface AMQP has less overhead as a TCP socket remains established, additionally and most importantly the entire message delivery is asynchronous. This means that if you want to perform 1m lookups you can send them to us as fast as we can receive them (10,000+ messages per second is not a problem), then we can respond to them as fast as the underlying system can.

<h2>ScriptForge Routing</h2>

 The Routing class is a helper which gives easy access to the variables associated with routing.
 It will automatically load the $routing variable and allow safe manipulation 

 1. getTechPrefix

 2. PHP

<h2>PHP ScriptForge</h2>

 The PHP allows your own custom code to be run from within the ConnexCS platform.

 <h4>Usage</h4>

The PHP ScriptForge, eventually, will allow extended functionality throughout the system, but for the alpha version this will be available in the ScriptForge editor to check the ability of your code to be executed and soon in the routing.

<h2>Datastore</h2>

The Datastore class gives access to a high speed persistent key value store.

Data is stored on a redundant cluster and is immediately consistent in server zones, eventually consistent between zones (typical lag between zones is about 2 seconds)

Although it is possible to allow application script to have variables that are persistent between requests this should not be used. Application processes are ephemeral and will be terminated when there is no workload. Your application may also run on multiple servers so only variable space in the datastore will be shared between instances.

<h2>ScriptForge</h2>

The ScriptForge allows you to write your own application which can be run at specific events in the system, currently the following places support scripting functionality:

 &#x25cf; Routing Engine (runs in line the call setup process) Post Billing (runs after billing has taken place) 

Requests to your application are processed via a messaging bus and will be queued if your application can not process them fast enough. If you run your application in the routing engine you must ensure that it can complete quickly so as not to induce high PDD.

<h2>Routing Strategy</h2>

The Routing Strategy lets the routing engine to route calls to various providers depending upon the strategy you set. Routing Strategy is an optional enhancement to routing and is not required for normal routing.

<h4>Type of Strategy</h4>

 &#x25cf;  LCR – Least Cost Route

 &#x25cf;  Random - System will pick a random route without any sequence. 
 
 &#x25cf;  Round Robin - System will pick a route by selected Sequence
 
 &#x25cf;  Manual - Manual pick by the selected route 
 
 &#x25cf;  Reverse LCR - System will pick the most Expensive Route first 

<h2>Rate Compact</h2>

When merging multiple rate cards together the rate compact is the strategy with which unique prefixes are merged. These are Minimum, Maximum and Average. When a collision between two codes happens this rule will govern how the combined rate will be calculated.

<h2>Routing</h2>

Routing in ConnexCS Cloudswitch happens in the following stages

 &#x25cf; Incoming call is identified as belonging to a customer, this is checked by source IP or User/Pass Authentication
 
 &#x25cf; Ingress Routing will check for prefixes first, then against available rate cards. There can be multiple ingress routes per customer. 
 
 &#x25cf; Customer Rate Card is built up from carriers above it, so the call can be presented to any carrier who was the parent of the customer rate card.

<h2>Getting Started Video Guide</h2>

The videos on this page are to show a quick example of how to setup your account. For more details on please refer to our <b>Getting Started Guide</b>

Adding a Customer & Carrier

Uploading a Provider Rate Card (and create Customer Rate Card)
Manually Create Provider Rate Card (and create Customer Rate Card)

<h2>Routing Engine</h2>

When a call first lands on the system it hits the routing engine. The routing engine follows the process:

 &#x25cf; Authentication.
 
 &#x25cf; Ingress Routing.
 
 &#x25cf; Egress Routing.

If your SIP Trace shows that an INVITE packet was received by the switch but not sent out to any providers, the fail will be in the ingress routing.

<h2>Debugging</h2>

 &#x25cf; To debug click on Management > Logging
 
 &#x25cf; Click on the call id & check for the error message, alternatively you can also download the pcap traces.

<h2>Username Password Authentication</h2>

ConnexCS supports two varieties of authentication. IP which only checks the originating IP address, and Username / Password Authentication, which allows any IP address to be used and required authentication information to be included in the SIP headers. This is usually done on softphones, but it can be configured on diallers which have dynamic IP addresses.

<h2>Ingress Routing</h2>

Ingress routing allows incoming attempts to be sent to the correct rate card which in turn egress through the specified provider.

Ingress routing allows for lots of rate cards to be used with or without a prefix. This is checked according to the longest prefix first through to the shortest for a match. If no prefix is matched then it will begin matching the rules of the rate cards. Rate cards with mutually exclusive destinations will route without problems, but rate cards which have prefixes with collisions will have no guarantee which the calls will be sent to.

<h2>CLI Restriction</h2>

CLI Restriction enables you to pass a CLI which is presented on the customer's account. Anything without a valid CLI will not be passed through.

Checking the Force CLI option will let the user to pass the CLI without having to set the CLI at customer's end.

<b>Note:</b> If no CLI rules are added just the default CLI which is presented by your end customer will pass through. Also we do support regular expression.

<h2>Billing</h2>

All calls through the ConnexCS Platform are billed using rate information kept in the rate card the following features are supported:

 &#x25cf; Connection Fees
 
 &#x25cf; LRN
 
 &#x25cf; Min call cost & Pulse (e.g 1/1, 6/6, 60/60, etc) 
 
 &#x25cf; Daily collation of customers records. 

<h2>Server</h2>

To Access your server follow the below steps

 &#x25cf; Click on Setup > My Servers Click on server ip 

<h2>How to restert/stop my server?</h2>

 &#x25cf; Click on Setup > My Servers Click on the server ip. 
 
 &#x25cf; Click on the green drop down menu & click the restart button to restart your server & stop to shutdown your server.

<h2>CDR</h2>

 &#x25cf; Click on [Management > Customers > [Customer Name]]> CDR Click on CDR.
 
 &#x25cf; Select the date range and click apply.
 
 &#x25cf; Click on download.

<h2>Call Orgination</h2>

Dial

Service Based Call Origination for Dialler Applications

<h2>Smart Lookup</h2>

Smart lookup combines: ASR+, TPS, Range, HLR, LRN & Ping, into a single request, which is also capable of performing multiple lookups.

<h2>API</h2>

<h4>What is an API and why do I need it?</h4>

API - Application Programmer Interface, is a machine-2-machine communication method which will allow your system to talk to ours directly. Using our high capacity API, we can return rate cards rules to you with sub-millisecond response time, meaning if you wish you can actually query the rate in real-time before your customer sends a call. Or you might want to publish the rates generated by us directly to a social feed. These are all things that you can do with our API.

<h2>My Account</h2>

To access My Account click on Management> My Account

<h4>Login Options</h4>

<h4>How do I change my connexcs login password?</h4>

<h2>DID</h2>

Below are the steps to add a DID.

 &#x25cf; Click on Management> DID Click + Enter the DID number in E164 format.
 
 &#x25cf; Select the DID provider. 
 
 &#x25cf; Select the Provider rate card. 
 
 &#x25cf; Select the customer account name for which you wish to map the DID for. 
 
 &#x25cf; Select the customer rate card. 
 
 &#x25cf; Enter the sip destination Example: 12345678912@1.1.1.1
 
 &#x25cf; Click Save.

<h2>Mass Payments with Paypal IPN</h2>

<h4>Mass Payments</h4>

Mass Payment is a bulk payment method that allows funds to be sent by uploading a file to the Paypal site and allows the sender to pay the fee's. Usually lower than standard PayPal sending fee's.

As there is no direct involvement with the switch when sending this payment we need to use a different strategy to receive notifications about this payments, for that we can link in to PayPal's IPN.

<h2>Detailed Feature List</h2>

<h4>Detailed Features - ConnexCS</h4>

ConnexCS offers a wide range of features including Customer Management, Rate Card Management, CDR, Carrier Management, LCR (Least Cost Routing), Sandbox & much more.

<h2>Getting Started Guide</h2>

Initial set-up, will configure a single carrier, single customer and single rate card.

<h4>Prerequisites</h4>

This guide will assume that you have already created an account with <i>ConnexCS.com</i> and you are able to login successfully.

<h2>Authentication Mechanisms</h2>

We support 2 main methods of authentication for UAC & UAS.

<h4>IP Authentication</h4>
<h4>Username & Password Authentication</h4>

<h2>G729a or b?</h2>

In terms of representation in the SDP payload.

 &#x25cf; G729, G729a (and G729c):
 
 &#x25cf; number in m= line: 18 a=rtpmap:18 G729/8000 a=fmtp:18 annexb=no (or not present) G729b
 
 &#x25cf; number in m= line: 18 a=rtpmap:18 G729/8000 a=fmtp:18 annexb=yes G729d 
