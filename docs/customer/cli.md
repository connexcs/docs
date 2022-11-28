# CLI

**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Routing**

**CLI (Caller Line Identification)**, aka ANI (Automatic Number Identification), is the _From_ header in SIP and represents the sender's number in a telephone call. It's the technical term for the mechanism we know as **Caller ID**. In VoIP systems, CLI is more than just a way to display the number of incoming calls. It's used as a defence against unidentified call attempts, provides information to sort incoming calls, and is an important component of billing.

In ConnexCS, **CLI** lets you restrict and manipulate CLIs and Pre-Asserted Identity on customer calls so that any caller without a valid match is rejected outright.

!!! tip "How's CLI derived?"
    **CLI** refers to the **CLI/ANI** field in the `From` part of the `SIP INVITE` message. This contains specific information about the caller, particularly the name and number of the person initiating the call. Also known as "Caller ID" in standard phone systems, CLI may also be referred to as "A-Leg" or "A-Number", where the call originates. The call is then terminated at the Dialed Number, the "B-Leg" or "B-Number".

&emsp;![alt text][cli]

## Default Behaviour

By default, a customer account will pass all calls, even without any configured CLI records. To change this behaviour, navigate to **Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Edit :material-menu-right: Verification** and enable   [**Approved CLI's Only**](https://docs.connexcs.com/customer/cli/#allow-customer-to-add-their-own-cli).

!!! warning "Approve CLI override"
    Once the first CLI rule is entered, the behaviour changes to block all, regardless of the "Approved CLI's Only" setting.

!!! tip "CLI verification tool"
    In addition to changing the default behaviour to block, adding a CLI rule gives customers the ability to verify their own CLIs from their Control Panel through a callback system. A customer can login to their portal and enter a phone number that should belong to them. The ConnexCS system will place a call and give a code that must be entered into the portal. If the codes match, the CLI is added.

## Creating a Record

Click :material-plus: under **CLI**.

_Field details:_

+ **CLI**: To allow the required CLIs, enter the required number or a regular expression (to match and replace).

+ **Rewrite CLI**: A CLI can be rewritten. For example, you can add `123456789` in the CLI box and then rewrite by adding `987654321` in the rewrite CLI box. (For more advanced CLI manipulation, see [**Advanced CLI Match & Manipulation**](/customer/cli/#advanced-cli-match-manipulation) below.)

+ **Pre-Asserted-ID**: To allow the required Pre-Asserted-Identities (PAID), enter the required number or a regular expression to match or replace.

+ **Rewrite P-Asserted-ID**: This is a SIP Header similar to the FROM header but classified as a private, or network-level identifier. Telephone companies use it to identify call originators, but then it's stripped at the call server, so the client end-points only see the FROM field. This is especially helpful when callers obscure their CLI / FROM information, as the network level still requires origination details. The **P-Asserted-ID** manipulation uses the same syntax as the Replace CLI.

!!! tip "P-Asserted-ID Use Case"
    If you wanted to allow all calls but assign a specific number (such as the Main Billable number for the business), you would set CLI as ".*" and then enter the desired P-Asserted ID. All calls will then have this number as the P-Asserted-ID.

+ **Forced**: Enabling this will allow a call if there are no other matching CLIs in the system. This will also replace the CLI that's presented with the CLI entered here. Ex: Create a permitted list of CLIs, then select **Forced** on the CLI to use if none of the others in the permitted list match. (Best practice is to only have one **Forced** CLI.)

+ **Direction Applied**: Select either **Termination** for calls a customer makes out or **Origination** (also refers to DIDs) for inbound calls made to our customers. Ex: Create a permitted list that only allows calls to or from the same country.  

+ **Use DID**: Pull in DIDs from the customer's account to be used either as a Filter or as a Replacement.  

&emsp;![alt text][edit-cli]

Click **`Save`** to complete the CLI configuration.

## Allow Customers to add their own CLI

Navigate to **Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Edit :material-menu-right: Verification** and select the "Approved CLIs Only" checkbox. The customer can then go to the Customer Portal CLI section and add numbers there.  

&emsp;![alt text][approvedcli]

## Advanced CLI Match and Manipulation

### Filter Examples

Configuring a number as a **CLI** in ConnexCS gives the customer the ability to control which numbers are allowed to initiate calls. Any number configured as a CLI is considered part of the permitted list (unless additional configuration is applied to block it).

#### Filter CLI by Number

Block all calls that don't have the CLI "123456789":

| CLI         | Pre-Asserted-ID | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|-------------|-----------------|-------------|-----------------------|--------|----------|--------------|
| `123456789` |                 |             |                       | No     | Disabled | None         |

Allow multiple CLIs to pass (by entering 2 or more records):

| CLI         | Pre-Asserted-ID | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|-------------|-----------------|-------------|-----------------------|--------|----------|--------------|
| `123456789` |                 |             |                       | No     | Disabled | None         |
| `987654321` |                 |             |                       | No     | Disabled | None         |

#### Filter CLI by Pattern

Allow a range of numbers for a customer (this example allows all calls that start with 123456 to pass regardless of the last digits):

| CLI            | Pre-Asserted-ID | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|----------------|-----------------|-------------|-----------------------|--------|----------|--------------|
| `^123456`      |                 |             |                       | No     | Disabled | None         |

You could also use a more complicated expression to match multiple ranges. In this example, the number must start with 123456, followed by 1, 3, or 5, then followed by 1 or 2 numbers.

| CLI                       | Pre-Asserted-ID | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|---------------------------|-----------------|-------------|-----------------------|--------|----------|--------------|
| `^123456[135][0-9]{1,2}$` |                 |             |                       | No     | Disabled | None         |

This can be used in combination with number lists as well.

#### Filter CLI by DID

If your customers do origination as well as termination, they already have a list of DIDs. Select _Filter_ from "Use DID" to automatically read from the list of DIDs. Note that you can still add additional CLIs along with the DID list.

| CLI | Pre-Asserted-ID | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID | Userspace DB |
|-----|-----------------|-------------|-----------------------|--------|---------|--------------|
|     |                 |             |                       | No     | Filter  | None         |

#### Filter PAID by Number or Pattern

The same is true for Pre-Asserted-Identity as it's with CLI; you can filter by PAID, as in this example.

| CLI | Pre-Asserted-ID           | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|-----|---------------------------|-------------|-----------------------|--------|----------|--------------|
|     | `123456789`               |             |                       | No     | Disabled | None         |
|     | `^123456[135][0-9]{1,2}$` |             |                       | No     | Disabled | None         |

#### Combined CLI and PAID Filter

Filters are `AND` together, meaning that for a call to pass in this example, the CLI would need to be `1122334455` AND the Pre-Asserted-ID would need to be `123456789`.

| CLI          | Pre-Asserted-ID           | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|--------------|---------------------------|-------------|-----------------------|--------|----------|--------------|
| `1122334455` | `123456789`               |             |                       | No     | Disabled | None         |

#### Filter CLI from a Large List

Our Userspace database allows you to manage large lists of numbers. Once you upload the numbers under Developer :material-menu-right: [Database](https://docs.connexcs.com/developers/database/), you can use the following options to filter by the uploaded list. Note that the filter is a partial match.

| Pre-Asserted-ID  | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB  |
|------------------|-------------|-----------------------|--------|----------|---------------|
|                  |             |                       | No     | Disabled | [My Database] |

#### Filter CLI by Number Type

Filtering by Number Type will block calls that originate from a "type" that you specify; this can be something such as FIXED, MOBILE, etc.

| Pre-Asserted-ID  | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Block Type  |
|------------------|-------------|-----------------------|--------|----------|-------------|
|                  |             |                       | No     | Disabled | FIXED       |

### Replace Examples

We can also completely replace the CLI being sent. Note that if a replacement is made it also means that the match was successful and will be allowed to pass through.

#### Direct Replacement

Replacing a `111111111111` with `222222222222`.

| CLI            | Pre-Asserted-ID | Rewrite CLI    | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|----------------|-----------------|----------------|-----------------------|--------|----------|--------------|
| `111111111111` |                 | `222222222222` |                       | No     | Disabled | None         |

#### Pattern Replacement

Replace all calls that begins with a `1` with `222222222222`

| CLI            | Pre-Asserted-ID | Rewrite CLI    | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|----------------|-----------------|----------------|-----------------------|--------|----------|--------------|
| `^1`           |                 | `222222222222` |                       | No     | Disabled | None         |

#### Force CLI

When choosing **Force CLI**, _if there is no match present_, the CLI marked Force will be used to replace the CLI being sent on a call. In the example below, the CLI `111111111111` will be sent regardless of what CLI the customer sends.

| CLI            | Pre-Asserted-ID | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|----------------|-----------------|-------------|-----------------------|--------|----------|--------------|
| `111111111111` |                 |             |                       | Yes    | Disabled | None         |

In the following example, if the customer sends a call with `222222222222`, the call will be allowed to pass through, but if the customer were to send `333333333333`, the call would be replaced by `111111111111`.

| CLI            | Pre-Asserted-ID | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|----------------|-----------------|-------------|-----------------------|--------|----------|--------------|
| `111111111111` |                 |             |                       | Yes    | Disabled | None         |
| `222222222222` |                 |             |                       | No     | Disabled | None         |

#### Pick CLI at Random

You may add multiple CLIs, which are forced to allow a random CLI to be chosen. In this example, (roughly) 50% of the calls will be sent with `111111111111` and 50% with `222222222222` (provided the customer does not send either of those two, otherwise the results would be same).

| CLI            | Pre-Asserted-ID | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|----------------|-----------------|-------------|-----------------------|--------|----------|--------------|
| `111111111111` |                 |             |                       | Yes    | Disabled | None         |
| `222222222222` |                 |             |                       | Yes    | Disabled | None         |

!!! tip "Large Numbers of Random CLIs"
    To filter or replace calls with a larger number of CLIs or to perform more complex rules, use Scriptforge to create a custom application that reads from a database to achieve far more comprehensive solutions.

#### Pick CLI from DID

This example shows how to pick a DID already associated with the customer at random for use as the CLI.

| CLI            | Pre-Asserted-ID | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|----------------|-----------------|-------------|-----------------------|--------|----------|--------------|
|                |                 |             |                       | Yes    | Random   | None         |

#### Pick CLI from DID with Longest Match

You may wish to perform CLI Localization. For example, if you have multiple DIDs (in this case, `123456`, `123567`, and `123789`) and are placing a call to `1234987654`, the system will find the longest match (in this case, `123456)` to use as the CLI.

| CLI            | Pre-Asserted-ID | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID      | Userspace DB |
|----------------|-----------------|-------------|-----------------------|--------|--------------|--------------|
|                |                 |             |                       | Yes    | Prefix Match | None         |

#### Pick a CLI from a Large List

Our Userspace database allows you to manage large lists of numbers. Once you upload the numbers, you can use the following options to choose a number at random.

| Pre-Asserted-ID | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID      | Userspace DB  |
|-----------------|-------------|-----------------------|--------|--------------|---------------|
|                 |             |                       | Yes    | Disabled     | [My Database] |

### Manipulate CLI

Sometimes it can be useful to retain all or part of the CLI being sent and manipulate it when it gets sent out.

!!! tip "Are you Normalizing?"
    Normalizing is the process of using a common number format. For ConnexCS, this is the international format. You shouldn't be using CLI Manipulation to correct the format of a number; this should be done by Parameter Rewrite (see [**Number Manipulation**](/number-manipulation/) for details).

#### Regex Pattern Examples

If a customer sends a call where the CLI starts with a 9 we can strip it out and replace it with a 44. For example, `9123456789` will become `4423456789`.

| CLI            | Pre-Asserted-ID | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|----------------|-----------------|-------------|-----------------------|--------|----------|--------------|
| `^9(.*)$`      |                 | `44$1`      |                       | No     | Disabled | None         |

This may be a little complicated, so we can break this down:

+ `^` is a start anchor, which means that we start the match at the very left.
+ `9` is the literal digit 9.
+ `(` and `)` represent a match group, everything matched within it will be placed in the variable `$1`.
+ `$` is an end anchor and it means that we finish the match at the very right.

In the Rewrite CLI section, `44` is the literal 44 digits, and `$1` will contain what has been matched in the previous stage.

#### Use Pre-Asserted-Identity as CLI

You can use all or part of a sent Pre-Asserted-Identity as the CLI. The following example shows how to capture them all.

| CLI            | Pre-Asserted-ID  | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|----------------|------------------|-------------|-----------------------|--------|----------|--------------|
| `.*`           | `^(?<paid>.*)$`  | `$<paid>`   |                       | No     | Disabled | None         |

In addition to the matched group as above, we have the expression `(?<paid>.*)`. Here, `paid` represents a variable where this information is stored, and it's then available in the CLI rewrite scope as `$<paid>`.

!!! tip "Variable Scope"
    Numbered groups (e.g., `$1`, `$2`) will only be **read** from the CLI and will be available in the CLI rewrite or in the Pre-Asserted-Identity Rewrite. Named groups can be read, and used anywhere.

### Manipulate Pre-Asserted-Identity

Manipulate the P-Asserted ID similarly to how we manipulated the CLI. In this case, we **must** use named groups and still have to match the CLI to allow the call to pass. As before, `9123456789` in the Pre-Asserted-Identity will become `4423456789`.

| CLI  | Pre-Asserted-ID  | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|------|------------------|-------------|-----------------------|--------|----------|--------------|
| `.*` | `^9(?<paid>.*)$` |             | `44$<paid>`           | No     | Disabled | None         |

#### Use CLI

If we want to use the CLI in the Pre-Asserted-Identity it's a little easier as we can just use the numbered group.

| CLI      | Pre-Asserted-ID | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|----------|-----------------|-------------|-----------------------|--------|----------|--------------|
| `^(.*)$` |                 |             | `$1`                  | No     | Disabled | None         |

### How to Invert a Regular Expression

This will BLOCK all USA Freephone numbers

^ ((?!^1(800|833|844|855|866|877|888)).)*$

### Additional Examples

The CLI system uses Regular Expressions to match and replace numbers. Here are a few examples:

| Number      |            CLI | Replace CLI |                                      Description |
|-------------|:--------------:|:-----------:|:-------------------------------------------------|
| 123456789   |          ^1234 |             |   Allows only numbers starting with 1234 to pass |
| 123456789   |           789$ |             |      Allows only numbers ending with 789 to pass |
| 12345678912 | ^[0-9]{11,12}$ |             | Allows only numbers with 11 or 12 digits to pass |
| +123456789  |   ^\+([0-9]+)$ |          \1 |                                 Remove the leading + |
| 01782123456 |    ^0([1-9]+)$ |        44\1 |             Remove the leading 0 and replace it with 44 |

_To learn more about writing regular expressions, visit [**RegExr**](http://regexr.com) for tutorials and exercises available for all levels of expertise._

## Allow list numbers per provider

Use **CLI Restrict** to allow CLIs to pass through a specific provider. To allow a configured CLI:

**1.** Click **Management :material-menu-right: Rate Card**.

**2.** Select the **Provider Rate Card** (under the Name column).

**3.** Select **Properties :material-menu-right: Advanced**.

**4.** Enter the CLIs / ANIs you want to allow in the [**CLI Restrict**](https://docs.connexcs.com/provider-ratecard/#advanced) box.

**5.** Click **`Save`**.

## General Condition 6 (GC6) Compliance

ConnexCS is GC6 compliant for end users, which:

> requires Communications Providers (CPs) to provide CLI facilities and ensure that the CLI Data provided with a call includes a valid, dialable telephone number that uniquely identifies the caller." For details on this General Condition, including guidelines for "valid" and "dialable" numbers, see OFCOM's [**Guidance on CLI Facilities**](https://www.ofcom.org.uk/__data/assets/pdf_file/0012/113214/statement-guidelines-cli-facilities.pdf).

To set the "P-Asserted-ID" per customer, see [**Configure CLI**](https://docs.connexcs.com/customer/cli/#configure-cli) above.

[cli]: /customer/img/cli.png "CLI Main"
[approvedcli]: /customer/img/approvedcli.png "Approved CLI Only"
[edit-cli]: /customer/img/edit-cli.png "Edit CLI"
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEwNDc3NTM5MjcsMTA2NTU2NTkxNCwtOD
AzOTMwMzMsLTEwOTYwODc3MzUsOTk0MzQyMDcsMTk4NjQ0NDEz
NywxOTQ5NTUwNDc5LDIwODkyODA3MCwtMzEzMjYyNDk3XX0=
-->