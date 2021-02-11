# Contracts
**Setup :material-menu-right: Config :material-menu-right: Contracts**

Manage **Contracts** using ConnexCS to increase integration and compliance. You can require customers approve a contract before they can dial, or if they have not approved a contract after a set grace period ends.

## Create Contract

1. Click on the **`+`** button.
2. **Name** the contract.
3. Click **`Save`**.
3. Click on the new contract Name.
4. Under **Contract Revisions**, click **`+`**.
5. Paste your contract in plain text.
3. Click **`Save`**.

!!! note "Contracts Revisions"
    Contracts are immutable, meaning that neither you nor the customer may change a contract once it has been saved. You can issue a new Revision with new/updated contract requirements. This will require the customer to sign again.

## Assign Contract to a customer

1. Go to **Management :material-menu-right: Customer :material-menu-right: [Your Customer] :material-menu-right: Contracts** then click the **`+`**.
2. Select the **Contract** (the most recent revision will be chosen automatically).
3. (Optional) If both the **Grace Date** and **Required** are selected, the customer's account will remain active until the date set. At that point, the contract must be signed or the account will be suspended.

!!! warning "Plain-text signature"
    "Signing" of a contract is the user inputting their name into a text box. We perform no further checking of this, nor to we make any claim that our system is provable in court. If you wish for a more robust verification system, we recommend you use a dedicated online signature system, we can assist with the integration if required.
