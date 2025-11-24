# Options

---

**Document Metadata**
<br>**Category**: Setup / Settings / Options</br>
**Audience**: Administrators, Engineers, Operations Team
<br>**Difficulty**: Intermediate</br>
**Time Required**: Approximately 30–45 minutes
<br>**Prerequisites**: Active ConnexCS account with Setup-Settings access; familiarity with system-wide default behaviours, portal configuration, billing triggers and control panel customisation.</br>
**Related Topics**: [Setup → Settings → Users](https://docs.connexcs.com/setup/settings/users/), [Setup → Settings → Servers](https://docs.connexcs.com/setup/settings/servers/)
<br>**Next Steps**: Navigate to `Setup → Settings → Options`, review and edit each key global setting (e.g., “Customer Origination Instructions Page”, “Profit Assurance Default”, “Auto Logout”), adjust portal messages, lifecycle defaults and system behaviours, then save and audit in the `Setup → Information → Audit Log`.</br>

---

**Setup :material-menu-right: Settings :material-menu-right: Options**

Configure **Options** to set key default behaviors for the system. Click **`Edit`** to the right of a setting to revise it.

=== "General"

    |Option|Description|
    |---|---|
    |**Customer Origination Instructions Page**|Provide helpful details or updates when customers log in to the Customer Portal.|
    |**Origination and Termination Ingress Addresses**|Let customers know where they should send calls; typically, these are the same.|
    |**Profit Assurance Default**|Enable Profit Assurance on all new accounts (found under Customer :material-menu-right: Routing :material-menu-right: Ingress Routing :material-menu-right: [**Price Limits**](https://docs.connexcs.com/customer/routing/#price-limits)).|
    |**Audit Comment**|When you save a change in the Control Panel, a box appears requesting an explanation for the change (visible under Setup :material-menu-right: Information :material-menu-right: [**Audit Log**](https://docs.connexcs.com/setup/information/audit-log/)).|
    |**Support URL and Support Phone**|Information provided here passes to the Customer Portal, so customers know how to contact your support teams.|
    |**Payment Details**|You can add custom messages and display details such as bank account information, simplifying the payment process. This is for display purposes only.|
    |**Payment Description**|Description that's displayed for payment methods such as PayPal and Stripe.|
    |**Smart Loading of Grid Tables**|You can choose this option to automatically load the tables while you scroll the page.|
    |**Package Charge Notification Days**|You can set the package notification date, and an email will be sent the specified number of days before the package is scheduled to be recharged.|
    |**Circuit Test User**|Select the account from which calls come for circuit testing.|
    |**Alpha and Beta Feature Previews**|Provide access to new and upcoming features.|
    |**Invoice Line Grouping**|Find whether generated invoices display one line per day or one line per destination.|
    |**Internal Number Range Start and Block Size**|Set the system-wide default start and range of private number blocks, which are then assigned to customers (per configuration instructions **[here](https://docs.connexcs.com/customer/main/#internal-number-block)**). For example, you can set the Start field to 1000, and the Size to 1000. The first number block assigned to a customer ranges from 1000–1999. The next customer receives the range 2000–2999, etc.|
    |**Server Maximum Auth Failures**|The maximum number of authentication tries for a system. When a user tries more than this Max Auth limit authentication failure error occurs. Here, you can choose the number of times the failure can occur.|
    |**Auto Logout**|System will log out a user after timing out.|
    |**Hybrid Menu Only**|When you use ConnexCS in Hybrid mode, this option hides unavailable items from the menu|
    |**Custom Pages**|Allows you to add the created Pages from the IDE to the **Dashboard** and the **Anyedge**. It provides respective information on the Dashboard and Anyedege.

=== "Internal SIP Code Rewrite"

    The Internal SIP Code Rewrite option allows you to re-write the SIP Codes already present.

    You can click on the `+` button to add the rows for rewriting the SIP Codes.

    The **Source** specifies the original code present.

    The **Rewrite** option allows you to edit the original SIP Code present in the **Source**.

    Click on the `Save` button to apply the changes to your account.

    <img src="/setup/img/siprewrite.png" style="border: 2px solid #4472C4; border-radius: 8px;">
