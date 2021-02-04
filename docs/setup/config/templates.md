# Templates
**Setup :material-menu-right: Config :material-menu-right: Templates**

Create your own **Templates** to customise the content displayed on outbound emails/SMS, the Customer Portal, and WebPhone. ConnexCS **Templates** use the mustash-compatible template language [**Handlebars**](https://handlebarsjs.com/guide/).

!!! note "Template Syntax"
    It is important to follow the template syntax, fields such as `{email}` or `{account_name}` need to be entered exactly otherwise they won't be replaced correctly when the template is rendered. 

## Add Template

1. Click the blue **`+`**. 
2. **Name** the template.
3. **Subject** for the communication (supports variables).
4. **SMS** field does not cause the SMS to be sent, but it is available for use when other parts of the system have SMS set. 
5. Use **Text** or **HTML** for the content of the communication. 

    ![alt text][addtemp]
    
*The templating system will replace placeholders with the variable when it is rendered.

## Stock Templates
ConnexCS provides standard templates which you are free to customise as you wish. To customise any template, click on the template name, modify as needed, and click save. To revert the template to its original configuration, check the box next to the Name and select the **`Reset`** button. 

## ScriptForge Integration  
Dynamic Templates with custom variables are made by including ScriptForge (further details [**here**](https://docs.connexcs.com/developers/scriptforge/). This is done by using the `scriptforge` tag. Ex: To include a ScriptForge script with ID 1234, use `{{scriptforge 1234}}`. 

This will pass ALL of the variables in the current scope to ScriptForge. Whatever ScriptForge returns will then be made available back in the main scope for use with the template system.
  
### Sample RSS Feed Injection into a template

This example can be used to provide a custom page in the [**WebPhone**](https://docs.connexcs.com/setup/integrations/webphone/)

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
