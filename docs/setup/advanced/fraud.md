# Fraud Profile
**Setup :material-menu-right: Advanced :material-menu-right: Fraud Profile**

The ConnexCS **Fraud Profile** provides rule-based Fraud Detection with a high degree of flexibility. This feature will not prevent a security breach, but it can serve as detection and mitigation if an account is ever compromised. 

!!! note "Will calls trigger fraud detection?"
    Currently our fraud detection system only prevents new calls, it does not cut off any existing calls.

## Design / Concept
The system objective is to identify suspicious calls then either warn, block, or lock the account depending on how it is configured.

* A fraud profile contains several rules used to create many fraud profiles.
* A fraud profile is applied to routing inside a customer's account.
* A rule is defined by a prefix and a date/time range
* A call is eligible for fraud detection if the fraud profile is enabled on the call (by setting it in routing) and if the prefix matches.

## Detection Parameters and Limits
The following 5 parameters are monitored for fraud detection: 

* **CPM** - Calls Per Minute, the amount of calls sent in any single minute
* **Call Duration** - The duration of the call.
* **Total Calls** - The duration of the call.
* **Channels** - The amount of concurrent calls.
* **Sequential Calls** - Consecutive calls to the same destination

Each of 5 parameters is configured with 2 limits: a Warning limit and a Critical limit. The Warning limit must always be lower than the Critical limit. When one of the limits is triggered, the system takes automatic action which is determined by the Mode (defined below).

## Fraud Mode
Selecting Low or High mode will define the action taken when a Warning or Critical threshold is reached. 

| Mode | Warning                            | Critical                             |
|------|------------------------------------|--------------------------------------|
| Low  | Call continues, shows in log only. | Call is blocked.                     |
| High | Call is blocked.                   | Call is blocked, Account is blocked. |

## Setup Fraud Detection
**Step 1: Create a Fraud Profile and Rules**

1. Click the **`+`**
2. Enter the Name.
3. Click **Save**.
4. To the right of the new Profile, select **`View Rules`**.
5. Click the **`+`**
6. Define **Prefix**, **Start and End Times**, and **Days of Week** to set the trigger for fraud detection. 
6. Configure individual **Metrics** (as defined above) to set thresholds for fraud detection
6. Save the rules.

**Step 2: Apply profile to customer route**

1. Go to **Management :material-menu-right: Customer :material-menu-right: [your customer] :material-menu-right: Routing :material-menu-right: [select the route] :material-menu-right: Fraud**.
2. Select the **Fraud Profile**.
3. Select the **Fraud Mode** (as defined above).
4. Save the route.


## Fraud Logging
To view when Warning or Critical thresholds have been triggered go to **Logging :material-menu-right: Fraud Logging**
