# CLI
**CLI/ANI** is the `From` part of the `SIP INVITE` message, which contains information about the caller. Specifically, it is the name and number of the person attempting to contact a user in a VoIP system, more commonly known as "Caller ID" in standard phone systems.

Additional CLI options are set in **Customer** > **[customer]** > **Routing** > **CLI**.

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
ConnexCS is GC6 compliant for end users, which "requires Communications Providers (CPs) to provide CLI facilities, and ensure that the CLI Data provided with a call includes a valid, dialable telephone number which uniquely identifies the caller." For details on this General Condition, including guideliens for "valid" and "dialable" numbers, see the Ofcom [Guidance on CLI Facilities](https://www.ofcom.org.uk/__data/assets/pdf_file/0012/113214/statement-guidelines-cli-facilities.pdf).

To configure per customer, set the CLI P-Asserted-ID found in the customer routing configuration. See the [CLI](https://docs.connexcs.com/customer/customer/#cli) section for more detail on Advanced CLI Match and Manulpulation. 

[recording-7]: /customer/img/63.png "recording-7"
