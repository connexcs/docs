# Form Builder
Developer :material-menu-right: Form Builder

**Form Builder** allows developers to create customized input forms on the ConnexCS Platform.

## Implementation Scenarios
**Form Builder** can be used in the following scenarios.

* **Customer Portal** - Displayed as a left menu item on the customer portal. This can be used to collect any information from the customer such as number porting requirements, support tickets, investigations, custom reporting, etc.
* **Customer Portal Call Report** - An integrated call reporting capability. On the customer portal, allows a customer to select 1 or more calls to report, after clicking to report selected calls, the form will appear.
* **Agent Preview Dialler** - You can design an interface for the agents to view when using the webphone with a campaign. This can be selected from the campaigns in the customer portal.

## Create Form

1. Enter a **Name** for the form (consider naming conventions for organizational purposes down the road).
2. Select the desired **Script Forge** script from the drop-down menu.
3. Use **Placement** to select where the form is deployed.
4. Drag the item from the left section to the grey area.

    ![alt text][edit-formbuilder]

5. Fill in the form and click **`Save`**.
6. Check the form appearance using the **`Preview`** button.

!!! example "Example: Number Porting"
    Create a form for port requests and set the Placement for the Customer Portal. Customers can then submit the port request, with all required information (including items like customer internal ticket number). Internally you can create a ticket with this request for the carrier.  

[edit-formbuilder]: /developers/img/edit-formbuilder.png "New Form"
