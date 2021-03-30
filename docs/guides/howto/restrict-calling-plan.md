# Restricting individual customers to specific calling plans. 
There are sometimes instances when a provider will have multiple call plans and would like to restrict certain customers to specific plans. Some of their customers should only dial numbers in the USA, some in the UK, while some customers can dial Globally. ConnexCS solves this by using a temporary prefix in User Auth to tag for appropriate routing, then the tag is stripped when processed in Routing.

For example, the Provider has 3 calling plans, we can define a Tech prefix for each plan:

|Calling Plan|Tech Prefix|
|---|---|
|USA|\#1#|
|UK|\#2#|
|Global|\#3#|

**Step 1: Link each Customer to a Tech Prefix using the Parameter Rewrite function:**

Go to **Customer :material-menu-right: Auth :material-menu-right: Select IP or SIP User Aut :material-menu-right: Parameter Rewrite**:

&emsp;![alt text][restrictcalling1]


**Step 2: Add tag to Customer routing**

Go to **Customer :material-menu-right: Routing :material-menu-right: Ingress Routing**- select the desired plan, then on the Basic tab assign the Tech Prefix:

&emsp;![alt text][restrictcalling2]


Results: 
When a customer dials a number, the user registers with ConnexCS. Based on the Tech Prefix assigned in IP or SIP User Auth, the call will then be directed to the Ingress Routing plan assoicated to that Tech Prefix. Calls will then be routed based on the Rate Card(s), as well as Dial Strings and any other parameters configured in the routing instance. 


[restrictcalling1]: /guides/howto/img/restrictcalling1.png "Tech Prefix in Auth"
[restrictcalling2]: /guides/howto/img/restrictcalling2.png "Tech Prefix in Routing"
