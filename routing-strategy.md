# Table of Contents

* [Table of Contents](#table-of-contents)
* [Routing Strategy](#routing-strategy)
    * [Types of Routing Strategies](#types-of-routing-strategies)
    * [Adding New Routing Strategy](#adding-new-routing-strategy)
    * [Deleting the Routing Strategy](#deleting-the-routing-strategy)
    * [Edit the Routing Strategy](#edit-the-routing-strategy)
    * [Adding and Deleting Card](#adding-and-deleting-card)
    * [Blocking Calls](#blocking-calls)

# Routing Strategy

The **Routing Strategy** allows you to route calls of different providers through the routing engine according to the routing strategy you set. Routing Strategy is an extremely useful feature which allows you to adopt call routing which suits best your business need.

## Types of Routing Strategies

**1. LCR** – Least Cost Route

**2. Random** – Routing calls to any random route without any sequence.

**3. Round Robin** - System will pick a call route according to the sequence you selected.
  
**4. Manual** - Manual pick by the selected route.
  
**5. Reverse LCR** – Most Expensive route will be chosen first.

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

   ![alt text][routing-strategy1]

2. Name the Strategy.
3. Select the Strategy type
4. Click + 
5. Select the card from the drop down list.
6. Press **Save** button.

   ![alt text][routing-strategy2]
   ![alt text][routing-strategy3]

 
## Setting up Routing Strategy in Customer Account

1. Click on the customer account

   ![alt text][routing-strategy4]

2. Click on Routing

   ![alt text][routing-strategy5]

3. Click on the rate card name under Ingress Routing
4. Click + under Strategy & select the stratgy that you wish to assign.

   ![alt text][routing-strategy6]

## Deleting the Routing Strategy

If you need to you can delete the **Routing Strategy.**

1. Select the **Routing Strategy.** from the list.
2. Press **Delete** button which is on extreme right, next to **"+".**

   ![alt text][routing-strategy10]

   ![alt text][routing-strategy11]

## Edit the Routing Strategy
Users can edit the strategy by:

1. Click on the edit sign of the **Routing Strategy.** you want to edit from the list, highlighted in orange, in the image given below. 
   ![alt text][routing-strategy12]
   ![alt text][routing-strategy13]
2. Edit the Strategy and press **"Save".**

## Adding and Deleting Card

You can add a card by clicking the **_"+"_** sign right under the Edit button. Click the **"Delete"** button next to it.

   ![alt text][routing-strategy14]

## Set Strategy Inside customer rate card

In a Customer Rate Card, it is possible to set a routing strategy. At the moment the functionility is basic, you can only select between LCR, Random, Round Robin, Reverse LCR.

This allows you to change the default behaviour of a card, it loses priority against routing strategy. If a rule is set in here routing strategy, it ignores anything set in customer card.

## Blocking Calls

It is possible with connex switch to block specific call using the Routing Strategy. Below are the steps

1. Click on Management> Customer

![alt text][Blocking-Calls-1]

2. Click on the customer Name> Routing> Rate Card

![alt text][Blocking-Calls-2]

3. Under Routing Strategy Click + & add the number that you wish to block and select to drop.

![alt text][Blocking-Calls-5]

4. Click Save

![alt text][Blocking-Calls-6]

[routing-dashboard-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/86.png "routing-dashboard"

[routing-strategy1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/87.png "routing-strategy1"
[routing-strategy2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/88.png "routing-strategy2"
[routing-strategy3]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/89.png "routing-strategy3"
[routing-strategy4]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/90.png "routing-strategy7"
[routing-strategy5]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/91.png "routing-strategy8"
[routing-strategy6]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/92.png "routing-strategy9"
[routing-strategy7]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/93.png "routing-strategy10"
[routing-strategy8]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/94.png "routing-strategy11"
[routing-strategy9]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/95.png "routing-strategy14"
[routing-strategy10]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/96.png "routing-strategy14"


[blocking-calls-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/97.png "Blocking-Calls-1"
[blocking-calls-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/98.png "Blocking-Calls-2"
[blocking-calls-5]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/recording-5.png "Blocking-Calls-5"
[blocking-calls-6]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/recording-6.png "Blocking-Calls-6"


[edit-routing]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/edit-routing.png "edit-routing"
[routing-strategy]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/routing-strategy.png "routing-strategy"
[edit-routing-strategy]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/edit-routing-strategy.png "edit-routing-strategy"

