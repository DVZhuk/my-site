let upButton = document.querySelector('.up-button');
let theme = document.querySelector('.theme');
let themeButton = document.querySelector('.themes');
let themeText = document.querySelector('.theme-text')

themeButton.onclick = function () {
  theme.classList.toggle('light-theme');
  if (theme.classList.contains('light-theme')) {
    themeText.textContent = 'Тёмная тема';
  } else {
    themeText.textContent = 'Светлая тема';
  };
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
