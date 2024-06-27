# Transcription

**Global :material-menu-right: Transcription**

## Introduction

A transcription service translates voice communication, whether live or recorded, into text. If you have a recorded call, you may use this service to have it transcribed in English.

English is the only language offered at present. But we can make other languages available per the customer's request.

Depending on the needs of customers, you can define individual prices. You can also select the quantity you want to offer your customer.

## Transcription Setup

### Enable Transcription

To enable the Transcription feature on your account, navigate to **Setup :material-menu-right: Settings :material-menu-right: Account** and click the **Enable Transcription** button.

<img src="/transcription/img/transcription-enable-transcriptions.png" enable transcription="package" width="100"/>

!!! Note
    You can find the **Pricing** of the Transcription service here: **Setup :material-menu-right: Settings :material-menu-right: Account**

!!! Warning
    Please contact us for assistance and enable the transcription service if you are unable to find the **Enable Transcription** option.

!!! Info
    Please take note that there is **no fee** for **silence**.

    It implies that if a call lasts for 50 seconds and no audio is exchanged for 20 seconds, we will make every effort to cut out the silence from the audio and bill you for 30 seconds of transcribing service.

### Add Transcription Service for your Customer

Once this service has been [enabled on your account](https://docs.connexcs.com/transcription/#enable-transcription), you can follow the steps below to enable this for your customers:

1. Navigate to **Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Routing :material-menu-right: Ingress Routing `+` icon :material-menu-right: Media :material-menu-right: Transcribe**.
2. From the drop-down you can select from multiple options like **Disabled**, **1% Sampling**, **5% Sampling**, **25% Sampling**, **50% Sampling** and **Enabled (Always On)**.

!!! Info
    Out of all the calls that are accessible, **% Sampling** indicates the proportion of calls that will be transcribed.

<img src="/transcription/img/trans1.png" alt="enable" width="900"/>

3.**Transcription Duration**: You can set a maximum recording time (in seconds) for your transcription. Please note, the recording will stop at the specified time, even if mid-sentence.

4.Navigate to **Global :material-menu-right: Transcription**. You will be able to see the screen as shown below.

<img src="/transcription/img/trans2.png"/>

5.You will see 3 options:

* **Select**: Select from query profiles built using the [Transcription Query Profile](https://bani-transcription--connexcs-docs.netlify.app/transcription/#transcription-query-profile).
* **Search**: Allows you to search things like the **Call ID**, **Phrases** etc. [Click here](https://docs.connexcs.com/transcription/#search-transcriptions) to know more.
* [Transcription Query Profile](https://bani-transcription--connexcs-docs.netlify.app/transcription/#transcription-query-profile).

6.The columns in the field include:

* **Call ID**: Particular Call ID.
* **Date**: Date of the call.
* **Customer Name**: Name of the customer whose transcription is displayed.
* **Text**: Sentences of the transcribed call.
* **Leg**: Assigns `0` value to caller, `1` to the callie.
* **Score**: While searching for the relevance of a document, the system rates it and assigns a score; this helps return the documents that best match the search criteria.

### Create a Transcription Package

To create a package to resell to your customers, go to Config :material-menu-right: [Packages](https://docs.connexcs.com/customer/package/). Click on <img src="/transcription/img/transcription-add.png" alt="add" width="50"/> and choose your Transcription Package from **ConnexCS Package**.

Select your **Retail Cost** and click on <img src="/transcription/img/transcriptions-save.png" alt="save" width="120"/> and choose your Transcription Package from **ConnexCS Package**.

<img src="/transcription/img/transcription-package.png" alt="package" width="500"/>

### Automated Transcriptions

Add Package to Customers Account, assign the **Quantity**, and also assign a **Start Date** and **End date** to the package. At the End Date, the package will automatically stop working.

<img src="/transcription/img/transcriptions-automated-transcriptions.png" alt="automated transcript" width="400"/>

Click on <img src="/transcription/img/transcriptions-save.png" alt="save" width="120"/>, and the package will be available with the customer.

## Search Transcriptions

Once the system performs the call transcription process, it's placed into a full-text search engine, available only to you and, (in the future) your customer.

To search for transcriptions, we will be sending a query to the server, which, based on your search criteria, will return results with a score. We can use search modifiers to help us achieve this.

### Search Modifiers

Search modifications allow you to describe what you want to find. Specific syntax is available to help you with this.

### **Lemmatization**

Our built-in search engine offers Lemmatization.

Lemmatization is the grouping together of different forms of the same word. It enables end users to use any variation of a base word in search queries.

It helps in receiving appropriate results.

For example,

1. runs, running, and ran are all forms of the word **run**
2. builds, building, or built are all forms of the word **build.**

### Ad-hoc Queries

To view existing transcriptions, you can enter `*` and choose the required date range, and it will return all the results.

You can further refine your search using query [Search Modifiers](https://bani--connexcs-docs.netlify.app/transcription/#search-modifiers)

### Saved Queries

Saved queries allow you to build a query that you can reuse.

The **Transcription Query Profile** enables you to construct a query list and save it.

You can search the created query list for the transcribed calls.

### Boolean Search

You can use various Operators to refine your research:

|**Operator**|**Explanation**|**Example**|
|------------|---------------|-----------|
|`AND`|Includes entries that contain all the keywords provided in a list, separated by `AND/&/and`|`call AND connect AND echo` \| `call and connect and echo` \| `call & connect & echo` |
|`OR`|Include entries that contain at least one keyword from the provided list, separated by `OR/or`|`call or connect or echo` \| `call OR connect OR echo`|
|`NOT`| This is the NOT operator it won't include the keywords prefixed by`-` symbol|`-call -connect -echo`|

!!! Example

    1. `AND` Operator
    <img src="/transcription/img/and.png" width= "800">

    2. `OR` Operator
    <img src="/transcription/img/or.png" width= "800">

    3. `NOT` Operator
    <img src="/transcription/img/not.png" width= "800">

!!! Tip
    By using **multiple search operators together**, you can create more specific search queries that helps you find the most relevant entries quicker.

### Transcription Query Profile

To create the query list, please follow the steps below:

1. Click on the `Transcription Query Profile` button followed by the blue `+` icon.
2. Enter the **Name** of your query list.
3. Write your query in the **Query** tab, for example "I am calling from the UFO".
4. Select the customer for whom you want to apply this particular query from the **Customer Name** drop-down.
5. Form the **Visibility** drop-down you can either select **Public** or **Private**. Its a privacy setting that allows you to decide if you want your customers to be able to see (and use) the query that you have saved. **Public** will allow your customers to see this; **Private** will keep it hidden from them.

    For example, you can choose **Customer Name** : **None** and **Visibility** as **Public** if you want every one of your customers to see the list.

6.**Action**: Allows you to either [**Trigger Alert**](https://docs.connexcs.com/transcription/#transcription-alerts) when the phrase is detected or **Hangup** the call if that particular phrase is detected in the call.

7.Click `Save`.

<img src="/transcription/img/trans3.png" width= "400"/>

#### Transcription Alerts

You can navigate to a specific customer's account and add a Saved Query as an alert.

You will either receive a call, text, or e-mail saying that the system has detected a particular word or phrase for a specific call.

Please follow the below steps to add the Alerts:

1. Navigate to **Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Alert**.
2. Enter the **Title** of the alert.
3. Enter the **E-mail/Phone Number** you wish to receive the alert message.
4. Select the **Area** as **Transcription**. For example, this alert can be used to inform Customer1 that their account has been disabled.
5. You can also select the **Penalty** as soon as the alert triggers. This option will disable the customer's account for **1 minute**, **5 minutes**, **15 minutes**, **1 Hour**, **1 Day**, **1 Year** or just use the **Disabled** option for not using the penalty option.
6. You can also select the **Template** from the drop-down. For example, you can use this template to alert the admin/manager that Customer1's account has been disabled.

<img src="/transcription/img/trans4.png" alt="transcription" width="900"/>
