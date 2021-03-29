# Restricting individual customers to specific calling plans. 
There are sometimes instances when a provider will have multiple call plans and would like to restrict certain customers to specific plans. Some of their customers should only dial numbers in the USA, some in the UK, while some customers can dial Globally. ConnexCS solves this by using a temporary prefix in User Auth to tag for appropriate routing, then the tag is stripped when processed in Routing.

For example, the Provider has 3 calling plans:

1. USA
2. UK
3. Global

We could then say that each calling plan is identified with a certain Tech Prefix:

#1# = USA tech prefix
#2# = UK tech prefix
#3# = Global tech prefix


Step 1: Link each Customer to a Tech Prefix using the Parameter Rewrite function:

Go to Customer > Auth > Select IP or SIP User Auth > Parameter Rewrite:

![alt text][restrictcalling1]


Step 2: Add tag to Customer routing

Go to Customer > Routing > Ingress Routing- select the desired plan, then on the Basic tab assign the Tech Prefix:

![alt text][restrictcalling2]


Result: When a customer dials a number, the user registers with ConnexCS. Based on the Tech Prefix assigned in IP or SIP User Auth, the call will then be directed to the Ingress Routing plan assoicated to that Tech Prefix. Calls will then be routed based on the Rate Card(s), as well as Dial Strings and any other parameters configured in the routing instance. 


[restrictcalling1]: /guides/howto/img/restrictcalling1.png "Tech Prefix in Auth"
[restrictcalling2]: /guides/howto/img/restrictcalling2.png "Tech Prefix in Routing"
