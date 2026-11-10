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
// REAL AI TEACHER & YOUTUBE INTEGRATION
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
    chatBox.innerHTML += `<div class="ai-msg" id="${loadingId}"><i class='bx bx-loader-alt bx-spin'></i> AI is thinking...</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    // अगर API Key नहीं डाली है, तो स्मार्ट आन्सर दें ताकि ऐप रुके नहीं
    if (GEMINI_API_KEY === "PASTE_YOUR_API_KEY_HERE" || GEMINI_API_KEY === "") {
        setTimeout(() => {
            let fallbackAns = `नमस्ते Sahil! आपने अभी अपनी Gemini API Key नहीं जोड़ी है, इसलिए मैं अभी लोकल मोड में हूँ।<br><br>आपके सवाल <strong>"${userText}"</strong> के लिए यह सलाह है कि SSC CGL में इस टॉपिक पर रानी मैम की क्लास जरूर देखें!`;
            const ytBtn = generateYouTubeLink(userText);
            document.getElementById(loadingId).innerHTML = fallbackAns + ytBtn;
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
        return;
    }

    try {
        const prompt = `Act as an expert SSC CGL English Teacher. Student asks: "${userText}". Explain simply in Hinglish. Keep it highly relevant to SSC CGL exams. Be concise.`;

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
        const ytButtonHtml = generateYouTubeLink(userText);
        
        document.getElementById(loadingId).innerHTML = aiText + ytButtonHtml;
        chatBox.scrollTop = chatBox.scrollHeight;
    } catch (error) {
        document.getElementById(loadingId).innerHTML = "⚠️ Network error. Please check your internet connection.";
    }
}

function generateYouTubeLink(query) {
    const lowerQuery = query.toLowerCase();
    let searchTopic = "";

    if (lowerQuery.includes("cloze")) searchTopic = "Cloze Test tricks";
    else if (lowerQuery.includes("pqrs") || lowerQuery.includes("arrangement")) searchTopic = "PQRS sentence rearrangement tricks";
    else if (lowerQuery.includes("rc") || lowerQuery.includes("comprehension")) searchTopic = "Reading Comprehension strategies";
    else if (lowerQuery.includes("vocab") || lowerQuery.includes("synonym") || lowerQuery.includes("meaning")) searchTopic = "Vocabulary Black Book SSC";
    else if (lowerQuery.includes("grammar") || lowerQuery.includes("error") || lowerQuery.includes("tense")) searchTopic = "Grammar Error Detection rules";
    else searchTopic = "English with Rani Maam SSC CGL";

    const searchUrl = `https://www.youtube.com/results?search_query=English+with+Rani+Maam+${encodeURIComponent(searchTopic)}`;
    return `<br><br><a href="${searchUrl}" target="_blank" class="yt-link-btn" style="display:inline-block; margin-top:10px; padding:8px 12px; background:#ff0000; color:#fff; text-decoration:none; border-radius:6px; font-weight:bold;"><i class='bx bxl-youtube'></i> Watch Rani Ma'am on YouTube</a>`;
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
    
