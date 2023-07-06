# Database

**Developer :material-menu-right: Database**

The **Database** allows you to create custom persistent data storage. A datastore can be specific to a single customer or global (used with any customer).

The **Database** is used for activities like checking list of numbers, caching external lookups, or creating stateful applications that provide users a set number of free minutes per month.

## Steps to create a Database

1. Login to your **Control Panel**.
2. Click on **Developer** > **Database**.
3. Click on blue `+`
   <img src="/developers/img/db1.png">

4. Under the **Basic** Tab Write the **Name** of the databae you wish to create.
5. Select the **Customer** you want to create the database for under the **Basic** Tab.
6. Select from the **Dataset Type** which are the preset data storage options.The two options are:

      + **Key / Value** - Contains a basic Key / Value Storage.
      + + **Lead Set** - Contains the most common fields when using a datastore for customer / campaign data which are used with dialers.

<img src="/developers/img/db2.png" width="460">


7. Next to the **Basic** Tab is the **SQL Table Schema**. This allows you to add additional fields apart from the **Leadset**. You can also select it's **Type** like integer, string, double, float etc.

<img src="/developers/img/db3.png" width="460">


8. Click on `Save` to finally create the database.

## Bulk Upload

You can bulk upload data and bulk delete data from the datastore, both from the customer portal and the control panel.

!!! important
	Bulk Operations aren't audited.


## SQL Query

The **SQL Query** option allows you to run a query on the database you wish.

Click on `Run` for query search.

<img src="/developers/img/db4.png">