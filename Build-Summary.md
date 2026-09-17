# Build-Summary — PhishGuard

**Theme:** Cybersecurity

**Problem statement:** Digital users need a quick, plain-language way to understand why a message looks suspicious before they click, reply, or provide information. PhishGuard explores whether explaining visible phishing signals and giving a safer next step can help users pause and verify.

**How it changed:** The initial idea was a broad AI phishing detector. It was narrowed to a paste-and-check triage flow so the first prototype can be tested without private-account access or unsupported claims of perfect detection.

**What we built:** A browser-based prototype where a user pastes a suspicious message or URL. PhishGuard checks visible signals such as urgency, credential requests, threats, link requests, and URLs, then explains the detected signals and gives a safer verification step.

**What it deliberately does not do:** It does not monitor email/SMS/WhatsApp, open links, collect credentials, block websites, or guarantee that a message is malicious or safe.

**Tech stack:** HTML for the interface, CSS for presentation, and JavaScript for transparent rule-based analysis. No API key is required. An LLM/API layer is a future option after the basic flow and user need are validated.

**Evidence position:** Phishing is an active documented threat. APWG reported 425,808 phishing attacks in June 2026 and a 10.1% rise in phishing attacks in Q2 2026. Source: APWG Phishing Activity Trends Reports, https://apwg.org/trendreports. The prototype itself is proven runnable, but its real-world detection accuracy is not proven.

**Still an assumption:** The initial ICP (college students and early-career digital users), whether explanations change behavior, whether people would repeatedly use the flow, and whether the selected rules are sufficiently accurate.

**What we would build next:** A small evaluation version with a labelled set of benign and phishing examples plus a short stranger/user test. A stronger second flow could compare a suspicious message with a trusted official-channel verification path. It would be worth building only if users understand the explanations, can identify why a message is suspicious, and show evidence of using the safer next step.
