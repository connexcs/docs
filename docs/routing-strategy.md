# Routing Strategy
**Management :material-menu-right: Routing Strategy**

A **Routing Strategy** lets you route calls for different providers through the routing engine using a specified set of rules. It helps with call routing, a necessary mechanic to match operations with business needs. The **Routing Strategy** screen, located under **Management**, displays existing strategies in an alphabetical list. 

## Types of Routing Strategies
There are several types of routing strategies that can be employed with ConnexCS:

| Strategy  | Description     |
|----------|-------------|
| **LCR** |    Least Cost Routing (LCR) configures parameters to the lowest cost-per-call. |
| **Random** |    Routing calls to any random route without any sequence, though you can add weighting. |
| **Round Robin** |    System will pick a call route according to a predetermined sequence. |
| **Manual** |    Manually decide how calls are routed.|
| **Reverse LCR** |    The most expensive route will be chosen first. |
| **Tier** |    Tiers in routing strategy allows one selection per tier. Several cards may be set to the same tier, |



## Configure Routing Strategy
Once a new **Routing Strategy** is created it must be assigned to a customer account. 

**Step 1: Add Routing Strategy**
To add a new routing strategy:

1. Click the :material-plus: button in the **Routing Strategy** screen.
2. Name the strategy.
3. Select the Strategy type (defined above). 

    ![alt text][routing-strategy2]   

4. Click the :material-plus: to add one or more row(s).
5. Select a card from the drop-down list.
6. Click the **`Save`** button.

    ![alt text][routing-strategy3]

**Step 2: Assign Routing Strategy to a Customer**
To set up a routing strategy in a customer's account:

1. Navigate to **Management :material-menu-right: Customer**.
2. Select the customer account.
3. Select **Routing** and then click on the desired Rate Card. The **Edit Ingress Routing** screen opens.
5. Click **Strategy**, and then the blue :material-plus: in the window that follows.
6. Select a strategy from the drop-down list.  Note that you can also add a prefix in this screen.

!!! info "Advanced Customer Routing"
    For additional settings under Customer Routing, see [**Advanced Routing Configuration**](https://staging--connexcs-docs.netlify.app/customer/routing/#advanced-routing-configuration). 

!!! warning "Default behavior with conflicting Strategies"
    You can set a Customer Rate Card to default to LCR, Random, Round Robin, and Reverse LCR. However, parameters set in a Routing Strategy will override the Customer Rate Card setting if they conflict.


## Blocking Calls
Routing Strategy can also be used to block calls. 

1. Click **Management :material-menu-right: Customer**.
1. Click a **[Customer Name] :material-menu-right: Routing :material-menu-right: Rate Card**
2. Under **Routing**, click **Strategy**.
3. Add the number to block then select **Drop** as the Strategy.
4. Click **`Save`**.

    ![alt text][routing-drop]

[routing-strategy2]: /misc/img/routing-1.png "Routing Strategy"
[routing-strategy3]: /misc/img/routing-2.png "Routing with Card"
[routing-drop]: /misc/img/routing-drop.png "Blocking Calls"
