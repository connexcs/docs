# Routing Global
**Management :material-menu-right: Routing Global**

**Routing Global** allows you to create routing templates that can be applied to multiple customers. This is ideal when all or multiple customers are using a repeatable configuration, either the same type of route or the same routing settings. When you need to apply a change to routing for multiple customers, you only need to update the template. 

## Setup
To setup **Routing Global** template, first create it then apply it to the customer account(s) using the **Tag** field. 

**Create the template**

2. Click the **`+`** to create a new template
3. Complete the fields (see [Customer Advanced Routing configuration](https://docs.connexcs.com/customer/routing/#configure-routing) for details)

    ![alt text][routing-global]

4. The **Tag** field is essentially the name of the template. When customer routing is setup using the template, the Tag will be visible in Customer > Edit > Config > Tags.
5. Select **`Save`**.

**Assign the template**

For each customer that needs the new template:

1. Navigate to Management > Customer and select the customer
2. Select **`Edit`** in the upper right corner
3. On the config tab, select the new template under **Tags**
4. Save the customer configuration. 


!!! info "Using Routing Global and Script Forge"
    Routing Global templates can't be used to set routing details with ScriptForge (Vars box). With appropriate design, these can be configured directly under Customer Routing.

[routing-global]: /misc/img/routing-global.png "Edit Global Routing"
