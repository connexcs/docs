# Do Not Call Lists

In today's society, all modern call carriers should recognise and honor **Do Not Call Lists (DNC).**

Calling numbers on these lists can result in costly fines and prosecutions.

Use Script Forge to manage these calls by adding the numbers to the system. If you dial a number on the list, the caller will receive an alert that the number is on the DNC list and the call won't get completed.

## Do Not Call Check

**Step 1: Setup the Database**

[Click here](https://docs.connexcs.com/apps/architecture/database/) to know the processof Database creation.

**Step 2: Configure Script Forge**

1. Navigate to **IDE :material-menu-right: Script Forge**
2. Add the Script **Name**.
3. Select `App` for the **Type**.
4. Click **Save**.
5. Click the newly created App.
6. Add the JavaScript code [**dnc-add.js**](https://github.com/connexcs/scriptforge-examples/blob/master/dnc-check.js).
7. Click the green arrow to `Save and Run`.

!!! info "More on Script Forge"
    See [**Script Forge**](https://docs.connexcs.com/apps/architecture/scriptforge/#configuration) in our documentation for more details on using Script Forge.

**Step 3: Add script to Customer**

1. Navigate to **Customer :material-menu-right: [Customer Name] :material-menu-right: Edit :material-menu-right: Routing :material-menu-right: Ingress Routing**
2. On the **Script Forge** tab, enter the following under **Vars**:

    ```bash
    [dnc]
    db="name_from_step1"
    ```

3. Click **Save**.

## Add individual customers to DNC

Add the following to Script Forge:

1. Under **Developer :material-menu-right: Script Forge**.
2. Add the Script **Name**.
3. Select `App` for the **Type**.
4. Slick **Save**.
5. Click on the newly created App.
6. Add the JavaScript code [**dnc-add.js**](https://github.com/connexcs/scriptforge-examples/blob/master/dnc-add.js).
7. Click the green arrow to `Save and Run`.

## Do Not Originate (DNO) List Blocking

A DNO list is a collection of phone numbers that are flagged as never being used for an outgoing contact.

A list of phone numbers that have been found to be spoofed and used to enable illegal, fraudulent, or other malicious traffic is a DNO list.

These are unassigned or unallocated numbers as well as inbound-only lines that should never be used to make calls.

DNO blocks the Do Not Originate Numbers and Non-allocated number ranges.

Following are the steps to enable the DNO list.

1. Go to **Management :material-menu-right: Customer** and select the customer you want to enable the DNO list for.
2. Then go to **Routing :material-menu-right: Price Limits** and from the drop-down you can enable the DNO list.
3. The DNO does two things when its enabled. First, it blocks the DNO numbers from the Federal Government and second, it blocks the numbers we know which don't exist.
4. You should enable the **FTC DNC Report ANI Block (USA)** option. This blocks the calls which have been reported as originating invalid numbers.
5. Click on `Save`.
<img src= "/guides/img/dno.jpg" style="border: 2px solid #4472C4; border-radius: 8px;">

### US DNO Requirements in ConnexCS

According to [Federal Register Vol. 87, No. 222](https://www.govinfo.gov/content/pkg/FR-2022-11-18/pdf/2022-25148.pdf?utm_medium=email&utm_campaign=subscription+mailing+list&utm_source=federalregister.gov), DNO list should contain the following.

1. Known DNO numbers
2. Non-allocated ranges
3. Allocated ranges but unused numbers

The [FCC](https://www.ftc.gov/news-events/topics/do-not-call-registry) decided against requiring the use of a particular list but will still let gateway providers use any DNO list as long as it's reasonable.

[dnc-3]: /misc/img/dnc-3.png "DNC-3" style="border: 2px solid #4472C4; border-radius: 8px;"
