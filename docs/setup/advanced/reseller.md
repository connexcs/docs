# Resellers
Setup :material-menu-right: Advanced :material-menu-right: Reseller

!!! danger
	Reseller function is *Alpha*, it is not intended for production usage and documentation is limited.
	
ConnexCS offers one level of reseller functionality. This is functionality for you as a carrier to resell your services via a reseller or agent.

## Concept / Design

ConnexCS already has a robust granular permissions system. The reseller functionality builds on that.

Resellers will login to the same control panel that you login to, but will be effectively be a limited user.
They will also have affiliation with customers and rate cards

!!! danger
	Customers should NOT be moved between resellers accounts as it can create unpredicatable billing behaviour.

In master mode (non-reseller) a provider card represents the cards of your upstream carriers and a customer card represents the cards that you give to your customers.
You can assign your reseller a customer card. A reseller may have multiple customer cards assigned to them.

In reseller mode a customer card assigned to them will become a provider card, they can then use that card to generate customer cards of their own.

## Getting Started

!!! danger
	ALWAYS login to a reseller account yourself to check visibility over what you have allowed them to see. This is NOT currently a production ready feature
	So it is your responsibility if you wish to use this.
	
1. Create a new Group by going to Setup :material-menu-right: Settings :material-menu-right: User :material-menu-right: Group :material-plus: Create Default Reseller
   This will create a new group with *default options*, you may need to modify this further.
2. Add a new Reseller Account. You will be entering the company name, a reseller company may have more than one login.
3. Add a User to your reseller account by clicking on *Users) from the newly added account.
4. Add a new user remembering to choose the Group correctly as the previously created reseller group.
5. Your reseller can then login and add users to their account.

!!! danger
	Not choosing the group will give reseller unlimited access to your master account.
