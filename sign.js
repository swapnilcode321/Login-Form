const form = document.querySelector("#signupForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const message = document.querySelector("#message");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (name && email && password) {
        message.textContent = "Form Submitted Successfully ✅";
        message.style.color = "green";
        form.reset();   // form clear ho jayega
    } else {
        message.textContent = "Please fill all fields ❌";
        message.style.color = "red";
    }
});
