# Prefix Sets

**Setup :material-menu-right: Advanced :material-menu-right: Prefix Set**

A **Prefix Set** groups one or more prefixes together. You can then apply this set to a Customer or Route. Without the ability to use a Prefix Set, you need to manually configure each individual Customer or Route, increasing the possibility of human error.

With Prefix Sets, we avoid these errors and reduce configuration time overall.

ConnexCS supports plain text as well as regular expressions when building Prefix Sets for greater flexibility.

## Configure Prefix Set

**Step 1: Create a Prefix Set**

1.1 Click **:material-plus:**.
1.2. **Name** the set.
1.3. **Data** includes the prefixes, one per line (plain-text or regular expressions). See [**Example Dial Strings for Prefix sets**](/setup/advanced/prefix-set/#example-dial-strings-for-prefix-sets) below.
1.4. Use **Flags** (optional) to setup global blacklists. See [**Flags**](/setup/advanced/prefix-set/#flags) below.
1.5. Click **`Save`**.

**Step 2: Apply the Prefix Set**
You can apply Prefix Sets to the following locations under the Management menu:

+ Customer :material-menu-right: Routing :material-menu-right: Ingress Routing :material-menu-right: Basic :material-menu-right: [Dial String Prefix Set](https://docs.connexcs.com/customer/routing/#basic)

+ Routing :material-menu-right: Routing Global :material-menu-right: Basic :material-menu-right: [Dial String Prefix Set](https://docs.connexcs.com/global-routing/)

+ Rate Card :material-menu-right: Customer Rate Cards :material-menu-right: Profits :material-menu-right: :material-plus: :material-menu-right: Config :material-menu-right: [Prefix Set](https://docs.connexcs.com/customer-ratecard/#main-tab)

+ Customer :material-menu-right: Routing :material-menu-right: Ingress Routing :material-menu-right: Strategy :material-menu-right: [Prefix Set](https://docs.connexcs.com/customer-ratecard/#main-tab)

## Flags

Use Flags to create a *Global CLI Deny list* or a *Global Dialled Number Deny list* (Aka Block List). This prevents all calls going through the system which match the defined prefix set.

!!! warning "Deny list or Do Not Call List"
    Use Flags for large amounts of numbers that change infrequently. If you want to manage a DNC list, please review our [**Do Not Call (DNC)**](https://docs.connexcs.com/dnc/) setup.

## Example Dial Strings for Prefix Sets

Prefix Sets and all Dial String fields accept plain text or regular expressions. List only one prefix per line.

Here are 3 samples using plain-text, regex, or a mix:

**Plain-Text**

441
442

**Regular Expression (RegEx)**

^44(1|2)

**Combination (UK Landline & Canada)**

441
442
^1(204|226|236|249|250|289|306|343|403|416|418|438|450|506|514|519|579|581|587|604|613|647|705|709|778|780|807|819|867|902|905)
