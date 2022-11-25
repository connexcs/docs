# Routing Strategy

**Management :material-menu-right: Routing Strategy**

A **Routing Strategy** lets you route calls for different providers through the routing engine using a specified set of rules. It helps with call routing, a necessary mechanic to match operations with business needs. The **Routing Strategy** screen, located under **Management**, displays existing strategies in an alphabetical list.

## Types of Routing Strategies

With ConnexCS, several types of routing strategies are employed:

| Strategy  | Description     |
|----------|-------------|
| **LCR** |    Least Cost Routing (LCR) configures parameters to the lowest cost-per-call. |
| **Random** |    Routing calls to any random route without any sequence, though you can add weighting. |
| **Round Robin** |    System will pick a call route according to a predetermined sequence. |
| **Manual** |    Route calls manually as decided.|
| **Reverse LCR** |   First, the most expensive route is selected. |
| **Tier** |    Tiers in routing strategy allows one selection per tier. The same tier can be assigned for many cards. |

## Configure Routing Strategy

Once you create a new **Routing Strategy**, assign it to a customer account.

**Step 1: Add Routing Strategy**

1. In the **Routing Strategy** screen, click :material-plus:.
2. Name the strategy.
3. Select the Strategy type (as defined in Types of Routing Strategies section).

    ![alt text][routing-strategy2]

4. Click :material-plus: to add one or more row(s).
5. Select a card from the drop-down list.
6. Click **`Save`**.

    ![alt text][routing-strategy3]

**Step 2: Assign Routing Strategy to a Customer**

**1.** Navigate to **Management :material-menu-right: Customer**.

**2.** Select the customer account.

**3.** Select **Routing** and then click on the desired Rate Card. The **Edit Ingress Routing** screen opens.

**4.** Click **Strategy**, and then the blue :material-plus:.

**5.** Select a strategy from the drop-down list. Note that you can also add a prefix in this screen.

!!! info "Advanced Customer Routing"
    For more settings under Customer Routing, see [**Advanced Routing Configuration**](https://staging--connexcs-docs.netlify.app/customer/routing/#advanced-routing-configuration).

!!! warning "Default behavior with conflicting Strategies"
    You can set a Customer Rate Card to default to LCR, Random, Round Robin, and Reverse LCR. But, parameters set in a Routing Strategy will override the Customer Rate Card setting if they conflict.

## Blocking Calls

You can also block a call using routing strategy. To block a call follow the steps:

**1.** Click **Management :material-menu-right: Customer**.

**2.** Click a **[Customer Name] :material-menu-right: Routing :material-menu-right: Rate Card**.

**3.** In **Routing**, click **Strategy**.

**4.** Add the number to block and then select **Drop** as the Strategy.

**5.** Click **`Save`**.

    ![alt text][routing-drop]

[routing-strategy2]: /misc/img/routing-1.png "Routing Strategy"
[routing-strategy3]: /misc/img/routing-2.png "Routing with Card"
[routing-drop]: /misc/img/routing-drop.png "Blocking Calls"
