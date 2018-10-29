# Table of Contents

- [Table of Contents](#table-of-contents)
- [Customer Portal](#customer-portal)
  - [Adding a New Domain](#adding-a-new-domain)
  - [Adding Contacts to Customer Portal](#adding-contacts-to-customer-portal)
    
# Customer Portal

The Customer Portal grants access to information about customer accounts in a fixed domain, where you can control the flow of data they receive. It can be white-labeled to brand names, and it allows for customized domains.

## Adding a New Domain 
To add a new to domain to your Customer Portal:
1. Sign in to your domain account at its host.
2. Locate the page for updating your domain's DNS records, i.e. DNS Management or Advanced Server Management.
3. Locate the **CNAME** records for your domain.
4. Provide an add-on domain, such as portal.yourwebsite.com.
5. Point the domain toward portal.connexcs.com.

6. Go to **Setup** > **Integrations** > **Domains**.

   ![alt text][domain]

7. Click the **`+`** button under Portal.

 ![alt text][domain1]

8. Enter the domain name.
9. Select the brand name, the name that will be displayed on your portal.
10. Select the customer signup. Selecting **yes** allows new customers to sign up on your customer portal. They will appear on the control panel under _pending approval_.
11. Select the carrier signup. Setting this to **yes** allows the new carriers to sign up on your customer portal. The new carrier will appear the control panel under _pending approval_.
12. Enter a customer limit, the amount of credit extended to new sign-ups.
13. Select the level of access--e.g. Carrier Portal, CDR, Rate Card, Balance--you wish to allow customers.
14. Click the **`Save`** button.

   ![alt text][add-new-domain]

## Adding Contacts to Customer Portal
To add contacts in the control panel:

1. Click on **Management** > **Customers**.

  ![alt text][customer]

2. Select a customer by name from the list.

   ![alt text][contacts]

3. Enter the contact name.

  ![alt text][contacts1]
  
4. Enter the Email address, this email address will be used for login.
5. Check the auto-generated password box to generate a password online and send it via email. Unchecking the box will let you set the password manually.
6. You may enter any information on public notes here. The notes will be displayed on the customer portal after login. Private notes only display in the control panel.
7. Click **`Save`**. These credentials can be used by providers and customers to log into the Customer Portal.

 ![alt text][contacts-2]




[domain]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/168.png "Domain"
[domain1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/169.png "Domain1"
[add-new-domain]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/170.png "Add-New-Domain"
[customer]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/171.png "customer"
[contacts]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/172.png "contacts"
[contacts1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/173.png "contacts1"
[contacts-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/174.png "contacts-2"



