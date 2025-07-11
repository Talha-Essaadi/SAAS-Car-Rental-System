
const question_design = document.querySelectorAll(".question-design");
const answers = document.querySelectorAll(".answer-design");

question_design.forEach((question, index) => {
  question.addEventListener("click", () => {
    const answer = answers[index];
    const icon = question.querySelector(".plus-icon");
    const isOpen = answer.style.display === "block";

   
    answers.forEach((ans, i) => {
      ans.style.display = "none";
      const iconReset = question_design[i].querySelector(".plus-icon");
      iconReset.textContent = "+";
    });

   
    if (!isOpen) {
      answer.style.display = "block";
      icon.textContent = "-";
    } 
   
  });
});



