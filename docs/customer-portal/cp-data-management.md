# Database

The **Database** allows you to create custom persistent data storage. A datastore can be specific to a single customer or global (used with any customer).

You can use **Database** for activities like checking list of numbers, caching external lookups, or creating stateful applications that provide users a set number of free minutes per month.

## Steps to create a Database

1. Login to your **Control Panel**.
2. Click on **IDE** :material-menu-right: +.
3. Select **Database**.

<img src= "/customer-portal/img/app_database.png" width="400">

4.Under the **Basic** Tab Write the **Name** of the database you wish to create.

5.Select the **Customer** you want to create the database for under the **Basic** Tab.

6.Select from the **Dataset Type** which are the preset data storage options. The two options are:

+ **Key / Value** - Contains a basic Key / Value Storage.
+ **Leadset** - Contains the most common fields when using a datastore for customer / campaign data which you can use with dialers.

<img src="/developers/img/db2.png" width="300">

7.Next to the **Basic** Tab is the **SQL Table Schema**. This allows you to add additional fields to leadset, change order, remove a field. You can also select it's **Type** like integer, string, double, float etc.

<img src="/developers/img/db3.png" width="400">

8.Click on `Save` to create the database.
