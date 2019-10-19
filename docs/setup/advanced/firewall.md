# Firewall

!!! warning “WIP”
	This page is work-in-progress. We appologise for any spelling mistakes or broken links. We are working hard to fix these.

The ConnexCS is used in conjunction with our threat detection system to blacklist attackers.

## Threat Detection System

The threat detection is always on and amoungst other key identifiers analyses traffic hitting our platform.
It primarly pays attention to authentication failures on both registration and firewall of a particular threshold.
If certian criteria is exceeded the system will issue a system wide block.

Should this happen to an IP address of your customer / carrier, you can remove it from Setup > Advanced > Firewall.

### False Positive

If you have a customer or carrier who sends a large volume of unauthorized calls, it is possible that they will be added
to the block list.

### False Negatives

You may see attempts hitting your switch which are not authorized and then fail.

These are exactly this, attempts which our system has successfully declined the call to process. There is no need to take further action to stop these calls.

It is important that calls such as these are visible for 2 reasons.

1. If we block an IP address too quickly, this may be a customer who is trying to interconnect with you. When it gets block you loose the ability to view debugging
information as the packets are dropped prior to them being able to be logged.
2. If we block too soon we loose the ability to ascertain any attack patterns and profiling information on an attack. Having some data allows us to see progressive attacks spanning multiple IP addresses.

