# Global Alerts

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Global / Alerts<br> <strong>Audience</strong>: Administrators, Operations Teams, Engineers<br> <strong>Difficulty</strong>: Intermediate<br> <strong>Time Required</strong>: Approximately 15–30 minutes<br> <strong>Prerequisites</strong>: Active ConnexCS account with access to the Global section; familiarity with Alerts and customer or carrier account configuration.<br> <strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer/alerts">Alerts</a>, Global, Customer Management, Carrier Management<br> <strong>Next Steps</strong>: Navigate to <strong>Global :material-menu-right: Alert</strong>, review account-wide Alerts, create or modify an Alert, select the Company that will use the Alert, and use the <strong>Test</strong> option to simulate it.<br>

</details>

**Global :material-menu-right: Alerts**

## Overview

The **Global Alerts** section provides a centralized view of **all Alerts across the entire account**.

Unlike creating an Alert from an individual Customer or Carrier account, Alerts created from the Global section require you to specify the **Company** that will use the Alert.

This allows administrators to manage Alerts from a centralized location while still associating each Alert with the appropriate Company.

## Viewing Alerts

To view Alerts across the account:

1. Navigate to **Global :material-menu-right: Alert**.
2. Review the list of Alerts available across the account.
3. Select an Alert to view or modify its configuration.

The Global Alerts view provides account-wide visibility without requiring you to navigate through individual Customer or Carrier profiles.

<img src="/misc/img/globalalert.png" style="border: 2px solid #4472C4; border-radius: 8px;">

### Alert List

The Global Alerts page displays Alerts in a table with the following fields:

|Column| Description|
|------|------------|
|**Title**|	Name or title of the Alert|
|**Company**|Company associated with the Alert|
|**Recipient**|	Recipient configured to receive the Alert|
|**State**|	Current state of the Alert, such as Ready, Sent, or Paused.
|**Table Change**|Indicates the configured table-change information associated with the Alert.

### Alert State

The State column indicates the current status of each Alert:

* **Ready** — The Alert is ready for use.
* **Sent** — The Alert has been sent.
* **Paused** — The Alert is currently paused.

### Managing Alerts

The Global Alerts page provides controls for managing Alerts, including:

* **Search** — Search for a specific Alert.
* **Add (+)** — Create a new Alert.
* **Refresh** — Refresh the Alert list.
* **Delete** — Delete selected Alerts.
* **Columns** — Configure which columns are displayed.
* **Filters** — Filter the Alert list.
* **Custom Settings** — Adjust the display settings.

To work with multiple Alerts, select the required Alerts using the checkboxes in the first column.

<img src="/misc/img/globalcli.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## Creating an Alert

When creating an Alert from the Global section:

1. Navigate to **Global :material-menu-right: Alert**.
2. Click to create a new Alert.
3. Configure the Alert according to your requirements.
4. Select the **Company** that will use the Alert.
5. Save the Alert.

<img src="/misc/img/globalalert1.png" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! info
    When an Alert is created from the Global section, selecting the **Company** is required because the Alert must be associated with a specific Company.

!!! tip "Testing"
    Click **`Test`** to simulate the Alert.

The **Test** option is available **only in the Global Alerts section** and can be used to simulate an Alert before relying on its normal operation.

### Alert Configuration

For detailed information about configuring Alerts and examples of building Alerts, see the [**Alerts**](https://docs.connexcs.com/customer/alerts) documentation.

Yes. You can add these sections to the **Global Alerts** documentation:

### Filters

The **Filters** panel allows you to narrow the Alert list based on the available Alert fields.

Filters can be applied to fields such as **Title, Company, Recipient, State**, and other available columns.

For example, you can use filters to display Alerts for a specific **Company** or review Alerts with a particular **State**, such as `Ready` or `Paused`.

### Custom Settings

The **Custom Settings** panel allows you to adjust the appearance of the Alert table.

1. **Theme**: The **Theme** setting controls the visual appearance of the Alert table.

2. **Row Height**: The **Row Height** setting controls the amount of vertical space used for each Alert row.

* **Lower row height** — Displays more Alerts within the available screen space.
* **Higher row height** — Provides more spacing between Alerts for easier reading.

These settings change how the Alert list is displayed without changing the underlying Alert configuration or data.

## Alternate Locations

Alerts can also be accessed from the following locations:

* **Customer :material-menu-right: [Customer Name] :material-menu-right: Alerts**
* **Carrier :material-menu-right: [Carrier Name] :material-menu-right: Alerts**

The Global Alerts section provides the account-wide view, while these locations provide access within the respective Customer or Carrier account.

## Use Cases

Global Alerts can be used to:

* View Alerts across the entire account.
* Manage Alerts without navigating through individual Customer or Carrier accounts.
* Associate an Alert with the appropriate Company.
* Test an Alert using the Global-only **Test** option.
* Centrally review Alert configuration across the account.
