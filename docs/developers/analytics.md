# Analytics

**Developer :material-menu-right: Analytics**

The **Analytics** section is a powerful tool for gathering, manipulating, and displaying graphical and tabular data.

You can view and edit a wide range of existing reports or create your own based on both internal system data sources and external third-party systems.

You can also run data through Script Forge using processing techniques such as **mapreduce** and the **preProcess** function.

You can create custom reports to help identify your own key metrics.

Here are some examples of what our customers have built:

* **Ticket Count:** Integration with a third-party ticket system that displays the number of open tickets for a particular consumer.
* **FOREX:** Display FOREX data on the dashboard.
* **603 / 604 Block Report:**: Displays the top blocked CLI's per customer and per carrier.
* **CLI Stats:** Display stats per CLI.
* **ISO Code Stats:** Display stats by Country ISO.

*(**FOREX:** Foreign Exchange; **CLI:** Command Line Interface; **ISO:** International Organization for Standardization)*

## Create New Analytics

Click :material-plus: to configure the following fields:

&emsp;![alt text][analytics]

* **Path**: Select the location to display the data.
    * `Customer`- Management :material-menu-right: Customer :material-menu-right: Stats
    * `Carrier`- Management :material-menu-right: Carrier :material-menu-right: Stats
    * `Dashboard`- Dashboard :material-menu-right: Displayed at the bottom
    * `Route`- Management :material-menu-right: Customer :material-menu-right: Route Stats
    * `Report`- Management :material-menu-right: Report :material-menu-right: Reports
* **Section**: You can group analytic components together when sharing the same name. This is often collated together in the same tab.
* **Title and Subtitle**: Displays title and subtitle information on the rendered graph / table.
* **Output**: Select to render data in either Graph or Table, or both together.
* **Graph Type**: The system supports the following graphs:

    * `Line`: 2 Axis of data, one can be temporal
    * `Bar`: 2 Axis of data, one can be temporal
    * `Area`: 2 Axis of data, one can be temporal
    * `Pie`: 1 Axis of data
    * `Scatter`: 2 Axis of data
    * `Radar`: 1 Axis of data
    * `Gauge`: 1 Axis of data
* **Source**: You can use several data sources, such as:
    * `Analytics`: Big Data multi-vector querying.
        ***Note:** Recalcs won't affect this data, and you  should never use it for accurate financial data.*
    * `G3`: Single value time-series data.
    * `RTP`: Real-Time Transport Control Protocol (RTCP) information.
    * `Breakout`: Financially accurate data is available with limited query vectors.
    * `ScriptForge`: You can use Custom ScriptForge data combined with other data sources or even import external data in real-time.
* **Fields**:  You can display several Fields in the Graph / Table. This changes according to the above data source.
* **Start Offset**: When there isn't a data-selector on the page, the start offset represents how far in the past the query will include.
* **Interval**: Select the Interval to group data in the graph.
    * `Auto`- Automatically choose an appropriate temporal resolution.
    * `Collate`- Collapse all the temporal data.
         For example, when selecting ACD, instead of having an axis for date/time, it will just display a single scalar value).
    * `Time-based`- Select the option to group the data based on time.

        For example, if you select "Hour," it displays a unique value for each hour).
* **Collate / Group**: Select the option to group the data together.

    For example: If you select "Customer," you would get a unique value for each customer.)
* **Limit**: Specify the limit to display the amount of collated data. Don't include several values.
* **Order By**: The column you wish to order the data by. This is useful in combination with limits.

    For example, display the top 10 customers with the worst Automatic Call Distribution (ACD).
* **Width**: When the graph renders on a page with several graphs, select the part of the page for the graph to occupy.
* **Stacked**: When using a line, area, or bar chart, each series of data plots the offset of the previous series (not from the 0 on that axis).
* **Filter**: Used to automatically filter the information displayed based on variables available from the location where the page is rendered.

    The format of the filter changes depending on the data source.

    Select a data source below to view the example:

=== "g3"

```
["account.channel.company.@companyId"]
```

=== "Analytics / Breakout"

```
 {"customer_id":"@companyId"}
```

=== "RTP" (Real-Time Transport Protocol)

```
{"customer_id":"@companyId", "is_provider":0}
```

=== "ScriptForge"

```
{"customer_id":"@companyId"}
```

!!! tip
	If you want to render a graph in this view for testing, you may need to temporarily hard-code a customer or carrier ID to make it work.

[analytics]: /developers/img/analytics.png "Analytics"
