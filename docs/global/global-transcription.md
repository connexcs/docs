---
title: "Global Transcription | Account-wide Call Transcription & Classifier | ConnexCS"
description: "View, search and classify transcribed calls across all customers from Global Transcription in ConnexCS, using the same Conversations, Raw, Key Phrase Lookup and Classifier tools as the customer view."
search:
  boost: 3
---

# Transcription

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Global / Call Transcription<br>
<strong>Audience</strong>: Administrators, Engineers, Support, Analytics & Compliance Teams<br>
<strong>Difficulty</strong>: Beginner to Intermediate<br>
<strong>Time Required</strong>: Approximately 10–20 minutes<br>
<strong>Prerequisites</strong>:
<ul>
<li>Active ConnexCS account with Transcription enabled — this is a paid feature; check <a href="https://connexcs.com/pricing">Pricing</a> before setup.</li>
<li>Transcription enabled on each customer whose calls you want to see (see <a href="/customer/transcriptions/#step-2-enable-transcription-for-the-customer">Enable Transcription for the Customer</a>).</li>
<li>Familiarity with the <a href="/customer/transcriptions/">Customer Transcription</a> page, which documents every tab and field used here.</li>
</ul>
<strong>Related Topics</strong>:
<a href="/customer/transcriptions/">Customer – Transcription</a> — full reference for every tab and field ·
<a href="https://docs.connexcs.com/customer/routing/">Customer – Routing</a> — enable transcription and sampling per customer ·
<a href="https://docs.connexcs.com/customer/alerts/">Customer – Alerts</a> — alert recipients for transcription events ·
<a href="https://docs.connexcs.com/setup/advanced/fraud/">Fraud Profile</a> — complementary fraud monitoring controls<br>
<strong>Next Steps</strong>: <a href="#recommended-setup-order">Set up the Classifier</a> for your customers, then review account-wide outcomes on the <a href="/customer/transcriptions/#results">Results</a> sub-tab.<br>
<strong>Need Help?</strong>: If the Enable Transcription option isn't visible in your account, or you need transcription in a language other than English, <a href="https://connexcs.com/contact-us">contact ConnexCS support</a>.<br>
<strong>Meta Description</strong>: View, search and classify transcribed calls across all customers in ConnexCS Global Transcription, with links to the full Customer Transcription reference.<br>

</details>

**Global :material-menu-right: Transcription**

## Overview

**Global Transcription** gives you an account-wide view of transcription. It has the same interface and works the same way as [**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Transcription**](/customer/transcriptions/), but instead of showing one customer's calls, it shows **all customers' calls** in one place.

Use Global Transcription to:

+ Review and search transcribed calls across your whole customer base.
+ Create and manage Query Profiles that apply to all customers or to any individual customer.
+ Set up classifiers, policies and assignments for every customer from one screen.
+ Monitor classification results and spot fraud or compliance issues across the account.

!!! info "Same interface, wider scope"
    Every tab, field and button on this page is documented on the [**Customer Transcription**](/customer/transcriptions/) page. This page explains only what's different at the global level and links to the relevant section for full details.

## Customer vs Global Transcription

| | Customer Transcription | Global Transcription |
|---|---|---|
| **Location** | **Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Transcription** | **Global :material-menu-right: Transcription** |
| **Calls shown** | Only the selected customer's calls | Calls from all customers |
| **Best for** | Investigating a single customer, disputes, setup checks | Account-wide monitoring, fraud and compliance trends, managing rules for many customers |
| **Tabs** | Conversations, Raw, Key Phrase Lookup, Classifier (Beta) | Same |

## Before You Begin

Calls appear in Global Transcription only for customers that have transcription switched on. Setup is the same as for a single customer:

1. [Enable Transcription on your account](/customer/transcriptions/#step-1-enable-transcription-on-your-account) under **Setup :material-menu-right: Config :material-menu-right: Packages**.
2. [Enable Transcription for each customer](/customer/transcriptions/#step-2-enable-transcription-for-the-customer) under **Ingress Routing :material-menu-right: Media :material-menu-right: Transcribe**, choosing a sampling level and optional duration limit.

!!! note "Recorded calls only"
    Only recorded calls are transcribed, and only the sampled percentage of each customer's calls appears.

## Using Global Transcription

Navigate to **Global :material-menu-right: Transcription**. The page has the same four tabs as the customer view.

### Conversations

Lists transcribed calls from **all customers**, grouped by date, with the caller, dialed number, time, duration and message count for each call.

| Topic | Details |
|-------|---------|
| Reading the list | [Understanding the Conversation List](/customer/transcriptions/#understanding-the-conversation-list) |
| Finding a call by Call ID or number | [Search](/customer/transcriptions/#search) |
| Date, minimum duration, minimum segments, group by and sort | [Filter](/customer/transcriptions/#filter) |
| Reloading the list | [Refresh](/customer/transcriptions/#refresh) |

### Raw

Shows individual transcript segments from **all customers**. At the global level the **Customer Name** column is especially useful, because results come from many customers; use the column filter or the **Filters** side panel to narrow results to one customer.

| Topic | Details |
|-------|---------|
| Filter words drop-down, query field and search button | [Search Bar](/customer/transcriptions/#search-bar) |
| Call ID, Date, Customer Name, Text, Leg and Score | [Results Grid](/customer/transcriptions/#results-grid) |
| Columns, Filters and Custom Settings | [Side Panel](/customer/transcriptions/#side-panel-columns-filters-and-custom-settings) |
| AND, OR, NOT and exact-phrase searches | [Query Syntax](/customer/transcriptions/#query-syntax) |

### Key Phrase Lookup

Lists the Query Profiles for **all customers**. From here you can create profiles that apply to every customer or to one specific customer.

!!! tip "Account-wide profiles"
    When creating a profile, leave **Customer Name** as **None** to apply it across all customers, for example a company-wide profanity or scam-phrase filter. Select a customer to create a profile for that customer only.

| Topic | Details |
|-------|---------|
| Add, Refresh, Delete and Search | [Toolbar](/customer/transcriptions/#toolbar) |
| Name, Query, Customer Name, Visibility and Action | [Query Profile Columns](/customer/transcriptions/#query-profile-columns) |
| Creating a profile, Visibility (Private / Public) and Action (Trigger Alert / Immediate Hangup) | [Create a Customer Query Profile](/customer/transcriptions/#create-a-customer-query-profile) |
| Writing queries | [Query Syntax](/customer/transcriptions/#query-syntax) |
| Getting notified when a profile matches | [Set Up Transcription Alerts](/customer/transcriptions/#set-up-transcription-alerts) |

### Classifier <sup>Beta</sup>

Uses an AI model to classify transcribed calls from **all customers** and act on the results. The Classifier works the same way as in the customer view; the global view is the most convenient place to manage it because the Assignments, Policies and Results sub-tabs already cover every customer.

!!! warning "Beta Version"
    The Classifier is in **Beta**. Review results before relying on them for compliance, billing or call-blocking decisions.

#### Recommended Setup Order

!!! note "Recommended setup order"
    To use the Classifier tab efficiently, set it up in this order:

    1. **Create a classifier** on the [Classifiers](/customer/transcriptions/#classifiers) sub-tab (or duplicate the ConnexCS classifier to customise it).
    2. **Attach the classifier to a policy** on the [Policies](/customer/transcriptions/#policies) sub-tab by selecting it in the policy's **Classifier** field and setting the conditions and action.
    3. **Assign the classifier to the customer** on the [Assignments](/customer/transcriptions/#assignments) sub-tab. From Global Transcription you can set the **All customers (default)** classifier for every customer, or add an override for individual customers.

    Once all three are in place, the customers' calls are classified and the policy is evaluated. Check [Results](/customer/transcriptions/#results) to confirm everything is working.

| Topic | Details |
|-------|---------|
| Classifiers, policies, assignments and results explained | [How Call Classification Works](/customer/transcriptions/#how-call-classification-works) |
| Shadow vs Active | [Shadow and Active Modes](/customer/transcriptions/#shadow-and-active-modes) |
| Account-wide default, customer overrides and opting customers out | [Assignments](/customer/transcriptions/#assignments) |
| Classifier list, search and actions | [Classifiers](/customer/transcriptions/#classifiers) |
| Viewing a classifier and its questions | [Viewing a Classifier](/customer/transcriptions/#viewing-a-classifier) |
| New classifier fields and Advanced timing | [Create a New Classifier](/customer/transcriptions/#create-a-new-classifier) |
| Policy list, filter drop-downs and columns | [Policies](/customer/transcriptions/#policies) |
| New policy fields, conditions, actions and Advanced settings | [Create a New Policy](/customer/transcriptions/#create-a-new-policy) |
| Results filters and columns | [Results](/customer/transcriptions/#results) |
| Call category, characteristics, maliciousness, risk chart, rule matches and transcript | [Call Classification Details](/customer/transcriptions/#call-classification-details) |

!!! tip "Use the customer filters"
    At the global level, the **All customers** drop-downs on the **Policies** and **Results** sub-tabs let you narrow the view to one customer without leaving the page.

## Best Practices and Troubleshooting

The same guidance applies at the global level:

+ [Best Practices](/customer/transcriptions/#best-practices) for writing queries and naming profiles.
+ [Troubleshooting](/customer/transcriptions/#troubleshooting) for missing calls, incomplete transcripts and other common issues.

!!! tip "A customer's calls are missing from Global Transcription"
    Check that transcription is enabled on that customer's route (**Ingress Routing :material-menu-right: Media :material-menu-right: Transcribe**) and that sampling isn't set too low.