# Transcription

Global :material-menu-right: Transcription

## Introduction

!!! danger "Alpha Feature"
    Transcription is currently in public Alpha, it's not intended for production usage and has limited documentation, we are working on this.

A transcription service translates voice communication whether live or recorded into a text. If you have a recorded call, you may use this service to have it transcribed in English.

English is the only language offered at present, however, additional languages can be made available as per the customer's request.

Depending on the needs of customers, you can define individual prices. You can also select the quantity you want to offer your customer.

## Transcription Setup

### Enable Transcription
To enable the Transcription feature on your account navigate to Setup :material-menu-right: Settings :material-menu-right: Account and click the "Enable Transcription" button.
![enable](/docs/transcription/img/transcription-enable-transcriptions.png)
[enable](/docs/transcription/img/transcription01.webp)

### Create a Transcription Package
To create a package to resell to your customers go to Config :material-menu-right: [Packages](https://docs.connexcs.com/customer/package/). Click on <img src="/docs/transcription/img/transcription-add.png" alt="add" width="50"/> and choose your Transcription Package from **ConnexCS Package**.

Select your **Retail Cost** and click on <img src="/docs/transcription/img/transcriptions-save.png" alt="add" width="120"/> and choose your Transcription Package from **ConnexCS Package**.

<img src="/docs/transcription/img/transcription-package.png" alt="package" width="500"/>

### Automated Transcriptions
Add Package to Customers Account, assign the **Quantity**, and also assign a **Start Date** and **End date** to the package. At the End Date, the package will automatically cease to work. 

<img src="/docs/transcription/img/transcriptions-automated-transcriptions.png" alt="automated transcript" width="400"/> 

Click on <img src="/docs/transcription/img/transcriptions-save.png" alt="add" width="120"/> ,and the package will be available with the customer.

In Routing :material-menu-right: Media, you can enable or disable this service.

<img src="/docs/transcription/img/transcription-enable-disable.png" alt="enable" width="900"/>

### Manual Transcriptions

Navigate to the **Logging Page** to access the transcribed calls.

## Search Transcriptions

Once a call has been transcribed it is placed into a full-text search engine, available only to you and (in the future) your customer.

Go to Global :material-menu-right: Transcription to search for the transcribed calls. 

![search](/docs/transcription/img/transcription-search-transcriptions.png)

To search for a transcriptions we will be sending a query to the server which will then based upon your search criteria return results with a score, we can use search modifiers to help us accomplish this.

### Search Modifiers

Search modifications allow you to describe what you want to find. There is a specific syntax to help you with this.

| Query Type               | Example                   | Example Matches                                                | Description                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                |
|--------------------------|---------------------------|----------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Wildcard                 | c\*t                      | cat<br>count<br>cut<br>context<br>compact                      | When looking for alternative spellings and variations of a root word, wildcards are used. Used in place of multiple characters                                                                                                                                  | ℹ️: Wildcard characters cannot be used in place of a word's first letter or within an exact phrase search.                                                                                                                                      |
| Placeholder              | c?t                       | cat<br>cut<br>cot                                              | Used in place of single characters                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                |
| Fuzzy Searches           | ~colr                     | colour<br>color<br>colt<br>caller                              | A fuzzy search looks for text that closely, rather than precisely, matches a keyword. Even if your search terms are mistyped, fuzzy searches can still help you find relevant results. Put a tilde (~) at the end of the search term to execute a fuzzy search. | ⚠️ Please do not use Wildcards and Fuzzy searches together: Fuzzy and wildcard operators cannot be combined and used. One of the operators is not used when the two are combined. For instance, for fuzzy, you can simply say "query": "rich~1" |
| Boolean Expressions      | +apples red -green        | apples must be included, red is optional, green must be absent | Boolean operators are used as conjunctions to combine or exclude keywords in a search. These operators link your search terms together to either increase or decrease the number of results you receive.                                                        |                                                                                                                                                                                                                                                |
| Alt. Boolean Expressions | (fox OR cat) AND NOT fast | either fox or cat must be included, fast must be absent        |                                                                                                                                                                                                                                                                 |  ℹ️: The well-known boolean operators AND (&&), OR (\|\|), and NOT(!) are also available.However, when many operators are used together, parenthesis should be used. As they do not follow the standard procedure rules.                         |
| Regular Expression       | \+[1-9][0-9]{10,13}       | matching a phone number                                        | It is a language to conduct pattern matches. To find out more click here                                                                                                                                                                                        |                                                                                                                                                                                                                                                |
| Proximity Search         | red brick house           | red house of brick or house made of red brick                  | A proximity query allows the provided words to be spaced further apart or in a different order. To start a proximity search use the tilde (~) symbol at the end of a phrase and specify the distance in words as a valid integer number.                        |                                                                                                                                                                                                                                                |
| Boosting                 | fast^10 racing^20 car     | the racing car went very fast                                  | Car would match, but having racing and fast in the document means that its score would be boosted by 30                                                                                                                                                         |                                                                                                                                                                                                                                                |

### **Lemmentization**  

Our built-in search engine offers lemmentization. 

Lemmatization is the grouping together of different forms of the same word. It enables end users to use any variation of a base word in search queries.  

It helps in receiving appropriate results. 

For example, 

1. runs, running, ran are all forms of the word **run**
2. builds, building or built are all forms of the word **build**

### Ad-hoc Queries

To view existing transcriptions, you can enter `*` and choose the required date range, and it will return all the results. 

You can further refine your search using query [Search Modifiers](https://bani--connexcs-docs.netlify.app/transcription/#search-modifiers) 

### Saved Queries   

Saved queries allows you to build a query which you can reuse.

The **Transcription Query Profile** enables you to construct a query list and save it. 

You can search the created query list for the calls that have been transcribed.

### Score

Whilst searching the relevence of a document will be rated and a score will be assigned, this helps return the documents which best match the search criteria.

### Transcription

Click on **View Transcription** to view the full transcribed call.

> **_NOTE:_** 
> 1. Transcription will be performed only for the recorded calls.   

#### Visibility

Visibility is a privacy setting which allows you to decide if you want your customers to be able to see (and use) the query which you have saved. **Public** will allow your customers to see this, **Private** will keep it hidden from them.

You should choose **Customer Name** as **None** and **Visibility** as **Public** if you want every one of your customers to see the list.

### Transcription Alerts

!!! danger "Coming Soon"
    Alert system for Transcription is currently in development stage, it has limited documentation, we are working on this.

You can navigate to a specific customer's account and add a Saved Query as alert.

You will either recieve a call or text or e-mail saying a particular word or phrase has been detected for a specific call.  
