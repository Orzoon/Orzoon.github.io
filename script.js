// variables
window.addEventListener("load", () => {
    //-------------------------------------------------->
    // All the Buttons
    let btnSideMenu = document.querySelector('.sideMenu');
    let btnAbtMe = document.querySelector('.abt_me');
    let btnCloseMenu = document.querySelector('.closeMenuBtn');
    let btncloseSideMenuBtn = document.querySelector('.closeSideMenuBtn');

    // getting all the links
    let sideLink = document.querySelectorAll('.slideLink')
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
    let closeSideMenu = () => {
        let sideMenuNav = document.querySelector('.sideMenuNav');
        // to orignal place
        sideMenuNav.style.right = "-150%";

         // displaying the button
         btnSideMenu.classList.remove('btnSideMenu');
    }

    let sideLinkClicked = (i) => {
        if( i != 0){
            closeSideMenu();
        }
        else {
            closeSideMenu();
            setTimeout(slideIn,130);
        }
    }
    // MenuBtn
    btnSideMenu.addEventListener('click', slideInNav);
    btnAbtMe.addEventListener('click', slideIn);

    //Event listener for sideLink
    for( i = 0; i < sideLink.length; i++){
        sideLink[i].addEventListener('click', sideLinkClicked.bind(this, i))
    }
    // closing the overlay 
    btnCloseMenu.addEventListener('click', () => {
        let overLayCon = document.querySelector('.overlay');
        // sliding out to original place 
        overLayCon.style.right = "-150%";

        // displaying the button
        btnSideMenu.classList.remove('btnSideMenu');

    })
    // closing the sideNavMenu 
    btncloseSideMenuBtn.addEventListener('click', closeSideMenu)
})

//styling the overlay 
