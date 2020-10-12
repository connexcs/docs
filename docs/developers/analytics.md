# Analytics
Developer :material-menu-right: Analytics

The **Analytics** section is a powerful tool for gathering, manipulating, and displaying graphical and tabular data. You can view and modify a wide range of existing reports or create your own based on various data sources within the system as well as outside 3rd party systems. Data can also be run through Script Forge using processing techniques such as mapreduce and preProcess function. 

You can create custom reports to help identify your own key metrics. Here are some examples of what our customers have built:

* **Ticket Count** - Integration with a 3rd party ticket system and display how many tickets a particular customer has open.
* **FOREX** - Display FOREX data on the dashboard
* **603 / 604 Block Report** - Display the top CLI's that have been blocked per customer and per carrier.
* **CLI Stats** - Display stats per CLI
* **ISO Code Stats** - Display stats ISO Country.

## Field Explanations

**Path** - Select where the data will be displayed.

* **Customer:** Management :material-menu-right: Customer :material-menu-right: Stats
* **Carrier:** Management :material-menu-right: Carrier :material-menu-right: Stats
* **Dashboard:** Dashboard :material-menu-right: Displayed at the bottom
* **Route:** Management :material-menu-right: Customer :material-menu-right: Route Stats
* **Report:** Management :material-menu-right: Report :material-menu-right: Reports

**Section** - Allows you to group analytic components together when sharing the same name. This may often be collated together in the same tab.

**Title & Subtitle** - Displays title and subtitle information on the rendered graph / table.

**Output** - Graph or Table choose how you want to output to be rendered. You can select both which will of course display a graph and a table together.

**Graph Type** - The following graph types are supported.

   |Type|Description|
   |---|---|
   |Line|2 Axis of data, one can be temporal|
   |Bar|2 Axis of data, one can be temporal|
   |Area|2 Axis of data, one can be temporal|
   |Pie|1 Axis of data|
   |Scatter|2 Axis of data|
   |Radar|1 Axis of data|
   |Gague|1 Axis of data|

**Source** - There are multiple sources of data which can be used:

|Source|Description|
|---|---|
|Analytics|Big Data multi-vector querying. *Note: Recalcs won't affect this data, and it never should be used for accurate financials.*|
|G3|Single value time-series data.|
|RTP|RTCP information.|
|Breakout|Financially Accurate data available with limited query vectors.|
|ScriptForge|Custom ScriptForge datasource, can be used to combine other data sources or even import external data in real-time.|

**Fields** - What fields should be displayed in the Graph / Table. This changes per data source.

**Start Offset** - When there is NOT a data-selector on the page, the start offset will represent how far in the past the query will include.

**Interval** 

|Option|Description|
|---|---|
|AutoAutomatically choose an appropriate temporal resolution.|
|Collate|Collapse all the temporal data (EX: When selecting ACD, instead of having an axis for date/time, it will just display a single scalar value).|
|Others|Choose a resolution you wish to group the data into (EX: Selecting hour will display a unique value for each hour).|

**Collate / Group** - Choose how the data is to be grouped together. (EX:: Selecting "Customer" would mean that you would get a unique value for each customer.

**Limit** - How much collated data you wish to be displayed. Be careful not to include too many values.

**Order By** - Which column you wish to order the data by, this is useful in combination with limit, for example you can display the top 10 customers with the worst ACD.

**Width** - When the graph is rendered on a page with multiple graphs, choose how much of the page the graph takes up.

**Stacked** - When using a line, area or bar chart, each series of data will be plotted offset of the previous series (not from the 0 on that axis)

**Filter** - A filter is used to automatically filter the information that is displayed based on variables available from where the page is rendered. The format of a filter changes depending on the data source. Select a data source below to view the example:

=== "g3"

    ```
    ["account.channel.company.@companyId"]
    ```
	
=== "Analytics / Breakout"

    ```
	{"customer_id":"@companyId"}
    ```
	
=== "RTP"

    ```
	{"customer_id":"@companyId", "is_provider":0}
    ```

=== "ScriptForge"

    ```
	{"customer_id":"@companyId"}
    ```

!!! note
	If you want to render a graph in this view for testing, you may need to temporarily hardcode a customer or carrier ID to make it work.
