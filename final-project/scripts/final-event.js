document.addEventListener('DOMContentLoaded', () => {
    const subButton = document.getElementById('submitquestion');
    const questionInput = document.getElementById('questioninput');
    const emailInput = document.getElementById('email-input');
    const confirMessage = document.getElementById('confirmessage');

    subButton.addEventListener('click', () => {
        const question = questionInput.value.trim();
        const email = emailInput.value.trim();


        console.log("Question or Response submitted:", question);
        if (email) console.log("Email provided:", email);
        else console.log("No email provided.");

        questionInput.value = "";
        emailInput.value = "";

        confirMessage.classList.remove('hidden')
        questionInput.classList.add('hide');

        setTimeout(() => {
            confirMessage.classList.add('hidden');
            questionInput.classList.remove('hide');
        }, 3000);
    });
});
