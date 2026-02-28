const passwordinput = document.querySelector('#password')
const nameinput = document.querySelector("#name")
const emailinput = document.querySelector("#Email")
const btn2 = document.querySelector("#btn2")

btn2.addEventListener('click', function (e) {
    e.preventDefault();

    const name = (nameinput.value.trim());
    const password = (passwordinput.value.trim());
    const Email = (emailinput.value.trim())

    if (name !== "" && password !== "" && Email !== "") {
        message.textContent = "Form Submitted Successfully ✅";
        message.style.color = "green";

    } else {
        message.textContent = 'Something missing ❌'
        message.style.color = 'red'
    }
})