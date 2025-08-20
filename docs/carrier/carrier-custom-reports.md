# Custom Reports

**Management :material-menu-right: Carrier :material-menu-right: Custom Reports**

## Overview

The **Custom Report** feature allows you to generate detailed, carrier-specific analytics beyond the standard reporting options.
This feature provides insights into call performance, quality, and usage metrics at a more granular level.

### Types of Reports

1. **ASR per Route Report**

The **ASR per Route Report** provides detailed visibility into the **Answer-Seizure Ratio** (ASR) for each individual route (**Provider Rate Card**) configured under a single carrier.

Instead of viewing ASR at the carrier level, this report breaks down performance per provider_card_id, making it easier to identify high-performing and low-performing routes.

The report consists the following key fields:

1. **Date_time** represents the reporting period or timestamp for which the call statistics are generated. This allows you to analyze ASR and ACD trends over specific time ranges, such as hourly, daily, or monthly.

2. **Provider_card_id** identifies the individual Provider Rate Card (Route) within a carrier. Since a single carrier may have multiple routes configured, this field ensures that the ASR and ACD values are reported for each route separately.

3. **ASR (Answer Seizure Ratio)** is a key performance metric that shows the percentage of successfully answered calls out of the total call attempts on a given route. It reflects how effectively calls are being connected.

4. **ACD (Average Call Duration)** indicates the average length of successfully answered calls on a route. It helps evaluate the quality of the call experience.

!!! question When to Use?
    Use this report to:
    1. Monitor the quality of individual routes within a carrier.
    2. Compare ASR performance across multiple routes.
    3. Identify and prioritize routes that deliver the best call completion rates.

## Steps to Generate Custom Reports

1. Login to your **Control Panel**.
2. Navigate to **Management :material-menu-right: Carrier :material-menu-right: Custom Reports**.
3. Select **ASR per Route**  for the selector drop-down and click on `Generate Report`.
4. Use the date selector to define the specific date range for which the report should be generated.

<img src="customrepcarrier.png" style="border: 2px solid #4472C4; border-radius: 8px;">
