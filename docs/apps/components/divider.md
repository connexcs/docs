# Divider

## Description

A divider in a form builder is a visual element that separates different sections of a form.

It can be used to improve the readability and usability of forms by making it easier for users to scan the form and identify where different sections begin and end.

<img src= "/apps/components/img/divider.png">

## Use Case

1. To group related form fields.
2. To separate different sections of a form.
3. To create columns in a form.
4. To create sub-headers in a form.

## API

### Methods

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
|**this.hide(fields)**|Hides the field|
|**this.show(fields)**|Displays the field|

## Config

| **Name**|**Description**|**Image**
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|--|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved |<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The visual identifier label of the field|<img src= "/apps/components/img/checkbox_name.png">|
|**Content Position**|Specifies how the divider is positioned relative to the form content, like **Left**, **Center** or **Right**|<img src= "/apps/components/img/divider_contentposition.png">|
|**Attribute Action**|Enable **Hidden** action to hide the field|<img src= "/apps/components/img/alert_arrtibuteaction.png">|
