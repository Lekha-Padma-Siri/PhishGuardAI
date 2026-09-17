const messageInput = document.getElementById("message");
const analyzeButton = document.getElementById("analyzeBtn");
const sampleButton = document.getElementById("sampleBtn");
const clearButton = document.getElementById("clearBtn");
const result = document.getElementById("result");


// Phishing indicators
const indicators = [
    {
        name: "Urgency or pressure",
        patterns: [
            "urgent",
            "immediately",
            "act now",
            "right now",
            "within 24 hours",
            "today"
        ],
        points: 2,
        explanation: "The message tries to make you act quickly."
    },

    {
        name: "Account verification request",
        patterns: [
            "verify your account",
            "verify account",
            "confirm your account",
            "account verification",
            "verify your identity"
        ],
        points: 2,
        explanation: "The message asks you to verify an account or identity."
    },

    {
        name: "Sensitive information request",
        patterns: [
            "password",
            "otp",
            "one time password",
            "pin",
            "cvv",
            "card number",
            "bank details"
        ],
        points: 3,
        explanation: "The message mentions credentials or sensitive financial information."
    },

    {
        name: "Suspicious link request",
        patterns: [
            "click here",
            "click this link",
            "click the link",
            "open this link",
            "tap here",
            "visit this link"
        ],
        points: 2,
        explanation: "The message asks you to follow a link."
    },

    {
        name: "Threat or consequence",
        patterns: [
            "account will be blocked",
            "account will be suspended",
            "account has been suspended",
            "account will be closed",
            "legal action",
            "penalty",
            "lose access"
        ],
        points: 2,
        explanation: "The message uses a threat or consequence to pressure you."
    },

    {
        name: "Contains a URL",
        patterns: [
            "http://",
            "https://",
            "www."
        ],
        points: 1,
        explanation: "The message contains a web address that should be checked before opening."
    }
];


// Analyze the message
function analyzeMessage(message) {

    const text = message.toLowerCase();

    let score = 0;
    let detected = [];

    for (let indicator of indicators) {

        let found = false;

        for (let pattern of indicator.patterns) {

            if (text.includes(pattern)) {
                found = true;
                break;
            }

        }

        if (found) {
            score += indicator.points;
            detected.push(indicator);
        }
    }

    return {
        score: score,
        detected: detected
    };
}


// Get risk level
function getRiskLevel(score) {

    if (score >= 7) {
        return {
            level: "HIGH RISK",
            description: "This message contains several common phishing signals."
        };
    }

    if (score >= 3) {
        return {
            level: "SUSPICIOUS",
            description: "This message contains some signals commonly associated with phishing."
        };
    }

    return {
        level: "LOW SIGNAL",
        description: "The prototype did not find many of its predefined phishing signals."
    };
}


// Display result
function showResult() {

    const message = messageInput.value.trim();

    if (message === "") {

        result.classList.remove("hidden");

        result.innerHTML = `
            <div class="risk-title">Please enter a message</div>
            <p>Paste a suspicious message above and click Analyze Message.</p>
        `;

        return;
    }


    const analysis = analyzeMessage(message);
    const risk = getRiskLevel(analysis.score);


    let signalsHTML = "";

    if (analysis.detected.length === 0) {

        signalsHTML = `
            <div class="signal">
                <strong>No predefined signals detected</strong>
                The prototype did not find any of its current warning patterns.
            </div>
        `;

    } else {

        for (let signal of analysis.detected) {

            signalsHTML += `
                <div class="signal">
                    <strong>⚠️ ${signal.name}</strong>
                    ${signal.explanation}
                </div>
            `;
        }
    }


    result.classList.remove("hidden");

    result.innerHTML = `
        <div class="risk-title">${risk.level}</div>

        <div class="score">
            Prototype signal score: ${analysis.score}
        </div>

        <p>${risk.description}</p>

        <h3>Detected Signals</h3>

        ${signalsHTML}

        <div class="next-step">
            <strong>Safer next step</strong>
            <p>
                Do not click links or provide sensitive information.
                If the message claims to be from a bank, company, college,
                delivery service, etc., verify it using the organisation's
                official website or app.
            </p>
        </div>

        <p>
            <small>
                This is a prototype, not a definitive security verdict.
            </small>
        </p>
    `;
}


// Sample message
sampleButton.addEventListener("click", function () {

    messageInput.value =
        "URGENT! Your bank account will be blocked today. " +
        "Verify your account immediately by clicking this link: " +
        "https://example.com/verify. Enter your OTP to confirm.";

    showResult();
});


// Analyze button
analyzeButton.addEventListener("click", function () {
    showResult();
});


// Clear button
clearButton.addEventListener("click", function () {

    messageInput.value = "";

    result.classList.add("hidden");

    result.innerHTML = "";
});