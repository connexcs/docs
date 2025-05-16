# Detailed Features

The following is a comprehensive list of features included in the latest stable version of ConnexCS.

## Customers

* Unlimited Customers
* [Live Channel View](https://docs.connexcs.com/dashboard/#live-channels)
* [Prepay & Post Pay](https://docs.connexcs.com/credit-control/#pre-pay-post-pay)
* Approved Payments (e.g Bank Transfers)
* Auto Tax (Sales Tax / VAT)
* Email Confirmation on Payments.
* Minimum payment limit.
* [Customer Level Channel & CPS Limitation](https://docs.connexcs.com/guides/channel-limitations/)
* [Customer Portal](https://docs.connexcs.com/customer-portal/cp-dashboard/)
* Tag Support
* Per Customer Custom Variables
* Meta Information Storage (Address, etc)
* Approved CLI's Only
* [Mobile Verification](https://docs.connexcs.com/getting-started/#mobile-verification)
* [Email Verification](https://docs.connexcs.com/getting-started/#email-verification)
* MRC Packages
* [Invoices (See Billing)](https://docs.connexcs.com/customer/invoices/)
* [Document Management](https://docs.connexcs.com/customer/documents/)
* [Auto login to Customer Portal](https://docs.connexcs.com/customer-portal/cp-dashboard/)
* Auto Email Password
* Internal Number Range Assignment & Management
* [Save Multiple Contacts & Designations](https://docs.connexcs.com/customer/main/#contacts)
* Bulk Email & SMS

### Contracts

* [Contract Management](https://docs.connexcs.com/setup/config/contracts/#assign-contract-to-a-customer)
* Contract Revision Management
* Grace Period before contract approval
* Auto close route if contract not signed

### Alerts

* Multiple Recipients
* [Balance / ACD / ASR / PDD / Consec Failure](https://docs.connexcs.com/acronyms-and-definitions/)
* [Send Alert to Email or SMS](https://docs.connexcs.com/customer/alerts/#create-an-alert)
* [Test Alert](https://docs.connexcs.com/customer/alerts/#test-and-alert)
* [Customizable Reset Threshold](https://docs.connexcs.com/customer/alerts/#create-an-alert)
* [Penalty for predefined time](https://docs.connexcs.com/customer/alerts/#create-an-alert)

### Contacts

### Authentication (Contacts)

* Bulk Add IP
* [Duplicate IP Detection & Warning](https://docs.connexcs.com/customer/auth/#enable-sip-user-authentication)
* [IP Authentication](https://docs.connexcs.com/global/#ip-authentication)
* [Direction Selection (Inbound / Outbound Only)](https://docs.connexcs.com/customer/auth/#enable-ip-authentication)
* [Endpoint Level Channel & CPS Limitation](https://docs.connexcs.com/guides/channel-limitations/)
* Codec Restrictions
* Non Standard Ports
* Perimeter Normalization (Advanced A & B Number Manipulation to get numbers in E164 format.)
* [SIP Username / Password Authentication](https://docs.connexcs.com/customer/auth/#sip-user-authentication)
* User Latency Measurement (Graphs)
* [UDP / SIP Pinging](https://docs.connexcs.com/customer/auth/#use-case-for-natsip-pings)
* IP Whitelist (for User / Password Auth)

## Providers

* [Per Provider Card Capped Rate (Block calls that exceed a set cost per minute)](https://docs.connexcs.com/customer/routing/#price-limits)
* [Block calls with a connection cost](https://docs.connexcs.com/routing-strategy/#blocking-calls)
* [Upstream carrier several endpoint load-balancing(with weights)](https://docs.connexcs.com/scaling-load-balancing/)
* Per Provider Custom Variables
* SIP Code Rewriting
* [Custom set failover code](https://docs.connexcs.com/customer-portal/failover/)
* [Alerts (See Customer Alerts)](https://docs.connexcs.com/customer/alerts/)
* Consecutive Backoff (Reduce sending calls to failing providers)
* P-Asserted-ID Rules.
* Propagate Username.

### Authentication (Providers)

* [Outbound Proxy Support](https://docs.connexcs.com/anyedge/anyedge/#outbound-proxy)
* Perimeter De-Normalization (Send in the carriers required format)
* Codec Restrictions
* Carrier Username / Password Registration Support

## Rate Cards

* Origination / Termination
* [Revisions](https://docs.connexcs.com/provider-ratecard/#revisions-tab)
* [NPANXX (Intrastate / Interstate / Indeterminate](https://docs.connexcs.com/routing-usa/))
* [LRN & DN](https://docs.connexcs.com/routing-usa/#local-routing-number-local-number-portability)
* Multi-Currency
* [Tech Prefix Per Card](https://docs.connexcs.com/rate-card-building/#different-length-prefixes)
* Custom Rounding Method and Billing Precision
* [CLI Restriction](https://docs.connexcs.com/video-guide/#cli-restrictions)
* [Capped Rate & Block Connect Cost](https://docs.connexcs.com/customer/routing/#price-limits)
* [Bulk Upload or Build in Browser](https://docs.connexcs.com/customer-ratecard/#create-a-customer-rate-card)
* [Email Rate Card](https://docs.connexcs.com/customer-ratecard/#configure-the-customer-rate-card)

### Compile Customer Cards

* From Carrier Cards
* Manual Ordering
* Attach Contract to a Customer Card
* [Convert between NPANXX, LRN, Flat Rate, Single Cost, Currencies](https://docs.connexcs.com/rate-card-building/#different-card-types)
* [Auto calculate profits based Absolutely / Relatively / Percentage](https://docs.connexcs.com/customer-ratecard/#main-tab)
* RegEx Filter & Build Rules

## Routing

* [Global Routing Profiles](https://docs.connexcs.com/global-routing/)
* [Tags](https://docs.connexcs.com/global-routing/#create-global-routing)
* Temporarily Disable Customer Termination Routes
* [Per Route CPS & Channel Limitations](https://docs.connexcs.com/customer/routing/#capacity-limits)
* [Tech Prefix Support](https://docs.connexcs.com/setup/advanced/prefix-set/)
* Single source IP; several customer support.
* Dialstring Filtering
* Per Route Capped Rate (Block calls that exceed a set cost per minute)
* [Block calls with a connection cost](https://docs.connexcs.com/routing-strategy/#blocking-calls)
* [CPS Buffer (Add PDD to lower CPS Spikes)](https://docs.connexcs.com/customer/routing/#capacity-limits)
* [ASR+ (Cached Connectivity Prediction to lower upstream ASR)](https://docs.connexcs.com/customer/routing/#answer-seizure-ratio-plus-details)
* Per Route Scripting with ScriptForge
* Per Route Custom Variables
* [Temporary Locking & Excluding of Carriers](https://docs.connexcs.com/customer/routing/#locks)
* P-Assert-ID Management

### Direct Inward Dial Management

* ToS (Disable DID)
* Serial Forking (Several Failover Destinations)
* [Call Forwarding](https://docs.connexcs.com/customer/did/#destination)
* Route Internally / SIP User / External IP Address
* [Channel and CPS Limitations](https://docs.connexcs.com/guides/channel-limitations/)
* Assign Package to DID
* Tags
* [DID Driver Support (Connect Any Provider API)](https://docs.connexcs.com/apps/architecture/script/#export)

### Caller Line Identification Management

* [CLI Whitelist](https://docs.connexcs.com/customer/cli/#allow-list-numbers-per-provider)
* [Force CLI (if not in whitelist)](https://docs.connexcs.com/customer/cli/#force-cli)
* [RegEx Rewrite](https://docs.connexcs.com/customer/cli/#advanced-cli-match-and-manipulation)
* [P-Assert-ID](https://docs.connexcs.com/customer/cli/#use-paid-as-cli)
* Orig / Term Rules

### Call Distribution

* Applicable Per Route or Per Prefix
* Tiered Distribution
* [LCR - Least Cost Routing](https://docs.connexcs.com/routing-strategy/)
* [Random Distribution (Weighted)](https://docs.connexcs.com/routing-strategy/)
* [Round Robin Distribution](https://docs.connexcs.com/routing-strategy/)
* Block Prefix
* [Reverse LCR](https://docs.connexcs.com/routing-strategy/)
* Manual

## Calling Cards

* Bulk Calling Card Generation
* Write your own calling card system
* Predefined Credit
* [Topup Vouchers (via Customer Portal)](https://docs.connexcs.com/voucher/)
* Customer Template

## Provision Management

* Support for all major phones
* Phone Book Support
* Per Line Configuration
* [Package Assignment](https://docs.connexcs.com/customer/package/)
* Custom Variables
* Custom Templating
* Integrated with Calling Cards for softphone deployments

## Circuit Test

* [Add your own Origination & Termination](https://docs.connexcs.com/circuit-test/)
* [Manual or Automated Circuit Tests](https://bani-ankmeg--connexcs-docs.netlify.app/circuit-test/#run-circuit-test)
* Measure:
    * CLI
    * PDD
    * MOS
    * Audio Engagement Delay
    * DTMF
    * Release Reason
    * 183/180 Delay
    * Answer / Release Propagation Latency
    * Codec

## Status Page

* [Integrated to Customer Portal](https://docs.connexcs.com/customer-portal/status/)
* [Multiple Components](https://docs.connexcs.com/customer-portal/status/)
* Rate Card Support
* [Incident History](https://docs.connexcs.com/customer-portal/status/)
* Incident Progression

## Control Panel

* Single control panel for all servers
* Realtime updates from server
* Smartphone Compatible
* [Multi-Langauge](https://docs.connexcs.com/changing-language/)
* Multi-Currency
* Multi-Timezone
* Microsoft / Google HMAC OTP
* YubiKey Hardware Security Token (WebAuthN)
* [Duo Security](https://docs.connexcs.com/security/#user-enhanced-security)
* [Full API Support](https://portal-api-docs.connexcs.com/)
* High Quality Data Tables with custom collations & data piviot
* Bulk Import
* [Bulk Edit / Delete](https://docs.connexcs.com/video-guide/#bulk-edit)
* Quick Save
* Quick Help Buttons
* Per Page Audit Trails
* [Live Channel Counters & Graphs](https://docs.connexcs.com/dashboard/#live-channels)
* Global Edit (Bulk view for customer components)
* International Numbering Plan Database

## Customer / Carrier Portal

* Whitelabel
* [Customer / Carrier Signup](https://docs.connexcs.com/setup/integrations/portal/#configuration-options)
* Default Template Customer (Set Initial Credit, etc)
* Several Custom Domains Supported (Separate Branding on each)
* Custom Permissions (30+ Options)
* [Call Reporting](https://docs.connexcs.com/customer-portal/cp-breakout/)
* Customizable CDR Downloads
* [Email Verification](https://docs.connexcs.com/getting-started/#email-verification)
* [Mobile Verification](https://docs.connexcs.com/getting-started/#mobile-verification)
* Self CLI Verification (via callback)
* Full API Support
* Upload your own Logo
* [Customise your Portal](https://docs.connexcs.com/setup/integrations/portal/)
* Custom Forms
* Custom Origination Details
* [Paypal, Stripe & Pending Bank Transfer Support](https://docs.connexcs.com/setup/integrations/api/)
* Add Payment Details Text
* Add your own Javascript & CSS
* [Free SSL Certificate for customer portal](https://docs.connexcs.com/security/#secure-sockets-layer-certificates-deployment)

## Class 5 Private Branch Exchange

* [Custom Application Builder (Integration with ScriptForge)](https://docs.connexcs.com/setup/config/templates/#scriptforge-integration)
* [Conference (User & Moderator Pin Support)](https://docs.connexcs.com/class5/creating-conference/#create-a-conference-call)
* [Voicemail to Email](https://docs.connexcs.com/class5/voicemail/)
* Custom Voicemail Message
* Voicemail Password
* [Call Queues ("Groups")](https://docs.connexcs.com/class5/creating-group/)
    * Music on Hold
    * Periodic Announcements
    * Join Message
    * On Hook Agents
    * Off Hook Agents
* [Parallel & Sequential Ring Groups](https://docs.connexcs.com/class5/creating-group/#group-call-routing-strategies)
* Music on Hold
* [IVR Menus](https://docs.connexcs.com/class5/creating-ivr/#create-an-interactive-voice-response)

## Developer

* [ScriptForge (Javascript) Applications](https://docs.connexcs.com/customer/routing/#scriptforge)
    * [Routing](https://docs.connexcs.com/customer/routing/)
    * [Class 5 Applications](https://docs.connexcs.com/class5/apps/)
    * UI Enhancement
    * Batch Processing
* [Pages - Place custom data collection forms on Customer and Control Panel](https://docs.connexcs.com/developers/pages/introduction/)
* [Analytics - Build your own Reports](https://docs.connexcs.com/developers/analytics/)
* Userspace Database - Create your own databases
    * Real-time querying with ScriptForge
* [Template Customisation](https://docs.connexcs.com/setup/config/templates/)
    * Emails
    * Form Submission Messages
    * [Integration with ScriptForge](https://docs.connexcs.com/setup/config/templates/#scriptforge-integration)
* [Language Customisation (Enhance the system with your own Languages)](https://docs.connexcs.com/changing-language/)
    * English
    * اللغة العربية
    * Deutsch
    * Español
    * Français
    * हिन्दी
    * 日本語
    * Kanuri
    * Português
    * Русский
    * తెలుగు
    * اردو
    * 中文
    * Add your own.

## Reporting

* Detailed Customizable Breakout Report
* Realtime / Daily / Monthly
* Per Customer & Per Route
* 3 Months minimum history
* Custom Date Range Selector
* Channels / ASR / ACD / Attempts / Connected / PDD
* [DTMF Reporting (Count the amount of calls with DTMF passed)](https://docs.connexcs.com/report/#dual-tone-multi-frequency)
* [Failure Report](https://docs.connexcs.com/reporting-problems/)
* CLI based ASR
* Provider Report Per Customer
* Channel / CPS Breach Graphs (Identify if blocked calls are because of Channel / CPS Restriction)
* RTCP Reports (MOS / RTT / Packet Loss / Jitter)
* Build your own Reports
* [Spend Report](https://docs.connexcs.com/report/)
* [Profit Reports](https://docs.connexcs.com/report/)
* Customer / Provider Traffic Attribution
* Per Carrier Failover Report (Identify calls which failed, then succeeded through another carrier)
* Carrier Code Consistence (Compare Commonality of response codes for similar numbers between carriers)
* [Cost per DTMF](https://docs.connexcs.com/report/#dual-tone-multi-frequency)
* [Scheduled Reports](https://docs.connexcs.com/report/)
* [Per Number Analysis Reports](https://docs.connexcs.com/report/#per-number)
* Live SIP Registrations

## Technical Tools

### Call Logging

* Realtime call log (before CDR generation)
* [SIP Registration Log](https://docs.connexcs.com/logging/#register-logging)
* [Always on SIP Trace](https://docs.connexcs.com/logging/#sip-traces)
* SIP Ladder Generation from Always on pcap
* Real-time calls dialog
* [Call Simulation](https://docs.connexcs.com/logging/#simulate)
* Comprehensive Call Information
* Media Information & Stats
* [Real Time Searching](https://docs.connexcs.com/logging/#searching-the-logs)
    * [Call ID](https://docs.connexcs.com/logging/#call-id-details)
    * A & B Number
    * With & Without Prefix
    * Source IP

### Billing

* [Invoice Generation](https://docs.connexcs.com/customer/invoices/#add-new-invoices)
* MRC Packages
  * Start Date & End Dates
  * Auto Decrement Credit
  * [Minimum spend (Bill the customer extra to make up for their min spend)](https://docs.connexcs.com/setup/config/packages/#add-package)
* Customer & Provider CDR's
* Invoice Format per destination or per day.
* [Re-rating of calls if incorrectly setup](https://docs.connexcs.com/customer/cdr/#recalculate-call-detail-record)

### Call Deatil Record

* In Browser Vie
* Download
* Custom Range
* Custom Columns
* Multi-vector Query Support
* Optionally Infinite Data Retention

## Infrastructure / Platform

* Backups
* Auto Archival
* Custom SMTP Server
* Built in SMS Delivery (SMS Cost included)

### Servers

* [Deploy Multiple Servers](https://docs.connexcs.com/setup/settings/servers/#deploy-a-server)
* Deploy in Multiple Zones Worldwide
* Instant Deployment
* Load Balancers / Dispatchers
* Custom UDP, TCP, TLS, WebRTC Ports
* [Cluster Capabilities](https://docs.connexcs.com/setup/settings/servers/#clusters)
    * Share Channel and CPS Allocations Globally
    * Inter call routing
    * Shared User Location Registration
* TLS Certificates free of charge (TLS & WebRTC)
* Capacity 302 Redirect

### Session Initiation Protocol

* Topology Hiding
* Force NAT (Where NAT detection isn't possible)
* Intercept Reinivite (Handle Reinivites actively)
* Active SIP Pinging
* Advanced Session Timer Management (Active & Passive)
* Disconnect calls after X seconds
* Custom First Reply, Pre & Post Ring Timers

### Media

* 30+ RTP Servers distributed worldwide.
* [Media Transcoding](https://docs.connexcs.com/customer/routing/#media)
* Direct RTP
* [Wholesale Large Volume Call Recording](https://docs.connexcs.com/customer-portal/cp-recording/)
* SRTP Support
* ZRTP Passthrough
* Video Passthrough
* IPV4 & IPv6

### Domain Name System

* Free Subdomain
* High Volume DNS Service
* Low TTL
* A Record Management
* [SRV Record Management](https://docs.connexcs.com/setup/settings/dns/#distribution-methods)
* Low Latency Changes
* [Failover Automation](https://docs.connexcs.com/customer-portal/failover/)

## Security

### Users

* Multi User Login
* IP Restriction
* Multi Groups
* Customers can use several security groups
* Granular Permissions (80+ Definable Areas)
* Microsoft / Google HMAC OTP
* YubiKey Hardware Security Token (WebAuthN)
* Duo Security
* Idle Auto Logout

### Platform

* [Firewall](https://docs.connexcs.com/security/#session-initiation-protocol-real-time-transport-protocol-firewall-block-on-default)
* Auto Detect & Block Hack Attempts
* Platform Intelligence

## Integrations

* [Paypal IPN](https://docs.connexcs.com/setup/integrations/api/#paypal-ipn-integration)
* [Paypal Express Checkout](https://docs.connexcs.com/setup/integrations/api/#available-integrations)
* [Stripe (Credit Card, etc)](https://docs.connexcs.com/setup/integrations/api/#available-integrations)
* [Duo Security](https://docs.connexcs.com/setup/integrations/api/#available-integrations)
* [Moneris](https://docs.connexcs.com/setup/integrations/api/#available-integrations)
* [ScriptForge Driver (API Proxy in Javascript)](https://docs.connexcs.com/setup/integrations/api/#available-integrations)

## Advanced Management

* Global Prefix Sets (Dialstrings / Strategy)

## AnyEdge

**Global AnyCast SIP**, highly scalable, lowest latency worldwide, eliminated SPOF on the edge.

* Dedicated IP Address
* [SIP Packet Compression / Compaction](https://docs.connexcs.com/anyedge/anyedge/#compaction-and-compression)
* [SIP Packet Validation](https://docs.connexcs.com/anyedge/anyedge/#sip-packet-validation)
* [CPS Limits & CPS Breach Metrics](https://docs.connexcs.com/anyedge/anyedge/#metrics)
* [Far End NAT Traversal (Customizable)](https://docs.connexcs.com/far-end-nat-traversal/#nat-detection-methods-used-by-connexcs)
* Globally Redundant
* UDP / TCP / TLS / WebRTC Connectivity
* Free TLS Certificate
* Custom TLS Ciphers & Curves
* Optional Require & Verify Certificate
* Multi-domain support & config.
* 10K+ CPS
* 10Gbps DDoS Protection
* [Registration Proxy](https://docs.connexcs.com/anyedge/anyedge/#registration-proxy)
* [Outbound Proxy](https://docs.connexcs.com/anyedge/anyedge/#outbound-proxy)
* Multiple Call Distribution Methods
* BYOD (ConnexCS Class 4 switching not needed)
* Zone based proximity routing

## Application Programming Interface

* [RESTful Customer Portal API (Can use your customer credentials to access)](https://docs.connexcs.com/api/)
* [RESTful Control Panel API(80+ CRUD Endpoints)](https://docs.connexcs.com/api/#customer-administration)

We've done our best to compile a detailed feature list. However our product is growing day-by-day and you should interpret this as a minimum. As with our powerful customizations, you can do more.
