# CLI

**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Routing**

**CLI (Caller Line Identification)** is way for VoIP systems to identify incoming calls for sorting and logging. It is the technical term for the mechanism we know as **Caller ID**. In VoIP systems, CLI is more than just a way to display the number of incoming calls, however. It doubles as a defense against unidentified call attempts and provides information to sort incoming calls.

In ConnexCS, **CLI Restrict** lets you present CLIs on customer accounts, so that any caller without a valid number is rejected outright. Enabling the **Force CLI** option lets users pass the CLI without setting it on the customer's end. If no CLI rules are added, the defaults are used. The mechanic also supports regular expressions.

!!! tip "How is CLI derived?"
    **CLI** refers to the **CLI/ANI** field in the `From` part of the `SIP INVITE` message. This contains specific information about the caller, particularly the name and number of the person initiating the call. Also known as "Caller ID" in standard phone systems, CLI may also be referred to as "A-Leg" or "A-Number", where the call originates. The call is then terminated at the Dialed Number, the "B-Leg" or "B-Number".
    
## Configure CLI

![alt text][cli]

Configuring a number as a **CLI (Calling Line Identification)** in ConnexCS gives the customer the ability to control which numbers are allowed to initiate calls. Any number configured as a CLI is considered part of the Whitelist (unless additional configuration is applied to block it).

Click on the **`+`** button under **CLI**.

*Field details:*

+ **CLI**: Enter the desired number or a regular expression to match and replace to allow numbers through

+ **Rewrite CLI**: A CLI can be re-written. For example, you can add `123456789` in the CLI box, and then rewrite by adding `987654321` in the re-write CLI box. (See [**Advanced CLI Match and Manipulation**](https://docs.connexcs.com/customer/cli/#advanced-cli-match-manipulation) below.)

+ **P-Asserted-ID**: This is a SIP Header similar to the FROM header, but classified as a private, or network-level identifier. Telephone companies use it to identify call originators, but then it is stripped at the call server, so the client end-points only see the FROM field. This is especially helpful when caller's obscure their CLI/FROM information, as the network-level still requires origination details. The **P-Asserted-ID** manipulation uses the same syntax as Replace CLI.

!!! tip "P-Asserted-ID Use Case"
    If you wanted to allow all calls, but assign a specific number (such as the Main Billable number for the business), you would set CLI as "\*" then enter the desired P-Asserted ID. All calls will then have this number as the P-Asserted-ID. 

+ **Forced**: Enabling this will allow a call if there are no other matching CLIs in the system. This will also replace the CLI that is presented with the CLI entered here. Ex: Create a whitelist of CLIs, then select **Forced** on the CLI to use if none of the others in the whitelist match. (Best practice is to only have one **Forced** CLI.)

+ **Direction Applied**: Select either **Termination** for calls a customer makes out, or **Origination** (also refers to DIDs) for inbound calls made to our customers. Ex: Create a whitelist that only allows calls to or from the same country.  

    ![alt text][edit-cli]

Click **`Save`** to complete the CLI configuration. 

## Advanced CLI Match & Manipulation
The CLI system uses Regular Expressions to match and replace numbers. Here are a few examples:

| Number      |            CLI | Replace CLI |                                      Description |
|-------------|:--------------:|:-----------:|:-------------------------------------------------|
| 123456789   |          ^1234 |             |   Allows only numbers starting with 1234 to pass |
| 123456789   |           789$ |             |      Allows only numbers ending with 789 to pass |
| 12345678912 | ^[0-9]{11,12}$ |             | Allows only numbers with 11 or 12 digits to pass |
| +123456789  |   ^\+([0-9]+)$ |          \1 |                                 Remove leading + |
| 01782123456 |    ^0([1-9]+)$ |        44\1 |             Remove leading 0 and replace with 44 |

*To learn more about writing regular expressions, visit [**http://regexr.com**](http://regexr.com) for tutorials and exercises available for all levels of expertise.*


## Blacklist numbers
Using **CLI Restrict** lets you block calls, essentially creating a Blacklist of numbers. To block a configured CLI:

1. Click **Management :material-menu-right: Rate Card**. 
2. Select **Provider Rate Card** (under the Name column).
1. Select **Properties :material-menu-right: Advanced**.
3. Enter the CLI/ANIs you want to block in the **CLI Restrict** box.
4. Click **`Save`**.

## CLI Default Behaviors

Scenario 1: No CLIs configured and "Approved CLI's Only" is Disabled ==> All CLIs will be allowed through.

Scenario 2: No CLIs configured and "Approved CLI's Only" is Enabled ==> No calls will be allowed through.

Scenario 3: "Approved CLI's Only" is enabled and call is made from a CLI which has not been configured ==> Error: CLI Restriction in effect.

Scenario 4 (Whitelist): Configure a number as a CLI in customer routing.

Scenario 5 (Blacklist): Configure a CLI then add it to "CLI Restrict" under Provider Rate Cards. 

!!! tip
    "Approved CLIs Only" is set under **Edit Customer :material-menu-right: Verification** 

## General Condition 6 (GC6) Compliance
ConnexCS is GC6 compliant for end users, which: 

> requires Communications Providers (CPs) to provide CLI facilities, and ensure that the CLI Data provided with a call includes a valid, dialable telephone number which uniquely identifies the caller." For details on this General Condition, including guidelines for "valid" and "dialable" numbers, see OFCOM's [**Guidance on CLI Facilities**](https://www.ofcom.org.uk/__data/assets/pdf_file/0012/113214/statement-guidelines-cli-facilities.pdf).

To set the "P-Asserted-ID" per customer, see [**Configure CLI**](https://docs.connexcs.com/customer/cli/#configure-cli) above. 

[cli]: /customer/img/cli.png "CLI Main"
[edit-cli]: /customer/img/edit-cli.png "Edit CLI"
