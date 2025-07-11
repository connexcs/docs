# Caller Line Identification

**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Routing**

## Overview

**CLI (Caller Line Identification)**, aka ANI (Automatic Number Identification), is the From header in SIP. It represents the sender's number in a telephone call. It's the technical term for the mechanism we know as Caller ID.

In VoIP systems, CLI is more than just a way to display the number of incoming calls. It's used as a defense against unidentified call attempts.

CLI provides information to sort incoming calls. It's an important component of billing.

In ConnexCS, **CLI** lets you restrict and manipulate CLIs and P-Asserted Identity on customer calls so that any caller without a valid match gets rejected instantly.

It's also referred to as the **A-number or A-leg**, representing the **incoming call to the switch**.
The **B-number, or B-leg**, is the **dialed number**, representing the **outgoing call from the switch**.

!!! tip "How's CLI derived?"
    **CLI** refers to the **CLI/ANI** field in the `From` part of the `SIP INVITE` message. This contains specific information about the caller.

    The information contains the name and number of the person starting the call. Also known as "Caller ID" in standard phone systems, CLI is also referred to as "A-Leg" or "A-Number." 
    
    It's where the call originates. The call is then terminated at the Dialed Number, the "B-Leg" or "B-Number."

<img src= "/customer/img/1cli.png" style="border: 2px solid #4472C4; border-radius: 8px;">

### Key Features & Benefits

1. **Granular Control**: Define which CLIs can pass through the system.

2. **Security & Compliance**: Restrict unauthorized calls based on CLI rules.

3. **Pattern Matching**: Utilize regular expressions to allow or block specific CLIs.

4. **Forced CLI Assignments**: Ensure calls use predefined numbers when necessary.

5. **Directional Routing**: Apply rules to both inbound (origination) and outbound calls.

## CLI Routing Rules

1. **Default Behaviour**

By default, a customer account will pass all calls, even with no configured CLI records. To change this behavior, navigate to Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Edit :material-menu-right: Verification and enable [**Approved CLI's Only**](https://docs.connexcs.com/customer/cli/#allow-customers-to-add-their-own-cli).

!!! warning "Approve CLI override"
    Once you enter the first CLI rule, the behaviour changes to block all, regardless of the "Approved CLI's Only" setting.

!!! tip "CLI verification tool"
    Besides changing the default behaviour to block, adding a CLI rule gives customers the ability to verify their own CLIs from their Control Panel through a callback system.

    A customer can login to their portal and enter a phone number that should belong to them. The ConnexCS system will place a call and give a code that must be entered into the portal. If the codes match, the CLI is then added.

!!! Note "Summary"
    1. By default, if CLI restrictions aren't enabled, all incoming CLIs are allowed and passed through the system without filtering.

2.**CLI Allow List**

+ If a single CLI is added to the list, only that specific number is permitted.
+ If multiple numbers exist in the list, only those numbers can pass.
+ Calls using a CLI not in the list will be blocked with a "CLI restriction in effect" message.

3.**Forced CLI**

+ When a "Forced" CLI is set, any call that doesn't match an allowed CLI will be assigned the forced CLI.
+ If a caller uses the forced CLI as their A-number, the call will pass through normally.
+ If multiple forced CLIs are set, the system typically applies the first listed option.

## Creating a Record

Click :material-plus: under **CLI**.

_Field details:_

+ **CLI**: To allow the required CLIs, enter the required number or a regular expression (to match and replace).

+ **Rewrite CLI**: A CLI can be rewritten. For example, you can add `123456789` in the CLI box and then rewrite by adding `987654321` in the rewrite CLI box. (For more advanced CLI manipulation, see [**Advanced CLI Match & Manipulation**](https://docs.connexcs.com/customer/cli/#advanced-cli-match-and-manipulation) below.)

+ **Rewrite P-Asserted-ID**: This is a SIP Header almost same as the FROM header but classified as a private, or network-level identifier.
Telephone companies use it to identify call originators. As it's stripped at the call server, the client end-points only see the FROM field.
This is helpful when callers obscure their CLI / FROM information, as the network level still requires origination details.
The **P-Asserted-ID** manipulation uses the same syntax as the Replace CLI.

    !!! tip "P-Asserted-ID Use Case"
        If you wanted to allow all calls but assign a specific number (such as the Main Billable number for the business), you would set CLI as ".*" and then enter the desired P-Asserted ID.
        All calls will then have this number as the P-Asserted-ID.

+ **Forced**: Enabling this will allow a call if there are no other matching CLIs in the system. This will also replace the CLI that's presented with the CLI entered here.

    !!! Example
        Create a permitted list of CLIs, then select **Forced** on the CLI to use if none of the others in the permitted list match. (Best practice is to have one unique **Forced** CLI.)

+ **Direction Applied**:
    + **Outbound Calls (Termination)**: Customer dials a number; CLI rules control which caller IDs are allowed to pass.
    + **Inbound Calls (Origination)**: Calls coming into the system (DID/DDI) can be filtered based on CLI rules.

    !!! Example
        1. Create a permitted list that exclusively allows calls to or from the same country.
        2. Only allow incoming calls with a CLI starting with 44 (UK numbers).

+ **Allow Type**: You can select from various options like Mobile, Paging, VoIP, Satellite etc to allow the CLIs.

+ **Use DID**: Pull in DIDs from the customer's account to use either as a Filter or as a Replacement.  

    !!! Example
        If Dialled matched number is starting with **1**, the CLI routes to 11111.
     The CLI can be a Regular Expression also.

+ **Database** (To add CLI and PAID from a database):

    1. Upload a list of numbers you choose as CLI or PAID under **Developer > Database**.
    2. Go to **Customer > Routing > CLI** add the same database under database field. Under rewrite PAID field add this database.

    !!! note
        Make sure you select  the **Forced** option as **Yes**.

+ **Dialed Number Match**: To route to a specific CLI, you dialled match number.

    !!! Note "CLI per Route"
        If a `Tech Prefix` is specified in Routing (Ingress Routing :material-menu-right: Basic :material-menu-right: Tech Prefix) and the same `Tech Prefix` is added to the `Dialed Number Match` (using ^), the corresponding CLI rule will be applied to that specific route.

+ **Notes**: Notes give you information about the CLI.

+ **STIR / SHAKEN Certificate:** If you apply any STIR / SHAKEN Certificate to a customer's account for calls verification, for example, whether the calls are spam.

    + **STIR / SHAKEN Attestation:** This is the level of a certification you can select from 3 levels `A`, `B`, or `C`.

+ **Flags**:
    + *Performance CLI Selection*: When you select **Forced** as **Yes** and select a **Database**, you get an option to select a flag which is Performance CLI Selection. The Performance CLI Selection chooses the CLI with the best ASR
    + *Stir Shaken Required*: Choose this option when no certificate is selected.
    + *Stir Shaken Replace*: Choose this option when you wish to apply your Stir-shaken certificate instead of which is  already applied (for a call).

<img src= "/customer/img/cli_new.png" style="border: 2px solid #4472C4; border-radius: 8px;">

+ Click **`Save`** to complete the CLI configuration.

## Allow Customers to add their own CLI

Navigate to **Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Edit :material-menu-right: Verification** and select the "Approved CLIs Only" checkbox.

The customer can then go to the Customer Portal CLI section and add numbers there.  

<img src= "/customer/img/approvedcli1.png" width= "400" style="border: 2px solid #4472C4; border-radius: 8px;">

## Advanced CLI Match and Manipulation

### Filter Examples

The customer can choose which numbers to permit for origination of the calls by configuring a number as a **CLI** in ConnexCS.

Any number configured as a CLI is a part of the permitted list (unless you use extra settings to block it).

#### Filter CLI by Number

Block all calls that don't have the CLI "123456789":

| CLI | P-Asserted-ID | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|-----|-----|-----|-----|-----|-----|-----|
| `123456789`|||| No| Disabled | None|

Allow various CLIs to pass (by entering 2 or more records):

| CLI| P-Asserted-ID | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|-------------|-----------------|-------------|-----------------------|--------|----------|--------------|
| `123456789`|||| No| Disabled | None |
| `987654321`|||| No| Disabled | None |

#### Filter CLI by Pattern

Allow a range of numbers for a customer (this example allows all calls that start with 123456 to pass regardless of the last digits):

| CLI| P-Asserted-ID | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|----|----|---|---|---|---|---|
| `^123456`|||| No| Disabled | None|

You could also use a more complicated expression to match various ranges.

In this example, the number must start with 123456, followed by 1, 3, or 5, then followed by 1 or 2 numbers.

| CLI| P-Asserted-ID | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|---------------------------|-----------------|-------------|-----------------------|--------|----------|--------------|
| `^123456[135][0-9]{1,2}$` |||| No| Disabled | None|

This can work in combination with number lists as well.

#### Filter CLI by DID

If your customers do origination as well as termination, they already have a list of DIDs. Select _Filter_ from "Use DID" to automatically read from the list of DIDs.

Note that you can still add more CLIs along with the DID list.

| CLI | P-Asserted-ID | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID | Userspace DB |
|-----|-----------------|-------------|-----------------------|--------|---------|--------------|
||||| No| Filter  | None |

#### Filter P-Asserted-Identity by Number or Pattern

The same is true for P-Asserted-Identity (PAID) as it's with CLI; you can filter by PAID, as in this example.

| CLI | P-Asserted-ID | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|-----|---------------------------|-------------|-----------------------|--------|----------|--------------|
|`123456789`||| No| Disabled | None |
|| `^123456[135][0-9]{1,2}$` ||| No| Disabled | None|

#### Combined CLI and P-Asserted-Identity Filter

Filters are `AND` together, meaning that for a call to pass in this example, the CLI would need to be `1122334455` AND the P-Asserted-ID would need to be `123456789`.

| CLI| P-Asserted-ID| Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|--------------|---------------------------|-------------|-----------------------|--------|----------|--------------|
| `1122334455` | `123456789`||| No| Disabled | None|

#### Filter CLI from a Large List

Our Userspace database allows you to manage large lists of numbers. Once you upload the numbers under Developer :material-menu-right: [Database](https://docs.connexcs.com/developers/database/).

You can use the following options to filter by the uploaded list. Note that the filter is a partial match.

| P-Asserted-ID  | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB  |
|------------------|-------------|-----------------------|--------|----------|---------------|
|||| No| Disabled | [My Database] |

#### Filter CLI by Number Type

Filtering by Number Type will block calls that originate from a "type" that you specify; this can be something such as FIXED, MOBILE, etc.

| P-Asserted-ID  | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Block Type  |
|------------------|-------------|-----------------------|--------|----------|-------------|
|||| No| Disabled | FIXED|

### Replace Examples

We can also entirely replace the transmitted CLI.

Note that if a replacement occurs, it means that the match was successful and its allowed to pass through.

#### Direct Replacement

Replacing a `111111111111` with `222222222222`.

| CLI| P-Asserted-ID | Rewrite CLI    | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|----------------|-----------------|----------------|-----------------------|--------|----------|--------------|
| `111111111111` ||`222222222222`|| No| Disabled | None|

#### Pattern Replacement

Replace all calls that begins with a `1` with `222222222222`

| CLI| P-Asserted-ID | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|----------------|-----------------|----------------|-----------------------|--------|----------|--------------|
| `^1`|| `222222222222` || No| Disabled | None|

#### Force CLI

When choosing **Force CLI**, _if there is no match present_, the CLI marked Force can replace the CLI transmitted on a call.

In the example below, the CLI `111111111111` is sent regardless of what CLI the customer sends.

| CLI| P-Asserted-ID | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|----------------|-----------------|-------------|-----------------------|--------|----------|--------------|
| `111111111111`|||| Yes| Disabled | None|

In the following example, if the customer sends a call with `222222222222`, the call gets allowed to pass through, but if the customer were to send `333333333333`, the call gets replaced by `111111111111`.

| CLI| P-Asserted-ID | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|----------------|-----------------|-------------|-----------------------|--------|----------|--------------|
| `111111111111`|||| Yes| Disabled | None|
| `222222222222` |||| No     | Disabled | None|

#### Pick CLI at Random

You can add various CLIs that forcefully select a random CLI.

In this example, approximately 50% of the calls are sent with `111111111111` and 50% with `222222222222` (provided the customer doesn't send either of those two, otherwise the results would be same).

| CLI| P-Asserted-ID | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|----------------|-----------------|-------------|-----------------------|--------|----------|--------------|
| `111111111111` |||| Yes| Disabled | None|
| `222222222222` |||| Yes| Disabled | None|

!!! tip "Large Numbers of Random CLIs"
    To filter or replace calls with a larger number of CLIs or to perform more complex rules.

    Use Scriptforge to create a custom application that reads from a database to achieve far more comprehensive solutions.

#### Pick CLI from DID

This example shows how to pick a DID already associated with the customer at random for use as the CLI.

| CLI| P-Asserted-ID | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|----------------|-----------------|-------------|-----------------------|--------|----------|--------------|
||||| Yes| Random| None|

#### Pick CallerCLI from DID with Longest Match

You may wish to perform CLI Localization.

For example, if you have various DIDs (in this case, `123456`, `123567`, and `123789`) and are placing a call to `1234987654`, the system will find the longest match (in this case, `123456)` to use as the CLI.

| CLI| P-Asserted-ID | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID | Userspace DB |
|----------------|-----------------|-------------|-----------------------|--------|--------------|--------------|
||||| Yes| Prefix Match | None |

#### Pick a CLI from a Large List

Our Userspace database allows you to manage large lists of numbers. Once you upload the numbers, you can use the following options to choose a number at random.

| P-Asserted-ID | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID| Userspace DB  |
|-----------------|-------------|-----------------------|--------|--------------|---------------|
|||| Yes| Disabled| [My Database] |

##### Performance based CLI Selection

The Performance based CLI Selection chooses the CLI with the best ASR from a large list or a database.

This feature's objective is to allow customers to utilise the best performing CLIs.

**How does this algorithm work?**

1. If the CLI database contains more than 1000 records, the system randomly selects 1000 Direct Inward Dialing (DID) numbers. From these 1000 DIDs, the system identifies the best-performing ones based on ASR.
2. ASR lookup is initiated, and the ASR requires at least 50 calls per CLI ( in last 7 days) to be considered valid. If there are fewer than 50 calls for a CLI, the system assigns it an ASR of 50%.
3. The number of top-performing CLIs selected is determined by the Performance Top Batch Size setting. These top CLIs are selected for use based on the Performance Interval setting, which dictates how long this batch remains active.

**Steps to use Performance CLI Selection**

1. Navigate to **Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Routing :material-menu-right: CLI (blue `+` button).**
2. Select **Yes** for the **Forced** field.
3. Select a **Database**.
4. From the drop-down next to **Flags** select Performance CLI Selection.
5. **Performance Top Batch Size** choose how many of the top CLIs we use together.
6. **Performance Interval**: Choose from the dropdown how long this batch stays active(in seconds). You can choose from the minimum value of 5 minutes and maximum value of 1 day with intervals of 300 seconds.
7. **Performance Ban Time**: How long a used DID is paused for. You can choose the value from the dropdown with minimum value being 5 minutes and maximum value being 90 days. The value is stored in **seconds**.
8. Click `Save`.

<img src= "/customer/img/performancecli2.png" style="border: 2px solid #4472C4; border-radius: 8px;"> 

##### Deterministic Sequential CLI Persistence

This feature allows a CLI to be chosen from a database and used for a specific period of time before it's rotated to the next CLI in the list.

The CLI selection is TIME DETERMINISTIC. It means that the system chooses a CLI and that CLI will be used for the specified time by the customer and later each CLI is executed sequentially and for the same specified duration.

###### How to use Deterministic Sequential CLI Persistence feature

1. Navigate to **Management :material-menu-right: Customer :material-menu-right: Customer [Name] :material-menu-right: Routing :material-menu-right: CLI :material-menu-right: blue `+` button.**
2. Select **Yes** from drop-down menu for the **Forced** field.
3. Select the Database you wish to choose the CLI from. It will then automatically pull in numbers from the database and forces it to set as CLIs. (This feature already exists).

<img src= "/customer/img/cli_1.png" style="border: 2px solid #4472C4; border-radius: 8px;">

4.Follow steps 1 and 2.

5.Navigate to **Management :material-menu-right: Customer :material-menu-right: Customer [Name] :material-menu-right: Edit :material-menu-right: Config :material-menu-right: Vars<sup>TOML</sup>** and write the below code:

```js linenums="1"
[cli]
persist=600 //value is in seconds
```

!!! Note
    You can keep the value of CLI persist according to your requirements. For example, if you require CLI to be used of 10 minutes then keep the persist value as 600.

<img src= "/customer/img/cli_2.png" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! Example
    Envision a scenario with a database containing 10 CLIs, where the customer specifies that each CLI should remain active for precisely 10 minutes. By setting the persist value to 600 seconds (10 minutes), the system will follow this sequential pattern:

      - Activate CLI 1 for the initial 10 minutes
      - Transition to CLI 2 for the subsequent 10 minutes
    - Continue sequentially with CLI 3 through CLI 10, each active for the next 10 minutes

    After all 10 CLIs complete their respective 10-minute cycles, the system seamlessly returns to CLI 1, initiating another 10-minute period. This cyclic pattern repeats consistently.

### Manipulate CLI

Sometimes it can be useful to keep all or part of the transmitted CLI and manipulate it when it gets sent out.

!!! tip "Are you Normalizing?"
    Normalizing is the process of using a common number format. For ConnexCS, this is the international format.

    You shouldn't be using CLI Manipulation to correct the format of a number. 
    
    Parameter Rewrite (see [**Number Manipulation**](/number-manipulation/) for details) will help achieve this.

#### Regex Pattern Examples

**CLI Pattern Matching with Regular Expressions**

Regular expressions (regex) can be used to define complex CLI rules:

!!! Example
    1. If a customer sends a call where the CLI starts with a `9` we can strip it out and replace it with a `44`.
    So, `9123456789` will become `4423456789`.

Use **regex anchors** (e.g., ^ for start, $ for end) to precisely control matching logic.

| CLI| P-Asserted-ID | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|----------------|-----------------|-------------|-----------------------|--------|----------|--------------|
| `^9(.*)$` || `44$1`|| No| Disabled | None |

This may be a little complicated, so we can break this down:

+ `^` is a start anchor, which means that we start the match at the extreme left.
+ `9` is the literal digit 9.
+ `(` and `)` represent a match group, everything matched within it's placed in the variable `$1`.
+ `$` is an end anchor and it means that we finish the match at the extreme right.

In the Rewrite CLI section, `44` is the literal 44 digits, and `$1` will contain what it has matched in the previous stage.

#### Use PAID as CLI

You can use all or part of a sent P-Asserted-Identity as the CLI. The following example shows how to capture them all.

| CLI| P-Asserted-ID  | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|----------------|------------------|-------------|-----------------------|--------|----------|--------------|
| `.*`| `^(?<paid>.*)$`| `$<paid>`| No| Disabled | None|

Besides the matched group as above, we've the expression `(?<paid>.*)`. Here, `paid` represents a variable which stores this information, and it's then available in the CLI rewrite scope as `$<paid>`.

!!! tip "Variable Scope"
    Numbered groups (For example, `$1`, `$2`) will only be **read** from the CLI and will be available in the CLI rewrite or in the P-Asserted-Identity Rewrite. You can read and use Named groups anywhere.

### Manipulate P-Asserted-Identity

Manipulate the P-Asserted ID similarly to how we manipulated the CLI. In this case, we **must** use named groups and still have to match the CLI to allow the call to pass. As before, `9123456789` in the P-Asserted-Identity will become `4423456789`.

| CLI  | P-Asserted-ID  | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|------|------------------|-------------|-----------------------|--------|----------|--------------|
| `.*` | `^9(?<paid>.*)$` || `44$<paid>`| No| Disabled | None|

#### Use CLI as PAID

If we want to use the CLI in the P-Asserted-Identity it's a little easier as we can just use the numbered group.

| CLI| P-Asserted-ID | Rewrite CLI | Rewrite P-Asserted-ID | Forced | Use DID  | Userspace DB |
|----------|-----------------|-------------|-----------------------|--------|----------|--------------|
| `^(.*)$`||| `$1`| No | Disabled | None|
| | | |`$0`| No| Disabled/Filter | Select a database|
| | | |`\0`| No| Disabled/Filter | Select a database|
| | | |`<db>`|Yes | |Select a database|

### How to Invert a Regular Expression

This will BLOCK all USA Freephone numbers

```^((?!^1(800|833|844|855|866|877|888)).)*$```

### Additional Examples

The CLI system uses Regular Expressions to match and replace numbers. Here are some examples:

| Number|CLI | Replace CLI |Description |
|-------------|:--------------:|:-----------:|:-------------------------------------------------|
| 123456789 | ^1234 ||Allows only numbers starting with 1234 to pass |
| 123456789|789$ ||Allows only numbers ending with 789 to pass |
| 12345678912 | ^[0-9]{11,12}$ || Allows only numbers with 11 or 12 digits to pass |
| +123456789  |^\ +([0-9]+)$ |\1 |Remove the leading + |
| 01782123456 |^0([1-9]+)$ |44\1 |Remove the leading 0 and replace it with 44 |

_To learn more about writing regular expressions, visit [**RegExr**](http://regexr.com). It includes tutorials and exercises available for all levels of expertise._

## Allow list numbers per provider

Use **CLI Restrict** to allow CLIs to pass through a specific provider. To allow a configured CLI:

1. Click **Management :material-menu-right: Rate Card**.
2. Select the **Provider Rate Card** (under the Name column).
3. Select **Properties :material-menu-right: Advanced**.
4. Enter the CLIs / ANIs you want to allow in the [**CLI Restrict**](https://docs.connexcs.com/provider-ratecard/#advanced) box.
5. Click **`Save`**.

!!! Note
     You can now use DID options (Performance, Prefix Match, or Random) on a single CLI.

## General Condition 6 (GC6) Compliance

ConnexCS is GC6 compliant for end users, which:

> requires Communications Providers (CPs) to provide CLI facilities and ensure that the CLI Data provided with a call includes a valid, dialable telephone number that uniquely identifies the caller."
> For details on this General Condition, including guidelines for "valid" and "dialable" numbers, see OFCOM's [**Guidance on CLI Facilities**](https://www.ofcom.org.uk/__data/assets/pdf_file/0012/113214/statement-guidelines-cli-facilities.pdf).

To set the "P-Asserted-ID" per customer, see [**Configure CLI**](https://docs.connexcs.com/customer/cli/#creating-a-record) above.


[cli1]: /customer/img/cli1.png "Edit CLI" style="border: 2px solid #4472C4; border-radius: 8px;"

## CLI and PAID Responsibilities

1. If the customers don't offer any CLI, you can add a CLI list but make sure its validated.
2. The customers can partly modify the format of CLIs, to make it more compliant.
3. If a customer isn't complaining, you can allocate a PAID from YOUR OWN list of CLI's, which can help you trace the calls.
4. You shouldn't delete any information but you can fix the syntax or format.
5. You shouldn't present any invalid / false information.
