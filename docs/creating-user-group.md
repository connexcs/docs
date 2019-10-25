# Creating a User Group 

You can create a user group in the ConnexCS Control Panel, when you want to assign a specific set of access permissions to the features in the Control Panel, to multiple users. Typically, you create user groups to assign permissions depending on the roles that the users play in your Carrier Service business model. 

For example, the Network Services Engineers need permissions to set up routing and not the customers' billing details. Similarly, the Billing team needs permissions to access and modify the customers' billing details and not to set up routing for customers' calls. 

!!! question "How does the permissions model work in the ConnexCS Control Panel?" 
    You should specify an email address you use often, because:
    
    * The permissions model in the ConnexCS Control Panel consists of Global permissions and Granular permissions.
    *The Global and Granular permissions are categorized as follows - Create, Read, Update, and Delete (CRUD) permissions for the features in the ConnexCS Control Panel.
    * The Granular permissions override and nullify all the Global permissions. For example, if you assign all of the CRUD permissions globally, and assign granular Read permissions to 3 features, the group has permissions to read data for only 3 features. 
    * If you do not assign granular permissions to a group, the group has permissions to use all features in the ConnexCS Control Panel, depending on the level of global permissions (CRUD). For example, if you assign only Create and Read permissions globally, the group has permissions to create and read data for all features.

How does the permissions model work in the ConnexCS Control Panel?
The permissions model in the ConnexCS Control Panel consists of Global permissions and Granular permissions.
The Global and Granular permissions are categorized as follows - Create, Read, Update, and Delete (CRUD) permissions for the features in the ConnexCS Control Panel.
The Granular permissions override and nullify all the Global permissions. For example, if you assign all of the CRUD permissions globally, and assign granular Read permissions to 3 features, the group has permissions to read data for only 3 features.
If you do not assign granular permissions to a group, the group has permissions to use all features in the ConnexCS Control Panel, depending on the level of global permissions (CRUD). For example, if you assign only Create and Read permissions globally, the group has permissions to create and read data for all features.
