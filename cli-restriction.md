# Table of Contents

* [Table of Contents](#table-of-contents)
* [CLI Restriction](#cli-restriction)
  * [How to add CLI](#how-to-add-cli)

# CLI Restriction

CLI Restriction enables you to pass a CLI which is presented on the customer's account. Anything without a valid CLI will not be passed through.

Checking the Force CLI option will let the user to pass the CLI without having to set the CLI at customer's end.

**Note:** If no CLI rules are added just the default CLI which is presented by your end customer will pass through. Also we do support regular expression.

**CLI = Caller Line Identification**

## How to add CLI?

* Click on Managment > Customer > [Customer name]

![alt text][CLI-0]

* Click on Routing Routing

* Click + under CLI.

* Enter the CLI Number in E164 format.

![alt text][CLI-2]

* Click Save.

![alt text][CLI-4]


[CLI-0]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/CLI-0.png "CLI-0"
[CLI-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/CLI-2.png "CLI-2"
[CLI-4]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/CLI-4.png "CLI-4"
