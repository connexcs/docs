# Database

The **Database** is a flexible user datastore with multiple use cases mainly used in allocations that you can build with ScriptForge. The **Database** can be used for activities such as checking a list of numbers, caching external lookups, or creating stateful applications that allow users a certain amount of free minutes per month. This is configured under **Developer** > **Database**. 


## Backend options
The Database is available in three (3) different backends, each with their own advantages and disadvantages:

1. **High Capacity** - This is a key-value pair store that uses eventual consistency to replicate between zones. Ideally, it is used for lists of numbers, such as DNC lists. It should not be used for counters or higher-speed writes.
2. **High Speed** - This operates as a caching layer, is exceptionally fast, and is also eventually consistent between zones. It should be considered ephemeral and used like a cache.
3. **Highly Consistent** - This datastore benefits from a global truth, it is fast at reads, slower on updates, and is not designed to hold large quantities of data (less than 10,000 records).

## Create new Database

1. Click the **`+`** button.
2. Select the `Customer` and `Dataset Type`.
3.	Click the **`Save`** button. 

![alt text][user-space-img-3]

## Refresh the list
Press the **`Refresh`** button to see an updated list of items. This is the best way to make sure you are working with the most recent sets of data.



[user-space-img-3]: /developers/img/187.png "user-space-img-3"
