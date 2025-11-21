# Alias

---

**Document Metadata**
<br>**Category**: Platform Administration / Number Manipulation & Global Aliases</br>
**Audience**: Administrators, Engineers, Support Team
<br>**Difficulty**: Intermediate</br>
**Time Required**: Approximately 30–45 minutes
<br>**Prerequisites**: Active ConnexCS account with Global configuration permissions; understanding of call routing flows and number-rewriting concepts.</br>
**Related Topics**: [Routing Overview](https://docs.connexcs.com/routing/), [Customer Alias Configuration](https://docs.connexcs.com/customer/alias/)
<br>**Next Steps**: Navigate to `Global → Alias`, define or edit alias rules (prefix or regex based), select applicable country/company context, validate rewriting logic by test calls, and ensure old calls route correctly through modified numbers.</br>

---

**Global :material-menu-right: Alias**

## Overview

The Alias feature allows for complete or partial number rewriting before further processing.

Alias will re-write the destination number.

## Create Alias

1. Navigate to **Global :material-menu-right: Alias**
2. Click :material-plus:.
    + **Company**: Select the country from the drop-down.
    + **Current**: Current number or script (regex).
    + **New**: Set to another number or script (regex).
3. Click **`Save`**.

<img src="/misc/img/globalalias.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## Processing Order

Number modifications occur in a structured sequence:

1. **Parameter Rewrite**: Initial modifications to parameters.
2. **Alias Processing**: Number rewriting based on alias rules.
3. **Routing**: The final step that determines the call's destination based on the modified number.

Each stage contributes to refining the call flow for optimal routing and handling.
