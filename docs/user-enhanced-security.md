# User Enhanced Security

ConnexCS has excellent security, the weakest point is often the point where the user interacts with the system.
If you wish to harden your ConnexCS account here is a few recommended practices.

1. Passwords, we recommend following the NIST guidelines found here [NIST Guidelines](https://pages.nist.gov/800-63-3/sp800-63b.html#sec5):
 – 8 character minimum when a human sets it
 – 6 character minimum when set by a system/service
 – Support at least 64 characters maximum length
 – All ASCII characters (including space) should be supported
 – Truncation of the secret (password) shall not be performed when processed
 – Check chosen password with known password dictionaries
 – Allow at least 10 password attempts before lockout
 – No complexity requirements
 – No password expiration period
 – No password hints
 – No knowledge-based authentication (e.g. who was your best friend in high school?)
 – No SMS for 2FA (use a one-time password from an app like Google Authenticator)
 
2. Yubikey - A hardware security token which can never be digitaly stolen can be used for logins to ConnexCS.

<div class="video-wrapper">
  <iframe width="1280" height="720" src="https://www.youtube.com/watch?v=_EqOmhahBQc" frameborder="0" allowfullscreen></iframe>
</div>

3. Duo Security or Google/Microsoft Authenticator

As per the NIST recommendations above SMS should not be trusted for second factor authentication.
We implement both Duo Security and [Time-based One-time Password Algorithm (TOTP; specified in RFC 6238)](https://tools.ietf.org/html/rfc6238),
which can be used by Google Authenticator or Microsoft Authenticator.
