# Data Retention

---

**Document Metadata**
<br>**Category**: Setup / Settings / Data Retention</br>
<br>**Audience**: Administrators, Engineers, Compliance & Operations Teams</br>
<br>**Difficulty**: Intermediate</br>
<br>**Time Required**: Approximately 30–45 minutes</br>
<br>**Prerequisites**: Active ConnexCS account with Setup-Settings access; understanding of regulatory data retention requirements for telecom metadata.</br>
<br>**Related Topics**: [Call Detail Record Retention](https://docs.connexcs.com/guides/cdr-retention/)</br>
<br>**Next Steps**: Navigate to `Setup → Settings → Data Retention`, review archived data sizes by month, understand archival versus live data scope (note: queries cannot span live + archive datasets), decide on internal purge policy or submit a support ticket if you require external-archive deletion.</br>

---


**Setup :material-menu-right: Settings :material-menu-right: Data Retention**

The **Data Retention** page displays presently stored data in the archive on a monthly basis.

Data is periodically archived here from the live servers. You may query both live and archive data from the Call Detail Record (CDR) section.

Thus, your query may not span between live and archived data.

You can download the data from this page.

![alt text][data-retention]

!!! note "Displayed size"
    Displayed size represents the compressed size.

!!! warning "Data storage and removal"
    ConnexCS stores data here indefinitely.

    As a Managed Service Provider for telecommunications, there are several laws governing data retention. 
    
    The ConnexCS platform is neutral in this matter. 
    
    It's the customer's responsibility to abide by all the laws of your country and jurisdiction with regards to retaining or purging data. 
    
    If you want us to remove data from the archive, please open a **[Support Ticket](https://docs.connexcs.com/reporting-problems/#support-tickets)** and we will assist you.

[data-retention]: /setup/img/data-retention.png "Data Retention"
