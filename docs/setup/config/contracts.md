# Contracts

**Setup :material-menu-right: Config :material-menu-right: Contracts**

Manage **Contracts** using ConnexCS to increase integration and compliance.

You can request customers to approve a contract before they can dial, or if they 'haven't approved a contract after a set grace period ends.

## Create Contract

1. Click on the :material-plus: button.
2. **Name** the contract.
3. Click **`Save`**.
4. Click on the new contract Name.
5. Under **Contract Revisions**, click :material-plus:.
6. Paste your contract in plain text.
7. Click **`Save`**.

!!! note "Contracts Revisions"
    Contracts are immutable, meaning that neither you nor the customer can change a contract once it's saved.

    You can issue a new Revision with new / updated contract requirements. This requires the customer to sign again.

## Assign Contract to a Customer

1. Go to **Management :material-menu-right: Customer :material-menu-right: [Your Customer] :material-menu-right: Contracts**, and then click :material-plus:.
2. Select the **Contract** (the most recent revision is automatically chosen).
3. (Optional) If you select both the **Grace Date** and **Required**, the customer's account will remain active until the set date.

    At that point, if the contract isn't signed, the account is suspended.

!!! warning "Plain-text signature"
    "Signing" a contract is the user's input of their name into a text box.

    We don't perform any further checks on this, nor do we make any claim that our system is proveable in court. 
    
    If you wish for a more robust verification system, we recommend you use a dedicated online signature system, and we can assist with the integration if required.
