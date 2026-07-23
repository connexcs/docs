# Hearth

## Document Metadata

**Category:** Developer SDKs / Databases / External Data Storage

**Audience:** Developers, Application Developers, Anvil Developers, Script Developers

**Difficulty:** Intermediate

**Time Required:** Approximately 10–20 minutes

**Prerequisites:** Basic knowledge of JavaScript or TypeScript, access to a ConnexCS account, a valid JWT token, access to a Hearth instance, and familiarity with Anvil or Node.js development.

**Related Topics:** Anvil, ScriptForge, Apps Platform, Terminal Tools (CX-Tools), JWT Authentication

**Next Steps:** Install or import the Hearth SDK, create a Hearth client, authenticate using a JWT token, connect to a schema, perform database operations, and integrate Hearth into your Anvil applications.

---

## Overview

**Hearth** is the official ConnexCS external database client that enables applications to securely store and retrieve data independently of the core ConnexCS platform database.

It provides a lightweight JavaScript/TypeScript SDK for connecting to Hearth services, authenticating requests, and performing database operations from applications such as **Anvil**, custom applications, and external `Node.js` services.

Unlike the internal ConnexCS platform database, Hearth is designed as a dedicated application data layer. This separation allows developers to build applications that maintain their own schemas and tables without interacting directly with the platform's operational databases.

Hearth is distributed as an npm package:

👉 **@connexcs/hearth**

[https://www.npmjs.com/package/@connexcs/hearth](https://www.npmjs.com/package/@connexcs/hearth)

!!! info
    Hearth provides a consistent API for managing external application data. Although it is distributed as an npm package for Node.js applications, it can also be imported directly into **Anvil** using ES Modules (ESM), making it suitable for both server-side and browser-based application development.

    For installation instructions, API reference, and additional examples, visit:
    https://www.npmjs.com/package/@connexcs/hearth

## Who is this for?

### Application Developers

Build applications that require persistent storage independent of the ConnexCS platform database.

## Anvil Developers

Use Hearth as the primary database layer for Anvil applications to create, query, and manage application-specific data.

## Script Developers

Access and manipulate structured data from JavaScript or TypeScript applications using a simple SDK.

## Platform Integrators

Integrate external services with ConnexCS while maintaining isolated application data.

---

## Authentication & Security

### Flow (High Level)

1. Import the Hearth SDK into your application.
2. Create a client using the Hearth server URL.
3. Authenticate using a valid JWT token.
4. Connect to the required schema.
5. Perform CRUD operations against tables within the schema.
6. Handle authentication and database errors using `HearthError`.

Authentication is performed using JWT tokens, ensuring only authorized applications can access Hearth resources.

---

## Core Concepts

### Client

The Hearth client represents an authenticated connection to a Hearth server. All database operations are performed through the client.

---

### Hearth Server

The Hearth server is the endpoint that hosts one or more application databases.

Example:

```text
https://hearth.connexcs.com
```

---

### Schema

A schema acts as the logical database for an application.

Each schema can contain multiple tables and is commonly used to isolate data between different applications or services.

Examples include:

* CRM
* Contact Center
* Custom Application Database

---

### Tables

Each schema contains one or more tables that store structured records.

Applications can perform standard database operations such as:

* Create
* Read
* Update
* Delete
* Query

---

## Installation

Install Hearth using npm:

```bash
npm install @connexcs/hearth
```

---

## Basic Usage

Create a Hearth client:

```javascript
import { createClient } from '@connexcs/hearth'

const client = await createClient({
    url: 'https://hearth.connexcs.com',
    token: '<JWT_TOKEN>',
    schema: 'CRM'
})
```

Once connected, the client can access schemas, tables, and perform database operations.

---

## Using Hearth in Anvil

Since Anvil uses **ES Modules (ESM)**, Hearth should be imported directly from an ESM-compatible endpoint rather than installed via npm.

### Import Hearth

```javascript
import { createClient, HearthError } from 'https://esm.sh/@connexcs/hearth'
```

### Create a Client

```javascript
const client = await createClient({
    url: 'https://hearth.connexcs.com',
    token: jwtToken,
    schema: 'CRM'
})
```

After creating the client, you can:

* Create or access schemas
* Create tables
* Insert records
* Update existing data
* Delete records
* Query stored data

!!! note
    When using Hearth in **Anvil**, ensure your application is configured to use **ES Modules (ESM)**. Since Anvil imports packages directly from ESM-compatible sources, use the following import statement:

    ```javascript
    import { createClient, HearthError } from 'https://esm.sh/@connexcs/hearth'
    ```

## Error Handling

Hearth exposes a dedicated `HearthError` class for handling database-related exceptions.

Example:

```javascript
try {
    // Hearth operations
}
catch (error) {
    if (error instanceof HearthError) {
        console.error(error.message)
    }
}
```

---

## Best Practices

* Store JWT tokens securely and never expose them publicly.
* Use separate schemas for different applications whenever possible.
* Reuse an existing client instead of creating multiple connections.
* Handle `HearthError` exceptions gracefully.
* Keep application data isolated from the core ConnexCS platform database.
* Follow the principle of least privilege when granting database access.

---

## Additional Resources

**Official npm Package**

[https://www.npmjs.com/package/@connexcs/hearth](https://www.npmjs.com/package/@connexcs/hearth)

For complete API documentation, supported methods, installation instructions, and advanced examples, refer to the official Hearth package documentation.
