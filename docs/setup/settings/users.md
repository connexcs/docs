# User

**Setup :material-menu-right: Settings :material-menu-right: User**

For more efficient management of access to the ConnexCS Control Panel, Create and assign **Users** and **Groups** based on various levels of permission.

Groups manage the Permissions, and at a Granular level for every endpoint in the system.

## Users

To add a new ConnexCS **User**, click :material-plus: in the **Users** section on the left.

  ***Field descriptions***

+ **Name:** The user's name.
  
+ **Groups (optional):**  Select one or more Group(s) to assign to the new user. This will define their permission levels.

    It's additive, meaning that if a User is in a Read-Only Group as well as a Group that has Edit permissions for a specific area, they will be able to make edits in that area.

    While a user can belong to multiple groups, managing a user with only one group is easier.

    See details below on creating Groups.

+ **Reseller Account (optional):** Used to restrict Resellers with several logins to an account.

    See below for details on creating Default Resellers.
  
+ **Password:** Enter the password they will use to access the Control Panel.

    We recommend agents set a default password and then guide the user to reset the password instantly after the first login. This best practise increases user account security by ensuring only the user knows the password.
  
+ **Role:** Select "User" or "Administrator." This is just for informational purposes, as permissions and access are still handled based on the assigned Group.

    The ConnexCS assigns the Administrator role if you don't assign any other role.
  
+ **Email:** The user's email address. It's recommended to use a used email address.

    **Note:** As a security measure, if you change the email address, it won't save the original password.
  
+ **Time Zone:** Select the User's time zone.
  
+ **IP Whitelist:** Specify the IP or range of IPs this user can use to connect to the ConnexCS Control Panel.

    They won't be able to log in from any other IP, so be careful with this setup. Specify IPs as follows:

    + Single IP address: **For example**, 1.1.1.1
    + Wildcard for IP addresses: **For example**, 1.1.1
    + Range of IP addresses in CIDR (Classless Inter-Domain Routing) format: **For example**, 1.1.1.0/31

+ **Shared Ticket:** If enabled, all Users in the account can view tickets created by this user based on the email address of this User.

After entering the information, click **`Save`**.

&emsp;![alt text][user]

!!! Note
    [Click here](https://cidr.xyz/) to view an interactive IP address and CIDR range visualizer.

!!! question "Why should you specify an email address that you use often?"

    * The email address is the username to log into the user account.
    * ConnexCS sends an email to the email address to verify that you own the email address.
    * ConnexCS sends notifications such as credit alerts and low balance alerts to that email address. 

!!! question "What if I forget my password?"
    You can reset your password on the ConnexCS Control Panel Login page.

    If you are unable to do so, contact the administrator who created your user account.

### Change User Password

You can change a user's password (used to log into the ConnexCS Control Panel) if the user has forgotten it.

To change the password, you don't need to know the user's current password.

To change a user's password:

1. Click the `Change Password` link to the right of the User.
2. In the **New Password** text box, enter the new password.
3. **Confirm** the password by entering the same password.
4. Click **`Save`**.

!!! Tip "Hover over the New Password text box to see the password requirements."

![alt text][password-rules]

!!! question "How should I inform the user about the password change?"
    When you change a user's password, ConnexCS doesn't send the new password to the user. You must email or text the new password to the user.

## Groups

Use a **Group** to assign a specific set of Control Panel access permissions to several users.

Typically, you create user groups to assign permissions depending on the roles that the users play in your Carrier Service business model.

!!! tip "Example Group Roles"
    Network Services Engineering needs permissions to set up routing but shouldn't have access to customer billing details.

    Alternately, the Billing team needs permissions to access and revise customer billing details but not to set up routing for customer calls.

**Step 1: Create a Group**

1. In the **Groups** section, click :material-plus:.
2. Enter a Group **Name** (**For example**, Engineering, Sales, etc).
3. Set **Default Permissions** for the group's global permissions: `Create`, `Update`, `Read`, and `Delete`. The default setting includes all four permissions.

    Click `X` to remove permission.
    To add permission, click the down arrow on the right.

4. Click **`Save`**. The new group's name is on the list.

**Step 2: Specify Group Permissions**

1. Click on the **Group** to view the "Add Group Permission" table. Click :material-plus: next to the table.
    + **Area:** Select the functional area of the Control Panel for the specific permission (**for example**, Customer, Carrier, Logging, ScriptForge, etc).
    + **Access:** Define the granular permissions for this area.

        You can select all four access options.
        If you don't select any option, then users in this Group will get "Access Denied" when they try to go to the area.

    + Set as many Area / Access permissions as needed.
    + Once finished, select **`Save`**.

    ![alt text][add-group-perm]

2. The new permissions are visible in the Add Group Permission table, with the following fields:
    + `Path`: the path to the functional Area's API.
    + `Access`: the level of permissions.
    + `Action`: allows you to Edit the Area and Access permissions.

3. Make sure you **`Save`** the Group with the new permissions.

    ![alt-text][group-perm]

!!! tip "Group Permission Access Exceptions"
    The permissions for the **Analytics** and **CDR** Areas are always `Access Denied` (no other permissions allowed).

    If you select **Breakout**, an "Allow Access" box appears.
    
    Deselect to set permissions to `Access Denied`; Select to set permissions to `Read Create`.

### Permissions Model

The ConnexCS permissions model consists of two levels:

+ Global (Default Permissions) set for the Group.
+ Granular (Add Group Permission) set for a specific Area of the ConnexCS Control Panel.

Level and access determine the permissions:

+ Create, Read, Update, and Delete (CRUD) are the categories for both Global and Granular access.
+ Granular permissions override and nullify all Global permissions.

    **For example**, if you assign CRUD permissions Globally, and assign Granular Read permissions to 3 features, the group will have Read-Only permissions for those 3 features.

+ If you don't assign Granular permissions to a group, the group has access to use all features in the ConnexCS Control Panel based on the level of Global permissions (CRUD).

    **For example**, if you assign only Create and Read permissions globally, the group has permissions to create and read data for all features.

### Default Reseller

This feature allows you to create a quick default set of permissions suitable for resellers.

Click on the **`Create Default Reseller`** to create a new Reseller Group.

You can create Multiple Reseller Groups and edit each group to match your business needs.  

!!! warning "Alpha Feature"
    The Default Reseller feature is still an Alpha Feature in testing; please use it with caution.

[user]: /setup/img/user.png "Add User" style="border: 2px solid #4472C4; border-radius: 8px;"
[add-group-perm]: /setup/img/add-group-perm.png "Add Group Permissions" style="border: 2px solid #4472C4; border-radius: 8px;"
[group-perm]: /setup/img/group-perm.png "Group Permission" style="border: 2px solid #4472C4; border-radius: 8px;"
[password-rules]: /setup/img/password-rules.png "password-rules" style="border: 2px solid #4472C4; border-radius: 8px;"
