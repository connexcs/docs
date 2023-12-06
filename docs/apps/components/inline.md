# Inline

## Description

The inline layout approach allows for a more compact and organized form layout, making it easier for users to navigate and interact with the form elements.

<img src= "/apps/components/img/inline.png">

## Use Case

1. Improved Form Organization
2. Enhanced User Experience:
3. Compact Form Design
4. Visual Consistency
5. Responsive Form Layout
6. Form Legibility
7. Limited Spacing
8. Accessibility Considerations

## API

### Methods

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
|**this.addClassName(fields, disabled)**|Add style class to form item|
|**this.removeClassName(fields, disabled)**|Remove form item style|
//| **this.disable(fields)**| Disable input field from user interaction|
//| **this.enable(fields)**| Disable input field from user interaction|
|**this.hide(fields)**|Hides the field|
|**this.show(fields)**|Displays the field|

## Config

| **Name**|**Description**|**Icon**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved|<img src= "/apps/components/img/input_id.png">|
|**Space Size**| Adjust the size between the components[**Optional**] |<img src= "/apps/components/img/inline_spacesize.png">|
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Hidden** action to hide the field|<img src= "/apps/components/img/alert_arrtibuteaction.png">|