# Options

**Setup :material-menu-right: Settings :material-menu-right: Options**

Configure **Options** to set key default behaviors for the system. Click **`Edit`** to the right of a setting to revise it.

This section outlines the various configurable options available in the **ConnexCS Customer Portal**.

These options allow you to customize the behavior, security, and display details of your portal.

=== "General"

    |Option|Description|
    |---|---|
    |**Customer Origination Instructions Page**|Provide helpful details or updates when customers log in to the Customer Portal.|
    ||**Purpose**:<br> Provides guidance on what to display to users in the control panel or customer portal.</br><br>Content can include HTML formatting (e.g., bold text) to highlight important information.</br>|
    ||**Key Feature**: Instructs users on where to send calls (ingress address).|
    |**Origination and Termination Ingress Addresses**|Let customers know where they should send calls; typically, these are the same. Specifies the address to which calls should be directed.|
    ||**Benefit**: Ensures that customers send their calls to the correct endpoint.|
    |**Profit Assurance Default**|Enable Profit Assurance on all new accounts (found under Customer :material-menu-right: Routing :material-menu-right: Ingress Routing :material-menu-right: [**Price Limits**](https://docs.connexcs.com/customer/routing/#price-limits)). When a new route is added, the system checks if profit assurance is enabled.|
    |**Audit Comment**|When you save a change in the Control Panel, a box appears requesting an explanation for the change (visible under Setup :material-menu-right: Information :material-menu-right: [**Audit Log**](https://docs.connexcs.com/setup/information/audit-log/)).|
    ||**How It Works**:<br>Example: Editing a customer (e.g., changing channel count) triggers an audit comment box.</br><br>Users must document the reason for the change (e.g., "ABC gave me permission").</br>|
    ||**Key Benefits**:<br>**Compliance**: Provides a full audit trail for companies that require strict change documentation.</br><br>**Accountability**: Helps track who approved changes and why they were made.</br>|
    |**Support URL and Support Phone**|Information provided here passes to the Customer Portal, so customers know how to contact your support teams.This information is passed into the customer portal to assist users in reaching out for help.|
    |**Payment Details**|You can add custom messages and display details such as bank account information, simplifying the payment process. This is for display purposes only.|
    |**Payment Description**|Description that's displayed for payment methods such as PayPal and Stripe. It can be customized to avoid legal or regional issues.|
    |**Smart Loading of Grid Tables**|You can choose this option to automatically load the tables while you scroll the page.|
    |**Package Charge Notification Days**|You can set the package notification date, and an email will be sent the specified number of days before the package is scheduled to be recharged.|
    |**Circuit Test User**|Defines a dedicated account for circuit testing.|
    ||**How It Works**: <br>When conducting a circuit test, calls must originate from a specific account created for this purpose.</br>|
    ||**Benefit**: Easily identify and segregate circuit test calls from regular customer activity.|
    |**Alpha Feature Previews**|Contains experimental features that may be buggy. Not shown by default to avoid customer complaints regarding unstable functionality.|
    |**Beta Feature Previews**|Contains features that are fully functional and stable.|
    ||**Customization**: Customers can enable these previews based on their preference and risk tolerance.|
    ||**Benefit**: Allows early access to new features while balancing reliability.|
    |**Invoice Line Grouping**|Customizes how invoice lines are grouped when generating invoices (e.g., for the last seven days). The benefits include flexibility in invoice layout to match customer needs.|
    ||**Grouping Options**:<br>1. **Per Day**: Each line represents a day (e.g., Monday, Tuesday, etc.).</br><br>2. **Per Customer Destination**: Each line represents a specific destination (e.g., UK landline, India Mobile, India Talna, etc.).</br>|
    |**Internal Number Range Start and Block Size**|Set the system-wide default start and range of private number blocks, which are then assigned to customers (per configuration instructions **[here](https://docs.connexcs.com/customer/main/#internal-number-block)**). For example, you can set the Start field to 1000, and the Size to 1000. The first number block assigned to a customer ranges from 1000–1999. The next customer receives the range 2000–2999, etc. IT allocates numbers in customizable blocks (e.g., 10 digits per customer or larger blocks as needed).|
    |**Server Maximum Auth Failures**|The maximum number of authentication tries for a system. When a user tries more than this Max Auth limit authentication failure error occurs. Here, you can choose the number of times the failure can occur.|
    |**Auto Logout**|Automatically logs out users after a period of inactivity (typically five or ten minutes).<br>**Usage Note**: Not enabled by default but can be activated based on user preference.</br>|
    ||**Security Benefits**: Enhances system security by preventing unauthorized access when the user is idle.|
    |**Hybrid Menu Only**|When you use ConnexCS in Hybrid mode, this option hides unavailable items from the menu|
    |**Custom Pages**|Allows you to add the created Pages from the IDE to the **Dashboard** and the **Anyedge**. It provides respective information on the Dashboard and Anyedege.
=== "Internal SIP Code Rewrite"

    The Internal SIP Code Rewrite option allows you to re-write the SIP Codes already present.

    You can click on the `+` button to add the rows for rewriting the SIP Codes.

    The **Source** specifies the original code present.

    The **Rewrite** option allows you to edit the original SIP Code present in the **Source**.

    Click on the `Save` button to apply the changes to your account.

!!! Note "Payment details and descriptions are solely for display purposes."
    <img src="/setup/img/siprewrite.png" style="border: 2px solid #4472C4; border-radius: 8px;">
