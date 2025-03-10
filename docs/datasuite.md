# Data Suite

ConnexCS's Data Management Suite helps you manage, organize, and optimize your data throughout its lifecycle.

Our suite  includes software solutions for data collection, processing, and analysis.

It will enable your businesses to handle large amounts of structured and unstructured data efficiently, ensuring that data is accessible, accurate, and secure.

What our Data Suite offers?

1. Data Management
2. Bulk Upload
3. Data Analyses
4. Remote Query

## Steps to use Data Management Suite

### Step 1: Login

Login to the Control Panel and click on **Data Suite**.

### Step 2: Workspace

Four options are available: **New Workspace**, **Load Workspace**, **Bulk Upload** and **Remote Query**.

1. **New Workspace**: Allows you to manage and analyse your data in a new workspace.
2. **Load Workspace**: Loads your existing workspace and allows you to continue where your last left.
3. **Bulk Upload**: Uploads a huge chunk of data to a remote table.
4. **Remote Query**: Allows directly querying remote tables.

<img src= "/misc/img/dms1.png">

!!! Note "Important Note"
    Upload the workspace ONLY in the `.json` format in **Load Workspace**.

### Step 3: Use any of the above 4 options for Data Manageement

#### New Workspace

**Upload Data** (New Workspace, Load Workspace, Bulk Upload): You can create your workspace via three methods:

1. Uploading a **File**.
2. Enter a **URL**.
3. Manually enter the content via **Text** option.

<img src= "/misc/img/dms2.png">

#### Uploading a File

1. Drop a file or click to upload. A window will appear as shown below.

<img src= "/misc/img/ds2.png">

#### Uploading via URL

1. Enter the URL in the CSV format and hit the `Upload` button. <img src= "/misc/img/ds9.png">

2. After clicking `Run` a window will appear as shown below <img src= "/misc/img/ds10.png">

#### Uploading via Text

1.Enter the text in the following format:

```
Column 1,Column 2,Column 3,Column 4
1-1,1-2,1-3,1-4
2-1,2-2,2-3,2-4
3-1,3-2,3-3,3-4
4,5,6,7
```

<img src= "/misc/img/ds11.png">

2.Click on `Upload`.

3.After clicking `Run` a window will appear as shown below.

<img src= "/misc/img/ds12.png">

### Step 4: Edit/Modify/Analyse Data

1.**File**

<img src= "/misc/img/ds31.png" width="200">

+ **New Workspace**: Add a new workspace.
+ **Load Workspace**: Upload a new workspace to an existing workspace.
+ **New Server Side Query**:
    + New Query: Start a new SQL query.
    + Load Query: Apply a previously defined SQL query. 
+ **Import Table**: Insert a table from an external source to an existing workspace.
+ **Download Workspace**: Allows you to download the workspace in the `json` format.

2.**Drag & Drop a .csv file here or Browse**: <img src= "/misc/img/ds4.png">

3.**Explore Tables**:

<img src= "/misc/img/ds51.png" width="400">

+ **Tables**:
    + **Add Table**: Add a new table to an existing workspace.
    + **Map Table Columns**: Allows you to upload the data.
    + **Mapping Target Table**: You can select the destination (**CLI**, **Contact**, **Customer**, **DID**, **SIP User Auth**) to upload the selected data.
    + **Refresh** any changed or modified entries inside the table.
    + **Upload All To Server** saves the table entries or modified table entries to the server.
    + **Continue To Modify**: Allows to edit/modify the table values via queries.
    + **Delete**: Allows you to delete the existing table.

!!! Note "You can now edit the entries inside the table itself."

+ **Queries**:
    + **Add Table**: Add a new query for the table.
    + **Delete**: Allows you to delete the required query.
  
+ **Server Side Queries**:
  It appears when you select **Load Query**.
  A server-side query is a request that you send to a database server to fetch or process information directly on the server.
  Instead of doing the work (like filtering or calculating data) on your own computer or app (the "client"), you let the powerful server handle it. Once the server finishes, it sends you back only the results you need.

+ **Query Editor**: It's an interface where you can  write, edit, and execute queries against a database or data source. It's typically part of a larger data management or analytics platform, and it allows you to interact with data by writing commands in query languages.

<img src= "/misc/img/ds6.png">

+ **Other options**:
    + **Run**: Allows you to execute the query.
    + **Toggle Console**: Allows you to open or close the console window.
    + **Query History**: It allows you to view log or record of previously executed queries.

<img src= "/misc/img/ds7.png" width="300">

+ **Settings**: <br><img src= "/misc/img/ds8.png" width="200"></br>

    * **Help**: Directs you to our documentation website.
    * **Export Query Results to CSV**
    * **Export Query Results to JSON**
    * **Export Query Results to Parquet**

#### Bulk Upload

1.Upload your data via **File**, **URL** or by entering the **Text**.

2.Click on `Upload`. A window will appear as shown below:

<img src= "/misc/img/ds14.png">

3.**Mapping Target Table**: You can select the destination to upload the selected data like **CLI**, **Contact**, **Customer**, **DID**, **SIP User Auth**.

4.**Continue to Modify**: Allows to edit/modify the table values via queries.

5.**Upload All to Server**: saves the table entries or modified table entries to the server.

!!! Example "Query Examples"
    |**Query Name**|**Query Syntax**|**Output**|
    |--------------|----------------|----------|
    |**Select**|```SELECT * FROM 'Example'```|<img src= "/misc/img/ds15.png">|
    |**Update**|```UPDATE 'Example' SET Col2 = '4' WHERE Col2 = '97405'```|<img src= "/misc/img/ds16.png">
    |**Delete**|```DELETE FROM 'Example' WHERE Col2 = '4'```|<img src= "/misc/img/ds17.png">|

#### Server Side Querying

Upload your data follow the steps mentioned in [Step 4](https://bani-41024--connexcs-docs.netlify.app/datasuite/#step-4-editmodifyanalyse-data)