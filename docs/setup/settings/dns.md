# DNS

Setting up **DNS (Domain Name System)** allows you to load balance multiple SIP servers without a load balancer server. To configure **DNS**, navigate to **Setup** > **Settings** > **DNS**.

1. Click **`+`** under **Server**.

    ![alt text][dns]

2. Enter the **Domain** name. 
3. **(TLD) Top Level Domain** is set to sip.direct.
4. Check the records against the server IP
5. Setup **Anycast Mirroring** if desired
7. Click **`Save`**.

[dns]: /misc/img/dns.png "DNS load-balance"
