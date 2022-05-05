export const burgerMenu = () => {
    const burgerBtn = document.querySelector('[data-menu-button]');
    const langBtn = document.querySelector('[data-lang]');
    const menu = document.querySelector('[data-menu]');
    
    

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('is-open')
        langBtn.classList.toggle('is-visible')
        menu.classList.toggle('is-open')
    })
}