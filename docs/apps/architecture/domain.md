# Domain

## Introduction

You can set the **Domain** where your applications will be visible and publicly accessible.

For example, you can use the domain name as `test.cnx.page`. This domain is provided by us free of charge.

You can also use any custom domain.

## Steps for setting up the Domain

1. Login to your account.
2. Navigate to **IDE** :material-menu-right: Select an App/Create an App `+` sign :material-menu-right: **Domain**.

<img src= "/apps/img/domain1.png" width= "350">

3.A window will pop-up as shown below.

Enter the domain name where your app will be displayed. You also have the option to use your own [Custom Domain](https://bani-customdomian--connexcs-docs.netlify.app/apps/architecture/domain/#custom-domain)

<img src= "/apps/img/domain2.png" width= "350">

3.Click `Save`.

!!! Warning
    For your application to be visible on the created domain, make sure you take care of the following things:

    1. The created user-interface in the **Page Builder** should have the **name** as **index**.

    <img src= "/apps/img/custom1.png" width= "275">
    <img src= "/apps/img/custom2.png" width= "350">

### Custom Domain Setup

**Step 1: Set up the CNAME record**

1. Access your domain account at your domain host.

2. Locate the page for updating your domain's DNS (Domain Name System) records.

3. Locate the `CNAME` records for your domain.

4. Add a new domain record such as `app.mycustomdomain.com`.

5. Point it toward `cnx.page`.

**Step 2: Add a Domain to App**

[Click here](https://docs.connexcs.com/apps/architecture/domain/#steps-for-setting-up-the-domain) to check the steps for adding the Domain to your App.
