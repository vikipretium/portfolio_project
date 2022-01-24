const mobile_menu = document.getElementById("mobile_menu");
const close_button = document.getElementById("close_button");
const open_button = document.getElementById("bt")
function open_overlay(){
    mobile-menu-overlay.style.width = 100%;
}
function close_overlay(){
    mobile-menu-overlay.style.width = 0%;
}
mobile_menu.addEventListener('click',() => open_overlay())
close_button.addEventListener('click',() => close_overlay())

