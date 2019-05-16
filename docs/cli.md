# CLI
**CLI/ANI** is the `From` part of the `SIP INVITE` message, which contains information about the caller. Specifically, it is the name and number of the person attempting to contact a user in a VoIP system, more commonly known as caller ID in standard phone systems.

CLI options are set in **Customer** > **[customer]** > **Routing** > **CLI**.

## Whitelist
Whitelisted CLIs are those that allowed to pass through the system. Add the CLI number into the designated box and it will be cleared.

## Force CLI
To change the CLI that is presented for another, enter the CLI you wish to present, and click the **`Force CLI`** box.  It will allow you to override the previous number with one that is accepted. You can add a whitelist of CLIs and select Force on a CLI which you wish to be used if none of the others in the whitelist match.

## CLI Restrict

CLI Restrict lets you block calls. The blocked CLI is added in the provider rate card:

1. Click **Management** > **Rate Card**. 
2. Select **Provider Rate Card** > **Edit** > **Advanced**.
3. Enter the CLI/ANIs you want to block.
4. Click **`Save`**.

![alt text][recording-7]

## Replace Specific CLI
A CLI can be re-written. For example, you can add `123456789` in the CLI box, and then rewrite by adding `987654321` in the re-write CLI box.

## P-Asserted-ID
**`P-Asserted-Identification`** is another SIP Header. It is not presented, but allows telephone companies to identify originators on a network-only level. A P-Asserted-ID uses the same syntax as Replace CLI.

## Advanced CLI Match & Manipulation
The CLI system uses Regular Expressions to match and replace numbers. Here are a few examples:

|             |            CLI | Replace CLI |                                      Description |
|-------------|---------------:|------------:|-------------------------------------------------:|
| 123456789   |          ^1234 |             |   Allows only numbers starting with 1234 to pass |
| 123456789   |           789$ |             |      Allows only numbers ending with 789 to pass |
| 12345678912 | ^[0-9]{11,12}$ |             | Allows only numbers with 11 or 12 digits to pass |
| +123456789  |   ^\+([0-9]+)$ |          \1 |                                 Remove leading + |
| 01782123456 |    ^0([1-9]+)$ |        44\1 |             Remove leading 0 and replace with 44 |

To learn more about writing regular expressions, visit http://regexr.com.  There are lots of tutorials and excercises available for all levels of expertise.


[recording-7]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/63.png "recording-7"
[recording-8]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/recording-8.png "recording-8"