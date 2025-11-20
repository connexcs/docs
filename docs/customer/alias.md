# Alias

---
**Document Metadata**
<br>**Category**: Customer Account Management / Routing Configuration</br>
**Audience**: Administrators, Engineers, Support Team
<br>**Difficulty**: Intermediate</br>
**Time Required**: Approximately 30–60 minutes
<br>**Prerequisites**: Active ConnexCS account, permission to edit customer alias rules (number rewriting)</br>
**Related Topics**: [Customer – Auth](https://docs.connexcs.com/customer/auth/), [Number Manipulation Basics](https://docs.connexcs.com/number-manipulation/)
<br>**Next Steps**: [Configure Routing Rules after Alias](https://docs.connexcs.com/routing/)</br>

---

**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Alias**

## Overview

The Alias feature allows for complete or partial number rewriting before further processing.

Alias will re-write the destination number.

## Create Alias

1. Click :material-plus:.
    + **Current**: Current number or script (regex).
    + **New**: Set to another number or script (regex).
2. Click **`Save`**.

!!! info "Video Guide"
    See walk-through in [**Alias Video Guide**](https://docs.connexcs.com/video-guide/#aliases).

## Processing Order

Number modifications occur in a structured sequence:

1. **Parameter Rewrite**: Initial modifications to parameters
2. **Alias Processing**: Number rewriting based on alias rules.
3. **Routing**: The final step that determines the call's destination based on the modified number.

Each stage contributes to refining the call flow for optimal routing and handling.
