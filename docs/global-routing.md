# Routing Global

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Routing / Global Routing Templates<br>
<strong>Audience</strong>: Administrators, Engineers, Network & Operations Team<br>
<strong>Difficulty</strong>: Intermediate to Advanced<br>
<strong>Time Required</strong>: Approximately 1–2 hours<br>
<strong>Prerequisites</strong>: Active ConnexCS account with Routing permissions; foundational knowledge of customer routing, tags, and routing strategies.<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/routing-strategy/">Routing Strategy</a>, <a href="https://docs.connexcs.com/routing/">Routing Overview</a><br>
<strong>Next Steps</strong>: Create a global routing template, assign a unique Tag to the template, apply the template to relevant customers using the Tag field in their customer Config, then monitor routing behavior and make template modifications as required.<br>

</details>

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
