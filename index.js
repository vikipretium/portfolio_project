const mobileMenu = document.getElementById('mobile-menu');
const closeButton = document.getElementById('close-button');
const openButton = document.querySelector('.bt');
const links = document.querySelectorAll('.mobile-menu li > a');
function openOverlay() {
  mobileMenu.style.display = 'block';
}
function closeOverlay() {
  mobileMenu.style.display = 'none';
}
openButton.addEventListener('click', openOverlay);
closeButton.addEventListener('click', closeOverlay);
links.forEach((node) => node.addEventListener('click', closeOverlay));