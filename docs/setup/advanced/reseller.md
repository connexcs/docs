# Reseller Account
**Setup :material-menu-right: Advanced :material-menu-right: Reseller Account**

ConnexCS offers the **Reseller Account** functionality for you as a carrier to resell your services via a reseller or agent.

!!! danger "Alpha Feature"
    Reseller function is *Alpha*, it's not intended for production usage and has limited documentation.

## Concept / Design

ConnexCS already has a robust granular permissions system. The reseller functionality builds on that.

Resellers will log in to the same control panel as you, but they only have limited access to it. They will also have affiliation with customers and rate cards.

**Master mode (non-reseller)** - A provider card represents the cards of your upstream carriers and a customer card represents the cards that you give to your customers.
You can assign your reseller a customer card. A reseller may have many customer cards assigned to them.

**Reseller mode** - A customer card assigned to the reseller becomes a provider card, which is then used to generate their own customer cards.

!!! danger "Moving Reseller accounts"
    Moving customers between reseller accounts is NOT recommended as this may result in unexpected billing behaviour.
	
## Create Reseller Account and User

!!! warning "Verify reseller permissions"
    ALWAYS login to a reseller account yourself to check the visibility of access you have given them. At present, this is NOT a production ready feature. So, it's at your responsibility to use it.

1. **Create a Reseller Group** - Go to **Setup :material-menu-right: Settings :material-menu-right: User :material-menu-right: Groups :material-plus: Create Default Reseller**. This creates the new group with *default permissions*, which you can modify as needed. 
2. **Add Reseller Account** - Go to **Setup :material-menu-right: Advanced :material-menu-right: Reseller Account :material-plus:**. Enter the company Name (a reseller company may have more than one login) and Email. Click **`Save`**.
3. **Create a Reseller User** - Click **`Users`** from the newly added account and then click **:material-plus:**. Select the desired Group, either to match the new Reseller Group or an older one.
4. **Reseller Login** - Your reseller uses the Email and Password defined in the Reseller User to login to their account.

!!! danger "Potential security risk"
    If you fail to select a group, it will give reseller unlimited access to your master account.
