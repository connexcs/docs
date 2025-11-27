# ConnexCS ScriptForge Migration Guide: Old to New Implementation

## Overview

This guide shows developers what changes they need to make to scripts written following the old ConnexCS official documentation to work with the new improved implementation.

---

## Class 4 Routing (Routes & DID)

**Old Pattern:**

```js
function main (data = {}) {
    // data.routing contains the same data you will find in the Logs
}
```

**New Pattern:**

```js
export function main(data = {}) {
    // data.routing contains the same data
}
```

**Changes Required:**
- Add `export` keyword

---

## Class 5 Programmable Voice

**Old Pattern:**

```js
async function main (data , ctx) {
    await ctx.answer();
}
```

**New Pattern:**

```js
import cxC5Server from 'cxC5Server';

export async function main(data) {
    const ctx = new cxC5Server(process.env.CORRELATION_ID);
    await ctx.answer();
}
```

**Changes Required:**
- Add `import cxC5Server from 'cxC5Server'` at top
- Add `export` keyword
- Remove `ctx` from parameters
- Initialize `ctx` inside function: `const ctx = new cxC5Server(process.env.CORRELATION_ID);`

---

## C4 Call Control (C4)

**Old Pattern:**

```js
const {C4} = require('cxCallControl');
async function main() {
    const c4 = await C4(['myServerName']);
    const registrations = await c4.registrations('7900');
}
```

**New Pattern:**

```js
import { C4 } from "cxCallControl";
export async function main() {
    const c4 = await C4(['myServerName']);
    const allRegistrations = await c4.registrations();
    const registrations = await c4.registrations('7900');
}
```

**Changes Required:**
- Add `export` keyword to `main` function
- Use ES module `import` instead of `require`

---

## C5 Call Control (C5)

**Old Pattern:**

```js
const {C5} = require('cxCallControl');
async function main() {
    const c5 = await C5(['am1fs1']);
    const callEmitter = await c5.originate(...);
}
```

**New Pattern:**

```js
import { C5 } from "cxCallControl";
export async function main() {
    const c5 = await C5(['am1fs1']);
    const callEmitter = await c5.originate(...);
}
```

**Changes Required:**
- Add `export` keyword to `main` function
- Use ES module `import` instead of `require`

---

## AI Call Control (AI)

**Old Pattern:**

```js
const {AI} = require('cxCallControl');
async function main() {
    const ai = await AI(['am1fs1']);
    const callEmitter = await ai.originate(...);
}
```

**New Pattern:**

```js
import { AI } from "cxCallControl";
export async function main() {
    const ai = await AI(['am1fs1']);
    const callEmitter = await ai.originate(...);
}
```

**Changes Required:**
- Add `export` keyword to `main` function
- Use ES module `import` instead of `require`

---

## cxJob Background Jobs

**Old Pattern:**

```js
const cxJob = require('cxJob');
async function main(data) {
    const job = await cxJob.add(...);
}
```

**New Pattern:**

```js
import cxJob from "cxJob";

export async function main(data) {
    const job = await cxJob.add(process.env.SCRIPTFORGE_ID, 'processJob', { items }, { attempts: 5 });
    return await job.result;
}

export async function processJob(data) {
    cxJob.setProgress(...);
    cxJob.setData(data);
}
```

**Changes Required:**
- Add `export` keyword to all functions (`main` and `processJob`)
- Use ES module `import` instead of `require`

---

## cxUserspace Data Storage

**Old Pattern:**

```js
const { get, create, update, random, sql } = require('cxUserspace');
async function main() {
    const record = await get(...);
}
```

**New Pattern:**

```js
import { get, create, update, random, sql } from 'cxUserspace';
export async function main() {
    const record = await get(...);
    const createdRecord = await create(...);
}
```

**Changes Required:**
- Change `require` to ES module `import`
- Add `export` keyword to `main` function

---

## cxPubSub Messaging

**Old Pattern:**

```js
const { subscribe, publish } = require('cxPubSub');
async function main() {
    await subscribe('myEvent', '1234', (data) => {});
}
```

**New Pattern:**

```js
import { subscribe, publish } from 'cxPubSub';
export async function main() {
    await subscribe('myEvent', '1234', (data) => {});
    await publish('myEvent', '1234', { my: 'data' });
}
```

**Changes Required:**
- Change `require` to ES module `import`
- Add `export` keyword to `main` function

---

## cxRest API Calls

**Old Pattern:**

```js
const auth = require('cxRest');
const api = auth("api@test.com");

async function main() {
    const customers = await api.get('customer');
}
```

**New Pattern:**

```js
import auth from 'cxRest';

export async function main() {
    const api = auth(process.env.CX_API_USER);
    const customers = await api.get('customer');
}
```

**Changes Required:**
- Change `require` to ES module `import`
- Add `export` keyword to `main` function

---

## cxKV Key-Value Storage

**Old Pattern:**

```js
const { kv, ko } = require('cxKV');
async function main(data) {
    await kv.set('hello', 'world');
}
```

**New Pattern:**

```js
import { kv, ko } from 'cxKV';
export async function main(data) {
    await kv.set('hello', 'world');
    const value = await kv.get('hello');
}
```

**Changes Required:**
- Change `require` to ES module `import`
- Add `export` keyword

---

## cxSend (Email & SMS)

**Old Pattern:**

```js
const { email, sms } = require('cxSend');
async function main(data) {
    await email({...});
}
```

**New Pattern:**

```js
import { email, sms } from 'cxSend';
export async function main(data) {
    await email({...});
    await sms('447870296546', 'Hello World!');
}
```

**Changes Required:**
- Change `require` to ES module `import`
- Add `export` keyword

---

## Knex Database Queries

**Old Pattern:**

```js
const cxUserspace  = require('cxUserspace');
async function main() {
    const db = await cxUserspace.knex({}, 'mydatabase');
}
```

**New Pattern:**

```js
import { Kysely } from 'https://esm.sh/kysely?bundle=true';
import { ConnexCSDialect } from 'cxKysely';

export async function main() {
    const db = new Kysely({dialect: new ConnexCSDialect({})});
    const users = await db.selectFrom('1002_mydatabase').select(['address1']).execute();
}
```

**Changes Required:**
- Change `require` to ES module `import`
- Use `Kysely` instead of `knex`
- Use URL import for Kysely library
- Add `export` keyword

---

## External Libraries (dayjs)

**New Pattern:**

```js
import dayjs from 'esm.sh/dayjs';

export function main() {
    return dayjs().format('YYYY-MM-DD HH:mm:ss');
}
```

---

## Event Polling

**Old Pattern:**

```js
async function main() {
    env.cxTest.on('countTo5');
    const results = [];
    setInterval(() => {
        const result = env.cxTest.poll('countTo5');
        if (result) results.push(...result)
    }, 100)
}
```

**New Pattern:**

```js
export async function main() {
    env.cxTest.on('countTo5');
    const results = [];
    setInterval(() => {
        const result = env.cxTest.poll('countTo5');
        if (result) results.push(...result)
    }, 100)
    return results;
}
```

**Changes Required:**
- Add `export` keyword

---

> Notes
> - These patterns focus on the most common migration changes: switching to ES module imports, adding `export` to entry functions, and initializing services inside the function (instead of receiving context objects).
> - When adding `import` statements that reference environment-provided libraries, follow the same exact import path used by the platform's runtime (case-sensitive).
> - Test each script in a staging environment before promoting to production.
