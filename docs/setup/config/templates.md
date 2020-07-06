# Templates

Create customized **Templates** which customise content displayed on outbound emails/SMS, the Customer Portal, and WebPhone. ConnexCS Templates use a mustash-compatible template language [Handlebars](https://handlebarsjs.com/guide/)

## Settings 

Templates are managed under **Setup** > **Config** > **Templates**. Create a new Template by selecting the blue **`+`** or edit an existing Template by clicking on the template name. 

In the Subject, SMS, Text and HTML fields:

* Write your brand name in the place of **[brandName]**.
*	Provide the area that coincides with the alert in **[area]**
*	Give value in **[value]**. 
* Apply style to your text via HTML style panel under the HTMLtag.
*	Click **`Save`** .
 
![alt text][addtemp]

## ScriptForge Integration  

Dynamic Templates are made by including ScriptForge. This is done by using the `scriptforge` tag. Ex: To include a ScriptForge script with ID 1234, use `{{scriptforge 1234}}`. 

This will pass ALL of the variables in the current scope to ScriptForge. Whatever ScriptForge returns will then be made available back in the main scope for use with the template system.

  
### Sample RSS Feed Injection into a template

**ScriptForge**

```javascript
const rssParser = require('rss-parser');
const parser = new rssParser();
function main (vars) {
	return parser.parseURL('http://feeds.bbci.co.uk/news/rss.xml');
}
```

**Template**

```xml
<h1>Here is the news</h1>

{{scriptforge 1234}}
<h1>News</h1>
{{#each items}}
<h2>{{title}}</h2>
{{/each}}
```

 
[addtemp]: /misc/img/addtemplate.png "Add Temp"
