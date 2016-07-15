<h2>PHP ScriptForge</h2>

The PHP allows your own custom code to be run from within the ConnexCS platform.

<h4>Usage</h4>

The PHP ScriptForge, eventually, will allow extended functionality throughout the system, but for the alpha version this will be available in the ScriptForge editor to check the ability of your code to be executed and soon in the routing.

<h4>Security Lock-down</h4>

Due to the nature of executing arbitrary code on cloud platform certain security limitations have to be put in place. This means that you won't achieve full functionality of PHP. Our security methodology is complete lockdown then opens up as required.

You can look at a list of available functions with the following command.

<b>return get_defined_functions();</b>

<b>file_get_contents($url)</b>

This function has been limited and can only be used for http*

We have added some of the most commonly used functions, however if you find a function which is blocked which you require, please let us know and we will look at enabling it.

<h4>ConnexCS Platform Functions</h4>

&#x25cf; lookup

Array lookup(Mixed $number, Mixed $lookup_type)

&#x25cf; $number

Presented in e164 format (International format with no leading + or 00). Can be passed directly as a string, or an array of strings.

&#x25cf; $lookup_type

String or array of strings, can be either: * asrplus * hlr * lrn * range * ping * tps

&#x25cf; ds_get

<h4>Mixed ds_get(Mixed $key)</h4>

&#x25cf; == $key ==

String or Array of Strings from which to access key information .

&#x25cf; === ds_set ===

Mixed ds_set(Mixed $key, Mixed $value, $timeout=3600)

&#x25cf; == $key ==

String or Array of Strings from which to access key information.

&#x25cf; == $value ==

Mixed value to be stored in the data-store.

&#x25cf; == $timeout ==

Integer seconds for how long the information should be kept, 0 specifies unlimited, defaults to 3600 seconds (1 Hour)
