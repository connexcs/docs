# Templates

<details>
<summary><strong>Document Metadata</strong></summary>
<br>

<strong>Category</strong>: Setup Guide / Configuration Management<br>
<strong>Audience</strong>: ConnexCS Administrators, System Administrators, Technical Support Engineers<br>
<strong>Difficulty</strong>: Beginner to Intermediate<br>
<strong>Time Required</strong>: Approximately 5–10 minutes<br>
<strong>Prerequisites</strong>: Access to the ConnexCS control panel and permission to access Setup > Config > Templates.<br>
<strong>Related Topics</strong>: Setup, Config, App Store, Audit Logs<br>
<strong>Next Steps</strong>: Create a custom template, associate it with the relevant application, configure the required message content, and review audit logs to track changes.

</details>

## Overview

The **Templates** feature in ConnexCS allows users to create and manage reusable message templates for different purposes, such as notifications, emails, and SMS messages.

Templates can include HTML content, a subject line, plain-text content, SMS content, and scripts, depending on the intended use.

Templates help standardize communication by allowing applications and platform features to reuse predefined content instead of requiring users to create messages from scratch.

The Templates page displays existing templates and provides options to create new templates, view their details, edit them, refresh the list, delete eligible templates, and review audit logs.

## Key Features

- **Reusable templates**: Store predefined message content for use by supported applications and platform features.
- **Multiple content formats**: Configure HTML, subject, text, SMS, and script fields, as required.
- **Application association**: Associate a template with a supported application using the App field.
- **Template management**: Create, view, edit, and delete eligible templates.
- **System-generated templates**: Identify system templates using the `System` label. When available, clone a system-generated template to create a separate copy for customization.
- **Audit logging**: Review recorded template creation and update operations, including the differences between recorded versions.

## Benefits

- **Consistent communication**: Use standardized message content across supported workflows.
- **Reduced configuration effort**: Reuse existing content instead of recreating messages.
- **Application-specific configuration**: Associate templates with the relevant application where supported.
- **Change visibility**: Use audit logs to review recorded changes and compare template versions.
- **Safer customization**: Clone a system-generated template when a separate customizable copy is needed, rather than modifying the original.

## How to Use?

### Step 1 — Navigate to Templates

1. Log in to the ConnexCS control panel.
2. Navigate to **Setup :material-menu-right: Config :material-menu-right: Templates**.
3. The **Templates** page displays the available templates in a table. <br><img src="/setup/img/template2.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

The table includes the following columns:

| Field | Description |
| ------|------------ |
| **Name** | Displays the template name. Click the name to open the template and view its details. Templates marked with the `System` label are system-generated templates |
| **App** | Displays the application associated with the template, if one is configured|
| **HTML**    | Displays a preview of the HTML content stored in the template|
| **Subject** | Displays the subject line configured for the template|
| **Text**    | Displays the plain-text content configured for the template|
| **Sms**     | Displays the SMS message content configured for the template|
| **Script**  | Displays the script content associated with the template, if configured|

The page also provides the following controls:

- **Add (+)**: Opens the form for creating a new template.
- **Refresh**: Reloads the template list.
- **Delete**: Deletes selected templates when the operation is permitted.
- **Help (?)**: Opens the available help information.
- **Search**: Searches for templates in the list.
- **Columns**: Opens the column configuration options.
- **Filters**: Opens the filtering options for the table.
- **Custom Settings**: Opens the available table customization settings.

### Step 2 — Create a new template

1. Navigate to **Setup :material-menu-right: Config :material-menu-right: Templates**.
2. Click the **+ (Add)** button in the upper-right corner of the page. <br><img src="/setup/img/template2.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
3. The template creation form opens. Enter the required information in the available fields.<br><img src="/setup/img/template3.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

#### Configuration fields

| Field | Description  |
| ------|------------- | 
| **Name**    | Enter a unique, descriptive name for the template, such as `demo` or `payment_notification`|
| **Subject** | Enter the subject line for the message. This field is marked as required in the form|
| **App**     | Select the application associated with the template from the dropdown list, where applicable. For example, the screenshot shows `Anvil-Login`|
| **SMS**     | Enter the message content intended for SMS delivery. The displayed counter indicates the current character count|
| **HTML**    | Enter the HTML-formatted content for messages that support HTML. Use valid HTML markup where required|

The template form also supports **Text** and **Script** fields, as shown in the template list. Their availability and use depend on the template configuration and the supported workflow.

> **Note**: Configure only the content fields required by the intended use case. The fields used and the formats supported depend on the application or workflow that consumes the template.

1. Review the entered information and confirm that the template name and subject are correct.
2. Click **Save** to create the template.
3. Return to the Templates list and verify that the new template appears.

### Step 3 — View a template

1. Navigate to **Setup :material-menu-right: Config :material-menu-right: Templates**.
2. Locate the template you want to inspect.
3. Click the template name.<br><img src="/setup/img/template4.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
4. The template details page displays the configured information.

The details page can display the following information:

- **Subject**: The configured subject line.
- **App**: The associated application, if configured.
- **SMS**: The configured SMS message.
- **HTML**: The configured HTML content.
- Other available template fields, depending on the template configuration.

The details page also provides navigation and management controls.

- **Back**: Returns to the Templates list.
- **Edit**: Opens the template in edit mode.
- **View Audit Log**: Opens the audit log for the template.

### Step 4 — Edit a template

1. Open the template you want to modify.
2. Click **Edit**.
3. Update the required fields, such as the subject, application, SMS content, or HTML content.
4. Review the changes.
5. Click **Save** to apply the updates.
6. Reopen the template to verify that the changes have been saved. <br><img src="/setup/img/template5.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

> **Note:** Before editing a template used by an application or an automated workflow, verify that the changes won't affect the expected message format or behavior.

### Step 5 — View the audit log

The audit log records template operations, allowing users to review when a template was created or updated and which user performed the action.

1. Navigate to **Setup :material-menu-right: Config :material-menu-right: Templates**.
2. Open the template whose history you want to review.
3. Click **View Audit Log** in the upper-right corner of the template details page. <br><img src="/setup/img/template6.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
4. The **Audit Log** window opens and displays the recorded operations for that template. <br><img src="/setup/img/template7.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

#### Audit log fields

| Field  | Description |
| -------|------------ | 
| **User** | Displays the user associated with the recorded operation|
| **IP** | Displays the IP address recorded for the operation, when available|
| **Date Time** | Displays the date and time when the operation was recorded|
| **Action** | Identifies the operation. For example, `POST` indicates a creation operation and `PUT` indicates an update operation in the displayed audit log |
| **Table** | Identifies the database table associated with the operation. For templates, the displayed value is `template`|
| **Message**   | Provides a description of the operation, such as `New template` or `Update template`|
| **Data** | Provides the **View Difference** option for inspecting the recorded data changes|

The audit log also provides a refresh control and a search field to help locate recorded entries. <br><img src="/setup/img/template8.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

#### Compare template changes

1. Open the template's **Audit Log**.
2. Locate the operation you want to inspect.
3. Click **View Difference** in the Data column.
4. The **View Data Difference** window displays the recorded field values for the old and new versions.

#### View Data Difference fields

| Field    | Description |
| -------- | ----------- |
| **Name** | Identifies the field whose value is being compared. Examples include `name`, `subject`, `html`, and `sms`|
| **Old**  | Displays the value recorded for the earlier version|
| **New**  | Displays the value recorded for the newer version|

Rows highlighted in red indicate differences between the two recorded versions.

A dash (`-`) indicates that no value was recorded for that version. It does not necessarily mean that the value was removed.

Use this view to identify changes to template fields and help investigate unexpected configuration changes.

### Step 6 — Clone a system-generated template (*Optional*)

System-generated templates are identified by the `System` label in the Templates list.

If a system-generated template needs to be customized, use the **clone option**, where available, to create a separate copy. This allows you to customize the copied template without directly modifying the original system-generated template.

1. Navigate to **Setup :material-menu-right: Config :material-menu-right: Templates**.
2. Locate the system-generated template you want to reuse. Look for the `System` label next to its name.
3. Open the template and check the available actions or options for cloning it.
4. Select the clone option, if available.
5. Enter an appropriate name for the copied template and modify the fields as required.
6. Save the copied template.
7. Return to the Templates list and verify that the new template appears separately from the original.

> **Note:** The exact location and availability of the clone action may depend on the interface and the permissions assigned to your account. A system-generated template shouldn't be assumed to be directly editable.

## Best Practices

- Use descriptive template names so that administrators can identify their purpose easily.
- Associate templates with the correct application when required.
- Validate HTML content before using it in production workflows.
- Keep SMS messages concise and verify the displayed character count.
- Clone system-generated templates when you need a separate version for customization and the clone action is available.
- Review the audit log after making important changes.
- Test customized templates in the relevant workflow before relying on them in production.
- Avoid including passwords, access tokens, or other sensitive information directly in template content.

## Troubleshooting

| Issue  | Recommended action |
|---------|-------------------|
| The template isn't visible in the list| Refresh the list, clear or adjust filters, and use the search field to locate the template |
| The template can't be edited| Check whether it's system-generated and whether your account has the required permissions. Clone it if the option is available and customization is required|
| The template is associated with the wrong application. | Open the template in edit mode and verify the App field, if it's editable|
| HTML content isn't displayed as expected| Review the HTML markup and validate the content in the application or workflow that uses the template|
| An unexpected template change is detected| Open the audit log and use View Difference to compare the recorded versions|
| The clone option is unavailable| Verify the available actions for the template and check your account permissions|
