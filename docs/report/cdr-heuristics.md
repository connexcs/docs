# CDR Heuristics

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Analytics & Reporting / CDR Heuristics<br> <strong>Audience</strong>: Administrators, Engineers, Routing Teams, Network Operations<br> <strong>Difficulty</strong>: Intermediate to Advanced<br> <strong>Time Required</strong>: Approximately 30–60 minutes for initial configuration and review; ongoing use for continuous monitoring<br> <strong>Prerequisites</strong>: Active ConnexCS account with CDR data available for analysis; familiarity with ASR, ACD, NER, PDD, FAS, carrier routing, and Least Cost Routing (LCR) concepts.<br> <strong>Related Topics</strong>: <a href="/customer-cdr/">CDR</a>, <a href="/report/report">Reports</a>, <a href="/carrier/">Carrier Management</a>, <a href="/routing-strategy/">Routing Strategy</a><br> <strong>Next Steps</strong>: Navigate to <strong>Reports > CDR Heuristics</strong>, select the required report type, specify the date range and provider, generate the report, and review the resulting findings.<br>

</details>

**Report :material-menu-right: CDR Heuristics**

!!! warning "Alpha Version"
    **CDR Heuristics** is currently an **Alpha** feature. The available analysis types, results, and functionality may change as the feature develops.

## Overview

The **CDR Heuristics** report analyzes **Call Detail Records (CDRs)** to provide additional insight into provider performance, traffic behavior, and potential issues.

The report provides multiple analysis types that can be used to examine provider quality metrics, failure patterns, provider relationships, and abnormal changes in traffic or performance.

The available report types are:

* **Metrics**
* **Modalities**
* **Convergence**
* **Anomalies**

## Using CDR Heuristics

1. Navigate to **Reports :material-menu-right: CDR Heuristics**.
2. Select the required **Report Type**.
3. Specify the required **Date Range**.
4. Select the required **Provider**.
5. Click **Generate Report**.
6. Review the generated results for the selected report type.

<img src="/reports/img/cdrheu1.png" style="border: 2px solid #4472C4; border-radius: 8px;">

> **Note:** The available results and analysis depend on the selected report type and the CDR data available for the selected period and provider.

## Report Types

### Metrics

The **Metrics** analysis compares provider quality metrics against peers handling the same traffic.

The analysis considers traffic characteristics such as:

* Destination
* Call type
* Traffic profile
* Peer performance

The following metrics are analyzed:

| Metric  | Description                 |
| ------- | --------------------------- |
| **ASR** | Answer-Seizure Ratio        |
| **ACD** | Average Call Duration       |
| **NER** | Network Effectiveness Ratio |
| **FAS** | False Answer Supervision    |
| **PDD** | Post-Dial Delay             |

Metrics analysis can help identify:

* Carriers blocking traffic
* False answer supervision
* Provider performance differences for LCR analysis
* Route quality degradation
* Carrier stability issues

#### Using Metrics

1. Navigate to **Reports :material-menu-right: CDR Heuristics**.
2. Specify the required **Date Range**.
3. Select the required **Provider**.
4. Click **Generate Report**.
5. Review the generated **Summary** and **Data** results.

!!! info "Analysis Threshold"
    The Metrics report displays the **Min Calls Threshold** used for the analysis in the generated report.

#### Metrics Report Results

The generated Metrics report provides two views:

* **Summary** — Provides a high-level overview of provider performance, destinations, and identified outliers.
* **Data** — Provides detailed information about individual outlier findings.

#### Summary

The **Summary** tab provides an overview of the generated Metrics report.

##### Report Information

The report displays:

| Field                   | Description                                        |
| ----------------------- | -------------------------------------------------- |
| **Generated**           | Date and time when the report was generated.       |
| **Period**              | Date range used for the analysis.                  |
| **Min Calls Threshold** | Minimum number of calls required for the analysis. |

##### Executive Summary

The **Executive Summary** provides an overview of the analyzed traffic.

| Field                         | Description                                                     |
| ----------------------------- | --------------------------------------------------------------- |
| **Active Providers**          | Number of providers included in the analysis.                   |
| **Destinations with Traffic** | Number of destinations with traffic during the selected period. |
| **Outlier Findings**          | Number of outlier findings identified by the analysis.          |

##### Provider Overview

The **Provider Overview** section provides a summary of provider performance.

| Field        | Description                                     |
| ------------ | ----------------------------------------------- |
| **Provider** | Provider included in the analysis.              |
| **Calls**    | Number of calls associated with the provider.   |
| **ASR**      | Answer-Seizure Ratio for the provider.          |
| **ACD**      | Average Call Duration for the provider.         |
| **NER**      | Network Effectiveness Ratio for the provider.   |
| **Issues**   | Issues or findings identified for the provider. |

##### Top Destinations

The **Top Destinations** section identifies destinations with traffic during the selected reporting period.

| Field           | Description                                            |
| --------------- | ------------------------------------------------------ |
| **Destination** | Destination associated with the traffic.               |
| **Total Calls** | Total number of calls associated with the destination. |

##### Outlier Analysis

The **Outlier Analysis** section summarizes significant deviations identified during the Metrics analysis.

When no significant outliers are identified for the selected period, the report indicates that no significant outliers were detected.

#### Data

The **Data** tab provides detailed information about individual outlier findings identified by the Metrics analysis.

At the top of the Data view, summary counters display the number of findings by severity:

| Counter            | Description                                  |
| ------------------ | -------------------------------------------- |
| **Total Outliers** | Total number of outlier findings identified. |
| **Critical**       | Number of Critical findings.                 |
| **High**           | Number of High findings.                     |
| **Medium**         | Number of Medium findings.                   |

The Data view also provides filtering options.

##### Search

Use the search field to search the available findings. Multiple search terms can be entered as comma-separated values.

##### Filter by Severity

Use **Filter by Severity** to filter findings according to their assigned severity.

##### Filter by Metric

Use **Filter by Metric** to filter findings according to the metric associated with the finding.

##### Outlier Details

The detailed findings table provides information about each identified outlier.

| Field           | Description                                                |
| --------------- | ---------------------------------------------------------- |
| **Carrier**     | Provider or carrier associated with the finding.           |
| **Destination** | Destination associated with the finding.                   |
| **Dest Code**   | Destination code associated with the finding.              |
| **Metric**      | Quality metric associated with the finding.                |
| **Value**       | Observed value of the selected metric.                     |
| **Peer Median** | Median value of the metric for the relevant peer group.    |
| **Delta**       | Difference between the observed value and the peer median. |
| **Severity**    | Severity assigned to the finding.                          |
| **Calls**       | Number of calls associated with the finding.               |
| **Peers**       | Number of peer providers considered in the comparison.     |
| **Description** | Description of the identified finding or deviation.        |

### Modalities

The **Modalities** analysis identifies failure dimensions that may explain why a provider is failing across particular traffic segments.

The analysis can identify patterns such as:

* CLI/A-number blocking
* Destination prefix filtering
* IP-based blocking
* Time-based degradation
* Routing inconsistencies

The following dimensions are analyzed:

| Dimension              | Description                    |
| ---------------------- | ------------------------------ |
| **CLI Prefix**         | Calling number ranges          |
| **Destination Prefix** | Called number ranges           |
| **Source IP**          | Originating traffic IP         |
| **Time Patterns**      | Hour- or day-based degradation |

#### Using Modalities

1. Navigate to **Reports :material-menu-right: CDR Heuristics**.
2. Select **Modalities** as the **Report Type**.
3. Specify the required **Date Range**.
4. Select the required **Provider**.
5. Click **Generate Report**.
6. Review the identified failure dimensions and findings.

Example findings may include:

* A provider blocks calls from specific CLI ranges.
* A carrier rejects traffic to particular destinations.
* Certain source IPs experience abnormal failure rates.
* Failures occur during peak traffic periods.

### Convergence

The **Convergence** analysis identifies providers that may be operating on the same underlying infrastructure.

This can help identify situations where multiple providers may not represent completely independent routing paths.

The analysis uses signals including:

| Signal                     | Description                          |
| -------------------------- | ------------------------------------ |
| **SIP Fingerprinting**     | Similar SIP response behavior        |
| **Co-Failure Correlation** | Providers failing on identical calls |
| **PDD Similarity**         | Similar timing characteristics       |
| **Media IP Overlap**       | Shared RTP infrastructure            |

#### Using Convergence

1. Navigate to **Reports :material-menu-right: CDR Heuristics**.
2. Select **Convergence** as the **Report Type**.
3. Specify the required **Date Range**.
4. Select the required **Provider**.
5. Click **Generate Report**.
6. Review the identified provider relationships and supporting signals.

Convergence analysis can help:

* Identify hidden network relationships.
* Identify potential shared points of failure.
* Improve routing diversity.
* Validate carrier redundancy.

### Anomalies

The **Anomalies** analysis identifies statistically abnormal changes in provider behavior.

The analysis monitors metrics including:

* ASR
* ACD
* NER
* FAS
* PDD
* Traffic Volume
* SIP Response Distribution

#### Using Anomalies

1. Navigate to **Reports :material-menu-right: CDR Heuristics**.
2. Select **Anomalies** as the **Report Type**.
3. Specify the required **Date Range**.
4. Select the required **Provider**.
5. Click **Generate Report**.
6. Review the detected anomalies and their assigned severity.

#### Severity Levels

Findings are assigned severity levels:

| Severity     | Description                      |
| ------------ | -------------------------------- |
| **Critical** | Immediate investigation required |
| **High**     | Significant operational concern  |
| **Medium**   | Monitor closely                  |

Examples of detected anomalies include:

* Sudden ASR drops
* FAS spikes
* Abnormal PDD increases
* Traffic volume surges
* Changes in SIP response distribution

## Analysis Output

Each analysis type provides different information to support investigation and operational analysis.

### Metrics Output

The **Metrics** analysis provides:

* Provider scorecards
* Destination analysis
* Outlier detection
* Severity-ranked findings
* Provider performance breakdowns

The generated Metrics report provides **Summary** and **Data** views, as described in the [Metrics Report Results](#metrics-report-results) section.

### Modalities Output

The **Modalities** analysis provides:

* Baseline failure rates
* Ranked failure dimensions
* Confidence scoring
* Effect-size calculations
* Failure bucket analysis

### Convergence Output

The **Convergence** analysis provides:

* Provider relationship graphs
* Affinity scores
* Shared infrastructure indicators
* Signal breakdowns
* Relationship confidence scoring

### Anomaly Output

The **Anomaly** analysis provides:

* Severity-based alerts
* Statistical deviation analysis
* Provider-specific anomaly tracking
* Rolling baseline comparisons

## Data Requirements

For statistically meaningful analysis, use sufficient historical CDR data.

The Metrics report displays the **Min Calls Threshold** used for the generated analysis.

The available results depend on the CDR data available for the selected **date range** and **provider**.

## Understanding the Results

### Peer Comparison

The **Metrics** analysis compares provider quality metrics against peers handling the same traffic.

This provides context for evaluating provider performance based on comparable traffic rather than reviewing provider metrics in isolation.

### Z-Score Severity

Where applicable to the analysis, Z-scores can be used to indicate how far an observed value deviates from an expected value.

| Z-Score | Meaning               |
| ------- | --------------------- |
| **2**   | Notable deviation     |
| **3**   | Significant deviation |
| **4+**  | Extreme deviation     |

### Effect Size

Effect size can be used to describe the difference between a failure bucket and the provider baseline.

| Effect Size | Interpretation          |
| ----------- | ----------------------- |
| **1×**      | Normal behavior         |
| **5×**      | Moderate issue          |
| **20×**     | Severe blocking pattern |

## Typical Operational Use Cases

CDR Heuristics can be used for:

### Routing Optimization

Analyze provider performance by destination and support routing analysis.

### Carrier Investigation

Investigate provider performance and identify traffic segments associated with failures or degradation.

### Provider Performance Analysis

Compare provider quality metrics such as ASR, ACD, and NER against peer performance.

### Network Relationship Analysis

Use **Convergence** analysis to investigate potential relationships or shared infrastructure between providers.

### Proactive Monitoring

Use **Anomalies** analysis to identify abnormal changes in provider behavior and traffic characteristics.

## Best Practices

* Select a date range that provides sufficient CDR data for analysis.
* Review provider metrics in the context of comparable traffic.
* Use **Metrics** to review provider quality and outliers.
* Use **Modalities** to investigate specific failure dimensions.
* Use **Convergence** to investigate potential provider relationships.
* Use **Anomalies** to identify abnormal changes in provider behavior.
* Review the detailed **Data** view when an outlier is identified in the Metrics report.
