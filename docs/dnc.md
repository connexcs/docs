# Do Not Call Lists

In today's society, all modern call carriers should recognise and honor **Do Not Call Lists (DNC).**

Calling numbers on these lists can result in costly fines and prosecutions.

Use Script Forge to manage these calls by adding the numbers to the system. If you dial a number on the list, the caller will receive an alert that the number is on the DNC list and the call won't get completed.

## Do Not Call Check

**Step 1: Setup the Database**

1. Navigate to **Developer :material-menu-right: Database**
2. Click **:material-plus:**.
3. Enter the **Name**.
4. Select the **Customer**.
5. Select **Dataset Type**.
6. Click **Save**.

    ![alt text][dnc-3]

**Step 2: Configure Script Forge**

1. Navigate to **Developer :material-menu-right: Script Forge**
2. Add the Script **Name**.
3. Select `App` for the **Type**.
4. Click **Save**.
5. Click the newly created App.
6. Add the JavaScript code [**dnc-add.js**](https://github.com/connexcs/scriptforge-examples/blob/master/dnc-check.js).
7. Click the green arrow to `Save and Run`.

!!! info "More on Script Forge"
    See [**Script Forge**](https://docs.connexcs.com/developers/scriptforge/) in our documentation for additional details on using Script Forge.

**Step 3: Add script to Customer**

1. Navigate to **Customer :material-menu-right: [Customer Name] :material-menu-right: Edit :material-menu-right: Routing :material-menu-right: Ingress Routing**
2. On the **Script Forge** tab, enter the following under **Vars**:

    ```bash
    [dnc]
    db="name_from_step1"
    ```

3. Click **Save**.

## Add individual customers to DNC

Add the following to Script Forge:

1. Under **Developer :material-menu-right: Script Forge**
2. Add the Script **Name**.
3. Select `App` for the **Type**.
4. Slick **Save**.
5. Click on the newly created App.
6. Add the JavaScript code [**dnc-add.js**](https://github.com/connexcs/scriptforge-examples/blob/master/dnc-add.js).
7. Click the green arrow to `Save and Run`.

[dnc-3]: /misc/img/dnc-3.png "DNC-3"
