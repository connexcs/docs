# User registration

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Customer Portal / User Registration (Active SIP Registrations)<br>
<strong>Audience</strong>: Administrators, Compliance Teams, Support Engineers<br>
<strong>Difficulty</strong>: Beginner to Intermediate<br>
<strong>Time Required</strong>: Approximately 15–20 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS Customer Portal account with permission to view user registration/endpoint information<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer-portal/cp-authentication/">Authentication & Access Control</a>, <a href="https://docs.connexcs.com/logging/">Logging & Audit Trails</a><br>
<strong>Next Steps</strong>: After reviewing the User Registration guide, access the User Registration tab, review currently active SIP user registrations (Username, IP, Protocol, NAT flags, TTL, last modified time), verify that all active registrations correspond to authorized devices/users, flag any unknown registrations, and schedule a periodic audit to ensure registration hygiene.<br>

</details>

## Overview

View active registrations (live calls):

+ **Username:** Username of the user (associated password isn't shown here).
+ **IP:** Current IP.
+ **Protocol:** Protocol used for registration.
+ **NAT:** Indicates that far-end Network Address Translation (NAT) traversal (aka Firewall) has modified the entry.
+ **Contact**: The SIP Contact header received from the registration request sent by the client to our server.
+ **TTL:** Time to live (TTL) is the time since request came in.
+ **Last Modified:** The time of the last state change for the call.
+ **User Agent:** The end device used by the **Username** above.
