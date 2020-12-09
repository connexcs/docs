# Detailed Features

The following is a comprehensive list of features included in the latest stable version of ConnexCS. 

## Customers

* Unlimited Customers
* Live Channel View.
* Prepay & Post Pay
* Approved Payments (e.g Bank Transfers)
* Auto Tax (Sales Tax / VAT)
* Email Confirmation on Payments.
* Minimum payment limit.
* [**Customer Level Channel & CPS Limitation**](https://docs.connexcs.com/limiting-cps/)
* [**Customer Portal**](https://docs.connexcs.com/customer-portal/customer-portal/)
* Tag Support
* Per Customer Custom Variables
* Meta Information Storage (Address, etc)
* Approved CLI's Only
* [**Email & Mobile Verification**](https://docs.connexcs.com/getting-started/#verify-contact-details)
* MRC Packages
* [**Invoices (See Billing)**](https://docs.connexcs.com/customer/invoices/)
* Document Management
* Auto-login to Customer Portal
* Auto Email Password
* Internal Number Range Assignment & Management
* [**Save Multiple Contacts & Designations**](https://docs.connexcs.com/customer/main/#contacts)
* Bulk Email & SMS

### Contracts

* [**Contract Management**](https://docs.connexcs.com/setup/config/contracts/#assign-contract-to-a-customer)
* Contract Revision Management
* Grace Period prior to contract approval
* Auto close route if contract not signed

### Alerts

* Multiple Receipients
* Balance / ACD / ASR / PDD / Consec Failure
* Send Alert to Email or SMS
* [**Test Alert**](https://docs.connexcs.com/customer/alerts/#test-and-alert)
* Customizable Reset Threshold
* Penalty for predefined time.

### Contacts

### Authentication

* Bulk Add IP
* Duplicate IP Detection & Warning
* [**IP Authentication**](https://docs.connexcs.com/authentication/#ip-authentication)
* Direction Selection (Inbound / Outbound Only)
* Endpoint Level Channel & CPS Limitation
* Codec Restrictions
* Non Standard Ports
* Perimiter Normalization (Advanced A & B Number Manipulization to get numbers in E164 format.)
* SIP Username / Password Authentication
* User Latency Measurement (Graphs)
* UDP / SIP Pinging
* IP Whitelist (for User / Password Auth)

## Providers

* Per Provider Card Capped Rate (Block calls that exceed a set cost per minute)
* Block calls with a connection cost
* Upstream carrier multiple endpoint loadbalancing (with weights)
* Per Provider Custom Variables
* SIP Code Rewriting
* Custom set failover code
* Alerts (See Customer Alerts)
* Consecutive Backoff (Reduce sending calls to failing providers)
* P-Asserted-ID Rules.
* Propagate Username.

### Authentication

* Outbound Proxy Support
* Perimiter De-Normalization (Send in the carriers required format)
* Codec Restrictions
* Carrier Username / Password Registration Support

## Rate Cards

* Origination / Termination
* Revisions
* NPANXX (Intrastate / Interstate / Indeterminate)
* LRN & DN
* Multi-Currency
* Tech Prefix Per Card
* Custom Rounding Method and Billing Precision
* CLI Restriction
* Capped Rate & Block Connect Cost
* Bulk Upload or Build in Browser
* Email Rate Card

### Compile Customer Cards

* From Carrier Cards
* Manual Ordering
* Attach Contract to a Customer Card
* Convert between NPANXX, LRN, Flat Rate, Single Cost, Currencies
* Auto calculate profits based Absolutely / Relatively / Percentage
* RegEx Filter & Build Rules

## Routing

* Global Routing Profiles
* Tags
* Temporarly Disable Customer Termination Routes
* Per Route CPS & Channel Limitations.
* Tech Prefix Support
* Single source IP many customer support.
* Dialstring Filtering
* Per Route Capped Rate (Block calls that exceed a set cost per minute)
* Block calls with a connection cost
* CPS Buffer (Add PDD to lower CPS Spikes)
* ASR+ (Cached Connectivity Prediction to lower upstream ASR)
* Per Route Scripting with ScriptForge
* Per Route Custom Variables
* Temporary Locking & Excluding of Carriers
* P-Assert-ID Management

### DID Management

* ToS (Disable DID)
* Serial Forking (Multiple Failover Destinations)
* Call Forwarding
* Route Internally / SIP User / External IP Address
* Channel and CPS Limitations
* Assign Package to DID
* Tags
* DID Driver Support (Connect Any Provider API)

### CLI Management

* CLI Whitelist
* Force CLI (if not in whitelist)
* RegEx Rewrite
* P-Assert-ID
* Orig / Term Rules

### Call Distribution

* Applicable Per Route or Per Prefix
* Tiered Distribution
* LCR - Least Cost Routing
* Random Distribution (Weighted)
* Round Robin Distribution
* Block Prefix
* Reverse LCR
* Manual

## Calling Cards

* Bulk Calling Card Generation
* Write your own calling card system
* Predefined Credit
* Topup Vouchers (via Customer Portal)
* Customer Template

## Provision Management

* Support for all major phones
* Phone Book Support
* Per Line Configuration
* Package Assignment
* Custom Variables
* Custom Templating
* Integrated with Calling Cards for softphone deployments


## Circuit Test

* Add your own Origination & Termination
* Manual or Automated Circuit Tests
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

* Integrated to Customer Portal
* Multiple Components
* Rate Card Support
* Incident History
* Incident Progression

## Control Panel

* Single control panel for all servers
* Realtime updates from server
* Smartphone Compatible
* Multi-Langauge
* Multi-Currency
* Multi-Timezone
* Microsoft / Google HMAC OTP
* YubiKey Hardware Security Token (WebAuthN)
* Duo Security
* Full API Support
* High Quality Data Tables with custom collations & data piviot
* Bulk Import
* Bulk Edit / Delete
* Quick Save
* Quick Help Buttons
* Per Page Audit Trails
* Live Channel Counters & Graphs
* Global Edit (Bulk view for customer components)
* International Numbering Plan Database

## Customer / Carrier Portal

* Whitelabel
* Customer / Carrier Signup
* Default Template Customer (Set Initial Credit, etc)
* Multiple Custom Domains Supported (Seperate Branding on each)
* Custom Permissions (30+ Options)
* Call Reporting
* Customisable CDR Downloads
* Email & Mobile Verification
* Self CLI Verification (via callback)
* Full API Support
* Upload your own Logo
* Customise your Portal
* Custom Forms
* Custom Origination Details
* Paypal, Stripe & Pending Bank Transfer Support
* Add Payment Details Text
* Add your own Javascript & CSS
* Free SSL Certificate for customer portal


## Class 5 PBX

* Custom Application Builder (Integration with ScriptForge)
* Conference (User & Moderator Pin Support)
* Voicemail to Email
* Custom Voicemail Message
* Voicemail Password
* Call Queues
    * Music on Hold
    * Perodic Announcements
    * Join Message
    * On Hook Agents
    * Off Hook Agents
* Parallel & Sequential Ring Groups
* Music on Hold
* IVR Menus

## Developer

* ScriptForge (Javascript) Applications
    * Routing
    * Class 5 Applications
    * UI Enhancement
    * Batch Processing
* Form Builder - Place custom data collection forms on Customer and Control Panel
* Analytics - Build your own Reports
* Userspace Database - Create your own databases
    * Real-time querying with ScriptForge
* Template Customisation
    * Emails
    * Form Submission Messages
    * Integration with ScriptForge
* Language Customisation (Enhance the system with your own Languages)
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

* Detailed Customisable Breakout Report
* Realtime / Daily / Monthly
* Per Customer & Per Route
* 3 Months minimum history
* Custom Date Range Selector
* Channels / ASR / ACD / Attempts / Connected / PDD
* DTMF Reporting (Count the amount of calls with DTMF passed)
* Failure Report
* CLI based ASR
* Provider Report Per Customer
* Channel / CPS Breach Graphs (Identify if calls are being blocked because of Channel / CPS Restiction)
* RTCP Reports (MOS / RTT / Packet Loss / Jitter)
* Build your own Reports
* Spend Report
* Profit Reports
* Customer / Provider Traffic Attribution
* Per Carrier Failover Report (Identify calls which failed, then succeeded through another carrier)
* Carrier Code Consistance (Compare Commonality of response codes for similar numbers between carriers)
* Cost per DTMF
* Scheduled Reports
* Per Number Analysis Reports
* Live SIP Registrations

## Technical Tools

### Call Logging

* Realtime call log (prior to CDR generation)
* SIP Registration Log
* Always on SIP Trace
* SIP Ladder Generation from Always on pcap
* Real-time calls dialog
* Call Simulation
* Comprehensive Call Information
* Media Information & Stats
* Real Time Searching
    * CallID
    * A & B Number
    * With & Without Prefix
    * Source IP

### Billing

* Invoice Generation
* MRC Packages
  * Start Date & End Dates
  * Auto Decrement Credit
  * Minimum spend (Bill the customer extra to make up for their min spend)
* Customer & Provider CDR's
* Invoice Format per destination or per day.
* Re-rating of calls if incorrectly setup.

### CDR

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

* Deploy Multiple Servers
* Deply in Multiple Zones Worldwide
* Instant Deployment
* Load Balancers / Dispatchers
* Custom UDP, TCP, TLS, WebRTC Ports
* Cluster Capabilities
    * Share Channel and CPS Allocations Globally
    * Inter call routing
    * Shared User Location Registration
* TLS Certificates free of charge (TLS & WebRTC)
* Capacity 302 Redirect

### SIP

* Topology Hiding
* Force NAT (Where NAT cant be detected).
* Intercept Reinivite (Handle Reinivites actively)
* Active SIP Pinging
* Advanced Session Timer Management (Active & Passive)
* Disconnect calls after X seconds
* Custom First Reply, Pre & Post Ring Timers

### Media

* 30+ RTP Servers distributed worldwide.
* Media Transcoding
* Direct RTP
* Wholesale Large Volume Call Recording
* SRTP Support
* ZRTP Passthrough
* Video Passthrough
* IPV4 & IPv6

### DNS

* Free Subdomain
* High Volume DNS Service
* Low TTL
* A Record Management
* SRV Record Management
* Low Latency Changes
* Failover Automation

## Security

### Users

* Multi User Login
* IP Restriction
* Multi Groups
* Users can below to many security groups
* Granular Permissions (80+ Definable Areas)
* Microsoft / Google HMAC OTP
* YubiKey Hardware Security Token (WebAuthN)
* Duo Security
* Idle Auto Logout

### Platform

* Firewall
* Auto Detect & Block Hack Attempts
* Platform Inteligence

## Integrations

* Paypal IPN
* Paypal Express Checkout
* Stripe (Credit Card, etc)
* Duo Security
* Moneris
* ScriptForge Driver (API Proxy in Javascript)

## Advanced Management

* Global Prefix Sets (Dialstrings / Strategy)

## AnyEdge

**Global AnyCast SIP**, highly scalable, lowest latency worldwide, eliminated SPOF on the edge.

* Dedicated IP Address
* SIP Packet Compression / Compaction
* SIP Packet Validation
* CPS Limits & CPS Breach Metrics
* Far End NAT Traversal (Customisable)
* Globally Redundant
* UDP / TCP / TLS / WebRTC Connectivity
* Free TLS Certificate
* Custom TLS Ciphers & Curves
* Optional Require & Verify Certificate
* Multi-domain support & config.
* 10K+ CPS
* 10Gbps DDoS Protection
* Registration Proxy
* Outbound Proxy
* Multiple Call Distribution Methods
* BYOD (ConnexCS Class 4 switching not needed)
* Zone based proximity routing

## API

* RESTful Customer Portal API (Can use your customer credentials to access)
* RESTful Control Panel API (80+ CRUD Endpoints)

We have done our best to compile a detailed feature list, however our product is growing day-by-day and this should be interpreted as a minimum, as with our powerful customisations, you can accomplish more.
