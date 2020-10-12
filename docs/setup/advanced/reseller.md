# Resellers
Setup :material-menu-right: Advanced :material-menu-right: Reseller

!!! danger "Alpha Feature"
	Reseller function is *Alpha*, it is not intended for production usage and documentation is limited.
	
ConnexCS offers the **Reseller Account** to provide functionality for you as a carrier to resell your services via a reseller or agent.

## Concept / Design

ConnexCS already has a robust granular permissions system. The reseller functionality builds on that.

Resellers will login to the same control panel that you login to, but are effectively a limited user. They will also have affiliation with customers and rate cards

**Master mode (non-reseller)** - A provider card represents the cards of your upstream carriers and a customer card represents the cards that you give to your customers.
You can assign your reseller a customer card. A reseller may have multiple customer cards assigned to them.

**Reseller mode** - A customer card assigned to the reseller becomes a provider card, which is then used to generate customer cards of their own.

!!! danger "Moving Reseller accounts"
    Customers should NOT be moved between resellers accounts as it can create unpredicatable billing behaviour.
	
## Create Reseller Account and User

!!! warning "Verify reseller permissions"
    ALWAYS login to a reseller account yourself to check visibility over what you have allowed them to see. This is NOT currently a production ready feature so it is at your responsibility whether to use it.

1. **Create a Reseller Group** - Go to Setup :material-menu-right: Settings :material-menu-right: User :material-menu-right: Groups :material-plus: Create Default Reseller. This creates the new group with *default permissions* which may be modified as needed. 
2. **Add Reseller Account** - Go to Setup :material-menu-right: Advanced :material-menu-right: Reseller Account and click the **`+`**. Enter the company Name (a reseller company may have more than one login) and Email. Click **`Save`**.
3. **Create a Reseller User** - Click **`Users`** from the newly added account then click **`+`**. The desired Group must be selected, either to match the new Reseller Group or an older one.
5. **Reseller Login** - Your reseller uses the Email and Password defined in the Reseller User to login to their account.

!!! danger "Potential security risk"
    Failure to select a group will give reseller unlimited access to your master account.
