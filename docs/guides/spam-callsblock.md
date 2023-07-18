# Enabling Spam Protection Features

In the telecommunications sector, spam calls have been a recurrent problem that annoys customers and poses a risk of harm.

These undesirable calls frequently entail fraud and schemes which intend to trick victims into divulging personal information like credit card numbers, Social Security numbers.

Thus, it becomes essential to remain vigilant and take proactive measures to protect oneself from falling victim to scams.

ConnexCS helps in blocking these spam and scam calls.

## 1. Block Calls based on Dial Strings

1. Go to **Management > Customer > Customer [Name] > Routing > Basic > Dial String**.
2. Enter the Prefix phone code for a country you wish to block the calls from.

<img src= "/guides/img/spam1.png" width= "400">

## 2. Block Calls based on Dial String Prefix Set in Routing

1. Go to **Setup > Advanced > Prefix Set** to create a Prefix Set. Prefix Set defines a list of pre-defined numbers.
[Click here](https://docs.connexcs.com/setup/advanced/prefix-set/#configure-prefix-set) to follow the steps for configuring the Prefix Set.
2. After configuring the Prefix Set, go to **Management > Customer > Customer [Name] > Routing > Basic > Dial String Prefix Set**.
3. Click on the dropdown menu to select the configured Prefix Set.

<img src= "/guides/img/spam2.png" width= "400">

### 2.1. Block Calls based on Dial String Prefix Set for Everyone (Global Block)

Global block lets you block the calls for everyone.

You can enable Global Block while configuring the Prefix Set.

In the [**Flags**](https://docs.connexcs.com/setup/advanced/prefix-set/#flags) field, you can either select **Global Dialled Number Blacklist** or **Global CLI Blacklist**.

## 3. Block Calls based on Price Limits

### 3.1 Setting Capped Rate

1. Go to **Management > Customer > Customer [Name] > Routing > Price Limits > Capped Rate**.
2. You can specify an amount and prevent callers making calls above the specified amount.

### 3.2 Setting Block Connect Cost

1. Go to **Management > Customer > Customer [Name] > Routing > Price Limits > Blocked Connect Cost**.
2. You can either **Enable** or **Disable** this option. It helps you block the calls with connection costs.

### 3.3 Setting the FTC DNC Report ANI Block (USA)

1. Go to **Management > Customer > Customer [Name] > Routing > Price Limits > FTC DNC Report ANI Block (USA)**.
2. You can either **Enable** or **Disable** this option. It's a list of phone numbers provided by the FTC  reported as spam.

### 3.4 Setting the DNO

1. Go to **Management > Customer > Customer [Name] > Routing > Price Limits > DNO**.
2. You can either **Enable** or **Disable** this option. These are the number ranges which don't exist.

<img src= "/guides/img/spam3.png" width= "400">

## 4. Performance (ASR+) based Call Blocking

Performance based call blocking option let's you block calls if certain ASR+ low, or high etc.

1. Go to **Management > Customer > Customer [Name] > Routing > Capacity Limits > ASR+**.
2. Click on the dropdown menu to select from multiple options like ASR+(Low), ASR+(High), ASR? etc.

<img src= "/guides/img/spam4.png" width= "400">

## 5. Block Calls using ScriptForge

You can create a script on the ScriptForge under the Developer section.

[**Click here**](https://docs.connexcs.com/developers/scriptforge/#configuration) to follow the steps for writing the script.

1. Go to **Management > Customer > Customer [Name] > Routing > ScriptForge > ScriptForge**.
2. Click on the dropdown menu to select from the list of configured scripts.

<img src= "/guides/img/spam5.png" width= "400">

## 6. Block Calls using Locks

### 6.1 Setting a Lock

Using Locks for call blocking is a **Strategic** Call Blocking method.

Here, we a blocking a particular route of a Carrier Rate Card.

You can lock into a particular Carrier.

1. Go to **Management > Customer > Customer [Name] > Routing > Locks > Lock**.
2. Click on the dropdown menu to select from available Carrier Rate Cards.

### 6.2 Using a DNC List

Blocking calls with DNC Lists can be treated as **User Database** based blocking.

1. Go to **Management > Customer > Customer [Name] > Routing > Locks > DNC List**.
2. Click on the dropdown menu to select from available DNC lists.

[**Click here**](https://docs.connexcs.com/dnc/#do-not-call-check) to follow the steps for creating a DNC List.

### 6.3 Using Block Destination Type

Blocking calls according to their destination is consideres as a **Strategic** based blocking.

For example, if your customer only dials landline numbers, then you can block all other destination types like Mobile, Satellite etc.

1. Go to **Management > Customer > Customer [Name] > Routing > Locks > Block Destination Type**.
2. Click on the dropdown menu to select the destination types like Mobile, Fixed, Satellite, VoIP etc.

### 6.4 Using Spam Scout Scoring

[**CLick here**](https://docs.connexcs.com/customer/routing/#locks) to know more about Spam Scout Scoring.

1. Go to **Management > Customer > Customer [Name] > Routing > Locks > Spam Scout Scoring**.
2. You can use the slider to choose from the options like Block All, Allow All etc.

<img src= "/guides/img/spam6.png" width= "900">

## 6. Block Calls using Strategy

Blocking calls using **Strategy** method allows you to select a Prefix set and then you can select **Drop** to block that particular CLI list.

<img src= "/guides/img/spam7.png" width= "400">

[**Click here**](https://docs.connexcs.com/customer/routing/#strategy) to know more about **Strategy**.

## 7. Block Calls using Fraud Profiles

You can block calls using [**Fraud Profiles**](https://docs.connexcs.com/customer/routing/#fraud).

1. Go to **Management > Customer > Customer [Name] > Routing > Locks > Fraud**.
2. Select the created **Fraud Profile**.
   [**Click here**](https://docs.connexcs.com/setup/advanced/fraud/#setup-fraud-detection) to follow the steps to setup the fraud profile.
3. Click the **Fraud Mode** dropdown menu to select from 3 options: Disabled, Low or High.

<img src= "/guides/img/spam8.png" width= "400">

## 8. Using RTP Block

RTP call blocking methods blocks the IP addresses.

1. Go to **Setup > Advanced > RTP Block**.
2. Click on blue `+` button to add the IP address you wish to block.

<img src= "/guides/img/spam9.png" width= "600">

[**Click here**](https://docs.connexcs.com/setup/advanced/rtp-block/) to know more about RTP Block at ConnexCS.

## 8. Using Firewall for Call Blocking

Firewall blocks the IP Addresses in addition to blocking the attackers.

1. Go to **Setup > Advanced > RTP Block**.
2. Click on blue `+` button to add the IP address you wish to block.

<img src= "/guides/img/spam10.png" width= "600">

[**Click here**](https://docs.connexcs.com/setup/advanced/firewall/) to know more about Firewall at ConnexCS.