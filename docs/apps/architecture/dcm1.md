# Document Component Model (DCM)

## Introduction

**DCM** is a templating or placeholder syntax used in ConnexCS Page Builder.

These are special placeholders (prefixed with `$`) that get replaced with real user or account data when a page is rendered.

They allow you to personalize content dynamically.

Each component in the Page Builder has their own modules.

!!! Example "Example"
    ```js
    this.$('button1').setLabel('hello')
    ```

## DCM for Page Builder Components

### getID ()

1. **Description**: Returns the ID of the current UI component.
2. **Syntax**: `this.$('componentID').getId();`
3. Components that support this method:
      + Alert
      + Button
      + Card
      + Cascader
      + Checkbox
      + Collapse
      + Color
      + Data Grid
      + Date
      + Divider
      + Editor
      + Grid
      + Group
      + HTML
      + IFrame
      + Inline
      + Input
      + Link
      + Number
      + Page Layout
      + Pagenation
      + Radio
      + Rate
      + Select
      + Slider
      + Statistic
      + Steps
      + Switch
      + Table
      + Tabs
      + Textarea
      + Text
      + Time
      + Transfer
      + Treeselect
      + Webphone

!!! Example "How to use?"
    1. Login to your account.
    2. Navigate to IDE :material-menu-right: Page Builder.
    3. Drag and drop the required component (using `Button` here).
    4. Click on Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: + Add Action.
    5. Edit the `Function Name`.
    6. Write the code for `getId()` method. `console.log(this.$('button1').getId());`. Click `Save`. <img src= "/apps/img/getid.png" style="border: 2px solid #4472C4; border-radius: 8px;">
    7. Click on Component Attribute: Action Settings (onClick): Select the created function (getId in this example).
    8. Click on `Preview`. Open the console window (`F12`).
    9. Click on the `Button` to view its ID. <img src= "/apps/img/getid1.png" style="border: 2px solid #4472C4; border-radius: 8px;">
