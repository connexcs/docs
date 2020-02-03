# CLI
**CLI/ANI** is the `From` part of the `SIP INVITE` message, which contains information about the caller. Specifically, it is the name and number of the person attempting to contact a user in a VoIP system, more commonly known as "Caller ID" in standard phone systems.

Additional CLI options are set in **Customer** > **[customer]** > **Routing** > **CLI**.

## Whitelist
Whitelisted CLIs are those that allowed to pass through the system. This is added in the Customer Card:

1. Go to **Management** > **Customer**
1. Click the **[customer]** > **Routing**
1. Under **CLI**, click on the **`+`** button.
1. Enter the number in the CLI field then click **`Save~**

## CLI Restrict
CLI Restrict lets you block calls. The blocked CLI is added in the Provider Rate Card:

1. Click **Management** > **Rate Card**. 
2. Select **Provider Rate Card** (under the Name column).
1. Select **Properties** > **Advanced**.
3. Enter the CLI/ANIs you want to block in the **CLI Restrict** box.
4. Click **`Save`**.

![alt text][recording-7]

[recording-7]: /customer/img/63.png "recording-7"
