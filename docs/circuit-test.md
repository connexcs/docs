# Table of Contents
- [Table of Contents](#table-of-contents)
- [Circuit Test](#circuit-test)


# Circuit Test

Circuit tests help determine the quality a route. It also helps analyze FAS, RTP quality, MOS, release reason, jitter, packet loss percentage, and answer delay measurement.

A circuit test works by initiating a call in the switch to a termination provider. The call passes though the PSTN network and terminates on one of your DID providers.  It then continues back to the switch and links up with the same dialog.

To perform circuit test:

1.	Click **Management** > **DID** > **Add DID**.

![alt text][circuit-test-1]

![alt text][circuit-test-2]

2. Enter the DID number and a destination to circuit test.
 
3.	Select the provider and provider rate card.

4. Select the customer and customer rate card.

5.  Select the RTP Proxy & Media proxy, more information can be found from this article.

6. Select the timeouts (optional).
   
7. Enter the monthly cost of your DID.

8. Enter the monthly sell cost.
   
9.  Enter the max duration.  The default value is 3600 seconds.
    
10. Click **`Save`**.

![alt text][circuit-test-3]

![alt text][circuit-test-4]

Now, it's time for us to configure the circuit test:

1. Click **Setup**.

2. Click on **Settings** > **Options**.

![alt text][circuit-test-5]
 
3.	Click the **`Edit`** button on **Origination Ingress Address**, enter the origination ingress IP, and click **`Save`**.

4.	Click **`Edit`** for `Termination Ingress Address` button, enter the termination ingress IP, and click **`Save`**.

![alt text][circuit-test-6]  

![alt text][circuit-test-7]

5.	Similarly, for the **Circuit Test User**, click **`Edit`**, and then select the customer account.

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
