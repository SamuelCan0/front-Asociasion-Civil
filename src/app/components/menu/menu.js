const navToggle=document.querySelector(".navs-toggle");
const navMenu=document.querySelector(".navs-menu");

navToggle.addEventListener("click",()=>{
  navMenu.classList.toggle("navs-menu_visible");
});
