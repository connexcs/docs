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
2. **Syntax**: `this.$('componentID').getID();`
3. Components which can use this method:
   1. Alert
   2. Button
   3. Card
   4. Cascader
   5. Checkbox
   6. Collapse
   7. Color
   8. Data Grid
   9. Date
   10. Divider
   11. Editor
   12. Grid
   13. Group
   14. HTML
   15. IFrame
   16. Inline
   17. Input
   18. Link
   19. Number
   20. Page Layout
   21. Pagenation
   22. Radio
   23. Rate
   24. Select
   25. Slider
   26. Statistic
   27. Steps
   28. Switch
   29. Table
   30. Tabs
   31. Textarea
   32. Text
   33. Time
   34. Transfer
   35. Treeselect
   36. Webphone

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