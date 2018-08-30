# Table of Contents

- [Table of Contents](#table-of-contents)
- [CLI Restriction](#cli-restriction)
  - [How to add CLI?](#how-to-add-cli)
  - [Block CLI's](#block-clis)

# CLI Restriction

CLI stands for **Caller Line Identification**, a method by which VoIP systems identify incoming calls for sorting purposes.  Essentially, it is the technical term for the mechanism we know as Caller ID. In VoIP systems, CLI is more than just a way to display the number of incoming calls; it doubles as an additional defense against unidentified call attempts and better management of incoming calls in general.

In ConnexCS, CLI Restriction lets you present CLIs on customer accounts, so that any caller without a valid number is rejected outright.  Enabling Force CLI option lets users pass the CLI without setting it on the customer's end. If no CLI rules were added,  just the default will pass through.  The mechanic also supports regular expressions.

**CLI = Caller Line Identification**

## How to add CLI?
* Click  **Managment**>**Customer**>**[Customer name]**

![alt text][CLI-0]

* Select **Routing**

* Click the **`+`** under CLI.

* Enter a CLI Number in E164 format.

![alt text][CLI-2]

* Click **`Save`**.

![alt text][CLI-4]



[CLI-0]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/CLI-0.png "CLI-0"
[CLI-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/CLI-2.png "CLI-2"
[CLI-4]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/CLI-4.png "CLI-4"

## Block CLI's

Blocking CLIs is a hand way to instill a call blocking on a system. Use this regular expression to block CLIs:

Regex: ```^(?!(1234|5678)).*$\n```

**Note** that the 1234 and the 5678 in the expression are two different CLIs. You can separate CLIs with a vertical bar `|` to express as many as needed.
