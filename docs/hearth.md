# Hearth

<details>
<summary><strong>Document Metadata</strong></summary>
<br>

<strong>Category</strong>: Developer SDKs → Databases → External Data Storage<br>

<strong>Audience</strong>: Developers, Application Developers, Anvil Developers, Script Developers<br>

<strong>Difficulty</strong>: Intermediate<br>

<strong>Time Required</strong>: 5–10 minutes<br>

<strong>Prerequisites</strong>:<br>
<ul>
<li>A ConnexCS account</li>
<li>A valid Opaque token for authentication</li>
<li>Basic familiarity with REST APIs or JavaScript/TypeScript</li>
</ul>

<strong>Related Topics</strong>: Anvil, ScriptForge, Apps Platform, REST API, JavaScript SDK, Opaque token Authentication<br>

<strong>Next Steps</strong>: Learn how Hearth works, authenticate using an Opaque token, choose between the REST API or JavaScript SDK, and explore the official SDK documentation and API reference.<br>

</details>

---

## Overview

**Hearth** is the ConnexCS managed database for storing and managing application data.

It enables developers to create schemas and tables, store and query structured data, and manage application data through a `REST API` or the official `JavaScript/TypeScript SDK`.

Hearth provides a secure, multi-tenant environment where application data is isolated from the core ConnexCS platform, allowing developers to build applications without managing their own database infrastructure.

For JavaScript and TypeScript applications, ConnexCS provides the official SDK:

👉 **@connexcs/hearth**

[https://www.npmjs.com/package/@connexcs/hearth](https://www.npmjs.com/package/@connexcs/hearth)

!!! info
    Hearth can be accessed through its REST API or the official **@connexcs/hearth** JavaScript/TypeScript SDK. Both communicate with the same Hearth database, allowing you to choose whichever best fits your application or development environment.

    For installation instructions, API documentation, SDK reference, and additional examples, visit:

    [https://www.npmjs.com/package/@connexcs/hearth](https://www.npmjs.com/package/@connexcs/hearth)

---

## Who is this for?

### Developers

Build applications that require secure, persistent storage for structured data using either the Hearth REST API or the official JavaScript SDK.

### Anvil Developers

Use Hearth as the primary database for Anvil applications to store, retrieve, and manage application-specific data.

### Platform Integrators

Integrate external applications and services with ConnexCS while maintaining isolated application data within Hearth.

---

## Common Scopes

| Scope | Description |
|--------|-------------|
| `hearth:data:read` | Read rows (list records and fetch by ID). |
| `hearth:data:write` | Insert, update, delete, and bulk-load rows. |
| `hearth:schema:create` | Create schemas. |
| `hearth:schema:drop` | Drop schemas. |
| `hearth:ddl:manage` | Create, alter, and drop tables. |
| `hearth:grants:manage` | Manage schema visibility and access permissions. |
| `hearth:snapshot:read` | Download schema snapshots. |
| `hearth:backup:manage` | Start and monitor backup jobs. |
---

## Core Concepts

### Schemas

Schemas are logical containers for application data. Each schema contains one or more tables and helps organize data for different applications or services.

---

### Tables

Tables store structured application data using typed columns. Applications can create, query, update, and delete records through the Hearth API or SDK.

---

### Rows

Rows are your actual data, read via a compact query language (filters, sorting, field selection, pagination) and written as `json` objects or bulk-loaded as `csv`.

---

### Multi-tenancy

Hearth is a multi-tenant database. Each ConnexCS account has isolated application data, ensuring users only access schemas and tables they are permitted to use.

---

### Authentication

Hearth supports authentication using both `RFC 8693` and `asymmetric OpenID Connect (OIDC)`.

## REST API or JavaScript SDK?

Hearth supports two methods of interacting with your data:

- **REST API** — Suitable for any programming language or application capable of making authenticated HTTP requests.
- **JavaScript SDK (`@connexcs/hearth`)** — The official JavaScript/TypeScript client that simplifies authentication, query building, streaming, and error handling.

Both options connect to the same Hearth database, allowing you to choose the approach that best suits your application.

### Using the REST API

```bash
curl -G https://hearth.connexcs.com/api/v1/crm/contacts \
  -H "Authorization: Bearer $HEARTH_TOKEN" \
  --data-urlencode "filter[name][ilike]=%ada%" \
  --data-urlencode "sort=-created_at" \
  --data-urlencode "limit=50"
```

### Using the JavaScript SDK

```typescript
import { createClient } from "@connexcs/hearth";

const hearth = createClient("https://hearth.connexcs.com", {
  schema: "crm",
  getToken: () => auth.getAccessToken(),
});

const contacts = await hearth
  .from("contacts")
  .select("id", "name", "created_at")
  .ilike("name", "%ada%")
  .order("created_at", { ascending: false })
  .limit(50);
```

For additional examples, installation instructions, and the complete API and SDK reference, visit the official **@connexcs/hearth** package documentation.

---

## Error Handling

Hearth returns standard HTTP status codes together with a consistent JSON error response containing an error code, message, and request ID.

```bash

{
  "code": "not_found",
  "message": "Resource not found",
  "requestId": "01J8ZK..."
}
```

When using the JavaScript SDK, these responses are automatically exposed as typed `HearthError` exceptions, making error handling simpler within JavaScript and TypeScript applications.

---

## Using Hearth in Anvil

Since Anvil uses **ES Modules (ESM)**, Hearth should be imported directly from an ESM-compatible endpoint rather than installed via npm.

### Import Hearth

```js
import { createClient, HearthError } from 'https://esm.sh/@connexcs/hearth'
```

### Create a Client

```js
  const hearth = createClient('https://hearth.connexcs.com', {
    schema: 'center',
    getToken: () => '__AUTH_PASSTHROUGH__'
  })
```

**After creating the client, you can**:

* Create or access schemas
* Create tables
* Insert records
* Update existing data
* Delete records
* Query stored data

!!! Info "Please note"
    When using Hearth in **Anvil**, ensure your application is configured to use **ES Modules (ESM)**. Since Anvil imports packages directly from ESM-compatible sources, use the following import statement:

    ```javascript
    import { createClient, HearthError } from 'https://esm.sh/@connexcs/hearth'
    ```

## Additional Resources

### Official JavaScript SDK

[https://www.npmjs.com/package/@connexcs/hearth](https://www.npmjs.com/package/@connexcs/hearth)

For complete installation instructions, API documentation, SDK reference, and advanced usage examples, refer to the official **@connexcs/hearth** package documentation.