# Enabling Spam Protection Features

In the telecommunications sector, spam calls have been a recurrent problem that annoys customers and poses a risk of harm.

These undesirable calls frequently entail fraud and schemes that intend to trick victims into divulging personal information like credit card numbers, Social Security numbers.

Thus, it becomes essential to remain vigilant and take proactive measures to protect oneself from falling victim to scams.

ConnexCS helps block these spam and scam calls.

## 1. Block Calls based on Dial Strings

1. Go to **Management > Customer > Customer [Name] > Routing > Basic > Dial String**.
2. Enter the Prefix phone code for the country you wish to block calls from.

<img src= "/guides/img/spam01.png" width= "1000">

## 2. Block Calls based on Dial String Prefix Set in Routing

1. Go to **Setup > Advanced > Prefix Set** to create a Prefix Set. The Prefix Set defines a list of pre-defined numbers.
[Click here](https://docs.connexcs.com/setup/advanced/prefix-set/#configure-prefix-set) to follow the steps for configuring the Prefix Set.
2. After configuring the Prefix Set, go to **Management > Customer > Customer [Name] > Routing > Basic > Dial String Prefix Set**.
3. Click on the drop-down menu to select the configured Prefix Set.

<img src= "/guides/img/spam2.png" width= "1000">

### 2.1. Block Calls based on Dial String Prefix Set for Everyone (Global Block)

Global blocking lets you block calls for everyone.

You can enable Global Blocking while configuring the Prefix Set.

In the [**Flags**](https://docs.connexcs.com/setup/advanced/prefix-set/#flags) field, you can either select **Global Dialled Number Blacklist** or **Global CLI Blacklist**.

## 3. Block Calls based on Price Limits

### 3.1 Setting Capped Rate

1. Go to **Management > Customer > Customer [Name] > Routing > Price Limits > Capped Rate**.
2. You can specify an amount and prevent callers from making calls above the specified amount.

### 3.2 Setting Block Connect Cost

1. Go to **Management > Customer > Customer [Name] > Routing > Price Limits > Blocked Connect Cost**.
2. You can either **Enable** or **Disable** this option. It helps you block calls with connection costs.

### 3.3 Setting the FTC DNC Report ANI Block (USA)

1. Go to **Management > Customer > Customer [Name] > Routing > Price Limits > FTC DNC Report ANI Block (USA)**.
2. You can either **Enable** or **Disable** this option. It's a list of phone numbers provided by the FTC reported as spam.

### 3.4 Setting the DNO

1. Go to **Management > Customer > Customer [Name] > Routing > Price Limits > DNO**.
2. You can either **Enable** or **Disable** this option. These are the number ranges that don't exist.

[Click here](https://docs.connexcs.com/dnc/#us-dno-requirements-in-connexcs) to checkout the DNO blocking ConnexCS DNO requirements.

<img src= "/guides/img/spam3.png" width= "1000">

## 4. Performance (ASR+) based Call Blocking

The Performance-based call blocking option will let you block calls if certain ASR+ low, or high etc.

1. Go to **Management > Customer > Customer [Name] > Routing > Capacity Limits > ASR+**.
2. Click on the drop-down menu to select from multiple options like ASR+ (low), ASR+ (high), ASR? etc.

<img src= "/guides/img/spam4.png" width= "1000">

## 5. Block Calls using ScriptForge

You can create a script on ScriptForge under the Developer section.

[**Click here**](https://docs.connexcs.com/developers/scriptforge/#configuration) to follow the steps for writing the script.

1. Go to **Management > Customer > Customer [Name] > Routing > ScriptForge > ScriptForge**.
2. Click on the drop-down menu to select from the list of configured scripts.

<img src= "/guides/img/spam5.png" width= "1000">

## 6. Block Calls using Locks

### 6.1 Setting a Lock

Using Locks for call blocking is a **Strategic** Call Blocking method.

Here, we're blocking a particular route on a Carrier Rate Card.

You can lock into a particular Carrier.

1. Go to **Management > Customer > Customer [Name] > Routing > Locks > Lock**.
2. Click on the dropdown menu to select from available Carrier Rate Cards.

### 6.2 Using a DNC List

Blocking calls with DNC Lists is a **User Database** based blocking.

1. Go to **Management > Customer > Customer [Name] > Routing > Locks > DNC List**.
2. Click on the dropdown menu to select from the available DNC lists.

[**Click here**](https://docs.connexcs.com/dnc/#do-not-call-check) to follow the steps for creating a DNC List.

### 6.3 Using Block Destination Type

Blocking calls according to their destination is considered **Strategic-based** blocking.

For example, if your customer only dials landline numbers, then you can block all other destination types like Mobile, Satellite etc.

1. Go to **Management > Customer > Customer [Name] > Routing > Locks > Block Destination Type**.
2. Click on the dropdown menu to select the destination types like Mobile, Fixed, Satellite, VoIP etc.

### 6.4 Using Spam Scout Scoring

[**Click here**](https://docs.connexcs.com/customer/routing/#locks) to learn more about Spam Scout Scoring.

1. Go to **Management > Customer > Customer [Name] > Routing > Locks > Spam Scout Scoring**.
2. You can use the slider to choose from options like Block All, Allow All etc.

<img src= "/guides/img/spam6.png" width= "1000">

## 6. Block Calls using Strategy

Blocking calls using the Strategy method allows you to select a Prefix set, and then you can select **Drop** to block that particular CLI list.

<img src= "/guides/img/spam7.png" width= "1000">

[**Click here**](https://docs.connexcs.com/customer/routing/#strategy) to learn more about **Strategy**.

## 7. Block Calls using Fraud Profiles

You can block calls using [**Fraud Profiles**](https://docs.connexcs.com/customer/routing/#fraud).

1. Go to **Management > Customer > Customer [Name] > Routing > Locks > Fraud**.
2. Select the newly created **Fraud Profile**.
   [**Click here**](https://docs.connexcs.com/setup/advanced/fraud/#setup-fraud-detection) to follow the steps to setup the fraud profile.
3. Click the **Fraud Mode** dropdown menu to select from 3 options: Disabled, Low or High.

<img src= "/guides/img/spam8.png" width= "1000">

## 8. Using RTP Block

RTP call blocking methods block the IP addresses.

1. Go to **Setup > Advanced > RTP Block**.
2. Click on the blue `+` button to add the IP address you wish to block.

<img src= "/guides/img/spam9.png" width= "1000">

[**Click here**](https://docs.connexcs.com/setup/advanced/rtp-block/) to learn more about the RTP Block at ConnexCS.

## 8. Using Firewall for Call Blocking

The firewall blocks the IP Addresses along with the attackers.

1. Go to **Setup > Advanced > RTP Block**.
2. Click on the blue `+` button to add the IP address you wish to block.

<img src= "/guides/img/spam10.png" width= "1000">

[**Click here**](https://docs.connexcs.com/setup/advanced/firewall/) to learn more about the Firewall at ConnexCS.

## 9. Using SIP Authentication IP Whitelist

1. Go to **Management > Customer > Customer [Name] > Auth > Basic > IP Whitelist**.
2. Using this method, you are only allowing certain IP addresses and blocking the rest of them.

<img src= "/guides/img/spam11.png" width= "1000">

## 10. Using CLIs 

### 10.1 CLI- Whole Number / Regex

1. Go to **Management > Customer > Customer [Name] > Routing > CLI**.
2. You can enter a number that the callers are allowed to use.

[**Click here**](https://docs.connexcs.com/customer/cli/#manipulate-caller-line-identification) to learn more about Regex Patterns.

### 10.2 CLI- Allow Type

In the **Allow Type** field, you can select the allowed destinations like Paging, Mobile, Fixed, VoIP, etc.

Also, it will block the remaining destination options.

### 10.3 CLI- Use DID

By implementing **Use DID** you are only allowed to make calls with the numbers available in the **DID database**.

<img src= "/guides/img/spam12.png" width= "1000">

## 11. Using Rate Cards

Another option you can use to block calls is with **Rate Cards**.

### 11.1 Customer Rate Cards

You can consider this blocking to preserve security and prevent financial losses.

For example, if a number range begins with ^449, which is an expensive range of numbers, and you don't want your customers to make calls to these numbers. Thus, you can block specific ranges.

1. Go to **Management > Rate Card > Customer Rate Cards > Customer [Name] > Profits**.
2. Click on the blue `+` button.
3. Mention the number string in the **Match** field which you wish to block.
4. In the **Basic** tab, select the **Status** field as **Blocked**.

<img src= "/guides/img/spam13.png" width= "1000">

### 11.2 Provider Rate Cards

1. Go to **Management > Rate Card > Provider Rate Cards > Customer [Name] . Properties > Advanced**.
2. Block calls using various options:
      +  **CLI Restrict**: Enter the CLI you wish to restrict.
      +  **PAID Restrict**: Enter the PAID you wish to restrict.
      +  **Capped Rate**: Specify an amount and prevent callers from making calls above the specified amount.
      +  **Block Destination Type**: Select the call destinations you wish to block from the drop-down menu.
      +  **Block Connect Cost**: Block the calls that levy connection costs.
      +  **Database Based**: Block calls by uploading the phone number, DIDs, CLIs, and PAID as a database.  

<img src= "/guides/img/spam14.png" width= "1000">

!!! note "Information"
    We can classify the above methods of blocking in  some ways, listed below:

       + **Commercial Blocking**: It helps in blocking calls based on the prices, for example, block a call if the amount is less or greater than the specified amount.
  
       + **Strategic Blocking**: You can apply Strategic blocking when you block calls when the carrier is unavailable or you want to drop a specific CLI List.

       + **Performace-based Blocking**: It helps in blocking calls if a parameter is under-performing or over-performing.

       + **Security Blocking**: It helps block malicious calls and reduces the attack surface.
       
       + **Regulatory Blocking**:  It helps in blocking calls that are reported by government regulatory authorities.

 | **Methods of Blocking**| **Blocking Type**| **What does it block?**| **Where you can block?** |
|--------------------------------------------------------------|----------------------------------------------------------------|--------------------------------------|--------------------------|
| **Dial Strings**| Security, Commercial, Regulatory, Strategic, Performance based | Destination | Route|
| **Prefix Set in Routing**| Security, Commercial, Regulatory, Strategic, Performance based | Destination| Route, Shared|
| **Prefix set Global Block**| Security, Commercial, Regulatory, Strategic, Performance based | Destination, CLI| Globally |
| **Max Connection Cost** | Commercial, Security | Destination| Route, Carrier Card|
| **Capped Rate**| Commercial, Security| Destination| Route, Carrier Card|
| **Block Destination Type**| Security, Commercial, Regulatory, Strategic, Performance based | Destination| Route, Carrier Card|
| **FTC DNC Reported ANI Block (USA)** | Regulatory| CLI| Route|
| **DNO - No Not Originate**| Regulatory| CLI| Route|
| **ScriptForge** | Security, Commercial, Regulatory, Strategic, Performance based, Database | Destination, CLI, Route, IP, Carrier | Route, Shared|
| **Custom DNC List**| Security, Commercial, Regulatory, Strategic, Performance based, Database | Destination| Route, Shared|
| **US Federal DNC**| Regulatory| Destination| Route|
| **Spam Scout Scoring**| Regulatory| CLI| Route|
| **Strategy**| Security, Commercial, Regulatory, Strategic, Performance based | Destination| Route, Shared|
| **Fraud Detection**| Security| Destination, CLI, Route, IP, Carrier | Route, Shared|
| **RTP Block**| Security, Strategic, Regulatory| IP| Globally|
| **Firewall**| Security| IP| Globally|
| **SIP Auth IP Whitelist**| Security| IP| SIP User|
| **CLI Whole Number / RegEx**| Security, Commercial, Regulatory, Strategic, Performance based | CLI| Customer|
| **PAID Restrict**| Security, Commercial, Regulatory, Strategic, Performance based | CLI| Customer, Carrier Card|
| **CLI - Allow Type**| Security, Commercial, Regulatory, Strategic, Performance based | CLI| Customer|
| **CLI - DID Only**| Security, Commercial, Regulatory, Strategic, Performance based, Database| CLI| Customer|
| **Block Destination in Rate Card**| Commercial, Security| Destination| Customer Card|
| **Carrier Card, CLI and PAID Restrict**| Security, Commercial, Regulatory, Strategic, Performance based | CLI| Carrier Card.|
