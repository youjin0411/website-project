const toggleBtn2 = document.querySelector('.nav_toggle');
const nav_list = document.querySelector('.nav_list');

toggleBtn2.addEventListener('click', () => {
  nav_list.classList.toggle('active');
})
 