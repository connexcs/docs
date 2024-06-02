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

### Vector Search

Here we use the **PostgreSQL Search** which is a consistent query mechanism which deals in real-time and performs query on historic data.

We currently make use of **Unified Query Language**.

This whole search mechanism is [Vector Search](https://learn.microsoft.com/en-us/azure/search/vector-search-overview)

It enables you to locate records that accurately match specific keywords. Because it uses indices, effective query methods, and rules, this query method is quick.

|**Type of Search/Algorithm**|**Explanation**|**Example**|
|----------------------------|---------------|-----------|
|**Pattern Matching**|Checks if a string matches a specific pattern|`abc` LIKE `abc` returns true because the string `abc` exactly matches the pattern `abc`.
|**PostgreSQL Search**| Broader concept that includes pattern matching and other search techniques like full-text and trigram search|`SELECT name FROM students WHERE grade = 'A';`. This will return only the name column for each row where the grade is ‘A’. I hope this helps! Let me know if you have any other questions|

#### PostgreSQL

PostgreSQL full-text searches are made possible by the **to_tsvector()** and **to_tsquery()** methods.

* **to_tsvector():** This function takes a piece of text and breaks it down into important words, ignoring common words like ‘and’, ‘the’,etc these are also known as **Stop Words**.
It’s like creating an index for a book, where you list the important words and where they appear.
In the end, the to_tsvector() function returns a tsvector list containing all base words and their positions with stop words like a and the stripped.
In short, to_tsvector parses a textual document into tokens, reduces the tokens to lexemes (headwords of dictionaries), and returns a tsvector which lists the lexemes together with their positions in the document.

|Phrase|Query|Result of the to_tsvector|
|------|-----|-------------------------|
|The girls are coming to eat the apples after they pray| `SELECT to_tsvector('The girls are coming to eat the apples after they pray');`|`girl:2 come:4 eat:6 apple:8 after:9 pray:11`|

* **to_tsquery():** This function takes your search words and prepares them for searching in the text that was processed by to_tsvector().
It’s like looking up words in the index of a book.
In a nutshell, the **to_tsquery()** function compiles a search term into a structure that the PostgreSQL server can understand when locating documents/records in a tsvector list.

##### How to make a search using to_tsvector and to_tsquery()?

For full-text search in PostgreSQL:

* **to_tsvector** acts like an **interpreter**, getting the text ready for search.

* **to_tsquery** defines what you're **looking** for.

* **@@** checks if the text matches your search query. The @@ operator compares these two and returns a simple 'yes' or 'no' answer (**TRUE/FALSE**) based on whether the keywords are found in the document.

For example,

|**Type of search**|**Query**|**Result**|
|------------------|---------|----------|
|**Normal Search**|`SELECT * FROM products WHERE product_name like '%Apple%';`|`Apple, Apple Juice, Applepie, Applecookies`|`Apple, Apple Juice, Applepie, Applecookies`|
|**PostgreSQL Search**| `SELECT * FROM products WHERE to_tsvector(product_name) @@ to_tsquery('Apple');`|`Apple, Apple Juice`|

##### Methods to refine your research

You can use various Operators to refine your research:

|**Operator**|**Explanation**|**Query**|**Result**|
|------------|--------------|---------|----------|
|`AND/&`|When searching, filter the results to include only entries (records or documents) that contain all the keywords provided in a list, separated by `&`|`SELECT * FROM products WHERE to_tsvector(product_name) @@ to_tsquery('T-Shirt & UCLA');`|`T-shirt UCLA Medium, T-shirt Green UCLA, UCLA Benetton T-Shirt`|
|`OR\|`|When searching, use 'OR' to find entries (records or documents) that contain at least one keyword from the provided list.|`SELECT * FROM products WHERE to_tsvector(product_name) @@ to_tsquery('UCLA \| T-Shirt');`|`UCLA Medium, T-shirt Green UCLA, Benetton T-Shirt`|
|`NOT/!`|Exclude a particular keyword|`SELECT * FROM products WHERE to_tsvector(product_name) @@ to_tsquery('!Medium');`|`T-shirt Green UCLA, UCLA Benetton T-Shirt`|
|`""`| Find entries (records or documents) where the text precisely matches the phrase enclosed in double quotes ("")|`SELECT * FROM products WHERE to_tsvector(product_name) @@ to_tsquery("UCLA Benetton T-Shirt");`|`UCLA Benetton T-Shirt`|

!!! Tip
    By using **multiple search operators together**, you can create more specific search queries that helps you find the most relevant entries quicker.

|**Query Type**|**Explanation**|**Operator used for combining words**|**Example/Query**|**Results**
|--------------|---------------|------------|-------|------|
|**plainto_tsquery**|Converts plain text to tsquery for all words|`& (AND)`|`SELECT plainto_tsquery('english', 'The pretty girl')`;| `pretty & girl`|
|**phraseto_tsquery**|Convert text to tsquery for exact phrases|`<-> (FOLLOWED BY)`|`SELECT plainto_tsquery('english', 'The pretty girl');`|`pretty <->(followed by) girl|
|**websearch_to_tsquery**|Convert user input (web search like) to tsquery|`Supports OR\|`|`SELECT websearch_to_tsquery('english', 'signal -"segmentation weak"')`;`| `'signal' & !( 'segment' <-> 'weak' )`|

##### Ranking the search results

When searching a database, ranking helps identify the most relevant documents.

PostgreSQL offers built-in ranking that considers **how often** search terms appear (**lexical information**), their **proximity** within the document, and their **importance** based on location (e.g., title vs. body text)(**structural information**).

!!! Tip
    You have the flexibility to create custom ranking functions and combine their outcomes with other relevant factors to tailor them to your specific requirements.

|**Type of query**|**Explanation**|
|-----------------|---------------|
|`ts_rank`|Considers **lexical information** (term frequency) and **proximity** of search terms in the document. Documents with more frequent occurrences of search terms closer together will generally rank higher|
|`ts_rank_cd`|Similar to `ts_rank` but also incorporates structural information. It assigns higher weights to terms appearing in titles, headings, or summaries compared to those within the body text|

!!! Example
    1. **`ts_rank`**
    Imagine you have a table containing product descriptions and search for "camera lenses." The query might return a list of products like:
    * **Query**: `SELECT*, ts_rank(search_vector, to_tsquery('english', 'query terms')) AS rank FROM your_table WHERE search_vector @@ to_tsquery('english', 'query terms') ORDERBY rank DESC;`
    * **Result**:

    |**ID**|**Product_name**|**Description**|**Rank**|
    |------|----------------|---------------|--------|
    |1|DSLR Lens|High-quality zoom lens for professional photography|0.8|
    |2|	Mirrorless Lens|Compact lens perfect for travel and everyday use|0.5|
    |3|Smartphone Case|Protects your phone and includes a lens attachment|0.2|

    2. **`ts_rank_cd`**
    Imagine you have a news article database and search for "climate change." The query might return articles like:
    * **Query**: `SELECT *, ts_rank_cd(search_vector, to_tsquery('english', 'query terms'), dictionary) AS rank
    FROM your_table
    WHERE search_vector @@ to_tsquery('english', 'query terms')
    ORDER BY rank DESC;`

    * **Result**:

    |**ID**|**Title**|**Summary**|**Rank**|
    |------|---------|-----------|--------|
    |1|The Impact of Climate Change on Oceans|Discusses rising sea levels and ocean acidification...|0.8|
    |2|Climate Change: A Growing Global Threat|Briefly mentions climate change but focuses on pollution|0.5|
    |3|	Environmental Issues and Sustainability|Mentions climate change but in a broader context|0.3|

##### Highlighting Results

**Highlighting** results refers to the process of visually emphasizing search terms within retrieved documents to improve user experience.

It helps users quickly identify the relevant parts of a document that match their search query.

The function used is `ts_headline`. It's a built-in function used for highlighting search terms within retrieved documents during full-text search.
It takes the document text and your search query as input and returns an excerpt from the document where the search terms are highlighted.

!!!! Example
    Information to be highighted form:

    |Product_name|Excerpt|
    |------------|-------|
    |iPhone 14 Pro Max|	Powerful A16 Bionic chip and an advanced triple- smartphone camera system for capturing stunning photos and cinematic-quality videos|
    |Samsung Galaxy S23 Ultra|Exceptional camera experience with a 108MP main sensor and advanced zoom capabilities. Long-lasting battery and S Pen support|
    |Google Pixel 7 Pro|Next-generation Google Tensor chip for intelligent photography features. Compact design and a beautiful display. Smartphone Case protects your phone and includes a wide-angle lens attachment|

    |Product_name|Excerpt|
    |------------|-------|
    |iPhone 14 Pro Max| Powerful A16 Bionic chip and an advanced triple-**smartphone camera** system for capturing stunning photos and cinematic-quality videos|
    |Samsung Galaxy S23 Ultra|Exceptional **camera** experience with a 108MP main sensor and advanced zoom capabilities. Long-lasting battery and S Pen support|
    |Google Pixel 7 Pro|Next-generation Google Tensor chip for intelligent photography features. Compact design and a beautiful display. Smartphone Case Protects your phone and includes a wide-angle **lens** attachment|

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
