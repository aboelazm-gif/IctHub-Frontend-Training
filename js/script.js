const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('close-button');
const verticalMenu = document.getElementById('v-menu');
const navtop = document.getElementById('navtop');

navtop.style.transitionDuration = "0.5s"

menuButton.addEventListener('click', () => {
  navtop.style.left = "0px";
  
});

closeButton.addEventListener('click', () => {
  navtop.style.left = "-200px";

});
