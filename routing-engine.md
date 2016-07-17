<h2>Routing Engine</h2>

When a call first lands on the system it hits the routing engine. The routing engine follows the process:

1. Authentication
2. Ingress Routing
3. Egress Routing

If your SIP Trace shows that an INVITE packet was received by the switch but not sent out to any providers, the fail will be in the ingress routing.

<table><thead><tr><th>SIP Code</th>
<th>SIP Reason</th>
<th>Details</th>
</tr></thead><tbody><tr><td>403</td>
<td>IP Not Authorised</td>
<td>The IP Address does not match any account in the system.</td>
</tr><tr><td>500</td>
<td>Unidentified Internal Switch</td>
<td>This is an internal error, you should never see this. If you do please contact us.</td>
</tr><tr><td>500</td>
<td>Server not accepting calls (Paused)</td>
<td>Your account with ConnexCS has been disabled or your server has been disabled.</td>
</tr><tr><td>503</td>
<td>Unknown User</td>
<td>Username &amp; Passwords do not match to any known user account.</td>
</tr><tr><td>503</td>
<td>Unable to perform LRN</td>
<td>You have selected LRN dipping for this route, however it is likely that you don't have credit with us.</td>
</tr><tr><td>503</td>
<td>LCR Unavailable</td>
<td>The system is unable to perform a LCR lookup.</td>
</tr><tr><td>503</td>
<td>Blocked by Dialplan</td>
<td>The prefix/number is not matched by the allowed dial plan.</td>
</tr><tr><td>503</td>
<td>Blocked by Dialplan</td>
<td>The prefix/number is not matched by the allowed dial plan.</td>
</tr><tr><td>503</td>
<td>No Routes Available (Pre)</td>
<td>There is no rate card rule to allow the call to progress.</td>
</tr><tr><td>503</td>
<td>No Routes Available (U)</td>
<td>No routes are available either due to: Lock, Profit Assurance, Routing Strategy or ScriptForge.</td>
</tr><tr><td>503</td>
<td>No Routes Available (Lock)</td>
<td>Locking your Ingress routing has left no routing options.</td>
</tr><tr><td>503</td>
<td>No Routes Available (Profit Assurance)</td>
<td>Profit Assurance has left no routing options.</td>
</tr><tr><td>503</td>
<td>Dropping Call (Strategy)</td>
<td>Strategic Routing has dropped the call.</td>
</tr><tr><td>503</td>
<td>Internal Strategic Routing Error</td>
<td>There is an error with the config of Strategic Routing.</td>
</tr><tr><td>580</td>
<td>No Route Available</td>
<td>The number dialled does not match any ingress routing profile.</td>
</tr><tr><td>580</td>
<td>Switch IP Variable Not Provided</td>
<td>This is an internal error, you should never see this. If you do please contact us.</td>
</tr><tr><td>580</td>
<td>To (oU) User Missing</td>
<td>This is an internal error, you should never see this. If you do please contact us.</td>
</tr><tr><td>580</td>
<td>To (fU) User Missing</td>
<td>This is an internal error, you should never see this. If you do please contact us.</td>
</tr></tbody></table>
 
<b>Note:</b> When making changes, although we try to synchronise all endpoints as fast as possible, this is a distributed system it can take up to 60 seconds for any changes to take affect.
