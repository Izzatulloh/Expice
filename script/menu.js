class Menu {
    constructor(options) {
        if (typeof options.left__rotate == "string" || typeof options.right__rotate == 'string' || typeof options.last == 'string' || typeof options.menu == 'string' || typeof options.first == 'string' || typeof options.nav == 'string'
        ) {
            this.last = document.querySelector(options.last)
            this.nav = document.querySelector(options.nav)
            this.right__rotate = document.querySelector(options.right__rotate)
            this.left__rotate = document.querySelector(options.left__rotate)
            this.menu = document.querySelector(options.menu)
            this.first = document.querySelector(options.first)
            this.nav = document.querySelector(options.nav)
        } else if (options.left__rotate instanceof HTMLElement || options.right__rotate instanceof HTMLElement || options.menu instanceof HTMLElement || options.last instanceof HTMLElement || options.first instanceof HTMLElement) {
            this.left__rotate = options.left__rotate
            this.last = options.last
            this.right__rotate = options.right__rotate
            this.menu = options.menu
            this.first = options.first
            this.nav = options.nav
        }

        this.menu.addEventListener('click', () => {
            this.left__rotate.classList.toggle("active");
            this.left__rotate.style.transition = `500ms linear`;
            this.right__rotate.classList.toggle("active");
            this.right__rotate.style.transition = `500ms linear`;
            this.last.classList.toggle("active");
            this.last.style.transition = `500ms linear`;
            this.first.classList.toggle("active");
            this.first.style.transition = `500ms linear`;
            this.nav.classList.toggle("active");
            this.nav.style.transition = `500ms linear`;
            this.menu.classList.toggle("active");
            this.menu.style.transition = `500ms linear`;
            

        })
      

        
    }
}
console.log(Menu);


const Nav = new Menu({
    first: ".first__icon",
    last: ".third__icon",
    left__rotate: ".first__rotate",
    right__rotate: ".sec__rotate",
    menu: ".menu",
    nav: '.header__nav-item'
})