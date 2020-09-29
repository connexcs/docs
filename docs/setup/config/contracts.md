# Contracts
Setup :material-menu-right: Config :material-menu-right: Contracts

Manage **Contracts** using ConnexCS to increase integration and compliance by requiring customers approve the contract before they are allowed to dial. 

You can also restrict dialing by a customer automatically if they have not approved a contract before the grace period ends.

Contracts are immutable, meaning that neither you nor the customer may change a contract once it has been set. You can issue a new contract which would
require the customer to sign again.

## Create Contract

1. Click on the :fontawesome-plus: button.
2. Give the contract a name.
3. Click on the contract you created.
4. Click on :fontawesome-plus: button to add a revision.
5. Paste your contract in plain text.

## Add Contract to a customer

1. Go to Management :material-menu-right: Customer :material-menu-right: [Your Customer] :material-menu-right: Contracts :fontawesome-plus:
2. Select a contract (the most recent revision will be chosen automatically)
3. (Optional) Choose a grace date and if the contract is required to be signed.

If both the *grace date* and *required* are selected, the customer's account will remain active until the date set. At that point, the contract must be signed or the account will be suspended.

!!! warning
	"Signing" of a contract is the user inputting their name into a text box. We perform no further checking of this, nor to we make
	any claim that our system is provable in court. If you wish for a more robust verification system we recommend you use a dedicated
	online signature system, we can assist with the integration if required.
