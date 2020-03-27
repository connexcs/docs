# Pinless Calling Cards

A pinless calling card system allows dial in through a DID, for the user to be verified based on their CLI (hence no need to enter a PIN),
presented with an IVR asking them what number they wish to dial, then once entered the call will be routed out through their account.

This is not a native feature of ConnexCS, but with 3 simple steps it you can add this functionality to your account.

Here are the steps:

1. Create a new ScriptForge App and use the following code: https://github.com/connexcs/scriptforge-examples/blob/master/account-jump.js
  This script will look at the CLI of the incoming call and associate it with any accounts which have this CLI whitelisted.
2. Create a Class 5 App in the system call and set the destination as `calling_card`.
3. Drag IVR to the first slot: Set the File to IVR / ivr-please enter the phone number, Min: 11, Max 14, Result Variable: `ivr_destination`
4. Drag Destination to the second slot, set it to external and enter the following: `${ivr_destination}`
5. Create a DID in the system and set the ScriptForge to the App you have just made, then set the destination to `calling_card`
6. In your customer make sure that the CLI they will be dialing out from is whitelisted in their account.
7. Your customer should be able to dial in, enter their number and the call to be sent out.

!!! note
    If you needs your customer to be unrestricted for non-calling card dialling, you can still add `^.*` as a CLI option.
