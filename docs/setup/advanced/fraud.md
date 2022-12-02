# Fraud Profile

**Setup :material-menu-right: Advanced :material-menu-right: Fraud Profile**

The ConnexCS **Fraud Profile** provides rule-based Fraud Detection with a high degree of flexibility. This feature won't prevent a security breach, but it can serve as detection and mitigation if an account is ever compromised.

!!! note "Will calls trigger fraud detection?"
    At present, our fraud detection system prevents only new calls it doesn't cut off any existing calls.

## Design / Concept

The system's goal is to identify suspicious calls and, depending on how it's configured, warn, block, or lock the account.

* A fraud profile has several rules used to create many fraud profiles.
* A fraud profile is applied to the routing inside a customer's account.
* A rule is defined by a prefix and a date / time range.
* A call is eligible for fraud detection if the fraud profile is enabled on the call (by setting it in routing) and if the prefix matches.

## Detection Parameters and Limits

The following five parameters are monitored for fraud detection:

* **CPM**: Calls Per Minute, the number of calls sent in any single minute.
* **Call Duration**: The duration of the call.
* **Total Calls**: Total number of calls in a day.
* **Channels** - The number of concurrent calls.
* **Sequential Calls** - Consecutive calls to the same destination.

Each of the five parameters is configured with two limits: a **Warning limit** and a **Critical limit**.

The Warning limit must always be lower than the Critical limit. When one of the limits is triggered, the system takes automatic action, which is determined by the Mode (defined below).

## Fraud Mode

Selecting Low or High mode defines the action taken when a Warning or Critical threshold is reached.

| Mode | Warning                            | Critical                             |
|------|------------------------------------|--------------------------------------|
| **Low**  | Call continues, shows in log only. | The call is blocked.                     |
| **High** | The call is blocked.                   | Call is blocked, Account is blocked. |

## Setup Fraud Detection

**Step 1: Create a Fraud Profile and Rules**

1.1 Click :material-plus:.
1.2. Enter the Name.
1.3. Click **Save**.
1.4. To the right of the new Profile, select **`View Rules`**.
1.5. Click :material-plus:.
1.6. Define **Prefix**, **Start and End Times**, and **Days of Week** to set the trigger for fraud detection.
1.7. Configure each individual **Metrics** (as defined above) to set thresholds for fraud detection.
1.8. Save the rules.

**Step 2: Apply the profile to the customer route**

2.1. Go to **Management :material-menu-right: Customer :material-menu-right: [your customer] :material-menu-right: Routing :material-menu-right: [select the route] :material-menu-right: Fraud**.
2.2. Select the **Fraud Profile**.
2.3. Select the **Fraud Mode** (as defined above).
2.4. Save the route.

## Fraud Logging

To view when Warning or Critical thresholds are triggered, go to **Logging :material-menu-right: Fraud Logging**
