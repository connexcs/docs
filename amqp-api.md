<h2>Asynchronous AMQP API</h2>

Advanced Message Queuing Protocol is an open standard application layer protocol for delivering arbitrary messages.

Unlike the RESTful JSON over HTTP interface AMQP has less overhead as a TCP socket remains established, additionally and most importantly the entire message delivery is asynchronous. This means that if you want to perform 1m lookups you can send them to us as fast as we can receive them (10,000+ messages per second is not a problem), then we can respond to them as fast as the underlying system can.

Drivers are available in almost every language and its very lightweight to implement

Authentication is performed by a Private Shared Key which is used for both the Username & Password fields and an encrypted connection can be established if required. Please ask us if you want to use this service and we will help you get started.

<h4>Considerations</h4>

Although the receive rate is very high the underlying system speed might not be. 
It is trivial for us to queue 1m messages waiting to be processed, but if the connection drops you wont receive the responses.
