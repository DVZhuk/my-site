let upButton = document.querySelector('.up-button');
let theme = document.querySelector('.theme');
let themeButton = document.querySelector('.themes');
let themeText = document.querySelector('.theme-text');
let nans = document.querySelectorAll('.nan')
// Ключ памяти темы
let key = localStorage.getItem('key');
if (key == 'theme light-theme') {
  theme.classList.add('light-theme');
  themeText.textContent = 'Тёмная тема';
  for (let nan of nans) {
  nan.src = 'source/crap_1.png' };
};


themeButton.onclick = function () {
  theme.classList.toggle('light-theme');
  if (theme.classList.contains('light-theme')) {
    themeText.textContent = 'Тёмная тема';
    for (let nan of nans) {
    nan.src = 'source/crap_1.png' };
  } else {
    themeText.textContent = 'Светлая тема';
    for (let nan of nans) {
    nan.src = 'source/crap_2.png' };
  };
  // Сохранение в память состаяния класса темы
  localStorage.setItem('key', theme.classList);
};

window.onscroll = function () {
  if (window.pageYOffset > 2000) {
    upButton.classList.add('shown');
  } else {
    upButton.classList.remove('shown')
  };
};

upButton.onclick = function () {
  window.scrollTo(0, 0)
};
