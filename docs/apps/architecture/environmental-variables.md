## Vars

Your variables can be placed inside the env.

You can separate your code (logic) from your config.

The variables you create here will be accessible to the ScriptForge, Templates, Pages and the Button Builder.

This is available from within page builder via `this.env` and it can be saved by using `this.saveEnvVars(obj)`.

### Steps for configuring the Variables

1. Login to your account.

2. Navigate to **Developer :material-menu-right: Var**.

3. Click on the blue + button.

4. Select the **App** you wish to use the variables for.

5. Enter the values for **Key** and **Value** fields.

6. You can restrict access to your variables by utilizing the **Flags** option.

    + **Protected**: This flag is only relevant for the **App** feature and not the **Repo** or **ScriptForge** feature. The UI will nor be able to read the variable back. In simple terms, the user won't be able to read the value of the variable, it will return the entered value as ****.

    + **Private**: Private is only relevant for the **App**. Variable only made available to the **ScriptForge**, and not visible to either **Pages** or **Templates**.

    + **Locked**: Locked flag is relevant to both **App** and **Repo**. Here, the variable isn't published to Repo and can't be overwritten by any other variable from the Repo. The variable is locked into the App and can't leave it. Suppose, you update your application the repo won't able to extract the updated variable.

    + **Default**: This is only relevant to **Repo**. Suppose, your App colour is gray by default and a customer changes the colour to red after deploying the App. Now the default colour of the App will be red when deployed by another customer when Default flag is selected. Thus, upgrading this variable won't override any previously stored value.

<img src= "/developers/img/app3.png" width= "1000">

!!! Info

    1. If you wish to keep the variable value a **Secret** like password etc., then you should use the **Protected**, **Private** and **Locked** flags.

    2. If your value is a **Stripe Public Key**, it should be **Protected** and **Locked**.

    3. Set a **Default** flag for an App **Standard Colour**.
