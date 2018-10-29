# Table of Contents

- [Table of Contents](#table-of-contents)
- [CLI Restriction](#cli-restriction)
  - [How to add CLI?](#how-to-add-cli)
  - [Block CLI's](#block-clis)

# CLI Restriction

CLI stands for **Caller Line Identification**, a method used by VoIP systems to identify incoming calls for sorting and logging.  It is the technical term for the mechanism we know as Caller ID. In VoIP systems, CLI is more than just a way to display the number of incoming calls, however. It doubles as adefense against unidentified call attempts, and provides information to sort incoming calls.

In ConnexCS, CLI Restriction lets you present CLIs on customer accounts, so that any caller without a valid number is rejected outright.  Enabling the **Force CLI** option lets users pass the CLI without setting it on the customer's end. If no CLI rules are added, the defaults are used.  The mechanic also supports regular expressions.

## How to add CLI?
To add CLI on a customer's account:

* Click  **Managment** > **Customer** > **[Customer name]**.

![alt text][CLI-0]

* Select **Routing**

* Click the **`+`** button under **CLI**.

* Enter a CLI Number in E164 format.

![alt text][CLI-2]

* Click **`Save`**.

![alt text][CLI-4]



[CLI-0]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/CLI-0.png "CLI-0"
[CLI-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/CLI-2.png "CLI-2"
[CLI-4]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/CLI-4.png "CLI-4"

## Block CLI's

Blocking CLIs is a means to enforce call blocking on a system. Use this regular expression to block CLIs:

Regex: ```^(?!(1234|5678)).*$\n```

**Note** that the 1234 and the 5678 in the expression are two different CLIs. You can separate CLIs with a vertical bar `|` to express as many as needed.
