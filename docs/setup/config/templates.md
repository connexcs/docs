# Templates
**Setup :material-menu-right: Config :material-menu-right: Templates**

Create your own **Templates** to customise the content displayed on outbound emails/SMS, the Customer Portal, and WebPhone. ConnexCS **Templates** use the mustash-compatible template language [**Handlebars**](https://handlebarsjs.com/guide/).

!!! note "Template Syntax"
    It's important for you to follow the template syntax and enter fields such as `{email}` or `{account_name}` exactly. If not, they won't be replaced correctly when the template is rendered. 

## Add Template
Click the blue :material-plus: to add a new Template. 

+ **Name** the template.
+ **Subject** for the communication (supports variables).
+ **SMS** field doesn't actually send the SMS, but it's usable when other parts of the system have SMS set. 
+ Use **Text** or **HTML** for the content of the communication. 

    ![alt text][addtemp]
 
 Select **`Save`** to complete the configuration. 

!!! tip "Rendering Variables"
    The templating system will replace placeholders with the variable when it is rendered.

## Stock Templates
ConnexCS provides standard templates which you can customise as you wish. To customise any template, click on the template name, modify as needed, and click Save. To revert the template to its original configuration, select the checkbox next to the Name and click **`Reset`**. 

## ScriptForge Integration  
Dynamic Templates with custom variables are made by including ScriptForge (further details [**here**](https://docs.connexcs.com/developers/scriptforge/). This is done by using the `scriptforge` tag. Ex: To include a ScriptForge script with ID 1234, use `{{scriptforge 1234}}`. 

This will pass ALL the variables in the current scope to ScriptForge. Whatever ScriptForge returns is then made available back in the main scope for use with the template system.
  
### Sample RSS Feed Injection into a template

This example can be used to provide a custom page in the [**WebPhone**](https://docs.connexcs.com/webphone/)

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

[addtemp]: /setup/img/addtemplate.png "Add Temp"
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTE1NTIyMjMwM119
-->