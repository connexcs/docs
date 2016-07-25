# Limiting CPS & Channels

The switch can limit CPS and channels in the following areas:

 1. Your entire ConnexCS account
 2. Per Customer
 3. Per Customer IP Address
 4. Per Carrier
 5. Per Carrier IP Address
 6. Ingress Routing

 
## What happens when my server reaches capacity?

The standard response is a Request Terminated: Server at max cps/channels. If you have multiple servers you can set it up so that,
if the server reaches maximum capacity, is sends a 302 response advising the client of an alternative location to try and complete the call.
