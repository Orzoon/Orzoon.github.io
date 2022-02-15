console.log("start")
window.location.replace("https://orzoon-portfolio.herokuapp.com/")
// variables
window.addEventListener("load", () => {
    let preloader = document.querySelector('.loader');
    let bodyContainer = document.querySelector('.bodyContainer');
    let canvas = document.querySelector('#particles-js');
    setTimeout(() => {
        preloader.style.opacity = "0";
        setTimeout( () => {
            preloader.style.display = "none";
            bodyContainer.style.display = "block";
            particlesJS.load("particles-js", "particles.json", function () {
                console.log('particles loaded');
                })
                setTimeout(() => {
                    var typed = new Typed('#typed', {
                        strings: ['Creative Front-End Developer'],
                        typeSpeed: 8
                      });
                },300);
        },400);
    },2000);
    //-------------------------------------------------->
    let showCommon = document.querySelectorAll('.showCommon');
    let showExp = document.querySelector('.canvasShowCase');
    let typing = document.querySelector('#typed');
    // All the Buttons
    let btnSideMenu = document.querySelector('.sideMenu');
    let btnAbtMe = document.querySelector('.abt_me');
    let btnCloseMenu = document.querySelector('.closeMenuBtn');
    let btncloseSideMenuBtn = document.querySelector('.closeSideMenuBtn');
    
    // getting all the links
    let sideLink = document.querySelectorAll('.slideLink')
    // checking within the viewport helper function
    const isInViewport = (el) => {
        let bounding = el.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    // functions
    const slideInNav = () => {
        // sideMenuNav variables
        let sideMenuNav = document.querySelector('.sideMenuNav');
        let secIntro = document.querySelector('.intro').offsetHeight;
            secIntro = secIntro + 30;
        //dynamic height based on intro section
        sideMenuNav.style.height = secIntro+'px';
        sideMenuNav.style.right = '0';
        //removing the btnSideMenu
        btnSideMenu.classList.add('btnSideMenu');
    }
    const slideIn = () => {
        //getting slide in variables
        let overLayCon = document.querySelector('.overlay');
        let secIntro = document.querySelector('.intro').offsetHeight;
        secIntro = secIntro + 30;
        //dynamic height based on intro section
        overLayCon.style.height = secIntro+'px';
        overLayCon.style.right = '0';
        //removing the btnSideMenu
        btnSideMenu.classList.add('btnSideMenu');
    }
    const closeSideMenu = () => {
        let sideMenuNav = document.querySelector('.sideMenuNav');
        // to orignal place
        sideMenuNav.style.right = "-150%";

         // displaying the button
         btnSideMenu.classList.remove('btnSideMenu');
    }

    const sideLinkClicked = (i) => {
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
    btncloseSideMenuBtn.addEventListener('click', closeSideMenu);

    // adding the scroll event
    window.addEventListener('scroll', (event) => {
        for(let i = 0 ; i < 4 ; i ++) {
            if(isInViewport(showCommon[i])) {
                showCommon[i].classList.add("scrollOpacity");
                showCommon[i].classList.add("scrollMotion")
            }
        }
        if(isInViewport(showExp)){
            showExp.classList.add("scrollOpacity");
            showExp.classList.add("scrollMotion");
        }
    })
})
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

//styling the overlay 
