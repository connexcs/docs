# Templates
Setup :material-menu-right: Config :material-menu-right: Templates

Create your own **Templates** to customise the content displayed on outbound emails/SMS, the Customer Portal, and WebPhone.
ConnexCS Templates use a mustash-compatible template language [Handlebars](https://handlebarsjs.com/guide/).

## Stock Templates

As default ConnexCS provides standard templates which you are free to customise as you wish.
To customise a template click on the template name, modify it as you see fit and click save.

!!! note
    It is important to respect the template syntax, fields such as `{email}` or `{account_name}` need to be left as this otherwise that wont be replace correct when the template is rendered

## Settings
Create a new Template by selecting the blue **`+`** or edit an existing Template by clicking on the template name. 

The templating system will replace placeholders with the variable when it gets rendered.

!!! note "SMS field"
    Entering text into the SMS field does not cause the SMS to be sent, but it is available for use when other parts of the system have SMS set. 
 
![alt text][addtemp]

## ScriptForge Integration  
Dynamic Templates are made by including ScriptForge. This is done by using the `scriptforge` tag. Ex: To include a ScriptForge script with ID 1234, use `{{scriptforge 1234}}`. 

This will pass ALL of the variables in the current scope to ScriptForge. Whatever ScriptForge returns will then be made available back in the main scope for use with the template system.

  
### Sample RSS Feed Injection into a template

This example can be used to provide a custom page in the [WebPhone](/webphone/webphone)

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
