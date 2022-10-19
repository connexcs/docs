# Transcription

Global :material-menu-right: Transcription

## Introduction

!!! danger "Alpha Feature"
    Transcription is currently in public Alpha, it's not intended for production usage and has limited documentation, we are working on this.

A transcription service translates voice communication whether live or recorded into a text. If you have a recorded call, you may use this service to have it transcribed in English.

English is the only language offered at present, however, additional languages can be made available as per the customer's request.

Depending on the needs of customers, you can define individual prices. You can also select the quantity you want to offer your customer.

## Using Transcription

1. You can choose your Transcription package and the retail cost by navigating to **Config>Packages**. 
2. Then choose the customer's account you want to push the package to. 
3. The customer is able to use this service once the package has been subscribed to their account. 
4. In **Routing>Media**, you can enable or disable this service.
5. To access the Transcription visit **Customer> Latest Calls**; on the right side, there will be a Transcribe button. 
6. Click on the button to view the Transcription logs. The call is transcribed in real-time. 
7. Using the search bar in the Transcription section, you can look up the history of calls that have been transcribed.

Another interesting feature is the **Transcription Query Profile**, let's discuss its characteristics. 

The **Transcription Query Profile** function enables you to construct a query list and save it. You can search the created query list for the calls that have been transcribed. You can also choose whether to publish the query list to your customers. 

You can choose **Public** from the dropdown menu to reveal the list for this feature's **Visibility** dropdown, or you can choose **Private** to hide it. 

You can decide which customers can use a specific list besides to its visibility. 

You should choose **Customer Name** as **None** and **Visibility** as **Public** if you want every one of your customers to see the list.

## Transcription Search Box

The Transcription Search Box allows you to search for the transcribed call. You can use **Search Modifiers** to simplify and expedite the search process. Search modifications allow you to search for specific data and improve the accuracy of your searches. Let’s talk about the modifiers that might help you look through your call transcripts. 

### **1. Wildcard Searches**

In a search query, wildcards can be used in place of one or more characters. When searching for a single character, a question mark (?) is used. For searching with several characters, use an asterisk (). When looking for alternative spellings and variations of a root word, wildcards are employed. Word roots must contain at least three letters before a wildcard. Wildcard characters cannot be used in place of a word’s first letter or within an exact phrase search. 

For example, 

1. If you write wom?n, this will search words like women, woman, etc. 

2. If you search bird, this will feed you with results like bird, birding, birdman etc.

### **2. Regular Expressions**

Regular expression is an advanced tool useful for finding patterns in various sequences of characters. It does not work with specific terms or phrases. Regular expressions can be used to match patterns in data. By using operators as placeholder characters, patterns can be identified. 

Regular expressions patterns can be used in the query string by enclosing them in forward slashes ("/"). Some of the Regular Expressions are discussed as follows:

* **this is text** : It exactly matches the “this is text” text

* **this is text** : It exactly matches the "this is text" text
* **this\s+is\s+text**: Matches the word "this" followed by one or more whitespace characters followed by the word "is" followed by one or more whitespace characters followed by the word "text"
* **^\d+(\.\d+)?**:  ^ defines that the patter must start at beginning of a new line
                                      \d+ matches one or several digits. 
                                     The ? makes the statement in brackets optional. 
                                      \. matches ".", parentheses are used for grouping. Matches for example "5", "1.5" and "2.21".
[Click here](https://www.vogella.com/tutorials/JavaRegularExpressions/article.html#:~:text=A%20simple%20example%20for%20a,a%22%20or%20%221%22.) for some elaborate explanation on the Regular Expression for some elaborate explanation on the Regular Expression.

### **3. Fuzzy Searches**

A fuzzy search looks for text that closely, rather than precisely, matches a keyword. Even when your search terms are typed incorrectly, fuzzy searches can still help you find relevant results. 

Put a tilde (~) at the end of the search term to execute a fuzzy search. 

For example ~brwn, ~exmple, ~quikc,~alowd etc.

> :warning: **Please do not use Wildcards and Fuzzy searches together**:  Fuzzy and wildcard operators cannot be combined and used. One of the operators is not used when the two are combined. For instance, for fuzzy you can simply say "query": "rich~1", the ~1 here is the [Fuzziness parameter](https://medium.com/@saurabhpakhare/elasticsearch-wildcard-fuzzy-query-7f435ab81ec7) but you cannot do something like this"query" : "*rich*~1"  


### **4. Proximity Search**
A proximity query allows the provided words to be spaced further apart or in a different order.

Proximity search allows you to specify a  [maximum edit distance](https://www.techiedelight.com/levenshtein-distance-edit-distance-problem/) in a phrase.

To start a proximity search use the tilde (~) symbol at the end of a phrase and specify the distance in words as a valid integer number. 
For example,
"fox quick"5

### **5. Boosting**  
To make one term more significant than another, use the boost operator (). 

For instance, 
If you are searching for all documents on apples but have a particular interest in green apples, then the boost operator
        green^5 apples

The default value of boost is 1. You can use any positive floating numeric value for the search.

> **_NOTE:_** 
> 1. Boosts between 0 and 1 reduce relevance.
> 2. Boosts can also be applied to phrases or to groups:
     "john smith"^2   (foo bar)^4
            

### **6. Boolean Expressions** 
Boolean operators are used as conjunctions to combine or exclude keywords in a search. 
 
These operators produce more targeted and useful results.

These operators link your search terms together to either increase or decrease the number of results you receive.

The preferred operators are:

**1. +** means: this term **must** be present

**2. -** means: this term **must not** be present

For example,

+apples red -green

**+apples**: apples should be present

**red**: red may or may not present (optional)

**-green**: green should not be present at all

**_NOTE:_**
>The well-known boolean operators AND (&&), OR (||), and NOT(!) are also available. 
>However, when many operators are used together, parentheses should be used. As they do not follow the standard precedence rules. 

>For example,

>((quick AND fox) OR (brown AND fox) OR fox) AND NOT news

### **7. Lemmentization**  

Lemmatization is the grouping together of different forms of the same word.   

Lemmatization enables end users to use any variation of a base word in search queries.  

It helps in receiving appropriate results. 

For example, 

1. runs, running, ran are all forms of the word **run**
2. builds, building or built are all forms of the word **build**
    
