# Fraud Profile
Setup :material-menu-right: Advanced :material-menu-right: Fraud Profile

ConnexCS provides rule based fraud detection with a high degree of flexibility.

# Design / Concept

The system objective is to try and identify suspicious calls and either warn, block or lock the account depending on how you set it up.

A fraud profile contains a number of rules, you can create many fraud profiles.

A fraud profile can be applied to routing inside a customers account.

A rule is defined by a prefix and a date/time range

A call is eligable for fraud detetion is the fraud profile is enabled on the call (by setting it in routing) and if the prefix matches.

The following metrics are monitored and upper limits can be set on each of these
* **CPM** - Calls Per Minute, the amount of calls sent in any single minute
* **Call Duration** - The duration of the call.
* **Total Calls** - The duration of the call.
* **Channels** - The amount of concurrent calls.
* **Sequential Calls** - Consecutive calls to the same destination

!!! note
	Currently our fraud detection system prevents new calls, it does not cut off any existing calls.
	
Each of these metrics has 2 limits, a warning limit and an error limit, the warning limit should always be lower than the error limit, the meaning/use of these is defined by the mode set below.

## Modes

There are 2 modes of using fraud detection which can be choosen per route, these affect the behaviour of Warning & Critical

|      | Warning                            | Critical                             |
|------|------------------------------------|--------------------------------------|
| Low  | Call continues, shows in log only. | Call is blocked.                     |
| High | Call is blocked.                   | Call is blocked, Account is blocked. |

