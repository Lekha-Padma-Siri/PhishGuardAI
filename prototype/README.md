# PhishGuard

## One-flow description
PhishGuard is a cybersecurity prototype that lets a user paste a suspicious message or URL and receive a transparent risk signal plus the specific phishing indicators detected.

## Run locally
No installation or API key is required.

1. Open `index.html` in a browser.
2. Paste a suspicious message.
3. Click **Analyze message**.
4. Review the detected signals and safer next step.

For a local server, run `python -m http.server 8000` inside this folder and open `http://localhost:8000`.

## What this prototype does
- Accepts pasted message text.
- Checks common phishing signals such as urgency, credential requests, threats, link requests, and URLs.
- Shows a transparent risk category and reasons.
- Gives a safety-oriented next step.

## What it deliberately does not do
- It does not access email, WhatsApp, SMS, or other private accounts.
- It does not open or visit submitted links.
- It does not guarantee that a message is safe or malicious.
- It does not collect passwords, OTPs, card details, or other secrets.
- It is not yet a trained machine-learning/LLM classifier.

## Evidence and limitation
The prototype is a proof of the selected interaction flow, not evidence that its detection rules are accurate for all phishing messages. Detection accuracy must be tested on a labelled dataset and with real users before making performance claims.

## Demo
No hosted link is included in this submission. The prototype is locally runnable.

## Security note
Never paste real passwords, OTPs, payment details, API keys, or other secrets into the prototype.
