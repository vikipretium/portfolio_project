const mobileMenu = document.getElementById('mobile_menu');
const closeButton = document.getElementById('close_button');
const openButton = document.querySelector('.bt');

function openOverlay(e) {
  mobileMenu.style.display = 'block';
}
function closeOverlay(e) {
  mobileMenu.style.display = 'none';
}
openButton.addEventListener('click', openOverlay);
closeButton.addEventListener('click', closeOverlay);
