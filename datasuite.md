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
3. **New Workspace**: It allows you to manage and analyse your data in a new workspace.
4. **Load Workspace**: It loads your existing workspace and allows you to continue where your last left.
5. **Bulk Upload**: Uploads a huge chunk of data to a remote table.

<img src= "/img/ds.png">

### New Workspace

You can create your workspace via 3 methods:

1. Uploading a **File**.
2. Enter a **URL**.
3. Manually enter the content via **Text** option.

<img src= "/img/ds1">

#### Uploading a File

1. Drop a file or click to upload. A window will appear as shown below.
<img src= "/img/ds2">

2. **File Functions**

* **File**:

<img src= "/img/ds3">

  +   **New Workspace**: Add a new workspace.
  +   **Load Workspace**: Upload a new workspace to an existing workspace.
  +   **Import Table**: Insert a table from an external source to an existing workspace.
  +   **Download Workspace**: Allows you to download the workspace in the `json` format.

* **Drag & Drop a .csv file here or Browse**:

<img src= "/img/ds4">

* **Explore Tables**:

<img src= "/img/ds5">

+   **Tables:**
      + **Add Table**: Add a new table to an existing workspace.
      + **Map Table Columns**: Allows you to upload the data.
        + **Mapping Target Table**: You can select the destination (**CLI**, **Contact**, **Customer**, **DID**, **SIP User Auth**) to upload the selected data.
        + **Refresh** the entries inside the table.
        + **Upload All To Server** saves the table to the server.
        + **Continue To Modify**: 
      + **Delete**: Allows you to delete the existing table.

!!! Note "You can now edit the entries inside the table"

+   **Queries:**
      + **Add Table**: Add a new query for the table.
      + **Delete**: Allows you to delete the required query.

* **Query Editor**: It's an interface where you can  write, edit, and execute queries against a database or data source. It's typically part of a larger data management or analytics platform, and it allows you to interact with data by writing commands in query languages.

<img src= "/img/ds6">

+ **Other options**
![alt text](image-3.png)
  + **Run**: Allows you to execute the query.
  + **Toggle Console**: Allows you to open or close the console window.
  + **Query History**: It allows you to view log or record of previously executed queries.

<img src= "/img/ds7">

* **Settings**:
<img src= "/img/ds8">

  + **Help**: Directs you to our documentation website.
  + **Export Query Results to CSV**
  + **Export Query Results to JSON**
  + **Export Query Results to Parquet**

#### Uploading via URL

1. Enter the URL in the CSV format and hit the `Upload` button.

<img src= "/img/ds9">

2. After clicking `Run` a window will appear as shown below.

<img src= "/img/ds10">

#### Uploading via Text

1. Enter the text in the following format:

```
Column 1,Column 2,Column 3,Column 4
1-1,1-2,1-3,1-4
2-1,2-2,2-3,2-4
3-1,3-2,3-3,3-4
4,5,6,7
```

2. Click on `Upload`.

<img src= "/img/ds11">

3. After clicking `Run` a window will appear as shown below.

<img src= "/img/ds12">

### Load Workspace

1. Upload the workspace ONLY in the `.json` format.
2. Click on `Run` to see the output.

<img src= "/img/ds13">

### Bulk Upload

1. Upload your data via **File**, **URL** or by entering the **Text**.
2. Click on `Upload`. A window will appear as shown below

<img src= "/img/ds14">

1. You have capability to edit the entries inside table.
2. **Mapping Target Table**: You can select the destination to upload the selected data like **CLI**, **Contact**, **Customer**, **DID**, **SIP User Auth**.
3. **Continue to Modify**: Allows to edit/modify the table values via queries.
4. **Upload All to Server**: Upload the table entries or modified table entries to the server.

!!! Example "Query Examples"
