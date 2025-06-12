# connexcs-user-docs
Connex Carrier Services User Documentation for the provider Control Panel and the Customer Portal. I have used this [Markdown guide](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) pretty consistently. 

## Visual Style/Layout

### Menu order and layout
The menu is configured in mkdocs.yml in the root directory (same folder as this document). For ease of reference for providers and customers, we keep this in the same order as the lefthand navigation panels in the Control Panel and Customer Portal. This includes mirroring submenu structure. 

There are some instances where documentation that does not directly correlate to a menu item is included in the Menu. This allows us to group additional relevant information with configuration details. (See the Routing menu in the Control Panel documents as an example.)

The very last section in the Control Panel documentation is Topical Guides, which includes miscellaneous articles, troubleshooting reference guides, and some specific topics which don't fit easily into specific configuration sections. 

### Document Structure
Whenever possible, each document is organized in a similar manner. This means when customers first begin to use our documnentation, they should be able to find what they are looking for relatively easily. As customers become familiar with documentation, the standardized structure makes everything more accessible, even advanced topics. 

Each section is prepended with a header tag. The Title is H1, each subsection is H2, and so on. These headers should mirror navigation in the Control Panel whenever possible. 

1. Navigation or location of a document or an area of the Control panel- enter the entire path is **bold** and each step is separated by \:material-menu-right\: (Ex: **Management :material-menu-right: Customer :material-menu-right: DID**)
2. Title- This is the name of the section on the navigation panel to the left. 
3. Description- A quick description of what the section is for, and if relevant, some common functions or features that customers might be interested in configuring. 
4. Control Panel Functions (ex: Checklist/Alerts, Personal Profile)- unordered list with bolded term immediately followed by plaintext (ex: **Checklist** Used to respond to requirements.)
5. Section (ex: Customers, Carriers) Functions (ex: Bulk Upload, Add, Delete, Search)- unordered list as bolded term immediately followed by plaintext (ex: **Checklist** Used to respond to requirements.)
6. Overview- this is the Table Columns and Functions
7. View Modification if applicable (ex: Columns and Filters)- bullet list
8. Sub-sections (ex: Provider Rate Cards, Customer Rate Cards, Routing, Global Search)
9. Create New- For each field, provide details such as what type of input it needs (is it looking for IP or FWDN, or just a friendly name for the feature). I have stayed away from providing screenshots for every configuration page as this seems less useful than the description of each field. And providing the screenshot of empty fields, which we have just explained, is redundant, and only makes the document less concise. 
10. Configure Details- depending on how the Control Panel or Customer Portal is setup, the information will be grouped differently. 
    + If tabbed at the top, use the tabbed function (ex: === "Basic"); each field is bullet and bold, then ":", description is plaintext (ex: **Field**: Description)
    + If tabbed on the left, use subheaders (for large sections, these may be separate docs, ex: Customers, Carriers), each field is bullet and bold, then ":", description is plaintext (ex: **Field**: Description)
    + When Field options are listed (ex: Enabled, Disabled, Auto) the sub-bullet is 4 spaces, then material-menu-right and the option is in backticks, followed by a "-"/dash (ex:    :material-menu-right: `Zone`- Select any of the regional servers)
    + When describing configuration steps, use :material-plus: to show the "+" sign (aka add button)
11. Related and relevant topics (ex: Control Panel > Carrier > Special Considerations)

## Organizing information

### Lists
Unordered lists (bulleted) are typically used for feature descriptions, and general information. This can be done using + (plus) or \* (asterisk), but since asterisks are also used for emphasis, I have tried to use + for unordered lists. 

Ordered lists (numbered) are typically used when describing a sequence. I use "1." rather than "1)". Markdown is also good at seeing an ordered list and putting it in order regardless of what you have put for numbers. So if you build a list where every item begins with "1.", it will increment each to create a numbered list. Great when you need to update text, not great if you ever need to do something off-the-cuff. 

### Admonitions (Errors, Alerts, Tips, etc)
This is a great way to break up the wall-of-text phenomenon. Use the admonition title feature to help the customer understand what they are reading. Ex: !!! info "Changing UI Language"

### Tables
Another great way to avoid wall-of-text. I've used this basic table config from the markdown guide (https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#tables) with success. Tables are typically used to explain detailed information about several different fields or options. Ex: listing all Stats graphs and what they represent or looking at Rate Card examples. 

## Visual Formatting 

### Image Guidelines

+ Use Reference-style for consistent documentation (and to set apart from URLs which use in-line links): 

    \![alt text][logo]

    \[logo]: main/images/icon48.png "Logo Title Text 2"
    
+ Most Images should be indented 4 spaces (some exceptions are when it begins a section, or a small image is inserted into text). This is accomplished in two ways:
    + If the image appears in or just after a list, enter 4 spaces prior to the "alt text" tag
    + For images that are not in/after a list, add "\&emsp;" before the "alt text" tag
+ For images that appear too big, you can resize the file on your computer and then upload to replace the existing file (I use Paint for lack of something better, but it works!)
+ All images have a "connexblue" border, 5px in Paint (apply this after resizing for consistency, or it will resize the border as well, which makes the image look different from the others). See Color Palette below for RGB and hex. 

### Typography
All text is the same default font. 

Emphasis- There is some standard usage for text formatting. 

+ **Bold**- use this when referring to the configuration section you are in (ex: **Rate Cards** or **Alerts**)
+ *Italic*- Typically used to denote features that are in development, though honestly, I haven't used this much.  

### URLs/Links
External links- use Inline Link Style AND Bold link text in brackets to make the link stand out: [**I'm an inline-style link**](https://www.google.com)

Internal links- Use the same, but I have been working on converting to folder rather that full link. Ex: instead of [Changing Language](https://docs.connexcs.com/changing-language/) we can use [Changing Language](changing-language/)

### Code format
+ When entering code (such as Javascript or Python) = ``` ``` (bookend with triple back-ticks). Ex:
    
    ``` js linenums="1"
    function main (data = {}) {
	        // data contains object containing key/value pairs from the form. 
    }
    ```

+ "Click on" commands buttons (+, Save, Open, Verify, etc) use bookend with back-ticks and bold: **`Save`**
+ "Select option" action buttons/options (select from a pop-up, enable/disable) use back-ticks: `xxx`


### Color Palette
ConnexCS Docs banner color ("connexblue")
+ Rgb: 64, 81, 181
+ Hex: #4051b5


## Data visualization
### Process Flows and Diagrams
We use Mermaid for process flows and diagrams. Use [Mermaid Live Editor](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcbiAgICBBW0NocmlzdG1hc10gLS0-fEdldCBtb25leXwgQihHbyBzaG9wcGluZylcbiAgICBCIC0tPiBDe0xldCBtZSB0aGlua31cbiAgICBDIC0tPnxPbmV8IERbTGFwdG9wXVxuICAgIEMgLS0-fFR3b3wgRVtpUGhvbmVdXG4gICAgQyAtLT58VGhyZWV8IEZbZmE6ZmEtY2FyIENhcl0iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ) and [Mermaid for GitHub](https://mermaid-js.github.io/mermaid/#/) for help 

+ Use "\`\`\`mermaid" to start the flow, then  "\`\`\`" to end it. 
+ Nodes style uses the following, unless other colors are needed (reds and greens for accenting): style A fill:#ECEFF1,stroke:#4051b5,stroke-width:2px 

*Note- sometimes the diagram will just stop rendering, and the code is displayed. Refreshing usually resolves this. At some point, we might want to convert the diagrams to static images if no other fix is available. 
