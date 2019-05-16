# Routing Strategy

A **Routing Strategy** lets you route calls for different providers through the routing engine using a specified set of rules. It helps with call routing, a necessary mechanic to match operations with business needs.

## Types of Routing Strategies
The following lists the types of routing strategies that can be employed with ConnexCS:

* **LCR** – Least Cost Routing configures parameters to the lowest cost-per-call.
* **Random** – Routing calls to any random route without any sequence.
* **Round Robin** - System will pick a call route according to a predetermined sequence.
* **Manual** - Manually decide how calls are routed.
* **Reverse LCR** – The most expensive route will be chosen first.
* **Tier Routing**  -  Tiers in routing strategy allows one selection per tier.
	Note that only one type at a time can be chosen from the available options.

To find **Route Strategy**:
1. From the Dashboard, select **Management** 
2. Click **Routing Strategy** from the drop down menu.

   ![alt text][routing-dashboard-new]

The Routing Strategy screen displays your current strategies in an alphabetical list, which is sorted between ascending and descending with the **Name** column. You can also sort them according to strategy type by clicking the **Strategy** column.


## Adding, Editing, and Deleting Routing Strategies
To add a new routing strategy:
1. Click the **`+`** button to add a new routing strategy.

   ![alt text][routing-strategy1]

2. Name the strategy.
3. Select the strategy type
4. Click the **`+`** button.
5. Select a card from the drop down list.
6. Click the **`Save`** button.

   ![alt text][routing-strategy2]
   ![alt text][routing-strategy3]

**Editing and Deleting Strategies
 
## Setting up Routing Strategy in Customer Account
To set up a routing strategy in a customer's account:
1. From the dashboard homescreen, select **Management** > **Customer**.
2. Select the customer account by clicking its name.

   ![alt text][routing-strategy4]

3. On the left side of the customer's card, select **Routing**.  The **Ingress Routing** screen opens.


   ![alt text][routing-strategy5]

4. Select the rate card you want to edit by clicking its name.  The **Edit Ingress Routing** screen opens.
5. Click **Strategy**, and then the blue **`+`** in the window that follows.
6. Select a strategy from the drop-down list.  Note that you can also add a prefix in this screen.

   ![alt text][routing-strategy6]

Using a Customer Rate Card, you can select between LCR, Random, Round Robin, and Reverse LCR.
This allows you to change the default behaviour of a card, but be advised that conflicting parameters set in a routing strategy will override it.

**Editing and Deleting Routing Strategies**

* Editing a Routing Strategy follows the same procedure as adding a new one, except you click on the strategies name to bring up the window where strategies can be changed.  You can also add cards to your strategies in this screen by clicking the **`+`** button at the bottom of the edit window.  Click the **`Save`** button will update your changes.  
* To delete a routing strategy, select its row from the Routing Strategy screen, and click the **`Delete`** button (the trash bin icon).


   ![alt text][routing-strategy10]

## Blocking Calls

Routing Strategy can also be used to block calls. 

1. Click **Management** > **Customer**.

![alt text][Blocking-Calls-1]

1. Click a customer **Name** > **Routing** > **Rate Card**
2. Under **Routing**, click **Strategy**.
3. Add a number to block, and change the Strategy to **Drop**.
4. Click **`Save`**.

![alt text][Blocking-Calls-2]

[routing-dashboard-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/86.png "routing-dashboard"

[routing-strategy1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/87.png "routing-strategy1"
[routing-strategy2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/88.png "routing-strategy2"
[routing-strategy3]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/89.png "routing-strategy3"
[routing-strategy4]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/90.png "routing-strategy4"
[routing-strategy5]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/91.png "routing-strategy5"
[routing-strategy6]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/92.png "routing-strategy6"
[routing-strategy7]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/93.png "routing-strategy7"
[routing-strategy8]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/94.png "routing-strategy8"
[routing-strategy9]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/95.png "routing-strategy9"
[routing-strategy10]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/96.png "routing-strategy10"


[blocking-calls-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/97.png "Blocking-Calls-1"
[blocking-calls-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/98.png "Blocking-Calls-2"


[edit-routing]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/edit-routing.png "edit-routing"
[routing-strategy]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/routing-strategy.png "routing-strategy"
[edit-routing-strategy]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/edit-routing-strategy.png "edit-routing-strategy"