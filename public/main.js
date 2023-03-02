
    // const toggleNavBtn = document.getElement('btn-toggle-nav');
    // const navMenu = document.getElement('nav-sidebar');
    
    // toggleNavBtn.addEventListener('click', () => {
    //   navMenu.classList.toggle('open');
    // });
    
let toggleNavStatus = false;
let toggleNav = function(){
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarTitle = document.querySelectorAll(".nav-sidebar span");

  if(toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebarUl.style.width = "272px";
    // getSidebarUl.style.opacity = "0.5";

    let arrayLength = getSidebarTitle.length;
    for(let i = 0; i < arrayLength; i++) {
      getSidebarTitle[i].style.opacity = "1"; 
    }

    toggleNavStatus = true;
  } else {
    getSidebarUl.style.width = "50px";
    // getSidebarUl.style.opacity = "1";

    let arrayLength = getSidebarTitle.length;
    for(let i = 0; i < arrayLength; i++) {
      getSidebarTitle[i].style.opacity = "0"; 
    }
    getSidebarUl.style.visibility = "hidden";

    toggleNavStatus = false;
  }
};