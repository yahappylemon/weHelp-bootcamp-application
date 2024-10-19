const tabBtns = [...document.querySelectorAll("[data-tab]")];
const jumpBtns = [...document.querySelectorAll("[data-jump]")];
const urls = [...document.querySelectorAll("[data-url]")];
const texts = [...document.querySelectorAll("[data-text]")];

let currentQuestion = 0;

// 調整題數
function handleQuestionState(index) {
  if (index === "minus") {
    currentQuestion--;
    currentQuestion = String((currentQuestion + 7) % 7);
  } else if (index === "plus") {
    currentQuestion++;
    currentQuestion = String((currentQuestion + 7) % 7);
  } else {
    currentQuestion = index;
  }
  updateUI();
}

// 更新畫面
function updateUI() {
  // 標籤列：切換題目
  tabBtns.filter((btn) =>
    btn.dataset.tab === currentQuestion
      ? btn.classList.add("active-tab")
      : btn.classList.remove("active-tab")
  );
  // 網址列：顯示題目
  urls.filter((url) =>
    url.dataset.url === currentQuestion
      ? url.classList.add("active-url")
      : url.classList.remove("active-url")
  );
  // 答案區
  texts.filter((txt) =>
    txt.dataset.text === currentQuestion
      ? txt.classList.add("active-text")
      : txt.classList.remove("active-text")
  );
}

tabBtns.forEach((btn) => {
  btn.addEventListener("click", (e) =>
    handleQuestionState(e.currentTarget.dataset.tab)
  );
});

jumpBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleQuestionState(e.currentTarget.dataset.jump);
  });
});
