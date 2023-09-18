# Form Builder
**Developer :material-menu-right: Form Builder**

Developers can use **Form Builder** to create customized input forms on the ConnexCS control panels.

## Create Form
Click :material-plus: and complete the following fields:

+ **Name**: Enter a name for the form (consider naming conventions for organizational purposes).
+ **Script Forge**: Select the required script from the drop-down.
+ **Placement**: Find the location where the form is used (can select multiples).
    + `Customer Portal`- Displayed as a left menu item on the customer portal. You can use this to collect any information from the customer such as number porting requirements, support tickets, investigations, custom reporting, etc.
    + `Customer Portal Call Report`- An integrated call reporting capability. Customers can select one or more calls to report on the customer portal, a form appears after they click to report selected calls.
    + `Agent Preview Dialler`- You can design an interface for the agents to view when using Web Phone with a campaign. You can select this from the campaigns in the Customer Portal.
+ Drag the item from the left section to the grey area.

    ![alt text][edit-formbuilder]

+ Fill in the form and click **`Save`**.
+ Click **`Run`** to check the form appearance.

!!! example "Example: Number Porting"
    Create a form for port requests and set the Placement for the Customer Portal. Customers can then submit the port request, with all the required information (including items like customer internal ticket number). Internally, you can create a ticket with this request for the carrier.  

[edit-formbuilder]: /developers/img/edit-formbuilder.png "New Form"