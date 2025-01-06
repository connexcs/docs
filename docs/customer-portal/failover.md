# Failover (Serial Forking)

The failover mechanism guarantees continuous, reliable service by automatically switching to a backup provider rate card(s) in the event of a primary provider failure.

Multiple **Provider Rate Cards** can be associated with a single **Customer Rate Card**.

If a call attempt fails with **Provider Rate Card 1**, the system will automatically route the call to **Provider Rate Card 2**, and continue through the subsequent rate cards if necessary.

## Integrating Multiple Provider Rate Cards with a Single Customer Rate Card

1. Login to your account.
2. Navigate to **Management :material-menu-right: Rate Card :material-menu-right: Customer Rate Cards**.
3. Either create a new customer rate card by clicking the blue `+` sign or click on the existing Customer Rate Card.
<img src= "/customer-portal/img/fl1.png" width="800">
4. Navigate to **Advanced :material-menu-right: Dynamic Routing**. Select multiple provider rate cards as needed.
<img src= "/customer-portal/img/fl2.png" width="800">
