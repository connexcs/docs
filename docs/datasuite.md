# Data Suite

ConnexCS's Data Management Suite helps you manage, organize, and optimize your data throughout its lifecycle.

Our suite  includes software solutions for data collection, storage, manipulation, editing, modify, processing, analysis, governance, and security.

It will enable your businesses to handle large amounts of structured and unstructured data efficiently, ensuring that data is accessible, accurate, and secure.

What our Data Suite offers?

1. Data Integration
2. Data Storage
3. Data Governance
4. Data Security and Privacy
5. Data Analytics and Reporting
6. Data Archiving

## Steps to use Data Management Suite

1. Login to the Control Panel and click on **Data Suite**.
2. Three options are available: **New Workspace**, **Load Workspace** and **Bulk Upload**.
3. **New Workspace**: Allows you to manage and analyse your data in a new workspace.
4. **Load Workspace**: Loads your existing workspace and allows you to continue where your last left.
5. **Bulk Upload**: Uploads a huge chunk of data to a remote table.

<img src= "/misc/img/ds.png">

### New Workspace

You can create your workspace via three methods:

1. Uploading a **File**.
2. Enter a **URL**.
3. Manually enter the content via **Text** option.

<img src= "/misc/img/ds1.png">

#### Uploading a File

1. Drop a file or click to upload. A window will appear as shown below.
<img src= "/misc/img/ds2.png">

2. **File Functions**

      * **File**:

        <img src= "/misc/img/ds3.png" width="200">

        + **New Workspace**: Add a new workspace.
        + **Load Workspace**: Upload a new workspace to an existing workspace.
        + **Import Table**: Insert a table from an external source to an existing workspace.
        + **Download Workspace**: Allows you to download the workspace in the `json` format.

* **Drag & Drop a .csv file here or Browse**:

<img src= "/misc/img/ds4.png">

* **Explore Tables**:

    <img src= "/misc/img/ds5.png">

    + **Tables:**
          
        + **Add Table**: Add a new table to an existing workspace.
        + **Map Table Columns**: Allows you to upload the data.
        + **Mapping Target Table**: You can select the destination (**CLI**, **Contact**, **Customer**, **DID**, **SIP User Auth**) to upload the selected data.
        + **Refresh** any changed or modified entries inside the table.
        + **Upload All To Server** saves the table entries or modified table entries to the server.
        + **Continue To Modify**: Allows to edit/modify the table values via queries.
        + **Delete**: Allows you to delete the existing table.

!!! Note "You can now edit the entries inside the table itself."

+   **Queries:**
      + **Add Table**: Add a new query for the table.
      + **Delete**: Allows you to delete the required query.

* **Query Editor**: It's an interface where you can  write, edit, and execute queries against a database or data source. It's typically part of a larger data management or analytics platform, and it allows you to interact with data by writing commands in query languages.

<img src= "/misc/img/ds6.png">

+ **Other options**:
    + **Run**: Allows you to execute the query.
    + **Toggle Console**: Allows you to open or close the console window.
    + **Query History**: It allows you to view log or record of previously executed queries.

<img src= "/misc/img/ds7.png" width="400">

* **Settings**:
<img src= "/misc/img/ds8.png" width="200">

  * **Help**: Directs you to our documentation website.
  * **Export Query Results to CSV**
  * **Export Query Results to JSON**
  * **Export Query Results to Parquet**

#### Uploading via URL

1.Enter the URL in the CSV format and hit the `Upload` button.

<img src= "/misc/img/ds9.png">

2.After clicking `Run` a window will appear as shown below.

<img src= "/misc/img/ds10.png">

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

### Load Workspace

1. Upload the workspace ONLY in the `.json` format.
2. Click on `Run` to see the output.

<img src= "/misc/img/ds13.png">

### Bulk Upload

1.Upload your data via **File**, **URL** or by entering the **Text**.

2.Click on `Upload`. A window will appear as shown below:

<img src= "/misc/img/ds14.png">

3.**Mapping Target Table**: You can select the destination to upload the selected data like **CLI**, **Contact**, **Customer**, **DID**, **SIP User Auth**.

4.**Continue to Modify**: Allows to edit/modify the table values via queries.

5.**Upload All to Server**: saves the table entries or modified table entries to the server.

!!! Example "Query Examples"
