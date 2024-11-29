// BURGER MENU
const mobileMenu = document.querySelector(".nav__menu");
const mobileMenuBurger = document.querySelector("#mobileMenuBurguer");

const handleClick = () => {
  if (mobileMenu.classList.contains("nav__menu--closed")) {
    mobileMenu.classList.remove("nav__menu--closed");
    mobileMenu.classList.add("nav__menu");
    mobileMenuBurger.src = "src/assets/icons/menu.svg";
  } else {
    mobileMenu.classList.add("nav__menu--closed");
    mobileMenuBurger.src = "src/assets/icons/cross.svg";
  }
};

mobileMenuBurger.addEventListener("click", handleClick);

const hideNavBar = () => {
  let desktop= window.matchMedia('(min-width: 1000px)')

    if(desktop){
        if(window.scrollY>200){
            document.getElementsByClassName("nav")[0].classList.add("transition-top")
        }else{
            document.getElementsByClassName("nav")[0].classList.remove("transition-top")
        }
    }
}

window.addEventListener('scroll', hideNavBar);
