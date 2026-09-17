# PROJECT_SPEC.md — PhishGuard

## Product
A lightweight phishing-message triage assistant for people who receive suspicious digital messages.

## ICP hypothesis
Initial ICP: college students and early-career digital users who regularly receive messages containing account, payment, delivery, job, or verification requests.

This is an ICP hypothesis, not a verified market finding.

## Problem
When a user receives a suspicious message, they may need to decide quickly whether to trust it. Existing security warnings can be technical or unavailable at the moment of decision. The prototype explores whether a plain-language explanation of visible phishing signals can help users pause and verify before acting.

## One flow
Paste message -> analyze visible signals -> show risk signal + reasons -> show safer next step.

## Non-goals
- Automated message interception
- Automatic link blocking
- Access to private inboxes
- Credential collection
- Guaranteeing maliciousness
- Claiming a security verdict without evidence

## Success test
A stranger should be able to understand the result without a team member explaining it. For an early usability test, observe whether users can:
1. Paste a sample message.
2. Understand at least one detected signal.
3. State one safer next action.

These are proposed tests, not completed results.

## Tech
- HTML: interface
- CSS: presentation
- JavaScript: transparent rule-based prototype
- Future option: an LLM/API layer may explain signals, but it should not replace verification.

## Evidence standard
Claims are tagged as VERIFIED, ASSUMPTION, HYPOTHESIS, or UNKNOWN in the Build Log. Prototype behavior is not treated as proof of real-world detection performance.
