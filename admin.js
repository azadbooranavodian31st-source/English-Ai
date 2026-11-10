// ==========================================
// ADMIN PORTAL LOGIC
// ==========================================

// Default login credentials
let savedPassword = localStorage.getItem("admin_password") || "admin123";
let uploadHistory = JSON.parse(localStorage.getItem("upload_history")) || [];

// 1. Login Logic
function checkLogin() {
    const user = document.getElementById("admin-user").value;
    const pass = document.getElementById("admin-pass").value;
    const errorMsg = document.getElementById("login-error");

    if (user === "sahil" && pass === savedPassword) {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("admin-dashboard").style.display = "block";
        
        document.getElementById("admin-user").value = "";
        document.getElementById("admin-pass").value = "";
        errorMsg.style.display = "none";
        
        renderHistory(); // Load history on login
    } else {
        errorMsg.style.display = "block";
    }
}

// 2. Logout Logic
function logout() {
    document.getElementById("admin-dashboard").style.display = "none";
    document.getElementById("login-section").style.display = "flex";
}

// 3. Update File Name Display
window.updateFileName = function() {
    const fileInput = document.getElementById('file-upload');
    const display = document.getElementById('file-name-display');
    if(fileInput.files.length > 0) {
        display.innerHTML = `<span style='color: var(--correct-color); font-weight: bold;'>Selected: ${fileInput.files[0].name}</span>`;
    }
}

// 4. Limitless Upload & Processing Simulation
function generateQuestions() {
    const btn = document.getElementById("process-btn");
    const selectedRoom = document.getElementById("target-room").value;
    const fileInput = document.getElementById("file-upload");
    const manualText = document.getElementById("manual-text").value;

    if(fileInput.files.length === 0 && manualText.trim() === "") {
        alert("Please upload a file or paste content first!");
        return;
    }

    let sourceName = fileInput.files.length > 0 ? fileInput.files[0].name : "Manual Text Snippet";

    // Loading State
    btn.innerHTML = "<i class='bx bx-loader-alt bx-spin'></i> Processing & Saving...";
    btn.style.backgroundColor = "#ff9800"; 
    
    setTimeout(() => {
        // Save to limitless history in LocalStorage
        uploadHistory.push({ 
            room: selectedRoom, 
            source: sourceName, 
            date: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() 
        });
        localStorage.setItem("upload_history", JSON.stringify(uploadHistory));
        
        alert(`✅ SUCCESS!\n\n[${sourceName}] has been uploaded and secured for [${selectedRoom}].\n\nTotal Sources Uploaded: ${uploadHistory.length}`);
        
        // Reset Inputs
        document.getElementById("manual-text").value = "";
        document.getElementById('file-name-display').innerHTML = "Tap to select file (PDF, TXT, DOCX)";
        fileInput.value = "";
        
        // Success State
        btn.innerHTML = "<i class='bx bx-check-double'></i> Saved Successfully";
        btn.style.backgroundColor = "var(--correct-color)";
        renderHistory();
        
        // Restore Button
        setTimeout(() => {
            btn.innerHTML = "<i class='bx bx-cog'></i> Process & Save Source";
        }, 2500);
        
    }, 1500);
}

// 5. Render History List
function renderHistory() {
    const historyDiv = document.getElementById("history-list");
    historyDiv.innerHTML = "";
    
    if(uploadHistory.length === 0) {
        historyDiv.innerHTML = `<p style="text-align:center; color: var(--text-muted);">No sources uploaded yet.</p>`;
        return;
    }

    // Show newest first
    const reversedHistory = [...uploadHistory].reverse();
    
    reversedHistory.forEach(item => {
        historyDiv.innerHTML += `
            <div style="background: var(--bg-color); padding: 10px 15px; border: 1px solid var(--border-color); border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <strong style="color: var(--primary-color);">${item.room}</strong> <br>
                    <small style="color: var(--text-muted);">${item.source}</small>
                </div>
                <span style="color: var(--correct-color); font-size: 0.75rem; text-align: right;">${item.date}</span>
            </div>
        `;
    });
}

// 6. Change Password Logic
function changePassword() {
    const oldPass = document.getElementById("old-pass").value;
    const newPass = document.getElementById("new-pass").value;
    const msg = document.getElementById("pass-msg");

    if (oldPass !== savedPassword) {
        msg.style.color = "var(--wrong-color)";
        msg.innerText = "Incorrect Current Password!";
        msg.style.display = "block";
        return;
    }

    if (newPass.length < 5) {
        msg.style.color = "var(--wrong-color)";
        msg.innerText = "New password must be at least 5 characters.";
        msg.style.display = "block";
        return;
    }

    localStorage.setItem("admin_password", newPass);
    savedPassword = newPass;

    document.getElementById("old-pass").value = "";
    document.getElementById("new-pass").value = "";
    
    msg.style.color = "var(--correct-color)";
    msg.innerText = "Password updated successfully!";
    msg.style.display = "block";

    setTimeout(() => { msg.style.display = "none"; }, 3000);
}
