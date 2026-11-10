document.addEventListener("DOMContentLoaded", () => {
    const quizContainer = document.getElementById("quiz-container");

    // Authentic SSC CGL 2026 Tier-I PQRS Data (From Rani Ma'am PDF)
    const pqrsData = [
        {
            id: 266,
            exam: "SSC CGL 2026 Tier-I (30 Sep, Shift 2)",
            sentence: "As the 2024 Paris Olympics approached,",
            parts: [
                "P. raising concerns over diplomatic boycotts and the potential exclusion of certain nations,",
                "Q. global geopolitical tensions, including conflicts in Eastern Europe and trade disputes among superpowers,",
                "R. while the International Olympic Committee attempted to maintain neutrality and ensure an inclusive competition",
                "S. cast a shadow over the event's spirit of international unity and sportsmanship."
            ],
            options: ["PSQR", "SRQP", "RSPQ", "QSPR"],
            correctOption: 3, 
            explanation: "<strong>Trick:</strong> The main subject is 'global geopolitical tensions' (Q) which 'cast a shadow' (S). P modifies the tensions, and R shows the contrasting action of the committee. Correct sequence: QSPR."
        },
        {
            id: 267,
            exam: "SSC CGL 2026 Tier-I (30 Sep, Shift 3)",
            sentence: "In response to persistent inflationary pressures,",
            parts: [
                "P. against the risk of prolonged stagnation",
                "Q. restrictive monetary policies were implemented,",
                "R. by raising interest rates and reducing liquidity",
                "S. forcing central banks to balance economic growth"
            ],
            options: ["PRQS", "QSRP", "SQPR", "RPSQ"],
            correctOption: 1,
            explanation: "<strong>Trick:</strong> The action taken in response to inflation is 'restrictive monetary policies were implemented' (Q). How? 'by raising interest rates...' (R). This led to 'forcing central banks...' (S) 'against the risk...' (P). Correct sequence: QSRP."
        },
        {
            id: 282,
            exam: "SSC CGL 2026 Tier-I (05 Oct, Shift 1)",
            sentence: "Rearrange to make a meaningful sentence:",
            parts: [
                "P. and cultural pluralism",
                "Q. India's democratic fabric",
                "R. is deeply rooted",
                "S. in historical dialogues"
            ],
            options: ["QRSP", "PRSQ", "QSPR", "QPSR"],
            correctOption: 0,
            explanation: "<strong>Trick:</strong> 'India's democratic fabric' (Q) is the subject. The verb follows: 'is deeply rooted' (R) 'in historical dialogues' (S) 'and cultural pluralism' (P). Correct sequence: QRSP."
        },
        {
            id: 284,
            exam: "SSC CGL 2026 Tier-I (05 Oct, Shift 2)",
            sentence: "With the awarding of the 2024 Nobel Prize in Physics,",
            parts: [
                "P. for their pioneering work in quantum materials,",
                "Q. as scientists hailed the breakthrough for its potential applications in next-generation computing and renewable energy",
                "R. the recipients sparked renewed interest in the study of exotic electronic properties,",
                "S. while debates emerged over the accessibility of high-cost experimental setups required for further research."
            ],
            options: ["PRQS", "PSQR", "RPQS", "QPRS"],
            correctOption: 0,
            explanation: "<strong>Trick:</strong> 'With the awarding...' links directly to what they were awarded for: 'for their pioneering work...' (P). This sparked interest: 'the recipients sparked...' (R). Why? 'as scientists hailed...' (Q). Correct sequence: PRQS."
        },
        {
            id: 285,
            exam: "SSC CGL 2026 Tier-I (05 Oct, Shift 2)",
            sentence: "The geopolitical landscape",
            parts: [
                "P. necessitating strategic alliances and diplomatic interventions",
                "Q. has been reshaped by emerging superpowers,",
                "R. as nations navigate complex economic and military rivalries",
                "S. to maintain regional stability and global influence"
            ],
            options: ["QPRS", "SRPQ", "RSPQ", "SQPR"],
            correctOption: 0,
            explanation: "<strong>Trick:</strong> The subject 'The geopolitical landscape' needs a verb immediately: 'has been reshaped...' (Q). This necessitates alliances (P) as nations navigate rivalries (R) to maintain stability (S). Correct sequence: QPRS."
        }
    ];

    function renderQuiz() {
        quizContainer.innerHTML = "";
        pqrsData.forEach((q, qIndex) => {
            const card = document.createElement("div");
            card.className = "stats-card";
            card.style.flexDirection = "column";
            card.style.marginBottom = "20px";

            // Format parts cleanly
            let partsHtml = `<div style="background: rgba(37,99,235,0.05); padding: 15px; border-radius: 8px; margin: 15px 0; font-size: 0.95rem; line-height: 1.6;">`;
            q.parts.forEach(p => { partsHtml += `<div>${p}</div>`; });
            partsHtml += `</div>`;

            // Options buttons
            let optionsHtml = `<div class="rooms-grid" id="options-${qIndex}" style="grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 0;">`;
            q.options.forEach((opt, optIndex) => {
                optionsHtml += `<button class="search-bar" style="cursor: pointer; font-weight: bold; text-align: center;" onclick="checkAnswer(this, ${qIndex}, ${optIndex})">${opt}</button>`;
            });
            optionsHtml += `</div>`;

            // Full text for bookmarking
            const fullTextForBookmark = `<strong>PQRS:</strong> ${q.sentence}<br>${q.parts.join('<br>')}<br><br><strong>Ans:</strong> ${q.options[q.correctOption]}`;

            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;">
                    <span style="font-size: 0.8rem; font-weight: bold; color: var(--primary-color); background: rgba(37,99,235,0.1); padding: 4px 10px; border-radius: 20px;">
                        ${q.exam}
                    </span>
                    <button class="icon-btn" onclick="toggleBookmark(this, 'PQRS', '${fullTextForBookmark.replace(/'/g, "\\'")}')" title="Bookmark for Revision">
                        <i class='bx bx-bookmark' style="color: var(--text-muted);"></i>
                    </button>
                </div>
                
                <div style="font-weight: 600; font-size: 1.05rem; margin-top: 15px;">
                    Q${qIndex + 1}. ${q.sentence}
                </div>
                
                ${partsHtml}
                ${optionsHtml}

                <div class="explanation-box" id="exp-${qIndex}" style="display: none; margin-top: 15px; padding: 15px; background: rgba(16,185,129,0.1); border-left: 4px solid var(--correct-color); border-radius: 4px; font-size: 0.9rem;">
                    ${q.explanation}
                </div>
            `;
            quizContainer.appendChild(card);
        });
    }

    renderQuiz();

    // Checking Logic + Error Ledger + Daily Target
    window.checkAnswer = function(btn, qIndex, selectedOptIndex) {
        const questionData = pqrsData[qIndex];
        const optionsGrid = document.getElementById(`options-${qIndex}`);
        const buttons = optionsGrid.getElementsByTagName("button");
        const explanationBox = document.getElementById(`exp-${qIndex}`);

        // Disable all buttons
        for (let b of buttons) {
            b.disabled = true;
            b.style.cursor = "not-allowed";
        }

        // Check if correct
        if (selectedOptIndex === questionData.correctOption) {
            btn.style.backgroundColor = "var(--correct-color)";
            btn.style.color = "white";
            btn.style.borderColor = "var(--correct-color)";
        } else {
            // Wrong Answer!
            btn.style.backgroundColor = "var(--wrong-color)";
            btn.style.color = "white";
            btn.style.borderColor = "var(--wrong-color)";
            
            // Highlight the correct one
            buttons[questionData.correctOption].style.backgroundColor = "var(--correct-color)";
            buttons[questionData.correctOption].style.color = "white";

            // SAVE TO ERROR LEDGER AUTOMATICALLY (Called from app.js)
            const fullQuestion = `${questionData.sentence} <br> ${questionData.parts.join('<br>')}`;
            saveErrorToLedger(fullQuestion, questionData.options[questionData.correctOption], questionData.options[selectedOptIndex], "PQRS");
        }

        // Show explanation
        explanationBox.style.display = "block";

        // Update Daily Target in LocalStorage
        let currentDone = parseInt(localStorage.getItem("daily_questions")) || 0;
        localStorage.setItem("daily_questions", currentDone + 1);
    };
});
