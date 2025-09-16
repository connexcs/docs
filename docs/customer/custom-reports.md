# Custom Reports

**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Custom Reports**

## Overview

The **Custom Reports** section provides advanced reporting options for analyzing specific aspects of customer activity and call handling.

These reports go beyond standard CDRs, giving you targeted insights into areas such as DTMF input, Rate Center distribution, and Technical Routing Prefixes.

## Types of Reports

### DTMF Report

It tracks DTMF (keypad input) signals sent during calls.

Its useful for troubleshooting IVR input or verifying whether key presses are being captured correctly.

The report includes the following key fields:

+ **dt**: Takes the date-time (dt) field from the Call Detail Record (CDR) and rounds it down to the start of the hour. This allows all calls within the same hour to be grouped together for reporting.

+ **provider_id**: The unique identifier of the provider handling the call. Used to track DTMF activity per provider.

+ **customer_charge**: Total charges billed to customers for all calls in the selected period.

+ **provider_charge**: Total charges incurred from providers for the same calls.

+ **dtmf_count**:Counts the number of calls where DTMF tones were detected.

### USA Rate Center Report

The USA Rate Center Report breaks down call activity based on the originating or terminating rate centers within the United States.

It's especially useful for customers who need visibility into call routing, billing, and usage patterns across different regions.

The report includes the following key fields:

+ **Prefix**: The dialed number prefix associated with the call.

+ **RC (Rate Center)**: The specific geographic rate center in the U.S. tied to the prefix.

+ **Total Customer Charge**: The total amount billed to the customer for calls in that rate center.

+ **Total Provider Charge**: The total cost charged by the upstream provider for those calls.

+ **Call Count**: The number of calls associated with that rate center.

This report helps compare **Customer Charges** and **Provider Costs** at a regional level, ensuring accurate billing and visibility into traffic distribution.

<img src="/customer/img/customrep1.png" style="border: 2px solid #4472C4; border-radius: 8px;">

### DID As CLI

The DID as CLI Report displays all DIDs in the system that have been used as Caller Line Identification (CLI) within a specified month.

The results are automatically grouped by account. This makes  it easy to track usage, verify compliance, and analyze account-level activity.

The report includes the following key fields:

+ **Dest_cli**: It shows the phone number (DID) that has been used as the outgoing caller ID in calls. Essentially, it helps track which DIDs from your system were presented as CLI to the called party.

+ **Count(0)**: It represents the total number of times each DID (shown in `Dest_cli`) was used as a CLI within the selected reporting period. It counts the occurrences of calls where that DID appeared as the caller ID.

<img src="/customer/img/customrep2.png" style="border: 2px solid #4472C4; border-radius: 8px;">

### Group By Tech Prefix

The Group by Tech Prefix Report provides a breakdown of call statistics based on routing technical prefixes.

It automatically calculates performance metrics such as:

+ **ASR (Answer-Seizure Ratio)**: The percentage of successfully connected calls.

+ **ACD (Average Call Duration)**: The average length of answered calls.

This eliminates the need to calculate these values manually, saving time and reducing errors.

!!! question "When to Use?"
    1. Monitor call quality across different routing prefixes.
    2. Identify underperforming routes or providers.
    3. Optimize routing strategies for better efficiency and reliability.

The report includes the following fields:

+ **Tech_prefix**: The technical prefix used to identify a specific routing path or trunk.

+ **ASR (Answer-Seizure Ratio)** : ercentage of successfully connected calls versus total attempts, measuring call success rate.

+ **ACD (Average Call Duration)**: The average duration of connected calls, used to evaluate call quality and customer engagement.

+ **Answered_calls**: The total number of calls that were successfully answered.

+ **Total**: The total number of call attempts made through the prefix (answered + unanswered).

<img src="/customer/img/customrep3.png" style="border: 2px solid #4472C4; border-radius: 8px;">

|**Report Type**|**Purpose**|**Use Case**|
| --------------|-----------|-------------|
|**DTMF Report**| Tracks DTMF (Dual-Tone Multi-Frequency) signals sent during calls.| Useful for troubleshooting IVR issues, missed key presses, or validating customer interactions.|
|**USA Rate Center**| Groups calls by U.S. rate centers to analyze charges and call volume.| Helps compare customer billing vs. provider costs, identify high-volume rate centers, and margin analysis.|
|**DID as CLI Report**| Shows calls where DIDs are used as Caller Line Identification (CLI).| Useful for compliance and ensuring proper CLI presentation per regulations or business rules.|
|**Group by Tech Prefix** | Breaks down call statistics by routing **technical prefixes**.| Optimizes routing by analyzing quality/performance across prefixes. Helps detect failing routes.|

## Steps to Generate Custom Reports

1. Login to your **Control Panel**.
2. Navigate to **Management :material-menu-right: Customer :material-menu-right: Customer [Name] :material-menu-right: Custom Reports**.
3. Use the report selector to choose the desired report type, then click **Generate Report** to create it.
4. Use the date selector to define the specific date range for which the report should be generated.

<img src="/customer/img/customrep4.png" style="border: 2px solid #4472C4; border-radius: 8px;">
