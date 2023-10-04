# Interconnect

**Interconnect** provides information on:

1. **Termination address:** This is the address you send calls to.
2. **Origination address** This is the address to receive calls from.
3. Click [**here**](https://docs.connexcs.com/setup/settings/servers/#real-time-transport-protocol-servers) to know more about **RTP Servers**.

## Number Normalisation and Denormalisation

A phone number gets converted into a standard, or normal, form through the process of normalization. It's tricky to compare two phone numbers to determine if they're the same if the digits aren't normalised.

Streem Center can check and handle all the numbers by converting them into a regular form.

The customer needs to specify which format you wish your number should be and we (carrier) will provide you with the same format.

[E.164](https://en.wikipedia.org/wiki/E.164#:~:text=164%20defines%20a%20general%20format,a%20maximum%20of%20twelve%20digits.) format that specifies a numbering scheme for the public switched telephone network (PSTN) across the world as well as a few other data networks.

### Using E.164 with SIP

Several situations occurs which compel SIP apps to deal with phone numbers. It's impossible to route phone numbers using the conventional DNS resolution methods for SIP that rely on SIP URIs (Uniform Resource Identifiers). Thus, ENUM offers a way for converting E.164 numbers into URIs (SIP URIs).

A system called ENUM (E.164 Number Mapping) uses DNS to convert some phone numbers, like "+12025332600," into URIs, or RFC 2396-compliant addresses, like "sip:user@sipcarrier.com."

ENUM's main purpose is to make it easier for systems that use URIs to route transactions to link with those that depend on phone numbers.
