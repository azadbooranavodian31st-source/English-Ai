document.addEventListener("DOMContentLoaded", () => {
    // 1. Theme Management
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

    // 2. Load Progress
    document.getElementById("streak-count").innerText = (localStorage.getItem("learning_streak") || 0) + " Days";
    document.getElementById("questions-done").innerText = localStorage.getItem("daily_questions") || 0;
    document.getElementById("vocab-learned").innerText = localStorage.getItem("total_vocab") || 0;
});

// ==========================================
// REAL AI TEACHER & YOUTUBE INTEGRATION
// ==========================================
const GEMINI_API_KEY = "// ==========================================
// CORE APP LOGIC & THEME MANAGEMENT
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("theme-toggle");
    const eyeBtn = document.getElementById("eye-care-toggle");
    const body = document.body;

    // Load saved theme
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

    // Load Dashboard Progress
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
// अपनी असली Gemini API Key नीचे डबल कोट्स "" के अंदर डालें:
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
    chatBox.innerHTML += `<div class="ai-msg" id="${loadingId}"><i class='bx bx-loader-alt bx-spin'></i> AI is typing...</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    if (GEMINI_API_KEY === "PASTE_YOUR_API_KEY_HERE" || GEMINI_API_KEY === "") {
        document.getElementById(loadingId).innerHTML = "⚠️ Setup Required: Please paste your real Gemini API Key inside app.js (Line 43).";
        return;
    }

    try {
        const prompt = `Act as an expert SSC CGL English Teacher. Student asks: "${userText}". 
        Explain simply in Hinglish. Keep it highly relevant to SSC CGL exams. Provide rules/examples if needed. Be concise.`;

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

        // SMART YOUTUBE LINKER LOGIC FOR RANI MA'AM
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
    else if (lowerQuery.includes("rc") || lowerQuery.includes("comprehension") || lowerQuery.includes("passage")) searchTopic = "Reading Comprehension strategies";
    else if (lowerQuery.includes("vocab") || lowerQuery.includes("synonym") || lowerQuery.includes("antonym") || lowerQuery.includes("meaning")) searchTopic = "Vocabulary Black Book SSC";
    else if (lowerQuery.includes("grammar") || lowerQuery.includes("error") || lowerQuery.includes("tense") || lowerQuery.includes("preposition")) searchTopic = "Grammar Error Detection rules";

    if (searchTopic !== "") {
        const searchUrl = `https://www.youtube.com/results?search_query=English+with+Rani+Maam+${encodeURIComponent(searchTopic)}`;
        return `<br><br><a href="${searchUrl}" target="_blank" class="yt-link-btn" style="display:inline-block; margin-top:10px; padding:8px 12px; background:#ff0000; color:#fff; text-decoration:none; border-radius:6px; font-weight:bold;"><i class='bx bxl-youtube'></i> Watch Rani Ma'am on this topic</a>`;
    }
    return "";
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
        "; 

window.openAI = () => document.getElementById("ai-modal").style.display = "flex";
window.closeAI = () => document.getElementById("ai-modal").style.display = "none";
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
    chatBox.innerHTML += `<div class="ai-msg" id="${loadingId}"><i class='bx bx-loader-alt bx-spin'></i> AI is typing...</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    if (GEMINI_API_KEY === "PASTE_YOUR_API_KEY_HERE") {
        document.getElementById(loadingId).innerHTML = "⚠️ Setup Required: Please paste your real Gemini API Key inside app.js (Line 40).";
        return;
    }

    try {
        const prompt = `Act as an expert SSC CGL English Teacher. Student asks: "${userText}". 
        Explain simply in Hinglish. Keep it highly relevant to SSC CGL exams. Provide rules/examples if needed. Be concise.`;

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });

        const data = await response.json();
        let aiText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, "<br>");

        // SMART YOUTUBE LINKER LOGIC FOR RANI MA'AM
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
    else if (lowerQuery.includes("rc") || lowerQuery.includes("comprehension") || lowerQuery.includes("passage")) searchTopic = "Reading Comprehension strategies";
    else if (lowerQuery.includes("vocab") || lowerQuery.includes("synonym") || lowerQuery.includes("antonym")) searchTopic = "Vocabulary Black Book SSC";
    else if (lowerQuery.includes("grammar") || lowerQuery.includes("error") || lowerQuery.includes("tense") || lowerQuery.includes("preposition")) searchTopic = "Grammar Error Detection rules";

    if (searchTopic !== "") {
        const searchUrl = `https://www.youtube.com/results?search_query=English+with+Rani+Maam+${encodeURIComponent(searchTopic)}`;
        return `<br><br><a href="${searchUrl}" target="_blank" class="yt-link-btn"><i class='bx bxl-youtube'></i> Watch Rani Ma'am on this topic</a>`;
    }
    return "";
}

// ==========================================
// CORE HELPERS (For Future Quiz Rooms)
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
             
