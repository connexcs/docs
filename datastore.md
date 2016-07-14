<h2>Datastore</h2>

The Datastore class gives access to a high speed persistent key value store.

Data is stored on a redundant cluster and is immediately consistent in server zones, eventually consistent between zones (typical lag between zones is about 2 seconds)

Although it is possible to allow application script to have variables that are persistent between requests this should not be used. Application processes are ephemeral and will be terminated when there is no workload. Your application may also run on multiple servers so only variable space in the datastore will be shared between instances.
get
PHP

Connex_Datastore::get (string key) returns variant

Javascript

connex.datastore.get (string key) returns variant

set
PHP

Connex_Datastore::set (string key, variant value, integer timeout=3600) returns bool

Javascript

connex.datastore.set (string key, variant value, integer timeout=3600) returns bool
