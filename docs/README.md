# connexcs-user-docs
Connex Carrier Services User Documentation

## UI Style Guide

### Visual Style/Layout

Order of Sections:
1. Control Panel Functions (ex: Checklist/Alerts, Personal Profile)- list as bolded term immediately followed by plaintext (ex: **Checklist** Used to respond to requirments.)
3. Section (ex: Customers, Carriers) Functions (ex: Bulk Upload, Add, Delete, Search)- list as bolded term immediately followed by plaintext (ex: **Checklist** Used to respond to requirments.)
4. Overview- this is the Table Columns and Functions
2. View Modification if applicable (ex: Columns and Filters)- bullet list
5. Sub-sections (ex: Provider Rate Cards, Customer Rate Cards, Routing, Global Search)
7. Create New
6. Configure Details
    + If tabbed at the top, use the tabbed function (ex: === "Basic"); each field is bullet and bold, then ":", description is plaintext (ex: **Field**: Description)
    + If tabbed on the left, use subheaders (for large sections, these may be separate docs, ex: Customers, Carriers), each field is bullet and bold, then ":", description is plaintext (ex: **Field**: Description)
7. Related and relevant topics (ex:

#### Left-Hand Navigation
+ Section navigation matches the order found in ConnexCS Control Panel

#### Right-Hand Navigation
+ Sub-Sections match Control Panel Navigation when applicable
+ Related Topics

#### Admonitions

### Logo and Image Guidelines

+ Use Reference-style: 

    ![alt text][logo]

    [logo]: main/images/icon48.png "Logo Title Text 2"
    
+ Most Images should be indented 4 spaces (some exceptions are when it begins a section, or a small image is inserted into text). This is accomplished in two ways:
    + If the image appears in or just after a list, enter 4 spaces prior to the "alt text" tag
    + For images that are not in/after a list, add "&emsp;" before the "alt text" tag
+ For images that appear too big, you can resize the file on your computer and then upload to replace the existing file (I use Paint for lack of something better, but it works!)
+ All images have a "connexblue" border, 5px in Paint (apply this after resizing for consistency, or it will resize the border as well, which makes the image look different from the others)

### Typography
- font
- how to use text formatting

#### URLs/Liks
Inline Link Style AND Bold link text in brackets to make the link stand out: [**I'm an inline-style link**](https://www.google.com)

#### Code format
+ When entering code (such as Javascript or Python) = ``` ``` (bookend with triple back-ticks). Ex:
    
    ``` js
    function main (data = {}) {
	        // data contains object containing key/value pairs from the form. 
    }
    ```

+ "Click on" commands buttons (+, Save, Open, Verify, etc) use bookend with back-ticks and bold: **`Save`**
+ "Select option" action buttons/options (select from a pop-up, enable/disable) use back-ticks: `xxx`


### UI Elements
Many commonly-used elements, such as buttons, icons, navigation, forms, notifications, etc. should be defined with their properties and rules to help create product consistency.

Describing Navigation or location of a document or an area of the Control panel: entire path is **bold** and each step is separated by \:material-menu-right\:
+ Ex: **Management :material-menu-right: Customer :material-menu-right: DID**

### Color Pallette
ConnexCS Docs banner color ("connexblue")
+ Rgb: 64, 81, 181
+ Hex: #4051b5


### Data visuzation

### Adminitions (Errors, Alerts, Tips, etc)

