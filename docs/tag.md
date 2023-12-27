# Tags

**Management :material-menu-right: Tags**

With the help of tags, you may generate global Alerts, Routing, and CLI information. Following the creation of the Tags, you can tag your clients in the Alert, Routing, or CLI Strategy.

By using tags, you may create an Alert, Routing or CLI Strategy for each specific customer with less time and effort.

You may apply the tags to as many customers you wish.**Management :material-menu-right: Customer :material-menu-right: Tags**

1. You can go to **Management :material-menu-right: Customer :material-menu-right: Config :material-menu-right: Tags**.
2. Click on the dropdown next to Tags and assign it to your customer.

![tags](/customer/img/tags.png)

Tags help reduce the time and effort required in creating an Alert or Routing Strategy for each individual customer. Alerts will be sent to all the emails that are added to the contact of that customer.

You can create a general alert or routing strategy and apply it to as many customers as you want.

## Alerts

Use **Alerts** to notify customers when specific occurrences take place. Additionally, it deactivates accounts automatically when certain thresholds are reached.

### Create an Alert

1. Navigate to **Management :material-menu-right: Tags :material-menu-right: Alert**.
2. Click on the blue `+` button on the top-right.
3. In the **Tag** field, mention the name of the tag. It's a required field.
4. Give the **Title** to your tag in the title field. It's a mandatory field.
5. Form the **Area** drop-down select the field you wish to create the alert for.
6. The **Operator** tests whether a numeric value is greater than, less than, or equal to the value defined in the Threshold below. The Attached business values will determine the amount of weight placed on each alert. For example, "=" means "is equal to."
7. **Threshold** is the triggering value in the alert sequence.
How your system responds to the value depends on the operator used, but the alert itself will trigger whenever the governing conditions are true.
8. **Reset Threshold** is s numeric value that works with the threshold to prevent alerts from triggering continuously and accidentally, which is necessary for values that fluctuate.
The purpose is two-fold: to allow the threshold function to have a range type instead of a concrete number; and to provide the alert system with automation when a system returns to usual on its own.
9. **Penalty**: The alert will Disable the Customer or Carrier for the selected duration of time.
10. **Template** will populate the sent Alert. (See **Setup :material-menu-right: Config :material-menu-right: Templates** for details.)
11. Repeat: How often to resend the Alert.
12. Form the **Notice Level** dropdown you can either select the alert status as **None**, **Warning**, and **Error**.
13. Click `Save`, and it creates a new alert.

<img src= "/misc/img/t1.png">

!!! Info
    Whenever you select the **Area** as **Change** from menu, there are 2 options in **Table Change**, **SIP User** and **Switch** (you can either SIP User or Switch or you can select both.). An alert will be issued and sent to the customer's email address that there has been a change recorded in the IP list if you make any changes to the IP Authentication field after saving the settings, such as changing the IP Address etc.

## Routing

Routing Tag helps you strategize the Routing options for your customer. You can customize Routing options and assign the created tag for individual or group of customers.

### Create Routing Strategy Tag

1. Navigate to **Management :material-menu-right: Tags :material-menu-right: Routing**.
2. Click on the blue `+` button on the top-right.

#### Basic Field

1. **Rate Card**: Also known as Tariff, this allows you to select the rate card used on a customer's account. You can handle these calls in the following three ways:
      + **Internal**: Send a call to the ConnexCS Class5 (Voice Mail, Interactive Voice Response (IVR), etc.). If selected, the "Auto" option becomes available, which will generate dial strings from all possible internal extensions.
      + **Extension**: (uses SIP users in **Customer :material-menu-right: Auth configured :material-menu-right: SIP Users**) Send a call to a Session Initiation Protocol (SIP) Authenticated user on the account.
      + **To Carriers**: Choose a carrier to send the call to a location outside of the ConnexCS system.
2. **Tech Prefix**: This lets you distinguish a route from an inbound party. When several customers share the same IP address, each customer needs an individual Tech Prefix so the switch can route calls correctly. It enables service providers to differentiate between several rate cards.
3. **Tag**: You can apply any tags here.
4. **Dial String Prefix Set**: Helpful for commonly used sets of prefixes. Rather than entering a complete list of prefixes for the UK, for example, you can create a predefined Prefix Set (defined under **Setup :material-menu-right: Advanced :material-menu-right: Prefix Set**) and then select it here for appropriate customers.
5. **Dial String**: Only allows a dialled number to pass through if it matches the defined dial string (or "dial pattern"). (If you customer enters nothing, it matches everything and attempts to send all calls).
6. Check **Enabled** to make the fields active.

<img src= "/misc/img/t2.png">

#### Price Limits

1. **Capped Rate and Provider Capped Rate**: Set the maximum cost of a call. Calls that exceed the set rate won't get connected. For example, for customers with flat rate accounts, which allows to dial all UK numbers but premium numbers, you would set the Provider Capped Rate at 0.01, so any call that the provider might charge over that amount wouldn't get completed.
2. **Profit Assurance**: When Enabled, only calls that are profitable pass-through; any call that costs more than the retail rate aren't allowed to complete. This is particularly useful for A-Z routes or NPA-NXX rate cards. Keep in mind that enabling it adds an extra Post-dial delay (PDD) to the call.
3. **Block Connect Cost**: Block any call that has a connection fee.
4. **FTC DNC Report ANI Block (USA)**: When Enabled, ConnexCS will take a copy of FTC data (using the FCC's Do Not Call (DNC) Reported Calls Data API) and add it to the system. We can then block callers from known spammer CLI / ANI's.
5. **DNO**: [Click here](https://docs.connexcs.com/dnc/#do-not-originate-dno-list-blocking) to know more about it.

<img src= "/misc/img/t3.png">

#### Capacity Limits

1. **Channels**: Set the maximum number of channels/live calls allowed for this route.
2. **Max Duration**: Set the maximum amount of time (in seconds) that the call gets to exist before getting terminated, typically for the case of a missed `BYE`.

!!! info "Call Timeouts"
    A VoIP call is stateful, even though its protocol is stateless. This means that both the sides should be informed on finishing of the call. They do this with a BYE message. If the BYE message goes missing, the call will continue forever.

    **Max Duration** is a method for setting up **Missing BYE Protection**. Another approach is to use a **SIP Ping** to determine when the connection has timed out. This sends a SIP packet to the remote end of the conversation every 30 seconds. This checks to see if the other side is still aware of an ongoing conversation. If it does'nt receive a response or informed that the conversation is not active, it disconnects the call.
    
    **RTP Time-out:** This is another way to check for an active call based on whether audio is passing. If there is no audio passing for a pre-set interval, our Real-time Transport Protocol (RTP) array will notify the switch and instruct it to end the call. This won't work if RTP Mode is set to direct.

!!! warning "Asterisk pings"
    Asterisk doesn't have SIP Ping (OPTIONS) enabled by default. If your customer / carrier is using Asterisk, you may need to disable this if they don't have it enabled on their side, as calls will typically disconnect after 30 seconds.

3.**Flow Speed (CPS)**: Limits the calls per second. You should set this for each customer card assigned to the customer account.

4.**CPS Spike Buffer**: Limit a spike of calls by spreading them over a longer period of time. This essentially manages a large volume of calls over a short period of time.
  Once the buffer limit reaches its threshold, the calls per second kicks in, distributing the spike of calls.

!!! note "CPS Buffering"
    **CPS Buffering**: Used to manage large volumes of calls over a short period of time. This process maximises saturation and increases call completion within a given CPS restriction. It does this by removing spikes and borrowing capacity from future seconds.

    If incoming traffic exceeds your pre-set CPS, it holds the call for one second and then tries again. You can increase the second count in the CPS Spike Buffer field. 
    
    Changing the CPS Buffering value only affects calls that exceed the CPS. The delay will show as increased PDD on the call, each second the system will emit a 100 Trying (High CPS, Buffering) response to show the status/progress of the call.

5.**ASR Plus** assists capacity management by helping you define how to handle connections for known failed numbers. For information on the ASR Plus options, see [**ASR Plus Details**](https://docs.connexcs.com/customer/routing/#asr-answer-seizure-ratio-plus-details) here.

6.**Balance Disconnect** this feature checks the balance every 60 seconds. It will disconnect the call when the **balance plus the debit limit** is below $0.

!!! note
    Balance Disconnect only takes into account the **completed calls**; it excludes any **active calls**.

<img src= "/misc/img/t4.png">

#### ScriptForge

1. **ScriptForge**: Set a custom JavaScript to run from within the ConnexCS platform in-line with the call. Some example operations could be checking a Do Not Call list or forcing a CLI.
For more information about setup and operation, see the [**ScriptForge**](https://docs.connexcs.com/developers/scriptforge/) page.
2. **Timeout**: Set how long the script may run.
3. **Timeout Action**: This option lets you decide the action when the timeout occurs.
4. **VARS [(TOML)](https://en.wikipedia.org/wiki/TOML)**: Select the variables you want pass into the ScriptForge script.

<img src= "/misc/img/t5.png">

#### Locks

Used for troubleshooting, you can remove carriers from a route and run a quick test.  

1. **Lock** (Allow): One or more rate cards from the list of available providers.
2. **Exclude** (Deny): Exclude access to one or more rate cards in the list of available providers.
3. **DNC (Do Not Call) List**: The customer won't be able to able to dial the numbers in the specified DNC list.
  You can add the list of numbers in the [**Database**](https://docs.connexcs.com/developers/database/).
4. **Block Destination Type**: You can select and block the calls to various destinations (carriers) like Mobile, Fixed, Paging, etc.
5. **Spam Scout Scoring**: It blocks Spam calls based on the CLIs.
  You can either Block All, Allow All, Block Most Spam, or Block Least Spam.

!!! tip "Exclude Use Case"
    If a customer reports an issue with a carrier or route, you can come here and set the carrier / route to Exclude and **`Save`**, then come back and remove it, and do a **`Delay and Save`** for a later date.

<img src= "/misc/img/t6.png">

#### Media

1. **Transcoding**: Enter the number  of channels allowed for transcoding. This is a limited option. The best use case is for customers in low-bandwidth areas that want to use G.729.
  Be aware that if you don't have enough transcoding capacity, calls will fail.
2. **SIP Ping**: Send regular pings to ensure both sides of a call are still up. `Enabled` is the recommended setting.

    |Option                          | Result                                            |
    |--------------------------------|:--------------------------------------------------|
    | **Disabled**                   | No SIP pings will be sent                        |
    | **Enabled Both Sides**         | SIP pings sent in both directions        |
    | **Enabled (Downstream Only)**  | SIP Pings sent to the location where the call originated |
    | **Enabled (Upstream Only)**    | SIP Pings sent towards where the call is TO (terminated) |

3. **SIP Session Timer (SST)**: SST is Passive by Default, but **Enabled** is the recommended setting.
  When enabled, SST ensures there is no ghost or long-duration calls get billed when one or both sides have hung up. A timer activates when the call starts and refreshes the call every X number of seconds by sending a RE-INVITE.
  SST has surpassed SIP Ping Timeout as the best way to prevent long-duration calls. Note that any SST shorter than sixty (60) seconds gets rejected.

    |SST Option| Result|
    |-------------------------|:------------------------------------------------------------------------------------------------|
    | **Default**| Passive SST, No headers gets changed and no SST gets engaged, all RE-INVITES will propagate through the system enables|
    | **Enabled Both** | ConnexCS will send SIP Session Timers to both legs of the call|
    | **Enabled (Upstream)** | ConnexCS will use SST with the carrier|
    | **Enabled (Downstream)**| ConnexCS will use SST with the customer|
    | **Suggest**| Session-Expire headers and Min-SE gets added to packets sent to the carrier encouraging the use of SST|
    | **Disabled**| All ```timer``` headers are removed|

4. **RTP Media Proxy**: This defaults to Auto, but selecting a zone (by continent) is the current recommendation. The following options allow you to set where RTP media server for this route for this customer:

    :material-menu-right: `Direct RTP (no proxy)`- Bypass ConnexCS, so media flows directly between the customer and carrier. If the customer is using a firewall or other NAT device incorrectly, then media may not flow between the carrier and the customer. Using this setting also means that if there are audio issues, the issue can't be ConnexCS. Since it isn't likely to be the carrier, the issue would typically exist on the customer's end.

    :material-menu-right: `Zone`- Choose any of the regional servers, but it's recommended that you select a location close to a provider or your customer. Temporarily selecting a different region to route media traffic can be helpful in diagnosing call problems.

!!! tip "The recommended RTP Media Proxy servers are the **Closest (To ConnexCS) Server** or the **Closest (Elastic) Server**."

5.**RTP Proxy Mode**: If a connection via our service fails and you have selected relaxed, it will automatically fail over to the backup.

:material-menu-right: `Strict`- This will enforce the proxy engagement. If the proxy can't engage with the call, the call won't get established.

!!! note "Free accounts are limited to how many RTP Proxy channels get enabled, this may prevent calls from connecting if you have more channels than our free accounts allow you to have."

:material-menu-right: `Relaxed`- This will make the best efforts to engage the RTP Proxy; if it can't get engaged because of either network errors, or because you don't have enough RTP capacity, the calls will connect directly.

!!! success "When should I use RTP Proxy?"
    Use an RTP Proxy if you don't want your customers to know your providers.

!!! warning "When should I avoid using an RTP Proxy?"
    You have other equipment in your SIP set-up that will act as a Media Relay or you want to run a test to see if audio problems are related to the ConnexCS switch.

!!! info "RTP Proxy distinctions"
    When a call gets established between the customer and the provider, audio can be setup in one of two ways:
|                         | **With RTP Proxy** | **Without RTP Proxy** |
|-------------------------|:------------------:|----------------------:|
| **Audio Path**          |      Indirect      |                Direct |
| **Audio Quality**       |      Excellent     |            Unbeatable |
| **Latency**             |         Low        |                Lowest |
| **Information Leakage** |         No         |                  Yes* |

* While it's doubtful that any information will get logged in the customer / providers switch when the audio gets engaged, it's possible for an engineer to learn this information from a SIP trace, PCAP, or by looking at transit locations. DTMF Detection ONLY works when RTP Proxy mode gets enabled.

6.**Call Recording**: This allows you to record and store calls, which are then found in:

* **Logging**

* **Management ::material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right:
CDR**

* **Management ::material-menu-right: File :material-menu-right: Recording**

An extra charge per recorded call of $0.003 gets added to existing fees or charges, so choose carefully how many calls to record:

:material-menu-right: `Disabled`- no calls get recorded

:material-menu-right: `Sampling`- Choose from a 1%, 5%, 25%, or 50% sample of your calls (e.g: 1% will record 1 of every 100 calls, 25% will record 25 of every 100 calls, etc.).

:material-menu-right: `Enabled (Always On)`- Record all calls.

!!! tip "The Call Recording setting is disabled"
    You need to enable the feature first on the account in **Setup :material-menu-right: Settings :material-menu-right: [Packages](https://docs.connexcs.com/setup/settings/account/#packages)** before it gets enabled here for individual customers.

7.**Block DTMF:** This option allows you to either `pass` or `block` DTMF through your calls.

!!! note "Make sure your carrier supports the DTMF feature."

<img src= "/misc/img/t7.png">

#### Strategy

For advanced routing, click :material-plus: to select a [**Prefix Set**](https://docs.connexcs.com/setup/advanced/prefix-set/) and assign a [**Routing Strategy**](https://docs.connexcs.com/routing-strategy/). This gives you greater control over how routes get selected for a given customer.

<img src= "/misc/img/t8.png">

#### Notes

1. **Public Notes**: Notes entered here get displayed on the Customer Portal when logged in.
2. **Private Notes**: These will get displayed to the customer in the Control Panel.

<img src= "/misc/img/t9.png">

## CLI Tag

You can apply the created **CLI Tags** to various customers.

### Create a CLI Tag

1. Navigate to **Management :material-menu-right: Tags :material-menu-right: CLI**.
2. Click on the blue `+` button on the top-right.
3. Mention the **Tag** name here. It's a mandatory field.
4. **CLI**: To allow the required CLIs, enter the required number or a regular expression (to match and replace). It's a required field.
5. **Rewrite CLI**: A CLI can be rewritten. For example, you can add `123456789` in the CLI box and then rewrite by adding `987654321` in the rewrite CLI box. (For more advanced CLI manipulation, see [**Advanced CLI Match & Manipulation**](https://docs.connexcs.com/customer/cli/#advanced-cli-match-and-manipulation) below.
6. **Pre-Asserted-ID (PAID)**: To allow the required PAID, enter the required number or a regular expression to match or replace.
7. **Rewrite P-Asserted-ID**: This is a SIP Header almost same as the FROM header but classified as a private, or network-level identifier.
Telephone companies use it to identify call originators. As it's stripped at the call server, the client end-points only see the FROM field.
This is helpful when callers obscure their CLI / FROM information, as the network level still requires origination details.
The **P-Asserted-ID** manipulation uses the same syntax as the Replace CLI.

    !!! tip "P-Asserted-ID Use Case"
        If you wanted to allow all calls but assign a specific number (such as the Main Billable number for the business), you would set CLI as ".*" and then enter the desired P-Asserted ID.
        All calls will then have this number as the P-Asserted-ID.

8. **Forced**: Enabling this will allow a call if there are no other matching CLIs in the system. This will also replace the CLI that's presented with the CLI entered here.

    !!! Example
        Create a permitted list of CLIs, then select **Forced** on the CLI to use if none of the others in the permitted list match. (Best practice is to have one unique **Forced** CLI.)

9. **Direction Applied**: Select either **Termination** for calls a customer makes out or **Origination** (also refers to DIDs) for inbound calls made to our customers.

    !!! Example
        Create a permitted list that exclusively allows calls to or from the same country.  

10. **Allow Type**: You can select from various options like Mobile, Paging, VoIP, Satellite etc to allow the CLIs.

11. **Use DID**: Pull in DIDs from the customer's account to use either as a Filter or as a Replacement.  

    !!! Example
        If Dialled matched number is starting with **1**, the CLI routes to 11111.
     The CLI can be a Regular Expression also.

12. **Database** (To add CLI and PAID from a database):

    1. Upload a list of numbers you choose as CLI or PAID under **Developer > Database**.
    2. Go to **Customer > Routing > CLI** add the same database under database field. Under rewrite PAID field add this database.

    !!! note
        Make sure you select  the **Forced** option as **Yes**.

13. **Dialed Number Match**: To route to a specific CLI, you dialled match number.

14. **Notes**: Notes give you information about the CLI.

15. **STIR / SHAKEN Certificate:** If you apply any STIR / SHAKEN Certificate to a customer's account for calls verification, for example, whether the calls are spam.

    + **STIR / SHAKEN Attestation:** This is the level of a certification you can select from 3 levels `A`, `B`, or `C`.

16. Click **`Save`** to complete the CLI configuration.

<img src= "/misc/img/t10.png">
