document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Error spans
    const usernameError = document.getElementById("username-error");
    const passwordError = document.getElementById("password-error");

    // Reset errors
    usernameError.textContent = "";
    passwordError.textContent = "";

    let valid = true;

    // Validation
    if (username === "") {
        usernameError.textContent = "Username is required.";
        valid = false;
    } else if (username.length < 4) {
        usernameError.textContent = "Username must be at least 4 characters.";
        valid = false;
    }

    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        valid = false;
    }

    // Feedback message
    let feedback = document.getElementById("feedback");
    if (!feedback) {
        feedback = document.createElement("div");
        feedback.id = "feedback";
        document.querySelector(".container").appendChild(feedback);
    }

    if (valid) {
        feedback.textContent = "✅ Login successful!";
        feedback.className = "success";

        // Redirect to welcome.html after 1s
        setTimeout(() => {
            window.location.href = "welcome.html?user=" + encodeURIComponent(username);
        }, 1000);

    } else {
        feedback.textContent = "❌ Please fix the errors above.";
        feedback.className = "error";
    }
});
