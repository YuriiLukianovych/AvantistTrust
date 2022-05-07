export const burgerMenu = () => {
   const burgerBtn = document.querySelector('[data-menu-button]');
   const langBtn = document.querySelector('[data-lang]');
   const menu = document.querySelector('[data-menu]');
   const linksList = document.querySelectorAll('[data-link]');

   //відкриття\закриття мобільного меню по кліку на бургер-кнопку
   burgerBtn.addEventListener('click', () => {
      burgerBtn.classList.toggle('is-open');
      langBtn.classList.toggle('is-visible');
      menu.classList.toggle('is-open');
      document.body.classList.toggle('is-blocked');
   });

   // закриття мобільного меню при кліку на елемент меню
   linksList.forEach(link => {
      link.addEventListener('click', () => {
         burgerBtn.classList.remove('is-open');
         langBtn.classList.remove('is-visible');
         menu.classList.remove('is-open');
         document.body.classList.remove('is-blocked');
      });
   });
};
