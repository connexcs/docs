# Table of Contents
* [Table of Contents](#table-of-contents)
* [Circuit Test](#circuit-test)


# Circuit Test

A circuit test works by initiating a call in the switch which will go to one of your termination providers. The call should then pass though the PSTN network and terminate on one of your DID providers, it will then continue back to the switch and link up with the same dialog.

Circuit Test helps you perform a test to determine the quality of the route. This can also help you analyse FAS, RTP quality, MOS, Release reason, jitter, packet loss percentage & answer delay measurement etc. To perform circuit test, follow the steps below:

1.	Click on Management> DID> Add DID

![alt text][circuit-test-1]

![alt text][circuit-test-2]

2. Enter the DID number and select the destination to Circuit Test

3.	Select the Provider & the Provider Rate Card.

4. Select the Customer & Customer Rate Card

5. Select the RTP Proxy & Media proxy, more information can be found from this article.

6. Optionally you can select the timeouts

7. Enter the per month buy Cost of your DID

8. Enter the per month sell Cost

9. Enter the Max duration, the default value is 3600 seconds & click Save

![alt text][circuit-test-3]


Now, it's time for us to configure the circuit test:

1. Click on Setup **"My Account"**

![alt text][circuit-test-4]

2. Click on Settings tab
 
2.	Click the **"Edit"** button on Origination Ingress Address and enter the origination ingress IP and save.

3.	Now click on **"Edit"** for Termination Ingress Address button and enter the termination ingress IP and save.

![alt text][circuit-test-5]  

![alt text][circuit-test-6]


4.	Similarly, for the **"Circuit Test User"**, click **"Edit"** Select the customer account.

![alt text][circuit-test-7]

![alt text][circuit-test-8]

5.	Now go to Rate Card under Provider rate card.

6.	Click on the Provider Rate Card that you have selected while adding the DID.

![alt text][circuit-test-9]

7. Click on Circuit Test> +Circuit Test

![alt text][circuit-test-10]  
 
8.	A dialog box will open, enter the CLI number that you wish to present and select the Destination Number which you entered while setting the DID and press **"Send"**. A confirmation box will appear telling that you have initiated the test, the test result might take a while to appear on the screen.

![alt text][circuit-test-11]  
  


[circuit-test-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/circuit-test-1.png "Circuit Test 1"
[circuit-test-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/circuit-test-2.png "Circuit Test 2"
[circuit-test-3]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/circuit-test-3.png "Circuit Test 3"
[circuit-test-4]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/circuit-test-4.png "Circuit Test 4"
[circuit-test-5]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/circuit-test-5.png "Circuit Test 5"
[circuit-test-6]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/circuit-test-6.png "Circuit Test 6"
[circuit-test-7]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/circuit-test-7.png "Circuit Test 7"
[circuit-test-8]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/circuit-test-8.png "Circuit Test 8"
[circuit-test-9]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/circuit-test-9.png "Circuit Test 9"
[circuit-test-10]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/circuit-test-10.png "Circuit Test 10"
[circuit-test-11]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/circuit-test-11.png "Circuit Test 11"

