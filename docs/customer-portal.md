# Table of Contents

* [Table of Contents](#table-of-contents)
* [Customer Portal](#customer-portal)
    * [Adding New Domain](#to-add-a-new-domain)
    
# Customer Portal

Customer portal lets your customer access their account with you. The Customer portal can be whitelabelled to your brand name, also you can add your own custom domain.

We will discuss how to add a "add on domain" with your domain provider

1. Sign in to your domain's account at your domain host.
2. Locate the page for updating your domain's DNS records.
3. The page might be called something like DNS Management, Name Server Management, or Advanced Settings.
4. Locate the **CNAME** records for your domain. Don't add an A-record to your switch, your switch does not have a webserver. Don't setup a redirect this wont work either.
5. Add an add on domain, something like, portal.yourwebsite.com
6. Point the domain towards portal.connexcs.com

Once this is configured with your domain hosting provider you will now have to configure this on your Connex control panel, below are the steps.

To add a new domain:

1. Go to Setup>Integrations then click Domains.

   ![alt text][domain]

2. Click on the '+' icon under Portal.

 ![alt text][domain1]

2. Enter the domain name, example, portal.yourwebsite.com
3. Select the brand name, this is the name that will be displayed on your customer portal.
4. Select the customer signup. If you select this to yes, you are allowing the new customers to signup on your customer portal. The new signup customers will appear on your control panel under customers with a pending approval status.
5. Select the carrier signup. If you select this to yes, you are allowing the new carriers to signup on your customer portal. The new signup carrier will appear on your control panel under carrier with a pending approval status.
6. Enter the Customer limit, this is how much credit you wish to allow your new sign up customers.
7. Select the access (Carrier Portal, CDR, Rate Card, Balance etc.) that you wish to allow your customers on customer portal.
8. Click on the Save button.

   ![alt text][add-new-domain]

We will now learn how to add Contacts on control panel, basically this is done to grant access to your customers for customer portal, below are the steps.

1. Click on Management> Customers

  ![alt text][customer]

2. Click on the customer name

   ![alt text][contacts]

3. Enter the contact name

  ![alt text][contacts1]
  
4. Enter the Email address, this email address will be used for login
5. Check the Auto generate password box if you would like the password to be generated online and the generated password will be sent via email. Unchecking the box will let you manually set the password
6. You may enter any information on public notes, these notes will be displayed on the customer portal when logged in. The private notes are limited to display only on the control panel, these notes will not be displayed on the customer portal.
7. Click Save

 ![alt text][contacts-2]

You or your customers can use these credentials to login to the customer portal.


[domain]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/168.png "Domain"
[domain1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/169.png "Domain1"
[add-new-domain]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/170.png "Add-New-Domain"
[customer]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/171.png "customer"
[contacts]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/172.png "contacts"
[contacts1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/173.png "contacts1"
[contacts-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/174.png "contacts-2"



