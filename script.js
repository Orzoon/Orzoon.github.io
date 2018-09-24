// variables
window.addEventListener("load", () => {
    //-------------------------------------------------->
    // First Section Variables
    let btnSideMenu = document.querySelector('.sideMenu');
    let btnAbtMe = document.querySelector('.abt_me');
    let btnCloseMenu = document.querySelector('.closeMenuBtn')
    // functions 

    let slideInNav = () => {
        // sideMenuNav variables
        let sideMenuNav = document.querySelector('.sideMenuNav');
        let secIntro = document.querySelector('.intro').offsetHeight;
        //dynamic height based on intro section
        sideMenuNav.style.height = secIntro+'px';
        sideMenuNav.style.right = '0';
        //removing the btnSideMenu
        btnSideMenu.classList.add('btnSideMenu');
    }
    let slideIn = () => {
        //getting slide in variables
        let overLayCon = document.querySelector('.overlay');
        let secIntro = document.querySelector('.intro').offsetHeight;
        //dynamic height based on intro section
        overLayCon.style.height = secIntro+'px';
        overLayCon.style.right = '0';
        //removing the btnSideMenu
        btnSideMenu.classList.add('btnSideMenu');
    }
    // MenuBtn
    btnSideMenu.addEventListener('click', slideInNav);
    btnAbtMe.addEventListener('click', slideIn);

    // closing the overlay 
    btnCloseMenu.addEventListener('click', () => {
        let overLayCon = document.querySelector('.overlay');
        // sliding out to original place 
        overLayCon.style.right = "-150%";

        // displaying the button
        btnSideMenu.classList.remove('btnSideMenu');

    })

    window.addEventListener('scroll', (e) => {
        let scrolled = window.pageYOffset;
        
    })
})

//styling the overlay 
