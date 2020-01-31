# CLI
**CLI/ANI** is the `From` part of the `SIP INVITE` message, which contains information about the caller. Specifically, it is the name and number of the person attempting to contact a user in a VoIP system, more commonly known as "Caller ID" in standard phone systems.

CLI options are set in **Customer** > **[customer]** > **Routing** > **CLI**.

## Whitelist
Whitelisted CLIs are those that allowed to pass through the system. Add the CLI number into the designated box and it will be cleared.

## CLI Restrict
CLI Restrict lets you block calls. The blocked CLI is added in the provider rate card:

1. Click **Management** > **Rate Card**. 
2. Select **Provider Rate Card** > **Edit** > **Advanced**.
3. Enter the CLI/ANIs you want to block.
4. Click **`Save`**.

![alt text][recording-7]

[recording-7]: /customer/img/63.png "recording-7"
[recording-8]: /customer/img/recording-8.png "recording-8"
