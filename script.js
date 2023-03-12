let questionBtnEl = document.querySelectorAll(".question");

questionBtnEl.forEach((el) => {
  el.addEventListener("click", () => {
    el.children[0].classList.toggle("question-open");
    el.children[1].classList.toggle("arrow-up");

    el.nextElementSibling.classList.toggle("answer-show");
  });
});
