# Table of Contents
* [Table of Contents](#table-of-contents)
* [CLI](#cli)
  * [Whitelist](#whitelist)
  * [Force CLI](#force-cli)
  * [CLI Restrict](#cli-restrict)
  * [Replace Specific CLI](#replace-specific-cli)
  * [P-Asserted-ID](#p-asserted-id)
  * [Advanced CLI Match & Manipulation](#advanced-cli-match-manipulation)

# CLI
CLI / ANI is the `From` part of the `SIP INVITE` message and contains the information about who the call was placed from, more specifically we are refering to the number that is presented to have sent the call.

The CLI options are set in Customer > [choose customer] > Routing > CLI

## Whitelist
ConnexCS allows you to white list CLI's which are allowed to pass through the system. You can do this by completing the CLI box, one per number.

## Force CLI
If you wish to change the CLI that has been presented for one of your choosing, you can enter the CLI that you wish to be presented and click the Force CLI box, this will overwrite the CLI with the one you add.

**Note:** You can add a whitelist of CLIs and select Force on a CLI which you wish to be used if none of the others in the whitelist match.

## CLI Restrict

With CLI restrict feature you can block calls. The blocked CLI can be added inside the provider rate card. Below are the steps.

1. Click on Management> Rate Card> 
2. Click on the provider Rate Card> Edit> Advanced
3. Enter the CLI/ANI’s that you wish to block
4. Click Save.

![alt text][recording-7]

## Replace Specific CLI
A CLI may be re-written, for example you can add `123456789` in the CLI box and have it be re-written by adding `987654321` in the re-write CLI box.

## P-Asserted-ID
`P-Asserted-Identification` is another SIP Header. Its purpose is _NOT_ to be presented, but it allows telcos to identify the originator on a network only level.

A P-Asserted-ID uses the exact same syntax as Replace CLI.

## Advanced CLI Match & Manipulation
The CLI system uses Regular Expressions to match and replace numbers. Here are a few examples

|             |            CLI | Replace CLI |                                      Description |
|-------------|---------------:|------------:|-------------------------------------------------:|
| 123456789   |          ^1234 |             |   Allows only numbers starting with 1234 to pass |
| 123456789   |           789$ |             |      Allows only numbers ending with 789 to pass |
| 12345678912 | ^[0-9]{11,12}$ |             | Allows only numbers with 11 or 12 digits to pass |
| +123456789  |   ^\+([0-9]+)$ |          \1 |                                 Remove leading + |
| 01782123456 |    ^0([1-9]+)$ |        44\1 |             Remove leading 0 and replace with 44 |

If you wish to learn or practice writing regular expressions, this is a great site: http://regexr.com/


[recording-7]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/63.png "recording-7"
[recording-8]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/recording-8.png "recording-8"

