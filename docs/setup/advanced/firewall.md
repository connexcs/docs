# Firewall

**Setup :material-menu-right: Advanced :material-menu-right: Firewall**

The ConnexCS **Firewall** is used to enhance system security by dynamically managing traffic based on threat detection to blacklist attackers.

## Configure Firewall

1. Click on the blue `+` button.
2. Enter the **IP Address** you want to block in the first field. You can only enter a **single IP Address**.
3. Select **Block** from the **Action** dropdown menu.
4. You can add additional information in the **Notes** section.

<img src= "/setup/img/firewall1.png" width= "400" style="border: 2px solid #4472C4; border-radius: 8px;">

## Threat Detection System

**Threat Detection** is always on and, along with other key identifiers, analysing traffic hitting our platform.

It primarily pays attention to authentication failures on both registration and the firewall at a particular threshold.

If it exceeds certain criteria, the system will issue a system-wide block.

**Key Features**

+ **Automated Threat Detection**: Monitors incoming traffic and evaluates against defined thresholds.

+ **Dynamic Rule Addition**: When traffic exceeds safe limits (e.g., 10,000+ requests per minute), the system automatically adds blocking rules.

+ **Global Enforcement**: Once a threat is detected, the blocking rule is applied across all accounts to prevent further spamming.

+ **Manual Override**: If a blocked entity is later determined to be safe, administrators can manually delete the rule to restore access. Administrators can also review and remove a rule if the flagged source isn't considered a threat.

!!! question "How it works?"
    **Detection and Blocking**:

    1. The system continuously monitors incoming requests.
    
    2. If traffic exceeds set thresholds, it identifies potential spam or attacks.
    
    3. A rule is automatically added to the firewall.
    
    ```mermaid
    graph TD;

    %% Define Nodes for Each Step
    A[Monitor Incoming Requests]
    B{Traffic Exceeds Threshold?}
    C[Identify Potential Spam or Attack]
    D[Add Rule to Firewall]
    E[Allow Normal Traffic]

    %% Define Connections Between Steps
    A --> B
    B -- Yes --> C
    C --> D
    B -- No --> E
    ```

**Benefits**

+ **Enhanced Security**: Proactively defends against high-volume attacks.
+ **Centralized Control**: Rules are applied system-wide, minimizing manual intervention.
+ **Adaptability**: The system learns from real-time traffic patterns and updates its defenses accordingly.

## Remove an IP from the Blocked list

If you inadvertently blocked a valid attempt from your client or carrier, you can unblock it by selecting the checkbox next to the IP address and clicking on the delete icon.

!!! note "Updating removed IP"
    After you remove an IP from the block list, it can take up to 15 minutes to get updated across the entire platform.

## False Positive

If you have a customer or carrier who makes several unauthorised calls, they may get added to the Block list.

## False Negatives

You may see attempts hit your switch that aren't authorized and then fail.

These are attempts that our system has effectively declined to process.

You don't need to take further action to stop these calls.

It's important that calls such as these are visible for two reasons:

1. If we block an IP address too soon, this may be a customer who is trying to connect with you. Once blocked, you lose the ability to view debugging information since the packets get dropped before logging.
2. If we block an IP address too soon, we lose the ability to identify attack patterns and profile an attack. Having some data allows us to see progressive attacks spanning several IP addresses.


