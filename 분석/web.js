const toggleBtn = document.querySelector(".hamburger_btn");
const navbar_menu = document.querySelector(".navbar_menu");

toggleBtn.addEventListener("click", () => {
  navbar_menu.classList.toggle("active");
});
