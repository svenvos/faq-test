const faqContainer = document.getElementById("faq-container");
let openAnswer = "";

faqContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "DIV" || e.target.tagName === "P") {
        return;
    }

    let questionContainer = e.target.parentElement;
    let arrow = questionContainer.querySelector("i");
    let listItem = questionContainer.parentElement;
    let answerToShow = listItem.querySelector("p");

    if (openAnswer && openAnswer !== answerToShow) {
        let openArrow = openAnswer.parentElement.querySelector("i");
        openAnswer.classList.toggle("toggle-answer");
        openArrow.classList.toggle("arrow-reverse");
    }

    showAnswer(answerToShow, arrow);

    if (answerToShow.classList.contains("toggle-answer")) {
        openAnswer = answerToShow;
    } else {
        openAnswer = "";
    }
});

function showAnswer(answerToShow, arrow) {
    answerToShow.classList.toggle("toggle-answer");
    arrow.classList.toggle("arrow-reverse");
}

