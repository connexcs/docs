# CLI

**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Routing

**CLI** (Calling Line Identification) refers to the **CLI/ANI** field in the `From` part of the `SIP INVITE` message. This contains specific information about the caller, particularly the name and number of the person attempting to contact a user in a VoIP system. This is more commonly known as "Caller ID" in standard phone systems. CLI may also be referred to as "A-Leg" or "A-Number", where the call originates. The call is then terminated at the Dialled Number, the "B-Leg" or "B-Number".



## Configure CLI
To set CLI options:

1.	Click on the **`+`** button under **CLI**.
2.	Fill out the fields in the dialogue box and **`Save`**.

Field details:

+ **CLI**: 

+ **Rewrite CLI**: A CLI can be re-written. For example, you can add `123456789` in the CLI box, and then rewrite by adding `987654321` in the re-write CLI box. (See **Advanced CLI Match and Manipulation** below.)

+ **P-Asserted-ID**: **`P-Asserted-Identification`** is another SIP Header. It is not presented but allows telephone companies to identify originators on a network-only level. A P-Asserted-ID uses the same syntax as Replace CLI.

+ **Forced**: To change the CLI that is presented for another, enter the CLI you wish to present, and click the **`Force CLI`** box.  It will allow you to override the previous number with one that is accepted. You can add a whitelist of CLIs and select Force on a CLI which you wish to be used if none of the others in the whitelist match.

+ **Direction Applied**: 

![alt text][edit-cli]

## CLI Default Behaviors

|Scenario|Settings|Result|
|---|---|---|
|1|No CLIs are configured and "Approved CLI's Only" (under Edit Customer :material-menu-right: Verification) is not selected|All CLIs will come into the system and pass through| |2|No CLIs are configured and "Approved CLI's Only" is selected|No calls will be allowed through|
|3|Calls made from a CLI which has not been configured|Error: CLI Restriction in effect|

## Advanced CLI Match & Manipulation
The CLI system uses Regular Expressions to match and replace numbers. Here are a few examples:

|             |            CLI | Replace CLI |                                      Description |
|-------------|---------------:|------------:|-------------------------------------------------:|
| 123456789   |          ^1234 |             |   Allows only numbers starting with 1234 to pass |
| 123456789   |           789$ |             |      Allows only numbers ending with 789 to pass |
| 12345678912 | ^[0-9]{11,12}$ |             | Allows only numbers with 11 or 12 digits to pass |
| +123456789  |   ^\+([0-9]+)$ |          \1 |                                 Remove leading + |
| 01782123456 |    ^0([1-9]+)$ |        44\1 |             Remove leading 0 and replace with 44 |

*To learn more about writing regular expressions, visit http://regexr.com for tutorials and exercises available for all levels of expertise.*


## Whitelist
Whitelisted CLIs are those that allowed to pass through the system. This is added in the Customer Card:

1. Go to **Management** > **Customer**
1. Click the **[customer]** > **Routing**
1. Under **CLI**, click on the **`+`** button.
1. Enter the number in the CLI field then click **`Save`**

## CLI Restrict
CLI Restrict lets you block calls. The blocked CLI is added in the Provider Rate Card:

1. Click **Management** > **Rate Card**. 
2. Select **Provider Rate Card** (under the Name column).
1. Select **Properties** > **Advanced**.
3. Enter the CLI/ANIs you want to block in the **CLI Restrict** box.
4. Click **`Save`**.

![alt text][recording-7]

## General Condition 6 (GC6) Compliance
ConnexCS is GC6 compliant for end users, which 

> requires Communications Providers (CPs) to provide CLI facilities, and ensure that the CLI Data provided with a call includes a valid, dialable telephone number which uniquely identifies the caller." For details on this General Condition, including guidelines for "valid" and "dialable" numbers, see Ofcom's [Guidance on CLI Facilities](https://www.ofcom.org.uk/__data/assets/pdf_file/0012/113214/statement-guidelines-cli-facilities.pdf).

To configure per customer, set the CLI P-Asserted-ID found in the customer routing configuration. 


[edit-cli]: /customer/img/edit-cli.png "Edit CLI"
[recording-7]: /customer/img/63.png "recording-7"
