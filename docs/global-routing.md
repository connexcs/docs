# Routing Global

**Management :material-menu-right: Routing Global**

Use **Routing Global** to create routing templates that you can apply to several customers.

This is ideal when all or several customers are using a repeatable configuration, either the same kind of route or the same routing settings.

When you need to apply a change to routing for several customers, you only need to update the template.

## Create Global Routing

To setup a **Routing Global** template, first create it and then apply it to the customer account(s) using the **Tag** field.

**Step 1: Create the template**

1. Click **+** to create a new template.
2. For complete field descriptions, see [**Ingress Routing configuration**](https://docs.connexcs.com/customer/routing/#configure-routing).

    <img src= "/misc/img/routingglobal.png" width= "300" style="border: 2px solid #4472C4; border-radius: 8px;">

3. The **Tag** field is essentially the name of the template. When you use the template toset-up a customer, the Tag is visible in **Customer :material-menu-right: Edit :material-menu-right: Config :material-menu-right: Tags**.

    <img src= "/misc/img/tags.png" style="border: 2px solid #4472C4; border-radius: 8px;">

4. Select **`Save`**.

**Step 2: Assign the template**

For each customer that needs the new template:

1. Navigate to **Management :material-menu-right: Customer** and select the customer.
2. Select **`Edit`** in the upper right corner.
3. On the Config tab, select the new template under **Tags**.
4. Save the customer configuration.

!!! info "Using Routing Global and Script Forge"
    You can't use Routing Global templates to set routing details with ScriptForge (Vars box).

    With appropriate design, you can configure this directly under Customer Routing.

### Tags in Routing

Tags are labels applied to both routes and customers to simplify bulk administration.

+ **Key Functions**:

    + **Route Management**: A single route can be assigned to multiple customers by using tags.

    + **Customer Grouping**: Customers with the same tag will share the same global routing settings.

+ **Implementation**:

    + Tags are assigned in the rate card configuration.

    + Removing a tag from a route makes it unavailable for associated customers.

+ **Benefits**

    + **Simplifies Bulk Administration**: Manage multiple customers with a single routing configuration.

    + **Scalability**: Supports large-scale routing needs without individual customer setups.

    + **Consistency**: Ensures uniform pricing and routing logic across similar customer groups.

    + **Flexibility**: Tags allow quick modifications without altering individual customer settings.
