# Table of Contents

* [Table of Contents](#table-of-contents)
* [CPS Buffering](#cps-buffering)



# CPS Buffering

CPS Buffering is a process to maximise saturation and increase call completion within a given CPS restriction. It does this by removing spikes and borrow capacity from future seconds.

If the incoming traffic exceeds your pre-set CPS, it holds the call for 1 second then tries again. It does this for as many seconds as you set in the CPS Spike Buffer field.

Changing this value only affects calls which exceed the CPS, no other calls will be affected. This delay will show as increased PDD on the call, each second the system will emit a 100 Trying (High CPS, Buffering) response to indicate the status/progress of the call.
