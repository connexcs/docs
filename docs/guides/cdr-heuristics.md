# CDR Heuristics

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Analytics & Reporting → CDR Heuristics<br>
<strong>Audience</strong>: Administrators, Engineers, Routing Teams, Network Operations<br>
<strong>Difficulty</strong>: Intermediate to Advanced<br>
<strong>Time Required</strong>: Approximately 30–60 minutes (reading and initial configuration); ongoing use for continuous monitoring<br>
<strong>Prerequisites</strong>:
<ul>
<li>Active ConnexCS account with CDR data available for analysis.</li>
<li>Minimum 7 days of CDR data and at least 1,000 calls per provider for statistically meaningful results.</li>
<li>Basic understanding of VoIP quality metrics — ASR, ACD, NER, PDD, and FAS. See <a href="https://docs.connexcs.com/acronyms-and-definitions/">Acronyms and Definitions</a>.</li>
<li>Familiarity with carrier routing and Least Cost Routing (LCR) concepts.</li>
</ul>
<strong>Related Topics</strong>:
<a href="https://docs.connexcs.com/routing-strategy/">Routing Strategy</a> — apply heuristic findings to optimise carrier routing ·
<a href="https://docs.connexcs.com/carrier/">Carrier Management</a> — manage carriers identified through heuristic analysis ·
<a href="https://docs.connexcs.com/setup/advanced/fraud/">Fraud Profile</a> — complementary fraud detection controls ·
<a href="https://docs.connexcs.com/customer/cdr/">CDR</a> — the underlying call data used for heuristic analysis ·
<a href="https://docs.connexcs.com/guides/monitoring/">Monitoring</a> — broader platform monitoring guidance<br>
<strong>Next Steps</strong>: After reviewing this overview, run a <a href="#full-catalogue-analysis">Full Catalogue Analysis</a> to get a combined view of metrics, modalities, convergence, and anomaly findings. Then apply findings to your <a href="https://docs.connexcs.com/routing-strategy/">Routing Strategy</a> to optimise carrier selection.<br>
<strong>Need Help?</strong>: If you have insufficient CDR data for analysis or need assistance interpreting results, <a href="https://connexcs.com/contact-us">contact ConnexCS support</a>.<br>
<strong>Meta Description</strong>: Analyse carrier behaviour, detect routing failures, identify hidden network relationships, and optimise LCR decisions using CDR Heuristics in ConnexCS.<br>

</details>

## Overview

CDR Heuristics is a carrier intelligence and analytics platform within ConnexCS that analyses Call Detail Records (CDRs) to identify hidden carrier behaviour, routing issues, quality degradation, and network relationships.

It helps wholesale voice providers and routing teams make data-driven routing decisions by transforming raw CDR data into actionable operational insights.

The platform analyses carrier behaviour across multiple dimensions, including:

* Provider quality benchmarking
* Failure pattern detection
* Carrier convergence analysis
* Traffic anomaly detection
* AI-assisted operational insights

---

## Key Capabilities

### Provider Quality Benchmarking

CDR Heuristics compares providers against peers handling identical traffic.

Instead of evaluating carriers in isolation, the system analyses providers based on:

* Destination
* Call type
* Traffic profile
* Peer performance

This enables accurate identification of underperforming providers.

#### Metrics Analysed

| Metric| Description                 |
| ------| --------------------------- |
|**ASR**| Answer-Seizure Ratio        |
|**ACD**| Average Call Duration       |
|**NER**| Network Effectiveness Ratio |
|**FAS**| False Answer Supervision    |
|**PDD**| Post-Dial Delay             |

#### Example Use Cases

* Detect carriers blocking traffic
* Identify false answer supervision
* Compare providers for LCR optimisation
* Analyse route quality degradation
* Monitor carrier stability

---

### Failure Modality Analysis

Failure Modality Analysis identifies why a provider fails by analysing failure dimensions across traffic.

The system automatically detects:

* CLI/A-number blocking
* Destination prefix filtering
* IP-based blocking
* Time-based degradation patterns
* Routing inconsistencies

#### Dimensions Analysed

| Dimension             | Description                |
| ----------------------| -------------------------- |
|**CLI Prefix**         | Calling number ranges      |
|**Destination Prefix** | Called number ranges       |
|**Source IP**          | Originating traffic IP     |
|**Time Patterns**      | Hour/day-based degradation |

#### Example Findings

* Provider blocks all calls from specific CLI ranges
* Carrier rejects traffic to particular destinations
* Certain source IPs experience abnormal failure rates
* Failures occur during peak traffic periods

---

### Carrier Convergence Detection

Carrier Convergence Detection identifies providers that are likely operating on the same underlying infrastructure.

This prevents false redundancy assumptions when routing traffic across multiple providers.

#### Signals Used

| Signal                     | Description                    |
| ---------------------------| ------------------------------ |
| **SIP Fingerprinting**     | Similar SIP response behaviour |
| **Co-Failure Correlation** | Providers fail identical calls |
| **PDD Similarity**         | Similar timing characteristics |
| **Media IP Overlap**       | Shared RTP infrastructure      |

#### Benefits

* Detect hidden network relationships
* Avoid shared points of failure
* Improve routing diversity
* Validate carrier redundancy claims

---

### Anomaly Detection

Anomaly Detection continuously monitors provider behaviour and identifies statistically abnormal events.

#### Metrics Monitored

* ASR
* ACD
* NER
* FAS
* PDD
* Traffic Volume
* SIP Response Distribution

#### Alert Severity Levels

| Severity | Description                      |
| -------- | -------------------------------- |
| **Critical**| Immediate investigation required |
| **High** | Significant operational concern  |
| **Medium**| Monitor closely                  |

#### Example Alerts

* Sudden ASR drop
* FAS spike
* Abnormal PDD increase
* Traffic volume surge
* SIP response distribution changes

---

## Analysis Types

### Metrics Analysis

Compares provider performance against peer carriers.

#### Output Includes

* Provider scorecards
* Destination analysis
* Outlier detection
* Severity-ranked findings
* Provider performance breakdowns

---

### Modalities Analysis

Ranks failure dimensions based on explanatory power.

#### Output Includes

* Baseline failure rates
* Ranked failure dimensions
* Confidence scoring
* Effect size calculations
* Failure bucket analysis

---

### Convergence Analysis

Identifies provider affinity relationships.

#### Output Includes

* Provider relationship graphs
* Affinity scores
* Shared infrastructure indicators
* Signal breakdowns
* Relationship confidence scoring

---

### Anomaly Analysis

Detects operational behaviour changes.

#### Output Includes

* Severity-based alerting
* Statistical deviation analysis
* Provider-specific anomaly tracking
* Rolling baseline comparison

---

### Full Catalogue Analysis

Runs all analyses together and combines findings into a single operational view.

#### Combined Output Includes

* Metrics findings
* Modality findings
* Convergence relationships
* Anomaly alerts
* AI-generated operational summaries
* Prioritised recommendations

---

## How It Works

CDR Heuristics analyses existing CDR data using pre-computed aggregations and statistical models.

### Input

* Call Detail Records (CDRs)
* SIP response codes
* RTP/media information
* Provider metadata
* Routing information

### Processing

The platform performs:

1. Statistical benchmarking
2. Pattern analysis
3. Correlation analysis
4. Baseline modelling
5. Anomaly detection
6. Affinity scoring

### Output

* Reports
* Interactive visualisations
* Operational alerts
* Carrier relationship mapping
* AI-assisted summaries

---

## Data Requirements

| Requirement                     | Recommended Value |
| --------------------------------| ----------------- |
| **Minimum Analysis Period**     | 7 days            |
| **Recommended Analysis Window** | 7–14 days         |
| **Minimum Calls per Provider**  | 1,000             |

Providers below the minimum threshold may be excluded from analysis due to insufficient statistical significance.

---

## Understanding the Results

### Peer Comparison

Providers are compared against other providers carrying the same traffic profile rather than global averages.

This ensures accurate benchmarking regardless of destination-specific traffic behaviour.

---

### Z-Score Severity

Z-scores measure how far a provider deviates from expected behaviour.

| Z-Score | Meaning               |
| ------- | --------------------- |
| **2**| Notable deviation     |
| **3** | Significant deviation |
| **4+**| Extreme deviation     |

---

### Effect Size

Effect size measures how much worse a failure bucket performs compared to the provider baseline.

| Effect Size | Interpretation          |
| ----------- | ----------------------- |
| **1×**| Normal behaviour        |
| **5×**| Moderate issue          |
| **20×** | Severe blocking pattern |

---

## Typical Operational Use Cases

### Routing Optimisation

Identify the best-performing providers per destination and optimise LCR decisions.

---

### Carrier Investigation

Determine why specific routes or traffic segments are failing.

---

### Fraud and Billing Detection

Detect false answer supervision and abnormal call behaviour.

---

### Network Redundancy Validation

Identify providers sharing the same infrastructure to avoid hidden single points of failure.

---

### Proactive Monitoring

Detect provider degradation before customer complaints occur.

---

## Security and Data Privacy

All analysis is performed within the customer infrastructure.

No CDR data leaves the deployment environment unless explicitly configured.

Optional AI summarisation features can be enabled separately.

---

## Best Practices

* Use a minimum 7-day analysis window
* Compare providers only on equivalent traffic
* Review anomaly alerts daily
* Validate carrier redundancy using convergence analysis
* Monitor FAS and PDD trends continuously
* Combine modality and anomaly analysis for troubleshooting

---
