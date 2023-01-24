# Customer Support

ConnexCS doesn't charge for support, but there is a reasonable level of expectation from both parties involved. (Unless you are paying for dedicated support NOC (Network Operations Center) on Demand).

## Expectations

### ConnexCS Server Provider Obligations

ConnexCS support engineers make all efforts to fix reported problems within a time-frame deemed appropriate for the severity of the issue.

We make our best efforts to reply 24/7.

### Customer Obligations

We expect the following from you as a customer:

* Basic level or above of computer operation.
* Basic level or above of Telephony.
* Act as a liaison with your customers and carriers.
* For initial investigation of the problem, first-line support should be internal to your company.
* Problem Isolation (See [**Debugging guide**](/guides/debugging/))

## Support Channels

Several methods of contacting ConnexCS for guidance are outlined below.

If you need to Report a Problem, please make sure you check that section for information on issue classification and response times, and some tips for reporting issues so we can best address your needs.

!!! tip "ConnexCS System Status"
    Before reporting a problem, please check the [**ConnexCS System Status Page**](https://status.connexcs.com/) for current known issues.

### Online Chat

**Online Chat** allows for real-time guidance. Initial communication is with a bot. If the bot is unable to help, it will tell you to type "Human" to connect with a support representative.

Click this button to alert staff, and the first person to become available will reply as soon as possible. We find that most questions get their resolution efficiently this way.

**Please note that the chat system is for one-on-one communication about a specific problem, not for multiple concerns or system-wide change requests.**

### Support Tickets

**Support Ticket** (found at the bottom of the ConnexCS navigation menu) displays all open tickets for an account.

To create a ticket, send an email to [**support@connexcs.com**](support@connexcs.com).

### Phone

To speak to a Support Representative, please call our office number listed at [**www.connexcs.com**](https://www.connexcs.com/).

!!! error "When to call the support number"
    Our support line connects directly to our engineers. Unless there is a critical issue, please call this number between 9:00 AM and 23:00 PM UTC.

### SMS

Contact us using **SMS**:

* UK: +44 7481 346 455
* USA: +1 408 475 9494

### Telegram

Contact us via **Telegram**:

* <https://t.me/connexcs_support_bot>
* @connexcs_support_bot

### NOC-On-Demand

If you're interested in **NOC-on-Demand** or Enhanced Support, which would give 24/7 (or cover your specific time zone) operational support, please contact us directly to discuss this option.

## Report a Problem

This section covers the best practises for reporting problems to ConnexCS support.

We encourage feedback but also want to make sure you have the most efficient means of expressing a problem so there are no delays.

### How to confirm an issue has occurred?

The moment a consumer reports a problem. You must begin an inquiry, utilizing the training and documentation we've provided you.

Customer's / Provider's issues shouldn't be escalated directly to ConnexCS. The issues should undergo initial troubleshooting steps.

If a customer reports channel variance, the customer is making an observation rather than reporting a problem. This makes it necessary to investigate the problems at the elemental level.

If a problem is with poor stats, compare it with formerly recorded positive numbers.

### Issue Classification and Response times

ConnexCS classifies issues based on a combination of **Category** and **Severity**. If you aren't able to determine the Category or Severity, we can help with this.

#### Categories

* **Platform**: Refers to the stability of the ConnexCS system (typically outside customer control). For example, the ConnexCS platform is down.
* **Operational**: Any configuration related issues, which are typically within the customer's control. For example, the misconfiguration issue.

#### Severity Levels

|Level|Severity|Example|
|---|---|---|
|**P0**|Critical|ConnexCS is down; this is affecting all customers, and all calls are failing. The best thing to do is to monitor <https://status.connexcs.com/> and await updates.
|**P1**|Critical|A customer of ConnexCS is down, and it's affecting all calls.|
|**P2**|Critical|A customer of our customer's calls is down, or there is a serious User Interface problem.|
|**P3**|Important|A partial outage on the part of a customer or carrier, and / or some but not all calls get affected, or there is a serious User Interface problem.|
|**P4**|Trivial|A feature gets broken but business can continue (User Interface problem, or a low-impact problem affecting calls).|
|**P5**|Trivial|A feature doesn't work as expected, or an enhancement is required.|

!!! tip "Paid Support Escalation"
    If you have a **P3 or P4** and we're out of working hours and you have a problem that internally you consider it to be critical, you have the option to escalate it. We will charge $150 per hour for our support (min 1 hour).

    A **P5** feature request may be escalated, but a project cost may be involved; please discuss this with us if you are considering it.

!!! warning "Classification Usage"
    These Severity levels are here to assess the impact of a problem, but they aren't followed. We will try to answer support requests 24/7, but repeated instances of misreporting incidents as Critical beyond normal working hours may result in fines on the account or account termination.

#### Response Times

* Platform for P2+ (Critical) Issues = 24/7 support.
  * Platform Issue.
  * Our Monitoring will alert Us.
  * Check our status page; ETA's will get issued if we've them available.
  * You can contact us, but please don't expect any detailed replies while we're focused on troubleshooting the issue.
  * 24/7 response incidents.

* All other Platform (non-Critical) and Operational Issues from 8:00 AM - 8:00 PM UTC business hours support.
Whenever possible, we strive to provide best-effort support outside these times if we're available.
  We're a small team, so we request that you keep this in mind when reporting the severity of an issue:
  * Operational or Configuration Issue.
  * Our Monitoring won't alert Us.
  * Our status page won't show this problem.
  * Contact us immediately.
  * Problems get resolved during working hours or best effort.

!!! tip "Issues with new interconnects"
    Issues encountered when turning up a new interconnect that isn't working aren't considered Critical.

!!! tip "Issues when making changes"
    Issues encountered when you are making a change, testing a new feature, or on-boarding a new customer aren't considered Critical.

### Requested Troubleshooting and Information

For best results when reporting an issue, please provide us with the following information. This will help our support staff and engineers best address reported problems.

```mermaid
graph LR
A[Check for Outages] ==> B[Check Documentation] 
B ==> C[Gather Data] 
C ==> D[Submit Issue]
style A fill:#ECEFF1,stroke:#4051b5,stroke-width:4px
style B fill:#ECEFF1,stroke:#4051b5,stroke-width:4px
style C fill:#ECEFF1,stroke:#4051b5,stroke-width:4px
style D fill:#ECEFF1,stroke:#4051b5,stroke-width:4px
```

**Step 1: Check for Outages**

Please check the [**ConnexCS System Status Page**](https://status.connexcs.com/) for current known issues.

**Step 2: Check the Documentation**

The ConnexCS onsite documentation, found at [**docs.connexcs.com**](https://docs.connexcs.com/), serves several functions:

* To provide a repository where you can search for information relevant to your problem.
* To inform your questions when you contact support.

Sometimes, complications are resolved by turning off parameters that aren't compatible. Sometimes, a little troubleshooting might solve it.

Sometimes, you will need help; understanding the documentation will speed up our efforts to remedy larger concerns.

*Whenever possible, please refer to the ConnexCS documentation before contacting support.*

**Step 3: Gather data**

This step helps us understand and resolve your issue as soon as possible. Whenever possible, we recommend you follow a standardized troubleshooting process, such as our recommended [**Debugging**](/guides/debugging/) steps.

* **User Interface Issues**: Including a screenshot along with a clear description of the problem can help us understand the issue. For an efficient utility to take UI screenshots, we recommend a browser plugin called "Lightshot" or using your OS's built-in snipping tool.

* **Problems with Calls**: For problems with call flow, the [**Call-ID**](/guides/howto/callid/) is how we identify affected calls. It helps us isolate customers, providers, and/or channels that may get affected.

    Find a Call-ID in the [**Logging**](/logging/) section by clicking on a call, and then copying the ID to the right of the panel.

* **Clear and Concise Issue Description**: The above steps contain more ways for you to be able to identify your problem, troubleshoot it, and then communicate the problem(s) clearly in the event of contact.

!!! failure "Respectful communications"
    Where possible, we're also happy to talk with you about broader SIP topics outside of our switch.
    Under no circumstance will we tolerate rude behaviour, intimidation, or threats.

    We're all SSVVP and SSCA qualified, and whenever possible, we will cite references or point you to SIP traces for fact-checking information.

### Reporting Multiple Problems

If you have more than one problem to report, we ask you to:

1. Create a separate ticket for each request so that it's routed to the correct staff member.
2. Allow an adequate amount of time for us to assess the problem and resolve it.
3. We first find if the problems are connected, adding extra time onto finding the roots themselves.
4. Call instead of sending an email: This helps us to get a concise reading on all concerns instantly and ask follow-up questions instantly.

## Importance of Replication

Being able to replicate (on-demand) an issue is the best method to solve it.
If we can do this, the issue can get resolved without the input of the customer, and we'll be able to do it without your help as well.

For example,

If you make a call to **A** and the call connects:

a. When you disconnect, the call terminates successfully.

b. When A disconnects, the call doesn't end inadequately.

**Poor Scenario**

The issue occurs at irregular events, or it's an uncommon problem.

**Good Scenario**

When you're unable to recreate the issue in isolation and on request, the customer can replicate the issue.

**Ideal Scenario: Isolation**

You can take steps without the customer's involvement. You can make a call-on-demand example that illustrates an issue. Then you can make a change and illustrate how things continue to function without that particular modification.

### User Interface Problems

Making a video is the best way to get the issue resolved, including the User Interface. You may then send the video to us so that we can see the exact problem with clarity. We'll be in a better position to fix the problem.

**Instructions for recording a video in Windows**

1. Enable Screen Recording
2. Record Your Screen:
   2.1. Launch the recording app of your choice. The majority of programs and windows allow you to begin recording, although the Windows desktop, File Explorer, and several other Windows apps don't.
   2.2. To snap a quick screenshot, click the camera icon, or press the Start Recording button to record your screen activity.
   2.3 Click the Recording button on the floating bar to halt the recording. You receive a notice letting you know the video got recorded. When you click the notice, your video appears in a new window.
   2.4 To watch the video, use the Play button.
   2.5 Your video's location in File Explorer, which is by default C:Users[username]\Videos\Captures. You may always change the location of where video captures get saved if you don't like the default setting.
3. Enable Background Recording

## ConnexCS Internal Steps for Problem Resolution

1. If ConnexCS receives a problem from you and is unable to identify the problem instantly, we'll attempt to replicate the problem.
2. If we aren't able to replicate the problem, we'll be replying to ask for your assistance.
3. If you can include this information when you submit the ticket, the problem will be resolved more quickly.