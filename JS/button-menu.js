var mls       = document.querySelector(".menu-links");
var menuPage  = document.querySelector(".menu");
const icnMenu = document.querySelector('.menu-icon');
var content = document.querySelector(".content");

mls.style.visibily = "hidden";
mls.style.display  = "none";

var isActive = false;

icnMenu.addEventListener('click', () => {

   if (isActive == false) {
      icnMenu.classList.toggle('active');
      
      content.style  = "animation: project-page-1_transform-transition-fade_in .5s cubic-bezier(0,.31,0,1);";
      mls.style      = "animation: project-page-1_transform-transition-fade_out .5s cubic-bezier(0,.31,0,1);";
      menuPage.style = "animation : menu-background-transition-in .5s cubic-bezier(0,.31,0,1);";

      menuPage.style.height = "100%";
      menuPage.style.width = "100%";
      setTimeout(openMenu, 400);

   }
   else {
      icnMenu.classList.toggle('active');

      mls.style      = "animation: project-page-1_transform-transition-fade_in .5s cubic-bezier(0,.31,0,1);";
      content.style  = "animation: project-page-1_transform-transition-fade_out .5s cubic-bezier(0,.31,0,1);";
      menuPage.style = "animation : menu-background-transition-out .5s cubic-bezier(0,.31,0,1);";

      setTimeout(closeMenu, 400);
   }
})

$(".home-btn").click((e) => {
   icnMenu.classList.toggle('active');
   isActive = false;
   menuPage.style = "animation : menu-background-transition-out .5s cubic-bezier(0,.31,0,1);";
})

$(".project-btn").click((e) => {
   icnMenu.classList.toggle('active');
   isActive = false;
   menuPage.style = "animation : menu-background-transition-out .5s cubic-bezier(0,.31,0,1);";
})

$(".about-btn").click((e) => {
   icnMenu.classList.toggle('active');
   isActive = false;
   menuPage.style = "animation : menu-background-transition-out .5s cubic-bezier(0,.31,0,1);";
})


function openMenu() {

   mls.style.visibily = "visible";
   mls.style.display = "block";

   content.style.visibily = "hidden";
   content.style.display = "none";

   menuPage.style.background = "rgba(0, 0, 0, 0.2)";

   isActive = true;
}

function closeMenu() {

   mls.style.visibily = "hidden";
   mls.style.display = "none";
   mls.style.opacity = 0;

   isActive = false;
}
