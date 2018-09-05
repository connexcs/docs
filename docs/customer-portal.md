# Table of Contents

- [Table of Contents](#table-of-contents)
- [Customer Portal](#customer-portal)
  - [Adding a New Domain](#adding-a-new-domain)
  - [Adding Contacts to Customer Portal](#adding-contacts-to-customer-portal)
    
# Customer Portal

The Customer Portal allows your customers access to information about their account in a fixed domain where you control the flow of data. It can be white-labeled to brand names, and it allows for customized domains.

## Adding a New Domain 
The following will explain how to add a new to domain to your Customer Portal:
1. Sign in to your domain account at its host.
2. Locate the page for updating your domain's DNS records. It will likely be called something like DNS Management or Advanced Server Management.
3. Locate the **CNAME** records for your domain.
4. Provide an add-on domain, such as portal.yourwebsite.com.
5. Point the domain toward portal.connexcs.com.

1. Go to **Setup**>**Integrations**>**Domains**.

   ![alt text][domain]

2. Click the **`+`** button under Portal.

 ![alt text][domain1]

3. Enter the domain name.
4. Select the brand name, the name that will be displayed on your portal.
5. Select the customer signup. Selecting **yes** allows new customers to sign up on your customer portal. They will appear on the control panel under "pending approval".
6. Select the carrier signup. Setting this to **yes** allows the new carriers to sign up on your customer portal. The new carrier will appear the control panel under "pending approval".
7. Enter a customer limit, the amount of credit extended to new sign-ups.
8. Select the level of access--e.g. Carrier Portal, CDR, Rate Card, Balance--you wish to allow customers.
9. Click the **`Save`** button.

   ![alt text][add-new-domain]

## Adding Contacts to Customer Portal
The following are the steps to add contacts in the control panel:

1. Click on Management> Customers

  ![alt text][customer]

2. Click on the customer name

   ![alt text][contacts]

3. Enter the contact name

  ![alt text][contacts1]
  
4. Enter the Email address, this email address will be used for login
5. Check the Auto generate password box if you would like the password to be generated online and the generated password will be sent via email. Unchecking the box will let you manually set the password
6. You may enter any information on public notes here. The notes will be displayed on the customer portal after login. Private notes only display in the control panel.
7. Click **`Save`**

 ![alt text][contacts-2]

These credentials can be used by providers and customers to log into the Customer Portal.


[domain]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/168.png "Domain"
[domain1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/169.png "Domain1"
[add-new-domain]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/170.png "Add-New-Domain"
[customer]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/171.png "customer"
[contacts]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/172.png "contacts"
[contacts1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/173.png "contacts1"
[contacts-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/174.png "contacts-2"



