# Prefix Sets

**Setup :material-menu-right: Advanced :material-menu-right: Prefix Set**

A **Prefix Set** groups containing one or more prefixes together. You can then apply this set to a Customer or Route.

Without the ability to use a Prefix Set, you need to manually configure each individual Customer or Route, increasing the possibility of human error.

With Prefix Sets, we avoid these errors and reduce configuration time as a whole.

ConnexCS supports plain text as well as regular expressions when building Prefix Sets for greater flexibility.

## Configure Prefix Set

**Step 1: Create Prefix Set**

1. Click **:material-plus:**.
2. **Name** the set.
3. **Data** includes the prefixes, one per line (plain-text or regular expressions).

    See [**Example Dial Strings for Prefix sets**](/setup/advanced/prefix-set/#example-dial-strings-for-prefix-sets) below.

4. Use **Flags** (optional) to set up global deny lists.

    See [**Flags**](/setup/advanced/prefix-set/#flags) below.

5. Click **`Save`**.

**Step 2: Apply Prefix Set**

You can apply Prefix Sets to the following locations under the Management menu:

  1. Customer :material-menu-right: Routing :material-menu-right: Ingress Routing :material-menu-right: Basic :material-menu-right: [Dial String Prefix Set](https://docs.connexcs.com/customer/routing/#basic)

  2. Routing :material-menu-right: Routing Global :material-menu-right: Basic :material-menu-right: [Dial String Prefix Set](https://docs.connexcs.com/global-routing/)

  3. Rate Card :material-menu-right: Customer Rate Cards :material-menu-right: Profits :material-menu-right: :material-plus: :material-menu-right: Config :material-menu-right: [Prefix Set](https://docs.connexcs.com/customer-ratecard/#main-tab)
  
  4. Customer :material-menu-right: Routing :material-menu-right: Ingress Routing :material-menu-right: Strategy :material-menu-right: [Prefix Set](https://docs.connexcs.com/customer-ratecard/#main-tab)

## Flags

Use Flags to create a *Global CLI Blacklist* or a *Global Dialled Number Blacklist* (Aka Block List). This prevents all calls going through the system which match the defined prefix set.

!!! warning "Deny list or Do Not Call list"
    Use Flags for large numbers that change infrequently.

    If you want to manage a DNC list, please review our [**Do Not Call (DNC)**](https://docs.connexcs.com/dnc/) setup.

## Example Dial Strings for Prefix sets

Prefix Sets and all Dial String fields accept plain text or regular expressions. List only one prefix per line. Here are 3 samples using plain text, regex, or a mix:

**Plain-Text**

```
441
442
```

**Regular Expression (RegEx)**
```
^44(1|2)
```

**Combination (UK Landline & Canada)**

```
441
442
^1(204|226|236|249|250|289|306|343|403|416|418|438|450|506|514|519|579|581|587|604|613|647|705|709|778|780|807|819|867|902|905)
<<<<<<< HEAD
=======
```
>>>>>>> 0edcf7cc80529152fdd3e8730ca7238575d359ad
