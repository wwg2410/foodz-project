
let burger = document.querySelector(".header__burger");
let menu = document.querySelector('.header__right');

const clickBurger = () => {
    menu.classList.toggle('active');
}





let form = document.querySelector(".form");

const clickPopup = () => {
  form.classList.toggle("active");
};

form.addEventListener("click", (e) => {
  e.preventDefault();
});


let form__success= document.querySelector(".form__success");

const clickPopup1 = () => {
    form.classList.remove('active')

    form__success.classList.toggle("active");
};

form__success.addEventListener("click", (e) => {
  e.preventDefault();
});