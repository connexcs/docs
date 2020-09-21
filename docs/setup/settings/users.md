# Users
Creating and managing **Users** allows for more efficient access to the ConnexCS portal. This is done under **Setup**>**Settings**>**User**. You can see the list of users on the left of the page, and the list of groups on the right of the page.

## Create Users
To add a new **User**:

1. Click the **`+`** button in the **Users** section on the left.
2. Complete the User details:

* **Name** - the user's name.
* **Groups** (optional) - Select one or more Group(s) to be assigned to the new user. (See below for details on creating Groups.)
* **Reseller Account** (optional) - Used to restrict resellers. (See below for details on creating Default Resellers.)
* **Password** - Enter a password that the user must use, to log into the ConnexCS Control Panel. We recommend agents set a default password, then advise the user to reset the password immediately after logging in to the ConnexCS Control Panel for the first time. This best practice ensures that only the owner of the user account knows the password and increases user account security.
* **Role** - Select User or Administrator. If no role is assigned, the ConnexCS Control Panel assigns the role of Administrator. 
* **Email** - The user's email address. It is recommended this is an email address that is used often. 
* **Time Zone** - Select the User's time zone. 
* **IP Whitelist** - Specify the IP or range of IPs the user can use to connect to the ConnexCS Control Panel. They will not be able to login from any other IP, so be careful with this setup. The IP Whitelist is specified as follows:
	
    * Single IP address - Ex: 1.1.1.1
    * Wildcard for IP addresses - Ex: 1.1.1.
    * Range of IP address in the CIDR (Classless Inter-Domain Routing) format - Ex: 1.1.1.0/31
	
3. Once the details are entered, click the **`Save`** button.

!!! question "Why should you specify an email address that you use often?" 
    
    * The email address is the username to log into the user account.
    * The ConnexCS Control Panel sends an email to the email address, to verify that you own the email address.
    * The ConnexCS Control Panel sends notifications such as credit alerts and low balance alerts to that email address. 

!!! question "What if I forget my password?" 
    If you forget your password, reset your password on the ConnexCS Control Panel Login page. If you are unable to do so, contact the administrator who created your user account. 
    

## Create Group
Use a **Group** to assign a specific set of Control Panel access permissions to multiple users. Typically, you create user groups to assign permissions depending on the roles that the users play in your Carrier Service business model. 

For example, the Network Services Engineers need permissions to set up routing and but should not have access to the customers' billing details. Alternately, the Billing team needs permissions to access and modify the customers' billing details but not to set up routing for customers' calls. 

Step 1: Create Group

1. Click the **`+`** button in the **Groups** section on the right.
2. Enter a Group * **Name**.
3. Use **Default Permissions** to select the group's global permissions. The options available are: `Create`, `Update`, `Read`, and `Delete`. All 4 will be selected by default. Click the X to remove a permission. Click the down button on the right to add a permission. 
4. Click **`Save`**. The new Group will be listed. 

Step 2: Specify Group Permissions

1. Click on the Group to view the "Add Group Permission" table. Click the **`+`** next to the table. 
2. From the **`Area`** list, select the functional area of the ConnexCS Control Panel for the specific permission. 
3. **`Access`** defines the permissions you want to assign.
4. Select the desired Areas and their Access level as often as needed. 
5. Once finished, select **`Save`**.
6. The new permissions will be visible in the Add Group Permission table, with the following fields:
	
    * Path - the path to the functional area's API
    * Access - the level of permissions
    * Action - allows you to edit the Area and Access permissions

7. **`Save`** the new permissions.

!!! question "How does the permissions model work in the ConnexCS Control Panel?" 
    The permissions model in the ConnexCS Control Panel consists of Global permissions and Granular permissions.
    * The Global and Granular permissions are categorized as Create, Read, Update, and Delete (CRUD).
    * Granular permissions override and nullify all Global permissions. Ex: if you assign CRUD permissions globally, and assign granular Read permissions to 3 features, the group has permissions to read data for only 3 features. 
    * If you do not assign granular permissions to a group, the group has permissions to use all features in the ConnexCS Control Panel, depending on the level of global permissions (CRUD). For example, if you assign only Create and Read permissions globally, the group has permissions to create and read data for all features.

## Default Reseller
This feature allows you to create a quick default set of permissions suitable for resellers. These can be edited after creation to match your business needs. Simply click on the **`Create Default Reseller`** to create a new Reseller Group. Multiple Reseller Groups can be created. 

## Change User Password
You can change a user's password (used to log into the ConnexCS Control Panel) if the user has forgotten the password. To change the password, you do not need to know the user's current password.

To change a user's password:

1. Click the `Change Password` link on the right of the user.
2. In the **New Password** text box, enter the new password. Tip: Hover over the New Password text box to see the passwords requirements. 
    
    ![alt text][password-rules]
        
3. **Confirm** the password by entering the same password.
4. Click **`Save`**.

!!! question "How should I inform the user about the password change?" 
    When you change a user's password, the ConnexCS Control Panel does not send the new password to the user. You must email or text the new password to the user.

[password-rules]: /setup/img/password-rules.png "password-rules"
