//firebase
//contact form

  // Initialize Firebase
   var config = {
     apiKey: "AIzaSyC9GI5VzTdL6tCGgFXAdJsJv77jYG8-d7k",
     authDomain: "my-portfolio-7ee43.firebaseapp.com",
     databaseURL: "https://my-portfolio-7ee43.firebaseio.com",
     projectId: "my-portfolio-7ee43",
     storageBucket: "my-portfolio-7ee43.appspot.com",
     messagingSenderId: "781284733216"
   };
   firebase.initializeApp(config);
  //End of initialization

  //storage reference
   var database = firebase.database().ref('messages');
  //form
  var contactForm = document.getElementById("contact-form");
  //form-styles-value-variables
  var firstName;
  var email;
  var subject;
  var message;
  //styles-change-varible
  inputstyle =   document.getElementsByTagName("input");
  messagestyle = document.getElementById("message");
  //form submit event listner
  contactForm.addEventListener('submit',submitForm);
  //submitForm
  function submitForm(e){
    e.preventDefault();
    //getting-values
    firstName = document.getElementById("name").value;
    email = document.getElementById("email").value;
    subject = document.getElementById("subject").value;
    message = document.getElementById("message").value;
    //form validation
    validation();
    if(validation()){
     saveMessage(firstName,email,subject,message);
   }
  };
  //form validaiton
  function validation(){
    var num;
    var mun;
    var pname = /^[a-zA-Z]+$/;
    var pemail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    //Name condition
    if(!firstName.match(pname) || firstName == ""){
      inputstyle[0].style.borderBottom = "1px solid red";
      num = 0;
    }
    else{
      inputstyle[0].style.borderBottom = "1px solid #65F8C7";
      num = 1;
    }
    //email condition
    if(!email.match(pemail) || email == ""){
      inputstyle[1].style.borderBottom = "1px solid red";
      mun = 0;
    }
    else{
        inputstyle[1].style.borderBottom = "1px solid #65F8C7";
        num = 1;
    }
    //Subject
    if(subject == ""){
      inputstyle[2].style.borderBottom = "1px solid red";
      num = 0;
    }
    else{
        inputstyle[2].style.borderBottom = "1px solid #65F8C7";
        num = 1;
    }
    //message
    if(message == ""){
      messagestyle.style.borderBottom = "1px solid red";
      num = 0;
    }
    else{
      messagestyle.style.borderBottom = "1px solid #65F8C7";
      num = 1;
    }
   //returning
    if(num == 0  || mun == 0){
      return false;
    }
    else{
      return true;
    }
  };
  //save message to firebase
  function saveMessage(firstName,email,subject,message){
    var newdatabase = database.push();
    newdatabase.set({
     Name: firstName,
     email: email,
     subject: subject,
     message: message
    })
    .then(function(){
      var Btn = document.getElementById("submit");
      var span1 = document.getElementById("span1");
      var span2 = document.getElementById("span2");
      var span3 = document.getElementById("span3");
      span1.style.display = "none";
      span2.style.display = "inline-block";
      //Btn.innerText = "sent";
      //Btn.style.background = "#08fdd8";
      //Btn.style.color = "#252627";


      setTimeout(function(){
        span2.style.display = "none";
        span3.style.display = "inline-block";
        console.log("second");
        setTimeout(function(){
          contactForm.reset();
          inputstyle[0].style.borderBottom = "none";
          inputstyle[1].style.borderBottom = "none";
          inputstyle[2].style.borderBottom = "none";
          messagestyle.style.borderBottom = "none";
          span3.style.display = "none";
          span1.style.display = "inline-block";


        },2500);
      },3000);
    })
    .catch(function(error){
      console.log("failed");
    })

  };








//------------------------------------------>
//------------------------------------------>
//------------------------------------------>
//NAV---variables
  var menuIcon = document.getElementById('menu-icon');
  var navSide = document.getElementById('navside');
  //LOADER--VARIABLES
  var loader = document.getElementById("loader");
  var progress = document.getElementById("progressbar");
  //EventListener
  menuIcon.addEventListener('click',navShowHide);
 // setting to 0
 //navside.style.width = "0px"



  //menustate--for menu
  var menuState = 0;
  //--NAV--FUNCTION
  function navShowHide(){
    if(menuState == 0){
      menuState = 1;
      navside.style.right = "0";
      navside.style.transition = "right 100ms";
      menuIcon.style.color = "#65F8C7";
    }
    else{
      menuState = 0;
      navside.style.right = "-100%";
      navside.style.transition = "0s";
      menuIcon.style.color = "#fff";
    }
  }
//-------------------------------------->
//------------------->
//----DISPLAY CONTAINERS
var navSideLinks = document.getElementsByClassName("navsidelinks");
var box = document.getElementsByClassName('box');

//Variable
//home-btn
var btnHome= document.querySelector(".c-button").addEventListener('click',displayboxContact);
//variables---other
var boxHome = document.getElementById("box-home");
var boxAbtme = document.getElementById("box-abt-me");
var boxSkills = document.getElementById("box-skills");
var boxWork = document.getElementById("box-work");
var boxContact = document.getElementById("box-contact");
//--TO BOXHOME
navSideLinks[0].addEventListener('click',displayboxHome);
navSideLinks[1].addEventListener('click',displayboxAbtme);
navSideLinks[2].addEventListener('click',displayboxSkills);
navSideLinks[3].addEventListener('click',displayboxWork);
navSideLinks[4].addEventListener('click',displayboxContact);
//FUNCTION
//--->DISPLAYBOXHOME
function displayboxHome(){
  //effect
  effect();
  //box-delaying
  setTimeout(function(){
    navSideLinks[0].style.color = "rgb(8,253,216)";
    navSideLinks[1].style.color = "#444";
    navSideLinks[2].style.color ="#444";
    navSideLinks[3].style.color = "#444";
    navSideLinks[4].style.color = "#444";
    //DISPLAY
    boxHome.style.display = "block";
    boxAbtme.style.display = "none";
    boxSkills.style.display = "none";
    boxWork.style.display = "none";
    boxContact.style.display = "none";
  },1500);

}
//--->DISPLAYBOXABTME
function displayboxAbtme(){
  //EFFECT
  effect();
  //box-delaying
  setTimeout(function(){
    navSideLinks[0].style.color = "#444";
    navSideLinks[1].style.color = "rgb(8,253,216)";
    navSideLinks[2].style.color ="#444";
    navSideLinks[3].style.color = "#444";
    navSideLinks[4].style.color = "#444";
    //DISPLAY
    boxAbtme.style.display = "block";
    boxHome.style.display = "none";
    boxSkills.style.display = "none";
    boxWork.style.display = "none";
    boxContact.style.display = "none";
  },1500);

}
//--->DISPLAYBOXSKILLS
function displayboxSkills(){
  //EFFECT
  effect();
  //box-delaying
  setTimeout(function(){
    navSideLinks[0].style.color = "#444";
    navSideLinks[1].style.color = "#444";
    navSideLinks[2].style.color ="rgb(8,253,216)";
    navSideLinks[3].style.color = "#444";
    navSideLinks[4].style.color = "#444";
    //DISPLAY
    boxSkills.style.display = "block";
    boxAbtme.style.display = "none";
    boxHome.style.display = "none";
    boxWork.style.display = "none";
    boxContact.style.display = "none";
  },1500);
}
//--->DISPLAYBOXWORK
function displayboxWork(){
  //EFFECT
  effect();
  //box-delaying
  setTimeout(function(){
    navSideLinks[0].style.color = "#444";
    navSideLinks[1].style.color = "#444";
    navSideLinks[2].style.color ="#444";
    navSideLinks[3].style.color = "rgb(8,253,216)";
    navSideLinks[4].style.color = "#444";
    //DISPLAY
    boxWork.style.display = "block";
    boxSkills.style.display = "none";
    boxAbtme.style.display = "none";
    boxHome.style.display = "none";
    boxContact.style.display = "none";
  },1500);
}
//--->DISPLAYBOXCONTACT
function displayboxContact(){
  //EFFECT
  effect();
  //box-delaying
  setTimeout(function(){
    navSideLinks[0].style.color = "#444";
    navSideLinks[1].style.color = "#444";
    navSideLinks[2].style.color ="#444";
    navSideLinks[3].style.color = "#44";
    navSideLinks[4].style.color = "rgb(8,253,216)";
    //DISPLAY
    boxWork.style.display = "none";
    boxSkills.style.display = "none";
    boxAbtme.style.display = "none";
    boxHome.style.display = "none";
    boxContact.style.display = "block";

  },1500);
}
//-->>>>>>>>>>>>>>>>>>>>>>>
//->>>>>>>>>>>>>>>>>>>>>>>>
//------------------------->
//-----EFFECT-------//
function effect(){
  right();

  if(right()){
    loading();
    setTimeout(function(){
      loader.style.left = "100%";
      setTimeout(function(){
        fix();
      },100)
    },4500);
  }
}
function right(callback){
  loader.style.left = "0%";
  loader.style.transition = "100ms ease-in";
  return true;
}
function fix(){
  loader.style.left = "-100%";
  loader.style.transition = "0s";
  progress.style.width = "0%";
  progress.style.transition = "0s";
}
function loading(){
  progress.style.width = "100%";
  progress.style.animation= "progressbar";
  progress.style.transition = "4s";
};


//--CONTACT-FORM------>
//varibales
