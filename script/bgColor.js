class Back {
    constructor(element) {
        this.User = document.querySelector(element.User);
        this.root = document.querySelector(':root');
        // this.rootStyles = getComputedStyle(this.root);
        this.User__menu = document.querySelector(element.User__menu);
        this.green = document.querySelector(element.green);
        this.red = document.querySelector(element.red);
        this.nav__title = document.querySelector(element.nav__title);
        document.documentElement.style.setProperty('--red', localStorage.getItem('red')) 
        document.documentElement.style.setProperty('--rgba', localStorage.getItem('rgba')) 
        // console.log(this.rootStyles.getPropertyValue('--red'));
        this.User.addEventListener('click', () => {
            this.User__menu.classList.toggle("active");
            this.User__menu.style.transition = `500ms linear`;
        })
        this.green.addEventListener('click', ()=>{
           this.root.style.setProperty('--red', '#35CD8C') 
           this.root.style.setProperty('--rgba', 'rgba(55, 205, 140,0.7)') 
           localStorage.setItem('red', '#35CD8C');
           localStorage.setItem('rgba','rgba(55, 205, 140,0.7)')
                
        })
        
        this.red.addEventListener('click', ()=>{
         this.root.style.setProperty('--red', '#FE043C')
            // this.root.style.setProperty('--rgba', 'rgba(55, 205, 140,0.7)') 
            this.root.style.setProperty('--rgba', 'rgba(216, 34, 69, 0.7)') 
            localStorage.setItem('red', '#FE043C');
            localStorage.setItem('rgba','rgba(216, 34, 69, 0.7)')
            
        })
   
        
    }
}

const User = new Back({
    User: ".user__icon__info ",
    User__menu: ".user__menu",
    green: ".green",
    red: ".red",
    nav__title: ".nav__title"
})

 