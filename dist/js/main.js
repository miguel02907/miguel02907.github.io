const heroForm = document.querySelector(".form");
const correctAnswers = ["A", "A", "A", "A", "A", "A"];
const showScore = document.querySelector(".score-sec ");

heroForm.addEventListener("submit", function(e) {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    heroForm.q1.value,
    heroForm.q2.value,
    heroForm.q3.value,
    heroForm.q4.value,
    heroForm.q5.value,
    heroForm.q6.value
  ];
  scrollTo(0, 0);

  userAnswers.forEach(function(answer, index) {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  //animation
  let output = 0;
  const timer = setInterval(function() {
    showScore.querySelector("span").textContent = `${output}%`;
    showScore.classList.remove("d-none");
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 40);
});
