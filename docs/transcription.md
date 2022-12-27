# Transcription

Global :material-menu-right: Transcription

## Introduction

A transcription service translates voice communication, whether live or recorded, into text. If you have a recorded call, you may use this service to have it transcribed in English.

English is the only language offered at present. But we can make other languages available per the customer's request.

Depending on the needs of customers, you can define individual prices. You can also select the quantity you want to offer your customer.

## Transcription Setup

### Enable Transcription

To enable the Transcription feature on your account, navigate to Setup :material-menu-right: Settings :material-menu-right: Account and click the "Enable Transcription" button.

<img src="/transcription/img/transcription-enable-transcriptions.png" enable transcription="package" width="100"/>

### Create a Transcription Package

To create a package to resell to your customers, go to Config :material-menu-right: [Packages](https://docs.connexcs.com/customer/package/). Click on <img src="/transcription/img/transcription-add.png" alt="add" width="50"/> and choose your Transcription Package from **ConnexCS Package**.

Select your **Retail Cost** and click on <img src="/transcription/img/transcriptions-save.png" alt="save" width="120"/> and choose your Transcription Package from **ConnexCS Package**.

<img src="/transcription/img/transcription-package.png" alt="package" width="500"/>

### Automated Transcriptions

Add Package to Customers Account, assign the **Quantity**, and also assign a **Start Date** and **End date** to the package. At the End Date, the package will automatically stop working.

<img src="/transcription/img/transcriptions-automated-transcriptions.png" alt="automated transcript" width="400"/>

Click on <img src="/transcription/img/transcriptions-save.png" alt="save" width="120"/>, and the package will be available with the customer.

In Routing :material-menu-right: Media, you can enable or disable this service.

<img src="/transcription/img/transcription-enable-disable.png" alt="enable" width="900"/>

### Manual Transcriptions

Navigate to the **Logging Page** to access the transcribed calls.

## Search Transcriptions

Once the system performs the call transcription process, it's placed into a full-text search engine, available only to you and, (in the future) your customer.

Go to Global :material-menu-right: Transcription to search for the transcribed calls.

![search](/transcription/img/transcription-search-transcriptions.png)

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

### Score

While searching for the relevance of a document, the system rates it and assigns a score; this helps return the documents that best match the search criteria.

### Transcription Tab

Click on **View Transcription** to view the full transcribed call.

!!! note "You can only have Transcriptions for the recorded calls."

#### Visibility

Visibility is a privacy setting that allows you to decide if you want your customers to be able to see (and use) the query that you have saved. **Public** will allow your customers to see this; **Private** will keep it hidden from them.

You should choose **Customer Name** : **None** and **Visibility** as **Public** if you want every one of your customers to see the list.

### Transcription Alerts

You can navigate to a specific customer's account and add a Saved Query as an alert.

You will either receive a call, text, or e-mail saying that the system has detected a particular word or phrase for a specific call.
