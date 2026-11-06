# Do Not Call Lists

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Compliance & Call Filtering / DNC Management<br>
<strong>Audience</strong>: Administrators, Compliance Teams, Support Engineers<br>
<strong>Difficulty</strong>: Beginner to Intermediate<br>
<strong>Time Required</strong>: Approximately 20–30 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS account with access to Compliance Tools, and permission to manage DNC lists<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/setup/advanced/prefix-set/">Prefix Set</a>, <a href="https://docs.connexcs.com/dnc/#us-dno-requirements-in-connexcs">DNO</a>, <a href="https://docs.connexcs.com/customer/routing/#united-states-federal-do-not-call-dnc">Federal DNC</a>, <a href="https://docs.connexcs.com/customer/routing/#united-kingdom-telephone-preference-service-tps">TPS</a><br>
<strong>Next Steps</strong>: After configuring your DNC settings, set up automated lookups via <code>Routing → Routing Table</code> filters and review additional compliance datasets under <strong>Compliance Tools</strong>.<br>

</details>

In today's society, all modern call carriers should recognise and honor **Do Not Call Lists (DNC).**

Calling numbers on these lists can result in costly fines and prosecutions.

To block calls to numbers on your own DNC list, store the numbers in a Prefix Set that has the **Database** flag enabled, then select that Prefix Set as the DNC list on the customer's route. If a customer dials a number on the list, the call won't get completed.

## Create a DNC List Using a Prefix Set Database

**Step 1: Create the Prefix Set**

1. Navigate to **Setup :material-menu-right: Advanced :material-menu-right: [Prefix Set](https://docs.connexcs.com/setup/advanced/prefix-set/)** and click **:material-plus:** in the top toolbar.
2. Enter a descriptive **Name**, for example `My DNC List`.
3. Under **Flags**, select **Database**. The **Data** field is removed from the form, because the numbers are managed in the database instead.
4. (Optional) To let a customer view or edit the list in their portal, select the **Customer** and turn on **Customer Read** or **Customer Write**. See [Customer access](https://docs.connexcs.com/setup/advanced/prefix-set/#customer-access).
5. Click **Save**.

**Step 2: Add the Numbers**

1. In the Prefix Set list, locate the Prefix Set and click **Numbers** in the **Database** column.
2. Add the numbers you want to block, in international format without the leading `+` or `00` (for example `441234567890`):
    + **Single number**: Click **:material-plus:** in the toolbar, enter the number in **Phone Number**, and click **Save**.
    + **Large list**: Click **Paste / Upload**, then paste the numbers or click **Load from file** to select a `.txt` or `.csv` file (up to 20 MB). Put one number per line, or separate numbers with commas. Check the count of new entries, then click **Add number(s)**.

For deleting numbers or emptying the database, see [Number database](https://docs.connexcs.com/setup/advanced/prefix-set/#use-3-number-database).

!!! tip "Keep the list up to date"
    Add new numbers to the same Prefix Set as you receive opt-out requests. You don't need to change the route each time.

!!! warning "Emptying the database removes every number in it and can't be undone. The customer can dial those numbers again straight away."

**Step 3: Select the Prefix Set on the Customer's Route**

1. Navigate to **Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Routing**.
2. Open the route under **Ingress Routing**.
3. Go to **Security & Controls :material-menu-right: DNC List**.
4. Select the Prefix Set you created.
5. Click **Save**.

!!! info "Federal DNC and TPS"
    You can select your own Prefix Set alongside the [**United States Federal DNC**](https://docs.connexcs.com/customer/routing/#united-states-federal-do-not-call-dnc) and [**United Kingdom TPS**](https://docs.connexcs.com/customer/routing/#united-kingdom-telephone-preference-service-tps) in the same DNC List field.

## Do Not Originate (DNO) List Blocking

A DNO list is a collection of phone numbers that are flagged as never being used for an outgoing contact.

A list of phone numbers that have been found to be spoofed and used to enable illegal, fraudulent, or other malicious traffic is a DNO list.

These are unassigned or unallocated numbers as well as inbound-only lines that should never be used to make calls.

DNO blocks the Do Not Originate Numbers and Non-allocated number ranges.

Following are the steps to enable the DNO list.

1. Go to **Management :material-menu-right: Customer** and select the customer you want to enable the DNO list for.
2. Then go to **Routing :material-menu-right: Security & Controls** and from the drop-down you can enable the DNO list.
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