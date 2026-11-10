// ==========================================
// CORE APP LOGIC & THEME MANAGEMENT
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("theme-toggle");
    const eyeBtn = document.getElementById("eye-care-toggle");
    const body = document.body;

    const savedTheme = localStorage.getItem("app_theme") || "light";
    applyTheme(savedTheme);

    if(themeBtn) {
        themeBtn.addEventListener("click", () => {
            let current = body.classList.contains("dark-theme") ? "light" : "dark";
            applyTheme(current);
        });
    }

    if(eyeBtn) {
        eyeBtn.addEventListener("click", () => {
            let current = body.classList.contains("eye-care-theme") ? "light" : "eye-care";
            applyTheme(current);
        });
    }

    function applyTheme(themeName) {
        body.classList.remove("dark-theme", "eye-care-theme");
        if (themeName === "dark") {
            body.classList.add("dark-theme");
            if(themeBtn) themeBtn.innerHTML = "<i class='bx bx-sun'></i>";
            if(eyeBtn) eyeBtn.style.color = "var(--text-muted)";
        } else if (themeName === "eye-care") {
            body.classList.add("eye-care-theme");
            if(themeBtn) themeBtn.innerHTML = "<i class='bx bx-moon'></i>";
            if(eyeBtn) eyeBtn.style.color = "var(--primary-color)";
        } else {
            if(themeBtn) themeBtn.innerHTML = "<i class='bx bx-moon'></i>";
            if(eyeBtn) eyeBtn.style.color = "var(--text-muted)";
        }
        localStorage.setItem("app_theme", themeName);
    }

    const streakEl = document.getElementById("streak-count");
    const qEl = document.getElementById("questions-done");
    const vEl = document.getElementById("vocab-learned");

    if (streakEl) streakEl.innerText = (localStorage.getItem("learning_streak") || 0) + " Days";
    if (qEl) qEl.innerText = localStorage.getItem("daily_questions") || 0;
    if (vEl) vEl.innerText = localStorage.getItem("total_vocab") || 0;
});

// ==========================================
// REAL AI TEACHER (NO YOUTUBE REDIRECT)
// ==========================================
// अपनी असली Gemini API Key यहाँ डबल कोट्स के अंदर पेस्ट करें:
const GEMINI_API_KEY = "PASTE_YOUR_API_KEY_HERE"; 

window.openAI = () => {
    const modal = document.getElementById("ai-modal");
    if(modal) modal.style.display = "flex";
}
window.closeAI = () => {
    const modal = document.getElementById("ai-modal");
    if(modal) modal.style.display = "none";
}
window.handleEnter = (e) => { if (e.key === 'Enter') askAI(); };

window.askAI = async function() {
    const inputField = document.getElementById("ai-input");
    const chatBox = document.getElementById("chat-box");
    const userText = inputField.value.trim();

    if (!userText) return;

    chatBox.innerHTML += `<div class="user-msg">${userText}</div>`;
    inputField.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    const loadingId = "load-" + Date.now();
    chatBox.innerHTML += `<div class="ai-msg" id="${loadingId}"><i class='bx bx-loader-alt bx-spin'></i> AI is analyzing...</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    if (GEMINI_API_KEY === "PASTE_YOUR_API_KEY_HERE" || GEMINI_API_KEY === "") {
        setTimeout(() => {
            document.getElementById(loadingId).innerHTML = `⚠️ कृपया अपनी Gemini API Key 'app.js' में डालें ताकि AI सीधे जवाब दे सके।`;
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
        return;
    }

    try {
        const prompt = `Act as an expert SSC CGL English Teacher. The student is asking for the meaning, rule, or explanation of: "${userText}". 
        Give a direct, clear, and comprehensive explanation in Hinglish (mix of Hindi & English) just like a topper's notes. Include meanings, synonyms/antonyms if it's a word, or rules and examples if it's grammar. Do NOT provide external links or YouTube suggestions. Be structured and concise.`;

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });

        const data = await response.json();
        
        if (data.error) {
            document.getElementById(loadingId).innerHTML = `⚠️ API Error: ${data.error.message}`;
            return;
        }

        let aiText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, "<br>");
        
        // सीधा जवाब स्क्रीन पर दिखेगा, कोई YouTube लिंक नहीं!
        document.getElementById(loadingId).innerHTML = aiText;
        chatBox.scrollTop = chatBox.scrollHeight;
    } catch (error) {
        document.getElementById(loadingId).innerHTML = "⚠️ Network error. Please check your internet connection.";
    }
}

// ==========================================
// ERROR LEDGER & BOOKMARK CORE LOGIC
// ==========================================
window.saveErrorToLedger = function(questionText, correctAns, userWrongAns, topic) {
    let errors = JSON.parse(localStorage.getItem("error_ledger")) || [];
    if (!errors.some(e => e.q === questionText)) {
        errors.push({ q: questionText, correct: correctAns, wrong: userWrongAns, topic: topic, date: new Date().toLocaleDateString() });
        localStorage.setItem("error_ledger", JSON.stringify(errors));
    }
}

window.toggleBookmark = function(btn, type, text) {
    let bookmarks = JSON.parse(localStorage.getItem("my_bookmarks")) || [];
    let icon = btn.querySelector('i');
    let existingIndex = bookmarks.findIndex(b => b.text === text);
    
    if (existingIndex > -1) {
        bookmarks.splice(existingIndex, 1);
        icon.classList.replace('bxs-bookmark', 'bx-bookmark');
        icon.style.color = "var(--text-muted)";
    } else {
        bookmarks.push({ type: type, text: text });
        icon.classList.replace('bx-bookmark', 'bxs-bookmark');
        icon.style.color = "var(--primary-color)";
    }
    localStorage.setItem("my_bookmarks", JSON.stringify(bookmarks));
};
