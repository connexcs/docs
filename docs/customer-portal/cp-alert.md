# Alerts

**Alerts** allow you to check various aspects of your account. This includes tracking when your balance falls below a certain threshold or if a specific usage parameter, such as Calls per Second (CPS) or Channels, becomes high.

Create Alerts to contact customers when specific occurrences occur.

Alerts are a useful way to track transaction information, mainly when your customer lists fill up.

It helps automate monitoring and notifications based on key performance metrics. These alerts are triggered when predefined thresholds are met, ensuring proactive network management.

Alerts are primarily communicated via email to designated recipients.

The automated process also gives you real-time insight into your account status.

!!! Example
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
   1. 

Click **Alert** `Title` to view the configuration details.

Click **`Test`** to run a Simulation of the **Alert**.

!!! warning "Balance Alert"
    The ability to edit and create new Alerts is still under development.

