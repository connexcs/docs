# Alias

**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Alias**

## Overview

The Alias feature allows for complete or partial number rewriting before further processing.

This enables efficient call routing and management by dynamically modifying numbers according to predefined rules.

By leveraging aliases, users can achieve optimized and seamless call routing within the ConnexCS system.

!!! question "How it works?"
    Aliases modify dialed numbers by:

    * Adding or removing prefixes and suffixes.
    
    * Replacing specific digits.
    
    * Using regular expressions for complex rewrites

    !!! Example "If a user dials 100, the system can rewrite it to 456100 based on an alias rule. The transformed number then proceeds through the system for further processing."
    
    ```mermaid
    graph TD
    A[User Dials Number] --> B{Alias Rule Applied}
    B --> C[Add or Remove Prefixes and Suffixes]
    B --> D[Replace Specific Digits]
    B --> E[Use Regular Expressions for Complex Rewrites]
    C --> F[Transformed Number]
    D --> F
    E --> F
    F --> G[Proceed Through System for Further Processing]

    %% Adding a note separately
    B ---|Example: If user dials 100, rewrite to 456100| Note1
    Note1[Note]
    ```

## Alias Configuration Methods

**Aliases can be configured in two ways**:

1. **Simple Number Rewrite**: Directly replaces or reverses a number.

    !!! Example
        If 123456 is dialed, it can be rewritten as 654321.

2. **Regular Expression-Based Rewrite**: Uses regex patterns to modify numbers dynamically.

    !!! Example
        A five-digit number ([0-9]{5}) can be rewritten using $1, referencing captured groups from the regex pattern.

        This allows for flexible transformations, such as preserving part of the original number while modifying the rest.

**Processing Order**

Number modifications occur in a structured sequence:

1. **Parameter Rewrite**: Initial modifications to parameters
2. **Alias Processing**: Number rewriting based on alias rules.
3. **Routing**: The final step that determines the call's destination based on the modified number.

Each stage contributes to refining the call flow for optimal routing and handling.

## Benefits of Alias Configuration

**Implementing aliases offers several advantages**:

1. **Efficient Call Routing**: Ensures calls reach the correct destination without manual intervention.

2. **Simplified Number Management**: Allows modifications without altering the core system setup.

3. **Reduced Dialing Errors**: Helps correct or standardize numbers automatically, improving call success rates.

4. **Enhanced Flexibility**: Provides customization options to tailor number transformations as needed.

5. **Advanced Regex Support**: Enables pattern-based rewrites for more dynamic and sophisticated call routing.

## Testing and Validation

**To verify alias configurations**:

1. Test with different input numbers to ensure expected output.

Utilize regex capturing groups ($1, $2, etc.) for precise replacements.

Confirm that the processing order aligns with the desired call handling flow.

## Create Alias

1. Click :material-plus:.
    + **Current**: Current number or script (regex).
    + **New**: Set to another number or script (regex).
2. Click **`Save`**.

!!! info "Video Guide"
    See walk-through in [**Alias Video Guide**](https://docs.connexcs.com/video-guide/#aliases).
