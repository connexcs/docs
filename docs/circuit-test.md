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

![alt text][circuit-test-4]

Now, it's time for us to configure the circuit test:

1. Click on Setup

2. Click on Settings>Options

![alt text][circuit-test-5]
 
2.	Click the **"Edit"** button on Origination Ingress Address and enter the origination ingress IP and save.

3.	Now click on **"Edit"** for Termination Ingress Address button and enter the termination ingress IP and save.

![alt text][circuit-test-6]  

![alt text][circuit-test-7]

4.	Similarly, for the **"Circuit Test User"**, click **"Edit"** Select the customer account.

![alt text][circuit-test-8]

![alt text][circuit-test-9]

 


[circuit-test-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/209.png "Circuit Test 1"
[circuit-test-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/210.png "Circuit Test 2"
[circuit-test-3]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/211.png "Circuit Test 3"
[circuit-test-4]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/212.png "Circuit Test 4"
[circuit-test-5]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/213.png "Circuit Test 5"
[circuit-test-6]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/214.png "Circuit Test 6"
[circuit-test-7]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/215.png "Circuit Test 7"
[circuit-test-8]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/216.png "Circuit Test 8"
[circuit-test-9]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/217.png "Circuit Test 9"
[circuit-test-10]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/circuit-test-10.png "Circuit Test 10"
