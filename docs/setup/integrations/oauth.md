# OAuth Session

**Setup :material-menu-right: Integrations :material-menu-right: OAUth Session**

## Overview

ConnexCS integrates with multiple external systems. The recommended modern method of authentication for such integrations is **OAuth**, which provides **secure sign-in**, **token issuance**, and **automatic session refresh**.

However, not all systems that ConnexCS needs to integrate with currently support OAuth.

Because of this limitation, ConnexCS implements an alternative mechanism using **long-lived access tokens**, allowing stable authentication in environments where OAuth cannot be used.

### Key features and benefits

- **Delegated access**: Allow clients to act on behalf of users without storing user passwords.
- **Scopes** (least privilege): Restrict tokens to specific permissions.
- **Multiple flows**: Authorization Code, Client Credentials, Device Code, etc., to suit client capabilities.
- **Refresh tokens**: Enable long-lived sessions without frequent re-authentication.
- **Interoperability**: Widely supported standard with established best practices (PKCE, TLS, JWT formats).

See [JWT Refresh Tokens](/setup/integrations/jwt/) for details about JSON Web Tokens (JWT) and how ConnexCS uses JWTs as token formats.

## How OAuth Works?

1. The external service redirects the user to its **login page**.
2. After authentication, the service issues an **access token**.
3. The system uses this token to make **API requests without storing a password**.

The process is seamless and secure.

## Limitation Identified

In cases where a third-party application does not support OAuth, the system responds as follows:

1. The system cannot complete an external login flow.

2. Regular short-lived access tokens are not usable because they expire quickly.

3. The client cannot store a refresh token or rotate it automatically.

This creates a challenge when trying to integrate with these systems.

### ConnexCS Solution: Long-Lived Access Tokens

To solve the problem of `no OAuth + no refresh tokens` ConnexCS introduces the ability to mint long-lived access tokens directly from the UI.

**Key Characteristics**:

1. Tokens can be **created manually**: `Mint Token`.

2. Tokens can have **extended validity** (e.g., 1 year).

3. Tokens can be **revoked** at any time from the interface.
4. These tokens replace the automatic lifecycle normally handled by OAuth.
5. Acts like a **persistent OAuth token**.
6. Does not require re-authentication every few minutes.
7. Provides **stable authorization** for MCP tools, LLMs, and internal integrations

### When to Use OAuth vs Long-Lived Tokens

|Scenario|Preferred Method|Notes|
|--------|----------------|-----|
|External system supports OAuth|OAuth| Automatically handles login, expiry, refresh|
|External system does *not* support OAuth|Long-Lived Access Token| Must be manually minted; revocable|
|Short-term integration testing| Standard short-lived tokens|Manually refreshed if needed|
|Internal trusted tools (e.g., MCP/LLM tools) | Long-Lived Token|Because OAuth cannot run from these environments|

## Security Behavior

1. Long-lived tokens created in ConnexCS are stored securely and can be revoked.

2. Tokens issued through the standard OAuth flow cannot be revoked through the same mechanism. For that reason, long-lived tokens also provide operational control for internal tools.

## Accessing Token Management

[Click here](/setup/integrations/jwt/#how-to-add-the-jwt-keys) for detailed steps.

## OAuth Session Page Overview

The OAuth Session page shows all **active OAuth login sessions** that are currently associated with your account or system.

|Column|Description|
|------|-----------|
|**Issued At**| The date when the OAuth session token was created. This is when the external service successfully authenticated using OAuth|
|**Expires At**| When the session token will become invalid. OAuth tokens are usually short-lived, so this shows the expiry timestamp|
|**Login Timestamp**|The exact moment the user or service completed the OAuth login flow|
|**JWT ID**|Its a unique identifier for each JWT, ensuring that each token is distinguishable and can be tracked or revoked individually|
|**Grants**|The permissions or scopes that were approved during the OAuth login||

