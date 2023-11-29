const navMenu = document.querySelector('.right');
const links = navMenu.querySelectorAll('a');
const menu =  document.querySelector('.menu');
const closeMenu = document.querySelector('.cross');
const mainContainer = document.querySelector('.main-container');
const overlay = document.querySelector('.overlay');

const closeMenuAct = function(){
    menu.classList.add('hidden');
        mainContainer.classList.remove('overlay');
        overlay.classList.add('hidden');
}
const openMenuAct =  function(){
    overlay.classList.remove('hidden');
        menu.classList.remove('hidden');
}

//Functionalities
const mobileActions = function(){
    navMenu.addEventListener('click', openMenuAct); 
    closeMenu.addEventListener('click', closeMenuAct);
}
const desktopActions = function(){
    closeMenuAct();
}
const checkIsMobile = function(){
    const isMobile = window.matchMedia('(max-width:650px)').matches;
    isMobile? mobileActions() : desktopActions();
}
document.addEventListener('DOMContentLoaded', checkIsMobile);
window.addEventListener('resize', checkIsMobile);



  

  