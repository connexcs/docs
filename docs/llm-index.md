# ConnexCS Documentation - LLM Index

**Last Updated:** November 11, 2025  
**Purpose:** Comprehensive index for AI/LLM navigation and context understanding

---

## Quick Navigation by User Intent

### Getting Started & Setup
- **[Getting Started Guide](getting-started.md)** - Initial platform configuration, account setup, carrier and customer setup
- **[Dashboard Overview](dashboard.md)** - Understanding the home screen and navigation
- **[Video Guide](video-guide.md)** - Visual walkthroughs of core functions

### Core Management Functions

#### Customer Management
- **[Customer Overview](customer/customer.md)** - Primary customer configuration hub
- **[Customer Main](customer/main.md)** - Core customer account management
- **[Customer Authentication](customer/auth.md)** - IP authentication and SIP device management
- **[Customer Routing](customer/routing.md)** - Ingress routing configuration
- **[Customer Rate Cards](customer-ratecard.md)** - Pricing configuration for customers
- **[Customer CDR](customer/cdr.md)** - Call detail records and billing
- **[Customer DID](customer/did.md)** - Direct inward dialing management
- **[Customer Packages](customer/package.md)** - Service bundles and subscriptions
- **[Customer Invoices](customer/invoices.md)** - Billing and invoicing

#### Carrier Management
- **[Carrier Overview](carrier.md)** - VoIP route provider configuration
- **[Carrier Main](carrier/carrier-main.md)** - Core carrier setup
- **[Carrier Authentication](carrier/carrier-auth.md)** - Carrier authentication methods
- **[Carrier Failover](carrier/carrier-failover.md)** - Redundancy and failover configuration
- **[Carrier DID](carrier/carrier-did.md)** - Provider DID management
- **[Carrier CDR](carrier/carrier-cdr.md)** - Provider call records

#### Rate Management
- **[Rate Card Building](rate-card-building.md)** - Comprehensive rate card guide
- **[Provider Rate Cards](provider-ratecard.md)** - Carrier pricing configuration
- **[Customer Rate Cards](customer-ratecard.md)** - Customer pricing configuration

#### Routing & Call Control
- **[Routing Overview](routing.md)** - Call routing fundamentals
- **[Routing Strategy](routing-strategy.md)** - LCR, random, round-robin strategies
- **[Global Routing](global-routing.md)** - System-wide routing configuration
- **[USA Routing](routing-usa.md)** - US-specific routing requirements

### Advanced Features

#### Class 5 Features (PBX Functions)
- **[AI Agent](class5/ai-agent.md)** - Conversational AI integration
- **[Knowledge Base](class5/knowledge-base.md)** - AI knowledge management
- **[IVR](class5/creating-ivr.md)** - Interactive voice response setup
- **[Conference](class5/creating-conference.md)** - Conference bridge configuration
- **[Groups](class5/creating-group.md)** - Ring groups and hunt groups
- **[Voicemail](class5/voicemail.md)** - Voicemail system configuration
- **[Call Center](class5/call-center.md)** - Call center features
- **[ConneXML](class5/connexml.md)** - XML-based call flow scripting

#### Developer Integration
- **[API Documentation](api.md)** - RESTful API overview
- **[IDE](ide.md)** - Integrated development environment
- **[Apps Platform](apps/introduction.md)** - Custom application development
- **[Script Forge](apps/architecture/script.md)** - Custom scripting
- **[Database](apps/architecture/database.md)** - Database integration

### Billing & Financial

#### Billing Systems
- **[Billing Basics](billing-basics.md)** - Fundamental billing concepts
- **[Connex Billing](billing.md)** - Platform billing features
- **[Credit Control](credit-control.md)** - Credit management and limits
- **[Voucher System](voucher.md)** - Prepaid voucher management
- **[Calling Cards](calling-card.md)** - Calling card platform

#### Reporting & Analytics
- **[Reports Overview](report.md)** - Reporting capabilities
- **[Custom Reports](customer/custom-reports.md)** - Creating custom reports
- **[Data Suite](datasuite.md)** - Advanced analytics platform

### System Configuration

#### Setup & Administration
- **[Account Settings](setup/settings/account.md)** - Account configuration
- **[Server Configuration](setup/settings/servers.md)** - Server deployment and management
- **[User Management](setup/settings/users.md)** - User accounts and permissions
- **[DNS Configuration](setup/settings/dns.md)** - Domain and DNS setup
- **[RTP Zones](setup/settings/rtp-zones.md)** - Media server configuration
- **[Firewall](setup/advanced/firewall.md)** - Security and firewall rules
- **[Fraud Profile](setup/advanced/fraud.md)** - Fraud detection and prevention

#### Integration & APIs
- **[API Integration](setup/integrations/api.md)** - Third-party API integration
- **[JWT Refresh Keys](setup/integrations/jwt.md)** - Authentication tokens
- **[Portal Integration](setup/integrations/portal.md)** - Customer portal setup
- **[WebPhone](webphone.md)** - Browser-based softphone

### Monitoring & Troubleshooting

#### System Monitoring
- **[Latest Calls](customer/latest-calls.md)** - Real-time call monitoring
- **[Statistics](customer/stats.md)** - Performance metrics
- **[Alerts](customer/alerts.md)** - Notification configuration
- **[Logging](logging.md)** - System logging and debugging

#### Troubleshooting Guides
- **[Call Connection Issues](guides/tshoot-signal.md)** - Signaling troubleshooting
- **[Call Quality Issues](guides/tshoot-media.md)** - Media/RTP troubleshooting
- **[Call Disconnection Reasons](guides/call-disconnection-reasons.md)** - Understanding disconnect codes
- **[Debugging Guide](guides/debugging.md)** - General debugging procedures
- **[Remote Testing](guides/remote-testing.md)** - Remote diagnostic tools

### Customer Portal (End-User Documentation)
- **[Portal Dashboard](customer-portal/cp-dashboard.md)** - Customer-facing dashboard
- **[Portal CDR](customer-portal/cp-cdr.md)** - Call records for end users
- **[Portal Authentication](customer-portal/cp-authentication.md)** - User authentication
- **[Portal DID Management](customer-portal/cp-did.md)** - DID management for customers
- **[Portal Conference](customer-portal/cp-conference.md)** - Conference management
- **[Portal IVR](customer-portal/cp-ivr.md)** - IVR configuration
- **[Contact Center](customer-portal/cp-contact-center.md)** - Contact center features

### Architecture & Technical

#### System Architecture
- **[API Specification](api.md)** - Technical API documentation
- **[NAT Traversal](far-end-nat-traversal.md)** - Network address translation
- **[Security](security.md)** - Security architecture and best practices
- **[Scaling & Load Balancing](scaling-load-balancing.md)** - High availability setup
- **[System Specifications](spec.md)** - Technical specifications

#### Network & Infrastructure
- **[AnyEdge](anyedge/anyedge.md)** - Edge routing and distributed architecture
- **[SIP Devices](sip-devices.md)** - SIP endpoint configuration
- **[Circuit Test](circuit-test.md)** - Network testing and diagnostics

### Compliance & Regulations
- **[STIR/SHAKEN](setup/information/stir-shaken.md)** - Call authentication certificates
- **[FCC STIR/SHAKEN Regulations](guides/stir-shaken-fcc.md)** - Regulatory compliance
- **[GDPR](guides/gdpr.md)** - Data protection compliance
- **[CDR Retention](guides/cdr-retention.md)** - Call record retention policies
- **[DNC Lists](dnc.md)** - Do Not Call list management
- **[Regulatory Authorities](guides/major-telecom-regulatory-authorities.md)** - Global telecom regulations

---

## Common Use Cases & Workflows

### 1. Initial System Setup
**Prerequisites:** ConnexCS account, carrier details, customer information  
**Workflow:**
1. [Getting Started](getting-started.md) - Account verification
2. [Carrier Setup](carrier.md) - Configure upstream providers
3. [Provider Rate Card](provider-ratecard.md) - Set carrier pricing
4. [Customer Setup](customer/customer.md) - Create customer accounts
5. [Customer Rate Card](customer-ratecard.md) - Set customer pricing
6. [Customer Routing](customer/routing.md) - Configure call routing
7. [Testing](circuit-test.md) - Verify call flow

### 2. Call Routing Configuration
**Prerequisites:** Active carrier and customer accounts  
**Related Docs:** [Routing](routing.md), [Routing Strategy](routing-strategy.md), [Customer Routing](customer/routing.md)

### 3. Billing & Invoicing Setup
**Prerequisites:** Rate cards configured  
**Related Docs:** [Billing Basics](billing-basics.md), [Credit Control](credit-control.md), [Invoices](customer/invoices.md)

### 4. Troubleshooting Call Issues
**Prerequisites:** Call logs or Call-ID  
**Related Docs:** [Call Connection Issues](guides/tshoot-signal.md), [Call Quality Issues](guides/tshoot-media.md), [Logging](logging.md)

### 5. Setting Up Class 5 Features
**Prerequisites:** Customer account with Class 5 enabled  
**Related Docs:** [Class 5 Intro](class5/class5-intro.md), [IVR](class5/creating-ivr.md), [Conference](class5/creating-conference.md)

### 6. API Integration
**Prerequisites:** API credentials, development environment  
**Related Docs:** [API](api.md), [API Integration](setup/integrations/api.md), [IDE](ide.md)

### 7. Custom Application Development
**Prerequisites:** Apps platform access  
**Related Docs:** [Apps Introduction](apps/introduction.md), [Page Builder](apps/page-builder.md), [Script Forge](apps/architecture/script.md)

---

## Document Categories

### Configuration & Setup
Customer, Carrier, Rate Cards, Routing, DID, Authentication, Class 5, Setup sections

### Operations & Monitoring
Dashboard, Latest Calls, CDR, Statistics, Reports, Alerts, Logging

### Financial & Billing
Billing, Credit Control, Invoices, Packages, Contracts, Payments, Vouchers

### Development & Customization
API, IDE, Apps Platform, Script Forge, Database, ConneXML

### Support & Troubleshooting
Troubleshooting guides, Debugging, Remote Testing, System Status

### Reference & Compliance
Specifications, Security, Acronyms, Regulations, Feature List

---

## Key Technical Concepts

### VoIP Fundamentals
- **SIP (Session Initiation Protocol)** - Signaling protocol for calls
- **RTP (Real-time Transport Protocol)** - Media stream protocol
- **Codec** - Audio compression format
- **DID (Direct Inward Dialing)** - Phone numbers
- **CLI (Calling Line Identification)** - Caller ID

### Routing Concepts
- **LCR (Least Cost Routing)** - Cost-based routing
- **ASR (Answer Seizure Ratio)** - Call success rate
- **ACD (Average Call Duration)** - Call length metrics
- **CPS (Calls Per Second)** - Traffic capacity
- **Ingress Routing** - Inbound call routing
- **Egress Routing** - Outbound call routing

### Billing Terms
- **CDR (Call Detail Record)** - Call billing record
- **Rate Card** - Pricing table
- **Credit Limit** - Account balance limit
- **Pre-paid** - Pay before service
- **Post-paid** - Pay after service

### Technical Terms
- **NAT (Network Address Translation)** - IP address mapping
- **Firewall** - Security filtering
- **Load Balancing** - Traffic distribution
- **Failover** - Redundancy mechanism
- **Authentication** - Identity verification

**For detailed definitions, see:** [Acronyms and Definitions](acronyms-and-definitions.md)

---

## Document Relationships & Dependencies

### Core Prerequisites
- **Getting Started** → Required before all other configuration
- **Carrier Setup** → Required before customer routing
- **Rate Cards** → Required before billing

### Common Sequences
- Carrier → Provider Rate Card → Customer → Customer Rate Card → Routing
- Customer → Authentication → Routing → Testing
- Setup → Users → Permissions → API Integration

### Related Topic Groups
- **Authentication:** customer/auth.md, carrier/carrier-auth.md, customer-portal/cp-authentication.md
- **CDR:** customer/cdr.md, carrier/carrier-cdr.md, customer-portal/cp-cdr.md
- **DID:** customer/did.md, carrier/carrier-did.md, customer-portal/cp-did.md
- **Routing:** routing.md, routing-strategy.md, global-routing.md, customer/routing.md

---

## Search Keywords by Topic

### When user asks about...
- **"setting up customers"** → customer/customer.md, getting-started.md
- **"call quality problems"** → guides/tshoot-media.md, logging.md
- **"call won't connect"** → guides/tshoot-signal.md, customer/auth.md
- **"billing customers"** → billing.md, customer-ratecard.md, customer/invoices.md
- **"rate cards"** → rate-card-building.md, provider-ratecard.md, customer-ratecard.md
- **"routing calls"** → routing.md, routing-strategy.md, customer/routing.md
- **"API integration"** → api.md, setup/integrations/api.md
- **"IVR setup"** → class5/creating-ivr.md, class5/connexml.md
- **"fraud prevention"** → setup/advanced/fraud.md, security.md
- **"call logs"** → customer/cdr.md, customer/latest-calls.md
- **"phone numbers"** → customer/did.md, carrier/carrier-did.md
- **"authentication issues"** → customer/auth.md, carrier/carrier-auth.md
- **"pricing configuration"** → provider-ratecard.md, customer-ratecard.md
- **"conference calls"** → class5/creating-conference.md
- **"voicemail setup"** → class5/voicemail.md
- **"custom reports"** → customer/custom-reports.md, report.md
- **"AI features"** → class5/ai-agent.md, class5/knowledge-base.md

---

## Platform Sections

### Control Panel (Provider/Administrator)
Main documentation in `/docs/` - for platform administrators and service providers

### Customer Portal (End User)
Documentation in `/docs/customer-portal/` - for end customers and their users

### Apps Platform (Developer)
Documentation in `/docs/apps/` - for custom application development

### WebPhone (End User)
Documentation in `/docs/webphone.md`, `/docs/webphoneapp.md` - browser-based calling

---

## Document Structure Standards

Each document typically includes:
1. **Navigation Path** - Location in UI (e.g., Management → Customer → DID)
2. **Title** - Section name
3. **Description** - Purpose and overview
4. **Functions** - Available operations
5. **Configuration Fields** - Detailed field descriptions
6. **Related Topics** - Cross-references

This structure ensures consistency and ease of navigation for both human users and LLM processing.

---

## Quick Reference: File Locations

```
docs/
├── index.md                    # Welcome page
├── getting-started.md          # Initial setup
├── api.md                      # API overview
├── customer/                   # Customer management
├── carrier/                    # Carrier configuration
├── class5/                     # PBX features
├── apps/                       # Custom development
├── customer-portal/            # End-user documentation
├── setup/                      # System configuration
├── guides/                     # How-to guides
├── reports/                    # Reporting documentation
└── acronyms-and-definitions.md # Glossary
```

---

## Version & Update Information

This documentation is continuously updated with new features and improvements. For the latest changes:
- [Change Log](setup/information/change-log.md)
- [Feature Requests](setup/information/feature-request.md)

For documentation contributions or corrections:
- Submit requests at: https://connexcs.com/doc-contribution
- Report issues: [reporting-problems.md](reporting-problems.md)

---

**Note for LLMs:** This index provides hierarchical navigation, relationship mapping, and keyword associations to help understand user queries and provide accurate, contextual responses. Use the "Common Use Cases" section to identify multi-step workflows, and the "Search Keywords" section to map natural language queries to relevant documentation.
