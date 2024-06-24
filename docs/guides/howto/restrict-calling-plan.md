# Restricting individual customers to specific calling plans

Sometimes a provider has multiple call plans and would like to restrict certain customers to specific plans.

For example, some customers may only dial numbers in the USA, some in the UK, and some globally. ConnexCS solves this by using a temporary prefix in **User Auth**. This prefix tags calls from certain customers for appropriate routing. **User Auth** strips the tag while processing the calls in Routing.

For example, the Provider has 3 calling plans, so we define a Tech prefix for each plan:

|Calling Plan|Tech Prefix|
|---|---|
|**USA**|\#1#|
|**UK**|\#2#|
|**Global**|\#3#|

**Step 1: Link each Customer to a Tech Prefix using the Parameter Rewrite function:**

Go to **Customer :material-menu-right: Auth**, select **IP Auth** or **SIP User Auth**, and then navigate to **Parameter Rewrite**:

<img src= "/customer/img/regex.png">

**Step 2: Add a tag to Customer routing**

Go to **Customer :material-menu-right: Routing :material-menu-right: Ingress Routing**, select the desired plan, then on the **Basic** tab, assign the Tech Prefix:

&emsp;![alt text][restrictcalling2]

**Results:**
When a customer dials a number, the user registers with ConnexCS.

Based on the Tech Prefix assigned in IP or SIP User Auth, the call is then directed to the Ingress Routing plan associated with that Tech Prefix. Calls are then routed based on the Rate Card(s), as well as Dial Strings and any other parameters configured in the routing instance.

[restrictcalling1]: /guides/howto/img/restrictcalling1.png "Tech Prefix in Auth"
[restrictcalling2]: /guides/howto/img/restrictcalling2.png "Tech Prefix in Routing"
