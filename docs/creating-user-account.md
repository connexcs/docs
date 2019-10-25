# Creating a User Account 

You must create a user account to allow a user to use the features available in the ConnexCS Control Panel. To create a user account, you will need to specify the name and the email address of the user.

!!! question "Why should you specify an email address that you use often?" 
    You should specify an email address you use often, because:
    
    * The email address is the username to log into the user account.
    * The ConnexCS Control Panel sends an email to the email address, to verify that you own the email address.
    * The ConnexCS Control Panel sends notifications such as, credit alerts, low balance alerts and so on, to that email address. 

!!! question "What if I forget my password?" 
    You must contact the administrator who created your user account for the ConnexCS Control Panel. The administrator can reset the password without needing to know the current password.
    
For more information about how to reset a forgotten password, see <link to Change Password by administrator>.

To create a user account:

1.  Log into the ConnexCS Control Panel.
	 
    ConnexCS displays the page you were on when you logged out of the Control Panel.
    
2.  Click `Setup > Settings > User` in the navigation panel (located on the left of the page).
    
    The Users and Groups page appears.
    
    You can see the list of users on the left of the page, and the list of groups on the right of the page. 
    
3.  Click the '+' icon (located on the left of the page).
    
    The User pop-up appears.
    
4.  Do the following to create a user account:
    
    * In the `Name` text box, enter the name of the user.
       
    * 	(Optional) From the `Groups` drop-down list, select the name of the user group whose permissions this user must have.
    
    	You can repeat this step multiple times, if you want to associate the user with multiple user groups. For more information about how to create a user group, see <link to user group topic>.
		 
    * 	In the `Password` text box, enter a password that the user must use, to log into the ConnexCS Control Panel.
    
    	We recommend that you instruct the new users to change the default password (that you provide at the time of adding the user account) when they log in for the first time to the ConnexCS Control Panel. This ensures that only the owner of the user account knows the password, and your users' accounts are safe from unauthorised access.For more information about how to change a password, see link to Changing the Password topic. 
    
    *	From the `Role` drop-down list, select the role of the user.
    
    	The options available are: `User` and `Administrator`. If you do not select a role, by design, the ConnexCS Control Panel assigns the role of an Administrator. 
        
    *	In the `IP Whitelist` text box, add the list of IP addresses (one below the other) from which the user must be allowed to log in.
    	If you specify an IP Whitelist, the user cannot log in from IP addresses that are not included in the IP Whitelist.
	
	You can specify an IP Whitelist in the following ways:
	
	* 	Single IP address - for example, 1.1.1.1
	* 	Wildcard for IP addresses  - 3.3.3.
	* 	Range of IP address in the CIDR (Classless Inter-Domain Routing) format - 4.4.4.0/31

	The following figure illustrates the User pop-up with some sample values.
       
[alt text][user-popup]

4.  Click `Save`.

	ConnexCS Control Panel confirms that it has created a new user account.
	
	You can see an entry for the new user account on the Users and Groups page.
    
5.  (Optional) To abort creating the user account, click X located at the top-right corner of the pop-up.

[user-popup]: /setup/img/user-popup.png "user-popup"
