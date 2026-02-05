# Alerts

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Customer Portal / Alerts & Notifications<br>
<strong>Audience</strong>: Administrators, Support Team, Customer Success Team<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: Approximately 20–30 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS Customer Portal account with permissions to view and configure alert settings<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer-portal/cp-dashboard/">Customer Portal – Dashboard</a>, <a href="https://docs.connexcs.com/customer-portal/cp-latest-calls/">Customer Portal – Latest Calls</a><br>
<strong>Next Steps</strong>: Define which event types you want to be notified about, configure the recipient list (email addresses or SMS gateways), and test an alert<br>

</details>

## Overview

**Alerts** allow you to check various aspects of your account. This includes tracking when your balance falls below a certain threshold or if a specific usage parameter, such as Calls per Second (CPS) or Channels, becomes high.

The automated process also gives you real-time insight into your account status.

Create Alerts to notify customers when specific events happen.

Alerts are a useful way to track transaction information, mainly when your customer lists fill up.

It helps automate monitoring and notifications based on key performance metrics. These alerts are triggered when predefined thresholds are met, ensuring proactive network management.

Alerts are primarily communicated via email to designated recipients.

!!! example
    The mechanism used to send Alerts when a customer's balance gets below a certain threshold. To send Alerts when a specified usage parameter gets too high.

    ```mermaid
    flowchart TD
    A[Monitor Customer Data] --> B{Check Balance Threshold}
    B -- Below Threshold --> C[Balance Below Threshold]
    C --> D[Send Balance Alert]
    D --> E[Notify customer via email/SMS/etc.]

    B -- Above Threshold --> F{Check Usage Parameter}
    F -- Exceeded --> G[Usage Parameter Exceeded]
    G --> H[Send Usage Alert]
    H --> I[Notify customer via email/SMS/etc.]

    F -- Within Limit --> J[No Alerts Needed]

    B -.->|Compare current balance with threshold| B
    F -.->|Compare current usage with specified limit| F
    ```

Assigning the recipient's e-mail address to the relevant department heads in a business pipeline automates a procedure that would require manual attention.

Since the threshold represents the most numeric traits related to VoIP, it can form the foundation for efficient service operations.

## Key Features

1. **Custom Alert Triggers**: Alerts can be configured based on specific thresholds.
2. **Automated Email Notifications**: Notifications are sent to specified recipients.
3. **Reset Thresholds**: Alerts reset once conditions return to normal.
4. **Configurable Sample Periods**: ASR, ACD, PDD, and other metrics can be monitored over custom time frames.
5. **Custom Templates**: Users can create their own alert templates.
6. **ScriptForge Integration**: Allows advanced, script-based monitoring and custom alerts.

## Steps to create Alerts

1. Click on the blue `+` sign.
2. Fill the following details:
      1. Enter the `Title` of the alert you wish to create.
      2. Enter the contact details like `Email` or `Phone Number`.
      3. `Area`: The section of the system where the alert was created.
      4. `Threshold`: This is the numeric value that your chosen metric is compared against to decide when the alert should fire.
        For example, if you choose the `<` operator, the alert triggers when the metric falls below the threshold; with `>` it triggers when the metric rises above the threshold; and with `=` it triggers when the metric is exactly equal to the threshold. The governing conditions are the combination of metric, operator, and threshold (and, where applicable, the sample period); whenever that condition evaluates to true, the alert is triggered.
3. Click `Save`.

!!! warning "Balance Alert"
    The ability to edit and create new Alerts is still under development.
