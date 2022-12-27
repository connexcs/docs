# Routing Global

**Management :material-menu-right: Routing Global**

Use **Routing Global** to create routing templates that you can apply to several customers.

This is ideal when all or several customers are using a repeatable configuration, either the same kind of route or the same routing settings.

When you need to apply a change to routing for several customers, you only need to update the template.

## Create Global Routing

To setup a **Routing Global** template, first create it and then apply it to the customer account(s) using the **Tag** field.

**Step 1: Create the template**

1.1. Click **+** to create a new template.

1.2. For complete field descriptions, see [**Ingress Routing configuration**](https://docs.connexcs.com/customer/routing/#configure-routing).

![global routing](/misc/img/routing-global.png)

1.3. The **Tag** field is essentially the name of the template. When you use the template toset-up a customer, the Tag is visible in **Customer :material-menu-right: Edit :material-menu-right: Config :material-menu-right: Tags**.
![tags](/misc/img/tags.png)

1.4. Select **`Save`**.

**Step 2: Assign the template**

For each customer that needs the new template:

2.1. Navigate to **Management :material-menu-right: Customer** and select the customer.

2.2. Select **`Edit`** in the upper right corner.

2.3. On the Config tab, select the new template under **Tags**.

2.4. Save the customer configuration.

!!! info "Using Routing Global and Script Forge"
    You can't use Routing Global templates to set routing details with ScriptForge (Vars box). 
    
    With appropriate design, you can configure this directly under Customer Routing.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTY1MzgxMDE1MCwxMjIwNjI0NTI1LDEzND
E1OTk2NTAsLTE5NTcwMzkxMiwxNTc3MzIxMTM1LDExMDUxODM1
MTIsLTQwNDAxNDEwMl19
-->