# Table of Contents

* [Table of Contents](#table-of-contents)
* [Routing Strategy](#routing-strategy)
    * [Types of Routing Strategies](#types-of-routing-strategies)
    * [Adding New Routing Strategy](#adding-new-routing-strategy)
    * [Deleting the Routing Strategy](#deleting-the-routing-strategy)
    * [Edit the Routing Strategy](#edit-the-routing-strategy)
    * [Adding and Deleting Card](#adding-and-deleting-card)


# Routing Strategy

The **Routing Strategy** allows you to route calls of different providers through routing engine according to the routing strategy you set. Routing Strategy is an extremely useful feature which allows you to adopt the routing strategy which suits best to your business need.

## Types of Routing Strategies

**1. LCR** – Least Cost Route

**2. Random** – Routing calls to any random route without any sequence.

**3. Round Robin** - System will pick a route calls according to sequence you selected.
  
**4. Manual** - Manual pick by the selected route.
  
**5. Reverse LCR** – Most Expensive route will be picked first.

**6. Tier Routing**  -  "Tier" in routing strategy allows 1 selection per tier.

Example

1 [A,B,C]

2 [D,E]

3 [F,G,H]

First run may be A,E,G second one may be B,D,F. But never more than 1 from the same Tier would be allowed.

On the Dashboard, select **Management** and choose **"Routing Strategy"** from the drop down menu.

![alt text][routing-dashboard-new]

Users can set and manage their Routing Strategy by:
 
1. Adding New **Routing Strategy.**
2. Deleting the **Routing Strategy.**
3. Edit the **Routing Strategy.**

## Adding New Routing Strategy

Click on the **"+"** sign to add a new Routing Strategy.

1. Click on the **Add New** button.  

   ![alt text][routing-strategy2]

2. Name the Strategy.

![alt text][routing-strategy3]

3. Select the Strategy type

![alt text][routing-strategy4]

4. Click + 
5. Select the card from the drop down list.

![alt text][routing-strategy5]

6. Press **Save** button.

![alt text][routing-strategy6]

## Setting up Routing Strategy in Customer Account

1. Click on the customer account
2. Click on Routing
3. Click on the rate card name under Ingress Routing
4. Click + under Strategy & select the stratgy that you wish to assign.

## Deleting the Routing Strategy

If you need to you can delete the **Routing Strategy.**

1. Select the **Routing Strategy.** from the list.
2. Press **Delete** button which is on extreme right, next to **"+".**

## Edit the Routing Strategy
Users can edit the strategy by:

1. Click on the edit sign of the **Routing Strategy.** you want to edit from the list, highlighted in orange, in the image given below.  

![alt text][routing-strategy]

![alt text][edit-routing-strategy]

2. Edit the Strategy and press **"Save".**

## Adding and Deleting Card

You can add a card by clicking the **_"+"_** sign right under the Edit button. Click the **"Delete"** button next to it.

## Set Strategy Inside customer rate card

In a Customer Rate Card, it is possible to set a routing strategy. At the moment the functionility is basic, you can only select between LCR, Random, Round Robin, Reverse LCR.

This allows you to change the default behaviour of a card, it looses priority against routing strategy, if a rule is set in here routing strategy, it ignores anything set in customer card.

[routing-dashboard-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/routing-dashboard-new.png "routing-dashboard"

[edit-routing]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/edit-routing.png "edit-routing"

[routing-strategy]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/routing-strategy.png "routing-strategy"

[edit-routing-strategy]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/edit-routing-strategy.png "edit-routing-strategy"


[routing-strategy1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/routing-strategy1.png "routing-strategy1"
[routing-strategy2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/routing-strategy2.png "routing-strategy2"
[routing-strategy3]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/routing-strategy3.png "routing-strategy3"
[routing-strategy4]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/routing-strategy4.png "routing-strategy4"
[routing-strategy5]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/routing-strategy5.png "routing-strategy5"
[routing-strategy6]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/routing-strategy6.png "routing-strategy6"
