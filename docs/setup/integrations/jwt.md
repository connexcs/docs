# JWT Refresh Keys

**Setup :material-menu-right: Integrations :material-menu-right: JWT Refresh Keys**

## Introduction

**JSON Web Tokens (JWT)** are widely used in modern web applications for securely transmitting information between client and server.

One of the core elements of JWT is the **Refresh Token**, which plays a key role in ensuring seamless user sessions while improving security. 

## What is JWT Refresh Keys?

**JWT Refresh Keys** are used to extend the validity of a user session without requiring the user to re-enter credentials.

This process involves two tokens:

1. **Access Token**: This token is generated after a user successfully logs in and is used to authenticate requests. It has a **short expiration time** (e.g., 30 minutes or 1 hour).

2. **Refresh Token**: This token is used to request a new access token after the previous one expires, allowing the user to stay logged in for a longer period. The refresh token has a **longer expiration time** (e.g., 30 days).

## How JWT Refresh Tokens Work?

1. **User Login**:

    a. The user enters **credentials**. For example, the username and password.

    b. The system generates an **Access Token** and a **Refresh Token**.

    c. The Access Token is **short-lived** and used to **authenticate API requests**.

2. **Token Expiry**:

    a. When the Acess Token expires, the client can send the Refresh Token to request a **new Access Token**.

    b. The system validates the Refresh Token and, if valid, generates a new Access Token.

3. **Revoke Token**: If necessary, the Refresh Token can be revoked to prevent further use. This is typically done in cases where the user logs out, or the system detects a security issue.

4. **Security Considerations**:

a. **HTTPS (TLS/SSL)** should always be used to protect tokens in transit.

b. Refresh Tokens should be stored securely.

## How to Use JWT Refresh Keys?

1. Login to your account.
2. Navigate to **Setup :material-menu-right: Integrations :material-menu-right: JWT Refresh Keys**. <br><img src="<img src= "/setup/img/jwt1.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
3. Click on the blue `+` button. Fill in the following fields:
      1. **Audience**: Specifies the intended recipient of the token, ensuring it is used only by the designated service/application/API.
      2. **Lifetime**: Specifies how long the token will remain active before it expires.
4. Click `Save`. <br><img src="<img src= "/setup/img/jwt2.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
5. **Other fields**:
      1. **Expires At**: Sets the expiration date and time of the token, after which it will no longer be valid.
      2. **Created At**: Shows the timestamp when the refresh token was issued, helping track the token’s lifespan.
      3. **Revoked At**: Records the time when the token was invalidated, meaning it can no longer be used.
      4. **Last Used**: Indicates the most recent time the token was used for authentication or action, helping track token activity.
      5. **Content field**: It contains the payload of the JWT, which includes user data or claims (e.g., email: "rnu@domain.com") embedded in the token.
      6. **Token Hash**: A unique identifier for the JWT, helping track and manage tokens securely.
      7. **JTI (JWT ID)**: Its a unique identifier for each JWT, ensuring that each token is distinguishable and can be tracked or revoked individually.
      8. **Device Info**: Stores details about the device used for token authentication. For example browser, OS, or device ID, aiding security and auditing.

---
