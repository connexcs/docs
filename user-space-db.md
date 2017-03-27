# Table of Contents

* [Table of Contents](#table-of-contents)
* [User Space Database](#user-space-database)
    * [Adding New User Space Database](#adding-new-user-space-database)
    * [Refresh the List](#refresh-the-list)
    * [Deleting the Items](#deleting-the-items)
    * [Edit the Details](#edit-the-details)
    * [Search Text Fields](#search-text-fields)
 


# User Space Database

A user database is an flexible datastore which has multiple use cases mainly used in allocations which you can build using ScriptForge. It is also available in 3 different backends each with their own advantages and disadvantages

There are 3 different types of datastore accessible.
1. High Capacity - This is a key-value pair store which uses eventual consistancy to replicate between zones. This is ideally used for list of numbers for example a DNC list. It should not be used for counters or very high speed writes.
2. High Speed - This operates as a caching layer is exceptionally fast and is also eventually consistent between zones. It should be considered ephemeral and used like a cache.
3. Highly Consistant - This datastore benefits from a global truth, it is fast at reads slower on updates and is not designed to hold large quantities of data (< 10,000 records)
When you create your datastore you can specify what type of datastore will be created.
Some examples of where datastore can be used.
Checking a list of numbers (#1), caching external lookups (#2), or creating a stateful application which could allow users X amount of free minutes per month.

This tutorial will guide how to manage User Space Database. You can go to the *Setup* from the left pane and click on the **User Space Database**, as highlighted in the image below:

![alt text][user-space-img-1]

You can add a new database and you can also refresh the lists in just one click.

## Adding New User Space Database

A new user space database can be added by following simple steps:

1. Click on the **Add New** button.
2.	Pop up will show up.

![alt text][user-space-img-2]

3.	Fill out the details of the dialogue box.
4.	Click **Save** once the details have been entered.

A new space will now be added.

## Refresh the List

The list can be refreshed, if needed, by simply pressing the *Refresh* button.

## Deleting the Items

To delete an item from the list:

1. Select any name from the *Area* column.
2. Click the delete icon, which is right next to the *Refresh* button.

## Edit the Details

To edit the details of any item, do the following:

1. Click on name of the *Area* column that needs to be updated.
2. Pop up will appear. Edit the details in the dialog box.
3. Click **Save**, once the details have been edited.

## Search Text Fields

You can search the *Area* and *Key* from the given search text fields.

Following image depicts both search text fields.

![alt text][user-space-img-3]

[user-space-img-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/user-space-img-1.png "user-space-img-1"
[user-space-img-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/user-space-img-2.png "user-space-img-2"
[user-space-img-3]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/user-space-img-3.png "user-space-img-3"
