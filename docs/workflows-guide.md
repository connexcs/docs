# Common Workflows Guide

**Purpose:** Step-by-step workflows for common tasks in ConnexCS  
**Audience:** Administrators, Support Engineers, Developers  
**Last Updated:** November 11, 2025

---

## Quick Start Workflows

### 1. Initial Platform Setup (New Account)

**Time Required:** 2-4 hours  
**Difficulty:** Beginner  
**Prerequisites:** ConnexCS account created

#### Steps:

1. **Account Verification** ([Getting Started](getting-started.md))
   - Verify email address
   - Verify mobile number
   - Complete company information
   - Configure profile settings

2. **Configure Carrier** ([Carrier Setup](carrier.md))
   - Navigate to **Management → Carrier**
   - Click **+** to add new carrier
   - Enter carrier name and basic information
   - Configure authentication in [Carrier Auth](carrier/carrier-auth.md)
   - Set up failover if needed ([Carrier Failover](carrier/carrier-failover.md))

3. **Create Provider Rate Card** ([Provider Rate Card](provider-ratecard.md))
   - Navigate to **Management → Rate Card → Provider Rate Card**
   - Upload carrier pricing or create manually
   - Test rate lookups

4. **Configure Customer** ([Customer Setup](customer/customer.md))
   - Navigate to **Management → Customer**
   - Click **+** to add new customer
   - Enter customer details
   - Configure authentication ([Customer Auth](customer/auth.md))

5. **Create Customer Rate Card** ([Customer Rate Card](customer-ratecard.md))
   - Navigate to **Management → Rate Card → Customer Rate Card**
   - Create markup over provider rates
   - Test customer pricing

6. **Configure Routing** ([Customer Routing](customer/routing.md))
   - Go to **Customer → Routing → Ingress Routing**
   - Add new route
   - Select carrier and rate cards
   - Configure routing strategy

7. **Test Configuration** ([Circuit Test](circuit-test.md))
   - Use Circuit Test tool
   - Make test calls
   - Verify call flow in [Latest Calls](customer/latest-calls.md)
   - Check [Logging](logging.md) if issues occur

**Success Criteria:**
- ✓ Test call completes successfully
- ✓ CDR appears in system
- ✓ Correct pricing applied

---

### 2. Troubleshooting Call Connection Issues

**Time Required:** 15-30 minutes  
**Difficulty:** Intermediate  
**Prerequisites:** Call-ID or approximate call time

#### Workflow:

1. **Locate Call Information** ([Latest Calls](customer/latest-calls.md))
   - Navigate to **Customer → Latest Calls** or **Global → Latest Calls**
   - Search by:
     - Call-ID (most precise)
     - Phone number (CLI or destination)
     - Time range
     - Customer name

2. **Review Call Details**
   - Check call status (connected, failed, etc.)
   - Note disconnect reason code
   - Review call duration (if connected)

3. **Access SIP Trace** ([Logging](logging.md))
   - Click on call record
   - Open SIP trace/dialog
   - Look for error responses (4xx, 5xx codes)
   - Common issues:
     - **401/407:** Authentication failure → Check [Customer Auth](customer/auth.md)
     - **403:** Forbidden → Check routing permissions
     - **404:** Not found → Check number format/routing
     - **480:** Temporarily unavailable
     - **486:** Busy here
     - **503:** Service unavailable → Check carrier status

4. **Check Authentication** (if auth failures)
   - Verify IP address in [Customer Auth](customer/auth.md)
   - Check SIP username/password
   - Review firewall rules ([Firewall](setup/advanced/firewall.md))

5. **Verify Routing Configuration** ([Customer Routing](customer/routing.md))
   - Check routing rules exist for destination
   - Verify rate card coverage
   - Check tech prefix (if used)
   - Review dial string restrictions

6. **Test with Circuit Test** ([Circuit Test](circuit-test.md))
   - Use Circuit Test for controlled testing
   - Compare results with actual calls

7. **Check Carrier Status**
   - Review [Carrier Latest Calls](carrier/carrier-latest-calls.md)
   - Check for carrier alerts
   - Verify carrier authentication

**Resolution Paths:**
- Auth issues → Update [Customer Auth](customer/auth.md) or [Carrier Auth](carrier/carrier-auth.md)
- Routing issues → Modify [Customer Routing](customer/routing.md)
- Rate card gaps → Update rate cards
- Carrier problems → Contact carrier or enable failover

**Reference:** [Call Connection Troubleshooting](guides/tshoot-signal.md)

---

### 3. Troubleshooting Call Quality Issues

**Time Required:** 20-40 minutes  
**Difficulty:** Intermediate  
**Prerequisites:** Reports of poor call quality

#### Workflow:

1. **Identify Symptoms**
   - One-way audio (can't hear caller/callee)
   - Choppy/robotic audio
   - Echo
   - Static or noise
   - Delayed audio (high latency)

2. **Check RTP (Media) Path** ([Media Troubleshooting](guides/tshoot-media.md))
   - Verify RTP proxy settings in routing
   - Check if using direct RTP vs proxied
   - Review RTP server selection ([RTP Zones](setup/settings/rtp-zones.md))

3. **Review Codec Configuration**
   - Check allowed codecs in routing
   - Verify codec compatibility between endpoints
   - Consider transcoding if needed

4. **Test Network Quality**
   - Use [Circuit Test](circuit-test.md) with media analysis
   - Check for:
     - Packet loss
     - Jitter
     - Latency
   - Review [Statistics](customer/stats.md)

5. **Analyze NAT Issues** ([NAT Traversal](far-end-nat-traversal.md))
   - Check if NAT is involved
   - Verify STUN/NAT traversal settings
   - Review firewall configurations

6. **Review Customer/Carrier Stats**
   - Check [Customer Stats](customer/stats.md)
   - Review [Carrier Stats](carrier/carrier-stats.md)
   - Look for patterns (time-based, route-based)

7. **Adjust RTP Settings**
   - Modify RTP proxy settings if needed
   - Change RTP zone if geography-related
   - Enable/disable transcoding

**Common Solutions:**
- **One-way audio:** Enable RTP proxy, fix NAT
- **Choppy audio:** Check jitter buffer, packet loss
- **Echo:** Adjust echo cancellation on endpoints
- **Latency:** Choose closer RTP zones, check network

**Reference:** [Call Quality Troubleshooting](guides/tshoot-media.md)

---

### 4. Setting Up Billing & Credit Control

**Time Required:** 1-2 hours  
**Difficulty:** Intermediate  
**Prerequisites:** Rate cards configured

#### Workflow:

1. **Understand Billing Basics** ([Billing Basics](billing-basics.md))
   - Review billing terminology
   - Understand pre-paid vs post-paid
   - Learn about credit limits

2. **Configure Customer Payment Settings** ([Customer Payment](customer/payment.md))
   - Set payment type (pre-paid/post-paid)
   - Configure credit limit
   - Set currency
   - Enable auto-payment if applicable

3. **Set Up Credit Control** ([Credit Control](credit-control.md))
   - Configure credit thresholds
   - Set up alerts for low balance
   - Define disconnection behavior
   - Configure top-up options

4. **Enable Customer Alerts** ([Customer Alerts](customer/alerts.md))
   - Set balance warning thresholds
   - Configure email notifications
   - Set up SMS alerts if needed

5. **Configure Invoice Generation** ([Customer Invoices](customer/invoices.md))
   - Set invoice schedule (monthly, etc.)
   - Customize invoice templates
   - Configure automatic invoice sending
   - Set payment terms

6. **Set Up Packages** (Optional) ([Customer Packages](customer/package.md))
   - Create service bundles
   - Define package pricing
   - Assign packages to customers

7. **Test Billing Flow**
   - Make test calls
   - Verify CDR creation ([Customer CDR](customer/cdr.md))
   - Check balance deduction
   - Generate test invoice

8. **Monitor and Report** ([Reports](report.md))
   - Set up custom reports ([Custom Reports](customer/custom-reports.md))
   - Monitor revenue
   - Track customer usage

**Best Practices:**
- Set conservative credit limits initially
- Enable low-balance alerts
- Regular invoice reconciliation
- Monitor for unusual usage patterns

---

### 5. Configuring IVR (Interactive Voice Response)

**Time Required:** 1-2 hours  
**Difficulty:** Advanced  
**Prerequisites:** Customer with Class 5 enabled, DID available

#### Workflow:

1. **Enable Class 5 Features** ([Customer Class 5](customer/class5.md))
   - Navigate to **Customer → [Customer Name] → Class5**
   - Enable Class 5 features for customer

2. **Assign DID** ([Customer DID](customer/did.md))
   - Navigate to **Customer → DID**
   - Assign DID to customer
   - Configure DID routing to IVR

3. **Create IVR Structure** ([Creating IVR](class5/creating-ivr.md))
   - Go to **Class 5 → IVR**
   - Click **+** to create new IVR
   - Name the IVR
   - Design menu structure:
     - Main menu
     - Sub-menus
     - Options/branches

4. **Configure IVR Options**
   - Set up menu prompts:
     - Upload audio files or use TTS
     - Configure keypresses (1-9, 0, *, #)
   - Define actions for each option:
     - Forward to extension
     - Go to sub-menu
     - Play message
     - Hangup

5. **Advanced IVR with ConneXML** (Optional) ([ConneXML](class5/connexml.md))
   - Use ConneXML for complex logic
   - Add conditional routing
   - Integrate with external APIs
   - Add database lookups

6. **Set Up Audio Files** ([Customer Audio](customer-portal/cp-audio.md))
   - Record or generate prompts
   - Upload audio files
   - Test audio quality

7. **Configure Destinations**
   - Set up extensions
   - Create groups ([Creating Groups](class5/creating-group.md))
   - Configure voicemail ([Voicemail](class5/voicemail.md))

8. **Test IVR Flow**
   - Call the DID
   - Navigate through menu options
   - Verify all paths work
   - Check audio quality
   - Review [Latest Calls](customer/latest-calls.md)

9. **Refine and Optimize**
   - Gather user feedback
   - Adjust menu structure
   - Update prompts
   - Monitor usage in [CDR](customer/cdr.md)

**Common IVR Patterns:**
- **Simple menu:** Press 1 for sales, 2 for support, 3 for billing
- **Directory:** Dial by name or extension
- **Callback queue:** Offer callback instead of holding
- **Business hours:** Route differently based on time

---

### 6. API Integration Setup

**Time Required:** 2-4 hours  
**Difficulty:** Advanced  
**Prerequisites:** Developer knowledge, API credentials

#### Workflow:

1. **Review API Documentation** ([API Overview](api.md))
   - Understand RESTful API structure
   - Review available endpoints
   - Check authentication methods

2. **Generate API Credentials** ([API Integration](setup/integrations/api.md))
   - Navigate to **Setup → Integrations → API**
   - Create API key
   - Note API endpoint URL
   - Save credentials securely

3. **Set Up JWT Authentication** (Optional) ([JWT Keys](setup/integrations/jwt.md))
   - Generate JWT refresh keys
   - Configure token expiration
   - Set up token refresh logic

4. **Test API Connection**
   - Use tools like Postman or curl
   - Test authentication
   - Make sample GET requests
   - Verify responses

5. **Implement Common Operations**
   - **Customer Management:**
     - Create customer (POST)
     - Update customer (PUT)
     - Get customer details (GET)
   - **CDR Retrieval:**
     - Query CDRs with filters
     - Export CDR data
   - **Balance Management:**
     - Check customer balance
     - Add credit

6. **Error Handling**
   - Implement retry logic
   - Handle rate limiting
   - Log API errors
   - Set up monitoring

7. **Use IDE for Testing** (Optional) ([IDE](ide.md))
   - Access ConnexCS IDE
   - Test API calls directly
   - Debug responses
   - Create custom scripts

8. **Production Deployment**
   - Move from test to production credentials
   - Implement security best practices
   - Set up monitoring and alerts
   - Document integration

**API Use Cases:**
- Automated customer provisioning
- Real-time balance monitoring
- CDR exports for external billing
- Custom reporting dashboards
- Integration with CRM systems

**Reference:** Full API docs at <https://api-docs.connexcs.com/>

---

### 7. Custom Application Development (Apps Platform)

**Time Required:** 4-8 hours  
**Difficulty:** Advanced  
**Prerequisites:** JavaScript knowledge, Apps platform access

#### Workflow:

1. **Understand Apps Platform** ([Apps Introduction](apps/introduction.md))
   - Review architecture
   - Understand components
   - Check use cases ([Use Cases](apps/use-case.md))

2. **Access IDE** ([IDE](ide.md))
   - Navigate to **IDE**
   - Familiarize with interface
   - Review available tools

3. **Create New App** ([App Architecture](apps/architecture/app.md))
   - Click **+** to create app
   - Name your application
   - Set version
   - Configure permissions

4. **Design UI with Page Builder** ([Page Builder](apps/page-builder.md))
   - Use drag-and-drop interface
   - Add components:
     - Forms
     - Tables
     - Buttons
     - Charts
   - Configure layouts

5. **Add Database Integration** (Optional) ([Database](apps/architecture/database.md))
   - Create database schema
   - Set up queries
   - Connect to UI components

6. **Write Business Logic** ([Script Forge](apps/architecture/scriptforge.md))
   - Create JavaScript functions
   - Handle form submissions
   - Process data
   - Call external APIs

7. **Use Query Builder** (Optional) ([Query Builder](apps/architecture/query-builder.md))
   - Build complex queries
   - Join multiple tables
   - Add filters and sorting

8. **Configure Templates** (Optional) ([Templates](apps/architecture/template.md))
   - Create reusable components
   - Define page templates
   - Set up email templates

9. **Test Application**
   - Use IDE test environment
   - Verify all functionality
   - Test error handling
   - Check performance

10. **Deploy Application**
    - Publish app
    - Set permissions
    - Assign to users
    - Monitor usage

**Common App Types:**
- Custom reporting dashboards
- Automated provisioning forms
- Customer self-service portals
- Internal admin tools
- Integration middleware

---

### 8. Setting Up Fraud Prevention

**Time Required:** 1-2 hours  
**Difficulty:** Advanced  
**Prerequisites:** System understanding, customer data

#### Workflow:

1. **Review Security Basics** ([Security](security.md))
   - Understand security architecture
   - Review common fraud patterns
   - Learn prevention strategies

2. **Configure Firewall Rules** ([Firewall](setup/advanced/firewall.md))
   - Set up IP whitelist/blacklist
   - Configure geographic restrictions
   - Block suspicious IP ranges

3. **Set Up Fraud Profile** ([Fraud Profile](setup/advanced/fraud.md))
   - Navigate to **Setup → Advanced → Fraud Profile**
   - Create fraud detection rules:
     - Call duration limits
     - CPS (Calls Per Second) limits
     - Destination restrictions
     - Time-based rules

4. **Configure Credit Control** ([Credit Control](credit-control.md))
   - Set conservative credit limits
   - Enable real-time balance checks
   - Configure auto-disconnect on zero balance

5. **Enable DNC Lists** ([DNC](dnc.md))
   - Upload Do Not Call lists
   - Configure FTC blocks
   - Set up TCPA litigator protection

6. **Set Up Alerts** ([Customer Alerts](customer/alerts.md))
   - Configure fraud alerts:
     - Unusual call patterns
     - High CPS
     - Credit limit reached
     - Geographic anomalies

7. **Monitor Suspicious Activity**
   - Review [Latest Calls](customer/latest-calls.md) regularly
   - Check [Statistics](customer/stats.md) for anomalies
   - Monitor [CDR](customer/cdr.md) for patterns

8. **Use Spam Protection** ([Spam Protection](guides/spam-callsblock.md))
   - Enable Spam Scout Scoring
   - Configure IPQS integration
   - Set threshold levels

9. **Implement Channel Limits** ([Channel Limitations](guides/channel-limitations.md))
   - Set maximum concurrent calls
   - Configure per-customer limits
   - Monitor channel usage

10. **Regular Review**
    - Weekly fraud report review
    - Monthly security audit
    - Update fraud rules as needed

**Red Flags to Monitor:**
- Sudden spike in calls
- Unusual destinations (high-cost)
- Short-duration calls (missed call traffic)
- Calls outside business hours
- Sequential number dialing

---

### 9. Configuring STIR/SHAKEN Compliance

**Time Required:** 2-3 hours  
**Difficulty:** Advanced  
**Prerequisites:** US traffic, STIR/SHAKEN certificate

#### Workflow:

1. **Understand Requirements** ([FCC STIR/SHAKEN](guides/stir-shaken-fcc.md))
   - Review FCC regulations
   - Understand attestation levels
   - Check compliance deadlines

2. **Obtain Certificate** ([STIR/SHAKEN Cert](setup/information/stir-shaken.md))
   - Navigate to **Setup → Information → STIR/SHAKEN Cert**
   - Follow certificate acquisition process
   - Upload certificate to system

3. **Configure CLI Settings** ([Customer CLI](customer/cli.md))
   - Verify CLI format
   - Enable CLI validation
   - Configure P-Asserted-Identity

4. **Set Up Attestation**
   - Configure attestation level per customer
   - Set default attestation policy
   - Test attestation in calls

5. **Monitor Compliance**
   - Check call attestation in CDR
   - Review rejection rates
   - Monitor carrier feedback

6. **Troubleshooting**
   - Review [Latest Calls](customer/latest-calls.md) for attestation issues
   - Check [Logging](logging.md) for STIR/SHAKEN errors
   - Verify certificate validity

**Attestation Levels:**
- **A (Full):** Complete control over number
- **B (Partial):** Verified caller, may not control number
- **C (Gateway):** Minimal verification

---

## Quick Reference: Common Tasks

### Adding a New Customer
1. **Management → Customer → +**
2. Fill basic info → Save
3. Configure Auth → Configure Routing → Test

### Checking Call Status
1. **Customer → Latest Calls** or **Global → Latest Calls**
2. Search by Call-ID, number, or time
3. Click record → View details/SIP trace

### Updating Rate Card
1. **Management → Rate Card** → Select card
2. Upload CSV or edit manually
3. Verify changes → Save

### Adding Credit to Customer
1. **Customer → [Name] → Payment**
2. Add Payment → Enter amount
3. Add note → Save

### Checking System Status
1. **Dashboard** → View real-time stats
2. **Setup → Information → Jobs** → Check background tasks
3. **System Status** → Review service health

---

## Workflow Categories

### By User Role

**Administrator:**
- Initial setup
- Customer/carrier management
- Billing configuration
- System monitoring

**Support Engineer:**
- Call troubleshooting
- Quality analysis
- Logging review
- Customer assistance

**Developer:**
- API integration
- Custom app development
- Script creation
- Database queries

**End User (Customer Portal):**
- View CDR
- Check balance
- Manage DIDs
- Configure IVR

### By Time Investment

**Quick (< 30 min):**
- Add customer
- Check call status
- Update rate
- Add credit

**Medium (30 min - 2 hours):**
- Full customer setup
- Troubleshoot calls
- Configure billing
- Set up IVR

**Extended (2+ hours):**
- Initial platform setup
- API integration
- Custom app development
- Complex routing

---

## Getting Help

- **Documentation:** Review linked documents for detailed information
- **Video Guides:** [Video Guide](video-guide.md) for visual walkthroughs
- **Support:** [Reporting Problems](reporting-problems.md) for assistance
- **Training:** Book 1:1 training at <https://connexcs.youcanbook.me/>

---

**Note:** All workflow time estimates assume familiarity with basic ConnexCS navigation. First-time users may require additional time.
