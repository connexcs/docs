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

### Create a Transcription Package
To create a package to resell to your customers go to Config :material-menu-right: [Packages](https://docs.connexcs.com/customer/package/). Click on <img width="20" alt="image" src="https://user-images.githubusercontent.com/113333073/196905493-763b9c09-c358-482e-bd4e-1b4a60e3b222.png"> and choose your Transcription Package from **ConnexCS Package**.

Select your **Retail Cost** and click on <img width="40" alt="image" src="https://user-images.githubusercontent.com/113333073/196905997-4050eeef-4387-4718-84cb-e390be97d987.png">

### Automated Transcriptions
Add Package to Customers Account, assign the **Quantity**, and also assign a **Start Date** and **End date** to the package. At the End Date, the package will automatically cease to work. 

click on <img width="40" alt="image" src="https://user-images.githubusercontent.com/113333073/196905997-4050eeef-4387-4718-84cb-e390be97d987.png">, and the package will be available with the customer.

In Routing :material-menu-right: Media, you can enable or disable this service.

### Manual Transcriptions

Navigate to the **Logging Page** to access the transcribed calls.


## Analyzing Transcriptions

Once a call has been transcribed it is placed into a full-text search engine, available only to you and (in the future) your customer.

To analyze the transcriptions we will be sending a query to the server which will then based upon your search criteria return results with a score.

### Ad-hoc Queries

To view existing transcriptions, you can enter `*` and choose the required date range, and it will return all the results. 

You can further refine your search using query Search Modifiers (anchor) 

### Saved Queries   

Saved queries allows you to build a query which you can reuse.

The **Transcription Query Profile** enables you to construct a query list and save it. 

You can search the created query list for the calls that have been transcribed.

### Score

When you search for a trancribed call, it assigns score to the calls.

The highest score will be alloted to the most relevant call. 

The maximum number of words matched from the query with the transcribed call will have the highest score.  

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

#### Penalty

You can set a Penalty for a customer.

For example, you can disable the customer's account if someone used swear words over the call. 

You can decide the time-duration of the penalty.

#### **Lemmentization**  

Our built-in search engine offers lemmentization. 

Lemmatization is the grouping together of different forms of the same word. It enables end users to use any variation of a base word in search queries.  

It helps in receiving appropriate results. 

For example, 

1. runs, running, ran are all forms of the word **run**
2. builds, building or built are all forms of the word **build**


## Search Modifiers

Search modifications allow you to describe what you want to find. There is a specific syntax to help you with this.

| Query Type              | Example                                                                                                                                                                          | Example Matches                                                                                                                     | Description                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Wildcard**            | c\*t                                                                                                                                                                             | cat count cut                                                                                                                       | 1. When looking for alternative spellings and variations of a root word, wildcards are used.   2. Used in place of multiple characters                                                                                                                                                                                         | > :warning: **Wildcard characters cannot be used in place of a word's first letter or within an exact phrase search**:                                                                                                                                                                                                                                                                                                                               |
| **Placeholder**         | c?t                                                                                                                                                                              | cat cut                                                                                                                             | Used in place of single character                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Fuzzy Searches**      | 1.~brwn   2.~exmple   3.~quikc  4.~alowd                                                                                                                                         | 1. brown  2. example  3. quick  4. allowed                                                                                          | 1. A fuzzy search looks for text that closely, rather than precisely, matches a keyword. Even if your search terms are mistyped, fuzzy searches can still help you find relevant results.  2. Put a tilde (~) at the end of the search term to execute a fuzzy search.                                                         | > :warning: **Please do not use Wildcards and Fuzzy searches together**:  Fuzzy and wildcard operators cannot be combined and used. One of the operators is not used when the two are combined. For instance, for fuzzy you can simply say "query": "rich~1", the ~1 here is the [Fuzziness parameter](https://medium.com/@saurabhpakhare/elasticsearch-wildcard-fuzzy-query-7f435ab81ec7) but you cannot do something like this"query" : "*rich*~1" |
| **Boolean Expressions** | +apples red -green                                                                                                                                                               | **+apples**: apples should be present **red**: red may or may not present (optional) **-green**: green should not be present at all | 1.Boolean operators are used as conjunctions to combine or exclude keywords in a search.  2.These operators link your search terms together to either increase or decrease the number of results you receive.                                                                                                                  | **_NOTE:_** >The well-known boolean operators AND (&&), OR (\|\|), and NOT(!) are also available.  >However, when many operators are used together, parentheses should be used. As they do not follow the standard precedence rules.  >For example, >((quick AND fox) OR (brown AND fox) OR fox) AND NOT news                                                                                                                                        |
| **Regular Expression**  | 1. 1.09(0[1-2]\|1[\d]\|3[\d]\|2[0-1])[\d]{3}[\d]{4}  2. ^(0?[1-9]\|1[0-2])[\/](0?[1-9]\|[12]\d\|3[01])[\/](19\|20)\d{2}$  3. ^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$ | 1. Matching a phone number  2. Matching a date  3. E-mail validation                                                                | It is a language to conduct pattern matches. To find out more [click here](https://www.vogella.com/tutorials/JavaRegularExpressions/article.html#:~:text=A%20simple%20example%20for%20a,a%22%20or%20%221%22)                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Proximity Search**    | red brick house                                                                                                                                                                  | red house of brick or house made of red brick                                                                                       | 1. A proximity query allows the provided words to be spaced further apart or in a different order.  2. To start a proximity search use the tilde (~) symbol at the end of a phrase and specify the [distance]((https://www.techiedelight.com/levenshtein-distance-edit-distance-problem/)) in words as a valid integer number. |                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Boosting**            | Score                                                                                                                                                                            | the most relevant call will be assigned the highest score                                                                           | To make one term more significant than another                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
