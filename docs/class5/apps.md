# Apps

**Class 5 :material-menu-right: Apps**

The ConnexCS **Apps** feature allows providers to create small, simple, drag-and-drop applications and [ConneXML applications](https://docs.connexcs.com/class5/connexml/).
Some examples are Echo Tests, Conference, IVR setup.

## Build App

To create a new App:

1. Navigate to **Class 5 :material-menu-right: Apps**.
2. Click on the blue :material-plus: button.
3. Fill in the following details for the application.
    + **Name**: Enter the name of the application.
    + **Customer**: Select the customer from the drop-down list. By default, the app is available to all the customers.
    + **App Type**: Select the type of app you want to create from the drop-down Call Flow or ConneXML.
    + **Destination**: Enter the Extension for the callers to call (essentially, the dial-in number).
    + **PBX Server**: Select the relevant server for your customer.
4. Click **`Save`**.

<img src= "/class5/img/apps1.png" style="border: 2px solid #4472C4; border-radius: 8px;"> 

## Advanced Applications

To configure more complex applications, ConnexCS offers Class5 **[Programmable Voice](https://docs.connexcs.com/developers/scriptforge/#class-5-programmable-voice)** which allows you to build comprehensive applications using JavaScript.

## Class 5 Auto Add DNC for callback on IVR

In a Class 5 setup, you can configure an endpoint to redirect incoming calls to an IVR, where the caller can be added to the Do Not Call (DNC) list automatically.