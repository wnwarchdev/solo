function toggleMenu(visible) {
  document.querySelector('nav').classList.toggle('nav-expand', visible)
  console.log('worked!');
}


document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu()
});
