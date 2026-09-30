# Global Contacts

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Global / Contacts<br> <strong>Audience</strong>: Administrators, Operations Teams, Engineers<br> <strong>Difficulty</strong>: Intermediate<br> <strong>Time Required</strong>: Approximately 15–30 minutes<br> <strong>Prerequisites</strong>: Active ConnexCS account with access to the Global section; familiarity with Customer and Carrier account management.<br> <strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer/main/#contacts">Contacts</a>, Global, Customer Management, Carrier Management<br> <strong>Next Steps</strong>: Navigate to <strong>Global :material-menu-right: Contacts</strong>, review contacts across the account, and select the Company when creating a new Contact.<br>

</details>

**Global :material-menu-right: Contact**

## Overview

The **Global Contacts** section provides a centralized view of **Customer Contacts across the entire account**.

Instead of navigating through individual Customer or Carrier accounts, administrators can use the Global section to view and manage contacts from a centralized location.

When creating a Contact from the Global section, you must select the **Company** where the Contact exists.

## Contacts List

The Global Contacts page provides an account-wide view of available Customer Contacts.

Use this view to locate and manage contacts without navigating through individual company profiles.

| Column           | Description                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------- |
| **Name**         | Name of the contact.                                                                        |
| **Company**      | Company associated with the contact.                                                        |
| **Company Type** | Indicates whether the associated company is a **Customer**, **Carrier**, or **No Company**. |
| **Email**        | Email address associated with the contact.                                                  |
| **TFA**          | Displays the configured two-factor authentication (TFA) information for the contact.        |
| **Contact Type** | Defines the type of contact. The screenshot shows **General** as the contact type.          |
| **IP Whitelist** | Displays the IP whitelist information associated with the contact.                          |

The Global Contacts view also provides **Search**, **Columns**, **Filters**, and **Custom Settings** options for managing and viewing the contact list.

<img src="/misc/img/globalcontact.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## Creating a Contact

To create a Contact from the Global section:

1. Navigate to **Global :material-menu-right: Contacts**.
2. Click **`+`** to create a new Contact.
3. Enter the required Contact information.
4. Select the **Company** where the Contact exists.
5. Save the Contact.

!!! info
    When creating a Contact from the Global section, the **Company** must be selected so that the Contact is associated with the appropriate company.

!!! info "More Information"
    For more information about **Contacts**, including configuration details, see the [**Contacts**](https://docs.connexcs.com/customer/main/#contacts) documentation.

## Searching

Use the **Search** field to locate a specific Contact in the Global Contacts list.

Searching is useful when the account contains contacts associated with multiple Companies and you need to quickly locate a particular Contact.

## Columns

The **Columns** panel can be used to control which available Contact fields are displayed in the table.

Use the column selection options to show or hide information according to your requirements.

## Filters

The **Filters** panel can be used to narrow the Contacts displayed in the table based on the available Contact fields.

For example, filters can be used to focus the list on Contacts associated with a particular Company or other available Contact information.

!!! Example "Example"
    The **Company Type** filter allows you to select the type of company associated with the Contact.

    Available options include:

    * **Select All** — Selects all available Company Types.
    * **Carrier** — Displays Contacts associated with Carrier companies.
    * **Customer** — Displays Contacts associated with Customer companies.
    * **No Company** — Displays Contacts that are not associated with a Company.

    You can use the Search field within the filter to quickly locate a value.

    Multiple values can be selected at the same time. The selected values determine which Contacts are displayed in the table.

## Custom Settings

The **Custom Settings** panel allows you to adjust the appearance of the Contacts table.

1. **Theme**: The **Theme** setting controls the visual appearance of the Contacts table.

2. **Row Height**: The **Row Height** setting controls the amount of vertical space used for each Contact row.

* **Lower row height** — Displays more Contacts within the available screen space.
* **Higher row height** — Provides more spacing between Contacts for easier reading.

These settings change the presentation of the Contacts list without changing the underlying Contact information.

## Refreshing the Contacts List

Click **Refresh** to reload the Contacts list and display the latest available information.

!!! note
    Use the **Refresh** option within the Global Contacts view after making changes or when you need to retrieve the latest Contact information.

## Alternate Locations

Contacts can also be accessed from:

* **Customer :material-menu-right: [Customer Name] :material-menu-right: Main**
* **Carrier :material-menu-right: [Carrier Name] :material-menu-right: Main**

The Global Contacts view provides centralized access, while these locations provide access within the respective Customer or Carrier account.

## Use Cases

Global Contacts can be used to:

* View Customer Contacts across the entire account.
* Locate Contacts without navigating through individual Customer accounts.
* Associate a new Contact with the appropriate Company.
* Search for specific Contacts.
* Filter Contacts based on available information.
* Customize the Contact list using Columns and Custom Settings.
* Manage Contacts from a centralized Global view.
