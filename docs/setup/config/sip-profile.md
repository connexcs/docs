# SIP Profile

**Setup :material-menu-right: Config :material-menu-right: SIP Profile**

## Introduction

In simple terms, you can think of SIP Profile as a way to group a lot of users together. These users will have common features and services to use when they log in with the SIP Profile.

For example, there is a call center with 100 agents and an operator too. The operator might need some extra features than the agents. The feature might include listening to the calls or dialling certain numbers with the agents who aren't allowed to. Thus, the operator might want to have a different SIP Profile.

When someone logs into the [Web Phone](https://docs.connexcs.com/webphone/), they log in through their **SIP Profile**. They log in with the **SIP User Authentication**.

## Steps to setup the SIP Profile

1. Go to **Setup :material-menu-right: Config :material-menu-right: SIP Profile** and you will see a screen as shown below. Then click the **blue `+` button**.<img src="/setup/img/sippro.png">

2. A window will appear after you click on the `+` button. It will let you create a new SIP Profile. Fill in the following details.

      + **Name**: This is a required field that will display your SIP Profile's name.
      + **Profile Capacity**: This field enables you to add the number of people who can use this profile to access the features.
      + **Flags**: This field allows you to select one or multiple features that the user can access.![sip3](/setup/img/sip3.jpg)
      + **Barge Group**: This feature allows you to add a group to a user. The user can then listen to conversations within the specified group using the Barge functionality in [ConneXML-Barge Groups](https://docs.connexcs.com/class5/connexml/#dial).

!!! Note
    The values entered should be plain text, **^[a-z_0-9]+$ only**.

3.Click on `Save` to create a new profile.

<img src="/setup/img/barge1.png" width="450">
