# Query Builder

---
**Document Metadata** <br>**Category**: Applications Platform / Query Builder</br>
**Audience**: Developers, Data Engineers, Technical Integrators
<br>**Difficulty**: Intermediate to Advanced</br>
**Time Required**: Approximately 20–30 minutes <br>**Prerequisites**: Access to the ConnexCS Apps Platform IDE with permission to create Query Builder jobs, basic familiarity with SQL or structured query logic, understanding of your data-schema (database/table names, fields) </br>
**Related Topics**: [Apps Architecture – App Structure](https://docs.connexcs.com/apps/architecture/app/) , [Databases – Custom Persistent Storage](https://docs.connexcs.com/apps/architecture/database/)
<br>**Next Steps**: Create Query in IDE → select App/visibility → write and test SQL → use G3 for time-series data → save/share. </br>

---

## Introduction

A **Query builder** is a tool or library that helps developers construct database queries in a more intuitive and structured way, often without requiring direct knowledge of the query language (like SQL).

It serves as an abstraction layer between the developer and the database.

Common use cases include: Database Administration Tools, Web Application, Report Generation etc.

## How to use Query Builder?

1. Login to your account.

2. Navigate to **IDE** :material-menu-right: `+` sign :material-menu-right: **Query Builder**.

<img src= "/apps/img/query1.png" width ="500" style="border: 2px solid #4472C4; border-radius: 8px;">

3.Select the App and enter the domain where the App will be visible and accessible.
4.Click `Save`.

<img src= "/apps/img/query21.png" width="350" style="border: 2px solid #4472C4; border-radius: 8px;">

5.The created Query will be visible on the IDE panel under **Query Builder** tab.

6.Click on your created **Query**.

<img src= "/apps/img/query3.png" width="350" style="border: 2px solid #4472C4; border-radius: 8px;">

7.Enter the SQL query code.

<img src= "/apps/img/query4.png" style="border: 2px solid #4472C4; border-radius: 8px;">

8.Click on `Save` and then `Run`. It will display a query output.

<img src= "/apps/img/query5.png" style="border: 2px solid #4472C4; border-radius: 8px;">

9.You can `Run` and `Save` the code, `Toggle Console`, `Preview (errors)`, `Request Cancellation` for cancelling any ongoing requests, for example taking longer to execute, `Settings` you can edit, Set Vars, Copy file ID, Copy UUID using Settings.

<img src= "/apps/img/sc.png" width= "350" style="border: 2px solid #4472C4; border-radius: 8px;">

### G3 Query Builder

When creating a **query**, you can select the **data source** as **G3**, which is helpful when you intend to visualize the data as a graph.

The `start_dat`e feature facilitates specifying time ranges using natural language parsing in JavaScript.

`start_date` is a natural language date parser in Javascript. It can extract data from any provided text and handle the majority of date/time formats.

1. Today, Tomorrow, Yesterday, Last Friday, etc
2. 1 January 2013 - 9 May August 2013
3. This Tuesday from 3:00 - 6.00
4. 7 days ago
5. 4 weeks from now
6. Sun Aug 7 2013 18:40:39 UTC/GMT +5:30 hours (IST)
7. 2024-11-30T08:15:30-05:30

|Normal SQL Query|G3 Query|
|----------------|--------|
|`from `cdr`.`cdr` where `dt` >= DATE_SUB(NOW(), INTERVAL 30 DAY)`|start_date: 7 days ago|

You can also put a default value of the `start_date` by making it a variable using **Set Vars**.

For example,

```js linenums="1"
start_date: 7 days ago // G3 query
```

```js linenums="1"
start_date: :start_date // making it a variable using Set Vars
```

You can put any value in the Vars field, it will be treated as a default value when you use the above code.

<img src= "/apps/img/g31.png" width="250" style="border: 2px solid #4472C4; border-radius: 8px;">

<img src= "/apps/img/g32.png" style="border: 2px solid #4472C4; border-radius: 8px;">
