# Debugging Basics
Debugging (identifying call problems) is an essential skill for maintaining a Voice Platform. VoIP/SIP communication has many components and a wide range of possible configurations; a single character or a 10ms delay in the wrong place could cause issues in the system. 

## Debugging Steps

1. **Isolate**: The first step in debugging a problem is to isolate it. This means that if a customer is a reporting that calls don't connect, we need an example of where that happens.
  * If you are reporting a problem to ConnexCS you will need to provide a Call-ID.   
2. **Replicate (Optional)**: If the problem is happening for live customers, it may be necessary to replicate the problem either on the live platform or in a lab environment. ConnexCS support engineers will likely need your help to achieve this.
3. **Fix**: Once the underlying cause of an issue is understood, a fix can be performed (typically correcting configuration or setup issues). 
4. **Test**: The fix should be verified using a live or simulated test to confirm the fix has resolved the issue. Once this is confirmed, the customer can be contact to inform the issue is be resolved. 
