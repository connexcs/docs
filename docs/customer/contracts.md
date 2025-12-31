# Contract

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Customer Account Management / Contracts & Compliance<br>
<strong>Audience</strong>: Administrators, Engineers, Legal / Compliance Teams<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: Approximately 30–60 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS account with access to the Customer module and permission to manage contracts<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/setup/config/contracts/">Setup → Config → Contracts</a>, <a href="https://docs.connexcs.com/customer/documents/">Documents (KYC & Upload)</a><br>
<strong>Next Steps</strong>: <a href="https://docs.connexcs.com/customer/contracts/#assign-contracts">Assigning Contracts to Customers</a>, <a href="https://docs.connexcs.com/customer-portal/cp-contracts/">Viewing and Approving Contracts via Customer Portal</a><br>

</details>

**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Contract**

The **Contracts** section lists contracts associated with the customer.

**Contracts** are useful when you want new customers to agree to certain conditions before they can dial.

Ensures compliance and security through contractual agreements and identity verification.

Click on each name to view the details.

## Assign Contracts

1. Click :material-plus: and complete the following fields:

   + **Contract**: Select the desired Contract.
   + **Grace Date**: Let the customer demo the service until the selected date, after which they must agree to the contract to continue using the service.
   + **Required**: Enable this to shut down the account if the contract hasn't been yet signed after the Grace Date.

2. Click **`Save`** to assign the contact to the customer.

<img src= "/customer/img/customer-contracts1.png" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! tip "How to create a Contract"
    For details on Contract setup, see **Setup :material-menu-right: Config :material-menu-right: [Contracts](https://docs.connexcs.com/setup/config/contracts/)**.

    Contract Revisions are also available here.

!!! Danger "Customers are restricted from making calls until their contract is reviewed and approved."
