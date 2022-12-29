# Debugging Basics

Debugging (identifying call problems) is an essential skill for maintaining a Voice Platform. A single character or a 10ms delay in the wrong place could cause issues in VoIP / SIP communication because it has several components and a wide range of possible configurations.

*(**VoIP:** Voice over Internet Protocol; **SIP:** Session Initiation Protocol)

## Debugging Steps

1. **Isolate:** The first step in debugging a problem is to isolate it. This means that if a customer reports about calls not connecting, an example is necessary of where it occurs.
   * If [**Reporting a Problem**](/reporting-problems/#report-a-problem) to ConnexCS, you will need to give a [**Call-ID**](/guides/howto/callid/).
2. **Replicate (Optional):** If the problem occurs for live customers, its necessary to replicate the problem either on the live platform or in a lab environment. ConnexCS support engineers may need your help to achieve this.
3. **Fix:** Once you understand the underlying cause of an issue, you can perform a fix. The fix typically corrects configuration or setup issues.
4. **Test:** To confirm if the fix has resolved the issue, verify the fix using a live or simulated test. Upon confirmation, you can contact the customer to inform them of the resolution of the issue.
