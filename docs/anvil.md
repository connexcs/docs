# ConnexCS Anvil (AI App Builder)

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: App Platform → AI & Automation (Anvil)<br> <strong>Audience</strong>: Developers, Product Teams, System Administrators, AI Integrators<br> <strong>Difficulty</strong>: Beginner–Intermediate<br> <strong>Time Required</strong>: 10–15 minutes<br> <strong>Prerequisites</strong>: ConnexCS account with App Platform access; basic understanding of UI components and application workflows<br> <strong>Related Topics</strong>: App Platform, ScriptForge, MCP Server, API Integrations<br> <strong>Next Steps</strong>: Enable Anvil in your application, create a blank project, experiment with chat-based UI generation, explore version control and publishing, and test real-world use cases.<br>

</details>

---

## Anvil User Guide

Welcome to Anvil — an AI-powered interface builder that lets you create professional web applications using natural language. Simply describe what you want, and Anvil builds it for you.

## What is Anvil?

Anvil is a platform that transforms your ideas into fully functional web interfaces.

You communicate through a chat interface, describing what you'd like to build, and Anvil's AI assistant creates the application for you in real-time.

**No coding knowledge required.** You describe what you want in plain English, and Anvil handles all the technical details.

---

## What You Can Do

With Anvil, you can:

* Create UI components (tables, text, layouts)
* Modify existing UI using chat prompts
* Build internal tools and dashboards
* Rapidly prototype applications
* Update applications without manual coding
* Combine frontend changes with backend logic

This removes the need for slow and complex page builders.

---

## How It Works

### 1. Start a New Project

When you create a project, you'll choose:

- **A name** for your project
- **A starter template** (optional) — a pre-built starting point
- **A design framework** (optional) — the visual style of your application

Once created, your project immediately gets two web addresses:

| Environment | URL Pattern | Purpose |
|-------------|-------------|---------|
| **Development** | `[project_id].cnx.dev` | See your changes in real-time as you build |
| **Live** | `[name].cnx.page` or custom domain | Share with the world when you're ready |

### 2. Describe What You Want

Use the chat interface to tell Anvil what to build. For example:

> "Create a contact form with fields for name, email, and message. Add a submit button that's blue."

> "I need a dashboard showing sales statistics with a sidebar menu for navigation."

> "Make the header fixed at the top of the page and add a logo on the left."

Anvil understands context, so you can have natural conversations about your project, make changes, and refine your design iteratively.

### 3. Watch It Come to Life

As you describe changes, the development preview (`[project_id].cnx.dev`) updates automatically. You can see your application take shape in real-time without refreshing the page.

### 4. Publish When Ready

When you're happy with your creation, tell the AI to publish it. Your application will be optimised and made available at your live URL (`[name].cnx.page`), ready to share with the world.

---

## Key Features

### 1. Chat-Based UI Generation

You can describe what you want, and Anvil updates the UI instantly.

**Example:**

* “Change text to Hello” → UI updates
* “Add a table with country and population” → Table is created

---

### 2. Live Preview & Source Code

Anvil provides two main sections:

* **Preview Panel** → Visual representation of the app
* **Source Panel** → Underlying code and files

Any change made via chat is reflected in both.

---

### 3. File-Based Architecture

Each UI component corresponds to a file.

You can:

* Edit files manually
* Override chat-generated changes
* Create or delete additional files

⚠️ The `app.view` file is mandatory and cannot be deleted.

---

### 4. Version Control

Every change creates a new version.

You can:

* Track all changes
* Roll back to previous versions
* Restore earlier states of the application

This ensures safe experimentation.

---

### 5. Build & Publish

Anvil allows you to:

* Build your application
* Publish it instantly
* Activate previous builds if needed

You can manage build history and switch between versions easily.

---

### 6. Domain & Hosting

Each Anvil app is assigned a default domain.

* Changes reflect on the domain
* Apps can be shared publicly
* New domains can be configured

---

### 7. Reset & Delete Options

* **Reset** → Reverts to the original template
* **Delete Anvil** → Removes Anvil from the project (not the entire project)

---

## Starter Templates

Starter templates give you a head start by providing pre-built foundations for common project types. You can customise everything — they're just starting points.

### Available Starters

| Template | Description | Best For |
|----------|-------------|----------|
| **Blank Project** | Minimal starting point | Building from scratch |
| **Dashboard** | Admin interface with sidebar navigation, statistics cards, and user management | Business dashboards, admin panels |
| **Landing Page** | Marketing layout with hero section, features, pricing, and call-to-action | Product launches, company websites |
| **Form Application** | Data collection interface with validation | Contact forms, surveys, registrations |
| **Data Table** | CRUD interface for managing lists of data | User management, inventory, records |

If you're not sure which to pick, start with **Blank Project** — you can always ask the AI to add features as you go.

---

## Design Frameworks

Anvil supports three professional design frameworks. Each creates a different visual style for your application.

### Tailwind CSS *(Default)*

**Best for:** Projects where you want a clean, modern look with maximum flexibility.

Tailwind is the default choice and works well for most projects. It's lightweight and produces fast-loading pages with a fresh, contemporary appearance.

**Style:** Clean, minimal, highly customisable

### PrimeVue

**Best for:** Business applications, data-heavy interfaces, and enterprise software.

PrimeVue provides a polished, professional look with a complete set of sophisticated components. It's ideal for dashboards, admin panels, and applications that display lots of data.

**Style:** Professional, feature-rich, enterprise-grade

**Special features:**
- Advanced data tables with sorting, filtering, and pagination
- Date pickers and calendars
- Tab panels and accordions
- Toast notifications
- Dialog windows

### Vuetify

**Best for:** Applications that should look like Google products or follow Material Design principles.

Vuetify implements Google's Material Design language — the same design system used by Gmail, Google Drive, and Android apps. It creates a familiar, modern interface that users already know how to use.

**Style:** Material Design, Google-like, modern Android aesthetic

**Special features:**
- Material Design Icons
- Familiar UI patterns from Google products
- Consistent, tested design language

---

## Development vs Live

Your project has two environments:

### Development Environment

**URL:** `[project_id].cnx.dev`

- Updates in real-time as you make changes
- Use this while building and testing
- Changes appear instantly without refreshing
- Only you (and anyone with the link) can see it

### Live Environment  

**URL:** `[name].cnx.page` or your custom domain

- The published version of your application
- Optimised for speed and performance
- Publish when you're ready to share
- Cached for fast loading worldwide

Think of development as your workshop and live as your storefront.

---

## Examples

### 1. Modify UI Text

**Command**:
`Change the text to "Hello World"`

**Output**:
UI text updates instantly.

---

### 2. Add a Table

**Command**:
`Create a table with columns: Country and Population`

**Output**:
A table component is added to the UI.

---

### 3. Revert Changes

**Action**:
Rollback to previous version

**Output**:
Application returns to earlier state.

---

### 4. Publish Application

**Action**:
Click Build & Publish

**Output**:
Live application is available on a shareable domain.

---

## Things You Can Do

| Workflow | Steps | Features Used|
| ---------|-------|--------------|
| **Create UI Quickly**   | 1. Open chat<br>2. Describe UI<br>3. Apply changes| → Chat Engine<br>→ Preview Panel |
| **Modify Existing App** | 1. Select component<br>2. Update via chat<br>3. Verify preview | → Chat Engine<br>→ Source Files  |
| **Rollback Changes** | 1. Open version history<br>2. Select version<br>3. Restore| → Version Control |
| **Deploy App** | 1. Build app<br>2. Publish<br>3. Share domain | → Build & Publish |
| **Custom Development**  | 1. Edit source files<br>2. Add logic<br>3. Test | → Source Panel |

---

## Limitations & Considerations

* Some features (e.g., MCP integration) may still be evolving
* Database integration is not fully defined in current workflow
* Advanced customization may still require manual coding
* Feature set is actively being refined

---

## Use Cases

### Internal Tools

Build dashboards, reporting tools, or admin panels quickly.

### Rapid Prototyping

Create MVPs or mock applications in minutes.

### Customer-Facing Apps

Develop simple web apps without full frontend development.

### AI-Assisted Development

Enable non-technical users to create applications using chat.

---

## How to use Anvil?

1. Navigate to **IDE**.
2. **Create** or **Select** an App: Start by either creating a new app or selecting an existing app.
3. **Enable Anvil**:
   - Hover over the `Settings` icon.
   - `Enable Anvil` from the options. <br><img src= "/misc/img/anvil1.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
   - Choose a starter **template** based on your needs.
   - Click on `Enable Anvil.` <br><img src= "/misc/img/anvil2.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

4. **Explore the Anvil Folder**

   - After enabling Anvil, a new folder named `Anvil` will appear in your app.
   - Open the `Preview` file inside the Anvil folder. <br><img src= "/misc/img/anvil3.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
   - Let's go through the buttons on the top-right (left to right):
       - `Open in New Window`: Opens your application preview in a separate browser tab
       - `Refresh`: Reloads the preview.
       - `Open AI Chat`: Opens the Anvil chat interface for interactions.  
       - `MCP Info`: Shows MCP-related information for the app.
       - `Anvil App Info`: Displays application-level details

5. Start Interacting with the UI: Click on the `Open AI Chat`.
6. Click on `New Conversation`.
7. Start giving commands to the in the chat window. For example, I gave the prompt that "change "welcome to your application" to hello". <br><img src= "/misc/img/anvil4.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

    !!! Example "Example 2"
        <img src= "/misc/img/anvil5.png" style="border: 2px solid #4472C4; border-radius: 8px;">

8. Navigate to the `Src` folder. Itcontains all the application source files, including UI components and logic, which define how the application is built and behaves.
   1. You can also create a new source file. <br><img src= "/misc/img/anvil11.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>.
   2. Click on `Create File`. <br><img src= "/misc/img/anvil12.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>.
   3. A new file will be created. This file can be deleted and is not necessary for Anvil execution. <br><img src= "/misc/img/anvil13.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>.

9. The  `App.vue` file is the main application component that controls the overall UI structure, layout, and core functionality of the app. **This is a mandatory file to execute the Anvil App and cannot be deleted**. <img src= "/misc/img/anvil6.png" style="border: 2px solid #4472C4; border-radius: 8px;">. You can `edit` the code on this page as well.
10. Click on `File History`. It provides version control for files (e.g., App.vue), allowing users to track changes and restore previous versions. <br>**Key Features**:</br>
    - Each change creates a **new version** (v1, v2, v3).
    - The latest version is marked as **Current**.
    - **Compare** allows viewing differences between versions.
    - **Rollback** restores a selected version as the active one. <br><img src= "/misc/img/anvil7.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

11. Build Process

    - Hover over the Anvil folder and click on `Settings`.
    - Open the `Changes` section, where users can see all modifications. <br><img src= "/misc/img/anvil8.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

12. Build and Publish
    - Go to `Build & Publish`. <br><img src= "/misc/img/anvil9.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
    - Run the build process and publish the app. <br><img src= "/misc/img/anvil10.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

13. **Domain Setup**: Configures a public URL to share the application externally.
    1. Create a `new domain` for the Anvil platform. Click on the `+` sign. <br><img src= "/misc/img/anvil15.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
    2. Enter the `Domain` and select the `Platform` as `Anvil`.

14. **Rebuild and Version Control**
    - Make additional changes and run another build.
    - The **Build** section shows the currently active version.
    - If changes are pending, the **Publish** section will indicate updates to be deployed.
    - Click **Build & Publish** to create a new version.
    - **Build History** lists all previous builds.
    - You can select and activate a previous build to revert changes.
    - You can set any version as `Active` or `Inactive` as needed. <br><img src= "/misc/img/anvil14.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

15. **Reset Anvil**: Resets the application to the original starter template, removing all current changes while keeping Anvil enabled.

16. **Delete Anvil**: Removes Anvil from the project entirely, disabling its features without deleting the overall project.

---

## Next Steps

1. Enable Anvil in your project
2. Start with a blank template
3. Use chat to build UI components
4. Experiment with version control
5. Publish and share your application
6. Explore advanced customization via source files

---

## Tips for Better Results

### Be Specific

Instead of: *"Make it look better"*

Try: *"Use a blue colour scheme with rounded corners on the cards and more spacing between sections"*

### Describe the Purpose

Instead of: *"Add a form"*

Try: *"Add a contact form so visitors can send me messages. Include fields for their name, email, and message."*

### Iterate Gradually

Build your application step by step rather than trying to describe everything at once. Start with the basic structure, then add features and refine the design.

### Reference What Exists

If you want to change something, describe where it is:

*"In the sidebar, change the background colour to dark blue"*

*"Move the login button to the top right of the header"*

---

## Power User Features

For technical users who want more control, Anvil's capabilities can be accessed directly through the MCP (Model Context Protocol) interface. This allows integration with other AI tools and custom workflows.

Contact your administrator for MCP endpoint details and API documentation.

---

## Getting Help

If you're stuck or the AI doesn't understand what you want:

1. **Rephrase your request** — try describing it differently
2. **Break it down** — ask for one change at a time
3. **Be more specific** — include details about colours, sizes, or positions
4. **Reference examples** — mention similar websites or applications

The AI learns from context, so the more clearly you describe your vision, the better the results.

---
