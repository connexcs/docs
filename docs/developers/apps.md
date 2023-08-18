# App

**Developer :material-menu-right: App**

!!! danger "Alpha Version"
    Please note that the App feature is still in progress and in the **Alpha Stage**. It's not intended for Production use.

The **App** feature is like an umbrella, which holds the features like **ScriptForge, Templates, Vars, Pages, and Button Builder**.

## Step to create an App

1. Navigate to **Developer :material-menu-right: App**.
2. Click on the blue `+` button.
3. Enter the **Name** of your application.
4. Click on `Save`.
5. The created application will be visible on the App interface, then you have the option to **Publish** it and provide a **Version** to it as well. The **Domain** field will display where the App gets published.

<img src= "/developers/img/app.png">

!!! Example
    For instance, you create a **Phone Number Verification** app.
    You use the ScriptForge, Pages and Button Builder for creating the Preview Dialer.

6. The **App** gets published to the **Repo** which means the App is now **Public** and the App is ready for deployment to your system.

<img src= "/developers/img/app1.png">

7. When you click on **Deploy**, enter the name of the App You can deploy multiple versions of a single App.

<img src= "/developers/img/app2.png">


!!! warning
    If you intend to remove an App, you must also remove all the data associated with it, including that found in Buttons, ScriptForge, Variables, Pages, and Templates.

## Vars

Your variables can be placed inside the env.

You can separate your code (logic) from your config.

The variables you create here will be accessible to the ScriptForge, Templates, Pages and the Button Builder.

### Steps for configuring the Variables

1. Login to your account.
2. Navigate to **Developer :material-menu-right: Var**.
3. Click on the blue `+` button.
4. Select the **App** you wish to use the variables for.
5. Enter the values for **Key** and **Value** fields.
6. You can restrict access to your variables by utilizing the **Flags** option.
    + **Protected**: This flag is only relevant for the **App** feature and not the **Repo** or **ScriptForge** feature. The UI will nor be able to read the variable back. In simple terms, the user won't be able to read the value of the variable, it will return the entered value as ****.
    + **Private**: Private is only relevant for the **App**. Variable only made available to the **ScriptForge**, and not visible to either **Pages** or **Templates**.
    + **Locked**: Locked flag is relevant to both **App** and **Repo**. Here, the variable isn't published to Repo and can't be overwritten by any other variable from the Repo. The variable is locked into the App and can't leave it. Suppose, you update your application the repo won't able to extract the updated variable.
    + **Default**: This is only relevant to **Repo**. Suppose, your App colour is gray by default and a customer changes the color to red after deploying the App. Now the default color of the App will be red when deployed by another customer when Default flag is selected. Thus, upgrading this variable won't override any previously stored value.

<img src= "/developers/img/app3.png">

!!! Info
    1. If you wish to keep the variable value a **Secret** like password etc., then you should use the **Protected**, **Private** and **Locked** flags.
    2. If your value is a **Stripe Public Key**, it should be **Protected** and **Locked**.
    3. Set a **Default** flag for an App **Standard Colour**.
